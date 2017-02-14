var Pagination = ReactBootstrap.Pagination;
var Input = window.Input||ReactBootstrap.Input;

var taskWarning = React.createClass({
		getInitialState: function getInitialState() {
			return {
				data:[],
				pagecount:1,
				page:1,
				pageSize:10,
				key:10000,
				begin:"",
				end:"",
				selindex:-1,
				Community:[],
			};
	    },
	    componentWillMount:function(){
			var sid = getCookie("sid");
			var rules1={"sid":sid,"typeId":"'CommunityCode'"};
			var tmp1 = JSON.stringify(rules1);
			$.ajax({
				url:common_ip+"commonCode.do?action=listSub",
				dataType:'json',
				data: tmp1,
				type:'post',
				contentType:"application/x-www-form-urlencoded",
				success: function(data){
					if(data.successFlag){
						var communitycode=[];
						for(var i=0;i<data.commonCodeList.length;i++){
							if(data.commonCodeList[i].typeId=="CommunityCode"){
								communitycode.push(data.commonCodeList[i]);
							}
						}
						this.setState({Community:communitycode});
					} else{
						layer.alert("请求失败！"+data.errorMsg,{icon:2,title:"错误"});
					}
				}.bind(this),
				error: function(request, state, error){
					layer.alert(error,{icon:2,title:"错误"});
					console.error(this.props.url, state, error.toString());
				}.bind(this)
			});
	    },
		hanOnPublic: function(defaults){
			var sid = getCookie("sid");
			var uid = getCookie("uid");
			var time;
			var time2;
			if(defaults=="defaults"){
				var mydateInput = document.getElementById("beginTime");
				time = new Date().GetDate(21);
				mydateInput.value=time;
				var mydateInput2 = document.getElementById("endTime");
				time2 = new Date().Format("yyyy-MM-dd");
				mydateInput2.value=time2;
			}else{
				 time = $("#beginTime").val();
				 time2 = $("#endTime").val();
			}
			if(defaults == "select"){
				this.state.page = 1;
			}
			var keyword = $("#taskWarning_keyword").val();
			var area1 = $("#twp_area1").val();
			var rules = {"sid":sid,"timeFrom":time,"timeTo":time2,"area1":area1,"keyword":keyword,"uid":uid,"pageNo":this.state.page,"pagesize":this.state.pageSize};
			var tmp = JSON.stringify(rules);
			$.ajax({
				url:common_ip+"buildings.do?action=listPatrolAlarm",
				dataType:'json',
				data:tmp,
				type:'post',
				contentType:"application/x-www-form-urlencoded",
				success: function(data){
					if(data.successFlag){
						this.setState({pagecount:data.patrolAlarm.totalCount});
						this.setState({data:data.patrolAlarm.list});

					}else{
						layer.alert("加载数据失败"+data.errorMsg,{icon:2,title:"错误"});
					}
				}.bind(this),
				error: function(request, state, error){
					layer.alert(error);
					//			console.error(this.props.url, state, error.toString());
				}.bind(this)
			});
		},
		componentDidMount: function(){
			$("body").keydown(function(e) {
				if (e.keyCode == "13") {//keyCode=13是回车键
					$('.warning_button1').click();
				}
			});
			var _this = this;
			_this.hanOnPublic("defaults");
		},
		handleSelect:function(event, selectedEvent){
			this.setState({selindex:-1});
			this.state.page = selectedEvent.eventKey;
			this.hanOnPublic(selectedEvent.eventKey);
			this.setState({key:10000});
			if(this.state.key != -1 && this.state.key != 10000 ){
				$(".warning_tr").removeAttr("style");
			}
		},
		BrowseWarning:function(){
			if(this.state.key==10000){
				layer.alert("请选择一行再进行浏览！",{icon:2,title:"提示"});
				return;
			}
			if(typeof (this.state.data[this.state.key]) == "undefined"){
				window.location.href="ledgerdetails.html?buildingId="+this.state.data.list[this.state.key].buildingId;
			}else{
				window.location.href="ledgerdetails.html?buildingId="+this.state.data[this.state.key].buildingId;
			}
		},
		clickcolor:function(){
			var tr = document.getElementsByClassName("warning_tr");
			var index = $(".warning_tr:hover").index();
			if(this.state.key != -1 && this.state.key != 10000 ){
				$(".warning_tr").removeAttr("style");
			}
			tr[index].style.backgroundColor= "#fffee1";
			this.setState({key:index});
		},
		search:function(){
			this.hanOnPublic("select");
		},
		render:function render(){
			var community=[];
			community.push(React.createElement("option",{className:"buiding_communitycla",value:""},"全部社区"));
			if(typeof(this.state.Community)!=undefined&&this.state.Community!=null){
				this.state.Community.map(function(arr){
					community.push(React.createElement("option",{className:"buiding_communitycla",value:arr.codeId},arr.codeName));
				})
			}
				return (
						React.createElement("div",{className:"taskWarning_div"},
						React.createElement("div",{className:"divcenter",style:{align:"center"}},
							React.createElement("input",{id:"beginTime",className:"history_begin",type:"date",onChange:this.hanOnPublic}),
							React.createElement("label",{id:"taskWarning_zhi"},"~"),
							React.createElement("input",{id:"endTime",className:"history_begin",type:"date",onChange:this.hanOnPublic}),
							React.createElement("input",{id:"taskWarning_keyword"}),
							React.createElement("button", { className: "warning_button1" ,onClick:this.search}, "查 询"),
							React.createElement("select",{id:"twp_area1",className:"buidding_type_sel",type:"select",onChange:this.hanOnPublic},
								community
							),

								React.createElement("button", {className: "warning_button" ,onClick:this.BrowseWarning},"浏览"),
								React.createElement("table",{id:"listTable",className:"listTable"},
										React.createElement("tr",{className:"warning_th"},
										// React.createElement("th",{className:"th_grid"},"计划巡查时间"),
										React.createElement("th",{className:"th_grid"},"上次巡查日"),
										React.createElement("th",{className:"th_wjCode"},"违建编码"),
										React.createElement("th",{className:"th_planDate"},"网格组"),
										React.createElement("th",{className:"th_community"},"地点"),
	//                                    React.createElement("th",{className:"th_address"},"地址"),
										React.createElement("th",{className:"th_wfType"},"违建类型"),
										React.createElement("th",{className:"th_ajSource"},"案件来源"),
										React.createElement("th",{className:"th_big"},"是否重大案件")
										),
									React.createElement("tbody",{onClick:this.clickcolor,id:"list"},
										this.state.data.map(function(array,index){
											return(
												React.createElement("tr",{className:"warning_tr",id:"warning_line"},
													// React.createElement("td",{className:"warning_td10"},array.finalPatrolTimeFormat),
													React.createElement("td",{className:"warning_td1"},array.finalPatrolTimeFormat),
													React.createElement("td",{className:"warning_td2"},array.buildingNo),
													React.createElement("td",{className:"warning_tds"},array.gridId),
													React.createElement("td",{className:"warning_td3"},
														React.createElement("img",{className:"buidding_list_img",src:judgeBinding(array.harmfulCode)}),
														React.createElement("span",{className:"building_address_substr"},"【"+array.area1+"】"+array.address)
													),
													React.createElement("td",{className:"warning_td7"},array.newFlag==true?"存量":"增量"),
													React.createElement("td",{className:"warning_td8"},array.sourceCode),
													React.createElement("td",{className:"warning_td9"},array.bigCaseFlag==true?"是":"否")
												)
											);
										}))
								)
						),
						React.createElement(
							"div",
							{id:"lawWarning_divPage"},
							React.createElement(Pagination, {
								id:"lawWarning_pagination",
								prev: true,
								next: true,
								first: '首页',
								last: '尾页',
								ellcommon_ipsis: true,
								boundaryLinks: true,
								items: Math.ceil(this.state.pagecount/this.state.pageSize),
								maxButtons: 5,
								activePage: this.state.page,
								onSelect: this.handleSelect
							})
						)
					)
				);
		}
});
