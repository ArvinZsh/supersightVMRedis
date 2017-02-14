
var Input = window.Input || ReactBootstrap.Input;
var Modal = window.Modal || ReactBootstrap.Modal;
var SendMsgPoP1 = React.createClass({
	getInitialState: function getInitialState() {
        return {
			showModal: this.props.showModal,
			imgList:[],
			fontState1:this.props.fontState1,
			fontState2:this.props.fontState2,
			ue:this.props.ue,
			key:1000,
			uploadState:this.props.uploadState
		};
    },
    componentDidMount: function(){
		var _this = this;
		nsEventBus.eventbus.on("Upload_UploadState","Upload_UploadState",function(msg){
			_this.state.uploadState=msg.state;
		});
		nsEventBus.eventbus.on("UploadImage_update","UploadImage_update",function(imgList){
			_this.setState({imgList:imgList});
		});
    },
    close: function close() {
		var _this = this;
		layer.confirm('您确定要放弃当前操作吗？', {
				btn: ['确定','取消'] //按钮
			},
			function(index){
				layer.close(index);
				_this.setState({showModal:false});
			}
		);
    },
	saveSendMsg:function(){
		var _this = this;
		var ue = UE.getEditor('Aditoror');
		var title = $(".sendMsg_title").val();
		var author = $(".sendMsg_author").val();
		var content = ue.getAllHtml();

		var text = ue.getContentTxt();
		if(this.state.uploadState){
			layer.alert("文件正在上传请稍等");
			return;
		}
		if(this.state.imgList==null||this.state.imgList==""||this.state.imgList.length==0){
			layer.alert("请上传封面图片！",{icon:2,title:"提示"});
			return;
		}
		if(title.length==0){
			layer.alert("请输入标题！",{icon:2,title:"提示"});
			return;
		}
		if(author.length==0){
			layer.alert("请输入作者名称！",{icon:2,title:"提示"});
			return;
		}
		if(text.length==0){
			layer.alert("请输入正文！",{icon:2,title:"提示"});
			return;
		}
		if(title.length>64){
			layer.alert("标题长度不超过64！",{icon:2,title:"提示"});
			return;
		}
		if(author.length>8){
			layer.alert("作者名称不超过8！",{icon:2,title:"提示"});
			return;
		}
		if(text.length>900){
			layer.alert("正文字数不超过900！",{icon:2,title:"提示"});
			return;
		}

		var date = new Date();
		var year =date.getFullYear();
		var month =date.getMonth()+1;
		var day = date.getDate();
		var FomatDate = year+"-"+month+"-"+day;
		var sid = getCookie("sid");
		var creator = getCookie("userName");
		var _this = this;
		var rules = {"sid":sid,"title":title,"author":author,"content":content,"digest":"","photoId":this.state.imgList[0].fileId,"creator":creator};
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"publicNews.do?action=save",
			dataType:'json',
			data:tmp,
			type:'POST',
			contentType:"application/x-www-form-urlencoded",
			success:function(ret){
				if(ret.successFlag){
					layer.msg("保存成功！",{icon: 1});
					_this.setState({showModal:false});
					nsEventBus.eventbus.broadcast("add_Success","success");
					_this.state.imgList = [];
					$("#uploadImage_1s").empty();
				}else{
					layer.alert(ret.errorMsg,{icon: 2,title: '错误'});
				}
			}, error:function(request,state,error){
				layer.alert("出现错误了",{icon: 2,title: '错误'});
			}
		});
		this.setState({ showModal: false });
	},
    save:function ensure(){
		this.saveSendMsg();
    },
    saveAndRelease:function(){
		var _this = this;
		var ue = UE.getEditor('Aditoror');
		var title = $(".sendMsg_title").val();
		var author = $(".sendMsg_author").val();
		var content = ue.getAllHtml();
		var text = ue.getContentTxt();
		if(this.state.imgList==null||this.state.imgList==""||this.state.imgList.length==0){
			layer.alert("请上传封面图片！",{icon:2,title:"提示"});
			return;
		}
		if(title.length==0){
			layer.alert("请输入标题！",{icon:2,title:"提示"});
			return;
		}
		if(author.length==0){
			layer.alert("请输入作者名称！",{icon:2,title:"提示"});
			return;
		}
		if(text.length==0){
			layer.alert("请输入正文！",{icon:2,title:"提示"});
			return;
		}
		if(title.length>64){
			layer.alert("标题长度不超过64！",{icon:2,title:"提示"});
			return;
		}
		if(author.length>8){
			layer.alert("作者名称不超过8！",{icon:2,title:"提示"});
			return;
		}
		if(text.length>900){
			layer.alert("正文字数不超过900！",{icon:2,title:"提示"});
			return;
		}
		var date = new Date();
		var year =date.getFullYear();
		var month =date.getMonth()+1;
		var day = date.getDate();
		var FomatDate = year+"-"+month+"-"+day;

		var sid = getCookie("sid");
		var creator = getCookie("userName");
		var _this = this;
		var rules = {"sid":sid,"title":title,"author":author,"content":content,"digest":"","photoId":this.state.imgList[0].fileId,"creator":creator,"publishFlag":"true"};
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"publicNews.do?action=save",
			dataType:'json',
			data:tmp,
			type:'POST',
			contentType:"application/x-www-form-urlencoded",
			success:function(ret){
				if(ret.successFlag){
						layer.msg("保存且发布成功！",{icon: 1});
					_this.setState({showModal:false});
						nsEventBus.eventbus.broadcast("add_Success","success");
						_this.state.imgList = [];
						$("#uploadImage_1s").empty();
				}else{
					layer.alert(ret.errorMsg,{icon: 2,title: '错误'});
				}
			}, error:function(request,state,error){
				layer.alert("出现错误了",{icon: 2,title: '错误'});
			}
		});
    },
	handleTitle:function(){
			this.setState({fontState1:$(".sendMsg_title").val().length});
			if($(".sendMsg_title").val().length>64){
				$(".jianyi2_text").css("color","red");
			}else{
				$(".jianyi2_text").css("color","#0093DD");
			}
	},
	handleAuthor:function(){
			this.setState({fontState2:$(".sendMsg_author").val().length});
			if($(".sendMsg_author").val().length>8){
				$(".jianyi3_text").css("color","red");
			}else{
				$(".jianyi3_text").css("color","#0093DD");
			}
	},
    render: function render() {
    	 return (
 	            React.createElement("div",{id:"showsendMsg1"},
 	            	React.createElement(Modal,{id:"show_AddsendMsg",show:this.state.showModal,onHide:this.close,animation:true},
 	                React.createElement( Modal.Header,{ className:"showAddTitle",closeButton: true },
 	                    React.createElement(Modal.Title,{ id: "" },"添加消息")
 	                ),
 	                React.createElement( "div",{className:"Modal_div"},

 	                		React.createElement("div",{className:"sendMsg_pop_div"},
 	                				React.createElement("div",{className:"popTitle_div"},
										React.createElement("label",{style:{color:"red", position:"relative",left:"-268px",top: "3px"}},"*"),
	                				 	React.createElement("label",{className:"sendMsg_ltitle"},"标题:"),
	                				 	React.createElement("textarea",{onChange:this.handleTitle,cols:"3",row:"50",className:"sendMsg_title"}),
	                				 	React.createElement("div",{className:"jianyi2_text"},this.state.fontState1+"/64字")
	                				),

	             					React.createElement("div",{className:"popAuthor_div"},
										React.createElement("label",{style:{color:"red", position:"relative",left:" -265px",top: "9px"}},"*"),
		                                React.createElement("label",{className:"sendMsg_lauthor"},"作者:"),
		             					React.createElement(Input,{onChange:this.handleAuthor,type:"text",className:"sendMsg_author"}),
		             					React.createElement("div",{className:"jianyi3_text"},this.state.fontState2+"/8字")
	             					),

	             					React.createElement("div",{className:"popText_div"},
										React.createElement("label",{style:{color:"red", position:"relative",left:" 8px",top: "15px"}},"*"),
		             					React.createElement("label",{className:"sendMsg_ltext"},"正文:"),
		             					React.createElement("div",{className:"editor_overflow"},
		             							React.createElement("div",{id:"Aditoror"})
		             					)
		             				),
		             				React.createElement("div",{className:"popCover_div"},
										React.createElement("label",{style:{color:"red", position:"relative",left:" 5px",top: "112px"}},"*"),
			             				React.createElement("label",{className:"sendMsg_lcover"},"封面:"),
			             				React.createElement("div",{className:"uploadImage_1",id:"uploadImage_1s"},
			             						React.createElement(UploadImage,{imgList:this.state.imgList,successNum:this.state.imgList.length,mulSupported:false,uploadNum:1})
			             				),
			             				React.createElement("div",{className:"jianyi1_text"},"建议图片大小900×500像素")
		             				)
	             		  )
 	                ),
 	               React.createElement(
 	            		  "div",
 	                      null,

 	                     React.createElement(
	 	                          "button",
	 	                          { className:"btn_saves",onClick: this.save,bsStyle:"info",bsSize:"normal" },
	 	                          "保存"
	 	                 ),
	 	                 React.createElement(
							 		"button",
	 	                          { className:"save_release",onClick: this.saveAndRelease,bsStyle:"info",bsSize:"normal" },
	 	                          "保存并发布"
	 	                 )
 	              )
 	             )
 	             )
            );
     }
});
var SendMsgPoP2 = React.createClass({
	 getInitialState: function getInitialState() {
		 if(this.props.imgList!=undefined){
			 return{
				 showModal: this.props.showModal,
				 imgList:this.props.imgList,
				 fontState1:this.props.fontState1,
				 fontState2:this.props.fontState2,
				 ue:this.props.ue,
				 key:1000,
				 uploadState:this.props.uploadState,
				 title:this.props.title,
				 author:this.props.author,
				 content:this.props.content,
				 data:this.props.data,
			 }
		 }
		 return {
			 showModal: this.props.showModal,
			 imgList:[],
			 fontState1:this.props.fontState1,
			 fontState2:this.props.fontState2,
			 ue:this.props.ue,
			 key:1000,
			 uploadState:this.props.uploadState,
			 title:this.props.title,
			 author:this.props.author,
			 content:this.props.content,
			 data:[],
		 };
	 },
	    componentDidMount: function(){
			var _this = this;
			nsEventBus.eventbus.on("transfer_sendMsgKey","transfer_sendMsgKey",function(key){
				if(key == undefined){
					_this.state.key = 0;
				}else{
					_this.state.key = key;
				}
			});
			nsEventBus.eventbus.on("UploadImage_update","UploadImage_update",function(imgList){
				_this.setState({imgList:imgList});
			});
			nsEventBus.eventbus.on("Upload_UploadState","Upload_UploadState",function(msg){
				_this.state.uploadState=msg.state;
			});
			nsEventBus.eventbus.on("setUeditor_Content","setUeditor_Content",function(Ue){
				Ue.addListener("ready", function () {
					Ue.setContent(_this.state.content);
				});
			});
			$("#sendMsg_title").val(_this.state.title);
			$("#sendMsg_author").val(_this.state.author);
			$(".sendMsg_tr").click(function () {
			    var index = $(".sendMsg_tr").index(this);
			    _this.setState({key:index});
			});
			nsEventBus.eventbus.on("transfer_sendMsg","transfer_sendMsg",function(lineData){
				_this.state.data = lineData;
				var obj = new Object();
				obj.fileId = lineData.photoId;
				obj.fileName = "";
				obj.filePath = lineData.photo;
				var tmp = [];
				tmp.push(obj);
				_this.state.imgList = tmp;
			});
			nsEventBus.eventbus.on("default_sendMsg","default_sendMsg",function(defaultData){
				if(defaultData!=undefined){
					_this.state.data = defaultData;
					var obj = new Object();
					obj.fileId = defaultData.photoId;
					obj.fileName = "";
					obj.filePath = defaultData.photo;
					var tmp = [];
					tmp.push(obj);
					_this.state.imgList = tmp;
				}
			});
		},
	close: function close() {
		var _this = this;
		layer.confirm('您确定要放弃当前操作吗？', {
				btn: ['确定','取消'] //按钮
			},
			function(index){
				layer.close(index);
				_this.setState({showModal:false});
			}
		);
	},
		saveSendMsg:function(){
			var _this = this;
			var ue = UE.getEditor('Editoror');
			var title = $("#sendMsg_title").val();
			var author = $("#sendMsg_author").val();
			var content = ue.getAllHtml();
			var text = ue.getContentTxt();
			if(this.state.uploadState){
				layer.alert("文件正在上传请稍等");
				return;
			}
			if(this.state.imgList==null||this.state.imgList==""||this.state.imgList.length==0){
				layer.alert("请上传封面图片！",{icon:2,title:"提示"});
				return;
			}
			if(title.length==0){
				layer.alert("请输入标题！",{icon:2,title:"提示"});
				return;
			}
			if(author.length==0){
				layer.alert("请输入作者名称！",{icon:2,title:"提示"});
				return;
			}
			if(text.length==0){
				layer.alert("请输入正文！",{icon:2,title:"提示"});
				return;
			}
			if(title.length>64){
				layer.alert("标题长度不超过64！",{icon:2,title:"提示"});
				return;
			}
			if(author.length>8){
				layer.alert("作者名称不超过8！",{icon:2,title:"提示"});
				return;
			}
			if(text.length>900){
				layer.alert("正文字数不超过900！",{icon:2,title:"提示"});
				return;
			}

			var date = new Date();
			var year =date.getFullYear();
			var month =date.getMonth()+1;
			var day = date.getDate();
			var FomatDate = year+"-"+month+"-"+day;
			var sid = getCookie("sid");
			var creator = getCookie("userName");
			var _this = this;
			var rules = {"sid":sid,"title":title,"author":author,"newsId":this.state.data.newsId,"content":content,"digest":"","photoId":this.state.imgList[0].fileId,"creator":creator};
			var tmp = JSON.stringify(rules);
			$.ajax({
				url:common_ip+"publicNews.do?action=save",
				dataType:'json',
				data:tmp,
				type:'POST',
				contentType:"application/x-www-form-urlencoded",
				success:function(ret){
					if(ret.successFlag){
						layer.msg("编辑成功！",{icon: 1});
						_this.setState({showModal:false});
						nsEventBus.eventbus.broadcast("add_Success","success");

					}else{
						layer.alert(ret.errorMsg,{icon: 2,title: '错误'});
					}
				}, error:function(request,state,error){
					layer.alert("出现错误了",{icon: 2,title: '错误'});
				}
			});
		},
		save:function ensure(){
			this.saveSendMsg();
		},
	    ensure:function ensure(){
			var _this = this;
			var ue = UE.getEditor('Editoror');
			var title = $("#sendMsg_title").val();
			var author = $("#sendMsg_author").val();
			var content = ue.getAllHtml();
			var text = ue.getContentTxt();
			if(this.state.imgList==null||this.state.imgList==""||this.state.imgList.length==0){
				layer.alert("请上传封面图片！",{icon:2,title:"提示"});
				return;
			}
			if(title.length==0){
				layer.alert("请输入标题！",{icon:2,title:"提示"});
				return;
			}
			if(author.length==0){
				layer.alert("请输入作者名称！",{icon:2,title:"提示"});
				return;
			}
			if(text.length==0){
				layer.alert("请输入正文！",{icon:2,title:"提示"});
				return;
			}
			if(title.length>64){
				layer.alert("标题长度不超过64！",{icon:2,title:"提示"});
				return;
			}
			if(author.length>8){
				layer.alert("作者名称不超过8！",{icon:2,title:"提示"});
				return;
			}
			if(text.length>900){
				layer.alert("正文字数不超过900！",{icon:2,title:"提示"});
				return;
			}

			var date = new Date();
			var year =date.getFullYear();
			var month =date.getMonth()+1;
			var day = date.getDate();
			var FomatDate = year+"-"+month+"-"+day;
			var sid = getCookie("sid");
			var creator = getCookie("userName");
			var _this = this;
			var rules = {"sid":sid,"title":title,"author":author,"newsId":this.state.data.newsId,"content":content,"digest":"","photoId":this.state.imgList[0].fileId,"creator":creator,"publishFlag":"true"};
			var tmp = JSON.stringify(rules);
			$.ajax({
				url:common_ip+"publicNews.do?action=save",
				dataType:'json',
				data:tmp,
				type:'POST',
				contentType:"application/x-www-form-urlencoded",
				success:function(ret){
					if(ret.successFlag){
						layer.msg("编辑且发布成功！",{icon: 1});
						_this.setState({showModal:false});
						nsEventBus.eventbus.broadcast("add_Success","success");
					}else{
						layer.alert(ret.errorMsg,{icon: 2,title: '错误'});
					}
				}, error:function(request,state,error){
					layer.alert("出现错误了",{icon: 2,title: '错误'});
				}
			});
		},
		handleTitle:function(){
			this.setState({fontState1:$(".sendMsg_title").val().length});
			if($(".sendMsg_title").val().length>64){
				$(".jianyi2_textEdit").css("color","red");
			}else{
				$(".jianyi2_textEdit").css("color","#0093DD");
			}
		},
		handleAuthor:function(){
			this.setState({fontState2:$(".sendMsg_author").val().length});
			if($(".sendMsg_author").val().length>8){
				$(".jianyi3_text").css("color","red");
			}else{
				$(".jianyi3_text").css("color","#0093DD");
			}
		},
	    render: function render() {
	    	 return (
	    			 React.createElement("div",{id:"showsendMsg1"},
	    		 	            	React.createElement(Modal,{id:"show_EditsendMsg",show:this.state.showModal,onHide:this.close,animation:true},
	    		 	                React.createElement(Modal.Header,{ className:"showAddTitle",closeButton: true},
	    		 	                    React.createElement(Modal.Title,{ id: "" },"编辑")
	    		 	                ),
	    		 	                React.createElement( "div",{className:"Modal_div"},

	    		 	                		React.createElement("div",{className:"sendMsg_pop_div"},
	    		 	                				React.createElement("div",{className:"popTitle_div"},
														React.createElement("label",{style:{color:"red", position:"relative",left:"-268px",top: "3px"}},"*"),
	    			                				 	React.createElement("label",{className:"sendMsg_ltitle"},"标题:"),
	    			                				 	React.createElement("textarea",{id:"sendMsg_title",onChange:this.handleTitle,cols:"3",row:"50",className:"sendMsg_title"}),
	    			                				 	React.createElement("div",{className:"jianyi2_textEdit"},this.state.fontState1+"/64字")
	    			                				),
	    			             					React.createElement("div",{className:"popAuthor_div"},
														React.createElement("label",{style:{color:"red", position:"relative",left:" -265px",top: "9px"}},"*"),
	    				                                React.createElement("label",{className:"sendMsg_lauthor"},"作者:"),
	    				             					React.createElement(Input,{id:"sendMsg_author",onChange:this.handleAuthor,type:"text",className:"sendMsg_author"}),
	    				             					React.createElement("div",{className:"jianyi3_text"},this.state.fontState2+"/8字")
	    			             					),
	    			             					React.createElement("div",{className:"popText_div"},
														React.createElement("label",{style:{color:"red", position:"relative",left:" 8px",top: "15px"}},"*"),
	    				             					React.createElement("label",{className:"sendMsg_ltext"},"正文:"),
	    				             					React.createElement("div",{className:"editor_overflow"},
	    				             							React.createElement("div",{id:"Editoror"})
	    				             					)
	    				             				),
	    				             				React.createElement("div",{className:"popCover_div"},
														React.createElement("label",{style:{color:"red", position:"relative",left:" 5px",top: "112px"}},"*"),
	    					             				React.createElement("label",{className:"sendMsg_lcover"},"封面:"),
	    					             				React.createElement("div",{className:"uploadImage_1",id:"uploadImages"},
															React.createElement(UploadImage,{imgList:this.state.imgList,successNum:this.state.imgList.length,mulSupported:false,uploadNum:1})
	    					             				),
	    					             				React.createElement("div",{className:"jianyi1_text"},"建议图片大小900×500像素")
	    				             				)
	    			             		  )
	    		 	                ),
	    		 	               React.createElement(
	    		 	            		  "div",
	    		 	                      null,

	    		 	                     React.createElement(
											 "button",
	    			 	                          { className:"btn_saves",onClick: this.save,bsStyle:"info",bsSize:"normal" },
	    			 	                          "保存"
	    			 	                 ),
	    			 	                 React.createElement(
											 "button",
	    			 	                          { className:"save_release",onClick: this.ensure,bsStyle:"info",bsSize:"normal" },
	    			 	                          "保存并发布"
	    			 	                 )
	    		 	              )
	    		 	           )
	    		 	     )
	            );
	     }
	 });
