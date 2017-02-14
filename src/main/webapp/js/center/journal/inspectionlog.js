var Pagination = ReactBootstrap.Pagination;

var Inspectionloglist = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
	},
	componentDidMount: function(){
	},
	render:function()
	{
		var str=this.props.data.patrolTimeFormat;
		return (
			React.createElement("div", {id:"page"},
				React.createElement("table", {id:"inspectionlog_table"},
					React.createElement("tr",null,
						React.createElement("th", {className: "inspection_th0"}, ""),
						React.createElement("th", {className: "inspection_th3"}, "点数"),
						React.createElement("th", {className: "inspection_th4"}, "违建点名称")
					),
					React.createElement("tr",{className:"inspectionlog_table_tr1"},
						React.createElement("td", {className: "inspection_th1"}, "巡查时间"),
						React.createElement("td",{className:"inspection_th1",colSpan: "2"},str.substring(0,11))
					),
					React.createElement("tr",{className:"inspectionlog_table_tr2"},
						React.createElement("td", {className: "inspection_th1"}, "所属中队"),
						React.createElement("td",{className:"inspection_th1",colSpan:"2"},this.props.data.lohus)
					),
					React.createElement("tr",{className:"inspectionlog_table_tr3"},
						React.createElement("td", {className: "inspection_th1"}, "有变化"),
						React.createElement("td",{className:"inspection_th1"},this.props.data.changeCount),
						React.createElement("td",{className:"inspection_th2"},this.props.data.changeAddress)
					),
					React.createElement("tr",{className:"inspectionlog_table_tr4"},
						React.createElement("td", {className: "inspection_th1"}, "无变化"),
						React.createElement("td",{className:"inspection_th1"},this.props.data.unChangeCount),
						React.createElement("td",{className:"inspection_th2"},this.props.data.unChangeAddress)
					),
					React.createElement("tr",{className:"inspectionlog_table_tr5"},
						React.createElement("td",{className:"inspection_th0"},"未巡查"),
						React.createElement("td",{className:"inspection_th1"},this.props.data.uncheckCount),
						React.createElement("td",{className:"inspection_th2"},this.props.data.uncheckAddress)
					),
					React.createElement("tr",{className:"inspectionlog_table_tr6"},
						React.createElement("td",{className:"inspection_th0"},"新增"),
						React.createElement("td",{className:"inspection_th1"},this.props.data.newCount),
						React.createElement("td",{className:"inspection_th2"},this.props.data.newAddress)
					),
					React.createElement("tr",{className:"inspectionlog_table_tr7"},
						React.createElement("td", {className: "inspection_th3"}, "中队领导审批"),
						React.createElement("td",{className:"inspection_th1",colSpan:"2"},"")
					),
					React.createElement("tr",{className:"inspectionlog_table_tr8"},
						React.createElement("td",{className:"inspection_th0"},"大队领导审批"),
						React.createElement("td",{className:"inspection_th1",colSpan:"2"},"")
					)
				)
			)
		);
	}
});

var sid = getCookie("sid");
// 表格
var Inspectionlog = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:[],
			selindex:-1,
			page: 1,
			pagesize:12,
			showType:0,
			selectOrg:"",
			orgList:[],
		};
	},
	hanOnPublicFun: function(isChange){
		if(typeof(isChange)=="undefined"){
			isChange = "";
		}
		var time = new Date().Format("yyyy-MM-dd");
		var orgId = getCookie("orgId");
		var rules = {"sid":sid,"pageNo":1,"pageSize":100,"time":time,"key":"","range":6,"orgId":orgId};
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"buildings.do?action=patrolLogHistory",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				console.log(data);
				if(data.successFlag){
					var tmp=[];
					data.patrolHisLogReport.map(function (arr) {
						tmp.push(arr.lohus);
					});
					this.state.orgList=tmp;
					if(tmp.length>=0){
						this.state.selectOrg=tmp[0];
					}
					this.setState({data:data})
				}else{
					layer.alert("查询失败");
					layer.alert(data.errorMsg);
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error);
//			console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
	},
	componentDidMount: function(){
		this.hanOnPublicFun();
	},
	hanOnDaoChuClick:function(){
		exportExecl("inspectionlog_exportexecl");
	},
	hanOnBinaHuaChange: function(){
		this.setState({selectOrg:$("#selectOrg").val()});
	},
	hanOnShowTypeChange: function(){
        this.state.setState({showType:$("#showType").val()});
    },
	render:function() {
    	var _this=this;
	    var tmp=[];
		if(typeof (this.state.data.patrolHisLogReport)!="undefined"&&this.state.data.patrolHisLogReport!=null&&this.state.data.patrolHisLogReport!=""){
			this.state.data.patrolHisLogReport.map(function (arr) {
				if(arr.lohus==_this.state.selectOrg){
					tmp.push(React.createElement(Inspectionloglist, {data: arr}));
				}
			})
		}

		var options=[];
		if(typeof (this.state.orgList)!="undefined"&&this.state.orgList!=null&&this.state.orgList!="") {
			this.state.orgList.map(function (arr) {
				options.push(React.createElement("option", {value: arr}, arr));
			})
		}
		return (
			React.createElement("div", {id:"inspectionlog_fdiv"},
//				React.createElement("select", {id:"selectSourceid",onChange:this.hanOnBinaHuaChange},
//					React.createElement("option",{value:""},"全部"),
//					React.createElement("option",{value:true},"有变化"),
//					React.createElement("option",{value:false},"无变化")
//				),
//				React.createElement("select", {id:"showType",onChange:this.hanOnBinaHuaChange},
//                    React.createElement("option",{value:0},"报表"),
//                    React.createElement("option",{value:1},"详情")
//                ),
				React.createElement("select", {id:"selectOrg",onChange:this.hanOnBinaHuaChange},
					options
				),
				React.createElement("button", {id:"inspection_button",onClick:this.hanOnDaoChuClick},"导出"),
				React.createElement("div",{id:"inspectionlog_exportexecl"},
					tmp
				)
			)
		);
	}
})


