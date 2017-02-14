var Pagination = ReactBootstrap.Pagination;
var Input = window.Input || ReactBootstrap.Input;
var Grid = ReactBootstrap.Grid || "";
var Row = ReactBootstrap.Row || "";
var Col = ReactBootstrap.Col || "";
// var Image = ReactBootstrap.Image || "";
var Tabs = window.Tabs || ReactBootstrap.Tabs;
var Tab = window.Tab || ReactBootstrap.Tab;
var mountNode = document.getElementById("pageSpec");


var Ledgerdetailslist = [{time:"2016-05-12",neir:"巡查-查处后复查",particcommon_ipant:"无形,无伤",descrcommon_iption:"无形呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀",urllist:[{url:"../images/1460713362190.jpg",fileUrl:"../images/1460713362190.jpg"},{url:"../images/1460713362190.jpg",fileUrl:"../images/1460713362190.jpg"},{url:"../images/1460713362190.jpg",fileUrl:"../images/1460713362190.jpg"}]},
	{time:"2016-05-12",neir:"执法记录",particcommon_ipant:"华少",descrcommon_iption:"无形呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀",urllist:[{url:"../images/1460713362190.jpg"},{url:"../images/1460713362190.jpg"},{url:"../images/1460713362190.jpg"}]},
	{time:"2016-05-12",neir:"审批记录",particcommon_ipant:"你们",descrcommon_iption:"无形呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀",urllist:[{url:"../images/1460713362190.jpg"},{url:"../images/1460713362190.jpg"},{url:"../images/1460713362190.jpg"}]},
	{time:"2016-05-12",neir:"巡查-日常巡查",particcommon_ipant:"我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们",descrcommon_iption:"无形呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀",urllist:[{url:"../images/1460713362190.jpg"},{url:"../images/1460713362190.jpg"},{url:"../images/1460713362190.jpg"},{url:"../images/1460713362190.jpg"}]},
	{time:"2016-05-12",neir:"巡查-初次发现",particcommon_ipant:"他们",descrcommon_iption:"无形呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃额鹅鹅鹅饿",urllist:[{url:"../images/1460713362190.jpg"},{url:"../images/1460713362190.jpg"},{url:"../images/1460713362190.jpg"}]}];

var ledgertoggle = function(){
	var index = $(".ledgerdetails_righttop_index:hover").index();
	if($(".ledgerdetails_righttop3_div3").eq(index).css("display") == "none"){
		$(".ledgerdetails_righttop2_button2").eq(index).text("收起");
		$(".ledgerdetails_righttop3_div3").eq(index).slideDown(300);

	}else{
		$(".ledgerdetails_righttop2_button2").eq(index).text("展开");
		$(".ledgerdetails_righttop3_div3").eq(index).slideUp(300);
	}
}

//var Ledgerdetailrightimage = React.createClass({
//	getInitialState: function getInitialState() {
//		return {
//			data:"",
//			X:"0px",
//			Y:"0px"
//		};
//    },
//    componentDidMount: function(){
//	},
//	render:function()
//	{
//		return (
//				React.createElement("div",{className:"ledgerdetails_lineheight_ddiv"},
//						React.createElement("image",{src:this.props.data.url,className:"ledgerdetails_lineheight_image1",alt:"图片正在加载中..."}),
//						React.createElement("image",{src:this.props.data.url,className:"ledgerdetails_lineheight_image1none",alt:"图片正在加载中..."})
//				)
//		);
//	}
//});

//var Ledgerdetailsrightbuttom = React.createClass({
//	getInitialState: function getInitialState() {
//		return {
//			data:""
//		};
//    },
//    hanOnistoggleclick:function(){
//    	nsEventBus.eventbus.subscribe("ledgerdatail","11111");
//    	ledgertoggle();
//    },
//    componentDidMount: function(){
//	},
//	hanOnOddClick:function(ee){
//		buildinggehang();
//		$(".buidding_list_tr:hover").css("background-color","#FFF8CE");
//	},
//	render:function()
//	{
//		return (
//				React.createElement("div",{className:"ledgerdetails_righttop_index"},
//						React.createElement("div",{className:"ledgerdetails_righttop2_div2"},
//								React.createElement("label",{className:"ledgerdetails_patrol_time"},this.props.data.time),
//								React.createElement("label",{className:"ledgerdetails_patrol_fc"},this.props.data.neir),
//								React.createElement(Button,{className:"ledgerdetails_righttop2_button1"},"编 辑"),
//								React.createElement(Button,{className:"ledgerdetails_righttop2_button2",onClick:this.hanOnistoggleclick},"展开")
//						),
//						React.createElement("div",{className:"ledgerdetails_righttop3_div3"},
//								React.createElement("div",{className:"ledgerdetails_righttop3_div31"},
//										React.createElement("label",{className:"ledgerdetails_righttop3_particcommon_ipant"},"参与人员:"),
//										React.createElement("label",{className:"ledgerdetails_righttop3_paneirong"},this.props.data.particcommon_ipant)
//								),
//								React.createElement("div",{className:"ledgerdetails_righttop3_div32"},
//										React.createElement("label",{className:"ledgerdetails_righttop3_descrcommon_iption"},"详细描述:"),
//										React.createElement("label",{className:"ledgerdetails_righttop3_neirong"},
//												React.createElement("label",{className:"ledgerdetails_righttop3_neirong2"}),
//												this.props.data.descrcommon_iption
//										)
//								),
//								React.createElement("div",{id:""},
//										React.createElement(ShowBigImg)
//								)
//						)
//				)
//		);
//	}
//});

var selecthidden = function(){
	if($(".buiddings_borwse_ismajor").val() == "1"){
		$(".buiddings_borwse_majortype").removeAttr("disabled");
	}else{
		$(".buiddings_borwse_majortype").attr({"disabled":"disabled"});
	}

	if($(".buiddings_borwse_isla").val() == "1"){
		$(".buiddings_borwse_Filingexplain,.buiddings_borwse_Filingh").removeAttr("readonly");
	}else{
		$(".buiddings_borwse_Filingexplain,.buiddings_borwse_Filingh").attr({"readonly":"readonly"});
	}
}

/*var points = 0;
function hanOnMapJieXiBlur(){
	var address = $("#buidings_isinsert_address").val();
	if(address != ""){
		// 地图解析
		var myGeo = new BMap.Geocoder();
		var point = myGeo.getPoint(address,function(point) {
			points = point;
		},"深圳")
	}
}*/


var Building_harm = React.createClass({
	getInitialState:function(){
		return {
			data:[],
		}
	},
	componentDidMount: function(){
		if(typeof (this.props.harmLevel)!="undefined"){
			for(var i=0;i<this.props.harmLevel.length;i++){
				// 这里只是判断字符串
				if (this.props.level == this.props.harmLevel[i].codeName){
					$("#execute_harm option").eq(i).attr({"selected":"selected"});
				}
			}
		}
	},
	render:function(){
		return(
			React.createElement("div", {},
				this.props.harmLevel.map(function (info) {
					return React.createElement("option", {className:"patril_harm_o",value:info.codeId},info.codeName)
				})
			)
		)
	}
})
var harmLevel = [];
var Modal = window.Modal || ReactBootstrap.Modal;
var UpdateLevels = React.createClass({
		getInitialState: function () {
			return {
				showModal:this.props.showModal,
				title:this.props.title,
				harmLevel:"",
				level:this.props.level,
				id:this.props.id,
			};
		},
		componentWillMount:function(){
			var _this = this;
			if(_this.state.mobile == "null" || typeof(_this.state.mobile)=="undefined"){
				_this.state.mobile = "无";
			}
			var sid = getCookie("sid");
			var rules={"sid":sid,"typeId":"'HarmfulCode'"};
			var tmp = JSON.stringify(rules);
			$.ajax({
				url:common_ip+"commonCode.do?action=listSub",
				dataType:'json',
				data: tmp,
				type:'post',
				contentType:"application/x-www-form-urlencoded",
				success: function(data){
					if(data.successFlag){
						var harmLevel=[];
						for(var i=0;i<data.commonCodeList.length;i++){
							if(data.commonCodeList[i].typeId=="HarmfulCode"){
								harmLevel.push(data.commonCodeList[i]);
							}
						}
						$("#execute_harm").empty();
						ReactDOM.render(React.createElement(Building_harm,{harmLevel:harmLevel,data:this.props.data,level:this.props.level}),document.getElementById("execute_harm"));
						 this.setState({harmLevel:harmLevel});
					}else{
						layer.alert("请求失败！"+data.errorMsg,{icon:2,title:"错误"});
					}
				}.bind(this),
				error: function(request, state, error){
					layer.alert(error,{icon:2,title:"错误"});
					console.error(this.props.url, state, error.toString());
				}.bind(this)
			});

		},
		close: function close() {
			this.setState({showModal:false});
		},
		saveHarmLevel:function(){
			var _this = this;
			var sid = getCookie("sid");
			var id = this.state.id;
			var harmfulCode = document.getElementById("execute_harm").value.trim();
			var rules = {"sid":sid,"harmfulCode":harmfulCode,"buildingId":id.buildingId};
			var tmp = JSON.stringify(rules);
			$.ajax({
				url:common_ip+"buildings.do?action=updateHarmful",
				dataType:'json',
				data:tmp,
				type:'POST',
				contentType:"application/x-www-form-urlencoded",
				success:function(data){
					if(data.successFlag){
						layer.msg('修改成功',{icon:1});
						_this.setState({showModal:false});
						nsEventBus.eventbus.broadcast("ledgerdatail");
					}else{
						layer.alert("修改失败"+data.errorMsg,{icon: 2,title: '错误'});
					}
				}, error:function(request,state,error){
					layer.alert("操作错误",{icon: 2,title: '错误'});
				}
			});
		},
		render:function () {

			return(
				React.createElement(Modal,{className:"editHarmLevel_div",bsSize:"large",show:this.state.showModal,keyboard:true,onHide:this.close,animation:true},
					React.createElement(
						Modal.Header,
						{ closeButton: true },
						React.createElement(
							Modal.Title,
							{ id: "contained-modal-title-lg" },
							"编辑危害等级"
						)
					) ,
					React.createElement("div", {className: "editHarmLevels_div"},
						React.createElement("label",{className:"hreoly-modal_label"},
							React.createElement("b",{},"*"),"危害等级"
						),
						React.createElement("select",{id:"execute_harm"}

						)
					),
					React.createElement("button", {className: "editHarmLevels_button", onClick: this.saveHarmLevel}, "保存")
				)
			)
		}
	});
var Findpeople = React.createClass({
	getInitialState: function () {
		return {
			showModal:this.props.showModal,
			title:this.props.title,
			addresseeList:[],
			imgList:[],
			isSelectUser:true,
			selectUserType:1,
		};
	},
	close: function close() {
		this.setState({showModal:false});
	},
	componentDidMount: function(){
		var _this = this;
		nsEventBus.eventbus.on("orgClik","orgClik",function(msg){
			// _this.state.userInfo="";
			$("#hm_meandiv_1").empty();
			ReactDOM.render(React.createElement(TUserList,{orgId:msg.orgId,ishowStop:false,keyValue:""}),document.getElementById("hm_meandiv_1"));
			_this.setState({orgInfo:msg});
		});
		nsEventBus.eventbus.on("userClick","userClick",function(msg){
			if(_this.state.addresseeList.length == 0){
				var tmp=_this.state.addresseeList;
				tmp.push({id:msg.userId,name:msg.userName});
				_this.setState({addresseeList:tmp});
			}
		});
	},
	ensure:function(){
		if(this.state.addresseeList.length != 0){
			$(".buiddings_borwse_findpeople").attr("userId",this.state.addresseeList[0].id);
			$(".buiddings_borwse_findpeople").val(this.state.addresseeList[0].name);
		}
		this.setState({showModal:false});
	},
	render:function () {
		var _this = this;
		var tmp = [];
		var selectUsers = [];
		if (typeof(this.state.stateList) != undefined && this.state.stateList != null) {
			this.state.stateList.map(function (data) {
				tmp.push(React.createElement("option", {className: "ht_option", value: data.stateId}, data.stateName));
			});
		}
		var showSelectUser = [];
		showSelectUser.push(React.createElement("div", {id: "hm_leftdiv"},
			React.createElement("div", {ref: "div", className: "org_tree_div", id: "datas_id"},
				React.createElement(Tree, {isStopped: false, checkedInfo: this.state.orgInfo})
			)
			),
			React.createElement("div", {id: "hm_meandiv"},
				React.createElement("div", {id: "hm_meandiv_1"})
			)
		);
		if (typeof (this.state.addresseeList) != "undefined") {
			for (var i = 0; i < this.state.addresseeList.length; i++) {
				var aa = React.createElement("tr", {className: "", onClick:this.usertrClick},
					React.createElement("td", {
						id: this.state.addresseeList[i].userId,
						className: "userInfo_div_td3"
					}, this.state.addresseeList[i].name)
				)
				selectUsers.push(aa);
			}
		}
		var  address="";
		if(this.state.addresseeList!=null&&this.state.addresseeList!=""){
			this.state.addresseeList.map(function(data){
				address=address+data.name+"；";
			});
		}
		return(
			React.createElement(Modal,{className:"Findpeople_Model",bsSize:"large",show:this.state.showModal,keyboard:true,onHide:this.close,animation:true},
				React.createElement(
					Modal.Header,
					{ closeButton: true },
					React.createElement(
						Modal.Title,
						{ id: "contained-modal-title-lg" },
						this.state.title
					)
				) ,
				React.createElement("div", {className: "Findpeople_div"},
					showSelectUser
				),
				React.createElement("div",{},
					React.createElement("button",{className:"ensure_Findpeople",onClick:_this.ensure}, "确定")
				)
			)
		)
	}
});
var point = 0;
var array = [];
var BuildingbRowseModel = React.createClass({
	getInitialState: function getInitialState() {
		if(this.props.building.building.photos.length!=0){
			return {
				data:this.props.building,
				Gridgroup:[],//网格组名
				 //bigcase:[],//违建大案
				harmLevel:[],//危害等级
				harmLevel1:this.props.harmfulCode,
				buildingType:[],//违建类型
				IllegalType:[],//违法类型
				ConstructType:[],//违建建筑类型
				SourceType:[],//违建来源
				GroundCode:[],//建筑物类型
				CommunityCode:[],
				BuildingFunction:[],//建筑功能
				fileId: this.props.building.building.photos[0].fileId,
				fileId1: this.props.building.building.photos[0].fileId,
				list:[],
				autolist:[],
				activePage:1,
				pageDataCount:16,
				dataCount:"",
				bingTime:"",
				endTime:"",
				buildingsinsert:[],
				imgList:this.props.building.building.photos,
				imgList1:this.props.building.building.photos,
			};
		}else{
			return {
				data:this.props.building,
				Gridgroup:[],//网格组名
				// bigcase:[],//违建大案
				harmLevel:[],//危害等级
				harmLevel1:this.props.harmfulCode,
				buildingType:[],//违建类型
				IllegalType:[],//违法类型
				ConstructType:[],//违建建筑类型
				SourceType:[],//违建来源
				GroundCode:[],//建筑物类型
				CommunityCode:[],
				BuildingFunction:[],//建筑功能
				fileId: [],
				list:[],
				autolist:[],
				activePage:1,
				pageDataCount:16,
				dataCount:"",
				bingTime:"",
				endTime:"",
				buildingsinsert:[],
				imgList:[],
				imgList1:[],
				fileId1: "",
			};
		}
	},
	hanOnColse:function(){
		layer.confirm('您确定要放弃操作吗？', {
				btn: ['确定','取消'] //按钮
			},
			function(index){
				$(".buiddings_borwsse_fudierji3").fadeOut(300);
				$(".buiddings_borwsse_dierji3").animate({top:'-22px'},350);
				layer.close(index);
			});
	},
	hanOnIsLASelect: function(even){
		selecthidden();
	},
	hanOnBlurInput: function(ee){
		var local = new BMap.LocalSearch(map, {
			renderOptions:{map: map}
		});
		local.search(ee.target.value,{forceLocal:true});
		local.setLocation("深圳市");	// 设置检索范围

		local.setMarkersSetCallback(function(mar){
			for(var i=0;i<mar.length;i++){
				mar[i].marker.addEventListener("click", createMarker(mar,i))
			}

			function createMarker(mar,i){
				return function(){
					$("#buidings_isinsert_address").val(mar[i].address);
				}
			}
		})
	},
	componentDidMount: function(){
		nsEventBus.eventbus.on("UploadImage_update1","UploadImage_update1",function(Image){
			_this.setState({imgList:Image[0]});
			_this.state.fileId = Image[0].fileId;
		});
		nsEventBus.eventbus.on("UploadImage_update2","UploadImage_update2",function(Image){
			_this.setState({imgList1:Image[0]});
			_this.state.fileId = Image[0].fileId;
		});
		$("#allmap_point_click").attr({"readonly":"readonly"});

		$("b").each(function(index){
			if($("b").eq(index).text() == "*"){
				$("b").eq(index).css({"color":"red"});
			}
		})
		map = new BMap.Map("allmap");
//    	var point = new BMap.Point(116.400244,39.92556);
		map.centerAndZoom("深圳南澳", 13);
		map.setDefaultCursor("default");
		map.enableScrollWheelZoom(true);
		// 百度地图API功能
		var _this = this;
		var sid = getCookie("sid");
		var rules={"sid":sid,"typeId":"'BuildingType','BigCaseCode','GroundCode','HarmfulCode','IllegalCode','ConstructCode','SourceCode','CommunityCode','BuildingFunction'"};
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"commonCode.do?action=listSub",
			dataType:'json',
			data: tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					var bigcase=[];
					var harmLevel=[];
					var buildingtype=[];
					var illegaltype=[];
					var constructtype=[];
					var sourcetype=[];
					var groundtype=[];
					var communitycode=[];
					var buildingfunction=[];
					for(var i=0;i<data.commonCodeList.length;i++){
						if(data.commonCodeList[i].typeId=="BuildingType"){
							buildingtype.push(data.commonCodeList[i]);
						}
						// if(data.commonCodeList[i].typeId=="BigCaseCode"){
						// 	bigcase.push(data.commonCodeList[i]);
						// }
						if(data.commonCodeList[i].typeId=="GroundCode"){
							groundtype.push(data.commonCodeList[i]);
						}
						if(data.commonCodeList[i].typeId=="HarmfulCode"){
							harmLevel.push(data.commonCodeList[i]);
						}
						if(data.commonCodeList[i].typeId=="IllegalCode"){
							illegaltype.push(data.commonCodeList[i]);
						}
						if(data.commonCodeList[i].typeId=="ConstructCode"){
							constructtype.push(data.commonCodeList[i]);
						}
						if(data.commonCodeList[i].typeId=="SourceCode"){
							sourcetype.push(data.commonCodeList[i]);
						}
						if(data.commonCodeList[i].typeId=="CommunityCode"){
							communitycode.push(data.commonCodeList[i]);
						}
						if(data.commonCodeList[i].typeId=="BuildingFunction"){
							buildingfunction.push(data.commonCodeList[i]);
						}
					}
					// this.setState({bigcase:bigcase});
					this.setState({harmLevel:harmLevel});
					this.setState({buildingType:buildingtype});
					this.setState({IllegalType:illegaltype});
					this.setState({ConstructType:constructtype});
					this.setState({SourceType:sourcetype});
					this.setState({GroundCode:groundtype});
					this.setState({CommunityCode:communitycode});
					this.setState({BuildingFunction:buildingfunction});
					$(".buiddings_borwse_community").val(this.props.building.building.area1);
				} else{
					layer.alert("请求失败！"+data.errorMsg,{icon:2,title:"错误"});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error,{icon:2,title:"错误"});
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
		var sid = getCookie("sid");
		var rules1={"sid":sid,"orderNo":2,"orgName":""};
		var tmp1 = JSON.stringify(rules1);
		$.ajax({
			url:common_ip+"orgInfo.do?action=listByCmd",
			dataType:'json',
			data: tmp1,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					this.setState({Gridgroup:data.orgList});
					$(".buiddings_borwse_grid").val(this.props.building.building.gridId);
				} else{
					layer.alert("请求失败！"+data.errorMsg,{icon:2,title:"错误"});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error,{icon:2,title:"错误"});
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
		$("body").keydown(function(e) {
			if (e.keyCode == "13") {//keyCode=13是回车键
				$('.buiddings_borwsse_sub').click();
			}
		});
		map.addEventListener("click",function(e){
			point = e.point;
			$("#allmap_point_click").val(e.point.lng + "," + e.point.lat);
			// console.log(e.point.lng + "," + e.point.lat);
		});
	},
	buildingtmp: function(insertIsupdate) {
		var sid = getCookie("sid");
		var harmfulCode = $(".buiddings_borwse_hazardlevel option:selected").text();
		if (this.state.harmLevel1 != "" && this.state.harmLevel1 != undefined && this.state.harmLevel1.length != 0){
			harmfulCode = this.state.harmLevel1;
		}
		var area1 = $(".buiddings_borwse_community option:selected").text();
		var groupNo = $(".buiddings_borwse_group2").val();
		var address = $("#buidings_isinsert_address").val();
		var bakAddress = $("#buidings_isinsert_address2").val();
		var officialNo = $(".buiddings_borwse_housecode").val();
		var gridId = $(".buiddings_borwse_grid option:selected").text();
		var Buildingfunction =  $(".Buildingfunction option:selected").text();
		var AddcoverArea = $("#AddcoverArea").val();
		var AddbuildArea = $("#AddbuildArea").val();
		var coverArea = $("#buiddings_borwse_areacount").val();
		var buildArea = $(".buiddings_borwse_buildcount").val();
		var totalFloor = $(".buiddings_borwse_layer").val();
		var totalBlock = $(".buiddings_borwse_Building").val();
		var buildFlag = $(".buiddings_borwse_startsituation").val();
		var newFlag = $(".buiddings_borwse_buildingtype").val();
		var ownerName = $(".buiddings_borwse_ownername").val();
		var ownerTel = $(".buiddings_borwse_contact").val();
		var ownerIdCode = $(".buiddings_borwse_identity").val();
		var illegalCode = $(".buiddings_borwse_contrarytype option:selected").text();
		var sourceCode = $(".buiddings_borwse_casesource option:selected").text();
		var discoverer = $(".buiddings_borwse_findpeople").val();
		var discoverTime = $(".buiddings_borwse_oundtime").val();
		var caseFlag = $(".buiddings_borwse_isla").val();
		var caseNo = $(".buiddings_borwse_Filingh").val();
		var caseRemark = $(".buiddings_borwse_Filingexplain").val();
		var buildingNo = $("#buidings_borwse_id").val();
		var groupNo = $(".buiddings_borwse_group2").val();
		//$(".buiddings_borwsse_auto span").text("");

		var ConstructCode = $(".buiddings_architecturetype").val();
		var GroundCode = $(".buiddings_buildingtype").val();
		var planDestroyDate = $(".buiddings_borwse_removaldate").val();
		var creator = getCookie("userName");
		var buildingRemark = $(".buiddings_borwse_remark").val();
		var approveId = $("#buidings_approveNo_id").val();
		//var ConstrucTeamMan = $(".buiddings_ConstructionTeamMan").val();
		var Approvaltime = $(".Approvaltime").val();
		var BaseArea = $(".FoundationArea").val();
		var date = /^(\d{4})-(\d{2})-(\d{2})$/
		var hintsData= document.getElementsByClassName("buildings_hintId");
		var hintsId = [];
		for(var i = 0;i<hintsData.length;i++){
			hintsId.push(hintsData[i].innerText);
		}
		var renovationstartdate = "";
		var renovationenddate = "";
		if(this.state.data.building.harmfulCode == "装修"){
			var  renovationstartdate = $(".buiddings_renovation_startdate").val();
			var renovationenddate = $(".buiddings_renovation_enddate").val();
			if(address == "" || renovationstartdate == "" || point == "" || this.state.imgList.length==0 || groupNo==""||renovationenddate == "" || coverArea == "" || buildArea == "" || totalFloor == "" || totalBlock== "" || ownerName == ""){
				layer.msg("数据填写不完整",{icon:0});
			}
		}else{
			if(address == "" || coverArea == "" || buildArea == ""|| point  == "" ||this.state.imgList.length==0 ||groupNo==""|| totalFloor == "" || totalBlock== "" || ownerName == ""|| discoverer == "" || discoverTime == ""){
				layer.msg("数据填写不完整",{icon:0});
			}
		}
	/*	if(buildingNo == "" && buildingNo.length == 0){
			$(".building_spantishi1").text("台账编码不能为空!");
			return -1;
		}*/
		var ze = /^(-)?\d{1,7}(\.\d{1,3})?$/;
		var photo = this.state.fileId;
		var _this = this;
		if(buildingNo != "" && buildingNo.length > 20){
			$(".building_spantishi1").text("违建编码长度不超过20!");
			return -1;
		}else{
			$(".building_spantishi1").text("");
		}
		if(groupNo=="") {
			// $(".building_spantishi34").text("小组不能为空!");
			// return -1;
		}else{
			if(groupNo.length>36){
				$(".building_spantishi34").text("小组长度不超过36!");
				return -1;
			}else{
				$(".building_spantishi34").text("");
			}
		}
		if (address == "") {
			$(".building_spantishi2").text("地址不能为空!");
			return -1;
		}else{
			if(address.length>36){
				$(".building_spantishi2").text("地址长度不超过100!");
				return -1;
			}else{
				$(".building_spantishi2").text("");
			}
		}
		if (point == null || point == "") {
			$(".building_allmap_span").text("请点击地图,获取一个地址!");
			return -1;
		}else{
			$(".building_allmap_span").text("");
		}


		/*if(points == null || points == 0){
		 $(".building_spantishi2").text("地址不存在!");
		 return -1;
		 }*/
		// if (bakAddress == "") {
		// 	$(".building_spantishi3").text("备用地址不能为空!");
		// 	return -1;
		// }else {
		// 	$(".building_spantishi3").text("");
		// }
		/*if(officialNo == "" && officialNo.length == 0){
		 $(".building_spantishi4").text("房屋编号不能为空!");
		 return -1;
		 }*/
		if(bakAddress!="" && bakAddress.length>100){
			$(".building_spantishi3").text("备用地址长度不超过100!");
			return -1;
		}else{
			$(".building_spantishi3").text("");
		}
		if(this.state.data.building.harmfulCode != "拆危重建") {
			if (this.state.imgList == null || this.state.imgList == "" || this.state.imgList.length == 0) {
				$(".building_spantishi33").text("请上传照片详细地址!");
				return -1;
			} else {
				$(".building_spantishi33").text("");
			}
		}
		if (Buildingfunction == "" && Buildingfunction.length == 0) {
			$(".building_spantishi20").text("建筑功能不能为空!");
			return -1;
		}else{
			if(Buildingfunction.length>100){
				$(".building_spantishi20").text("建筑功能长度不超过100!");
				return -1;
			}else{
				$(".building_spantishi20").text("");
			}
		}

		if (ze.test(AddcoverArea) == false  && AddcoverArea.length != 0) {
			$(".building_spantishi21").text("示例:100.0");
			return -1;
		}else{
			$(".building_spantishi21").text("");
		}
		if (ze.test(AddbuildArea) == false && AddbuildArea.length != 0) {
			$(".building_spantishi22").text("示例:100.0");
			return -1;
		}else{
			$(".building_spantishi22").text("");
		}
		if (coverArea == "" && coverArea.length == 0) {
			$(".building_spantishi6").text("总占地面积不能为空!");
			return -1;
		}else{
			$(".building_spantishi6").text("");
		}
		if (ze.test(coverArea) == false) {
			$(".building_spantishi6").text("示例:100.0");
			return -1;
		}else{
			$(".building_spantishi6").text("");
		}
		if (buildArea == "" && buildArea.length == 0) {
			$(".building_spantishi7").text("建筑面积不能为空!");
			return -1;
		}else{
			$(".building_spantishi7").text("");
		}
		if (ze.test(buildArea) == false) {
			$(".building_spantishi7").text("示例:100.0");
			return -1;
		}else{
			$(".building_spantishi7").text("");
		}
		if (totalFloor == "" && totalFloor.length == 0) {
			$(".building_spantishi8").text("层数不能为空!");
			return -1;
		}else{
			$(".building_spantishi8").text("");
		}
		var ze1 = /\D/g;
		if (ze1.test(totalFloor) == true) {
			$(".building_spantishi8").text("层数必须为整数!");
			return -1;
		}else{
			$(".building_spantishi8").text("");
		}
		if (totalBlock == "" && totalBlock.length == 0) {
			$(".building_spantishi9").text("栋数不能为空!");
			return -1;
		}else{
			$(".building_spantishi9").text("");
		}
		if (ze1.test(totalBlock) == true) {
			$(".building_spantishi9").text("栋数必须为整数!");
			return -1;
		}else{
			$(".building_spantishi9").text("");
		}
		if(this.state.data.building.harmfulCode == "拆危重建") {
			if (BaseArea == "" && BaseArea.length == 0) {
				$(".building_spantishi35").text("地基面积不能为空!");
				return -1;
			} else {
				$(".building_spantishi35").text("");
			}
			if (ze.test(BaseArea) == false) {
				$(".building_spantishi35").text("示例:100.0");
				return -1;
			} else {
				$(".building_spantishi35").text("");
			}
			if (_this.state.imgList1 == null || _this.state.imgList1 == "" || _this.state.imgList1.length == 0) {
				$(".building_spantishi36").text("请上传施工牌照片!");
				return -1;
			} else {
				$(".building_spantishi36").text("");
			}
			if (approveId != "" && approveId.length > 36) {
				$(".building_spantishi37").text("审批编号长度不超过36!");
				return -1;
			}else{
				$(".building_spantishi37").text("");
			}
			if(Approvaltime == ""){
				$(".building_spantishi38").text("请选择审批时间!");
				return -1;
			}else{

				if (!date.test(Approvaltime)) {
					$(".building_spantishi38").text("示例:2016-01-01");
					return -1;
				}else{
					$(".building_spantishi38").text("");
				}
			}
		}

		if (ownerName == "" && ownerName.length == 0) {
			$(".building_spantishi10").text("业主姓名不能为空!");
			return -1;
		}else{
			var validateName =/^[\u4E00-\u9FA5]+$/;
			if(ownerName.length>10){
				$(".building_spantishi10").text("业主姓名长度不超过10");
				return -1;
			}else if(!validateName.test(ownerName)){
				// $(".building_spantishi10").text("业主姓名必须为中文名");
				// return -1;
			}else{
				$(".building_spantishi10").text("");
			}
		}
		if(this.state.data.building.harmfulCode == "拆危重建") {
			if (ownerIdCode == "" && ownerIdCode.length == 0) {
				$(".building_spantishi12").text("施工队身份证号不能为空!");
				return -1;
			}
		}
		var yzphone = /^1[3|4|5|7|8]\d{9}$/;
		/*if(ownerTel == "" && ownerTel.length == 0){
		 $(".building_spantishi11").text("联系电话不能为空!");
		 return -1;
		 }*/
		if(ownerTel != "" && ownerTel.length != 0){
			if(!yzphone.test(ownerTel)){
				$(".building_spantishi11").text("联系电话格式错误!");
				return -1;
			}
		}

		var yz = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
		if (ownerIdCode != "") {
			if (yz.test(ownerIdCode) == false) {
				$(".building_spantishi12").text("身份证号格式错误!");
				return -1;
			}else{
				$(".building_spantishi12").text("");
			}
		}

		if(this.state.data.building.harmfulCode == "装修"){
			discoverer = "";
			discoverTime = new Date().Format("yyyy-MM-dd");

			if (renovationstartdate == "") {
				$(".building_spantishistart").text("请选择装修开始时间!");
				return -1;
			}else{
				if (!date.test(renovationstartdate)) {
					$(".building_spantishistart").text("示例:2016-01-01");
					return -1;
				}else{
					$(".building_spantishistart").text("");
				}
			}
			if (renovationenddate == "") {
				$(".building_spantishiend").text("请选择装修结束时间!");
				return -1;
			}else{
				if (!date.test(renovationenddate)) {
					$(".building_spantishiend").text("示例:2016-01-01");
					return -1;
				}else{
					$(".building_spantishiend").text("");
				}
			}
			if(renovationstartdate != "" && renovationenddate != ""){
				if(renovationstartdate > renovationenddate){
					layer.alert("装修开始日期不能大于结束日期");
					return -1;
				}
			}

		}else if(this.state.data.building.harmfulCode == "违建"){
			if (discoverer == "" && discoverer.length == 0) {
				$(".building_spantishi13").text("发现人不能为空!");
				return -1;
			}else{
				$(".building_spantishi13").text("");
			}
			if (discoverTime == "") {
				$(".building_spantishi14").text("发现时间不能为空!");
				return -1;
			}else{
				if (!date.test(discoverTime)) {
					$(".building_spantishi14").text("示例:2016-01-01");
					return -1;
				}else{
					$(".building_spantishi14").text("");
				}
			}
		}


		/*if(planDestroyDate == "" && planDestroyDate.length == 0){
		 $(".building_spantishi15").text("计划拆除日不能为空!");
		 return -1;
		 }*/
		if (planDestroyDate != "") {
			if (!date.test(planDestroyDate)) {
				$(".building_spantishi15").text("示例:2016-01-01");
				return -1;
			}else{
				$(".building_spantishi15").text("");
			}
		}
		if(planDestroyDate != "" && discoverTime != ""){
			if(discoverTime > planDestroyDate){
				layer.alert("发现日期不能大于计划拆除日");
				return -1;
			}
		}


		if(caseFlag == "1"){
			if(caseNo!="" && caseNo.length>50){
				$(".building_spantishi17").text("立案号长度不超过50!");
				return -1;
			}else{
				$(".building_spantishi17").text("");
			}
			if(caseRemark!="" && caseRemark.length>50){
				$(".building_spantishi18").text("立案说明长度不超过50!");
				return -1;
			}else{
				$(".building_spantishi18").text("");
			}
		}
		if(buildingRemark != "" && buildingRemark.length > 100){
			$(".building_spantishi19").text("备注长度不超过100!");
			return -1;
		}else{
			$(".building_spantishi19").text("");
		}
//		var rules = {"sid":sid,"typeId":this.state.parentId,"itemId":this.state.data.list[this.state.keyInfo].itemId};

		var rules = null;

		if(insertIsupdate == 1){
			rules = {"sid":sid,"harmfulCode":harmfulCode,"area1":area1,"area0":groupNo,"address":address,"bakAddress":bakAddress,"officialNo":officialNo,"gridId":gridId,
				"coverArea":coverArea,"buildArea":buildArea,"totalFloor":totalFloor,"totalBlock":totalBlock,"buildFlag":parseInt(buildFlag),"newFlag":parseInt(newFlag),"ownerName":ownerName,
				"ownerTel":ownerTel,"ownerIdCode":ownerIdCode,"ownerIdCode":ownerIdCode,"illegalCode":illegalCode,"sourceCode":sourceCode,"discoverer":discoverer,
				"discoverTime":discoverTime,"bigCaseCode":"default","bigCaseFlag":"false","caseFlag":parseInt(caseFlag),"caseNo":caseNo,"caseRemark":caseRemark,
				"buildingNo":buildingNo,"planDestroyDate":planDestroyDate,"creator":creator,"ConstructCode":ConstructCode,"GroundCode":GroundCode,"longtiude":point.lng,"latitude":point.lat,"buildingRemark":buildingRemark};
		}
		if(insertIsupdate == 2){
			rules = {"sid":sid,"BaseArea":BaseArea,"AuditNo":approveId,"AuditTime":Approvaltime,"addFunction":Buildingfunction,"addBuildArea":AddcoverArea,"oldBuildArea":AddbuildArea,"hintIds":hintsId,"harmfulCode":harmfulCode,"area1":area1,"area0":groupNo,"address":address,"bakAddress":bakAddress,"officialNo":officialNo,"gridId":gridId,
				"coverArea":coverArea,"buildArea":buildArea,"totalFloor":totalFloor,"totalBlock":totalBlock,"buildFlag":parseInt(buildFlag),"newFlag":parseInt(newFlag),"ownerName":ownerName,
				"ownerTel":ownerTel,"ownerIdCode":ownerIdCode,"ownerIdCode":ownerIdCode,"illegalCode":illegalCode,"sourceCode":sourceCode,"discoverer":discoverer,//"ConstructPhoto":this.state.fileId1,
				"discoverTime":discoverTime,"bigCaseCode":"default","bigCaseFlag":"false","caseFlag":parseInt(caseFlag),"caseNo":caseNo,"caseRemark":caseRemark,
				"buildingNo":buildingNo,"planDestroyDate":planDestroyDate,"creator":creator,"ConstructCode":ConstructCode,"GroundCode":GroundCode,"buildingId":buildingId.buildingId,
				"longtiude":point.lng,"latitude":point.lat,"decorateStartTime":renovationstartdate,"decorateEndTime":renovationenddate,"photo":photo,"buildingRemark":buildingRemark};
		}

		var tmp  = JSON.stringify(rules);

		return tmp;
	},
	editNewInfoMation:function(){
		var tmp = this.buildingtmp(2);
		if(tmp == -1){
			return;
		}

		$.ajax({
			url:common_ip+"buildings.do?action=update",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					layer.msg("修改成功！",{icon:1});
					$(".buiddings_borwsse_fudierji3").css({"display":"none"});
					// window.location.reload();
					nsEventBus.eventbus.broadcast("ledgerdatail");
				}else{
					layer.alert(data.errorMsg,{icon:2});
				}
			}.bind(this),
			error: function(request, state, error){
				alert(error);
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
	},
	hanOnPointClick: function(){
		$("#allmap").slideToggle();
		map.centerAndZoom(point, 15);
	},
	hanOnBuidingsSouce:function(){
		var _this = this;
		var time=new Date().GetDate(365);
		var time2 = new Date().Format("yyyy-MM-dd");
		var keyword = $("#crews_keytext").val();
		var sid = getCookie("sid");
		var tmp = {"sid":sid,"pageNo":_this.state.activePage,"pageSize":_this.state.pageDataCount,"timeFrom":time,"timeTo":time2,state:"","keyword":keyword,"buildId":this.props.buildingId.buildingId};
		var tmp1  = JSON.stringify(tmp);
		$.ajax({
			url:common_ip+"hint.do?action=list",
			dataType:'json',
			data:tmp1,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					_this.setState({buildingsinsert:data.illegalHintPager.list});
					_this.setState({dataCount:data.illegalHintPager.totalCount});
				}else{
					layer.alert("加载数据失败"+data.errorMsg,{icon:2,title:"错误"});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert("发生错误",{icon:2,title:"错误"});

			}.bind(this)
		});
	},
	handleSelect:function(event, selectedEvent){
		this.setState({
			activePage: selectedEvent.eventKey
		});
		var _this = this;
		var time=new Date().GetDate(365);
		var time2 = new Date().Format("yyyy-MM-dd");
		var keyword = $("#crews_keytext").val();
		var sid = getCookie("sid");
		var tmp = {"sid":sid,"pageNo":selectedEvent.eventKey,"pageSize":_this.state.pageDataCount,"timeFrom":time,"timeTo":time2,state:"","keyword":keyword,"buildId":"forSave" };
		var tmp1  = JSON.stringify(tmp);
		$.ajax({
			url:common_ip+"hint.do?action=list",
			dataType:'json',
			data:tmp1,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					_this.setState({buildingsinsert:data.illegalHintPager.list});
					_this.setState({dataCount:data.illegalHintPager.totalCount});
				}else{
					layer.alert("加载数据失败"+data.errorMsg,{icon:2,title:"错误"});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert("发生错误",{icon:2,title:"错误"});

			}.bind(this)
		});
	},
	Findpeople:function (){
		$("#EditBuilDingsTwo").empty();
		ReactDOM.render(React.createElement(Findpeople,{showModal:true,title:"选择发现人"}),document.getElementById("EditBuilDingsTwo"));
	},
	render:function()
	{
		buildingId = this.props.buildingId;
		// var bigcase=[];
		// if(typeof(this.state.bigcase)!=undefined&&this.state.bigcase!=null){
		// 	this.state.bigcase.map(function(info,index){
		// 		if(info.codeName == "无"){
		// 			bigcase.push(React.createElement("option",{value:""},info.codeName));
		// 		}else{
		// 			bigcase.push(React.createElement("option",{value:info.codeId},info.codeName));
		// 		}
		// 	})
		// }
		var harmlevel=[];
		if(typeof(this.state.harmLevel)!=undefined&&this.state.harmLevel!=null){
			this.state.harmLevel.map(function(info){
				harmlevel.push(React.createElement("option",{value:info.codeId},info.codeName));
			})
		}
		var buildingType=[];
		if(typeof(this.state.buildingType)!=undefined&&this.state.buildingType!=null){
			this.state.buildingType.map(function(info){
				buildingType.push(React.createElement("option",{value:info.codeId=="存量"?0:1},info.codeName));
			})
		}
		var illegalType=[];
		if(typeof(this.state.IllegalType)!=undefined&&this.state.IllegalType!=null){
			this.state.IllegalType.map(function(info){
				illegalType.push(React.createElement("option",{value:info.codeId},info.codeName));
			})
		}
		var constructType=[];
		if(typeof(this.state.ConstructType)!=undefined&&this.state.ConstructType!=null){
			this.state.ConstructType.map(function(info){
				constructType.push(React.createElement("option",{value:info.codeId},info.codeName));
			})
		}
		var sourceType=[];
		if(typeof(this.state.SourceType)!=undefined&&this.state.SourceType!=null){
			this.state.SourceType.map(function(info){
				sourceType.push(React.createElement("option",{value:info.codeId},info.codeName));
			})
		}
		var groundCode=[];
		if(typeof(this.state.GroundCode)!=undefined&&this.state.GroundCode!=null){
			this.state.GroundCode.map(function(info){
				groundCode.push(React.createElement("option",{value:info.codeId},info.codeName));
			})
		}
		var gridgroup=[];
		if(typeof(this.state.Gridgroup)!=undefined&&this.state.Gridgroup!=null){
			this.state.Gridgroup.map(function(info){
				gridgroup.push(React.createElement("option",{value:info.orgId},info.orgName));
			})
		}
		var gridgroup=[];
		if(typeof(this.state.Gridgroup)!=undefined&&this.state.Gridgroup!=null){
			this.state.Gridgroup.map(function(info){
				gridgroup.push(React.createElement("option",{value:info.orgName},info.orgName));
			})
		}
		var community=[];
		if(typeof(this.state.CommunityCode)!=undefined&&this.state.CommunityCode!=null){
			this.state.CommunityCode.map(function(info){
				community.push(React.createElement("option",{value:info.codeId},info.codeName));
			})
		}
		var buildingfunction=[];
		if(typeof(this.state.BuildingFunction)!="undefined"&&this.state.BuildingFunction!=null){
			this.state.BuildingFunction.map(function(info){
				buildingfunction.push(React.createElement("option",{value:info.codeName},info.codeName));
			})
		}
		var _this = this;
		nsEventBus.eventbus.on("ledgerdetails_fileid","ledgerdetails_fileid",function(fileid){
			_this.state.fileId = fileid;
		})

		nsEventBus.eventbus.on("UploadImage_update","UploadImage_update",function(imagedata){
			_this.state.fileId = imagedata[0].fileId;
		});
		nsEventBus.eventbus.on("Illegallybuiltlist","Illegallybuiltlist",function(dataa){
			_this.setState({autolist:dataa});
		});
		return (
			React.createElement("div",{className:"buiddings_borwsse_div",style:{}},
				React.createElement("div",{className:"buiddings_borwsse_hade"},
					React.createElement("span",{className:"buidings_borwsse_title"},"修 改 违 建 台 账"),
					React.createElement("span",{className:"buiddings_borwsse_clear",onClick:this.hanOnColse},"取消")
				),
				React.createElement("div",{className:"buiddings_borwsse_body"},
					React.createElement("div",{className:"buiddings_borwsse_auto"},
						React.createElement("div",{className:"buiddings_borwsse_auto_div"},
							React.createElement("div",{className:"buildings_div_bian1"},
								React.createElement("div",{className:"builddings_text_dddcla"},
									React.createElement("label",{},"台账编号:"),
									React.createElement(Input,{type:"text",id:"buidings_borwse_id"}),
									React.createElement("span",{className:"building_spantishi1"})
								),
								React.createElement("label",{type:"text",className:"harmlevel_label",style:{"display":"none"}},"危害等级:"),
								React.createElement(Input,{type:"select",className:"buiddings_borwse_hazardlevel"},
									harmlevel
								),
								React.createElement("label",null,"社区:"),
								React.createElement(Input,{type:"select",className:"buiddings_borwse_community"},
									community
								),
								React.createElement("div",{className:"builddings_textareea_dddcla"},
								React.createElement("label",{},
									// React.createElement("b",{},"*"),
									React.createElement("b",{},"小组:")
								),
                                React.createElement(Input,{type:"text",className:"buiddings_borwse_group2"}),
                                React.createElement("span",{className:"building_spantishi5"})
								),
								React.createElement("div",{className:"builddings_textareea_dddcla"},
									React.createElement("label",{},
										React.createElement("b",{},"*"),
										React.createElement("b",{},"地址:")
									),
									React.createElement(Input,{type:"textarea",id:"buidings_isinsert_address",onBlur:this.hanOnBlurInput}),
									React.createElement("span",{className:"building_spantishi2"})
								),
								React.createElement("div",{className:"builddings_allmap"},
									React.createElement("div",{id:"allmap_toggleout"},
										React.createElement("div",{id:"allmap"})
									),
									React.createElement("label",{id:"allmap_label",onClick:this.hanOnPointClick},"点击地图定位")
								),
								React.createElement("div",{className:"builddings_text_dddcla"},
									React.createElement("label",{},
										React.createElement("b",{},"*"),
										React.createElement("b",{},"经纬度:")
									),
									React.createElement(Input,{type:"text",id:"allmap_point_click"}),
									React.createElement("span",{className:"building_allmap_span"})
								),
								React.createElement("div",{className:"buidings_uploadimage_div"},
									React.createElement("label",{},
										React.createElement("b",{},"*"),
										React.createElement("b",{},"详细地址:")
									),
									React.createElement(UploadImage,{className:"notification-modal_input",imgList:this.state.imgList,successNum:this.state.imgList.length,mulSupported:false,tag:"1",uploadNum:1}),
									React.createElement("span",{className:"building_spantishi33"})
								),
								React.createElement("div",{className:"builddings_textareea_dddcla"},
									React.createElement("label",{},
										// React.createElement("b",{},"*"),
										React.createElement("b",{},"备用地址:")
									),
									React.createElement(Input,{type:"textarea",id:"buidings_isinsert_address2"}),
									React.createElement("span",{className:"building_spantishi3"})
								),
								React.createElement("div",{className:"builddings_text_dddcla"},
									React.createElement("label",{type:"text"},"房屋编码:"),
									React.createElement(Input,{type:"text",placeholder:"请输入房屋编码",className:"buiddings_borwse_housecode"}),
									React.createElement("span",{className:"building_spantishi4"})
								),
								React.createElement("div",{className:"builddings_text_dddcla"},
									React.createElement("label",null,"网格号:"),
                                    React.createElement("select",{className:"buiddings_borwse_grid"},
                                        gridgroup
                                    )
								)
							),
							React.createElement("div",{className:"buildings_div_bian2"},
								React.createElement("div",{className:"builddings_text_dddcla"},
									React.createElement("label",null,
										React.createElement("b",{},"*"),
										React.createElement("b",{},"建筑功能:")
									),
									React.createElement(Input,{type:"select",id:"buidings_isinsert_address2",className:"Buildingfunction"},
										buildingfunction
									),
									React.createElement("span",{className:"building_spantishi20"})
								),
								React.createElement("div",{className:"builddings_text_dddcla"},
									React.createElement("label",null,
										React.createElement("b",{},""),
										React.createElement("b",{},"建筑面积:")
									),
									React.createElement(Input,{type:"text",placeholder:"请输入建筑面积",className:"buiddings_borwse_areacount",id:"AddcoverArea"}),
									React.createElement("span",{className:"building_spantishi21"})
								),
								React.createElement("div",{className:"builddings_text_dddcla"},
									React.createElement("label",null,
										React.createElement("b",{},""),
										React.createElement("b",{},"原建设面积:")
									),
									React.createElement(Input,{type:"text",placeholder:"请输入原建设面积",className:"buiddings_borwse_areacount",id:"AddbuildArea"}),
									React.createElement("span",{className:"building_spantishi22"})
								),
								React.createElement("div",{className:"builddings_text_dddcla",id:"label_FoundationArea"},
									React.createElement("label",null,
										React.createElement("b",{},"*"),
										React.createElement("b",{},"地基面积:")
									),
									React.createElement(Input,{type:"text",placeholder:"请输入地基面积",className:"FoundationArea"}),
									React.createElement("span",{className:"building_spantishi35"})
								),
								React.createElement("div",{className:"builddings_text_dddcla"},
									React.createElement("label",null,
										React.createElement("b",{},"*"),
										React.createElement("b",{},"总地块面积:")
									),
									React.createElement(Input,{type:"text",placeholder:"请输入总占地面积",className:"buiddings_borwse_areacount",id:"buiddings_borwse_areacount"}),
									React.createElement("span",{className:"building_spantishi6"})
								),
								React.createElement("div",{className:"builddings_text_dddcla"},
									React.createElement("label",null,
										React.createElement("b",{},"*"),
										React.createElement("b",{},"总建筑面积:")
									),
									React.createElement(Input,{type:"text",placeholder:"请输入总建筑面积",className:"buiddings_borwse_buildcount"}),
									React.createElement("span",{className:"building_spantishi7"})
								),
								React.createElement("div",{className:"builddings_text_dddcla"},
									React.createElement("label",null,
										React.createElement("b",{},"*"),
										React.createElement("b",{},"层数:")
									),
									React.createElement(Input,{type:"text",placeholder:"请输入屋数",className:"buiddings_borwse_layer"}),
									React.createElement("span",{className:"building_spantishi8"})
								),
								React.createElement("div",{className:"builddings_text_dddcla"},
									React.createElement("label",null,
										React.createElement("b",{},"*"),
										React.createElement("b",{},"栋数:")
									),
									React.createElement(Input,{type:"text",placeholder:"请输入栋数",className:"buiddings_borwse_Building"}),
									React.createElement("span",{className:"building_spantishi9"})
								),
								React.createElement("div",{className:"buidings_crewphoto_div"},
									React.createElement("label",{},
										React.createElement("b",{},"*"),
										React.createElement("b",{},"施工牌照片:")
									),
									React.createElement("div",{id:"uploadImage_new"}),
									React.createElement(UploadImage,{className:"notification-modal_input",imgList:this.state.imgList1,successNum:this.state.imgList1.length,mulSupported:false,tag:"2",uploadNum:1}),
									React.createElement("span",{className:"building_spantishi36"})
								),
								React.createElement("div",{className:"builddings_text_dddcla",id:"label_approveNo"},
									React.createElement("label",{},
										React.createElement("b",{},"*"),
										React.createElement("b",{},"审批编号:")
									),
									React.createElement(Input,{type:"text",id:"buidings_approveNo_id"}),
									React.createElement("span",{className:"building_spantishi37"})
								),
								React.createElement("div",{className:"builddings_text_dddcla",id:"label_Approvaltime"},
									React.createElement("label",null,
										React.createElement("b",{},"*"),
										React.createElement("b",{},"审批时间:")
									),
									React.createElement(Input,{type:"date",className:"Approvaltime"}),
									React.createElement("span",{className:"building_spantishi38"})
								),
								React.createElement("div",{className:"builddings_text_dddcla"},
									React.createElement("label",null,"动工情况:"),
									React.createElement(Input,{type:"select",className:"buiddings_borwse_startsituation"},
										React.createElement("option",{value:1},"是"),
										React.createElement("option",{value:0},"否")
									)
								),
								React.createElement("div",{className:"builddings_text_dddcla",id:"label_isSpike"},
									React.createElement("label",null,"是否增量:"),
									React.createElement(Input,{type:"select",className:"buiddings_borwse_buildingtype"},
										buildingType
									)
								)
							),
							React.createElement("div",{className:"buildings_div_bian1"},
								React.createElement("div",{className:"builddings_text_dddcla",id:"label_ownerName"},
									React.createElement("label",null,
										React.createElement("b",{},"*"),
										React.createElement("b",{},"业主姓名:")
									),
									React.createElement(Input,{type:"text",placeholder:"请输入业主姓名",className:"buiddings_borwse_ownername"}),
									React.createElement("span",{className:"building_spantishi10"})
								),
								React.createElement("div",{className:"builddings_text_dddcla",id:"label_ownerTel"},
									React.createElement("label",null,"联系电话:"),
									React.createElement(Input,{type:"text",placeholder:"请输入联系电话",className:"buiddings_borwse_contact"}),
									React.createElement("span",{className:"building_spantishi11"})
								),
								React.createElement("div",{className:"builddings_text_dddcla"},
									React.createElement("label",null,"身份证号:"),
									React.createElement(Input,{type:"text",placeholder:"请输入身份证号",className:"buiddings_borwse_identity"}),
									React.createElement("span",{className:"building_spantishi12"})
								)
							),
							React.createElement("div",{className:"buildings_div_bian2"},
								React.createElement("div",{className:"builddings_text_dddcla",id:"builddings_illegalType"},
									React.createElement("label",null,"违法类型:"),
									React.createElement(Input,{type:"select",className:"buiddings_borwse_contrarytype"},
										illegalType
									)
								),
								React.createElement("div",{className:"builddings_text_dddcla",id:"builddings_sourceType"},
									React.createElement("label",null,"案件来源:"),
									React.createElement(Input,{type:"select",className:"buiddings_borwse_casesource"},
										sourceType
									)
								),
								React.createElement("div",{id:"Discoverer",className:"builddings_text_dddcla"},
									React.createElement("label",null,
										React.createElement("b",{},"*"),
										React.createElement("b",{},"发现人:")
									),
									React.createElement(Input,{type:"text",placeholder:"请输入发现人",onClick:this.Findpeople,className:"buiddings_borwse_findpeople"}),
									React.createElement("span",{className:"building_spantishi13"})
								),
								React.createElement("div",{id:"Foundtime",className:"builddings_text_dddcla"},
									React.createElement("label",null,
										React.createElement("b",{className:"bname"},"*"),
										React.createElement("b",{},"发现时间:")
									),
									React.createElement(Input,{type:"date",className:"buiddings_borwse_oundtime"}),
									React.createElement("span",{className:"building_spantishi14"})
								),
								React.createElement("div",{className:"builddings_text_dddcla",id:"buiddings_removaldate"},
									React.createElement("label",null,"计划拆除日:"),
									React.createElement(Input,{type:"date",className:"buiddings_borwse_removaldate"}),
									React.createElement("span",{className:"building_spantishi15"})
								)
							),
							React.createElement("div",{className:"buildings_div_bian1"},
								React.createElement("div",{className:"builddings_text_dddcla",id:"building_constructType"},
									React.createElement("label",null,"建筑类型:"),
									React.createElement(Input,{type:"select",className:"buiddings_architecturetype"},
										constructType
									)
								),
								React.createElement("div",{className:"builddings_text_dddcla",id:"building_groundCode"},
									React.createElement("label",null,"建筑物类型:"),
									React.createElement(Input,{type:"select",className:"buiddings_buildingtype"},
										groundCode
									)
								),
								React.createElement("div",{id:"RenovBeginTime",className:"builddings_text_dddcla"},
									React.createElement("label",null,
										React.createElement("b",{},"*"),
										React.createElement("b",{},"装修申请日期:")
									),
									React.createElement(Input,{type:"date",className:"buiddings_renovation_startdate"}),
									React.createElement("span",{className:"building_spantishistart"})
								),
								React.createElement("div",{id:"RenovEndTime",className:"builddings_text_dddcla"},
									React.createElement("label",null,
										React.createElement("b",{},"*"),
										React.createElement("b",{},"装修截止日期:")
									),
									React.createElement(Input,{type:"date",className:"buiddings_renovation_enddate"}),
									React.createElement("span",{className:"building_spantishiend"})
								),
								React.createElement("div",{className:"builddings_text_dddcla",id:"label_isRegister"},
									React.createElement("label",null,"是否立案:"),
									React.createElement(Input,{type:"select",className:"buiddings_borwse_isla",onChange:this.hanOnIsLASelect},
										React.createElement("option",{value:1},"是"),
										React.createElement("option",{value:0},"否")
									)
								),
								React.createElement("div",{className:"builddings_text_dddcla",id:"label_caseNo"},
									React.createElement("label",{},"立案号:"),
									React.createElement(Input,{type:"text",className:"buiddings_borwse_Filingh"}),
									React.createElement("span",{className:"building_spantishi17"})
								),
								React.createElement("div",{className:"builddings_text_dddcla",id:"label_Filingdes"},
									React.createElement("label",{},"立案说明:"),
									React.createElement(Input,{type:"textarea",className:"buiddings_borwse_Filingexplain",id:"buidding_borisre"}),
									React.createElement("span",{className:"building_spantishi18"})
								),
								React.createElement("div",{className:"builddings_text_dddcla",id:"label_remark"},
									React.createElement("label",{},
										// React.createElement("b",{},"*"),
										React.createElement("b",{},"备注:")
									),
									React.createElement(Input,{type:"textarea",className:"buiddings_borwse_remark",id:"buidding_borisre"}),
									React.createElement("span",{className:"building_spantishi19"})
								),
								React.createElement("div",{className:"builddings_text_dddcla"},
									React.createElement("div",{id:"clueRecord_title"},
										React.createElement("label",{className:"clueRecord_title1"},"线索记录"),
										React.createElement("b",{},"(提示: 请到右侧搜索相关记录，单击即可添加至此)")
									),
									React.createElement("div",{id:"crews_constructionrecord_content"},
										this.state.autolist.map(function(arr){
											return React.createElement(Crewsauto,{data:arr})
										})
									)

								),
								React.createElement("div",{id:"crews_isinsert_sel"},
									React.createElement(Input,{type:"text",id:"crews_keytext"}),
									React.createElement("button",{id:"",onClick:this.hanOnBuidingsSouce},"搜 索"),
									React.createElement("div",{id:"crews_isinsert_selz"},
										this.state.buildingsinsert.map(function(arr){
											return React.createElement(HintsTable,{data:arr})
										})
									),
									React.createElement(
										"div",
										{id:"hints_divPage"},
										React.createElement(Pagination, {
											id:"hints_pagination",
											prev: true,
											next: true,
											first: '首页',
											last: '尾页',
											ellcommon_ipsis: true,
											boundaryLinks: true,
											items:Math.ceil(this.state.dataCount/this.state.pageDataCount),
											maxButtons: 5,
											activePage: this.state.activePage,
											onSelect: this.handleSelect
										})
									)
								)
							)
						)
					)
				),
				React.createElement("div",{id:"buidings_update_div4"},
					React.createElement("button",{className:"buiddings_borwsse_sub",onClick:this.editNewInfoMation},"保 存")
				)
			)
		);
	}
});
var index = [];
// 窗口页面右边违建组件
var HintsTable = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:"",
		};
	},
	hanOnYiDongClick:function(even){
		$(".crews_built_div").css({"background-color":"#FFF"});
		$(".crews_built_div:hover").css({"background-color":"#FFFBE8"});

		// 获取选中数据下标
		var yuanindex = $(".crews_built_div:hover").index();
		// 全局变量保存着所有的下标，然后进行比较,相等则无法添加到中间显示区域
		for(var i=0;i<index.length;i++){
			if(index[i] == yuanindex){
				return;
			}
		}
		// 添加下标到此集合中
		index.push(yuanindex);

		// 创建对象
		var obj = new Object();
		// 获取到的值放到对象中,可以this.props.属性来获取
		obj.hintId = $(".buildings_crews_id").eq(yuanindex).text();
		obj.statusId = $(".crews_isinsert_selz1").eq(yuanindex).text();
		obj.remark = $(".crews_isinsert_area").eq(yuanindex).text();
		obj.address = $(".crews_isinsert_selz3").eq(yuanindex).text();

		// 在更改的时候,需要用唯一buildingId来判断是否中间区域已经有了相应的数据
		for(var i =0;i<array.length;i++){
			if(array[i].hintId == obj.hintId){
				return;
			}
		}
		// 添加数据到全局变量array集合中
		array.push(obj);

		// 传递到添加页面,保持最新数据
		nsEventBus.eventbus.broadcast("Illegallybuiltlist",array);
	},
	componentDidMount: function(){
	},
	render:function()
	{

		var str;
		if(this.props.data.remark.length > 8){
			str = this.props.data.remark.substr(0,8)+"..."
		}else{
			str = this.props.data.remark;
		}
		var strAddress;
		if(this.props.data.address.length > 8){
			strAddress = this.props.data.address.substr(0,13)+"..."
		}else{
			strAddress = this.props.data.address;
			if(this.props.data.address == "null"){
				strAddress = "";
			}
		}
		return (
			React.createElement("div",{className:"crews_built_div",onClick:this.hanOnYiDongClick},
				React.createElement("label",{className:"buildings_crews_id",style:{"display":"none"}},this.props.data.hintId),
				React.createElement("label",{className:"crews_isinsert_selz1",style:{"display":"none"}},this.props.data.statusId),
				React.createElement("label",{className:"crews_isinsert_selz2"},"【",
					React.createElement("label",{className:"crews_isinsert_area"},str),
					"】"
				),
				React.createElement("span",{className:"crews_isinsert_selz3"},strAddress)
			)
		);
	}
});
var Crewsauto = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
	},
	hanOnHmdClick:function(e){
		$(".crews_hmd_tr:hover").css({"background-color":"#FFFBEB"});
	},
	hanOnClearYiChu:function(){
		// 获取点击×的下标
		var index2 = $(".crews_insert_auto_fdiv:hover").index();
		// 删除全局变量array指定下标数据
		array.splice(index2,1);
		// 删除全局变量index指定下标数据
		index.splice(index2,1);

		// 传递到添加窗口中
		nsEventBus.eventbus.broadcast("Illegallybuiltlist",array);
	},
	componentDidMount: function(){

	},
	render:function()
	{
		var str;
		if(this.props.data.remark.length > 8){
			str = this.props.data.remark.substr(0,7)+"..."
		}else{
			str = this.props.data.remark;
		}
		var strId;
		if(this.props.data.statusId.length > 8){
			strId = this.props.data.statusId.substr(0,13)+"..."
		}else{
			strId = this.props.data.statusId;
			if(this.props.data.statusId == "null"){
				strId = "";
			}
		}
		var strAddress;
		if(this.props.data.address.length > 8){
			strAddress = this.props.data.address.substr(0,13)+"..."
		}else{
			strAddress = this.props.data.address;
			if(this.props.data.address == "null"){
				strAddress = "";
			}
		}
		return (
			React.createElement("div",{className:"crews_insert_auto_fdiv",onClick:this.hanOnIllegalJiClick},
				React.createElement("div",{className:"crews_insert_auto_xdiv"},
					React.createElement("label",{id:"crews_buidl_bhs_label"},"状态编码: "),
					React.createElement("span",{id:"crews_buidl_bhs"},strId),
					React.createElement("span",{className:"buildings_hintId",style:{"display":"none"}},this.props.data.hintId),
					React.createElement("button",{className:"crewsautoclear",onClick:this.hanOnClearYiChu},"×")
				),
				React.createElement("div",{className:"crews_insert_auto_xdiv2"},
					React.createElement("label",{id:"crews_clear_label"},"【"+str+"】"),
					React.createElement("span",{id:"crews_buidl_bhs"},strAddress)
				)
			)
		);
	}
});
$(document).ready(function(){
	$(".lightbox-2").lightbox({
		fitToScreen: true,
		scaleImages: true,
		xScale: 1.2,
		yScale: 1.2,
		displayDownloadLink: true
	});
});
$(document).click(function(e){
	e = window.event || e; // 兼容IE7
	obj = $(e.srcElement || e.target);
	if(obj[0].innerText!="+"){
		$("#ledgerdetails_righttop_div1").css("display", "none");
		$("#ledgerdetails_top_div1").css("display", "none");
		$("#ledgerdetails_lefttop_div1").css("display", "none");
	}
});

var Modal = window.Modal || ReactBootstrap.Modal;

var ApprovalFile = React.createClass({
	getInitialState: function () {
		if(this.props.imgList!=undefined){
			return {
				imgList:this.props.imgList,
				showModal:this.props.showModal,
				title:this.props.title,
				buildingId:this.props.buildingId,
				itemId:this.props.itemId,
				approveDate:this.props.approveDate,
				fileName:this.props.fileName,
			}
		}else{
			return {
				showModal:this.props.showModal,
				title:this.props.title,
				buildingId:this.props.buildingId,
				imgList:[]
			};
		}
	},
	componentDidMount:function(){
		var _this = this;
		nsEventBus.eventbus.on("UploadImage_update1","UploadImage_update",function(msg){
			_this.setState({imgList:msg});
		});
		if(_this.props.itemId!=undefined){
			$(".ApprovalFile_FileNameValue").val(_this.props.fileName);
			document.getElementsByClassName("ApprovalFile_Today")[0].value = _this.props.approveDate;
		}else{
			var mydateInput = document.getElementsByClassName("ApprovalFile_Today")[0];
			var time = new Date().Format("yyyy-MM-dd");
			mydateInput.value=time;
		}
	},
	saveApprovalFile:function(){
		var _this = this;
		var FileName = $(".ApprovalFile_FileNameValue").val();
		if(FileName == ""){
			layer.alert("请输入文件名称!",{icon:0,title:"提示"});
			return;
		}
		if (this.state.imgList == null || this.state.imgList == "" || this.state.imgList.length == 0) {
			layer.alert("请上传审批文件!",{icon:0,title:"提示"});
			return;
		}
		var iList=[];
		this.state.imgList.map(function(data,index){
			var obj = new Object();
			obj.fileId = data.fileId;
			obj.orderNo = index;
			iList.push(obj)
		});

		var sid = getCookie("sid");
		var rules;
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth()+1;
		var day = date.getDate();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();
		var dateStr = year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;
		if(this.state.itemId!=undefined){
			rules = {"sid":sid,"FileName":FileName,"createTime":dateStr,"itemId":this.state.itemId,"buildingId":this.state.buildingId,"approveDate":document.getElementsByClassName("ApprovalFile_Today")[0].value,"fileList":iList};
		}else{
			rules = {"sid":sid,"FileName":FileName,"createTime":dateStr,"buildingId":this.state.buildingId,"approveDate":document.getElementsByClassName("ApprovalFile_Today")[0].value,"fileList":iList};
		}
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"approve.do?action=save",
			dataType:'json',
			data:tmp,
			type:'POST',
			contentType:"application/x-www-form-urlencoded",
			success:function(data){
				if(data.successFlag){
					layer.msg('保存成功',{icon:1});
					nsEventBus.eventbus.broadcast("addHints_success","");
					_this.setState({showModal:false});
				}else{
					layer.alert("保存失败"+data.errorMsg,{icon: 2,title: '错误'});
				}
			}, error:function(request,state,error){
				layer.alert("操作错误",{icon: 2,title: '错误'});
			}
		});
	},
	close: function close() {
		this.setState({showModal:false});
	},
	render:function () {
		return(
			React.createElement(Modal,{id:"ApprovalFile_div",bsSize:"large",show:this.state.showModal,keyboard:true,animation:true},
				React.createElement(
					Modal.Header,
					{ closeButton:true},
					React.createElement("label",{id:"ApprovalFile_close",onClick:this.close},"取消"),
					React.createElement(
						Modal.Title,
						{ id: "ApprovalFile_title" },
						this.state.title
					)
				) ,
				React.createElement("div", {id: "ApprovalFile_content"},
					React.createElement("p",{className:"ApprovalFile_p"},
						React.createElement("label", {className: "ApprovalFile_FileName"},"文件名称"),
						React.createElement("input", {type:"text",className: "ApprovalFile_FileNameValue"})
					),
					React.createElement("p",{className:"ApprovalFile_p"},
						React.createElement("label", {className: "ApprovalFile_ApprovalTime"},"审批时间"),
						React.createElement("input", {type:"date",className: "ApprovalFile_Today"})
					),
					React.createElement("div", {className: "ApprovalFile_Name"},"审批文件"),
					React.createElement("div",{id:"ApprovalFile_images"},
						React.createElement(UploadImage,{imgList:this.state.imgList,successNum:this.state.imgList.length,mulSupported:false})
					)
				),
				React.createElement("button", {className: "ApprovalFilebtn", onClick: this.saveApprovalFile}, "保存")
			)
		)
	}
});

var Ledgerdetails = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:"",
			building:"",
		};
	},
	hanOnMaxImage: function(even){

	},
	handleDelete:function(){
		var _this=this;
		deleteFlag = true;
		var Request = new Object();
		Request = this.GetRequest();
		var buildingId = Request["buildingId"];
		layer.confirm('您确定要删除吗？', {
				btn: ['确定','取消'] //按钮
			},
			function(index){

				layer.close(index);

				var rules = new Object();
				rules.sid = getCookie("sid");
				rules.buildingId =buildingId;
				var tmp = JSON.stringify(rules);
				$.ajax({
					url:common_ip+"buildings.do?action=delete",
					dataType:'json',
					data:tmp,
					type:'post',
					contentType:"application/x-www-form-urlencoded",
					success: function(data){
						if(data.successFlag){
							layer.alert("删除成功！",{icon:1});
							window.location.href="building.html";
						}else{
							layer.alert(data.errorMsg,{icon:2});
						}
					}.bind(this),
					error: function(request, state, error){
						layer.alert(error);
					}.bind(this)
				});
			});
	},
	hanOnUpdateClick:function(){
		$("#EditBuilDings").empty();
		ReactDOM.render(React.createElement(BuildingbRowseModel,{buildingId:this.GetRequest(),building:this.state.data,harmfulCode:this.state.building.harmfulCode}),document.getElementById("EditBuilDings"));
		if(this.state.building.harmfulCode == "装修"){
			$(".buidings_uploadimage_div").show();//详细地址
			$("#label_buildingNo").show();//违建编码
			$("#label_officialNo").show();//房屋编码
			$("#label_SourceArea").show();//原建设面积
			$("#label_AddcoverArea").show();//新增建筑面积
			$("#label_isSpike").show();//是否增量
			$("#label_ownerTel").show();//联系电话
			$("#RenovBeginTime").show();//装修开始
			$("#RenovEndTime").show();//装修结束
			$("#label_isRegister").show();//是否立案
			$("#label_caseNo").show();//立案号
			$("#label_Filingdes").show();//立案说明
			$("#label_remark").show();//备注
			$("#builddings_illegalType").hide();//违法类型
			$("#builddings_sourceType").hide();//案件来源
			$("#buiddings_removaldate").hide();//计划拆除日
			$("#building_constructType").hide();//建筑类型
			$("#building_groundCode").hide();//建筑物类型
			$("#label_FoundationArea").hide();//地基面积
			$(".buidings_crewphoto_div").hide();//施工牌照片
			$("#label_approveNo").hide();//审批编号
			// $("#ConstructionTeamMan").hide();//施工申请人
			$("#label_Approvaltime").hide();//审批时间
			$("#Discoverer").hide();//发现人
			$("#Foundtime").hide();//发现时间
		}else if(this.state.building.harmfulCode == "拆危重建"){
			$("#label_FoundationArea").show();//地基面积
			$(".buidings_crewphoto_div").show();//施工牌照片
			$("#label_approveNo").show();//审批编号
			// $("#ConstructionTeamMan").show();//施工申请人
			$("#label_Approvaltime").show();//审批时间
			$("#label_buildingNo").hide();//违建编码
			$("#label_officialNo").hide();//房屋编码
			$("#label_SourceArea").hide();//原建设面积
			$("#label_isSpike").hide();//是否增量
			$("#label_ownerTel").hide();//联系电话
			$(".buidings_uploadimage_div").hide();//详细地址
			$("#builddings_illegalType").hide();//违法类型
			$("#builddings_sourceType").hide();//案件来源
			$("#buiddings_removaldate").hide();//计划拆除日
			$("#building_constructType").hide();//建筑类型
			$("#building_groundCode").hide();//建筑物类型
			$("#label_AddcoverArea").hide();//新增建筑面积
			$("#Discoverer").hide();//发现人
			$("#Foundtime").hide();//发现时间
			$("#RenovBeginTime").hide();//装修开始
			$("#RenovEndTime").hide();//装修结束
			$("#label_isRegister").hide();//是否立案
			$("#label_caseNo").hide();//立案号
			$("#label_Filingdes").hide();//立案说明
			$("#label_remark").hide();//备注
		}else{
			$(".buidings_uploadimage_div").show();//详细地址
			$("#label_buildingNo").show();//违建编码
			$("#label_officialNo").show();//房屋编码
			$("#label_SourceArea").show();//原建设面积
			$("#label_isSpike").show();//是否增量
			$("#label_ownerTel").show();//联系电话
			$("#builddings_illegalType").show();//违法类型
			$("#builddings_sourceType").show();//案件来源
			$("#buiddings_removaldate").show();//计划拆除日
			$("#building_constructType").show();//建筑类型
			$("#building_groundCode").show();//建筑物类型
			$("#label_AddcoverArea").show();//新增建筑面积
			$("#Discoverer").show();//发现人
			$("#Foundtime").show();//发现时间
			$("#label_isRegister").show();//是否立案
			$("#label_caseNo").show();//立案号
			$("#label_Filingdes").show();//立案说明
			$("#label_remark").show();//备注
			$("#RenovBeginTime").hide();//装修开始
			$("#RenovEndTime").hide();//装修结束
			$("#label_FoundationArea").hide();//地基面积
			$(".buidings_crewphoto_div").hide();//施工牌照片
			$("#label_approveNo").hide();//审批编号
			// $("#ConstructionTeamMan").hide();//施工申请人
			$("#label_Approvaltime").hide();//审批时间
		}
		array = this.state.building.hints;
		var phoho =  this.state.building.photo;
		var fileid = "";
		if(phoho != undefined && phoho != ""){
			var startindex = phoho.indexOf("FileId=")+7;
			var endindex = phoho.indexOf("&wantThum=false")-startindex;
			fileid = phoho.substr(startindex,endindex);
		}
		nsEventBus.eventbus.broadcast("ledgerdetails_fileid",fileid)
		$("#buidings_borwse_id").val(this.state.building.buildingNo);
		var tempStrs = this.state.building.discoverTimeFormat.split(" ");
		var time1 = new Date(tempStrs[0]).Format("yyyy-MM-dd");
		$(".buiddings_borwse_oundtime").val(time1);
		var tempStrs2 = this.state.building.planDestroyDateFormat.split(" ");
        var time2 ="";
        if(tempStrs2!=""){
            time2=new Date(tempStrs2).Format("yyyy-MM-dd");
        }
		var tempStrs3 = this.state.building.auditTimeFormat.split(" ");
		var time3 = new Date(tempStrs3[0]).Format("yyyy-MM-dd");
		$(".Approvaltime").val(time3);

		$(".buiddings_borwse_removaldate").val(time2);
		$(".buiddings_borwse_createperson").val(this.state.building.creator);
		$(".buiddings_borwse_hazardlevel").val(this.state.building.harmfulCode);
		$(".buiddings_borwse_community").val(this.state.building.area1);
		$(".buiddings_borwse_group").val(this.state.building.area0);
		$("#buidings_isinsert_address").val(this.state.building.address);
		$("#buidings_isinsert_address2").val(this.state.building.bakAddress);
		$(".buiddings_borwse_housecode").val(this.state.building.officialNo);
		$(".buiddings_borwse_grid").val(this.state.building.gridId);
		$(".Buildingfunction").val(this.state.building.addFunction);
		$("#AddcoverArea").val(this.state.building.addBuildArea);
		$("#AddbuildArea").val(this.state.building.oldBuildArea);
		$("#buiddings_borwse_areacount").val(this.state.building.coverArea);
		$(".buiddings_borwse_buildcount").val(this.state.building.buildArea);
		$(".buiddings_borwse_layer").val(this.state.building.totalFloor);
		$(".buiddings_borwse_Building").val(this.state.building.totalBlock);
		$(".buiddings_borwse_startsituation").val(this.state.building.buildFlag==true?1:0);
		$(".buiddings_borwse_buildingtype").val(this.state.building.newFlag==true?1:0);
		$(".buiddings_borwse_ownername").val(this.state.building.ownerName);
		$(".buiddings_borwse_contact").val(this.state.building.ownerTel);
		$(".buiddings_borwse_identity").val(this.state.building.ownerIdCode);
		$(".buiddings_borwse_contrarytype").val(this.state.building.illegalCode);
		$(".buiddings_borwse_casesource").val(this.state.building.sourceCode);
		$(".buiddings_borwse_findpeople").val(this.state.building.discoverer);
		$(".buiddings_borwse_isla").val(this.state.building.caseFlag==true?1:0);
		$(".buiddings_borwse_Filingh").val(this.state.building.caseNo);
		$(".buiddings_borwse_Filingexplain").val(this.state.building.caseRemark);
		$(".buiddings_architecturetype").val(this.state.building.constructCode);
		$(".buiddings_buildingtype").val(this.state.building.groundCode);
		$(".buiddings_borwse_group2").val(this.state.building.area0);
		$(".buiddings_renovation_startdate").val(this.state.building.decorateStartTimeFormat);
		$(".buiddings_renovation_enddate").val(this.state.building.decorateEndTimeFormat);
		$(".FoundationArea").val(this.state.building.baseArea);

		$("#buidings_approveNo_id").val(this.state.building.auditNo);
		point = new BMap.Point(this.state.building.longtiude,this.state.building.latitude);
		$("#allmap_point_click").val(this.state.building.longtiude + "," + this.state.building.latitude);
		selecthidden();
		$(".buiddings_borwse_remark").val("");

		$(".buiddings_borwsse_body").animate({scrollTop:0},100)
		$(".buiddings_borwsse_fudierji3").fadeIn(300);
		$(".buiddings_borwsse_dierji3").animate({top:'22px'},350);


		$(".buiddings_borwse_remark").val(this.state.building.buildingRemark);
	},
	windwoszishiying: function(){
		function ee(){
			if(1300 > $(window).width()){
				$(".buiddings_borwsse_fudierji3").css("width",1300+"px");
			}else{
				$(".buiddings_borwsse_fudierji3").css("width",$(window).width()+"px");
			}

			if($("body").height() > $(window).height()){
				if($(".buiddings_borwsse_dierji3").height() >= $("body").height()){
					$(".buiddings_borwsse_fudierji3").css("height",$(".buiddings_borwsse_dierji3").height()+26+"px");
					return;
				}
				$(".buiddings_borwsse_fudierji3").css("height",$("body").height()+"px");
			}else{
				$(".buiddings_borwsse_fudierji3").css("height",$(window).height()+"px");
			}
		}

		$(document).ready(function(){
			//初始化宽度、高度
			ee();
			//当文档窗口发生改变时 触发
			$(window).resize(function(){
				ee();
			});
		});

	},
	hanOnWUpdateClick:function(){
		$("#EditBuilDings").empty();

		ReactDOM.render(React.createElement(BuildingbRowseModel,{buildingId:this.GetRequest(),building:this.state.data,harmfulCode:"高危未拆"}),document.getElementById("EditBuilDings"));
		array = this.state.building.hints;
		var phoho =  this.state.building.photo;
		var fileid = "";
		if(phoho != undefined && phoho != ""){
			var startindex = phoho.indexOf("FileId=")+7;
			var endindex = phoho.indexOf("&wantThum=false")-startindex;
			fileid = phoho.substr(startindex,endindex);
		}
		nsEventBus.eventbus.broadcast("ledgerdetails_fileid",fileid)
		$("#buidings_borwse_id").val(this.state.building.buildingNo);
		var tempStrs = this.state.building.discoverTimeFormat.split(" ");
		var time1 = new Date(tempStrs[0]).Format("yyyy-MM-dd");
		$(".buiddings_borwse_oundtime").val(time1);
		var tempStrs2 = this.state.building.planDestroyDateFormat.split(" ");
		var time2 ="";
		if(tempStrs2!=""){
			time2=new Date(tempStrs2).Format("yyyy-MM-dd");
		}
		$(".buiddings_borwse_removaldate").val(time2);
		var tempStrs3 = this.state.building.auditTimeFormat.split(" ");
		var time3 = new Date(tempStrs3[0]).Format("yyyy-MM-dd");
		$(".Approvaltime").val(time3);
		$(".buiddings_borwse_createperson").val(this.state.building.creator);
		this.state.building.harmfulCode = "高危未拆";

		$(".buiddings_borwse_community").val(this.state.building.area1);
		$(".buiddings_borwse_group").val(this.state.building.area0);

		$("#buidings_isinsert_address").val(this.state.building.address);
		$("#buidings_isinsert_address2").val(this.state.building.bakAddress);
		$(".buiddings_borwse_housecode").val(this.state.building.officialNo);
		$(".Buildingfunction").val(this.state.building.addFunction);
		$("#AddcoverArea").val(this.state.building.addBuildArea);
		$("#AddbuildArea").val(this.state.building.oldBuildArea);
		$("#buiddings_borwse_areacount").val(this.state.building.coverArea);
		$(".buiddings_borwse_buildcount").val(this.state.building.buildArea);
		$(".buiddings_borwse_layer").val(this.state.building.totalFloor);

		$(".buiddings_borwse_Building").val(this.state.building.totalBlock);

		$(".buiddings_borwse_startsituation").val(this.state.building.buildFlag==true?1:0);
		$(".buiddings_borwse_buildingtype").val(this.state.building.newFlag==true?1:0);

		$(".buiddings_borwse_ownername").val(this.state.building.ownerName);
		$(".buiddings_borwse_contact").val(this.state.building.ownerTel);
		$(".buiddings_borwse_identity").val(this.state.building.ownerIdCode);

		$(".buiddings_borwse_contrarytype").val(this.state.building.illegalCode);
		$(".buiddings_borwse_casesource").val(this.state.building.sourceCode);

		$(".buiddings_borwse_findpeople").val(this.state.building.discoverer);
		$(".buiddings_borwse_isla").val(this.state.building.caseFlag==true?1:0);
		$(".buiddings_borwse_Filingh").val(this.state.building.caseNo);
		$(".buiddings_borwse_Filingexplain").val(this.state.building.caseRemark);
		$(".buiddings_architecturetype").val(this.state.building.constructCode);
		$(".buiddings_buildingtype").val(this.state.building.groundCode);
		$(".buiddings_borwse_group2").val(this.state.building.area0);
		$(".FoundationArea").val(this.state.building.baseArea);

		$("#buidings_approveNo_id").val(this.state.building.auditNo);
		$(".buiddings_renovation_startdate").val(this.state.building.decorateStartTimeFormat);
		$(".buiddings_renovation_enddate").val(this.state.building.decorateEndTimeFormat);

		point = new BMap.Point(this.state.building.longtiude,this.state.building.latitude);
		$("#allmap_point_click").val(this.state.building.longtiude + "," + this.state.building.latitude);
		selecthidden();
		$(".buiddings_borwse_remark").val("");
		$(".buiddings_borwsse_body").animate({scrollTop:0},100)
		$(".buiddings_borwsse_fudierji3").fadeIn(300);
		$(".buiddings_borwsse_dierji3").animate({top:'22px'},350);
		$(".buiddings_borwse_remark").val(this.state.building.buildingRemark);
		$("#RenovBeginTime").hide();
		$("#RenovEndTime").hide();
	},
	windwoszishiying: function(){
		function ee(){
			if(1300 > $(window).width()){
				$(".buiddings_borwsse_fudierji3").css("width",1300+"px");
			}else{
				$(".buiddings_borwsse_fudierji3").css("width",$(window).width()+"px");
			}

			if($("body").height() > $(window).height()){
				if($(".buiddings_borwsse_dierji3").height() >= $("body").height()){
					$(".buiddings_borwsse_fudierji3").css("height",$(".buiddings_borwsse_dierji3").height()+26+"px");
					return;
				}
				$(".buiddings_borwsse_fudierji3").css("height",$("body").height()+"px");
			}else{
				$(".buiddings_borwsse_fudierji3").css("height",$(window).height()+"px");
			}
		}

		$(document).ready(function(){
			//初始化宽度、高度
			ee();
			//当文档窗口发生改变时 触发
			$(window).resize(function(){
				ee();
			});
		});
	},
	componentDidMount: function(){
		this.windwoszishiying();

		var obj = document.getElementById("ledgerdetails_rightgun_div2");
		if(obj.scrollHeight>obj.clientHeight||obj.offsetHeight>obj.clientHeight){
			$(".ledgerdetails_lineheight_ddiv .ledgerdetails_lineheight_image1").css({"width":"181px"});
		}

		var _this=this;
		nsEventBus.eventbus.on("addHints_success","addHints_success",function(event){
			_this.queryBuildingInfo(_this);
		});

		this.queryBuildingInfo(this);

		$(".buiddings_borwsse_fudierji3").click(function(event){
			if(this == event.target){
				layer.confirm('您确定要放弃操作吗？', {
						btn: ['确定','取消'] //按钮
					},
					function(index){
						$(".buiddings_borwsse_dierji3").animate({top:'-22px'},350);
						$(".buiddings_borwsse_fudierji3").fadeOut(300);
						layer.close(index);
					});
			}
		});

	},
	queryBuildingInfo:function(par){
		var _this = par;
		var sid = getCookie("sid");
		//var sid = "001";
		var uid = getCookie("uid");
		var Request = new Object();
		Request = this.GetRequest();
		var buildingId = Request["buildingId"];
		var cmd = {"sid":sid,"buildingId":buildingId};
		var tmp = JSON.stringify(cmd);
		$.ajax({
			url:common_ip+"buildings.do?action=get",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					layer.msg("查看成功",{icon:1});
					if(data.building.squadronLeader!=undefined){
						if(data.building.squadronLeader != uid){
							$("#ledgerdetails_Surebutton")[0].style.pointerEvents="none";
							$("#ledgerdetails_Surebutton").css("display","none");
							$("#ledgerdetails_Surebutton").css("color","rgb(204, 204, 204)");
						}else{
							$("#ledgerdetails_Surebutton")[0].style.pointerEvents="initial";
							$("#ledgerdetails_Surebutton").css("display","black");
							$("#ledgerdetails_Surebutton").css("color","#0193DE");
						}
					}else{
						$("#ledgerdetails_Surebutton")[0].style.pointerEvents="none";
						$("#ledgerdetails_Surebutton").css("display","none");
						$("#ledgerdetails_Surebutton").css("color","rgb(204, 204, 204)");
					}
					this.setState({data:data,building:data.building});
					nsEventBus.eventbus.broadcast("Illegallybuiltlist",data.building.hints);
				}else{
					layer.alert("查看失败"+data.errorMsg,{icon:2,title:"错误"});
				}
			}.bind(this),
			error: function(request, state, error){
				alert(error);
//			console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
	},
	//获取传过来URL中携带的sid值和buildingId值
	GetRequest:function() {
		var url = location.search; //获取url中"?"符后的字串
		var theRequest = new Object();
		if (url.indexOf("?") != -1) {
			var str = url.substr(1);
			strs = str.split("&");
			for (var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
			}
		}
		return theRequest;
	},
	addClick:function(){
		if($("#ledgerdetails_righttop_div1").css("display")== "block"){
			$("#ledgerdetails_righttop_div1").css("display", "none");
		}else{
			$("#ledgerdetails_righttop_div1").css("display", "block");
		}
	},
	leftAdd:function(){
		if($("#ledgerdetails_lefttop_div1").css("display")== "block"){
			$("#ledgerdetails_lefttop_div1").css("display", "none");
		}else{
			$("#ledgerdetails_lefttop_div1").css("display", "block");
		}
	},
	topAdd:function(){
		if($("#ledgerdetails_top_div1").css("display")== "block"){
			$("#ledgerdetails_top_div1").css("display", "none");
		}else{
			$("#ledgerdetails_top_div1").css("display", "block");
		}
	},
	patrolClick:function(){
		$("#ledgerdetails_righttop_div1").css("display", "none");
		$("#ledgerdetails_add_div").empty();
		ReactDOM.render(React.createElement(patrolLog,{title:"+巡查记录",showModal:true,isSelectUser:true,operationType:"",data:this.GetRequest(),level:this.state.building.harmfulCode}),document.getElementById("ledgerdetails_add_div"))
	},
	enforceClick:function(){
		$("#ledgerdetails_righttop_div1").css("display", "none");
		$("#ledgerdetails_add_div").empty();
		ReactDOM.render(React.createElement(executeLog,{title:"+执法记录",showModal:true,isSelectUser:true,operationType:"",buildingId:this.GetRequest(),level:this.state.building.harmfulCode}),document.getElementById("ledgerdetails_add_div"))
	},
	notificationClick:function(){
		$("#ledgerdetails_righttop_div1").css("display", "none");
		$("#ledgerdetails_add_div").empty();
		ReactDOM.render(React.createElement(NotificationLogEdit,{title:"+通知书记录",showModal:true,isSelectUser:true,buildingId:this.GetRequest()}),document.getElementById("ledgerdetails_add_div"))
	},
	updateLevel:function(){
		$("#ledgerdetails_righttop_div1").css("display", "none");
		$("#ledgerdetails_add_div").empty();
		ReactDOM.render(React.createElement(UpdateLevels,{title:"编辑危害等级",showModal:true,id:this.GetRequest(),level:this.state.building.harmfulCode}),document.getElementById("ledgerdetails_add_div"))
	},
	hanOnProposerClick:function(){
		var selectedbuildingId =this.state.building.buildingId ;
		$("#ledgerdetails_add_div").empty();
		var tmp={addresseeList:[],copyToList:[],copyToList:[],title:"确认执法申请—"+this.state.building.address,imgList:[],content:"",fileList:[]};
		tmp.cintent="";
		ReactDOM.render(React.createElement(Transceiver,{title:"发文—执法申请",apply:"apply",showModal:true,isSelectUser:true,transceiverInfo:tmp,operationType:"transceiverBuilding",module:"building",itemId:selectedbuildingId,status:"审批中",linkUrl:"ledgerdetails.html?buildingId="+selectedbuildingId}),document.getElementById("ledgerdetails_add_div"))
	},
	hanOnHazardClick:function(){
		var selectedbuildingId =this.state.building.buildingId ;
		$("#ledgerdetails_add_div").empty();
		var tmp={addresseeList:[],copyToList:[],copyToList:[],title:"确认危害申请—"+this.state.building.address,imgList:[],content:"",fileList:[]};
		tmp.cintent="";
		ReactDOM.render(React.createElement(Transceiver,{title:"发文—危害申请",apply:"apply",harmful:"harmful",showModal:true,isSelectUser:true,transceiverInfo:tmp,operationType:"transceiverBuilding",module:"harmfulApplication",itemId:selectedbuildingId,status:"审批中",linkUrl:"ledgerdetails.html?buildingId="+selectedbuildingId}),document.getElementById("ledgerdetails_add_div"))
	},
	hanOnFileClick:function(){
		var sid = getCookie("sid");
		var rules = {"sid":sid,"buildingId":this.state.building.buildingId,"address":this.state.building.address};
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"buildings.do?action=file",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					layer.msg("归档成功",{icon:1});
				}else{
					layer.alert("归档失败"+data.errorMsg,{icon:2});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error);
				//			console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
	},
	approvalHarmfulClick:function(){
		$("#ledgerdetails_add_div").empty();
		ReactDOM.render(React.createElement(approvalHarmful,{title:"危害审批",showModal:true,isSelectUser:true,operationType:"",data:this.GetRequest()}),document.getElementById("ledgerdetails_add_div"))
	},
	hanOnApprovalClick:function(){
		$("#ledgerdetails_add_div").empty();
		ReactDOM.render(React.createElement(approvalLogEdit,{title:"审批",showModal:true,isSelectUser:true,operationType:"",data:this.GetRequest()}),document.getElementById("ledgerdetails_add_div"))
	},
	buildingForward:function(){
		var selectedbuildingId = this.state.building.buildingId ;
		$("#ledgerdetails_add_div").empty();
		var tmp={addresseeList:[],copyToList:[],copyToList:[],title:"确认上报—"+this.state.building.address,imgList:[],content:"",fileList:[]};
		tmp.cintent="";
		ReactDOM.render(React.createElement(Transceiver,{title:"台账—确认转发",showModal:true,isSelectUser:true,transceiverInfo:tmp,operationType:"transceiverBuilding",module:"building",itemId:selectedbuildingId,status:"审批中",linkUrl:"ledgerdetails.html?buildingId="+selectedbuildingId,affirmBuilding:"affirmBuilding"}),document.getElementById("ledgerdetails_add_div"))
	},
	hanOnReport:function(){
		var _this = this;
		layer.confirm('您确定要上报到区里吗？', {
				btn: ['确定','取消'] //按钮
			},
			function(index) {

				layer.close(index);

				var sid = getCookie("sid");
				var rules = {"sid": sid, "buildingId": _this.state.building.buildingId};
				var tmp = JSON.stringify(rules);
				$.ajax({
					url: common_ip + "buildings.do?action=affirm",
					dataType: 'json',
					data: tmp,
					type: 'post',
					contentType: "application/x-www-form-urlencoded",
					success: function (data) {
						if (data.successFlag) {
							layer.msg("上报成功！", {icon: 1});
						} else {
							layer.alert("上报失败！" + data.errorMsg, {icon: 2, title: "错误"});
						}
					}.bind(this),
					error: function (request, state, error) {
						layer.alert(error, {icon: 2, title: "错误"});
						console.error(this.props.url, state, error.toString());
					}.bind(this)
				});
			});
	},
	approvalFile:function(){
		$("#ledgerdetails_add_div").empty();
		ReactDOM.render(React.createElement(ApprovalFile,{buildingId:this.state.data.building.buildingId,showModal:true,title:'添加审批文件'}),document.getElementById("ledgerdetails_add_div"));
	},
	render:function()
	{
		var _this = this;
		nsEventBus.eventbus.on("ledgerdatail","ledgerdatail",function(aa){
			console.log("==============2");
		});
		var tmp=[];
		if(this.state.building!=""){
			var i=0;
			this.state.building.allRecords.map(function(edata){
				if(edata.type=="officialNotice"){ //通知书
                    var notifData=[];
                    edata.record.map(function(data){
                        notifData.push(data.record);
                    });
					tmp.push(React.createElement(NotificationInfo,{index:i,data:notifData}));
				}else if(edata.type=="patrolRecord"){//巡查记录
					tmp.push(React.createElement(patrolLogInfo,{index:i,data:[edata.record]}));
				}else if(edata.type=="enforceRecord"){//执法记录
					tmp.push(React.createElement(executeLogLogInfo,{index:i,data:[edata.record]}));
				}else if(edata.type=="firstAudit"){//上报记录
					tmp.push(React.createElement(ProposerInfo,{index:i,data:[edata.record]}));
				}else if(edata.type=="auditList"){//审批记录
					tmp.push(React.createElement(ApprovalInfo,{index:i,data:[edata.record]}));
				}else if(edata.type=="approveFileList"){//审批记录
					tmp.push(React.createElement(ApprovalFileInfo,{index:i,data:[edata.record]}));
				}
				i++;
			});
		}

		var btmStyle=" ledgerdetails_lefttop_buttonq";
		var tmpBtn=[];
		var tmpBtn1=[];
		if(this.state.building.auditorId==getCookie("uid")&&this.state.building.auditStatus=="审批中"){
			tmpBtn.push(React.createElement("button",{className:"ledgerdetails_top_button1",onClick:this.hanOnApprovalClick},"审 批"));
		}
		if(this.state.building.showHarmfulBtn==true){
			tmpBtn1.push(React.createElement("button",{className:"ledgerdetails_top_button1",onClick:this.approvalHarmfulClick},"危害审批"));
		}
		var _this = this;
		nsEventBus.eventbus.on("ledgerdatail","ledgerdatail",function(aa){
			_this.queryBuildingInfo(this);
		});
		
		var thumPhoto = "";
		var photo = "";
		var thumphototext = "请上传图片";
		if(this.state.data.building != undefined && this.state.data.building != ""){
			thumPhoto = this.state.data.building.thumPhoto;
			if(thumPhoto != undefined){
				thumphototext = "图片加载失败";
			}
			photo = this.state.data.building.photo;
		}
		var tmpHints = [];
		if(typeof (this.state.building.hints)!="undefined"){
			var address1;
			this.state.building.hints.map(function(array){
				if(array.length != 0){
					if(array.address.length>8){
						address1 = array.address.substr(0,8)+"...";
					}else{
						address1 = array.address;
					}
				}
				return(
					tmpHints.push(React.createElement("div",{className:"hintsList_show"},
						address1
					))
				)
			});
		}
		var crewphoto = [];
		var detailedphoto =[];
		if(this.state.building.harmfulCode == "拆危重建"){
			crewphoto.push(
				React.createElement("div",null,
					React.createElement("label",null,"施工牌照片:"),
					React.createElement("a",{href:photo,className:"lightbox-2",rel:"flowers"},
						React.createElement("image",{src:thumPhoto,className:"ledgerde_addressimage",alt:thumphototext})
					)
				)
			)
		}else{
			detailedphoto.push(
				React.createElement("div",null,
					React.createElement("label",{},"详细地址:"),
					React.createElement("a",{href:photo,className:"lightbox-2",rel:"flowers"},
						React.createElement("image",{src:thumPhoto,className:"ledgerde_addressimage",alt:thumphototext})
					)
				)
			)
		}
		return (
			React.createElement("div",{},
				React.createElement("div",{id:"buildings_navigationbar_div"},
					React.createElement("a",{id:"navigation_bar_label",href:"building.html"},"违建台账列表"),
					React.createElement("label",{id:"navigation_bar_label2"},">")
				),
				React.createElement("div",{id:"buildings_navigationbar_addressdiv"},
					React.createElement("img",{className:"buidding_list_img",src:judgeBinding(this.state.building.harmfulCode)}),
					React.createElement("label",{id:"buildings_navigationbar_addressLabel"},"【"+_this.state.building.area1+"】"+_this.state.building.address),
					React.createElement("button",{className:"ledgerdetails_top_Add",onClick:this.topAdd},"+"),
					React.createElement("div",{id:"ledgerdetails_top_div1",style:{display: "none"}},
						React.createElement("button",{className:"ledgerdetails_top_button1",onClick:this.hanOnProposerClick},"执法申请"),
						React.createElement("button",{className:"ledgerdetails_top_button1",onClick:this.hanOnHazardClick},"危害申请"),
						tmpBtn,
						tmpBtn1,
						React.createElement("button",{className:"ledgerdetails_top_button1",onClick:this.hanOnReport},"上 报"),
						React.createElement("button",{className:"ledgerdetails_top_button1",onClick:this.hanOnFileClick},"归 档"),
						React.createElement("button",{className:"ledgerdetails_top_button1",onClick:this.hanOnWUpdateClick},"转违建")
					)
				),
				React.createElement("div",{id:"ledgerdetails_zt_fdiv"},
					React.createElement("div",{id:"ledgerdetails_lefttop_div"},
						React.createElement("label",{style:{paddingRight:"7px"},className:"ledgerdetails_lefttop_lab"},"台账详情"),
						React.createElement("button",{className:"ledgerdetails_lefttop_Add",onClick:this.leftAdd},"+"),
						React.createElement("div",{id:"ledgerdetails_lefttop_div1",style:{display: "none"}},
							React.createElement("button",{className:"ledgerdetails_lefttop_button",onClick:this.hanOnUpdateClick},"编 辑"),
							React.createElement("button",{id:"ledgerdetails_Surebutton",className:"ledgerdetails_lefttop_button",onClick:this.buildingForward},"确认转发"),
							React.createElement("button",{className:"ledgerdetails_lefttop_button",onClick:this.handleDelete},"删 除")
						)

					),
					React.createElement("div",{id:"ledgerdetails_left_div"},
						React.createElement("div",{id:"ledgerdetails_left_div1"},
                            React.createElement("div",{className:"ledgerdetails_left_head"},
                                "基本信息"
                            ),
							detailedphoto,
                            React.createElement("div",null,
                                React.createElement("label",{style:{paddingRight:"7px"}},"台账编码 :"),
                                React.createElement("span",{className:"buiddings_Ledgerdetails_buildingid"},_this.state.building.buildingNo)
                            ),
							React.createElement("div",null,
								React.createElement("label",null,"社区:"),
								React.createElement("span",{},_this.state.building.area1)
							),
							React.createElement("div",null,
								React.createElement("label",null,"小组:"),
								React.createElement("span",{},_this.state.building.area0)
							),
							React.createElement("div",null,
								React.createElement("label",{type:"text"},"地址:"),
								React.createElement("span",{},_this.state.building.address)
							),
							React.createElement("div",null,
								React.createElement("label",{type:"text"},"备用地址:"),
								React.createElement("span",{},_this.state.building.bakAddress)
							),
                            React.createElement("div",null,
                                React.createElement("label",null,"案件来源:"),
                                React.createElement("span",{},_this.state.building.sourceCode)
                            ),
                            React.createElement("div",null,
                                React.createElement("label",null,"发现人:"),
                                React.createElement("span",{},_this.state.building.discoverer)
                            ),
                            React.createElement("div",null,
                                React.createElement("label",null,"发现时间:"),
                                React.createElement("span",{},_this.state.building.discoverTimeFormat)
                            ),
							React.createElement("div",null,
								React.createElement("label",{},"计划拆除日:"),
								React.createElement("span",{},_this.state.building.planDestroyDateFormat)
							),
                            React.createElement("div",{className:"ledgerdetails_left_head"},
                                "详细信息"
                            ),
							React.createElement("div",null,
								React.createElement("label",{type:"text"},"房屋编码:"),
								React.createElement("span",{},_this.state.building.officialNo)
							),
							React.createElement("div",null,
								React.createElement("label",null,"网格号:"),
								React.createElement("span",{},_this.state.building.gridId)
							)
						),
						React.createElement("div",null,
							React.createElement("label",null,"地基面积:"),
							React.createElement("span",{},_this.state.building.BaseArea)
						),
						React.createElement("div",null,
							React.createElement("label",null,"新增建筑功能:"),
							React.createElement("span",{},_this.state.building.addFunction)
						),
						React.createElement("div",null,
							React.createElement("label",null,"新增建筑面积:"),
							React.createElement("span",{},_this.state.building.addBuildArea)
						),
						React.createElement("div",null,
							React.createElement("label",null,"原建设面积:"),
							React.createElement("span",{},_this.state.building.oldBuildArea)
						),
                        React.createElement("div",null,
                            React.createElement("label",null,"总地块面积:"),
                            React.createElement("span",{},_this.state.building.coverArea)
                        ),
                        React.createElement("div",null,
                            React.createElement("label",null,"总建筑面积:"),
                            React.createElement("span",{},_this.state.building.buildArea)
                        ),
                        React.createElement("div",null,
                            React.createElement("label",null,"层数:"),
                            React.createElement("span",{},_this.state.building.totalFloor)
                        ),
                        React.createElement("div",null,
                            React.createElement("label",null,"栋数:"),
                            React.createElement("span",{},_this.state.building.totalBlock)
                        ),
						crewphoto,
						React.createElement("div",null,
							React.createElement("label",null,"审批编号:"),
							React.createElement("span",{},_this.state.building.auditNo)
						),
						React.createElement("div",null,
							React.createElement("label",null,"审批时间:"),
							React.createElement("span",{},_this.state.building.auditTimeFormat)
						),
                        React.createElement("div",null,
                            React.createElement("label",null,"动工情况:"),
                            React.createElement("span",{},_this.state.building.buildFlag==true?"是":"否")
                        ),
                        React.createElement("div",null,
                            React.createElement("label",null,"是否增量:"),
                            React.createElement("span",{},_this.state.building.newFlag==true?"是":"否")
                        ),
                        React.createElement("div",{className:"ledgerdetails_left_head"},
                            "其他信息"
                        ),
						React.createElement("div",{id:"ledgerdetails_left_div3"},
							React.createElement("div",null,
								React.createElement("label",null,"业主姓名:"),
								React.createElement("span",{},_this.state.building.ownerName)
							),
							React.createElement("div",null,
								React.createElement("label",null,"联系电话:"),
								React.createElement("span",{},_this.state.building.ownerTel)
							),
							React.createElement("div",null,
								React.createElement("label",null,"身份证号:"),
								React.createElement("span",{},_this.state.building.ownerIdCode)
							)
						),
						React.createElement("div",{id:"ledgerdetails_left_div4"},
							React.createElement("div",null,
								React.createElement("label",null,"违法类型:"),
								React.createElement("span",{},_this.state.building.illegalCode)
							)
						),
						React.createElement("div",{id:"ledgerdetails_left_div5"},
							React.createElement("div",null,
								React.createElement("label",null,"建筑类型:"),
								React.createElement("span",{},_this.state.building.constructCode)
							),
							React.createElement("div",null,
								React.createElement("label",null,"建筑物类型:"),
								React.createElement("span",{},_this.state.building.groundCode)
							),
							React.createElement("div",{id:""},
								React.createElement("div",null,
									React.createElement("label",null,"装修申请日期:"),
									React.createElement("span",{className:"renovationstartdate"},_this.state.building.decorateStartTimeFormat)
								)
							),
							React.createElement("div",{id:""},
								React.createElement("div",null,
									React.createElement("label",null,"装修截止日期:"),
									React.createElement("span",{className:"renovationenddate"},_this.state.building.decorateEndTimeFormat)
								)
							)
						),
						React.createElement("div",{id:"ledgerdetails_left_div6"},
							React.createElement("div",null,
								React.createElement("label",null,"是否立案:"),
								React.createElement("span",{},_this.state.building.caseFlag==true?"是":"否")
							),
							React.createElement("div",null,
								React.createElement("label",{},"立案号:"),
								React.createElement("span",{},_this.state.building.caseNo)
							),
							React.createElement("div",null,
								React.createElement("label",{},"立案说明:"),
								React.createElement("span",{},_this.state.building.caseRemark)
							),
							React.createElement("div",null,
								React.createElement("label",{},"备注:"),
								React.createElement("span",{},_this.state.building.buildingRemark)
							),
							React.createElement("div",null,
								React.createElement("label",{},"关联线索:"),
								tmpHints
							)
						)
					)
				),
				React.createElement("div",{id:"ledgerdetails_workrecord_fdiv"},
					React.createElement("div",{id:"ledgerdetails_righttop_div"},
						React.createElement("label",{className:"ledgerdetails_righttop_lab"},"工作记录"),
						React.createElement("button",{className:"ledgerdetails_righttop_button",onClick:this.addClick},"+"),
						React.createElement("div",{id:"ledgerdetails_righttop_div1",style:{display: "none"}},
							React.createElement("button",{className:"ledgerdetails_righttop_button1",onClick:this.patrolClick},"+巡查"),
							React.createElement("button",{className:"ledgerdetails_righttop_button1",onClick:this.enforceClick},"+执法"),
							React.createElement("button",{className:"ledgerdetails_righttop_button1",onClick:this.notificationClick},"+通知书"),
							React.createElement("button",{className:"ledgerdetails_righttop_button1",onClick:this.updateLevel},"修改等级"),
							React.createElement("button",{className:"ledgerdetails_righttop_button1",onClick:this.approvalFile},"审批文件")
						)
					),
					React.createElement("div",{id:"ledgerdetails_rightgun_div2"} ,
						tmp
					),
					React.createElement("div",{className:"buiddings_borwsse_fudierji3"},
						React.createElement("div",{className:"buiddings_borwsse_dierji3"},
							React.createElement("div",{id:"EditBuilDings"}),
							React.createElement("div",{id:"EditBuilDingsTwo"})
						)
					),
					React.createElement("div",{id:"ledgerdetails_add_div"}
					)
				)
			)
		);
	}
});


//ReactDOM.render(React.createElement(Buildings),document.getElementById("buildings"));