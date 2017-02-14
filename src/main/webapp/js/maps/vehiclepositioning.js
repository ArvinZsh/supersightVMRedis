var array = [{staffid:"1110101",name:"张三",position:"地址地址地址地址",post:"巡查负责人",department:"网格1",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",coordinateX:114.498304,coordinateY:22.54264},
	{staffid:"1110101",name:"李四",position:"地址地址地址地址",post:"巡查负责人",department:"网格1",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",coordinateX:114.501681,coordinateY:22.541339},
	{staffid:"1110101",name:"吴京",position:"地址地址地址地址",post:"网格人员",department:"网格1",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",coordinateX:114.495303,coordinateY:22.542307},
	{staffid:"1110101",name:"化无",position:"地址地址地址地址",post:"巡查负责人",department:"网格2",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",coordinateX:114.501089,coordinateY:22.539219},
	{staffid:"1110101",name:"予以",position:"地址地址地址地址",post:"巡查负责人",department:"网格2",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",coordinateX:114.502939,coordinateY:22.537884},
	{staffid:"1110101",name:"赤司",position:"地址地址地址地址",post:"巡逻人员",department:"网格2",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",coordinateX:114.502184,coordinateY:22.537533}];

var images1 = "../images/mapimage/Researcherspoint.png";
var images2 = "../images/mapimage/vehicle.png";
var images5 = "'../images/mapimage/Researcherspointicon.png";
var images6 = "../images/mapimage/vehicleicon.png";

var bm = null;
// 每5分钟从后台获取最新用户记录
var t;
var sid = getCookie("sid");

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


// 开启windows窗口
function openwindows(opint,data){

	// 信息窗口内容
	var sContent = "<div class='pstory_window_div'>" +
		"<label class='potroltrack_window_label'>车牌号:</label>" +
		"<span class='potroltrack_window_span'>"+ data.plate +"</span>" +
		"<div>" +
		"<div class='pstory_window_div'>" +
		"<label class='potroltrack_window_label'>定位时间:</label>" +
		"<span class='potroltrack_window_span'>"+ data.createTimeFormat +"</span>" +
		"<div>"

	// 实例windows
	var infoWindow = new BMap.InfoWindow(sContent);

	var opint2 = null;
	opint2 = opint;

	//开启信息窗口
	bm.openInfoWindow(infoWindow,new BMap.Point((opint2.lng),(opint2.lat)));
	//bm.openInfoWindow(infoWindow,points[0]);
	//bm.closeInfoWindow();    // 关闭已打开的窗口
}

// 不断刷新选中坐标
function dingshi(selindex){
	// 车牌
	var plate = $(".potroltrack_div4ladbel2").eq(selindex).text();

	// 清楚地图上所有覆盖物
	bm.clearOverlays();
	if(plate == "查询全部"){
		plate = "";
	}
	var rules = {"sid":sid,"plate":plate};
	var tmp = JSON.stringify(rules);
	$.ajax({
		url:common_ip+"map.do?action=listCarLoc",
		dataType:'json',
		data:tmp,
		type:'post',
		contentType:"application/x-www-form-urlencoded",
		success: function(data){
			if(data.successFlag){
				if(plate == ""){
					nsEventBus.eventbus.broadcast("potroltrack_select",[data.carLocs,selindex,"all"]);
				}else{
					nsEventBus.eventbus.broadcast("potroltrack_select",[data.carLocs,selindex]);
				}
			}else{
				layer.alert("查询失败"+data.errorMsg,{icon:2,title:"错误"});
			}
		}.bind(this),
		error: function(request, state, error){
			layer.alert("出现异常,请重新查询");
//				console.error(this.props.url, state, error.toString());
		}.bind(this)
	});

	// 每5分钟刷新一次所欲用户位置,并重新发送选中数据下标
	t=setTimeout("dingshi("+selindex+")",30000);
}

// 清除函数
function cleartime()
{
	clearTimeout(t);
}

// 车辆左边数据集合组件
var VehiLicenseList = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:[]
		};
	},
	componentDidMount: function(){
	},
	hanOnGridDingClick: function(){
		$(".potroltrack_div4div").removeClass("patro_left_div_hover");
		$(".potroltrack_div4div:hover").addClass("patro_left_div_hover");

		// 移除定时事件
		cleartime();
		// 调用定时查询车牌事件
		dingshi(this.props.selindex);
	},
	render:function()
	{
		return (
			React.createElement("div",{className:"potroltrack_div4div",onClick:this.hanOnGridDingClick},
				React.createElement("div",{className:"potroltrack_div4divd"},
					React.createElement("label",{className:"potroltrack_div4ladbel1"})
				),
			//	React.createElement("label",{className:"potroltrack_orgid",style:{"display":"none"}},this.props.data.orgId),
				React.createElement("label",{className:"potroltrack_div4ladbel2"},this.props.data)
			)
		);
	}
});

var marker2 = null;
var Vehiclepositioning = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:[]
		};
	},
	componentDidMount: function(){
		// 百度地图一些常用函数
		// bm = new BMap.Map("allmap",{mapType:BMAP_HYBRID_MAP});
		// 实例整个百度地图
		bm = new BMap.Map("allmap");
//    	var point = bm.centerAndZoom(new BMap.Point(114.02597366,22.54605355),17);
		// 初始化位置和缩放级别
		bm.centerAndZoom("深圳南澳", 17);
		// 地图上显示的控件: 地图、卫星(混合)、三维
		bm.addControl(new BMap.MapTypeControl());
		// 地图是否可以缩放
		bm.enableScrollWheelZoom(true);

		// 地图绑定事件
		bm.addEventListener("click",function(e){
			console.log(e.point.lng + "," + e.point.lat);
		});

		// 车牌的数据集合的查询
		var rules = {"sid":sid,"plate":""};
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"map.do?action=listAllPlates",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					data.plates.unshift("查询全部");
					this.setState({data:data.plates});
				}else{
					layer.alert("查询失败"+data.errorMsg,{icon:2,title:"错误"});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert("出现异常,请重新查询");
//				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
	},
	render:function()
	{
		var _this = this;
		// 获取指定网格下的车辆位置时监听
		nsEventBus.eventbus.on("potroltrack_select","potroltrack_select",function(dataa){
			// 移除地图上所有覆盖物
			bm.clearOverlays();
			// 未选中图片
			var myIcon = new BMap.Icon(images2, new BMap.Size(40,30));
			// 选中图片
			var myIcon2 = new BMap.Icon(images6, new BMap.Size(40,30));
			var data = dataa[0];

			if(dataa[2] == "all"){
				var plist = [];
				// 循环数据生成marker添加到地图上
				for(var i=0;i<data.length;i++){
					// 生成marker
					var marker = new BMap.Marker(new BMap.Point(data[i].longtitude, data[i].latitude), {icon: myIcon});
					plist.push(new BMap.Point(data[i].longtitude, data[i].latitude));
					// 把marker添加到地图上
					bm.addOverlay(marker);
					// 移除marker事件
					marker.removeEventListener("click");
					// 给每个marker绑定事件
					marker.addEventListener("click", createMarkerClick(marker, data[i]));
				}

				bm.setViewport(plist);          //调整到最佳视野
			}
			// 生成marker
			var marker = new BMap.Marker(new BMap.Point(data[0].longtitude, data[0].latitude), {icon: myIcon});
			bm.addOverlay(marker);
			// 清除marker绑定的事件
			marker.removeEventListener("click");
			// 给每个marker绑定事件
			marker.addEventListener("click", createMarkerClick(marker, data[0]));

			// 平移到给定坐标
			bm.panTo(new BMap.Point(data[0].longtitude, data[0].latitude));

			// 执行marker绑定的事件
			function createMarkerClick(marker,data){
				return function(e){
					// 修改图钉选中状态
					if(marker2 != this){
						if(marker2 != null){
							// 选中另外元素时,图片恢复为默认状态
							marker2.setIcon(myIcon);
						}
					}
					marker2 = this;
					// 赋值选中图片
					this.setIcon(myIcon2);

					// 开启信息窗口
					openwindows(marker.point,data);
					// 平移到给定坐标
					bm.panTo(marker.point);
				}
			}
		});
		return (
			React.createElement("div",{id:"potroltrack_fdiv"},
				React.createElement("div",{id:"potroltrack_top_div1"},
					React.createElement("div",{id:"potroltrakck_top_nameding"},"车辆定位")
					/*React.createElement("div",{id:"potroltrack_div2"},
					 React.createElement("input",{type:"text",placeholder:"请输入关键字",id:"potrolrack_keyword"}),
					 React.createElement("div",{onClick:this.hanOnSearchClick},"搜索")
					 )*/
				),
				React.createElement("div",{id:"potroltrack_left_div"},
					React.createElement("div",{id:"potroltrack_div3"},
						React.createElement("div",{},"车辆车牌列表"
						)
					),
					React.createElement("div",{id:"potroltrack_div4"},
						React.createElement("div",{id:"potroltrack_div4"},
							this.state.data.map(function(arr,index){
								return React.createElement(VehiLicenseList,{data:arr,selindex:index});
							})
						)
					)
				),
				React.createElement("div",{id:"potroltrack_right_div"},
					React.createElement("div",{id:"potroltrack_right_allmap"},
						React.createElement("div",{id:"allmap"})
					)
				)
			)
		);
	}
});


// ReactDOM.render(React.createElement(Vehiclepositioning),document.getElementById("patroltrack"));