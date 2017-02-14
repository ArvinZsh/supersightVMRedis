var Pagination = ReactBootstrap.Pagination;
var Input = window.Input||ReactBootstrap.Input;
var key = 10000;

var SendMsg = React.createClass({
		getInitialState: function getInitialState() {
			return {
				data:[],
				pagecount:0,
				pageNo:1,
				pageSize:15,
				item:['全部','已发布','未发布','草稿'],
				imgList:[],
				ue:"",
				timeFrom:"",
				timeTo:"",
				dataList:[],
				newsId:"",
			};
	    },
	    componentWillMount:function(){
			var ue = UE.getEditor('UeGetEditor');
			this.state.ue = ue;
	    },
		handleSelect:function(event, selectedEvent){
			key = "default";
			var sid = getCookie("sid");
			var sendMsg_search = $(".sendMsg_search").val();
			var statusCode = $(".sendMsg_select").val()=="全部"?"":$(".sendMsg_select").val();
			this.state.pageNo=selectedEvent.eventKey;
			var rules = {"sid":sid,"timeFrom":this.state.timeFrom,"keyword":sendMsg_search,"timeTo":this.state.timeTo,"statusCode":statusCode,"pageNo":selectedEvent.eventKey,"pageSize":this.state.pageSize};
			var tmp = JSON.stringify(rules);
			$.ajax({
				url:common_ip+"publicNews.do?action=list",
				dataType:'json',
				data:tmp,
				type:'post',
				contentType:"application/x-www-form-urlencoded",
				success: function(ret){
					if(ret.successFlag){
						this.setState({data:ret.pager.list});
						this.setState({pagecount:ret.pager.totalCount});
					}else{
						layer.alert("查询失败"+ret.errorMsg,{icon:2});
					}
				}.bind(this),
				error: function(request, state, error){
					layer.alert(error);
					console.error(this.props.url, state, error.toString());
				}.bind(this)
			});
		},
	    loadingList:function(obj){
			var _this = this;
			$("body").keydown(function(e) {
				if (e.keyCode == "13") {//keyCode=13是回车键
					$('.sendMsg_button').click();
				}
			});
			var mydateInput = document.getElementById("sendMsg_text");
			var time = new Date().Format("yyyy-MM-dd");
			var time=new Date().GetDate(10);
			mydateInput.value=time;

			var mydateInput2 = document.getElementById("sendMsg_text1");
			var time2 = new Date().Format("yyyy-MM-dd");
			mydateInput2.value=time2;
			this.state.timeFrom = time;
			this.state.timeTo = time2;
			var sendMsg_search = $(".sendMsg_search").val();
			var statusCode = $(".sendMsg_select").val()=="全部"?"":$(".sendMsg_select").val();
			var sid = getCookie("sid");
			var rules = {"sid":sid,"timeFrom":time,"timeTo":time2,"statusCode":statusCode,"pageNo":this.state.pageNo,"pageSize":this.state.pageSize,"keyword":sendMsg_search};
			var tmp = JSON.stringify(rules);
			$.ajax({
				url:common_ip+"publicNews.do?action=list",
				dataType:'json',
				data:tmp,
				type:'post',
				contentType:"application/x-www-form-urlencoded",
				success: function(ret){
					if(ret.successFlag){
						if(ret.pager.list == null || ret.pager.list.length == 0){
							layer.msg("当前没有列表数据!",{icon:7});
							$(".input_time").text("");
							$(".input_title").text("");
							$(".input_author").text("");
							$(".sendMsg_textarea").text("");
							$(".sendMsg_img")[0].src = "";
							$(".sendMsg_img")[0].alt = " ";
							$(".sendMsg_img").empty();
							$(".Creation_man").text("");
							$(".Creation_time").text("");
						}
						this.setState({data:ret.pager.list});
						this.setState({pagecount:ret.pager.totalCount});
						if(obj!=undefined){
							if(key == 10000){
								key = 0;
							}
							var trMsg=ret.pager.list[key];
							nsEventBus.eventbus.broadcast("transfer_sendMsg",ret.pager.list[key]);
							_this.state.newsId = ret.pager.list[key].newsId;
							nsEventBus.eventbus.broadcast("transfer_sendMsgKey",key);
							$(".input_time").text(trMsg.publishTimeFormat);
							$(".input_title").text(trMsg.title);
							$(".input_author").text(trMsg.author);
							$(".sendMsg_textarea").text(trMsg.contentFormat);
							var tmp = trMsg.photo;
							$(".sendMsg_img").empty();
							_this.setState({imgList:[]});
							_this.setState({imgList:tmp});
							$(".Creation_man").text(trMsg.creator);
							$(".Creation_time").text(trMsg.createTimeFormat);
						}
					}else{
						layer.alert("查询失败"+ret.errorMsg,{icon:2});
					}
				}.bind(this),
				error: function(request, state, error){
					layer.alert(error);
					console.error(this.props.url, state, error.toString());
				}.bind(this)
			});
		},
		componentDidMount: function(){

			var _this = this;
			nsEventBus.eventbus.on("add_Success","add_Success",function(obj){
				_this.loadingList(obj);
			});
			this.loadingList();
		},
		clickcolor:function(event){
			$('.sendMsg_img').error(function(){
				if($('.sendMsg_img')[0].alt == " "){
					$(this).attr('alt', '');
				}else if($('.sendMsg_img')[0].alt != ""){
					$(this).attr('alt', '失败');
				}
			});
			$('.sendMsg_img').load(function(){
				$(this).attr('alt', '成功');
			});
			var tr = document.getElementsByClassName("sendMsg_tr");
			var index = $(".sendMsg_tr:hover").index();
			if(key != -1 && key != 10000 ){
				$(".sendMsg_tr").removeAttr("style");
			}
			tr[index].style.backgroundColor= "#fffee1";
			key=index;

			if($(".sendMsg_tr").eq(key).text() != "true"){
				var trMsg=this.state.data[key];
				nsEventBus.eventbus.broadcast("transfer_sendMsg",this.state.data[key]);
				this.state.newsId = this.state.data[key].newsId;
				nsEventBus.eventbus.broadcast("transfer_sendMsgKey",index);
				$(".input_time").text(trMsg.publishTimeFormat);
				$(".input_title").text(trMsg.title);
				$(".input_author").text(trMsg.author);
				$(".sendMsg_textarea").text(trMsg.contentFormat);		
				var tmp = trMsg.photo;
				$(".sendMsg_img").empty();
				this.setState({imgList:[]});
				this.setState({imgList:tmp});
				$(".Creation_man").text(trMsg.creator);
				$(".Creation_time").text(trMsg.createTimeFormat);

			}
		},
		findsendMsg:function(){
			var timeFrom = $("#sendMsg_text").val();
			var timeTo = $("#sendMsg_text1").val();
			this.state.timeFrom = timeFrom;
			this.state.timeTo = timeTo;
			var sendMsg_search = $(".sendMsg_search").val();
			var statusCode = $(".sendMsg_select").val()=="全部"?"":$(".sendMsg_select").val();
			var sid = getCookie("sid");
			var rules = {"sid":sid,"timeFrom":timeFrom,"timeTo":timeTo,"statusCode":statusCode,"keyword":sendMsg_search,"pageNo":1,"pageSize":this.state.pageSize};
			var tmp = JSON.stringify(rules);
			$.ajax({
				url:common_ip+"publicNews.do?action=list",
				dataType:'json',
				data:tmp,
				type:'post',
				contentType:"application/x-www-form-urlencoded",
				success: function(ret){
					if(ret.successFlag){
						this.setState({data:ret.pager.list});
						this.setState({pagecount:ret.pager.totalCount});
					}else{
						layer.alert("查询失败"+ret.errorMsg,{icon:2});
					}
				}.bind(this),
				error: function(request, state, error){
					layer.alert(error);
					console.error(this.props.url, state, error.toString());
				}.bind(this)
			});
		},
		releaseMsg:function releaseMsg(isAppendTo){
			var _this = this;
			if(key  == "default" || typeof(this.state.data[0]) == "undefined"){
				layer.alert("请选中一行数据！",{icon:0});
				return;
			}else if(key == 10000){
				this.state.newsId = this.state.data[0].newsId;
			}else{
				this.state.newsId = this.state.data[key].newsId;
			}
			var sid = getCookie("sid");
			var rules = {"sid":sid,"newsId":this.state.newsId};
			var tmp = JSON.stringify(rules);
			$.ajax({
				url:common_ip+"publicNews.do?action=publish",
				dataType:'json',
				data:tmp,
				type:'POST',
				contentType:"application/x-www-form-urlencoded",
				success:function(ret){
					if(ret.successFlag){
						layer.msg("发布成功！",{icon: 1});
						var obj = new Object();
						obj.text = "success";
						obj.key = key;
						nsEventBus.eventbus.broadcast("add_Success",obj);
					}else{
						layer.alert(ret.errorMsg,{icon: 2,title: '错误'});
					}
				}, error:function(request,state,error){
					layer.alert("出现错误了",{icon: 2,title: '错误'});
				}
			});
	},
	deleteSendMsg:function(){
		var _this = this;
		if(key  == "default" || typeof(this.state.data[0]) == "undefined"){
			layer.alert("请选中一行数据！",{icon:0});
			return;
		}else if(key == 10000){
			this.state.newsId = this.state.data[0].newsId;
		}else{
			this.state.newsId = this.state.data[key].newsId;
		}
		var _this = this;
		layer.confirm('您确定要删除吗？', {
				btn: ['确定','取消'] //按钮
			},
			function(index){
				layer.close(index);
				var sid = getCookie("sid");
				var rules = {"sid":sid,"newsId":_this.state.newsId};
				var tmp = JSON.stringify(rules);
				$.ajax({
					url:common_ip+"publicNews.do?action=delete",
					dataType:'json',
					data:tmp,
					type:'POST',
					contentType:"application/x-www-form-urlencoded",
					success:function(ret){
						if(ret.successFlag){
							layer.msg("删除成功！",{icon: 1});
							var obj = new Object();
							obj.text = "success";
							obj.key = 0;
							nsEventBus.eventbus.broadcast("add_Success",obj);
						}else{
							layer.alert(ret.errorMsg,{icon: 2,title: '错误'});
						}
					}, error:function(request,state,error){
						layer.alert("出现错误了",{icon: 2,title: '错误'});
					}
				});
			}
		);
	},
	addWeChat:function(){
		$("#AddWeChatModel").empty();
		ReactDOM.render(React.createElement(SendMsgPoP1,{imgList:[],fontState1:0,fontState2:0,showModal:true}),document.getElementById("AddWeChatModel"));
		UE.delEditor("Aditoror");
		UE.getEditor('Aditoror');
	},
	editWeChat:function(){
		if(key  == "default" || typeof(this.state.data[0]) == "undefined"){
			layer.alert("请选中一行数据！",{icon:0});
			return;
		}
		$("#AddWeChatModel").empty();
		var ImgListTmp = [];
		var obj = new Object();
		obj.fileId =this.state.data[key==10000?0:key].photoId;
		obj.fileName = "";
		obj.filePath = this.state.data[key==10000?0:key].photo;
		if($(".sendMsg_img")[0].alt=="失败"){
			ImgListTmp = [];
		}else{
			ImgListTmp.push(obj);
		}

		ReactDOM.render(React.createElement(SendMsgPoP2,{showModal:true,imgList:ImgListTmp,data:this.state.data[key==10000?0:key],content:this.state.data[key==10000?0:key].contentFormat,title:this.state.data[key==10000?0:key].title,author:this.state.data[key==10000?0:key].author,fontState1:this.state.data[key==10000?0:key].title.length,fontState2:this.state.data[key==10000?0:key].author.length}),document.getElementById("AddWeChatModel"));
		UE.delEditor("Editoror");
		var ue = UE.getEditor('Editoror');
		nsEventBus.eventbus.broadcast("setUeditor_Content",ue);
	},
	render:function render(){
		 	var tmp=[];
		if(key != 10000){
			if(typeof(this.state.imgList)!=undefined&&this.state.imgList!=null){
				tmp.push(React.createElement("img", { className:"sendMsg_img",src:common_ip.substr(0,common_ip.length-1)+this.state.imgList,alt:"图片无法加载或不存在！"}));
			}
		}
		var _this = this;
		if(this.state.pagecount>0){
			var tr = document.getElementsByClassName("sendMsg_tr");
			if(key == 10000){
				nsEventBus.eventbus.broadcast("default_sendMsg",this.state.data[0]);
				nsEventBus.eventbus.broadcast("transfer_sendMsgKey",0);
				tr[0].style.backgroundColor= "#fffee1";
				var trMsg= this.state.data[0];
				if(this.state.data[0]!=undefined){
					this.state.newsId = this.state.data[0].newsId;
					$(".input_time").text(trMsg.publishTimeFormat);
					$(".input_title").text(trMsg.title);
					$(".input_author").text(trMsg.author);
					$(".sendMsg_textarea").text(trMsg.contentFormat);
					var tmp1 = trMsg.photo;
					tmp.push(React.createElement("img", { className:"sendMsg_img",src:common_ip.substr(0,common_ip.length-1)+tmp1}));
					$(".Creation_man").text(trMsg.creator);
					$(".Creation_time").text(trMsg.createTimeFormat);
				}
			}else if(key == "default"){
				$(".sendMsg_tr").removeAttr("style");
				nsEventBus.eventbus.broadcast("transfer_sendMsgKey",1000);
			}else{
				$(".sendMsg_tr").removeAttr("style");
				tr[key].style.backgroundColor= "#fffee1";
			}
		}
			return (
					React.createElement("div",{},
							React.createElement("div",{ className: "sendMsg_div" },
									React.createElement(Input, {id:"sendMsg_text",type:"date", name: "begin"}),
									React.createElement("label",{className: "sendMsg_zhi" },"至"
									),
									React.createElement(Input, {id:"sendMsg_text1",type:"date", name: "end"}),
									 React.createElement(Input, {className:"sendMsg_select",type: "select",ref: "mySelect",onChange: this.handleOnSelect,},
						                this.state.item.map(function (item) {
						                    return React.createElement("option", {eventKey: item}, item);
						                })
						            ),
									React.createElement(Input, { type: "text", className: "sendMsg_search", name: "keyword", placeholder: "关键字" }),
									React.createElement("button", { className: "sendMsg_button",onClick:this.findsendMsg},"搜索"),
									React.createElement("button", {id:"showAddbutton",bsStyle:"info",bsSize:"small",onClick: this.addWeChat },"添加"),
									React.createElement("button", {id:"showEditorbutton",bsStyle:"info",bsSize:"small",onClick: this.editWeChat },"编辑"),
									React.createElement("button", {id:"release_Msg",bsStyle:"info",bsSize:"small",onClick: this.releaseMsg },"发布"),
									React.createElement("button", {id:"delete_Msg",bsStyle:"info",bsSize:"small",onClick: this.deleteSendMsg },"删除")
							),
							React.createElement("table",{id:"sendMsg_table"},
									React.createElement("tr",{className:"sendMsg_th"},
											React.createElement("th",{className:"sendMsg_th"},"创建时间"),
											React.createElement("th",{className:"sendMsg_th"},"标题"),
											React.createElement("th",{className:"sendMsg_th"},"状态")
									),
								React.createElement("tbody",{id:"list"},
									this.state.data.map(function(array){
										return(
											React.createElement("tr",{className:"sendMsg_tr",id:"sendMsg_line",onClick:_this.clickcolor},
												React.createElement("td",{className:"sendMsg_td"},array.createTimeFormat),
												React.createElement("td",{className:"sendtds sendMsg_td"},array.title.length>17?array.title.substr(0, 17)+"...":array.title),
												React.createElement("td",{className:"sendMsg_td"},array.statusCode)
											)
										);
									})
								),
									React.createElement(Pagination, {
										  id:"sendMsg_pagination",
									      prev: true,
									      next: true,
									      first: '首页',
									      last: '尾页',
									      ellcommon_ipsis: true,
									      boundaryLinks: true,
										  items: Math.ceil(this.state.pagecount/this.state.pageSize),
									      maxButtons: 5,
										  activePage: this.state.pageNo,
									      onSelect: this.handleSelect 
									})
							),
									React.createElement("div",{className:"details_div"},
											React.createElement("div",{colspan:"2",className:"details_details"}," 信息详情",
													React.createElement("label",{className:"label_time"},"发布时间:"),
													React.createElement("label",{className:"input_time"})
											),
											React.createElement("div",{className:""},
													React.createElement("div",{className:"sendtitle_div"},
														React.createElement("label",{className:"label_title"},"标题:"),
														React.createElement("div",{type:"text",className:"input_title"})
											),
														React.createElement("div",{className:"sendMsg_picture"},tmp)
											),
											React.createElement("div",{className:"sendauthor_div"},
												React.createElement("label",{className:"label_author"},"作者:"),
												React.createElement("label",{type:"text",className:"input_author"})
											),
											React.createElement("div",{className:"sendtextarea_div"},
												React.createElement("div",{className:"sendMsg_textarea"})
											),
											React.createElement("div",{className:"sendCreation_div"},
												React.createElement("label",{className:"Creation_lman"},"创建人:"),
												React.createElement("label",{type:"text",className:"Creation_man"}),
												React.createElement("label",{className:"Creation_ltime"},"创建时间:"),
												React.createElement("label",{type:"text",className:"Creation_time"})
											),
										React.createElement("div",{id:"UeGetEditor"}),
										React.createElement("div",{id:"AddWeChatModel"})
									)
						)
		);
	}
});
