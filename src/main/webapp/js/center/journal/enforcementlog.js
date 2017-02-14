var Pagination = ReactBootstrap.Pagination;
var Input = ReactBootstrap.Input;
var Enforcementloglist = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
	},
	componentDidMount: function(){
	},
	OnHanAllTrHover:function(){
		$(".inspectionlog_table_td").removeClass("inspection_all_backcolor");
		$(".inspectionlog_table_td:hover").addClass("inspection_all_backcolor");
		var str ="ledgerdetails.html?buildingId=";
		str += this.props.data.buildingId;
		// window.open(str);
		window.location.href = str;
	},
	hanOnMoveHover: function(){
		$(".inspectionlog_table_td:hover").addClass("inspection_hover_backcolor");
	},
	hanOnMouseOut: function(){
		$(".inspectionlog_table_td").removeClass("inspection_hover_backcolor");
	},
	render:function()
	{
		var str = this.props.data.address;
		if(this.props.data.address.length>15){
			str =   this.props.data.address.substr(0,15)+"..."
		}
		return (
			React.createElement("tr",{className:"inspectionlog_table_td",onClick:this.OnHanAllTrHover,onMouseOver:this.hanOnMoveHover,onMouseOut:this.hanOnMouseOut},
				React.createElement("td",{className:"inspection_td11"},this.props.data.enforceDateFormat),
				React.createElement("td",{className:"inspection_td1"},this.props.data.gridId),
				React.createElement("td",{className:"inspection_td2"},
					React.createElement("img",{className:"inspection_list_img",src:judgeBinding(this.props.data.harmfulCode)})
					,str),
				React.createElement("td",{className:"inspection_td3"},this.props.data.remark),
				React.createElement("td",{className:"inspection_td4"},this.props.data.ownerName),
				React.createElement("td",{className:"inspection_td5"},this.props.data.ownerTel),
				React.createElement("td",{className:"inspection_td6"},this.props.data.coverArea+"㎡"),
				React.createElement("td",{className:"inspection_td7"},this.props.data.buildArea+"㎡"),
				React.createElement("td",{className:"inspection_td8"},this.props.data.leader),
				React.createElement("td",{className:"inspection_td9"},this.props.data.enforceRemark),
				React.createElement("td",{className:"inspection_td10"},this.props.data.measures)
			)
		);
	}
});

var sid = getCookie("sid");
// 表格
var Enforcementlog = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:[],
			selindex:-1,
			page: 1,
			pagesize:12,
		};
	},
	hanOnPublicFun: function(){
		var orgId = getCookie("orgId");
		var rules = {"sid":sid,"orgId":orgId};
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"buildings.do?action=enforceLog",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				console.log(data);
				if(data.successFlag){
					this.setState({data:data.enforceTodayLog})
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

	render:function() {
		return (
			React.createElement("div", {id:"inspectionlog_fdiv"},
			/*	React.createElement("select", {id:"selectSourceid",onChange:this.hanOnBinaHuaChange},
					React.createElement("option",{value:""},"全部"),
					React.createElement("option",{value:""},"有变化"),
					React.createElement("option",{value:""},"无变化")
				),*/
				React.createElement("button", {id:"inspection_button",onClick:this.hanOnDaoChuClick},"导出"),
				React.createElement("div",{id:"inspectionlog_exportexecl"},
					React.createElement("table", {id:"inspectionlog_table"},
						React.createElement("tr",null,
							React.createElement("th", {className: "inspection_th11"}, "执行时间"),
							React.createElement("th", {className: "inspection_th1"}, "网格"),
							React.createElement("th", {className: "inspection_th2"}, "地址"),
							React.createElement("th", {className: "inspection_th3"}, "现场情况"),
							React.createElement("th", {className: "inspection_th4"}, "业主"),
							React.createElement("th", {className: "inspection_th5"}, "业主电话"),
							React.createElement("th", {className: "inspection_th6"}, "占地面积"),
							React.createElement("th", {className: "inspection_th7"}, "建筑面积"),
							React.createElement("th", {className: "inspection_th8"}, "参与人员"),
							React.createElement("th", {className: "inspection_th9"}, "执行备注"),
							React.createElement("th", {className: "inspection_th10"},"采取措施")
							// React.createElement("th", {className: "inspection_th1"}, "是否变化")
						)
					),
					React.createElement("div",{id:"inspectionlog_div_did"},
						React.createElement("table",{id:"inspectionlog_table2"},
							this.state.data.map(function (arr) {
								return React.createElement(Enforcementloglist, {data: arr})
							})
						)
					)
				)
			)
		);
	}
})
