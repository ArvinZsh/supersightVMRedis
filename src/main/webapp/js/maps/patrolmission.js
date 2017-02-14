var Input = window.Input || ReactBootstrap.Input;
var time = [{hour:"00"},{hour:"01"},{hour:"02"},{hour:"03"},{hour:"04"},{hour:"05"},{hour:"06"},{hour:"07"},{hour:"08"},{hour:"09"},{hour:"10"},{hour:"11"},{hour:"12"},
            {hour:"13"},{hour:"14"},{hour:"15"},{hour:"16"},{hour:"17"},{hour:"18"},{hour:"19"},{hour:"20"},{hour:"21"},{hour:"22"},{hour:"23"},{hour:"24"}];


var array = [{points:[{coordinateX:114.500154,coordinateY:22.536432,date:"1996-01-01",time:"17:30:00",address:"四川省成都市高新区"},
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
             {points:[{coordinateX:114.500154,coordinateY:22.536432,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
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
             {points:[{coordinateX:114.500154,coordinateY:22.536432,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
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
             {points:[{coordinateX:114.498942,coordinateY:22.536682,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
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
             {points:[{coordinateX:114.498942,coordinateY:22.536682,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
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
             {points:[{coordinateX:114.500154,coordinateY:22.536432,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
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
             {points:[{coordinateX:114.500154,coordinateY:22.536432,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
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
             {points:[{coordinateX:114.500154,coordinateY:22.536432,date:"1996-01-01",time:"17:30:00",address:"四川省成都市"},
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

// 所需图片参数
/*var images1 = "../images/mapimage/highrisk.png";
var images2 = "../images/mapimage/moderaterisk.png";
var images3 = "../images/mapimage/lowrisk.png";
var images4 = "../images/mapimage/removed.png";
var images5 = "../images/mapimage/highriskicon.png";
var images6 = "../images/mapimage/moderateriskicon.png";
var images7 = "../images/mapimage/lowriskicon.png";
var images8 = "../images/mapimage/removedicon.png";*/

// 时间转换
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

// marker的label标识函数
var margers = "";
function markerlabel(point,i){
	if(i>=9 && i<100){
		margers = "1px 0px 0px 3px";
	}else if(i>99 && i<1000){
		margers = "1px 0px 0px 0px";
	}else{
		margers = "1px 0px 0px 6px";
	}

	var label = new BMap.Label(i+1, point);  // 创建文本标注对象
	label.setStyle({
		color : "#FFF",
		fontSize : "12px",
		lineHeight : "22px",
		width:"22px",
		textAlign:"center",
		fontFamily:"微软雅黑",
		border:"0px",
		backgroundColor:"rgba(0,0,0,.0)",
		padding:margers
	});
	return label;
}

// 点击台账详情时
function buidingssel(){
	window.location.href = "ledgerdetails.html?buildingId="+data2.buildingId;
}

// 开启windows信息窗口
var data2 = null;
function openwindows(opint,data,index){
	data2 = data;

	// 信息窗口内容
	var sContent = "<div class='mapvwindows_div'>" +
			"【"+data.area1+"】" + data.address +
		"</div>"+
		"<div class='mapvwindows_div4'>" +
			"<span class='mapvwindows_div4span2' onclick='buidingssel()'>台账详情 ></span>" +
		"</div>"

	// 实例windows窗口
	var infoWindow = new BMap.InfoWindow(sContent);

	// 在地图上开启信息窗口
	bm.openInfoWindow(infoWindow,opint);
	//bm.openInfoWindow(infoWindow,points[0]);
	//bm.closeInfoWindow();    // 关闭已打开的窗口
}

// 指定网格下的任务数据
var marker2 = null;
function patrossionmapshuizhi(data){
	bm.clearOverlays();

	if(data.length <= 0){
		layer.msg("当天的当前网格下没有任务",{icon:7});
		return;
	}

	// 当违建点只有一个时,画出marker来代替
	if(data.length == 1){
		var marker;
		var myIcon = "";
		var myIcon2 = "";
		var point = new BMap.Point(data[0].longtiude,data[0].latitude);

		// 未选中图片
			myIcon = new BMap.Icon(judgeBinding(data[0].harmfulCode), new BMap.Size(28,38));
		// 选中图片
			myIcon2 = new BMap.Icon(judgeBinding(data[0].harmfulCode,"hover"), new BMap.Size(37,45));
		// 创建marker实例
			marker = new BMap.Marker(point,{icon:myIcon});
		// 设置marker的label标识
			marker.setLabel(markerlabel(point, 0));
			// 移除marker事件
			marker.removeEventListener("click", createMarkerClick);
			// 为marker绑定事件
			marker.addEventListener("click",createMarkerClick(marker,point,data[0],0,myIcon2,myIcon));

		// 添加marker到地图上
		bm.addOverlay(marker);

		// marker事件实现
		function createMarkerClick(marker,point,data,i,hoverbackimage,backimage){
			return function(e){
				// 修改图钉选中状态
				if(marker2 != marker){
					if(marker2 != null){
						marker2.setIcon(myIcon);
					}
				}
				marker2 = marker;
				// 赋值选中图片
				marker2.setIcon(hoverbackimage);

				// 调用windows窗口
				openwindows(point,data,i);
				// 平移到指定坐标位置
				bm.panTo(marker.point);
			}
		}
		bm.panTo(point);
	}else if(data.length >= 2){				// 自定义驾车折线
		// 记录最后一位数字
		max = data.length-1;

		// 坐标point集合
		var plist = [];
		for(var i=0;i<data.length;i++){
			plist.push(new BMap.Point(data[i].longtiude,data[i].latitude));
		}

		/*// 获取起点
		var p1 = new BMap.Point(data[0].longtiude,data[0].latitude);
		// 获取终点
		var p2 = new BMap.Point(data[1].longtiude,data[1].latitude);
		var p3 = new BMap.Point(data[2].longtiude,data[2].latitude);
		var p4 = new BMap.Point(data[3].longtiude,data[3].latitude);*/

		/*// 巡查点数组
		var waypointslist = [];
		// 移除起点
		data.splice(0,1);
		// 移除终点
		data.splice(max-1,1);
		for(var i=0;i<data.length;i++){
			waypointslist.push(new BMap.Point(data[i].longtiude,data[i].latitude));
		}*/

		// 车辆道路路线规划对象
		var driving = new BMap.DrivingRoute(bm);
		//var driving = new BMap.DrivingRoute(bm);
		// driving.enableAutoViewport();		// 启用自动缩小地图级别
		//driving.disableAutoViewport();	// 禁用自动缩小地图级别
		//driving.setLocation("深圳");		// 设置检索范围

		// 驾车路线生成
		for(var i=0;i<plist.length;i++){
			if(plist.length-1 != i){
				driving.search(plist[i],plist[i+1]);
			}
		}

		// 驾车实列完毕
		driving.setSearchCompleteCallback(function(){
			//通过驾车实例，获得一系列点的数组
			pts = driving.getResults().getPlan(0).getRoute(0).getPath();
			for(var i=0;i<plist.length;i++){
				var myIcon = "";
				var marker = "";
				var nomyIcon = "";

				// 选中图片
				myIcon = new BMap.Icon(judgeBinding(data[i].harmfulCode), new BMap.Size(28,38));
				// 未选中图片
				myIcon2 = new BMap.Icon(judgeBinding(data[i].harmfulCode,"hover"), new BMap.Size(37,45));

				// 创建marker实例
				marker = new BMap.Marker(plist[i],{icon:myIcon});
				// 设置marker的label标识
				marker.setLabel(markerlabel(plist[i], i));
				// 移除marker已绑定事件
				marker.removeEventListener("click", createMarkerClick);
				// 为marker绑定事件
				marker.addEventListener("click",createMarkerClick(marker,plist[i],data[i],i,myIcon2,myIcon));

				// 添加marker到地图上
				bm.addOverlay(marker);
			}

			// marker绑定事件的实现
			function createMarkerClick(marker,point,data,i,hoverbackimage,backimage){
				return function(e){
					// 修改图钉选中状态
					if(marker2 != marker){
						if(marker2 != null){
							var label = marker2.getLabel();
							// 选中另外元素时,图片恢复为默认状态
							marker2.setIcon(myIcon);
						}
					}
					myIcon = backimage;
					marker2 = marker;
					// 赋值选中图片
					marker2.setIcon(hoverbackimage);

					// 调用打开wndows窗口函数
					openwindows(point,data,i);
					// 平移指定坐标位置
					bm.panTo(marker.point);

					/*var paddingstyle = "";
					if(i+1 >= 100){
						paddingstyle = "4px 0px 0px 6px"
					}
					if(i+1 >= 10){
						paddingstyle = "4px 0px 0px 6px"
					}
					if(i+1 < 10){
						paddingstyle = "4px 0px 0px 4px"
					}
					var label = marker.getLabel();
					label.setStyle({
						margin:paddingstyle,
					});*/
				}
			}

			// // 生成道路折线
			// var polyline = new BMap.Polyline(pts);
			// // 折线颜色
			// polyline.setStrokeColor("red");
			// // 折线粗细
			// polyline.setStrokeWeight(6);
            //
			// // 添加折线到地图上
			// bm.addOverlay(polyline);
		})

		// 点击下一步上一步会执行,可更改window窗口内容
		/*driving.setInfoHtmlSetCallback(function(ee){
			console.log(ee);
		})*/

		/*driving.setPolylinesSetCallback(function(ee){
			// console.log(ee);
		})*/

		bm.setViewport(plist);          //调整到最佳视野
	}else if(data.length <= 0){
		layer.alert("当前队伍网格下没有数据!");
	}
}

// 用户id
var sid = getCookie("sid");

// 查询指定网格任务
function patrolmissionmaps(orgName){
	// 条件: 时间
	var datetime = $("#patrolmissions_top_bodydate").val();
	var uid = getCookie("uid");
	// var rules = {"sid":"","orgid":"a5cde440-3e49-45c6-b210-b7fb179caf8b","time":"2016-06-21"};
	var rules = {"sid":sid,"uid":uid,"orgName":orgName,"time":datetime};
	var tmp = JSON.stringify(rules);

	$.ajax({
		url:common_ip+"map.do?action=listUserPatrol",
		dataType:'json',
		data:tmp,
		type:'post',
		contentType:"application/x-www-form-urlencoded",
		success: function(data){
			layer.msg("查询成功",{icon:1});
			if(data.successFlag){
				// 查询成功时调用此函数

				patrossionmapshuizhi(data.userPatrol);
			}else{
				layer.alert("查询失败"+data.errorMsg,{icon:2});
			}
		}.bind(this),
		error: function(request, state, error){
			layer.alert("出现异常,请重新查询");
			//console.error(this.props.url, state, error.toString());
		}.bind(this)
	});
}

var lefthoverid = -1;
// 左边数据集合
var patrolmissionlist = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:array
		};
	},
	hanOnSesionClick: function(){
		$(".patrolmission_div4div").removeClass("patrolsessions_hoverbackcolor");
		$(".patrolmission_div4div:hover").addClass("patrolsessions_hoverbackcolor");

		// 查询指定网格任务,(在地图模块中，展示了两种事件实现方式噢)
		patrolmissionmaps(this.props.data.orgName);

		/*if(lefthoverid == -1){
			lefthoverid = $(".patrolmission_div4div:hover").index();
			patrolmissionmaps(this.props.data.orgName);
			return;
		}
		if(lefthoverid != $(".patrolmission_div4div:hover").index()){
			patrolmissionmaps(this.props.data.orgName);
		}*/
		// lefthoverid = $(".patrolmission_div4div:hover").index();
	},
	componentDidMount: function(){

	},
	render:function()
	{
		return (
			React.createElement("div",{className:"patrolmission_div4div",onClick: this.hanOnSesionClick},
				React.createElement("div",{},
					React.createElement("label",{className:"patrolmission_div4ladbel1"})
				),
				React.createElement("span",{className:"patrolmission_div4span"},this.props.data.orgName)
			)
		);
	}
});

var bm = null;

var patrolmission = React.createClass({
	getInitialState: function getInitialState() {
		return {
			time:time,
			data:[],
			mapisok:-1
		};
    },
    hanOnGridPublic: function(funindex){	// 查询网格的函数
		// funindex  1: 默认查询	 2: 条件查询
		var orgName = "";
		if(funindex == 1){
			orgName = "";
		}else if(funindex == 2){
			orgName = $("#patrolmissions_top_bodytext").val();
		}

		// 网格的查询
		var rules = {"sid":sid,"orderNo":2,"orgName":orgName};
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"orgInfo.do?action=listByCmd",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					// 当指定条件成立时加上值班
					for(var i=0;i<data.orgList.length;i++){
						if(data.orgList[i].orgName == "一中队" || data.orgList[i].orgName == "二中队" || data.orgList[i].orgName == "三中队"){
							data.orgList[i].orgName = data.orgList[i].orgName + "值班";
						}
					}
					// 创建对象并赋予data
					var obj= new Object();
					obj.orderNo = "";
					obj.orgId = "";
					obj.orgName= "南澳执法队";
					obj.parentId= "";
					obj.remark= "";
					obj.stopFlag= false;
					data.orgList.unshift(obj);
					this.setState({data:data.orgList})
				}else{
					layer.alert("查询失败"+data.errorMsg,{icon:2});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert("出现异常,请重新查询");
				//console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
    },
	hanOnSearchClick: function(){	// 查询函数
		// 调用查询网格函数
		this.hanOnGridPublic(2);
	},
    componentDidMount: function(){	// 查询函数
		// 调用查询网格函数
		this.hanOnGridPublic(1);

		$("#patrolmissions_top_bodydate").val(date());

		//var p0 = markerArr[i].point.split(",")[0]; //
		//var p1 = markerArr[i].point.split(",")[1]; //按照原数组的point格式将地图点坐标的经纬度分别提出来

		// 百度地图一些常用的函数
		// bm = new BMap.Map("allmap",{mapType:BMAP_HYBRID_MAP});
		// 实列化地图
		bm = new BMap.Map("allmap");
		//bm = new BMap.Map("allmap");
//    	bm.centerAndZoom(new BMap.Point(114.500909,22.53755),18);
		// 设置地图位置和缩放级别
    	bm.centerAndZoom("深圳南澳", 13);
		// 地图上显示的控件: 地图、卫星(混合)、三维
		bm.addControl(new BMap.MapTypeControl());
		// 可以不用管
		bm.setCurrentCity("深圳");
		// 是否可以缩放地图
    	bm.enableScrollWheelZoom(true);

		// 为地图绑定事件
    	bm.addEventListener("click",function(e){
    		console.log(e.point.lng + "," + e.point.lat);
    	});
	},
	render:function()
	{
		return (
			React.createElement("div",{id:"patrolmissions_fdiv"},
					React.createElement("div",{id:"patrolmissions_top_div"},
						React.createElement("div",{id:"patrolmissions_top_title"},"巡查任务"),
						React.createElement("div",{id:"patrolmissions_top_body"},
							React.createElement("input",{type:"date",id:"patrolmissions_top_bodydate",onChange:this.hanOnChangeDate})
							/*React.createElement("input",{type:"text",id:"patrolmissions_top_bodytext"}),
							React.createElement("button",{onClick:this.hanOnSearchClick},"搜索")*/
						)
					),
					React.createElement("div",{id:"patrolmissions_left_div"},
							React.createElement("div",{id:"patrolmissions_fdiv2"},
									React.createElement("div",{id:"patrolmissions_div3"},
											React.createElement("div",{},"网格人员列表")
									)
							),
							React.createElement("div",{id:"patrolmissions_div4"},
								this.state.data.map(function(arr){
									return (React.createElement(patrolmissionlist,{data:arr}))
								})
							)
					),
					React.createElement("div",{id:"patrolmissions_right_div"},
							React.createElement("div",{id:"patrolmissions_right_allmap"},
									React.createElement("div",{id:"allmap"})
							)
					)
			)
		);
	}
});
