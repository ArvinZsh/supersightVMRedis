var Input = window.Input || ReactBootstrap.Input;
var time = [{hour:"00"},{hour:"01"},{hour:"02"},{hour:"03"},{hour:"04"},{hour:"05"},{hour:"06"},{hour:"07"},{hour:"08"},{hour:"09"},{hour:"10"},{hour:"11"},{hour:"12"},
            {hour:"13"},{hour:"14"},{hour:"15"},{hour:"16"},{hour:"17"},{hour:"18"},{hour:"19"},{hour:"20"},{hour:"21"},{hour:"22"},{hour:"23"},{hour:"24"}];


var array = [{staffid:"1110101",name:"梁嘉豪",position:"地址地址地址地址",post:"巡查负责人",department:"网格1",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",
			 points:[{coordinateX:114.500154,coordinateY:22.536432,date:"1996-01-01",time:"17:30:00",address:"四川省成都市高新区"},
			         {coordinateX:114.500172,coordinateY:22.536599,date:"1996-01-01",time:"17:40:00",address:"河南省"},
			         {coordinateX:114.500298,coordinateY:22.536849,date:"1996-01-01",time:"17:41:00",address:"河北省"},
			         {coordinateX:114.500621,coordinateY:22.536999,date:"1996-01-01",time:"17:42:00",address:"北京市"},
			         {coordinateX:114.500783,coordinateY:22.537199,date:"1996-01-01",time:"17:43:00",address:"上海市"},
			         {coordinateX:114.500819,coordinateY:22.53735,date:"1996-01-01",time:"17:45:00",address:"广东省"},
			         {coordinateX:114.500909,coordinateY:22.53755,date:"1996-01-01",time:"17:46:00",address:"深圳市"},
			         {coordinateX:114.500837,coordinateY:22.537867,date:"1996-01-01",time:"17:48:00",address:"东莞市"},
			         {coordinateX:114.500891,coordinateY:22.538334,date:"1996-01-01",time:"17:49:00",address:"浙江省"},
			         {coordinateX:114.501071,coordinateY:22.538334,date:"1996-01-01",time:"17:51:00",address:"江苏省"},
			         {coordinateX:114.501304,coordinateY:22.538318,date:"1996-01-01",time:"17:53:00",address:"东北三省"}]},
             {staffid:"1110101",name:"郑圣辉",position:"地址地址地址地址",post:"巡查负责人",department:"网格1",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",
			        	 points:[{coordinateX:114.500154,coordinateY:22.536432,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
						         {coordinateX:114.500172,coordinateY:22.536599,date:"1996-01-01",time:"17:40:00",address:"河南省"},
						         {coordinateX:114.500298,coordinateY:22.536849,date:"1996-01-01",time:"17:41:00",address:"河北省"},
						         {coordinateX:114.500621,coordinateY:22.536999,date:"1996-01-01",time:"17:42:00",address:"北京市"},
						         {coordinateX:114.500783,coordinateY:22.537199,date:"1996-01-01",time:"17:43:00",address:"上海市"},
						         {coordinateX:114.500819,coordinateY:22.53735,date:"1996-01-01",time:"17:45:00",address:"广东省"},
						         {coordinateX:114.500909,coordinateY:22.53755,date:"1996-01-01",time:"17:46:00",address:"深圳市"},
						         {coordinateX:114.500837,coordinateY:22.537867,date:"1996-01-01",time:"17:48:00",address:"东莞市"},
						         {coordinateX:114.500891,coordinateY:22.538334,date:"1996-01-01",time:"17:49:00",address:"浙江省"},
						         {coordinateX:114.501071,coordinateY:22.538334,date:"1996-01-01",time:"17:51:00",address:"江苏省"},
						         {coordinateX:114.501304,coordinateY:22.538318,date:"1996-01-01",time:"17:53:00",address:"东北三省"}]},
             {staffid:"1110101",name:"吴京",position:"地址地址地址地址",post:"网格人员",department:"网格1",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",
						 points:[{coordinateX:114.500154,coordinateY:22.536432,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
								{coordinateX:114.500172,coordinateY:22.536599,date:"1996-01-01",time:"17:40:00",address:"河南省"},
								{coordinateX:114.500298,coordinateY:22.536849,date:"1996-01-01",time:"17:41:00",address:"河北省"},
								{coordinateX:114.500621,coordinateY:22.536999,date:"1996-01-01",time:"17:42:00",address:"北京市"},
								{coordinateX:114.500783,coordinateY:22.537199,date:"1996-01-01",time:"17:43:00",address:"上海市"},
								{coordinateX:114.500819,coordinateY:22.53735,date:"1996-01-01",time:"17:45:00",address:"广东省"},
								{coordinateX:114.500909,coordinateY:22.53755,date:"1996-01-01",time:"17:46:00",address:"深圳市"},
								{coordinateX:114.500837,coordinateY:22.537867,date:"1996-01-01",time:"17:48:00",address:"东莞市"},
								{coordinateX:114.500891,coordinateY:22.538334,date:"1996-01-01",time:"17:49:00",address:"浙江省"},
								{coordinateX:114.501071,coordinateY:22.538334,date:"1996-01-01",time:"17:51:00",address:"江苏省"},
								{coordinateX:114.501304,coordinateY:22.538318,date:"1996-01-01",time:"17:53:00",address:"东北三省"}]},
             {staffid:"1110101",name:"王杰",position:"地址地址地址地址",post:"巡查负责人",department:"网格2",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",
    			 points:[{coordinateX:114.498942,coordinateY:22.536682,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
    			         {coordinateX:114.499076,coordinateY:22.536924,date:"1996-01-01",time:"17:30:00",address:"河南省"},
    			         {coordinateX:114.499148,coordinateY:22.537108,date:"1996-01-01",time:"17:30:00",address:"河北省"},
    			         {coordinateX:114.499355,coordinateY:22.538092,date:"1996-01-01",time:"17:30:00",address:"北京市"},
    			         {coordinateX:114.49922,coordinateY:22.53755,date:"1996-01-01",time:"17:30:00",address:"上海市"},
    			         {coordinateX:114.499292,coordinateY:22.537825,date:"1996-01-01",time:"17:30:00",address:"广东省"},
    			         {coordinateX:114.500909,coordinateY:22.53755,date:"1996-01-01",time:"17:30:00",address:"深圳市"},
    			         {coordinateX:114.499391,coordinateY:22.538443,date:"1996-01-01",time:"17:30:00",address:"东莞市"},
    			         {coordinateX:114.499328,coordinateY:22.539177,date:"1996-01-01",time:"17:30:00",address:"浙江省"},
    			         {coordinateX:114.499319,coordinateY:22.539736,date:"1996-01-01",time:"17:30:00",address:"江苏省"},
    			         {coordinateX:114.500056,coordinateY:22.539812,date:"1996-01-01",time:"17:30:00",address:"东北三省"}]},
             {staffid:"1110101",name:"王杰",position:"地址地址地址地址",post:"巡查负责人",department:"网格2",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",
    			        	 points:[{coordinateX:114.498942,coordinateY:22.536682,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
    		    			         {coordinateX:114.499076,coordinateY:22.536924,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
    		    			         {coordinateX:114.499148,coordinateY:22.537108,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
    		    			         {coordinateX:114.499355,coordinateY:22.538092,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
    		    			         {coordinateX:114.49922,coordinateY:22.53755,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
    		    			         {coordinateX:114.499292,coordinateY:22.537825,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
    		    			         {coordinateX:114.500909,coordinateY:22.53755,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
    		    			         {coordinateX:114.499391,coordinateY:22.538443,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
    		    			         {coordinateX:114.499328,coordinateY:22.539177,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
    		    			         {coordinateX:114.499319,coordinateY:22.539736,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
    		    			         {coordinateX:114.500056,coordinateY:22.539812,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"}]},
             {staffid:"1110101",name:"王杰",position:"地址地址地址地址",post:"巡逻人员",department:"网格2",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",
    		    			        	 points:[{coordinateX:114.500154,coordinateY:22.536432,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
    		    						         {coordinateX:114.500172,coordinateY:22.536599,date:"1996-01-01",time:"17:40:00",address:"四川省成都市"},
    		    						         {coordinateX:114.500298,coordinateY:22.536849,date:"1996-01-01",time:"17:41:00",address:"浙江省萧山"},
    		    						         {coordinateX:114.500621,coordinateY:22.536999,date:"1996-01-01",time:"17:42:00",address:"四川省成都市"},
    		    						         {coordinateX:114.500783,coordinateY:22.537199,date:"1996-01-01",time:"17:43:00",address:"浙江省萧山"},
    		    						         {coordinateX:114.500819,coordinateY:22.53735,date:"1996-01-01",time:"17:45:00",address:"浙江省萧山"},
    		    						         {coordinateX:114.500909,coordinateY:22.53755,date:"1996-01-01",time:"17:46:00",address:"四川省成都市"},
    		    						         {coordinateX:114.500837,coordinateY:22.537867,date:"1996-01-01",time:"17:48:00",address:"浙江省萧山"},
    		    						         {coordinateX:114.500891,coordinateY:22.538334,date:"1996-01-01",time:"17:49:00",address:"四川省成都市"},
    		    						         {coordinateX:114.501071,coordinateY:22.538334,date:"1996-01-01",time:"17:51:00",address:"浙江省萧山"},
    		    						         {coordinateX:114.501304,coordinateY:22.538318,date:"1996-01-01",time:"17:53:00",address:"四川省成都市"}]},
             {staffid:"1110101",name:"周文豪",position:"地址地址地址地址",post:"执法人员",department:"网格2",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",
    		    						        	 points:[{coordinateX:114.500154,coordinateY:22.536432,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
    		    									         {coordinateX:114.500172,coordinateY:22.536599,date:"1996-01-01",time:"17:40:00",address:"四川省成都市"},
    		    									         {coordinateX:114.500298,coordinateY:22.536849,date:"1996-01-01",time:"17:41:00",address:"浙江省萧山"},
    		    									         {coordinateX:114.500621,coordinateY:22.536999,date:"1996-01-01",time:"17:42:00",address:"四川省成都市"},
    		    									         {coordinateX:114.500783,coordinateY:22.537199,date:"1996-01-01",time:"17:43:00",address:"浙江省萧山"},
    		    									         {coordinateX:114.500819,coordinateY:22.53735,date:"1996-01-01",time:"17:45:00",address:"浙江省萧山"},
    		    									         {coordinateX:114.500909,coordinateY:22.53755,date:"1996-01-01",time:"17:46:00",address:"四川省成都市"},
    		    									         {coordinateX:114.500837,coordinateY:22.537867,date:"1996-01-01",time:"17:48:00",address:"浙江省萧山"},
    		    									         {coordinateX:114.500891,coordinateY:22.538334,date:"1996-01-01",time:"17:49:00",address:"四川省成都市"},
    		    									         {coordinateX:114.501071,coordinateY:22.538334,date:"1996-01-01",time:"17:51:00",address:"浙江省萧山"},
    		    									         {coordinateX:114.501304,coordinateY:22.538318,date:"1996-01-01",time:"17:53:00",address:"四川省成都市"}]},
             {staffid:"1110101",name:"张国",position:"地址地址地址地址",post:"巡查负责人",department:"网格2",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",
    		    									        	 points:[{coordinateX:114.500154,coordinateY:22.536432,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
    		    												         {coordinateX:114.500172,coordinateY:22.536599,date:"1996-01-01",time:"17:40:00",address:"四川省成都市"},
    		    												         {coordinateX:114.500298,coordinateY:22.536849,date:"1996-01-01",time:"17:41:00",address:"浙江省萧山"},
    		    												         {coordinateX:114.500621,coordinateY:22.536999,date:"1996-01-01",time:"17:42:00",address:"四川省成都市"},
    		    												         {coordinateX:114.500783,coordinateY:22.537199,date:"1996-01-01",time:"17:43:00",address:"浙江省萧山"},
    		    												         {coordinateX:114.500819,coordinateY:22.53735,date:"1996-01-01",time:"17:45:00",address:"浙江省萧山"},
    		    												         {coordinateX:114.500909,coordinateY:22.53755,date:"1996-01-01",time:"17:46:00",address:"四川省成都市"},
    		    												         {coordinateX:114.500837,coordinateY:22.537867,date:"1996-01-01",time:"17:48:00",address:"浙江省萧山"},
    		    												         {coordinateX:114.500891,coordinateY:22.538334,date:"1996-01-01",time:"17:49:00",address:"四川省成都市"},
    		    												         {coordinateX:114.501071,coordinateY:22.538334,date:"1996-01-01",time:"17:51:00",address:"浙江省萧山"},
    		    												         {coordinateX:114.501304,coordinateY:22.538318,date:"1996-01-01",time:"17:53:00",address:"四川省成都市"}]}]

//var common_ips = common_ip+"";

// 地图选中和未选中图片
var mapimage1 = "../images/mapimage/Locus.png";
var mapimage2 = "../images/mapimage/Locusicon.png";

// 左边元素所需图片
var leftimage = "url('../images/mapimage/vehicle.png')";
var leftimage2 = "url('../images/mapimage/Trackpersonnel.png')";

// 右下角所需图片
//var rigbutimage = "url('images/mapimage/Trackpersonnel.png')";

// 获取当前时间函数
function date(){
	var date2 = new Date();
	var month = date2.getMonth()+1;
	var getdate = date2.getDate();
	
	if(month >= 1 && month<10){
		month = "0"+month;
	}
	if(getdate >= 1 && getdate<10){
		getdate = "0"+getdate;
	}
	var date = date2.getFullYear() + "-" + month + "-" + getdate;
	return date;
}

// 打开windows窗口
function openwindows(opint,neirong,index){
	// 信息窗口内容
	var sContent = "<div class='pstory_window_div'>" +
						"<label class='pstory_window_label'>时间: </label>" +
				   		"<span class='pstory_window_span'>"+ neirong[index].time +"</span>" +
				   "<div>" +
				   "<div class='pstory_window_div2'>"+
							"<label class='pstory_window_label2'>当前方向: </label>" +
						"<span class='pstory_window_span2'>"+ neirong[index].direction +"</span>" +
					"<div>";

	// 实例windows窗口
	var infoWindow = new BMap.InfoWindow(sContent);

	var opint2 = null;
	opint2 = opint;

	//开启信息窗口
	bm.openInfoWindow(infoWindow,new BMap.Point((opint2.lng),(opint2.lat)));
	//bm.openInfoWindow(infoWindow,points[0]);
	//bm.closeInfoWindow();    // 关闭已打开的窗口
}

var pointlist = [];
var marker2 = null;
// 创建marker,折线函数
function hanONpotraoSelect(points){
	/*for(var i=0;i<points.length;i++){
		if(points[i].coordinateX == 0){
			points.splice(i,1);
			return;
		}
		if(points[i].coordinateY == 0){
			points.splice(i,1);
			return;
		}
	}*/

	// 数据长度小于0时
	if(points.length == 0){
		layer.msg("当前网格下没有数据",{icon:7});
		return;
	}

	// 移除当前所有覆盖物
	bm.clearOverlays();

	// 把折线坐标点集合清空
	pointlist = [];
	
	// 设置自定义图片
	var myIcon = new BMap.Icon(mapimage1, new BMap.Size(12,12));
	var myIcon2 = new BMap.Icon(mapimage2, new BMap.Size(12,12));
//	myIcon2.setAnchor(-1,-1);			// 设置自定义图片左上角偏移值

	// 创建marker
	for(var i=0;i<points.length;i++){
		// 把后台坐标转换为point并放在一个集合，生成折线
		pointlist.push(new BMap.Point(points[i].coordinateX,points[i].coordinateY));

			/*// 生成marker
			var marker = new BMap.Marker(new BMap.Point(points[i].coordinateX,points[i].coordinateY),{icon:myIcon});
			bm.addOverlay(marker);

			// 给每个marker绑定事件
			marker.addEventListener("click",createMarkerClick(marker,i));*/
	}

	// 因为网上找的这个比较简单，但是数组内两个坐标都无法显示
	pointlist.push(new BMap.Point(points[points.length-1].coordinateX+0.0,points[points.length-1].coordinateY+0.0));
	pointlist.push(new BMap.Point(points[points.length-1].coordinateX+0.0,points[points.length-1].coordinateY+0.0));

	polyline = new BMap.Polyline(pointlist);//创建折线
	polyline.setStrokeColor("red");		  // 设置折线颜色
	polyline.setStrokeWeight(4);			  // 设置折线宽度
//	polyline.enableEditing();			      // 设置折线可以编辑
	polyline.enableMassClear();				  // 允许折线在覆盖物中被清除
//	polyline.disableMassClear();			  // 禁止折线在覆盖物中被清除	
//	polyline.setPositionAt(0,new BMap.Point(114.503861,22.538635));
	bm.addOverlay(polyline);//将折线覆盖到地图上
//	console.log(polyline.getMap());

	// 改这里让箭头的方向随着改变
	for (var i = 0; i < pointlist.length - 2; i++){
		var angle = getAngle(pointlist[i], pointlist[i+1]);
		drawMarker(pointlist[i], angle);
	}

	// 这下面网上找的,可以不管
	//return: -PI to PI
	function getAngle(pt1, pt2){
		return Math.atan2(pt2.lat - pt1.lat, pt2.lng - pt1.lng);
	}

	function drawMarker(point, angle) {
		var iconImg = createIcon(angle);
		var marker = new BMap.Marker(point, {
			icon : iconImg
		});

		bm.addOverlay(marker);
		// 给每个marker绑定事件
		marker.addEventListener("click",createMarkerClick(marker,i));
	}

	function createIcon(angle) {
		//从负Y轴方向开始顺时针查找角度
		var adjAngles = [180,202,225,247,270,292,315,337,0,22,45,67,90,112,135,157];
		adjAngle = angle;

		var adjIndex = 0;
		for (var i = 0; i < 16; i++){
			if (adjAngle < (- 15 / 16  + i / 8 ) *Math.PI) {
				adjIndex = i;
				break;
			}
		}
		icon = new BMap.Icon("../images/mapimage/arrow_" + adjAngles[adjIndex] + ".png", new BMap.Size(22,22));
		return icon;
	}
	/*114.546696
	coordinateY: 22.489233*/

	// 移到第一个位置
	bm.panTo(new BMap.Point(points[0].coordinateX,points[0].coordinateY));

	// marker绑定事件的执行
	function createMarkerClick(marker,i){
		return function(e){
			/*// 修改图钉选中状态
			if(marker2 != this){
				if(marker2 != null){
					// 选中另外元素时,图片恢复为默认状态
					marker2.setIcon(myIcon);
				}
			}
			marker2 = this;

			// 赋值选中图片
			this.setIcon(myIcon2);*/
			// 开启信息窗口
			openwindows(marker.point,points,i);
			// 平移到给定的位置
			bm.panTo(marker.point);
		}
	}
}

var sid = getCookie("sid");
// 左边元素点击选中事件,按照人员编号,当天日期,开始时间,结束时间开始发送指定请求
function selectlefthoverajax(plate,starttime,endtime){
	 var rules = {"sid":sid,"plate":plate,"timeFrom":starttime,"timeTo":endtime};
	 var tmp = JSON.stringify(rules);

	// 查询指定车牌轨迹
	 $.ajax({
		 url:common_ip+"map.do?action=listCarMarks",
		 dataType:'json',
		 data:tmp,
		 type:'post',
		 contentType:"application/x-www-form-urlencoded",
		 success: function(data){
			 if(data.successFlag){
				 var tmp1=[];
				 // 解析数据结构
				 if(typeof (data.carMarks)!="undefined"&&data.carMarks!=null&&data.carMarks!=""&&data.carMarks.length>0){
					 for(var i=0;i<data.carMarks.length;i++){
						 data.carMarks[i].map(function(event){
							 tmp1.push({coordinateX:event.longtitude,coordinateY:event.latitude,time:event.createTimeFormat,direction:event.direction});
						 });
					 }
				 }
				 hanONpotraoSelect(tmp1);
			 }else{
			 	layer.alert("查询失败"+data.errorMsg,{icon:2});
			 }
		 }.bind(this),
		 error: function(request, state, error){
			 layer.alert("出现异常,请重新查询");
			 //				console.error(this.props.url, state, error.toString());
		 }.bind(this)
	 });
}

// 点击网格时执行的函数
var selectlefthover = null;
function hanOnVeftLeftClick(plate){
	return function(e){
		$(".patrolhistory_div4div").removeClass("patro_left_div_hover");
		$(".patrolhistory_div4div:hover").addClass("patro_left_div_hover");

		// 查询条件: 当前日期
		var date2 =    $("#patrolhistory_inputdate").val();
		// 查询条件: 开始时间
		var starttime = $(".patrolhistory_div1select").val();
		// 查询条件: 结束时间
		var endtime =   $(".patrolhistory_div1select2").val();

		starttime = starttime + ":00:00";
		var startdatetime = date2 + " " + starttime;
		if(endtime == 24){
			endtime = endtime - 1 + ":59:59";
			var enddatetime = date2 + " " + endtime;
		}else{
			endtime = endtime + ":00:00";
			var enddatetime = date2 + " " + endtime;
		}

		// 查询ajax函数
		selectlefthoverajax(plate,startdatetime,enddatetime);
	}
}

var polyline = null;
var bm = null;
// 左边车牌列表组件
var Vehicletracklist = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:array
		};
    },
    componentDidMount: function(){
    	// 默认选中一行
//    	$(".patrolhistory_div4div").eq(0).addClass("patro_left_div_hover");
//    	var _this = this;
//    	// 默认选中第一个元素并绘制覆盖物
//    	if(this.props.index == 0){
//    		$(document).ready(function(){
//    			hanONpotraoSelect(_this.props.data.points);
//    			console.log(_this.props.data.points);
//    		})
//    	}
	},
	render:function()
	{
		return (
			React.createElement("div",{className:"patrolhistory_div4div",onClick:hanOnVeftLeftClick(this.props.data)},
					React.createElement("div",{},
							React.createElement("label",{className:"patrolhistory_div4ladbel1",style:{"background-image":leftimage}})
					),
					// React.createElement("label",{className:"patrolhistory_div4ladbel2"},this.props.data)
					React.createElement("span",{className:"patrolhistory_div4span"},this.props.data)
			)
		);
	}
});

	
var Vehicletrack = React.createClass({
	getInitialState: function getInitialState() {
		return {
			time:time,
			data:[],//array
		};
    },
    hanOnGridPublic: function(){	// 查询所有车牌函数
		var rules = {"sid":sid};
		var tmp = JSON.stringify(rules);

		$.ajax({
			url: common_ip + "map.do?action=listAllPlates",
			dataType: 'json',
			data: tmp,
			type: 'post',
			contentType: "application/x-www-form-urlencoded",
			success: function (data) {
				if (data.successFlag) {
					this.setState({data:data.plates});
				} else {
					layer.alert("查询失败" + data.errorMsg, {icon: 2});
				}
			}.bind(this),
			error: function (request, state, error) {
				layer.alert("出现异常,请重新查询");
//				console.error(this.props.url, state, error.toString());
			}.bind(this)
		})
    },
    componentDidMount: function(){
		// 给date文本框设定默认事件
    	$(document).ready(function(){
    		$("#patrolhistory_inputdate").val(date());
    	})

		// 百度地图常用的一些函数
    	// bm = new BMap.Map("allmap",{mapType:BMAP_HYBRID_MAP});
		// 实例整个百度地图
		bm = new BMap.Map("allmap");
//    	bm.centerAndZoom(new BMap.Point(114.500909,22.53755),18);
		// 初始化位置和缩放级别
    	bm.centerAndZoom("深圳南澳", 18);
		// 地图上显示的控件: 地图、卫星(混合)、三维
		bm.addControl(new BMap.MapTypeControl());
		bm.setCurrentCity("深圳");
		// 地图是否可以缩放
    	bm.enableScrollWheelZoom(true);

		// 地图绑定事件
    	bm.addEventListener("click",function(e){
    		console.log(e.point.lng + "," + e.point.lat);
    	});

		// 查询车牌函数
		this.hanOnGridPublic();
	},
	hanOnChangeDate: function(e){	// 设定时间不能设置为空
		if(e.target.value == ""){
			var datee = date();
	    	$(document).ready(function(){
	    		$("#patrolhistory_inputdate").val(datee);
	    	})
		}
	},
	hanOnChangetime: function(e){	// 选中第一个时间时
		if($(".patrolhistory_div1select").val() >= $(".patrolhistory_div1select2").val()){
			$(".patrolhistory_div1select").val("00");
			layer.msg("开始时间时间不能大于于或等于结束时间",{icon:7});
		}
	},
	hanOnChangetime2:function(e){	// 选中第二个时间时
		if($(".patrolhistory_div1select2").val() <= $(".patrolhistory_div1select").val()){
			console.log($(".patrolhistory_div1select").val());
			$(".patrolhistory_div1select2").val("24");
			layer.msg("结束时间不能小于或等于开始时间",{icon:7});
		}
	},
	hanOnSearchClick:function(){
		// 按条件查询小组
		this.hanOnGridPublic();
	},
	render:function()
	{
		return (
			React.createElement("div",{id:"patrolhistory_fdiv"},
				React.createElement("div",{id:"potrolhistory_left_top_div1"},
					React.createElement("div",{id:"patrolhistory_toptitle_div"},"车辆轨迹"),
					React.createElement("div",{id:"patrolhistory_div1"},
						React.createElement("input",{type:"date",id:"patrolhistory_inputdate",onChange:this.hanOnChangeDate}),
						React.createElement("select",{className:"patrolhistory_div1select",onChange:this.hanOnChangetime},
							this.state.time.map(function(arr){
								return React.createElement("option",{value:arr.hour},arr.hour)
							})
						),
						React.createElement("label",{}," 时 -"),
						React.createElement("select",{className:"patrolhistory_div1select2",onChange:this.hanOnChangetime2,defaultValue:"24"},
							this.state.time.map(function(arr){
								return React.createElement("option",{value:arr.hour},arr.hour)
							})
						),
						React.createElement("label",{}," 时")
						// React.createElement("button",{id:"patrolhistory_button_queding"},"确定")
						/*React.createElement("input",{type:"text",placeholder:"网格人员姓名...",id:"patrolhistory_xc_name"}),
						React.createElement("button",{id:"patrolhistory_button_source",onClick:this.hanOnSearchClick},"搜索")*/
					)
				),
					React.createElement("div",{id:"patrolhistory_left_div"},
							React.createElement("div",{id:"patrolhistory_div3"},
								React.createElement("div",{},"车辆车牌信息")
							),
							React.createElement("div",{id:"patrolhistory_div4"},
									this.state.data.map(function(arr,index){
											return React.createElement(Vehicletracklist,{data:arr,index:index})
									})
							)
					),
					React.createElement("div",{id:"patrolhistory_right_div"},
							React.createElement("div",{id:"patrolhistory_right_allmap"},
									React.createElement("div",{id:"allmap"})
							)
					)
			)
		);
	}
});


// ReactDOM.render(React.createElement(Vehicletrack),document.getElementById("patrolhistory"));