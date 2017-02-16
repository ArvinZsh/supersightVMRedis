var Pagination = ReactBootstrap.Pagination;
var Input = window.Input || ReactBootstrap.Input;
var Grid = ReactBootstrap.Grid || "";
var Row = ReactBootstrap.Row || "";
var Col = ReactBootstrap.Col || "";
var Image = ReactBootstrap.Image || "";
var Tabs = window.Tabs || ReactBootstrap.Tabs;
var Tab = window.Tab || ReactBootstrap.Tab;
var mountNode = document.getElementById("pageSpec");

function datefun(yur){
	var date2 = new Date();
	var month = date2.getMonth()+1;
	var getdate = date2.getDate()+yur;
	
	if(month >= 1 && month<10){
		month = "0"+month;
	}
	if(getdate >= 1 && getdate<10){
		getdate = "0"+getdate;
	}
	var date = date2.getFullYear() + "-" + month + "-" + getdate;
	return date;
}

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

// 转换地址为坐标
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


var point = null;

var map = null;
var buildingId = null;
// 添加/修改对话框
var BuildingbRowseModel = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:"",
			Gridgroup:[],//网格组名
			bigcase:[],//违建大案
			harmLevel:[],//危害等级
			buildingType:[],//违建类型
			IllegalType:[],//违法类型
			ConstructType:[],//违建建筑类型
			SourceType:[],//违建来源
			GroundCode:[],//建筑物类型
			CommunityCode:[],
			BuildingFunction:[],//建筑功能
			fileId: "",
			buildingsinsert:[],
			activePage:1,
			pageDataCount:16,
			dataCount:"",
			bingTime:"",
			endTime:"",
			key:this.props.keyvalse,
			start:this.props.start,
			list:[],
			autolist:[],
			imgList:[],
			imgList1:[],
			fileId1: "",
			squadronList:[],
		};
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
		// $("#allmap").slideDown();

		// 服务类: 位置检索,周围检索,范围检索
    	var local = new BMap.LocalSearch(map, {
    		renderOptions:{map: map}
    	});
		// 对获取的地址进行检索
    	local.search(ee.target.value);
		// 设置检索范围
    	local.setLocation("深圳市");

		// 设置添加标注后的回调函数
    	local.setMarkersSetCallback(function(mar){
			// 在mar数组中获取到marker并为其绑定事件
    		for(var i=0;i<mar.length;i++){
    			mar[i].marker.addEventListener("click", createMarker(mar,i))
    		}

			// marker绑定后事件的执行,获取指定下标获取数组中的属性
    		function createMarker(mar,i){
    			return function(){
    				$("#buidings_isinsert_address").val(mar[i].address);
    			}
    		}
    	})
    },
	componentWillMount:function(){
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
						if(data.commonCodeList[i].typeId=="BigCaseCode"){
							bigcase.push(data.commonCodeList[i]);
						}
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
					this.setState({bigcase:bigcase});
					this.setState({harmLevel:harmLevel});
					this.setState({buildingType:buildingtype});
					this.setState({IllegalType:illegaltype});
					this.setState({ConstructType:constructtype});
					this.setState({SourceType:sourcetype});
					this.setState({GroundCode:groundtype});
					this.setState({CommunityCode:communitycode});
					this.setState({BuildingFunction:buildingfunction});
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
			url:common_ip+"orgInfo.do?action=list",
			dataType:'json',
			data: tmp1,
			type:'post',
			contentType:"application/json",
			success: function(data){
				if(data.successFlag){
					var tmp = [];
					data.orgList.map(function(array){
						if(!(array.orderNo>=1 && array.orderNo<20)){
							tmp.push(array)
						}
					});
					this.setState({Gridgroup:tmp});
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
		var rules1={"sid":sid};
		var tmp1 = JSON.stringify(rules1);
		$.ajax({
			url:common_ip+"users.do?action=listSecLeader",
			dataType:'json',
			data: tmp1,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					this.setState({squadronList:data.users});
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
    componentDidMount: function(){
		$("#label_buildingNo").show();//违建编码
		$("#label_officialNo").show();//房屋编码
		$("#label_SourceArea").show();//原建设面积
		$("#label_isSpike").show();//是否增量
		$("#label_ownerName").show();//业主姓名
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
		$("#ConstructionTeamMan").hide();//施工申请人
		$("#label_Approvaltime").hide();//审批时间
		var _this = this;
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
		$(".buiddings_borwsse_dierji3").keydown(function(e) {
			if (e.keyCode == "13") {//keyCode=13是回车键
				$('.buiddings_borwsse_sub').click();
			}
		});
		// 实例地图
    	map = new BMap.Map("allmap");
		// 初始化地图位置和缩放等级
		map.centerAndZoom(new BMap.Point(114.45358,22.572688), 12);
		// 在地图中鼠标设置箭头
		map.setDefaultCursor("default");
		// 设置是否可以缩放
    	map.enableScrollWheelZoom(true);
    	// 百度地图API功能

		/*$("#allmap_toggleout").mouseout(function(event){
			if(event.target == this){
				$("#allmap").slideUp();
			}
		});*/

		// 在地图上点击时获取坐标
		map.addEventListener("click",function(e){
			point = e.point;
			$("#allmap_point_click").val(e.point.lng + "," + e.point.lat);
			// console.log(e.point.lng + "," + e.point.lat);
		});
	},
	buildingtmp: function(insertIsupdate) {
		var sid = getCookie("sid");
		var squadronLeader = $(".buiddings_captain option:selected").val();
		var squadronLeaderText = $(".buiddings_captain option:selected").text();
		var harmfulCode = $(".buiddings_borwse_hazardlevel option:selected").text();
		var area1 = $(".buiddings_borwse_community option:selected").text();
		var address = $("#buidings_isinsert_address").val();
		var bakAddress = $("#buidings_isinsert_address2").val();
		var officialNo = $(".buiddings_borwse_housecode").val();
		var gridId = $(".buiddings_borwse_grid option:selected").val();
		var Buildingfunction =  $(".Buildingfunction option:selected").val();
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
		var buildingRemark = $(".buiddings_borwse_remark").val();
		var approveId = $("#buidings_approveNo_id").val();
		//var ConstrucTeamMan = $(".buiddings_ConstructionTeamMan").val();
		var Approvaltime = $(".Approvaltime").val();
		var BaseArea = $(".FoundationArea").val();
		var creator = getCookie("userName");
		/*if(buildingNo == "" && buildingNo.length == 0){
		 $(".building_spantishi1").text("台账编码不能为空!");
		 return -1;
		 }*/

		var hintsData= document.getElementsByClassName("buildings_hintId");
		var hintsId = [];
		for(var i = 0;i<hintsData.length;i++){
			hintsId.push(hintsData[i].innerText);
		}
//		var rules = {"sid":sid,"typeId":this.state.parentId,"itemId":this.state.data.list[this.state.keyInfo].itemId};
		var rules = null;
		var renovation = $(".buiddings_Renovation").val();
		var date = /^(\d{4})-(\d{2})-(\d{2})$/
		var renovationstartdate = "";
		var renovationenddate = "";
		if($(".buiddings_Renovation option:selected").text() == "装修"){
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
		var ze = /^(-)?\d{1,7}(\.\d{1,3})?$/;
		var photo = this.state.fileId;;
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
		if($(".buiddings_Renovation option:selected").text() != "拆危重建") {
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
		if($(".buiddings_Renovation option:selected").text() == "拆危重建") {
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
		if($(".buiddings_Renovation option:selected").text() == "拆危重建") {
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

		if($(".buiddings_Renovation option:selected").text() == "装修"){
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

		}else if($(".buiddings_Renovation option:selected").text() == "违建"){
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
		/*console.log(harmfulCode);		// 危害等级
		console.log(area1);				// 社区
		console.log(area0);				// 小组
		console.log(address);			// 地址
		console.log(bakAddress);		// 备用地址
		console.log(officialNo);		// 房屋编号

		console.log(gridId);			// 网格号
		console.log(coverArea);			// 总地块面积
		console.log(buildArea);			// 总建筑面积
		console.log(totalFloor);		// 层数
		console.log(totalBlock);		// 栋数
		console.log(parseInt(buildFlag));	//是否动工
		console.log(parseInt(newFlag));		// 是否增量(违建类型)
		console.log(ownerName);				// 业主姓名
		console.log(ownerTel);				// 联系电话
		console.log(ownerIdCode);			// 身份证号
		console.log(illegalCode);			// 违法类型
		console.log(sourceCode);			// 案件来源
		console.log(discoverer);			// 发现人

		console.log(discoverTime);			// 发现时间
		console.log(planDestroyDate);		// 计划拆除日期
		console.log(parseInt(bigCaseFlag));	// 是否重大
		console.log(bigCaseCode);			// 大案类型
		console.log(parseInt(caseFlag));	// 是否立案
		console.log(caseNo);				// 立案号

		console.log(caseRemark);			// 立案说明
		console.log(buildingNo);			// 违建编码
		console.log(creator);				// 创建人
		console.log(ConstructCode);			// 建筑类型
		console.log(GroundCode);			// 建筑物类型
		console.log(points.lng);				// 经度
		console.log(points.lat);				// 纬度*/

		if(renovation == 0){
			harmfulCode = "高危未拆";
		}else if(renovation == 1){
			harmfulCode = "装修";
		}else if(renovation == 2){
			harmfulCode = "拆危重建";
		}



		if(insertIsupdate == 1){
			rules = {"sid":sid,"BaseArea":BaseArea,"AuditNo":approveId,"AuditTime":Approvaltime,"addFunction":Buildingfunction,"addBuildArea":AddcoverArea,"oldBuildArea":AddbuildArea,"hintIds":hintsId,"squadronLeaderId":squadronLeader,"squadronLeader":squadronLeaderText,"harmfulCode":harmfulCode,"area1":area1,"area0":groupNo,"address":address,"bakAddress":bakAddress,"officialNo":officialNo,"gridId":gridId,
					"coverArea":coverArea,"buildArea":buildArea,"totalFloor":totalFloor,"totalBlock":totalBlock,"buildFlag":parseInt(buildFlag),"newFlag":parseInt(newFlag),"ownerName":ownerName,
					"ownerTel":ownerTel,"ownerIdCode":ownerIdCode,"illegalCode":illegalCode,"sourceCode":sourceCode,"discoverer":discoverer,//"ConstructPhoto":this.state.fileId1,
					"discoverTime":discoverTime,"bigCaseFlag":"false","bigCaseCode":"default","caseFlag":parseInt(caseFlag),"caseNo":caseNo,"caseRemark":caseRemark,
					"buildingNo":buildingNo,"planDestroyDate":planDestroyDate,"creator":creator,"ConstructCode":ConstructCode,"GroundCode":GroundCode,"longtiude":point.lng,
					"latitude":point.lat,"decorateStartTime":renovationstartdate,"decorateEndTime":renovationenddate,"photo":photo,"buildingRemark":buildingRemark};
		}
		if(insertIsupdate == 2){
			rules = {"sid":sid,"harmfulCode":harmfulCode,"area1":area1,"area0":groupNo,"address":address,"bakAddress":bakAddress,"officialNo":officialNo,"gridId":gridId,
					"coverArea":coverArea,"buildArea":buildArea,"totalFloor":totalFloor,"totalBlock":totalBlock,"buildFlag":parseInt(buildFlag),"newFlag":parseInt(newFlag),"ownerName":ownerName,
					"ownerTel":ownerTel,"ownerIdCode":ownerIdCode,"illegalCode":illegalCode,"sourceCode":sourceCode,"discoverer":discoverer,
					"discoverTime":discoverTime,"bigCaseCode":"default","caseFlag":parseInt(caseFlag),"caseNo":caseNo,"caseRemark":caseRemark,
					"buildingNo":buildingNo,"planDestroyDate":planDestroyDate,"buildingRemark":buildingRemark,"creator":creator,"ConstructCode":ConstructCode,"GroundCode":GroundCode,"buildingId":buildingId,
					"longtiude":point.lng,"latitude":point.lat};
		}

		var tmp  = JSON.stringify(rules);

		return tmp;
	},
	//保存新建台账信息
	saveNewInformation:function(e){
		var tmp = this.buildingtmp(1);
		if(tmp == -1){
			return;
		}

		$.ajax({
			url:common_ip+"buildings.do?action=save",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					layer.msg("添加成功!",{icon: 1});
					$(".buiddings_borwsse_fudierji3").css({"display":"none"});
                    nsEventBus.eventbus.broadcast("QueryBuildings",null);
					// window.location.reload();
//					nsEventBus.eventbus.broadcast("patrolltory_selectlist");
				}else{
					layer.alert(data.errorMsg);
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error);
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
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
					layer.alert("修改成功!",{icon: 1});
					$(".buiddings_borwsse_fudierji3").css({"display":"none"});
//					window.location.reload();
					nsEventBus.eventbus.broadcast("patrolltory_selectlist");
				}else{
					layer.alert(data.errorMsg);
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error);
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
	},
	hanOnPointClick: function(){
		map.reset();
		$("#allmap").slideToggle();
	},
	hanOnBuidingsSouce:function(){
		var _this = this;
		var time=new Date().GetDate(365);
		var time2 = new Date().Format("yyyy-MM-dd");
		var keyword = $("#crews_keytext").val();
		var sid = getCookie("sid");
		var tmp = {"sid":sid,"pageNo":_this.state.activePage,"pageSize":_this.state.pageDataCount,"timeFrom":time,"timeTo":time2,state:"","keyword":keyword,"buildId":"forSave" };
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
	ChangeRenovation:function(){
		var buildingType = $(".buiddings_Renovation").val();
		if(buildingType == 0){
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
		}else if(buildingType == 1){
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
		}else{
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
		}
	},
	Findpeople:function (){
		$("#AddBuilDingsTwo").empty();
		ReactDOM.render(React.createElement(Findpeople,{showModal:true,title:"选择发现人"}),document.getElementById("AddBuilDingsTwo"));
	},
	render:function()
	{
		var _this = this;
		nsEventBus.eventbus.on("Illegallybuiltlist","Illegallybuiltlist",function(dataa){
			_this.setState({autolist:dataa});
		});
			if(this.props.selindex != -1){

				if(typeof(this.props.data[this.props.selindex-1])!=undefined && this.props.data[this.props.selindex-1]!=null){
					buildingId = this.props.data[this.props.selindex-1].buildingId;
				}
			}

		var bigcase=[];
		if(typeof(this.state.bigcase)!="undefined"&&this.state.bigcase!=null){
			this.state.bigcase.map(function(info){
				bigcase.push(React.createElement("option",{value:info.codeId},info.codeName));
			})
		}
		var harmlevel=[];
		if(typeof(this.state.harmLevel)!="undefined"&&this.state.harmLevel!=null){
			this.state.harmLevel.map(function(info){
				harmlevel.push(React.createElement("option",{value:info.codeId},info.codeName));
			})
		}
		var buildingType=[];
		if(typeof(this.state.buildingType)!="undefined"&&this.state.buildingType!=null){
			this.state.buildingType.map(function(info){
				buildingType.push(React.createElement("option",{value:info.codeId=="cl"?0:1},info.codeName));
			})
		}
		var illegalType=[];
		if(typeof(this.state.IllegalType)!="undefined"&&this.state.IllegalType!=null){
			this.state.IllegalType.map(function(info){
				illegalType.push(React.createElement("option",{value:info.codeId},info.codeName));
			})
		}
		var constructType=[];
		if(typeof(this.state.ConstructType)!="undefined"&&this.state.ConstructType!=null){
			this.state.ConstructType.map(function(info){
				constructType.push(React.createElement("option",{value:info.codeId},info.codeName));
			})
		}
		var sourceType=[];
		if(typeof(this.state.SourceType)!="undefined"&&this.state.SourceType!=null){
			this.state.SourceType.map(function(info){
				sourceType.push(React.createElement("option",{value:info.codeId},info.codeName));
			})
		}
		var groundCode=[];
		if(typeof(this.state.GroundCode)!="undefined"&&this.state.GroundCode!=null){
			this.state.GroundCode.map(function(info){
				groundCode.push(React.createElement("option",{value:info.codeId},info.codeName));
			})
		}
		var gridgroup=[];
		if(typeof(this.state.Gridgroup)!="undefined"&&this.state.Gridgroup!=null){
			this.state.Gridgroup.map(function(info){
				gridgroup.push(React.createElement("option",{value:info.orgName},info.orgName));
			})
		}
		var community=[];
		if(typeof(this.state.CommunityCode)!="undefined"&&this.state.CommunityCode!=null){
			this.state.CommunityCode.map(function(info){
				community.push(React.createElement("option",{value:info.codeId},info.codeName));
			})
		}
		var buildingType=[];
		if(typeof(this.state.buildingType)!="undefined"&&this.state.buildingType!=null){
			this.state.buildingType.map(function(info){
				buildingType.push(React.createElement("option",{value:info.codeId=="存量"?0:1},info.codeName));
			})
		}

		var buildingfunction=[];
		if(typeof(this.state.BuildingFunction)!="undefined"&&this.state.BuildingFunction!=null){
			this.state.BuildingFunction.map(function(info){
				buildingfunction.push(React.createElement("option",{value:info.codeName},info.codeName));
			})
		}

		var squadrons = [];
		if(typeof(this.state.squadronList)!="undefined" && this.state.squadronList!=null){
			this.state.squadronList.map(function(info){
				squadrons.push(React.createElement("option",{value:info.userId},info.userName));
			})
		}

		var _this = this;
		nsEventBus.eventbus.on("UploadImage_update","UploadImage_update",function(imagedata){
			_this.state.fileId = imagedata[0].fileId;
		});
		return (
				React.createElement("div",{className:"buiddings_borwsse_div",style:{}},
					React.createElement("div",{className:"buiddings_borwsse_hade"},
							React.createElement("span",{className:"buidings_borwsse_title"},"新 建 违 建 台 账"),
							React.createElement("button",{className:"buiddings_borwsse_clear",onClick:this.hanOnColse},"取消")
					),
					React.createElement("div",{className:"buiddings_borwsse_body"},
						React.createElement("div",{className:"buiddings_borwsse_auto"},
								React.createElement("div",{className:"buiddings_borwsse_auto_div"},
											React.createElement("div",{className:"buildings_div_bian1"},
												React.createElement("div",{className:"builddings_text_dddcla"},
													React.createElement("label",null,
														React.createElement("b",{},"中队长:")
													),
													React.createElement(Input,{type:"select",className:"buiddings_captain"},
														squadrons
													)
												),
												React.createElement("div",{className:"builddings_text_dddcla"},
													React.createElement("label",null,
														// React.createElement("b",{},"*"),
														React.createElement("b",{},"台账类型:")
													),
													React.createElement(Input,{type:"select",className:"buiddings_Renovation",onChange:this.ChangeRenovation},
														React.createElement("option",{value:0},"违建"),
														React.createElement("option",{value:1},"装修"),
														React.createElement("option",{value:2},"拆危重建")
													)
												),
											React.createElement("div",{className:"builddings_text_dddcla",id:"label_buildingNo"},
													React.createElement("label",{},
														// React.createElement("b",{},"*"),
														React.createElement("b",{},"违建编码:")
													),
													React.createElement(Input,{type:"text",id:"buidings_borwse_id"}),
													React.createElement("span",{className:"building_spantishi1"})
											),
											// React.createElement("label",{className:"harmlevel_label",type:"text"},":",
											// 	// React.createElement("b",{},"*"),
											// 	React.createElement("b",{},"危害等级:")
											// ),
											// React.createElement(Input,{type:"select",className:"buiddings_borwse_hazardlevel"},
											// 	harmlevel
											// ),
											React.createElement("label",null,
												 React.createElement("b",{},"*"),
												React.createElement("b",{},"社区:")
											),
											React.createElement(Input,{type:"select",className:"buiddings_borwse_community"},
												community
											),
											React.createElement("div",{className:"builddings_textareea_dddcla"},
												React.createElement("label",null,
													React.createElement("b",{},"小组:")
												),
												React.createElement(Input,{type:"text",className:"buiddings_borwse_group2",id:"buidings_xiaozu"}),
												React.createElement("span",{className:"building_spantishi34"})
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
													React.createElement("label",{id:"allmap_label",onClick:this.hanOnPointClick},"点击即可定位")
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
													React.createElement("div",{id:"uploadImage_new"}),
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
											React.createElement("div",{className:"builddings_text_dddcla",id:"label_officialNo"},
													React.createElement("label",{type:"text"},
														// React.createElement("b",{},"*"),
														React.createElement("b",{},"房屋编码:")
													),
													React.createElement(Input,{type:"text",placeholder:"请输入房屋编码",className:"buiddings_borwse_housecode"}),
													React.createElement("span",{className:"building_spantishi4"})
											),
												React.createElement("div",{className:"builddings_text_dddcla"},
													React.createElement("label",{type:"text"},
														React.createElement("b",{},"*"),
														React.createElement("b",{type:""},"网格号:")
													),
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
										React.createElement("div",{className:"builddings_text_dddcla",id:"label_AddcoverArea"},
											React.createElement("label",null,
												React.createElement("b",{},""),
												React.createElement("b",{},"建筑面积:")
											),
											React.createElement(Input,{type:"text",placeholder:"请输入建筑面积",className:"buiddings_borwse_areacount",id:"AddcoverArea"}),
											React.createElement("span",{className:"building_spantishi21"})
										),
										React.createElement("div",{className:"builddings_text_dddcla",id:"label_SourceArea"},
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
														React.createElement("b",{},"总占地面积:")
													),
													React.createElement(Input,{type:"text",placeholder:"请输入总占地面积",className:"buiddings_borwse_areacount",id:"buiddings_borwse_areacount"}),
													React.createElement("span",{className:"building_spantishi6"})
											),
											React.createElement("div",{className:"builddings_text_dddcla",id:"label_buildArea"},
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
											// React.createElement("div",{className:"builddings_text_dddcla",id:"ConstructionTeamMan"},
											// 	React.createElement("label",null,
											// 		React.createElement("b",{},"*"),
											// 		React.createElement("b",{},"施工申请人:")
											// 	),
											// 	React.createElement(Input,{type:"text",placeholder:"请输入施工申请人",className:"buiddings_ConstructionTeamMan"}),
											// 	React.createElement("span",{className:"building_spantishi39"})
											// ),
											React.createElement("div",{className:"builddings_text_dddcla"},
													React.createElement("label",null,
														// React.createElement("b",{},"*"),
														React.createElement("b",{},"动工情况:")
													),
													React.createElement(Input,{type:"select",className:"buiddings_borwse_startsituation"},
															React.createElement("option",{value:1},"是"),
															React.createElement("option",{value:0},"否")
													)
											),
											React.createElement("div",{className:"builddings_text_dddcla",id:"label_isSpike"},
													React.createElement("label",null,
														// React.createElement("b",{},"*"),
														React.createElement("b",{},"是否增量:")
													),
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
													React.createElement("label",null,
														// React.createElement("b",{},"*"),
														React.createElement("b",{},"联系电话:")
													),
													React.createElement(Input,{type:"text",placeholder:"请输入联系电话",className:"buiddings_borwse_contact"}),
													React.createElement("span",{className:"building_spantishi11"})
											),
											React.createElement("div",{className:"builddings_text_dddcla"},
													React.createElement("label",null,
														// React.createElement("b",{},"*"),
														React.createElement("b",{},"身份证号:")
													),
													React.createElement(Input,{type:"text",placeholder:"请输入身份证号",className:"buiddings_borwse_identity"}),
													React.createElement("span",{className:"building_spantishi12"})
											)
									),
									React.createElement("div",{className:"buildings_div_bian2"},
											React.createElement("div",{className:"builddings_text_dddcla",id:"builddings_illegalType"},
													React.createElement("label",null,
														// React.createElement("b",{},"*"),
														React.createElement("b",{},"违法类型:")
													),
													React.createElement(Input,{type:"select",className:"buiddings_borwse_contrarytype"},
														illegalType
													)
											),
											React.createElement("div",{className:"builddings_text_dddcla",id:"builddings_sourceType"},
													React.createElement("label",null,
														// React.createElement("b",{},"*"),
														React.createElement("b",{},"案件来源:")
													),
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
													React.createElement("label",null,
														// React.createElement("b",{},"*"),
														React.createElement("b",{},"计划拆除日:")
													),
													React.createElement(Input,{type:"date",className:"buiddings_borwse_removaldate"}),
													React.createElement("span",{className:"building_spantishi15"})
											)

									),
									React.createElement("div",{className:"buildings_div_bian1"},
											React.createElement("div",{className:"builddings_text_dddcla",id:"building_constructType"},
													React.createElement("label",null,
														// React.createElement("b",{},"*"),
														React.createElement("b",{},"建筑类型:")
													),
													React.createElement(Input,{type:"select",className:"buiddings_architecturetype"},
														constructType
													)
											),
											React.createElement("div",{className:"builddings_text_dddcla",id:"building_groundCode"},
													React.createElement("label",null,
														// React.createElement("b",{},"*"),
														React.createElement("b",{},"建筑物类型:")
													),
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
													React.createElement("label",null,
														// React.createElement("b",{},"*"),
														React.createElement("b",{},"是否立案:")
													),
													React.createElement(Input,{type:"select",className:"buiddings_borwse_isla",onChange:this.hanOnIsLASelect},
															React.createElement("option",{value:1},"是"),
														    React.createElement("option",{value:0},"否")
													)
											),
											React.createElement("div",{className:"builddings_text_dddcla",id:"label_caseNo"},
													React.createElement("label",{},
														// React.createElement("b",{},"*"),
														React.createElement("b",{},"立案号:")
													),
													React.createElement(Input,{type:"text",className:"buiddings_borwse_Filingh"}),
													React.createElement("span",{className:"building_spantishi17"})
											),
											React.createElement("div",{className:"builddings_text_dddcla",id:"label_Filingdes"},
													React.createElement("label",{},
														// React.createElement("b",{},"*"),
														React.createElement("b",{},"立案说明:")
													),
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
				React.createElement("div",{id:"buidings_insert_div4"},
						React.createElement("button",{className:"buiddings_borwsse_sub",onClick:this.saveNewInformation},"保 存")
				)
				// React.createElement("div",{id:"buidings_update_div4"},
				// 		React.createElement("button",{className:"buiddings_borwsse_sub",onClick:this.editNewInfoMation},"保 存")
				// )
			)
		);
	}
});
var array = [];
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
			str = this.props.data.remark.substr(0,13)+"..."
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
// 部门树
var BuidingsTreeview = React.createClass({
	getInitialState: function(){
		return{
			collapsed:false
		};
	},
	hanOnClick:function(e){
		this.setState({collapsed:!this.state.collapsed});

	},
	componentDidMount: function(){

	},
	render:function()
	{
		var talltree="";
		if(this.state.collapsed)
		{
			talltree="treeopen";
		}else
		{
			talltree="treecolse";
		}
		return (
			React.createElement("div",{id:"buiddings_tree_divx"},
				React.createElement("div",{className:"buiddings_tree_bumd",onClick:this.hanOnClick},
					React.createElement("div",{id:"",className:"treebumen"},this.props.data.bumen)
				),
				React.createElement("div",{className:talltree},
						React.createElement("div",{className:"treechil"},this.props.children)
				)
			)
		);
	}
});

//部门树（递归）
var BuidingsTree = React.createClass({
	getInitialState: function(){
		return{
			data:""
		};
	},
	render:function()
	{
		return (
			React.createElement("div",{id:""},
				this.props.data.map(function(arr,index){
					return React.createElement(BuidingsTreeview,{data:arr},
							React.createElement(BuidingsTree,{data:arr.list})
					)
				})
			)
		);
	}
});

var deleteFlag = false;

// 表格数据循环
var Buildingslist = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
    },
    componentDidMount: function(){
    	// buildinggehang();
		$(".building_address_substr").wordLimit(41);
		$(".buidding_list_td7").wordLimit(18);
		$(".buidding_list_td3").wordLimit(18);
	},
	hanOnOddClick:function(ee){
		nsEventBus.eventbus.broadcast("patrolltory_list_hoverindex",$(".buidding_list_tr:hover").index());
		if(deleteFlag == true){
		    deleteFlag = false;
		    return;
		}
		var str ="ledgerdetails.html?buildingId=";
		str += this.props.data.buildingId;
		// window.open(str);
		window.location.href = str;
	},
	handleDelete:function(){
        var _this=this;
        deleteFlag = true;
		layer.confirm('您确定要删除吗？', {
				btn: ['确定','取消'] //按钮
		},
		function(index){
            layer.close(index);
            var rules = new Object();
            rules.sid = getCookie("sid");
            rules.buildingId = _this.props.data.buildingId;
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
                        nsEventBus.eventbus.broadcast("QueryBuildings",null);
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
	componentDidUpdate: function(){
		$(".building_address_substr").wordLimit(41);
		$(".buidding_list_td7").wordLimit(18);
	},
	render:function()
	{
		var xuhao = ((this.props.page-1) * this.props.pagesize) + (this.props.index+1);
		return (
			React.createElement("tr",{className:"buidding_list_tr",onClick:this.hanOnOddClick},
				React.createElement("td",{className:"buidding_list_xuhao"},xuhao),
				React.createElement("td",{className:"buidding_list_td1"},this.props.data.discoverTimeFormat.substr(0,10)),
				React.createElement("td",{className:"buidding_list_td7"},this.props.data.buildingNo),
				React.createElement("td",{className:"buidding_list_td2"},
					React.createElement("img",{className:"buidding_list_img",src:judgeBinding(this.props.data.harmfulCode)}),
					React.createElement("span",{className:"building_address_substr"},"【"+this.props.data.area1+"】"+this.props.data.address)
				),
				React.createElement("td",{className:"buidding_list_td3"},this.props.data.coverArea+"㎡"),
				React.createElement("td",{className:"buidding_list_td4"},this.props.data.buildArea+"㎡"),
				React.createElement("td",{className:"buidding_list_td5"},this.props.data.newFlag==true?"增量":"存量"),
				React.createElement("td",{className:"buidding_list_td6"},this.props.data.sourceCode)
			)
		);
	}
});

// 设置分页的时候，数据还是保持查询或默认的请求
var timeFrom = null;
var timeTo = null;
var keyword = null;
var newFlag = null;
var sourceCode = null;
var bigCaseFlag = null;
var officialNo = null;

// 表格样式
var buildinggehang = function(){
	
}

// 新增/修改对话框样式
var buidingaddisedit = function(title){
	// 滚动条回到顶部
	$(".buiddings_borwsse_body").animate({scrollTop:0},100)
	$(".buidings_borwsse_title").text(title);
	$(".buiddings_borwsse_fudierji3").fadeIn(300);
	$(".buiddings_borwsse_dierji3").animate({top:'22px'},350);
}

function insertDefault(){
	//可以利用刷新来恢复默认值
//	window.location.reload();

	$(".buiddings_Renovation option").eq(0).attr({"selected":"selected"});
	$(".buiddings_borwse_group2").val("");
	$(".buiddings_borwse_hazardlevel option").eq(0).attr({"selected":"selected"});
	$(".buiddings_borwse_community option").eq(0).attr({"selected":"selected"});
	$(".buiddings_borwse_group option").eq(0).attr({"selected":"selected"});
	$("#buidings_isinsert_address").val("");
	$("#buidings_isinsert_address2").val("");
	$(".buiddings_borwse_housecode").val("");
	$(".buiddings_borwse_grid").val("");
	$(".buiddings_borwse_areacount").val("");
	$(".Buildingfunction option").eq(0).attr({"selected":"selected"});
	$("#buiddings_borwse_areacount").val("");
	$(".buiddings_borwse_buildcount").val("");
	$(".buiddings_borwse_layer").val("");
	$(".buiddings_borwse_Building").val("");
	$(".buiddings_borwse_startsituation option").eq(0).attr({"selected":"selected"});
	$(".buiddings_borwse_buildingtype option").eq(0).attr({"selected":"selected"});
	$(".buiddings_borwse_ownername").val("");
	$(".buiddings_borwse_contact").val("");
	$(".buiddings_borwse_identity").val("");
	$(".buiddings_borwse_contrarytype option").eq(0).attr({"selected":"selected"});
	$(".buiddings_borwse_casesource option").eq(0).attr({"selected":"selected"});
	$(".buiddings_borwse_findpeople").val("");
	$(".buiddings_borwse_oundtime").val("");
	$(".buiddings_borwse_isla option").eq(1).attr({"selected":"selected"});
	$(".buiddings_borwse_Filingh").val("");
	$(".buiddings_borwse_Filingexplain").val("");
	$("#buidding_borisre").val("");
	$("#buidings_borwse_id").val("");
	$(".buiddings_borwse_removaldate").val("");
	$(".buiddings_borwse_createperson").val("");
	$(".buiddings_architecturetype option").eq(0).attr({"selected":"selected"});
	$(".buiddings_buildingtype option").eq(0).attr({"selected":"selected"});
	$(".buiddings_renovation_startdate").val("");
	$(".buiddings_renovation_enddate").val("");
	point = null;
	$("#allmap_point_click").val("");
	$(".buiddings_borwse_remark").val("");
	this.selecthidden();
}

// 表格
var Buildings = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:[],
			selindex:-1,
			page: 1,
			pagesize:13,
			pagecount:1,
			buildingId:"",
			Community:[],
			SourceCode:[],
			harmfuCount:[]
		};
    },
    hanOnPublic: function(defaults,fun){
		var ascFlag = "";
		var orderForHarmfuleCode = "";
		if($(".buidings_timedesc option:selected").text() == "时间顺序"){
			ascFlag = true;
		}
		if($(".buidings_timedesc option:selected").text() == "时间倒序"){
			ascFlag = false;
		}
		if($(".buidings_timedesc option:selected").text() == "危害等级"){
			orderForHarmfuleCode = true;
		}
		// var ascFlag = $(".buidings_timedesc input").attr("checked") == "checked"?true:false;
//    	layer.alert(this.state.page);
    	/*// 默认查询
    	if(defaults == 0){
    		timeFrom =  datefun(0);	
			// 开始时间
    		timeFrom = "2016-01-01";
			timeTo   =  datefun(1);										// 结束时间
    		timeTo = "2016-12-28";
			var beginTime = document.getElementById("beginTime");
			var endTime = document.getElementById("endTime");
    		beginTime.value=timeFrom;
			endTime.value=timeTo;
    		keyword  =  $(".buidding_gjz_sel").val();					// 关键字
    		// 这里为0有问题
    		community =	 $(".buidding_type_sel option:selected").val();				    // 社区
    		sourceCode = $(".buidding_ajly_select").val();				// 案件来源
    		bigCaseFlag = $(".buidding_zdaj_sel").attr("checked") == "checked"?1:0;  // 是否重大
    		officialNo =  $(".buidding_fangb_sel").val();				// 房屋编码
    	}*/
    		timeFrom =  $(".buidding_min_sel").val();					// 开始时间
    		timeTo =  $(".buidding_max_sel").val();					    // 结束时间
			keyword  =  $(".buidding_gjz_sel").val();					// 关键字
			// 这里为0有问题
			community =	 $(".buidding_type_sel option:selected").text();
			if($(".buidding_type_sel option:selected").text()=="全部社区"){
					community = "";		   // 社区
			}					
			sourceCode = $(".buidding_ajly_select option:selected").text();// 案件来源
			if($(".buidding_ajly_select option:selected").text()=="案件来源"){
					sourceCode = "";		 //来源
			}
			if(fun == "default"){
				bigCaseFlag = "";
			}else{
				var tmp = $(".buidding_zdaj_sel option:selected").val();
				bigCaseFlag = parseInt(tmp)// 是否上报
			}
    	var sid = getCookie("sid");
		var loginUid = getCookie("loginUid");
		var uid = getCookie("uid");

		var rules = {"sid":sid,"uid":uid,"pageNo":this.state.page,"pagesize":this.state.pagesize,"keyword":keyword,
					 "timeFrom":timeFrom,"timeTo":timeTo,"newFlag":newFlag,"sourceCode":sourceCode,
					 "bigCaseFlag":bigCaseFlag,"area1":community,"ascFlag":ascFlag,"orderForHarmfuleCode":orderForHarmfuleCode};
		var tmp = JSON.stringify(rules);
		$.ajax({
		    url:common_ip+"buildings.do?action=list",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/json",
			success: function(data){
				console.log(data);
				if(data.successFlag){
					this.state.pagecount = data.pager.totalPage;
					this.state.harmfuCount = data.harmfulCounts;
					this.setState({data:data.pager.list});
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
    hanOnBuilSel: function(){
		if(this.state.selindex == -1){
			layer.alert("请选择您要查看的数据!");
			return;
		}
//        $("#chongxinreader").empty();
		var str ="ledgerdetails.html?buildingId=";
		str += this.state.buildingId;
		window.open(str);
    },
    hanOnBuilAdd: function(){


    	this.windwoszishiying();
    	buidingaddisedit("新 建 违 建 台 账");
    	$("#buidings_insert_div4").css({"display":"block"});
    	$("#buidings_update_div4").css({"display":"none"});
    	$(".buiddings_borwsse_auto span").text("");
		$("#AddBuilDings").empty();
		ReactDOM.render(React.createElement(BuildingbRowseModel,{data:this.state.data,selindex:this.state.selindex}),document.getElementById("AddBuilDings"));
		insertDefault();
    },
    hanOnBuilEdit: function(){
    	if(this.state.selindex == -1){
			layer.alert("请选择您要修改的数据!");
			return;
		}
    	insertDefault();
    	this.windwoszishiying();
    	buidingaddisedit("修 改 违 建 台 账");
    	$("#buidings_update_div4").css({"display":"block"});
    	$("#buidings_insert_div4").css({"display":"none"});
    	$(".buiddings_borwsse_auto span").text("");
    	
    	var datalist = this.state.data;
    	var selindex = this.state.selindex-1;
    	
    	$(".buiddings_borwse_hazardlevel").val(datalist[selindex].harmfulCode);
        $(".buiddings_borwse_community").val(datalist[selindex].area1);
    	$(".buiddings_borwse_group").val(datalist[selindex].area0);
    	$("#buidings_isinsert_address").val(datalist[selindex].address);
    	$("#buidings_isinsert_address2").val(datalist[selindex].bakAddress);
    	$(".buiddings_borwse_housecode").val(datalist[selindex].officialNo);
    	$(".buiddings_borwse_grid").val(datalist[selindex].gridId);
		 $(".Buildingfunction").val(datalist[selindex].buildingFunction);
		//  $("#AddcoverArea").val();
		//  $("#AddbuildArea").val();
    	$("#buiddings_borwse_areacount").val(datalist[selindex].coverArea);
    	$(".buiddings_borwse_buildcount").val(datalist[selindex].buildArea);
    	$(".buiddings_borwse_layer").val(datalist[selindex].totalFloor);
    	$(".buiddings_borwse_Building").val(datalist[selindex].totalBlock);
    	$(".buiddings_borwse_startsituation").val(datalist[selindex].buildFlag);
    	$(".buiddings_borwse_buildingtype").val(datalist[selindex].newFlag);
    	$(".buiddings_borwse_ownername").val(datalist[selindex].ownerName);
    	$(".buiddings_borwse_contact").val(datalist[selindex].ownerTel);
    	$(".buiddings_borwse_identity").val(datalist[selindex].ownerIdCode);
    	$(".buiddings_borwse_contrarytype").val(datalist[selindex].illegalCode);
    	$(".buiddings_borwse_casesource").val(datalist[selindex].sourceCode);
    	$(".buiddings_borwse_findpeople").val(datalist[selindex].discoverer);
		var discoverdate = datalist[selindex].discoverTimeFormat;
		var discovedate = discoverdate.substr(0,10);
    	$(".buiddings_borwse_oundtime").val(discovedate);
    	$(".buiddings_borwse_isla").val(datalist[selindex].caseFlag);
    	$(".buiddings_borwse_Filingh").val(datalist[selindex].caseNo);
		$(".buiddings_borwse_Filingexplain").val(datalist[selindex].caseRemark);
		$(".buiddings_borwse_remark").val(datalist[selindex].caseRemark);
    	$("#buidings_borwse_id").val(datalist[selindex].buildingNo);
		var planDestroyDateFormat = datalist[selindex].planDestroyDateFormat;
		var planDestDateFormat = planDestroyDateFormat.substr(0,10);
    	$(".buiddings_borwse_removaldate").val(planDestDateFormat);
    	$(".buiddings_borwse_createperson").val(datalist[selindex].creator);
    	$(".buiddings_architecturetype").val(datalist[selindex].constructCode);
		$(".buiddings_buildingtype").val(datalist[selindex].groundCode);
		$(".buiddings_buildingtype").val(datalist[selindex].buildingRemark);
    },
    hanOnBuilRepo: function(){
        if(this.state.selindex==-1){
            layer.alert("请选择上报台账!",{icon:2,title:"提示"});
            return;
        }
        var selectedbuildingId = this.state.data[this.state.selindex-1].buildingId;
        $("#buiddings_borwsse_dierji4").empty();
        ReactDOM.render(React.createElement(Transceiver,{title:"发文—台账上报",showModal:true,isSelectUser:true,transceiverInfo:"",operationType:"transceiverBuilding",module:"building",itemId:selectedbuildingId,status:"审批中",linkUrl:"ledgerdetails.html?buildingId="+selectedbuildingId}),document.getElementById("buiddings_borwsse_dierji4"))
    },
    hanOnBuilFile:function(){
        var sid = getCookie("sid");
        var rules = {"sid":sid,"buildingId":this.state.buildingId};
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
	componentWillMount:function(){
	    var _this = this;
	    nsEventBus.eventbus.on("QueryBuildings","QueryBuildings",function(msg){
            _this.hanOnPublic(1,"default");
	    });
	},

    componentDidMount: function(){
		$(".buidings_timedesc input").attr({"checked":true})

    	this.windwoszishiying();
    	
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

    	$(".buidding_ajly_select").val("巡查发现");
    	$(".buidding_type_sel").val("未经上报");
    	this.hanOnPublic(1,"default");
		var sid = getCookie("sid");
		var rules1={"sid":sid,"typeId":"'NoticeCode','CommunityCode','SourceCode'"};
		var tmp1 = JSON.stringify(rules1);
		$.ajax({
			url:common_ip+"commonCode.do?action=listSub",
			dataType:'json',
			data: tmp1,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					var noticecode=[];
					var communitycode=[];
					var sourcecode=[];
					for(var i=0;i<data.commonCodeList.length;i++){
						if(data.commonCodeList[i].typeId=="NoticeCode"){
							noticecode.push(data.commonCodeList[i]);
						}
						if(data.commonCodeList[i].typeId=="CommunityCode"){
							communitycode.push(data.commonCodeList[i]);
						}
						if(data.commonCodeList[i].typeId=="SourceCode"){
							sourcecode.push(data.commonCodeList[i]);
						}
					}
					this.setState({patrilStep:noticecode});
					this.setState({Community:communitycode});
					this.setState({SourceCode:sourcecode});
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
				$('.buidding_sub_sel').click();
			}
		});
	},
	handleSelect:function(event, selectedEvent){
		this.state.selindex = -1;
		buildinggehang();
		this.state.page = selectedEvent.eventKey;
//		this.setState({page:selectedEvent.eventKey});
		this.hanOnPublic(2);
	},
	hanOnChaXunClick:function(){
		// this.setState({page:1});
		this.state.page = 1;
		this.hanOnPublic(1);
	},
	hanOnStartTime: function(){
		this.state.page = 1;
		this.hanOnPublic(1);
	},
	hanOnEndTime: function(){
		this.state.page = 1;
		this.hanOnPublic(1);
	},
	hanOnCommunity: function(){
		this.state.page = 1;
		this.hanOnPublic(1);
	},
	hanOnCaseSource: function(){
		this.state.page = 1;
		this.hanOnPublic(1);
	},
	hanOnClickZhongDClick: function(){
		this.state.page = 1;
		this.hanOnPublic(1);
	},
	hanOnTimeDescChange: function(event){
		// 这里就先不优化了吧
		/*if($(".buidings_timedesc input").attr("checked") != "checked"){
			$(".buidings_timedesc input").attr({"checked":true});
		}else{
			$(".buidings_timedesc input").attr({"checked":!true});
		}*/
		this.hanOnPublic(1);
	},
	render:function()
	{
		var _this = this;
		nsEventBus.eventbus.on("patrolltory_selectlist","patrolltory_selectlist",function(){
			_this.hanOnPublic(0);
		});
		nsEventBus.eventbus.on("patrolltory_list_hoverindex","patrolltory_list_hoverindex",function(hoveindex){
			var selectedbuildingId = _this.state.data[hoveindex-1].buildingId;
			_this.setState({selindex:hoveindex,buildingId:selectedbuildingId});
		});
		var community=[];
		community.push(React.createElement("option",{className:"buiding_communitycla",value:""},"全部社区"));
		if(typeof(this.state.Community)!=undefined&&this.state.Community!=null){
			this.state.Community.map(function(arr){
				community.push(React.createElement("option",{className:"buiding_communitycla",value:arr.codeId},arr.codeName));
			})
		}
		var sourcecode=[];
		sourcecode.push(React.createElement("option",{value:""},"案件来源"));
		if(typeof(this.state.SourceCode)!=undefined&&this.state.SourceCode!=null){
			this.state.SourceCode.map(function(arr){
				sourcecode.push(React.createElement("option",{value:arr.codeId},arr.codeName))
			})
		}

		var gaocount = 0;
		var gaocount2 = 0;
		var zhongcount = 0;
		var diweicount = 0;
		var chaiccount = 0;
		var zhuangcount = 0;
		var chongjiancount = 0;
		for(var i=0;i<this.state.harmfuCount.length;i++){
			if(this.state.harmfuCount[i].harmfulCode == "高危未拆"){
				gaocount = this.state.harmfuCount[i].amount;
			}
			if(this.state.harmfuCount[i].harmfulCode == "高危已拆"){
				gaocount2 = this.state.harmfuCount[i].amount;
			}
			if(this.state.harmfuCount[i].harmfulCode == "中危"){
				zhongcount = this.state.harmfuCount[i].amount;
			}
			if(this.state.harmfuCount[i].harmfulCode == "低危"){
				diweicount = this.state.harmfuCount[i].amount;
			}
			if(this.state.harmfuCount[i].harmfulCode == "拆除"){
				chaiccount = this.state.harmfuCount[i].amount;
			}
			if(this.state.harmfuCount[i].harmfulCode == "装修"){
				zhuangcount = this.state.harmfuCount[i].amount;
			}
			if(this.state.harmfuCount[i].harmfulCode == "拆危重建"){
				chongjiancount = this.state.harmfuCount[i].amount;
			}
		}
		var pagecount = this.state.page;
		var pagesize = this.state.pagesize;
			return (
				React.createElement("div",{className:"",id:"buiddingfid"},
					React.createElement("div",{className:"buidding_dierji_div1"},
						React.createElement("div",{className:"buildings_sisanji_select"},
								React.createElement("div",{},
										React.createElement(Input,{id:"beginTime",className:"buidding_min_sel",type:"date",onChange:this.hanOnStartTime}),
										React.createElement("label",{className:"building_data_mix"},"~"),
										React.createElement(Input,{id:"endTime",className:"buidding_max_sel",type:"date",onChange:this.hanOnEndTime}),
										React.createElement("select",{className:"buidding_type_sel",type:"select",onChange:this.hanOnCommunity},
											community
										),	
										React.createElement("select",{className:"buidding_ajly_select",type:"select",onChange:this.hanOnCaseSource},
											sourcecode
										),
										//React.createElement("input",{type:"text",placeholder:"房屋编码...",className:"buidding_fangb_sel"}),*/
										React.createElement("select",{className:"buidding_zdaj_sel",label:"",onChange:this.hanOnClickZhongDClick},
											React.createElement("option",{value:""},"上报状态"),
											React.createElement("option",{value:1},"已上报"),
											React.createElement("option",{value:0},"未上报")
										),
										React.createElement("input",{type:"text",placeholder:"建筑物编码/小区/关键字...",className:"buidding_gjz_sel"}),
										React.createElement("div",{className:"buidings_timedesc"},
											React.createElement("select",{className:"buidings_paixu",onChange:this.hanOnTimeDescChange},
												React.createElement("option",{className:""},"时间顺序"),
												React.createElement("option",{className:""},"时间倒序"),
												React.createElement("option",{className:""},"危害等级")
											)
										),
										React.createElement("button",{className:"buidding_sub_sel",onClick:this.hanOnChaXunClick},"查 询"),
										React.createElement("button",{className:"buidding_div1_add",onClick:this.hanOnBuilAdd},"新 增")
								)
						),
						React.createElement("div",{id:"buidings_harmfulCode"},
							React.createElement("label",{className:""},"总条数:"),
							React.createElement("span",{className:""},gaocount+gaocount2+zhongcount+diweicount+chaiccount+zhuangcount+chongjiancount),
							React.createElement("label",{className:""},"高危未拆数:"),
							React.createElement("span",{className:""},gaocount),
							React.createElement("label",{className:""},"高危已拆数:"),
							React.createElement("span",{className:""},gaocount2),
							React.createElement("label",{className:""},"中危数:"),
							React.createElement("span",{className:""},zhongcount),
							React.createElement("label",{className:""},"低危数:"),
							React.createElement("span",{className:""},diweicount),
							React.createElement("label",{className:""},"拆除数:"),
							React.createElement("span",{className:""},chaiccount),
							React.createElement("label",{className:""},"装修数:"),
							React.createElement("span",{className:""},zhuangcount),
							React.createElement("label",{className:""},"拆危重建数:"),
							React.createElement("span",{className:""},chongjiancount)
						),
						React.createElement("table",{id:"buidding_list_table"},
							React.createElement("tr",null,
								React.createElement("th",{className:"buidling_th1"},"序号"),
								React.createElement("th",{},"发现时间"),
								React.createElement("th",null,"违建编码"),
								React.createElement("th",null,"地点"),
								React.createElement("th",null,"占地面积（㎡）"),
								React.createElement("th",null,"建筑面积（㎡）"),
								React.createElement("th",null,"是否增量"),
								React.createElement("th",null,"案件来源"),
								React.createElement("th",null,"")
							),
							this.state.data.map(function(arr,index){
								return React.createElement(Buildingslist,{data:arr,index:index,page:pagecount,pagesize:pagesize})
							})
						),
						React.createElement("div",{className:"buildings_disanji_fen"},
								React.createElement(Pagination,{id:"buildings_fenye",prev: true,
								      next: true,
								      first: '第一页',
								      last: '最后一页',
								      ellcommon_ipsis: true,
								      boundaryLinks: true,
								      items: this.state.pagecount,
								      maxButtons: 5,
								      activePage: this.state.page,
								      onSelect: this.handleSelect}
								)	
						)
					),
					React.createElement("div",{className:"buiddings_borwsse_fudierji3"},
							React.createElement("div",{className:"buiddings_borwsse_dierji3"},
								React.createElement("div",{id:"AddBuilDings"}),
								React.createElement("div",{id:"AddBuilDingsTwo"})

						)
					),
					React.createElement("div",{className:"buiddings_borwsse_fudierji4"},
							React.createElement("div",{id:"buiddings_borwsse_dierji4"}
						)
					)
				)
			);
	}
});




//ReactDOM.render(React.createElement(Buildings),document.getElementById("buildings"));