var array = [{staffid:"1110101",name:"张三",position:"地址地址地址地址",post:"巡查负责人",department:"网格1",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",coordinateX:114.498304,coordinateY:22.54264},
             {staffid:"1110101",name:"李四",position:"地址地址地址地址",post:"巡查负责人",department:"网格1",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",coordinateX:114.501681,coordinateY:22.541339},
             {staffid:"1110101",name:"吴京",position:"地址地址地址地址",post:"网格人员",department:"网格1",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",coordinateX:114.495303,coordinateY:22.542307},
             {staffid:"1110101",name:"化无",position:"地址地址地址地址",post:"巡查负责人",department:"网格2",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",coordinateX:114.501089,coordinateY:22.539219},
             {staffid:"1110101",name:"予以",position:"地址地址地址地址",post:"巡查负责人",department:"网格2",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",coordinateX:114.502939,coordinateY:22.537884},
             {staffid:"1110101",name:"赤司",position:"地址地址地址地址",post:"巡逻人员",department:"网格2",phone:"156165164",email:"4416416@qq.com",enforcement:"21561",coordinateX:114.502184,coordinateY:22.537533}];

// 这上面的无用
var images1 = "../images/mapimage/Researcherspoint.png";
var images2 = "../images/mapimage/grids.png";
var images5 = "'../images/mapimage/Researcherspointicon.png";
var images6 = "../images/mapimage/gridshover.png";

// 时间转换函数
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

// 打开地图windows窗口
function openwindows(opint,data){

	// 信息窗口内容
	var sContent = "<div class='pstory_window_div'>" +
				   		"<label class='potroltrack_window_label'>网格:</label>" +
				   		"<span class='potroltrack_window_span'>"+ data.orgName +"</span>" +
				   "<div>" +
			   		"<div class='pstory_window_div'>" +
		   				"<label class='potroltrack_window_label'>位置:</label>" +
		   				"<span class='potroltrack_window_span'>"+ data.address +"</span>" +
		   			"<div>"

	// 创建windows实列
	var infoWindow = new BMap.InfoWindow(sContent);

	// 这个可以不管
	var opint2 = null;
	opint2 = opint;

	//开启信息窗口
	bm.openInfoWindow(infoWindow,new BMap.Point((opint2.lng),(opint2.lat)));
	//bm.openInfoWindow(infoWindow,points[0]);
	//bm.closeInfoWindow();    // 关闭已打开的窗口
}

var bm = null;

// 用户id
var sid = getCookie("sid");
// 每5分钟从后台获取最新用户记录
var potrolarray = [];
var t;
var item = "";
function dingshi(selindex){	// 人员定位函数
	// 获取对应网格id
	var orgId = $(".potroltrack_orgid").eq(selindex).text();

	var selectall;
	// 当为所有人员的时候,则不显示相应信息
	if(orgId == ""){
		selectall = 1;
	}

//	// 查询条件: 获取当前日期
//	var datee = date();
	
//	// 查询条件: 巡查人员姓名
//	var Inspectionman = $("#potrolrack_keyword").val();
	
	// 在循环请求的时候,设定所有元素为默认值
	bm.clearOverlays();
//	bm.centerAndZoom("深圳南澳", 17);
//	$(".potroltrack_div4div").removeClass("patro_left_div_hover");
	
//	$(document).ready(function(){
//		// 重新请求所有数据,恢复所有为默认值
//		nsEventBus.eventbus.broadcast("potroltrack_timedAll","111");
//	})

	var rules = {"sid":sid,"orgId":orgId};
	var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"map.do?action=listUserLoc",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					// 查询成功后响应
					// item = data;
					nsEventBus.eventbus.broadcast("potroltrack_select",[data,selindex,selectall,orgId]);
				}else{
					layer.alert("查询失败"+data.errorMsg,{icon:2,title:"错误"});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert("出现异常,请重新查询");
//				console.error(this.props.url, state, error.toString());
			}.bind(this)
	});

	// 定时
	t=setTimeout("dingshi("+selindex+")",30000);
}

function cleartime()
{
	clearTimeout(t);
}

var selindex = -1;
var PotroltrackGrid = React.createClass({
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
		// 点击网格的时候,需清除并调用此函数
		cleartime();
		// 调用定时查询函数
		dingshi(this.props.selindex);
		// var obj = new Object();
		// obj.index = $(".potroltrack_div4div:hover").index()
		// obj.itemId = item;
		if($(".potroltrack_div4div:hover").index() != -1){
			nsEventBus.eventbus.broadcast("selectGroup",$(".potroltrack_div4div:hover").index());
		}

		// 表格每次只准选中一次
		/*if(selindex == -1){
			selindex = $(".potroltrack_div4div:hover").index();
			cleartime();
			dingshi(selindex,this.props.data.orgName);
			return;
		}
		if(selindex != $(".potroltrack_div4div:hover").index()){
			cleartime();
			dingshi($(".potroltrack_div4div:hover").index(),this.props.data.orgName);
		}
		selindex = $(".potroltrack_div4div:hover").index();*/
	},
	render:function()
	{
		return (
				React.createElement("div",{className:"potroltrack_div4div",onClick:this.hanOnGridDingClick},
						React.createElement("div",{className:"potroltrack_div4divd"},
								React.createElement("label",{className:"potroltrack_div4ladbel1"})
						),
						React.createElement("label",{className:"potroltrack_orgid",style:{"display":"none"}},this.props.data.orgId),
						React.createElement("label",{className:"potroltrack_div4ladbel2"},this.props.data.orgName),
						React.createElement("label",{className:"potroltrack_lixian"}),
						React.createElement("div",{className:"potroltrack_okisnoSignIn_div"},
							React.createElement("div",{className:"potroltrack_okSignIn_div"},
								React.createElement("div",{className:"potroltrack_okSignIn_divd1"},"上班成员"),
								React.createElement("label",{className:"potroltrack_okSignIn_divd2"})
							),
							React.createElement("div",{className:"potroltrack_noSignIn_div"},
								React.createElement("div",{className:"potroltrack_noSignIn_divd1"},"未上班成员"),
								React.createElement("label",{className:"potroltrack_noSignIn_divd2"})
							),
							React.createElement("div",{className:"potroltrack_oknoSignIncount_div"},
								React.createElement("label",{className:"potroltrack_oknoSignIncount_divd1"}),
								React.createElement("label",{className:""},"人上班/共"),
								React.createElement("label",{className:"potroltrack_oknoSignIncount_divd2"}),
								React.createElement("label",{className:""},"人")
							)
						)
				)
		);
	}
});


var marker2 = null;
var Potroltrack = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:[],
			data2:[]
		};
    },
    hanOnGridId:function(){	// 查询网格
//    	var common_ipsz = "common_ip+"";
    	
    	var orgName = $("#potrolrack_keyword").val();
    	
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
						// 网格集合大于0
						if(data.orgList.length>0){
							// 为每个相应条件加上值班
							for(var i=0;i<data.orgList.length;i++){
								if(data.orgList[i].orgName == "一中队" || data.orgList[i].orgName == "二中队" || data.orgList[i].orgName == "三中队"){
									data.orgList[i].orgName = data.orgList[i].orgName + "值班";
								}
							}

							// 创建对象并赋予data
							var obj= new Object();
							obj.orderNo = "";
							obj.orgId = "";
							obj.orgName = "所有网格";
							obj.parentId = "";
							obj.remark = "";
							// obj赋值到data数据结构第一个,下标为0
							data.orgList.unshift(obj);
						}

						// data.orglist.unshift();
    					this.setState({data:data.orgList});
    				}else{
    					layer.alert("查询失败"+data.errorMsg,{icon:2,title:"错误"});
    				}
    			}.bind(this),
    			error: function(request, state, error){
    				layer.alert("出现异常,请重新查询");
//    				console.error(this.props.url, state, error.toString());
    			}.bind(this)
    	});
    },
    componentDidMount: function(){
    	this.hanOnGridId();

		// bm = new BMap.Map("allmap",{mapType:BMAP_HYBRID_MAP});
		// 实列整个地图,allmap为固定值
		bm = new BMap.Map("allmap");
//    	var point = bm.centerAndZoom(new BMap.Point(114.02597366,22.54605355),17);
		// 初始化地图显示坐标和级别
    	bm.centerAndZoom("深圳南澳", 17);
		// 设置有地图,卫星(混合),三维按钮
    	bm.addControl(new BMap.MapTypeControl());
		// 设置是否可以缩放
    	bm.enableScrollWheelZoom(true);

		// 地图绑定事件
    	bm.addEventListener("click",function(e){
    		console.log(e.point.lng + "," + e.point.lat);
    	});
	},
	hanOnSearchClick: function(){	// 查询
		this.hanOnGridId();
	},
/*	hanOnSelectAll: function(){
		$(".potroltrack_div4div").removeClass("patro_left_div_hover");
		$(".potroltrack_div4div:hover").addClass("patro_left_div_hover");

		cleartime();
		dingshi(1);
	},*/
	render:function()
	{
		var _this = this;
		// 监听
		nsEventBus.eventbus.on("potroltrack_select","potroltrack_select",function(dataa){
			// 当坐标为0或者或负时,需要判断

			// 移除地图上所有覆盖物
			bm.clearOverlays();

			$(".potroltrack_lixian").text("");

			// 网格人员数据
			var data = dataa[0].userLocs;
			// 网格未上班人员数据
			var noSignInUsers = dataa[0].noSignInUsers;
			// 网格上班上员数据
			var signInUsers   = dataa[0].signInUsers;
			// 点击列表下标数据
			var selindex = dataa[1];

			$(".potroltrack_okisnoSignIn_div").hide();

			// _this.setState({data2:data});
			// 当选中网格没有数据时
			if(data.length == 0){
				// 移除循环函数
				cleartime();
				// 初始化地图
				bm.centerAndZoom("深圳南澳", 17);
				layer.msg("抱歉,当前队伍网格下没有人员信息!",{icon:7});
				return;
			}
			// 自定义图标
			var myIcon = new BMap.Icon(images2, new BMap.Size(40,47));
			var myIcon2 = new BMap.Icon(images6, new BMap.Size(40,54));
			// 没有点击所有人员的时候
			if(dataa[2] != 1) {
				// 已上班成员
				var oksignin = "";
				for (var i = 0; i < signInUsers.length; i++) {
					if (i == signInUsers.length - 1) {
						oksignin = oksignin + signInUsers[i].userName;
					} else {
						oksignin = signInUsers[i].userName + "，" + oksignin;
					}
				}

				// 未上班成员
				var nosignin = "";
				for (var i = 0; i < noSignInUsers.length; i++) {
					if (i == noSignInUsers.length - 1) {
						nosignin = nosignin + noSignInUsers[i].userName;
					} else {
						nosignin = noSignInUsers[i].userName + "，" + nosignin;
					}
				}
				// 设置到选中列中
				$(".potroltrack_okSignIn_divd2").eq(selindex).text(oksignin);
				$(".potroltrack_noSignIn_divd2").eq(selindex).text(nosignin);

				$(".potroltrack_oknoSignIncount_divd1").text(signInUsers.length);
				$(".potroltrack_oknoSignIncount_divd2").text(signInUsers.length + noSignInUsers.length);

				$(".potroltrack_okisnoSignIn_div").eq(selindex).fadeIn();
			}

			// 判断不是所有人员时进入
			if(dataa[3] != ""){
				// 生成marker
				var marker = new BMap.Marker(new BMap.Point(data[0].longtitude, data[0].latitude), {icon: myIcon});
				// 将marker添加到地图上
				bm.addOverlay(marker);
				// 移除marker事件
				marker.removeEventListener("click");
				// 给每个marker绑定事件
				marker.addEventListener("click", createMarkerClick(marker, data[0]));
				// 平移到对应坐标
				bm.panTo(new BMap.Point(data[0].longtitude, data[0].latitude));

				var date1=new Date();  //开始时间
				var date2=new Date();    //结束时间

				var oldTime = (new Date(data[0].createTimeFormat)).getTime(); //得到毫秒数

				var date3=date2.getTime()-oldTime;  //时间差的毫秒数

				//计算出相差天数
				var days=Math.floor(date3/(24*3600*1000))
				//计算出小时数
				var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
				var hours=Math.floor(leave1/(3600*1000))
				//计算相差分钟数
				var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
				var minutes=Math.floor(leave2/(60*1000))

				//计算相差秒数
				var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
				var seconds=Math.round(leave3/1000)

				console.log("和系统时间相差 "+days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒");
				// 如果有一个小时,或者有一天，必大于5分钟,否则比较分钟,举例,当小时为0，而分钟为4的时候，天为1,不判断则会出现逻辑错误
				if(hours>0 || days>0){
					$(".potroltrack_lixian").eq(selindex).text("离线");
				}else{
					if(minutes > 5){
						$(".potroltrack_lixian").eq(selindex).text("离线");
					}
				}

				// 把自己的时间转换为date类型
				/*var oldTime = (new Date("2014/03/31 12:10:10")).getTime(); //得到毫秒数
				 var newTime = new Date(oldTime); //就得到普通的时间了
				 console.log(oldTime);
				 console.log(newTime);*/
			}else{	// 是所有人员时进入
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
				// bm.panTo(new BMap.Point(data[0].longtitude, data[0].latitude));
			}

			// 执行marker事件
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
					// 平移到对应坐标
					bm.panTo(marker.point);
				}
			}
		});
		return (
			React.createElement("div",{id:"potroltrack_fdiv"},
					React.createElement("div",{id:"potroltrack_top_div1"},
						React.createElement("div",{id:"potroltrakck_top_nameding"},"人员定位")
						/*React.createElement("div",{id:"potroltrack_div2"},
							React.createElement("input",{type:"text",placeholder:"请输入关键字",id:"potrolrack_keyword"}),
							React.createElement("div",{onClick:this.hanOnSearchClick},"搜索")
						)*/
					),
					React.createElement("div",{id:"potroltrack_left_div"},
							React.createElement("div",{id:"potroltrack_div3"},
									React.createElement("div",{},"网格小组列表"
									)
							),
							React.createElement("div",{id:"potroltrack_div4"},
									React.createElement("div",{id:"potroltrack_div4"},
											this.state.data.map(function(arr,index){
												return React.createElement(PotroltrackGrid,{data:arr,selindex:index});
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

// ReactDOM.render(React.createElement(Potroltrack),document.getElementById("patroltrack"));