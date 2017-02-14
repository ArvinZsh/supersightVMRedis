var Input = window.Input || ReactBootstrap.Input;
var Pagination = ReactBootstrap.Pagination;
var key = 10000;
var Logs = React.createClass({
	getInitialState:function(){
		return{
			pageSize:15,
			page:1,
			dataCount:0,
			data:[],
			timeFrom:"",
			timeTo:"",
			key:"",
		};
	},
	componentWillMount:function() {

	},
    componentDidMount: function(){
		$("body").keydown(function(e) {
			if (e.keyCode == "13") {//keyCode=13是回车键
				$('.button_search').click();
			}
		});
		var mydateInput = document.getElementById("begin");
		var time = new Date().Format("yyyy-MM-dd");
		var time=new Date().GetDate(9);
		mydateInput.value=time;

		var mydateInput2 = document.getElementById("end");
		var time2 = new Date().Format("yyyy-MM-dd");
		mydateInput2.value=time2;

		var sid = getCookie("sid");
		this.state.end=time2;
		this.state.begin=time;
		var tmp = {cmd:"selectLog","sid":sid,"pageNo":"1","timeFrom":time,"timeTo":time2,"keyword":this.state.key,"pageSize":this.state.pageSize};
		var tmp1  = JSON.stringify(tmp);
		$.ajax({
			url:common_ip+"logs.do?action=list",
			dataType:'json',
			data:tmp1,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					
					this.setState({data:data.logPager.list});
					this.setState({dataCount:data.logPager.totalCount});
				}else{
					layer.alert("查询失败"+data.errorMsg,{icon:2});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error);
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});

	},
    clickcolor:function(event){
    	var tr = document.getElementsByClassName("log_tr");
		var index = $(".log_tr:hover").index();
		if(key != -1 && key != 10000 ){
			$(".log_tr").removeAttr("style");
		}
		tr[index].style.backgroundColor= "#fffee1";
		key=index;
    },
    findLogs:function(){
		this.state.page = 1;
		$(".log_tr").removeAttr("style");

		var begin = $("input[name='begin']").val();
		var end = $("input[name='end']").val();
		var key= $("input[name='keyword']").val();

		var sid = getCookie("sid");
		var userName=getCookie("userName");
		var tmp = {cmd:"selectLog","sid":sid,"pageNo":this.state.page,"pageSize":this.state.pageSize,"timeFrom":begin,"timeTo":end,"keyword":key, };
		var tmp1  = JSON.stringify(tmp);
		$.ajax({
			url:common_ip+"logs.do?action=list",
			dataType:'json',
			data:tmp1,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					layer.msg("查询成功！",{icon:1});
					this.setState({data:data.logPager.list});
					this.setState({dataCount:data.logPager.totalCount});
					this.state.timeFrom = begin;
					this.state.timeTo = end;
					this.state.key = key;
				}else{
					layer.alert("查询失败"+data.errorMsg,{icon:2});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error);
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
    },
    handleSelect:function(event, selectedEvent){
		$(".log_tr").removeAttr("style");
		this.setState({page:selectedEvent.eventKey});
		var sid = getCookie("sid");
		var tmp = {cmd:"selectLog","sid":sid,"pageNo":selectedEvent.eventKey,"pageSize":this.state.pageSize,"timeFrom":this.state.timeFrom,"timeTo":this.state.timeTo, "keyword":this.state.key, };
		var tmp1  = JSON.stringify(tmp);
		$.ajax({
			url:common_ip+"logs.do?action=list",
			dataType:'json',
			data:tmp1,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					this.setState({data:data.logPager.list});
					this.setState({dataCount:data.logPager.totalCount});
				}else{
					layer.alert("查询失败"+data.errorMsg,{icon:2});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error);
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
	},
	render:function()
	{
		var _this=this;
		var str;
			return (
					React.createElement("div",{className:"div_log"},
					React.createElement("div",{ className: "div_search" },
							React.createElement("input", {type:"date", className: "text_begin", id:"begin",name: "begin" }),
							React.createElement("label",{ className: "text_to" },"至"),
							React.createElement("input", {type:"date", className: "text_end", id:"end",name: "end"}),
							React.createElement("input", { type: "text", className: "text_search", name: "keyword", placeholder: "关键字" }),
							React.createElement("button", {className: "button_search",onClick:this.findLogs},"搜索")
						),
 							React.createElement("div",{align:'center',className:'divcenter'},
								React.createElement("table",{id:"listTable",className:"listTable"},
										React.createElement("thead",{className:"listthead"},
												React.createElement("tr",{className:"trTable"},
														React.createElement("th",{className:"padding_Left"},"用户名"),
														React.createElement("th",{},"模块名称"),
														React.createElement("th",{},"操作"),
														React.createElement("th",{},"时间"),
														React.createElement("th",{},"日志内容")
												)
										),
										React.createElement("tbody",{id:"list"},
										this.state.data.map(function(array,index){
											if(array.remark.length>40){
												str = array.remark.substr(0,40)+"...";
											}else{
												str = array.remark;
											}
												return(
														React.createElement("tr",{className:"log_tr",onClick:_this.clickcolor},
																React.createElement("td",{className:"padding_Id"},array.userName),
																React.createElement("td",{className:""},array.moduleName),
																React.createElement("td",{className:""},array.operation),
																React.createElement("td",{className:""},array.createTimeFormat),
																React.createElement("td",{className:""},str)
														)
												);
											
											
										}))
								)
 							),
 							React.createElement(Pagination, {
								  id:"pagination",
							      prev: true,
							      next: true,
							      first: '首页',
							      last: '尾页',
							      ellcommon_ipsis: true,
							      boundaryLinks: true,
								  items: Math.ceil(this.state.dataCount/this.state.pageSize),
							      maxButtons: 5,
							      activePage: this.state.page,
							      onSelect: this.handleSelect
							})
					)
			);
	}
});

ReactDOM.render(React.createElement(Logs),document.getElementById("log"));