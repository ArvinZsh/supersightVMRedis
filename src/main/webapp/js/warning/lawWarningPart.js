var Pagination = ReactBootstrap.Pagination;
var Input = window.Input||ReactBootstrap.Input;
var lawWarning = React.createClass({
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
			};
	    },
	    componentWillMount:function(){

	    },
		componentDidMount: function(){
			var sid = getCookie("sid");
			var uid = getCookie("uid");
			var rules = {"sid":sid,"uid":uid,"pageNo":this.state.page,"pagesize":this.state.pageSize};
			var tmp = JSON.stringify(rules)
			$.ajax({
				url:common_ip+"buildings.do?action=listEnforceAlarm",
				dataType:'json',
				data:tmp,
				type:'post',
				contentType:"application/x-www-form-urlencoded",
				success: function(data){
					if(data.successFlag){
						
						this.setState({pagecount:data.enforceAlarm.totalCount});
						this.setState({data:data.enforceAlarm.list});
					}else{
						layer.alert("加载数据失败"+data.errorMsg,{icon:2,title:"错误"});
					}
				}.bind(this),
				error: function(request, state, error){
					layer.alert(error);
					console.error(this.props.url, state, error.toString());
				}.bind(this)
			});

		},
		hanOnPublic: function(defaults){
		var sid = getCookie("sid");
		var uid = getCookie("uid");
		var rules = {"sid":sid,"uid":uid,"pageNo":defaults,"pagesize":this.state.pageSize};
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"buildings.do?action=listEnforceAlarm",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					this.setState({pagecount:data.enforceAlarm.totalCount});
					this.setState({data:data.enforceAlarm.list});
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
		Refresh:function(){
			var sid = getCookie("sid");
			var uid = getCookie("uid");
			var rules = {"sid":sid,"uid":uid,"pageNo":this.state.page,"pagesize":this.state.pageSize};
			var tmp = JSON.stringify(rules)
			$.ajax({
				url:common_ip+"buildings.do?action=listEnforceAlarm",
				dataType:'json',
				data:tmp,
				type:'post',
				contentType:"application/x-www-form-urlencoded",
				success: function(data){
					if(data.successFlag){
						layer.msg("刷新成功！",{icon:1});
						this.setState({pagecount:data.enforceAlarm.totalCount});
						this.setState({data:data.enforceAlarm.list});
					}else{
						layer.alert("刷新失败！"+data.errorMsg,{icon:2,title:"错误"});
					}
				}.bind(this),
				error: function(request, state, error){
					layer.alert(error);
					console.error(this.props.url, state, error.toString());
				}.bind(this)
			});
		},
	clickcolor:function(e){
		var tr = document.getElementsByClassName("warning_tr");
		var index = $(".warning_tr:hover").index();
		if(this.state.key != -1 && this.state.key != 10000 ){
            $(".warning_tr").removeAttr("style");
		}
		tr[index].style.backgroundColor= "#fffee1";
		this.setState({key:index});
	},
	render:function render(){

		var i=0;
		var tmp = [];
			return (
					React.createElement("div",{className:"taskWarning_div"},
					React.createElement("div",{className:"divcenter",style:{align:"center"}},
							React.createElement("button", { className: "warning_button1" ,onClick:this.Refresh}, "刷新"),
							React.createElement("button", {className: "warning_button" ,onClick:this.BrowseWarning},"浏览"),
							React.createElement("table",{id:"listTable",className:"listTable"},
                                React.createElement("tr",{className:"warning_th"},
                                    React.createElement("th",{className:"th_grid"},"计划拆除日"),
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
                                                    React.createElement("td",{className:"warning_td1"},array.planDestroyDateFormat ),
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
											)

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
                            items:Math.ceil(this.state.pagecount/this.state.pageSize),
                            maxButtons: 5,
                            activePage: this.state.page,
                            onSelect: this.handleSelect
					    })
					)
				)
			);
	}
});
