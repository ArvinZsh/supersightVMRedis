var Button = window.Button || ReactBootstrap.Button;
var Pagination = ReactBootstrap.Pagination;
var Input = window.Input || ReactBootstrap.Input;
var Button = window.Button || ReactBootstrap.Button;
var Grid = ReactBootstrap.Grid || "";
var Row = ReactBootstrap.Row || "";
var Col = ReactBootstrap.Col || "";
var Image = ReactBootstrap.Image || "";
var Tabs = window.Tabs || ReactBootstrap.Tabs;
var Tab = window.Tab || ReactBootstrap.Tab;
var mountNode = document.getElementById("pageSpec");

var array = [{Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"广东省深圳市南山区平山一路十四栋八单元",coordinateX:114.498304,coordinateY:22.54264,welean:"高危"},
                {Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"浙江省深圳市南山区平山一路十四栋八单元",coordinateX:114.501681,coordinateY:22.541339,welean:"高危"},
                {Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"江苏省深圳市南山区平山一路十四栋八单元",coordinateX:114.495303,coordinateY:22.542307,welean:"高危"},
                {Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"四川省深圳市南山区平山一路十四栋八单元",coordinateX:114.501089,coordinateY:22.539219,welean:"高危"},
                {Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"河南省深圳市南山区平山一路十四栋八单元",coordinateX:114.502939,coordinateY:22.537884,welean:"中危"},
                {Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"河北省深圳市南山区平山一路十四栋八单元",coordinateX:114.502184,coordinateY:22.537533,welean:"中危"},
                {Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"湖南省深圳市南山区平山一路十四栋八单元",coordinateX:114.499346,coordinateY:22.538201,welean:"中危"},
                {Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"湖北省深圳市南山区平山一路十四栋八单元",coordinateX:114.503029,coordinateY:22.545261,welean:"高危"},
                {Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"省深圳市南山区平山一路十四栋八单元",coordinateX:114.497477,coordinateY:22.54229,welean:"高危"},
                {Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"广东省深圳市南山区平山一路十四栋八单元",coordinateX:114.497998,coordinateY:22.54012,welean:"低危"},
                {Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"广东省深圳市南山区平山一路十四栋八单元",coordinateX:114.49692,coordinateY:22.538101,welean:"低危"},
                {Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"广东省深圳市南山区平山一路十四栋八单元",coordinateX:114.495914,coordinateY:22.540738,welean:"低危"},
                {Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"广东省深圳市南山区平山一路十四栋八单元",coordinateX:114.504035,coordinateY:22.539837,welean:"已拆"}]

//var array = [{Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"广东省深圳市南山区平山一路十四栋八单元",coordinateX:114.498304,coordinateY:22.54264,welean:"高危"},
//           {Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"浙江省深圳市南山区平山一路十四栋八单元",coordinateX:114.501681,coordinateY:22.541339,welean:"高危"},
//           {Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"江苏省深圳市南山区平山一路十四栋八单元",coordinateX:114.495303,coordinateY:22.542307,welean:"高危"},
//           {Illegalencoding:"20160512-001",Illegaladdress:"南澳运动街",nanaoaddress:"四川省深圳市南山区平山一路十四栋八单元",coordinateX:114.501089,coordinateY:22.539219,welean:"高危"}]

var array2 = [{hazardlevel:"12",community:"南澳",group:"无形小组",address:"广东省",spareaddress:"浙江省",housecode:"1616",grid:"541",areacount:"111*20",buildcount:"62*15",layer:20,buildings:10,startsituation:"是",buildingtype:"存量",ownername:"华宇",contactphone:"1513165",idcardnumber:"171651654154",contrarytype:"新建",casesource:"巡查发现",findpeople:"李四",oundtime:"2016-1-1",major:true,majortype:"违建面积大",isfiling:"是",filingnumber:"58167",borisre:"gegewagewagewagwe"},
             {hazardlevel:"12",community:"南澳",group:"无形小组",address:"广东省",spareaddress:"浙江省",housecode:"1616",grid:"541",areacount:"111*20",buildcount:"62*15",layer:20,buildings:10,startsituation:"是",buildingtype:"存量",ownername:"华宇",contactphone:"1513165",idcardnumber:"171651654154",contrarytype:"新建",casesource:"巡查发现",findpeople:"李四",oundtime:"2016-1-1",major:true,majortype:"违建面积大",isfiling:"是",filingnumber:"58167",borisre:"gegewagewagewagwe"},
             {hazardlevel:"12",community:"南澳",group:"无形小组",address:"广东省",spareaddress:"浙江省",housecode:"1616",grid:"541",areacount:"111*20",buildcount:"62*15",layer:20,buildings:10,startsituation:"是",buildingtype:"存量",ownername:"华宇",contactphone:"1513165",idcardnumber:"171651654154",contrarytype:"新建",casesource:"巡查发现",findpeople:"李四",oundtime:"2016-1-1",major:true,majortype:"违建面积大",isfiling:"是",filingnumber:"58167",borisre:"gegewagewagewagwe"},
             {hazardlevel:"12",community:"南澳",group:"无形小组",address:"广东省",spareaddress:"浙江省",housecode:"1616",grid:"541",areacount:"111*20",buildcount:"62*15",layer:20,buildings:10,startsituation:"是",buildingtype:"存量",ownername:"华宇",contactphone:"1513165",idcardnumber:"171651654154",contrarytype:"新建",casesource:"巡查发现",findpeople:"李四",oundtime:"2016-1-1",major:true,majortype:"违建面积大",isfiling:"是",filingnumber:"58167",borisre:"gegewagewagewagwe"},
             {hazardlevel:"12",community:"南澳",group:"无形小组",address:"广东省",spareaddress:"浙江省",housecode:"1616",grid:"541",areacount:"111*20",buildcount:"62*15",layer:20,buildings:10,startsituation:"是",buildingtype:"存量",ownername:"华宇",contactphone:"1513165",idcardnumber:"171651654154",contrarytype:"新建",casesource:"巡查发现",findpeople:"李四",oundtime:"2016-1-1",major:true,majortype:"违建面积大",isfiling:"是",filingnumber:"58167",borisre:"gegewagewagewagwe"},
             {hazardlevel:"12",community:"南澳",group:"无形小组",address:"广东省",spareaddress:"浙江省",housecode:"1616",grid:"541",areacount:"111*20",buildcount:"62*15",layer:20,buildings:10,startsituation:"是",buildingtype:"存量",ownername:"华宇",contactphone:"1513165",idcardnumber:"171651654154",contrarytype:"新建",casesource:"巡查发现",findpeople:"李四",oundtime:"2016-1-1",major:true,majortype:"违建面积大",isfiling:"是",filingnumber:"58167",borisre:"gegewagewagewagwe"}];

/*// 所需图片参数
var images1 = "url('../images/mapimage/highrisk.png')";
var images2 = "url('../images/mapimage/moderaterisk.png')";
var images3 = "url('../images/mapimage/lowrisk.png')";
var images4 = "url('../images/mapimage/removed.png')";
var images5 = "url('../images/mapimage/highriskicon.png')";
var images6 = "url('../images/mapimage/moderateriskicon.png')";
var images7 = "url('../images/mapimage/lowriskicon.png')";
var images8 = "url('../images/mapimage/removedicon.png')";*/

var baidu = baidu || {
    guid: "$BAIDU$"
};

baidu.extend = function (target, source) {
    for (var p in source) {
        if (source.hasOwnProperty(p)) {
            target[p] = source[p];
        }
    }
    return target;
};

function overbackcolore(){
	$(".mapvwindows_ddiv4").css({"background-color":"#E5F3FE"})
}

function outbackcolore(){
	$(".mapvwindows_ddiv4").css({"background-color":""})
}

function overbackcolore2(){
	$(".mapvwindows_ddiv41").css({"background-color":"#E5F3FE"})
}

function outbackcolore2(){
	$(".mapvwindows_ddiv41").css({"background-color":""})
}

// (可以去用自定义marker拖拽)这里用的是笨方法.
var shuaxincount = 0;
function updateding(){
		// 修改父窗口自适应
		function ee(){
			if(1300 > $(window).width()){
				$(".mapview_right_illegalcontent").css("width",1300+"px");
			}else{
				$(".mapview_right_illegalcontent").css("width",$(window).width()+"px");
			}

			if($("body").height() > $(window).height()){
				$("#mapview_right_illegalcontent").css("height",$("body").height()+8+"px");
			}else{
				$("#mapview_right_illegalcontent").css("height",$(window).height()+0+"px");
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

		$("#mapview_right_illegalcontent").addClass("mapview_right_illegalcontent");
		$("#mapview_right_illegalcontent").css({"width":"100%"});
		$("#allmap").addClass("allmap");

		// 修改坐标时清楚所有marker
		bm.clearOverlays();

		// 获取坐标对象
		var pt = new BMap.Point(data2.longtiude, data2.latitude);
		// 设置自定义图片
		var myIcon = new BMap.Icon(judgeBinding(data2.harmfulCode), new BMap.Size(24, 40));
		// 生成自定义图片marker
		var marker = new BMap.Marker(pt, {icon: myIcon});  // 创建标注
		// 添加到地图上
		bm.addOverlay(marker);
		marker.enableDragging();
		// 设置label标识
		marker.setLabel(markerlabel(new BMap.Point(data2.longtiude, data2.latitude),selindex2));
		// 移除事件
		marker.removeEventListener("dragend", createDragend);
		// 添加事件
		marker.addEventListener("dragend", createDragend(data2))

		// 事件执行
	    function createDragend(data){
			return function(e){
				updatedingwei(data,e.point.lng,e.point.lat);
			}
		}
}

// 根据违建id修改定位
function updatedingwei(data,longtiude,latitude){
	var buildingId = data.buildingId;

	var rules = {"sid":sid,"longtiude":longtiude,"latitude":latitude,"buildingId":buildingId,"address":data.address};
	var tmp = JSON.stringify(rules);

	$.ajax({
		url:common_ip+"buildings.do?action=updateForMap",
		dataType:'json',
		data:tmp,
		type:'post',
		contentType:"application/x-www-form-urlencoded",
		success: function(data){
			if(data.successFlag){
				layer.msg("修改成功",{icon:1});
				$(".mapview_left_illegalcontentdcla").unbind("click");
				$(".mapvwindows_div4span").unbind("click");
			}else{
				layer.alert("修改失败"+data.errorMsg);
			}
		}.bind(this),
		error: function(request, state, error){
			layer.alert("出现异常,请重新修改");
//				console.error(this.props.url, state, error.toString());
		}.bind(this)
	});
}

// 台账详情
function buidingssel(){
	window.location.href = "ledgerdetails.html?buildingId="+data2.buildingId;
}

var data2 = null;
var selindex2 = null;
// 打开windows窗口
function openwindows(buidingsdata,selindex,i){

	if(selindex != undefined){
		if(selindex+1 != i){
			return;
		}
	}
	data2 = buidingsdata;
	selindex2 = i;


	// 信息窗口内容
		var sContent = "<div class='mapvwindows_div'>" +
				"【"+buidingsdata.area1+"】" + buidingsdata.address+
		"</div>" +
		"<div class='mapvwindows_div4'>" +
			"<div class='mapvwindows_ddiv4'  onclick='updateding()' onmouseover='overbackcolore()' onmouseout='outbackcolore()'>"+
				"<div class='mapvwindows_div4spanbackimage'></div>" +
				"<span class='mapvwindows_div4span'>修改定位</span>" +
			"</div>" +
			"<div class='mapvwindows_ddiv41'  onClick='buidingssel()'  onmouseover='overbackcolore2()' onmouseout='outbackcolore2()'>"+
				"<div class='mapvwindows_div4spanbackimage2'></div>" +
				"<span class='mapvwindows_div4span2'>台账详情 ></span>" +
			"</div>" +
		"</div>"


	// 创建窗口对象
	var infoWindow = new BMap.InfoWindow(sContent);

	// 创建point坐标对象
	var opint = new BMap.Point(buidingsdata.longtiude,buidingsdata.latitude+0.00025);

	bm.openInfoWindow(infoWindow,opint); //开启信息窗口
	// bm.panTo(opint);
	//bm.openInfoWindow(infoWindow,points[0]);
	//bm.closeInfoWindow();    // 关闭已打开的窗口
}

var bm = null;
//复杂的自定义覆盖物(百度地图api有实例)
function ComplexCustomOverlay(point,i, backimage,backimage2,data){
  this._point = point;
  this._i = i;
  this._backimage = backimage;
  this._backimage2 = backimage2;
	this._data = data;
}
ComplexCustomOverlay.prototype = new BMap.Overlay();

var ddiv = null;
var divstyle = null;
ComplexCustomOverlay.prototype.initialize = function(map){
  this._map = map;
  var div = this._div = document.createElement("div",{name:"aaa"});
  div.style.position = "absolute";
  div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
//  div.style.background = this._backimage2+" no-repeat";
  div.style.color = "white";
  div.style.height = "38px";
  div.style.padding = "1px";
  div.style.lineHeight = "20px";
	div.style.marger = "10px";

//  div.style.border = "1px solid blue";
  div.style.width = "28px";
  div.style.whiteSpace = "nowrap";
  div.style.MozUserSelect = "none";
  div.style.fontSize = "12px";
  var div2 = this._div2 = document.createElement("div");
  div.appendChild(div2);
//  div2.style.border = "1px solid blue";
  div2.style.width = "24px";
  div2.style.height = "32px";
  div2.style.margin = "3px";
  div2.style.padding = "1px";
  div2.style.background = this._backimage+" no-repeat";
  var span = this._span = document.createElement("span");
  div2.appendChild(span);
  span.appendChild(document.createTextNode(this._i));
  if(this._i >= 100){
	  span.style.marginLeft = "0px";
  }else if(this._i >= 10){
	  span.style.marginLeft = "1px";
  }else{
	  span.style.marginLeft = "5px";
  }


//  var index1 = $(".mapview_left_illegalcontentdcla:hover").index()+1;
//  var index = index1 == 0?1:index1;
//  if(index == this._i){
//	  div.style.backgroundColor = "#000";
//  }

  // 左边元素点击事件  这里可以用表格组件点击事件触发eventbus来只调用一次实现
  var _this = this;
  $(".mapview_left_illegalcontentdcla").click(function(){
	  div.style.zIndex = "0";
	  // 左边元素选中下标
	  if($(".mapview_left_illegalcontentdcla:hover").index()+1 == _this._i){
		  div.style.background = _this._backimage2+" no-repeat";
		  ddiv = div;
		  div.style.zIndex = "100";
		  bm.centerAndZoom(_this._point,17);
	  }else{
		  div.style.background = "";
	  }

	  // 调用打开windows窗口函数
	  openwindows(_this._data,$(".mapview_left_illegalcontentdcla:hover").index(),_this._i);
  })

  // 点击当前元素的时候，设定中心点坐标
  div.addEventListener("click", function(){
	  // 平移到给定坐标位置
	  bm.panTo(_this._point);

	  // 调用打开windows窗口函数
	  openwindows(_this._data,undefined,_this._i);

	  // 取消前一次左边元素选中的图钉
	  if(ddiv != null){
		  ddiv.style.background = "";
	  }

	  // 修改图钉选中状态
	  if(divstyle != this){
		  if(divstyle != null){
			  divstyle.style.background = "";
		  }
	  }
	  divstyle = this;
	  div.style.background = _this._backimage2+" no-repeat";

	  // 平移设置中心点
//	  bm.centerAndZoom(_this._point,17);
	  $(".mapview_left_illegalcontentdcla").removeClass("mapveiwleftbakccolor2");
	  $(".mapview_left_illegalcontentdcla").eq(_this._i-1).addClass("mapveiwleftbakccolor2");


	  // 设置div滚动条位置
	  var container = $("#mapview_left_illegalcontentdiv2");
	  var scrollTo = $(".mapview_left_illegalcontentdcla").eq(_this._i-1);

	  container.scrollTop(
		  scrollTo.offset().top - container.offset().top + container.scrollTop()
	  );

	  container.animate({
		  scrollTo:scrollTo.offset().top - container.offset().top + container.scrollTop()
	  });

	  // 地图图钉与右下角内容关联
	  nsEventBus.eventbus.broadcast("mapview_map_index",[_this._i-1,_this._backimage]);

  }); //覆盖物点击事件


//  $("#allmap ").click(function(e){
//	  layer.alert($("#allmap div").index());
//	  div.style.background = "";
////	  div.style.background = _this._backimage2+" no-repeat";
//
//	  $(".mapview_left_illegalcontentdcla").css({"background-color":"#FFF"});
//	  $(".mapview_left_illegalcontentdcla").eq(_this._i-1).css({"background-color":"#FFF8CE"});
//  })

  bm.getPanes().markerPane.appendChild(div);

  return div;
}
ComplexCustomOverlay.prototype.draw = function(){
  var map = this._map;
  var pixel = map.pointToOverlayPixel(this._point);
  this._div.style.left = pixel.x - 16 + "px";
  this._div.style.top  = pixel.y - 25 + "px";
}

// 获取覆盖物位置
ComplexCustomOverlay.prototype.getPosition = function () {
    return this._point;
};

// 添加覆盖物事件
ComplexCustomOverlay.prototype.addEventListener = function(event,fun){
    this._div['on'+event] = fun;
}

// marker的label内容标识
var margers = "";
function markerlabel(point,i){
	// 判断是否超过指定数字
	if(i>9 && i<100){
		margers = "2px 0px 0px 1px";
	}else if(i>99 && i<1000){
		margers = "2px 0px 0px 0px";
	}else{
		margers = "2px 0px 0px 5px";
	}

	// 把label绑定到marker中
	var label = new BMap.Label(i, point);  // 创建文本标注对象
	label.setStyle({
		 color : "#FFF",
		 fontSize : "12px",
		 height : "20px",
		 fontFamily:"微软雅黑",
		 border:"0px",
         backgroundColor:"rgba(0,0,0,.0)",
		 margin:margers
	 });
	return label;
}

// 用户id
var sid = getCookie("sid");

// 自定义复选框函数
function checktoggle(domid) {
	// 复选框切换
	var checkboxall = $(domid);
	if(checkboxall.attr("name") == "checkboxall_true"){
		checkboxall.attr({"name":"checkboxall_false"})
		checkboxall.removeClass("mapview_checkboxall_true");
		checkboxall.addClass("mapview_checkboxall_false");
	}else{
		checkboxall.attr({"name":"checkboxall_true"})
		checkboxall.removeClass("mapview_checkboxall_false");
		checkboxall.addClass("mapview_checkboxall_true");
	}
}

// 当所有复选框都选中触发
var quanxuan = function(){
	// 当所有危害选中时或未选中时
	if($("#mapview_checkboxhighrisk_id").attr("name") == "checkboxall_true" && $("#mapview_checkboxmoderaterisk_id").attr("name") == "checkboxall_true" &&
		$("#mapview_checkboxlowrisk_id").attr("name") == "checkboxall_true" && $("#mapview_checkboxremoved_id").attr("name") == "checkboxall_true" &&
		$("#mapview_checkboxhighrisk2_id").attr("name") == "checkboxall_true" && $("#mapview_checkboxrenovation_id").attr("name") == "checkboxall_true" &&
		$("#mapview_rebuild_id").attr("name") == "checkboxall_true"){
		$("#mapview_checkboxall_id").removeClass("mapview_checkboxall_false");
		$("#mapview_checkboxall_id").addClass("mapview_checkboxall_true");
		$("#mapview_checkboxall_id").attr({"name":"checkboxall_true"});
	}else{
		$("#mapview_checkboxall_id").removeClass("mapview_checkboxall_true");
		$("#mapview_checkboxall_id").addClass("mapview_checkboxall_false");
		$("#mapview_checkboxall_id").attr({"name":"checkboxall_false"});
	}

	// 当所有危害未选中时
	if($("#mapview_checkboxhighrisk_id").attr("name") == "checkboxall_false" && $("#mapview_checkboxmoderaterisk_id").attr("name") == "checkboxall_false" &&
		$("#mapview_checkboxlowrisk_id").attr("name") == "checkboxall_false" && $("#mapview_checkboxremoved_id").attr("name") == "checkboxall_false" &&
		$("#mapview_checkboxhighrisk2_id").attr("name") == "checkboxall_false" && $("#mapview_checkboxrenovation_id").attr("name") == "checkboxall_false" &&
		$("#mapview_rebuild_id").attr("name") == "checkboxall_false"){
		$(".mapview_checkboxall").removeClass("mapview_checkboxall_true");
		$(".mapview_checkboxall").addClass("mapview_checkboxall_false");
		$("#mapview_checkboxlowrisk_id,#mapview_checkboxmoderaterisk_id,#mapview_checkboxhighrisk_id,#mapview_checkboxremoved_id,#mapview_checkboxhighrisk2_id,#mapview_checkboxrenovation_id,#mapview_rebuild_id").attr({"name":"checkboxall_false"});
		nsEventBus.eventbus.broadcast("mapview_selAll",[]);
		this.hanOnSelectPublic();
	}
}

// 左边台账
var mapviewslist = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
	},
	hanOnLeftBackColor: function(){
		// 左边内容和右下角内容关联
		$(".mapview_left_illegalcontentdcla").removeClass("mapveiwleftbakccolor2");
		$(".mapview_left_illegalcontentdcla:hover").addClass("mapveiwleftbakccolor2");
	},
	hanOnMouseOut:function(){
		$(".mapview_left_illegalcontentdcla").removeClass("mapveiwleftbakccolor");
	},
	hanOnMoveHover: function(){
		$(".mapview_left_illegalcontentdcla:hover").addClass("mapveiwleftbakccolor");
	},
	hanOnBackImagePublic: function(){
		// 修改左边元素样式
		if($(".mapview_left_illegalcontentfirstdiv4 label").eq(this.props.dataindex).text() > 9 && $(".mapview_left_illegalcontentfirstdiv4 label").eq(this.props.dataindex).text() < 100){
			$(".mapview_left_illegalcontentfirstdiv4 label").eq(this.props.dataindex).css({"padding":"2px 0px 0px 2px"});
		}else if($(".mapview_left_illegalcontentfirstdiv4 label").eq(this.props.dataindex).text() > 99){
			$(".mapview_left_illegalcontentfirstdiv4 label").eq(this.props.dataindex).css({"padding":"2px 0px 0px 0px"});
		}else{
			$(".mapview_left_illegalcontentfirstdiv4 label").eq(this.props.dataindex).css({"padding":"2px 0px 0px 3px;"});
		}
	},
	componentDidMount: function(){
		// 调用数字对齐图片函数
		this.hanOnBackImagePublic();
	},
	componentDidUpdate: function(){
		// 调用数字对齐图片函数
		this.hanOnBackImagePublic();
	},
	render:function()
	{
		var backimage = "url('"+ judgeBinding(this.props.data.harmfulCode) +"')";
		return (
			React.createElement("div",{className:"mapview_left_illegalcontentdcla",onClick:this.hanOnLeftBackColor,onMouseOver:this.hanOnMoveHover,onMouseOut:this.hanOnMouseOut},
				React.createElement("div",{className:"mapview_left_illegalcontentfirstdiv4"},
					React.createElement("label",{className:"mapview_left_illegalcontentfirstdiv4div",style:{"background-image":backimage}},this.props.dataindex+1)
				),
				/*React.createElement("div",{className:"mapview_left_illegalcontentfirstdiv1"},
				 React.createElement("span",{className:""},this.props.data.createTimeFormat)
				 ),*/
				React.createElement("div",{className:"mapview_left_illegalcontentfirstdiv2"},
					React.createElement("span",{className:"mapview_left_illegalcontentfirstnaaddress"},
						"【"+this.props.data.area1+"】"+
						this.props.data.address)
				)
			)
		);
	}
});

// 左边列表组件
var Mapviewstable = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
	},
	componentDidMount: function(){
	},
	render:function()
	{
		return (
			React.createElement("div",{className:""},
				this.props.data.map(function(arr,index){
					return React.createElement(mapviewslist,{data:arr,dataindex:index})
				})
			)
		);
	}
});

var markerlist = [];
var MapViews = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:[],
			maps:"",
			markerlist:[],
			pagecount:0,
			pagesize:300,
			page: 1,
			keyValue:""
		};
    },
	backImageAll: function(){	// 危害等级图标切换,为checkboxall_false则图标为灰色
		if($("#mapview_checkboxhighrisk_id").attr("name") == "checkboxall_true") {
			$(".mapview_highrisk_span1").css({"background-image": "url('../images/mapimage2/highriskmin.png')"});
		}else{
			$(".mapview_highrisk_span1").css({"background-image": "url('../images/mapimage2/notpoint.png')"});
		}
		if($("#mapview_checkboxmoderaterisk_id").attr("name") == "checkboxall_true") {
			$(".mapview_highrisk_span2").css({"background-image": "url('../images/mapimage2/moderateriskmin.png')"});
		}else{
			$(".mapview_highrisk_span2").css({"background-image": "url('../images/mapimage2/notpoint.png')"});
		}
		if($("#mapview_checkboxlowrisk_id").attr("name") == "checkboxall_true") {
			$(".mapview_highrisk_span3").css({"background-image": "url('../images/mapimage2/lowriskmin.png')"});
		}else{
			$(".mapview_highrisk_span3").css({"background-image": "url('../images/mapimage2/notpoint.png')"});
		}
		if($("#mapview_checkboxremoved_id").attr("name") == "checkboxall_true") {
			$(".mapview_highrisk_span4").css({"background-image": "url('../images/mapimage2/removedmin.png')"});
		}else{
			$(".mapview_highrisk_span4").css({"background-image": "url('../images/mapimage2/notpoint.png')"});
		}
		if($("#mapview_checkboxhighrisk2_id").attr("name") == "checkboxall_true") {
			$(".mapview_highrisk_span5").css({"background-image": "url('../images/mapimage2/Already_min.png')"});
		}else{
			$(".mapview_highrisk_span5").css({"background-image": "url('../images/mapimage2/notpoint.png')"});
		}
		if($("#mapview_checkboxrenovation_id").attr("name") == "checkboxall_true") {
			$(".mapview_highrisk_span6").css({"background-image": "url('../images/mapimage2/RenovationMin.png')"});
		}else{
			$(".mapview_highrisk_span6").css({"background-image": "url('../images/mapimage2/notpoint.png')"});
		}
		if($("#mapview_rebuild_id").attr("name") == "checkboxall_true") {
			$(".mapview_highrisk_span7").css({"background-image": "url('../images/mapimage2/rebuildmin.png')"});
		}else{
			$(".mapview_highrisk_span7").css({"background-image": "url('../images/mapimage2/notpoint.png')"});
		}
	},
    hanOnselectClick:function(event){	// 全选
		var gaow = $("#mapview_checkboxhighrisk_id").attr("name");
		if(gaow!="checkboxall_true"){
			// 全部取消
			$(".mapview_checkboxall").removeClass("mapview_checkboxall_false");
			$(".mapview_checkboxall").addClass("mapview_checkboxall_true");
			$("#mapview_checkboxlowrisk_id,#mapview_checkboxmoderaterisk_id,#mapview_checkboxhighrisk_id,#mapview_checkboxremoved_id,#mapview_checkboxhighrisk2_id,#mapview_checkboxrenovation_id,#mapview_rebuild_id").attr({"name":"checkboxall_true"});
		}else{
			// 点击全选时的操作
			$(".mapview_checkboxall").removeClass("mapview_checkboxall_true");
			$(".mapview_checkboxall").addClass("mapview_checkboxall_false");
			$("#mapview_checkboxlowrisk_id,#mapview_checkboxmoderaterisk_id,#mapview_checkboxhighrisk_id,#mapview_checkboxremoved_id,#mapview_checkboxhighrisk2_id,#mapview_checkboxrenovation_id,#mapview_rebuild_id").attr({"name":"checkboxall_false"});
		}
		// checktoggle("#mapview_checkboxall_id");

		$(".mapview_left_illegalcontentdcla").css({"background-color":"#FFF"});
		// 设置分页为默认值
		this.state.page = 1;
		this.state.keyValue = "";
		// 调用查询方法
		if(gaow=="checkboxall_true"){
			nsEventBus.eventbus.broadcast("mapview_selAll",[]);
			return;
		}
		this.hanOnSelectPublic();
    },
    hanOnhighriskClick:function(){	// 高危未拆
		// 切换复选框效果函数
		checktoggle("#mapview_checkboxhighrisk_id");
		// 当危害等级复选框未选中时函数
		quanxuan();

		// 设置分页为默认值
		this.state.page = 1;
		this.state.keyValue = "";
		// 调用查询方法
		this.hanOnSelectPublic();
		$(".mapview_left_illegalcontentdcla").css({"background-color":"#FFF"});
    },
    hanOnindangerClick:function(){	// 中危
		// 切换复选框效果函数
		checktoggle("#mapview_checkboxmoderaterisk_id");
		// 当危害等级复选框未选中时函数
		quanxuan();

		// 设置分页为默认值
		this.state.page = 1;
		this.state.keyValue = "";
		this.hanOnSelectPublic();
		$(".mapview_left_illegalcontentdcla").css({"background-color":"#FFF"});
    },
	hanRenovationClick:function(){//装修
		// 切换复选框效果函数
		checktoggle("#mapview_checkboxrenovation_id");
		// 当危害等级复选框未选中时函数
		quanxuan();

		// 设置分页为默认值
		this.state.page = 1;
		this.state.keyValue = "";
		this.hanOnSelectPublic();
		$(".mapview_left_illegalcontentdcla").css({"background-color":"#FFF"});
	},
	hanRebuildClick:function(){//拆危重建
		// 切换复选框效果函数
		checktoggle("#mapview_rebuild_id");
		// 当危害等级复选框未选中时函数
		quanxuan();

		// 设置分页为默认值
		this.state.page = 1;
		this.state.keyValue = "";
		this.hanOnSelectPublic();
		$(".mapview_left_illegalcontentdcla").css({"background-color":"#FFF"});
	},
    hanOnlowriskClick:function(){	// 低危
		// 切换复选框效果函数
		checktoggle("#mapview_checkboxlowrisk_id");
		// 当危害等级复选框未选中时函数
		quanxuan();

		// 设置分页为默认值
		this.state.page = 1;
		this.state.keyValue = "";
		this.hanOnSelectPublic();
		$(".mapview_left_illegalcontentdcla").css({"background-color":"#FFF"});
    },
    hanOnsecurityClick:function(){	// 已拆
		// 切换复选框效果函数
		checktoggle("#mapview_checkboxremoved_id");
		// 当危害等级复选框未选中时函数
		quanxuan();

		// 设置分页为默认值
		this.state.page = 1;
		this.state.keyValue = "";
		this.hanOnSelectPublic();
    },
	hanOnhighriskyichaClick:function(){		// 高危已拆
		// 切换复选框效果函数
		checktoggle("#mapview_checkboxhighrisk2_id");
		// 当危害等级复选框未选中时函数
		quanxuan();

		// 设置分页为默认值
		this.state.page = 1;
		this.state.keyValue = "";
		this.hanOnSelectPublic();
	},
    hanOnSelectPublic:function(funindex){
    	var mapviewlist = [];
    	var harmfulCode = "";
		var keyword =     "";
		var rules   =     "";

		// 查询条件, 1: 高危未拆   2:中危	3:低危	4:已拆除	  5:高危已拆 6：装修
		var gaow = $("#mapview_checkboxhighrisk_id").attr("name");
		var zhongw = $("#mapview_checkboxmoderaterisk_id").attr("name");
		var diw = $("#mapview_checkboxlowrisk_id").attr("name");
		var yicha = $("#mapview_checkboxremoved_id").attr("name");
		var gaowyic = $("#mapview_checkboxhighrisk2_id").attr("name");
		var zhuangxiu = $("#mapview_checkboxrenovation_id").attr("name");
		var chongjian = $("#mapview_rebuild_id").attr("name");
		keyword = this.state.keyValue;

		// 按照有结构化的条件来查询
			if(gaow == "checkboxall_true"){
				mapviewlist.push("高危未拆")
			}
			if(gaowyic == "checkboxall_true"){
				mapviewlist.push("高危已拆")
			}
			if(zhongw == "checkboxall_true"){
				mapviewlist.push("中危")
			}
			if(diw == "checkboxall_true"){
				mapviewlist.push("低危")
			}
			if(yicha == "checkboxall_true"){
				mapviewlist.push("拆除")
			}
			if(zhuangxiu == "checkboxall_true"){
				mapviewlist.push("装修")
			}
			if(chongjian == "checkboxall_true"){
				mapviewlist.push("拆危重建")
			}
			// 按照结构化查询方式放在数组里
			for(var i=0;i<mapviewlist.length;i++){
				if(i == mapviewlist.length-1){
					harmfulCode = harmfulCode + "'"+mapviewlist[i]+"'";
				}else{
					harmfulCode = "'"+mapviewlist[i]+"'" + "," + harmfulCode;
				}
			}

		var uid = getCookie("uid");

		rules = {"sid":sid,"pageNo":this.state.page,"pageSize":this.state.pagesize,"uid":uid,"harmfulCode":harmfulCode,"keyword":keyword};

		// var rules = {"sid":"","harmfulCode":harmfulCode,"keyword":keyword};
    	var tmp = JSON.stringify(rules);

		// 查询ajax
		$.ajax({
			url:common_ip+"buildings.do?action=listByCmd",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					this.state.pagecount = data.pager.totalPage;
					nsEventBus.eventbus.broadcast("mapview_selAll",data.pager.list);
				}else{
					layer.alert("查询失败"+data.errorMsg);
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert("出现异常,请重新查询");
//				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
    },
    hanOnSelectMpas:function(){
		this.state.keyValue = $(".mapview_keyword").val();
		// 设置分页为默认值
		this.state.page = 1;
		// 按照有条件的查询,(函数参数值不管)
    	this.hanOnSelectPublic("Source");
    	$(".mapview_left_illegalcontentdcla").css({"background-color":"#FFF"});
    	/*bm.centerAndZoom("深圳南澳", 17);
    	bm.enableScrollWheelZoom(true);*/
    },
	handleSelect: function(event,selectevent){	// 分页
		this.state.page = selectevent.eventKey;
		// 调用查询函数
		this.hanOnSelectPublic("Source");
	},

    componentDidMount: function(){
		// 自定义checked属性
		$(".mapview_checkboxall").addClass("mapview_checkboxall_true");
		$(".mapview_checkboxall").attr({"name":"checkboxall_true"});

		// $(".mapview_securityback_checkbox1,.mapview_securityback_checkbox2,.mapview_securityback_checkbox3,.mapview_securityback_checkbox4,.mapview_securityback_checkbox5").attr({"checked":true});
		// 调用查询函数
		this.hanOnSelectPublic();

		// 地图一些常用函数
    	// bm = new BMap.Map("allmap",{mapType:BMAP_HYBRID_MAP});
		// 实列整个地图,allmap为固定值
		bm = new BMap.Map("allmap");
//    	bm.centerAndZoom(new BMap.Point(116.3964,39.9093),16);
		// 初始化地图显示坐标和级别
    	bm.centerAndZoom("深圳南澳", 17);
		// 设置有地图,卫星(混合),三维按钮
    	bm.addControl(new BMap.MapTypeControl());
    	bm.setCurrentCity("深圳");
		// 设置是否可以缩放
    	bm.enableScrollWheelZoom(true);

		// 地图绑定事件
    	bm.addEventListener("click",function(e){
    		console.log(e.point.lng + "," + e.point.lat);
    	});

		$("body").keydown(function(e) {
			if (e.keyCode == "13") {//keyCode=13是回车键
				$('.mapview_top_search').click();
			}
		});
	},
	render:function()
	{
		// 更新地图的时候,退出地图更新所用事件
		var _this = this;
		$("#mapview_right_illegalcontent").click(function(event){
			if(this == event.target){
				// 移除事件
				$(".mapview_left_illegalcontentdcla").unbind("click");
				$(".mapvwindows_div4span").unbind("click");

				$("#mapview_right_illegalcontent").unbind("click");

				$("#mapview_right_illegalcontent").removeClass("mapview_right_illegalcontent");
				// 设置地图的显示样式
				$("#mapview_right_illegalcontent").css({"width":"580px"});
				$("#mapview_right_illegalcontent").css({"height":"0px"});
				$("#allmap").removeClass("allmap");

				/*if(shuaxincount == 3){
					window.location.reload();
				 shuaxincount++;
				}else{
					_this.hanOnSelectPublic();
				}*/
				_this.hanOnSelectPublic();
			}
		})

		// 查询成功后进入到此函数里
		var _this = this;
		nsEventBus.eventbus.on("mapview_selAll","mapview_selAll",function(data){
			// 须移除单击事件
			$('.mapview_left_illegalcontentdcla').unbind("click");

			// 重新搜索的时候清除全部覆盖物
	    	bm.clearOverlays();

			// 左边列表数据渲染
			$("#mapview_left_illegalcontentdiv2").empty();
			ReactDOM.render(React.createElement(Mapviewstable,{data:data}),document.getElementById("mapview_left_illegalcontentdiv2"));

	    	_this.setState({data:data});

			// 生成自定义marker,(百度上有自定义marker类的所有操作,拖拽,绑定事件等等...)
			for(var i=0;i<data.length;i++){
				// 把eee覆盖物对象添加到集合
				var eee = new ComplexCustomOverlay(new BMap.Point(data[i].longtiude,data[i].latitude),i+1,"url('"+judgeBinding(data[i].harmfulCode)+"')","url('"+judgeBinding(data[i].harmfulCode,"hover")+"')",data[i]);
				bm.addOverlay(eee);
				// 在此集合中可以操作自定义marker对象
				markerlist.push(eee);
			}
			for(var i=0;i<markerlist.length;i++){
				// 移除事件
				markerlist[i].removeEventListener("click");
			}
			_this.backImageAll();
		});
		return (
			React.createElement("div",{id:"mapview_zfdiv"},
				React.createElement("div",{id:"mapview_top_illegalcontent"},
					React.createElement("div",{id:"mapview_top_zxdiv"},
						React.createElement("div",{id:"mapview_top_illegalcontentdid3"},"违建地图"),
						React.createElement("div",{id:"mapview_top_illegalcontentdid"},
								React.createElement("div",{className:"mapview_top_illegalcontentddiv2",onClick:this.hanOnselectClick},
										React.createElement("a",{className:"mapview_checkboxall",id:"mapview_checkboxall_id",name:"checkboxall_false"}),
										// React.createElement("input",{type:"checkbox",className:"mapview_securityback_checkbox6",onClick:this.hanOnselectClick}),
										React.createElement("label",{className:"mapview_select_alllabel"},"全选")
								),
								React.createElement("div",{className:"mapview_top_illegalcontentddiv",onClick:this.hanOnhighriskClick},
									React.createElement("a",{className:"mapview_checkboxall",id:"mapview_checkboxhighrisk_id",name:"checkboxall_false"}),
										// React.createElement("input",{type:"checkbox",className:"mapview_securityback_checkbox1",onClick:this.hanOnhighriskClick}),
									React.createElement("span",{className:"mapview_highrisk_span1"},""),
									React.createElement("label",{className:"mapview_highrisk_label"},"高危未拆")
								),
								React.createElement("div",{className:"mapview_top_illegalcontentddiv",onClick:this.hanOnhighriskyichaClick},
									React.createElement("a",{className:"mapview_checkboxall",id:"mapview_checkboxhighrisk2_id",name:"checkboxall_false"}),
									// React.createElement("input",{type:"checkbox",className:"mapview_securityback_checkbox5",onClick:this.hanOnhighriskyichaClick}),
									React.createElement("span",{className:"mapview_highrisk_span5"},""),
									React.createElement("label",{className:"mapview_highrisk_label"},"高危已拆")
								),
								React.createElement("div",{className:"mapview_top_illegalcontentddiv3",onClick:this.hanOnindangerClick},
									React.createElement("a",{className:"mapview_checkboxall",id:"mapview_checkboxmoderaterisk_id",name:"checkboxall_false"}),
										// React.createElement("input",{type:"checkbox",className:"mapview_securityback_checkbox2",onClick:this.hanOnindangerClick}),
									React.createElement("span",{className:"mapview_highrisk_span2"},""),
										React.createElement("label",{className:"mapview_moderaterisk_label"},"中危")
								),
								React.createElement("div",{className:"mapview_top_illegalcontentddiv3",onClick:this.hanOnlowriskClick},
									React.createElement("a",{className:"mapview_checkboxall",id:"mapview_checkboxlowrisk_id",name:"checkboxall_false"}),
										// React.createElement("input",{type:"checkbox",className:"mapview_securityback_checkbox3",onClick:this.hanOnlowriskClick}),
									React.createElement("span",{className:"mapview_highrisk_span3"},""),
										React.createElement("label",{className:"mapview_lowrisk_label"},"低危")
								),
								React.createElement("div",{className:"mapview_top_illegalcontentddiv3",onClick:this.hanOnsecurityClick},
									React.createElement("a",{className:"mapview_checkboxall",id:"mapview_checkboxremoved_id",name:"checkboxall_false"}),
										// React.createElement("input",{type:"checkbox",className:"mapview_securityback_checkbox4",onClick:this.hanOnsecurityClick}),
									React.createElement("span",{className:"mapview_highrisk_span4"},""),
										React.createElement("label",{className:"mapview_removed_label"},"已拆")
								),
								React.createElement("div",{className:"mapview_top_illegalcontentddiv3",onClick:this.hanRenovationClick},
									React.createElement("a",{className:"mapview_checkboxall",id:"mapview_checkboxrenovation_id",name:"checkboxall_false"}),
									// React.createElement("input",{type:"checkbox",className:"mapview_securityback_checkbox4",onClick:this.hanOnsecurityClick}),
									React.createElement("span",{className:"mapview_highrisk_span6"},""),
									React.createElement("label",{className:"mapview_renovation_label"},"装修")
								),
								React.createElement("div",{className:"mapview_top_illegalcontentddiv",onClick:this.hanRebuildClick},
									React.createElement("a",{className:"mapview_checkboxall",id:"mapview_rebuild_id",name:"checkboxall_false"}),
									// React.createElement("input",{type:"checkbox",className:"mapview_securityback_checkbox4",onClick:this.hanOnsecurityClick}),
									React.createElement("span",{className:"mapview_highrisk_span7"},""),
									React.createElement("label",{className:"mapview_rebuild_label"},"拆危重建")
								)
//								React.createElement("span",{className:"securitybackcolor"},"1"),
						),
						React.createElement("div",{id:"mapview_top_illegalcontentdid2"},
								React.createElement("input",{type:"text",placeholder:"请输入关键词...",className:"mapview_keyword"}),
								React.createElement("button",{className:"mapview_top_search",onClick:this.hanOnSelectMpas},"搜索")
						)
						// React.createElement("button",{className:"mapview_top_location",onClick:this.hanOnModifyLocationClick},"修改定位")
					)
				),
				React.createElement("div",{id:"mapview_left_illegalcontent"},
						React.createElement("div",{className:"mapview_left_illegaldiv1"},
								React.createElement("div",{className:""},"显示列表"
										/*React.createElement("span",{className:"mapview_displaycount"},"共 ",
											React.createElement("span",{className:""},this.state.data.length)," 处")*/
								)
						),
						React.createElement("div",{id:"mapview_left_illegalcontentdiv2"}
						),
						React.createElement("div",{id:"mapviewautocenter"},
							React.createElement(Pagination,{
								prev: true,
								next: true,
								first: '首页',
								last: '尾页',
								ellcommon_ipsis: true,
								boundaryLinks: true,
								items: this.state.pagecount,
								maxButtons:1,
								activePage:this.state.page,
								onSelect: this.handleSelect}
							)
						)
				),
				React.createElement("div",{id:"mapview_right_illegalcontent"},
						React.createElement("div",{id:"allmap"})
				),
				React.createElement("div",{id:"mapview_fullcoverage"}

				),
				React.createElement("div",{id:"mapview_fullcoverage2"}

				)
			)
		);
	}
});


//ReactDOM.render(React.createElement(MapViews),document.getElementById("mapview"));