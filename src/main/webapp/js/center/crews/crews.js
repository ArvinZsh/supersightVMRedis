var Pagination = ReactBootstrap.Pagination;
var Input = window.Input || ReactBootstrap.Input;
var Button = window.Button || ReactBootstrap.Button;
var mountNode = document.getElementById("pageSpec");

var hmd = [{"leader":"张国东","leaderMobile":15154545411,"crewsName":"张三施工队"},{"leader":"张国东","leaderMobile":15154545411,"crewsName":"张三施工队"},{"leader":"张国东","leaderMobile":15154545411,"crewsName":"张三施工队"},{"leader":"张国东","leaderMobile":15154545411,"crewsName":"张三施工队"},{"leader":"张国东","leaderMobile":15154545411,"crewsName":"张三施工队"},{"leader":"张国东","leaderMobile":15154545411,"crewsName":"张三施工队"},{"leader":"张国东","leaderMobile":15154545411,"crewsName":"张三施工队"},{"leader":"张国东","leaderMobile":15154545411,"crewsName":"张三施工队"},{"leader":"张国东","leaderMobile":15154545411,"crewsName":"张三施工队"},{"leader":"张国东","leaderMobile":15154545411,"crewsName":"张三施工队"}]
//var wjjl = [{"address":"广东省深圳市南山区e的大概多少呃呃呃","blackid":"4541616","community":"呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少","blackid":"4541616","community":"呃呃呃呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少","blackid":"4541616","community":"呃呃呃呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少","blackid":"4541616","community":"呃呃呃呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少","blackid":"4541616","community":"呃呃呃呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少","blackid":"4541616","community":"呃呃呃呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少","blackid":"4541616","community":"呃呃呃呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少","blackid":"4541616","community":"呃呃呃呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少","blackid":"4541616","community":"呃呃呃呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少","blackid":"4541616","community":"呃呃呃呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少","blackid":"4541616","community":"呃呃呃呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少","blackid":"4541616","community":"呃呃呃呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少","blackid":"4541616","community":"呃呃呃呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少","blackid":"4541616","community":"呃呃呃呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少","blackid":"4541616","community":"呃呃呃呃呃呃呃呃呃"}]
var wjjl = [{"address":"广东省深圳市南山区e的大概多少呃呃呃","blackid":"4541616","community":"呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少呃呃呃","blackid":"4541616","community":"呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少呃呃呃","blackid":"4541616","community":"呃呃呃呃呃呃"},{"address":"大侠你摊上大事了","blackid":"4541616","community":"啊啊啊啊"},{"address":"成都市武侯区武兴三路五星花园","blackid":"4541616","community":"呃呃呃呃呃呃"},{"address":"成都市武侯区武兴三路五星花园","blackid":"4541616","community":"呃呃呃呃呃呃"},{"address":"成都市武侯区武兴三路五星花园","blackid":"4541616","community":"呃呃呃呃呃呃"},{"address":"成都市武侯区武兴三路五星花园","blackid":"4541616","community":"呃呃呃呃呃呃"},{"address":"成都市武侯区武兴三路五星花园","blackid":"4541616","community":"呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少呃呃呃","blackid":"4541616","community":"呃呃呃呃呃呃"},{"address":"广东省深圳市南山区e的大概多少呃呃呃","blackid":"4541616","community":"呃呃呃呃呃呃"},{"address":"大侠你摊上大事了","blackid":"4541616","community":"啊啊啊啊"},{"address":"成都市武侯区武兴三路五星花园","blackid":"4541616","community":"呃呃呃呃呃呃"},{"address":"成都市武侯区武兴三路五星花园","blackid":"4541616","community":"呃呃呃呃呃呃"},{"address":"成都市武侯区武兴三路五星花园","blackid":"4541616","community":"呃呃呃呃呃呃"},{"address":"成都市武侯区武兴三路五星花园","blackid":"4541616","community":"呃呃呃呃呃呃"},{"address":"成都市武侯区武兴三路五星花园","blackid":"4541616","community":"呃呃呃呃呃呃"}]

var sid = getCookie("sid");

// 添加/修改右边移到中间的数据组件
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
			return (
					React.createElement("div",{className:"crews_insert_auto_fdiv",onClick:this.hanOnIllegalJiClick},
							React.createElement("div",{className:"crews_insert_auto_xdiv"},
									React.createElement("label",{id:""},"建筑物编码: "),
									React.createElement("span",{className:"crews_buidl_bhs"},this.props.data.officialNo),
									React.createElement("button",{className:"crewsautoclear",onClick:this.hanOnClearYiChu},"×")
							),
							React.createElement("div",{className:"crews_insert_auto_xdiv2"},
									React.createElement("label",{className:"crews_clear_label"},"【"+this.props.data.area1+"】"),
									React.createElement("span",{className:"crews_clear_span"},this.props.data.address)
							)
					)
			);
	}
});

// 添加/修改查询违建信息
var buidingsdom = [];

var array = [];
var index = [];
// 窗口页面右边违建组件
var Illegallybuiltlist = React.createClass({
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
    	obj.buildingId = $(".buildings_crews_id").eq(yuanindex).text();
        obj.officialNo = $(".crews_isinsert_selz1").eq(yuanindex).text();
        obj.area1 = $(".crews_isinsert_area").eq(yuanindex).text();
        obj.address = $(".crews_isinsert_selz3").eq(yuanindex).text();

		// 在更改的时候,需要用唯一buildingId来判断是否中间区域已经有了相应的数据
		for(var i =0;i<array.length;i++){
			if(array[i].buildingId == obj.buildingId){
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
			return (
					React.createElement("div",{className:"crews_built_div",onClick:this.hanOnYiDongClick},
			    			React.createElement("label",{className:"buildings_crews_id",style:{"display":"none"}},this.props.data.buildingId),
			    			React.createElement("label",{className:"crews_isinsert_selz1",style:{"display":"none"}},this.props.data.officialNo),
			    			React.createElement("label",{className:"crews_isinsert_selz2"},"【",
								React.createElement("label",{className:"crews_isinsert_area"},this.props.data.area1),
								"】"
							),
			    			React.createElement("span",{className:"crews_isinsert_selz3"},this.props.data.address)
			    	)
			);
	}
});

// 施工队黑名单添加/修改界面
var CrewsInsertIsUpdate = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:wjjl,
			autolist:[],
			buildingsinsert:[],
			message:""
		};
    },
    hanOnColse:function(){
		layer.confirm('您确定要放弃修改吗？', {
				btn: ['确定','取消'] //按钮
			},
		function(index){
			$("#crews_insert_fdiv").fadeOut(300);
			$("#crews_insert_div").animate({top:'-22px'},350);
			layer.close(index);
		});

    },
    hanOnYiDongClick:function(even){

    },
    componentDidMount: function(){
		$("#crews_insert_div").css({"width":"1050px"});
		$("#crews_insert_div").css({"height":"630px"});

    	/*var _this = this;
		$(".crews_top_insert").click(function(){
			_this.setState({buildingsinsert:[]});
			_this.setState({autolist:[]});
		});
		$(".crews_update_div").click(function(){
			_this.setState({buildingsinsert:[]});
			_this.setState({autolist:[]});
		});*/
		// 添加为undefned
		if(this.props.buidinglist == undefined){
			return;
		}
		// 在更新的时候,窗口列表数据显示为绑定的
		this.setState({autolist:this.props.buidinglist});
	},
	hanOnInsertIsUpdate: function(insertIsupdate){	// 添加函数
		var crewsName = $(".crews_xqinput_sgdmc").val();	// 施工队名称
		if(crewsName == ""){
			this.setState({message:"施工队名称不能为空"});
			return;
		}
		var leader = $(".crews_xqinput_fzr").val();			// 负责人id
		if(leader == ""){
			this.setState({message:"负责人不能为空"});
			return;
		}
		var leaderMobile = $(".crews_xqinput_sjh").val();	// 手机号
		if(leaderMobile == ""){
			this.setState({message:"手机号不能为空"});
			return;
		}
		var yzphone=/^1[3|4|5|7|8]\d{9}$/;
		if(!yzphone.test(leaderMobile)){
			this.setState({message:"手机号格式不正确"});
			return;
		}
		var leaderIdCode = $(".crews_xqinput_sfzh").val();	// 身份证号
		var yz=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
		if(leaderIdCode != "") {
			if (!yz.test(leaderIdCode)) {
				this.setState({message: "身份证号格式不正确"});
				return;
			}
		}
		var remark = $(".crews_xqinput_bz").val();			// 备注
		if(remark.length>200){
			this.setState({message:"备注长度不能超过200字"});
			return;
		}
		/*if(remark == ""){
			this.setState({message:"备注不能为空"});
			return;
		}*/
		// 这里需要判断用户是否存在
		var creator = 1;									// 当前登录用户id
		var buildingList = [];								// 台账id集合
		for(var i=0;i<array.length;i++){
			buildingList.push(array[i].buildingId);
		}

		// 添加
		if(insertIsupdate == 1){
			rules = {"sid":sid,"crewsName":crewsName,"leader":leader,"leaderMobile":leaderMobile,"leaderIdCode":leaderIdCode,"remark":remark,"creator":creator,
					 "buildingList":buildingList};
		}

		// 修改
		if(insertIsupdate == 2){
			rules = {"sid":sid,"crewsName":crewsName,"leader":leader,"leaderMobile":leaderMobile,"leaderIdCode":leaderIdCode,"remark":remark,"creator":creator,
					 "buildingList":buildingList,"crewsId":this.props.crewsId};
		}
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"badCrews.do?action=save",
				dataType:'json',
				data:tmp,
				type:'post',
				contentType:"application/x-www-form-urlencoded",
				success: function(data){
					if(data.successFlag){
						layer.alert("保存成功!");
						// 保存成功则窗口隐藏
						$("#crews_insert_fdiv").css({"display":"none"});
						$("#crews_insert_div").animate({top:'-22px'});
						if(insertIsupdate == 1){
							// 用来保持恢复默认值
							nsEventBus.eventbus.broadcast("crews_insert",1);
						}
						if(insertIsupdate == 2){
							// 用来保持最新效果数据
							nsEventBus.eventbus.broadcast("crews_update",1);
						}
					}else{
						layer.alert("保存失败"+data.errorMsg,{icon:2});
//						layer.alert(data.errorMsg);
					}
				}.bind(this),
				error: function(request, state, error){
					layer.alert(error);
//					console.error(this.props.url, state, error.toString());
				}.bind(this)
			});
	},
	hanOnBuidingsSouce: function(){		// 查询指定违建数据
		var uid = getCookie("uid");
	 	var keyword = $("#crews_keytext").val();
		var rules = {"sid":sid,"uid":uid,"pageNo":1,"pagesize":50,"keyword":keyword};
		var tmp = JSON.stringify(rules);
 		$.ajax({
 			url:common_ip+"buildings.do?action=list",
 				dataType:'json',
 				data:tmp,
 				type:'post',
 				contentType:"application/x-www-form-urlencoded",
 			success: function(data){
 				if(data.successFlag){
					// 重新渲染页面来显示
 					this.setState({buildingsinsert:data.pager.list});
 				}else{
 					layer.alert("查询失败"+data.errorMsg,{icon:2});
 				}
 			}.bind(this),
 				error: function(request, state, error){
 				layer.alert("查询失败,请重新查询!");
					console.error(this.props.url, state, error.toString());
 			}.bind(this)
 		});
	},
	hanOnInsertClick: function(){
		// 调用新增/修改函数
		this.hanOnInsertIsUpdate(1);
	},
	hanOnUpdateClick: function(){
		// 调用新增/修改函数
		this.hanOnInsertIsUpdate(2);
	},
	render:function()
	{
		var _this = this;
		// 监听windows窗口的最新中右违建数据
		nsEventBus.eventbus.on("Illegallybuiltlist","Illegallybuiltlist",function(dataa){
			_this.setState({autolist:dataa});
		});
			return (
					React.createElement("div",{},
							React.createElement("div",{id:"crews_isinsert_top"},
									React.createElement("span",{className:"crews_isinsert_title"},""),
									React.createElement("button",{className:"crews_isinsert_clear",onClick:this.hanOnColse},"×")
							),
							React.createElement("div",{id:"crews_xq_div"},
									React.createElement("div",{}),
									React.createElement("label",{},
										React.createElement("b",{},"*"),
										"施工队名称:"
									),
									React.createElement(Input,{type:"text",className:"crews_xqinput_sgdmc"}),
									React.createElement("label",{},
										React.createElement("b",{},"*"),
										"负责人:"
									),
									React.createElement(Input,{type:"text",className:"crews_xqinput_fzr"}),
									React.createElement("label",{},
										React.createElement("b",{},"*"),
										"手机号:"
									),
									React.createElement(Input,{type:"text",className:"crews_xqinput_sjh"}),
									React.createElement("label",{},"身份证号:"),
									React.createElement(Input,{type:"text",className:"crews_xqinput_sfzh"}),
									React.createElement("label",{},"备注:"),
									React.createElement(Input,{type:"textarea",className:"crews_xqinput_bz"})
							),
							React.createElement("div",{id:"crews_constructionrecord_zong"},
									React.createElement("div",{id:"crews_constructionrecord_cation"},
											React.createElement("label",{},"违建施工记录"),
											React.createElement("span",{},"(提示: 请到右侧搜索相关记录，单击即可添加至此)")
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
												return React.createElement(Illegallybuiltlist,{data:arr})
											})
									)
							),
							React.createElement("div",{className:"crews_isinsert_div4"},
									React.createElement("div",{className:"crews_insert_message"},this.state.message+" "),
									React.createElement("button",{className:"crews_isinsert_subbutton",onClick:this.hanOnInsertClick},"保 存")
							),
							React.createElement("div",{className:"crews_isinsert_div4"},
									React.createElement("div",{className:"crews_update_message"},this.state.message+" "),
									React.createElement("button",{className:"crews_isupdate_subbutton",onClick:this.hanOnUpdateClick},"保 存")
							)
					)
			);
	}
});

// 当事人修改
var PartyUpdate = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
	},
	componentDidMount: function(){
		$("#crews_insert_div").css({"width":"470px"});
		$("#crews_insert_div").css({"height":"302px"});
	},
	hanOnWindowsColse: function(){
		layer.confirm('您确定要放弃修改吗？', {
				btn: ['确定','取消'] //按钮
			},
		function(index){
			$("#crews_insert_fdiv").fadeOut(300);
			$("#crews_insert_div").animate({top:'-22px'},350);
			layer.close(index);
		});
	},
	hanOnPartyUpdateClick: function(){	// 修改函数
		var remarks = $(".Party_xdiv6 textarea").val();
		var sexCode = $(".crews_party_sex").val();
		if(remarks!=""){
			if(remarks.length>200){
				layer.alert("备注长度不能超过200字!",{icon:0});
				return;
			}
		}

		var rules = {"sid":sid,"ownerId":this.props.ownerId,"remark":remarks,"sexCode":sexCode};
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"badOwner.do?action=save",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					layer.alert("保存成功!");
					// 修改成功则隐藏窗口
					$("#crews_insert_fdiv").css({"display":"none"});
					$("#crews_insert_div").animate({top:'-22px'});

					// 返回进行的操作
					nsEventBus.eventbus.broadcast("crews_update",3);
				}else{
					layer.alert("当事人查询失败"+data.errorMsg,{icon:2});
				}
			}.bind(this),
			error: function(request, state, error){
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
	},
	render:function()
	{
		return (
			React.createElement("div",{className:"Party_fdiv"},
				React.createElement("div",{className:"Party_xdiv1"},
					React.createElement("label",{className:""},"编辑当事人"),
					React.createElement("button",{className:"Party_xdiv1_button",onClick:this.hanOnWindowsColse},"×")
				),
				React.createElement("div",{className:"Party_xdiv2"},
					React.createElement("label",{className:""},"姓名"),
					React.createElement("span",{className:""})
				),
				React.createElement("div",{className:"Party_xdiv3"},
					React.createElement("label",{className:""},"性别"),
					React.createElement("select",{className:"crews_party_sex"},
						React.createElement("option",{className:"",value:"未知"},"未知"),
						React.createElement("option",{className:"",value:"男"},"男"),
						React.createElement("option",{className:"",value:"女"},"女")
					)
				),
				React.createElement("div",{className:"Party_xdiv4"},
					React.createElement("label",{className:""},"手机号"),
					React.createElement("span",{className:""},"11111111111111")
				),
				React.createElement("div",{className:"Party_xdiv5"},
					React.createElement("label",{className:""},"身份证号码"),
					React.createElement("span",{className:""},"555555555555555555")
				),
				React.createElement("div",{className:"Party_xdiv6"},
					React.createElement("div",{className:""},"备注"),
					React.createElement("textarea",{className:""})
				),
				React.createElement("div",{className:"Party_xdiv7",onClick:this.hanOnPartyUpdateClick},
					React.createElement("button",{className:""},"确定")
				)
			)
		);
	}
});

/*var binase = function(){
	$(".crews_hmd_tr").each(function(index){
		if(index % 2 == 1){
			$(".crews_hmd_tr").eq(index).css({"background-color":"#F1F9FC"});
		}else{
			$(".crews_hmd_tr").eq(index).css({"background-color":"#FFFFFF"});
		}
	})
}*/

// 施工队违建记录查询
function crewsbuildingssel(crewsId){
	var rules = {"sid":sid,"crewsId":crewsId};
	var tmp = JSON.stringify(rules);
	$.ajax({
		url:common_ip+"badCrews.do?action=get",
		dataType:'json',
		data:tmp,
		type:'post',
		contentType:"application/x-www-form-urlencoded",
		success: function(data){
			if(data.successFlag){
				nsEventBus.eventbus.broadcast("buidings_insert_all",data.badCrew.buildings)

				// 返回的集合,并移除dom节点,渲染显示最新数据
				$("#crews_wjsgjl_zdiv").empty();
				ReactDOM.render(React.createElement(Ledgerrecords,{data:data.badCrew.buildings}),document.getElementById("crews_wjsgjl_zdiv"));
			}else{
				layer.alert("查询失败"+data.errorMsg,{icon:2});
			}
		}.bind(this),
		error: function(request, state, error){
			layer.alert("出现异常,请重新查询");
			console.error(this.props.url, state, error.toString());
		}.bind(this)
	});
}

var selindex = -1;
// 施工队数据集合
var Blacklist = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
    },
	// 当有×的时候有用
	hanOnMouseOut: function(){
		$(".crews_hmd_tr").removeClass("crews_buidings_tablehover");
		// $(".crews_blacklist_td4 label").hide();
		$(".crews_blacklist_td4 button:not(:eq("+ selindex +"))").hide();
	},
	// 当有×的时候有用
	hanOnMoveHover: function(){
		if($(".crews_hmd_tr:hover").index()-1 == selindex){
			return;
		}
		$(".crews_hmd_tr").removeClass("crews_buidings_tablehover");
		$(".crews_hmd_tr:hover").addClass("crews_buidings_tablehover");
		$(".crews_blacklist_td4 button:not(:eq("+ selindex +"))").hide();
		$(".crews_blacklist_td4 button").eq($(".crews_hmd_tr:hover").index()-1).show();
	},
	// 当有×的时候有用
	hanZiCrewsDelete: function(){
		nsEventBus.eventbus.broadcast("zifudelete",$(".crews_hmd_tr:hover").index()-1);
	},
    hanOnHmdClick:function(e){
		// $(".crews_blacklist_td4 label").hide();
		// 有一些是属于×删除,打了注释就不算是删除
		$(".crews_hmd_tr").removeClass("crews_buidings_tablehover");
		$(".crews_hmd_tr").removeClass("backhovercolor");
    	$(".crews_hmd_tr:hover").addClass("backhovercolor");

		selindex = $(".crews_hmd_tr:hover").index()-1;

		$(".crews_blacklist_td4 button:not(:eq("+ selindex +"))").hide();

		// 把最新数据渲染到施工队基本显示
		ReactDOM.render(React.createElement(Crewsdetails,{data:this.props.data}),document.getElementById("crews_fun_inqiehuan"));
		// 施工队违建信息查询(ajax条件不允许,只能用三个了)
		crewsbuildingssel(this.props.data.crewsId);

		// 设置属于那个施工队
		$("#crewa_shigonduidiv").text(this.props.data.crewsName);

		// 设置当前列创建人和时间
		var datetime = this.props.data.createTimeFormat.substr(0,10);
		$("#crews_wjjl_name").text(this.props.data.leader+" 创建于 "+datetime);

    	nsEventBus.eventbus.broadcast("crewsselindexe",[$(".crews_hmd_tr:hover").index(),1]);
    },
    componentDidMount: function(){
		$(".crews_blacklist_td1").wordLimit(22);
		// var tdclasss = document.getElementsByClassName("crews_blacklist_td1");
		// if(tdclasss[0].scrollWidth>tdclasss[0].clientWidth||tdclasss[0].scrollWidth>tdclasss[0].clientWidth){
		// 	alert(1);
		// }
	},
	componentDidUpdate: function(){
		$(".crews_blacklist_td1").wordLimit(22);
	},
	render:function()
	{
			return (
					React.createElement("tr",{className:"crews_hmd_tr",onClick:this.hanOnHmdClick,onMouseOver:this.hanOnMoveHover,onMouseOut:this.hanOnMouseOut},
							React.createElement("td",{className:"crews_blacklist_td1"},this.props.data.crewsName),
							React.createElement("td",{className:"crews_blacklist_td2"},this.props.data.leader),
							React.createElement("td",{className:"crews_blacklist_td3"},this.props.data.leaderMobile)
							/*React.createElement("td",{className:"crews_blacklist_td4"},
								React.createElement("button",{className:"",onClick:this.hanZiCrewsDelete},"×")
							)*/
					)
			);
	}
});

// 施工队表格
var Blacktable = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
	},
	componentDidMount: function(){
		if(this.props.selindex >= 0){
			crewsbuildingssel(this.props.data[this.props.selindex].crewsId);
			$(".crews_hmd_tr").eq(this.props.selindex).addClass("backhovercolor");
			$(".crews_blacklist_td4 button").eq(this.props.selindex).show();
		}
	},
	render:function()
	{
		return (
			React.createElement("table",{id:"crews_hmd_table"},
				React.createElement("tr",{className:"crews_trth1"},
					React.createElement("th",{className:"buidings_name_th1"},"施工队名称"),
					React.createElement("th",{className:""},"负责人"),
					React.createElement("th",{className:""},"手机号")
					// React.createElement("th",{style:{"width":"25px"}},"")
				),
				this.props.data.map(function(arr){
					return React.createElement(Blacklist,{data:arr})
				})
			)
		);
	}
});

// 车辆违建记录查询
function Vehiclesel(carId){
	var rules = {"sid":sid,"carId":carId};
	var tmp = JSON.stringify(rules);
	$.ajax({
		url:common_ip+"badCar.do?action=get",
		dataType:'json',
		data:tmp,
		type:'post',
		contentType:"application/x-www-form-urlencoded",
		success: function(data){
			if(data.successFlag){
				nsEventBus.eventbus.broadcast("buidings_insert_all",data.badCar.buildings)

				// 返回的集合
				$("#crews_wjsgjl_zdiv").empty();
				ReactDOM.render(React.createElement(Ledgerrecords,{data:data.badCar.buildings}),document.getElementById("crews_wjsgjl_zdiv"));
			}else{
				layer.alert("查询失败"+data.errorMsg,{icon:2});
			}
		}.bind(this),
		error: function(request, state, error){
			layer.alert("出现异常,请重新查询");
			console.error(this.props.url, state, error.toString());
		}.bind(this)
	});
}

// 车辆数据集合
var Vehiclelist = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
	},
	hanOnMouseOut: function(){
		$(".crews_vehicle_td").removeClass("vehiclehoverborderhover");
		$(".crewst_vehiclebackcolor2").hide();
	},
	hanOnMoveHover: function(){
		if($(".crews_vehicle_td:hover").index() == selindex){
			return;
		}

		$(".crews_vehicle_td").removeClass("vehiclehoverborderhover");
		$(".crews_vehicle_td:hover").addClass("vehiclehoverborderhover");
		$(".crewst_vehiclebackcolor2").hide();
		$(".crewst_vehiclebackcolor2").eq($(".crews_vehicle_td:hover").index()).show();
	},
	hanZiCrewsDelete: function(){
		nsEventBus.eventbus.broadcast("zifudelete",$(".crews_vehicle_td:hover").index());
	},
	hanOnvehiclehoverClick: function(event){
		$(".crews_vehicle_td").removeClass("vehiclehoverborderhover");
		$(".crews_vehicle_td").removeClass("vehiclehoverborder");
		$(".crews_vehicle_td:hover").addClass("vehiclehoverborder");
		$(".crewst_vehiclebackcolor").hide();
		$(".crewst_vehiclebackcolor").eq($(".crews_vehicle_td:hover").index()).show();
		$(".crewst_vehiclebackcolor2").hide();

		selindex = $(".crews_vehicle_td:hover").index();

		ReactDOM.render(React.createElement(Vehicleils,{data:this.props.data}),document.getElementById("crews_fun_inqiehuan"));
		Vehiclesel(this.props.data.carId);

		var datetime = this.props.data.createTimeFormat.substr(0,10);
		$("#crews_wjjl_name").text(this.props.data.driverName+" 创建于 "+datetime);

		nsEventBus.eventbus.broadcast("crewsselindexe",[$(".crews_vehicle_td:hover").index()+1,2]);
	},
	componentDidMount: function(){
	},
	render:function()
	{
		var thumPath = "";
		var alttext = "图片加载失败";
		for(var i=0;i<this.props.data.photots.length;i++){
			if(this.props.data.photots[i].type == "车身"){
				thumPath = this.props.data.photots[i].thumPath;
			}
		}
		if(this.props.data.photots == 0){
			alttext = "请上传图片";
		}
		return (
			React.createElement("div",{className:"crews_vehicle_td",onClick:this.hanOnvehiclehoverClick,onMouseOver:this.hanOnMoveHover,onMouseOut:this.hanOnMouseOut},
				React.createElement("image",{src:thumPath,alt:alttext}
				),
				React.createElement("div",{className:"crewst_pingpaixing"},
					React.createElement("div",{className:""},this.props.data.carBrand)
				),
				React.createElement("div",{className:"crewst_vehiclebackcolor"}
					// React.createElement("button",{className:"vehic_coler",onClick:this.hanZiCrewsDelete},"×")
				),
				React.createElement("div",{className:"crewst_vehiclebackcolor2"}
					// React.createElement("button",{className:"vehic_coler",onClick:this.hanZiCrewsDelete},"×")
				)
			)
		);
	}
});

// 车辆表格
var Vehicletable = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
	},
	componentDidMount: function(){
		if(this.props.selindex >= 0){
			Vehiclesel(this.props.data[this.props.selindex].carId);
			$(".crews_vehicle_td").removeClass("vehiclehoverborder");
			$(".crews_vehicle_td").eq(this.props.selindex).addClass("vehiclehoverborder");
			$(".crewst_vehiclebackcolor").hide();
			$(".crewst_vehiclebackcolor").eq(this.props.selindex).show();
		}
	},
	render:function()
	{
		return (
			React.createElement("div",{id:"crews_vehicle_table"},
				this.props.data.map(function(arr,index){
					return React.createElement(Vehiclelist,{data:arr,index:index})
				})
			)
		);
	}
});

// 车辆基本信息
var Vehicleils = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
	},
	componentDidMount: function(){
		$("#crews_xingshizheng").wordLimit();
	},
	componentDidUpdate: function(){
		$("#crews_xingshizheng").wordLimit();
	},
	render:function()
	{
		var path = "";
		for(var i=0;i<this.props.data.photots.length;i++){
			if(this.props.data.photots[i].type == "车身"){
				path = this.props.data.photots[i].path;
			}
		}
			return (
				React.createElement("div",{id:"crews_vehicle_div"},
					React.createElement("div",{id:"crews_vehicle_divd1"},
						React.createElement("image",{src:path,id:"crews_image_max"}),
						React.createElement("div",{id:""},
							React.createElement("label",{id:""},"类型"),
							React.createElement("span",{id:""},this.props.data.carType)
						),
						React.createElement("div",{id:""},
							React.createElement("label",{id:""},"品牌型号"),
							React.createElement("span",{id:""},this.props.data.carBrand)
						),
						React.createElement("div",{id:""},
							React.createElement("label",{id:""},"颜色"),
							React.createElement("span",{id:""},this.props.data.carColor)
						),
						React.createElement("div",{id:""},
							React.createElement("label",{id:""},"车牌号码"),
							React.createElement("span",{id:""},this.props.data.carPlate)
						),
						React.createElement("div",{id:""},
							React.createElement("label",{id:""},"行驶证号码")
							// React.createElement("span",{id:"crews_xingshizheng"},this.props.data.carId)
						)
					),
					React.createElement("div",{id:"crews_vehicle_divd2"},
						React.createElement("div",{id:""},
							React.createElement("label",{id:""},"车主"),
							React.createElement("span",{id:""},this.props.data.ownerName)
						),
						React.createElement("div",{id:""},
							React.createElement("label",{id:""},"手机号码"),
							React.createElement("span",{id:""},this.props.data.ownerTel)
						),
						React.createElement("div",{id:""},
							React.createElement("label",{id:""},"身份证号码"),
							React.createElement("span",{id:""},this.props.data.ownerIdCode)
						),
						React.createElement("div",{id:""},
							React.createElement("label",{id:""},"驾驶员"),
							React.createElement("span",{id:""},this.props.data.driverName)
						),
						React.createElement("div",{id:""},
							React.createElement("label",{id:""},"手机号码"),
							React.createElement("span",{id:""},this.props.data.driverTel)
						),
						React.createElement("div",{id:""},
							React.createElement("label",{id:""},"身份证号码"),
							React.createElement("span",{id:""},this.props.data.driverIdCode)
						),
						React.createElement("div",{id:""},
							React.createElement("label",{id:""},"驾驶证号码"),
							React.createElement("span",{id:""},this.props.data.driverIdCode)
						),
						React.createElement("div",{id:""},
							React.createElement("label",{id:"label_remark_2"},"备注"),
							React.createElement("span",{id:"huanhang_1"},this.props.data.remark)
						)
					)
				)
			);
	}
});
// 车辆添加/修改
var VehicleInsertIsUpdate = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:wjjl,
			autolist:[],
			buildingsinsert:[],
			message:"",
			bodyimage:[],
			licenseplatenumber:[],
			licensenumber:[],
			vehiclelist:[]
		};
	},
	hanOnColse:function(){
		layer.confirm('您确定要放弃修改吗？', {
				btn: ['确定','取消'] //按钮
			},
		function(index){
			$("#crews_insert_fdiv").fadeOut(300);
			$("#crews_insert_div").animate({top:'-22px'},350);
			layer.close(index);
		});
	},
	componentDidUpdate: function(){
		$(".crews_vehicle_select").val(this.props.carType);		// 类型
	},
	componentDidMount: function(){
		var rules = {"sid":sid};
		var tmp = JSON.stringify(rules);
		// 查询数据字典车辆类型
		$.ajax({
			url:common_ip+"commonCode.do?action=listAll",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					for(var i=0;i<data.orderList.length;i++){
						if(data.orderList[i].typeId == "VehicleType"){
							this.setState({vehiclelist:data.orderList[i].list});
						}
					}
					// this.setState({buildingsinsert:data.pager.list});
				}else{
					layer.alert("查询失败"+data.errorMsg,{icon:2});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert("查询失败,请重新查询!");
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});

		// 进行修改操作,不显示图片可以直接保存
		if(this.props.photots != undefined){
			if(this.props.photots.length>=0){
				// 修改的图片不显示进行修改操作
				for(var i=0;i<this.props.photots.length;i++){
					if(this.props.photots[i].type == "车身"){
						this.state.bodyimage.push(this.props.photots[i]);
					}
					if(this.props.photots[i].type == "车牌"){
						this.state.licenseplatenumber.push(this.props.photots[i]);
					}
					if(this.props.photots[i].type == "行驶证"){
						this.state.licensenumber.push(this.props.photots[i]);
					}
				}
			}
		}

		$("#crews_insert_div").css({"width":"1100px"});
		$("#crews_insert_div").css({"height":"630px"});

		/*var _this = this;
		$(".crews_top_insert").click(function(){
			_this.setState({buildingsinsert:[]});
			_this.setState({autolist:[]});
		});
		$(".crews_update_div").click(function(){
			_this.setState({buildingsinsert:[]});
			_this.setState({autolist:[]});
		});*/
		if(this.props.buidinglist == undefined){
			return;
		}
		this.setState({autolist:this.props.buidinglist});
	},
	hanOnVInsertIsVUpdate: function(insertIsupdate){	// 添加/修改车辆信息
		var carPlate = $(".crews_vehicle_input3").val();	// 车牌号
		var carType = $(".crews_vehicle_select").val();		// 类型
		var carBrand = $(".crews_vehicle_input1").val();	// 品牌型号
		var carColor = $(".crews_vehicle_input2").val();	// 颜色
		var ownerName = $(".crews_vehicle_input5").val();	// 车主姓名
		var ownerTel = $(".crews_vehicle_input6").val();	// 车主联系方式
		var ownerIdCode = $(".crews_vehicle_input7").val();	// 车主身份证号码
		var driverName = $(".crews_vehicle_input8").val();	// 驾驶员姓名
		var driverTel = $(".crews_vehicle_input9").val();	// 驾驶员联系方式
		var driverIdCode = $(".crews_vehicle_input10").val();// 驾驶员身份证号
		var remark = $(".crews_vehicle_textarea").val();	// 备注

		this.state.message = "";
		// var yzNumber=/^[\u4E00-\u9FA5][\da-zA-Z]{6}$/;
		var yzNumber = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[警京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{0,1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
		if(carPlate != ""){
			if(!yzNumber.test(carPlate)) {
				this.setState({message: "车牌号格式错误！"});
				return;
			}
		}
		/*if(this.state.bodyimage.length <= 0 || this.state.licenseplatenumber == undefined){
			this.setState({message:"请上传车身照片"});
			return;
		}
		if(carBrand == ""){
			this.setState({message:"品牌型号不能为空"});
			return;
		}
		if(carColor == ""){
			this.setState({message:"颜色不能为空"});
			return;
		}

		if(this.state.licenseplatenumber.length <= 0 || this.state.licenseplatenumber == undefined){
			this.setState({message:"请上传车牌照片"});
			return;
		}
		if(this.state.licensenumber.length <= 0 || this.state.licenseplatenumber == undefined){
			this.setState({message:"请上传行驶证照片"});
			return;
		}
		if(ownerName == ""){
			this.setState({message:"车主姓名不能为空"});
			return;
		}
		if(ownerTel == ""){
			this.setState({message:"车主电话不能为空"});
			return;
		}

		if(ownerIdCode == ""){
			this.setState({message:"车主身份证不能为空"});
			return;
		}
		var yz=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
		if(!yz.test(ownerIdCode)){
			this.setState({message:"车主身份证号格式不正确"});
			return;
		}
		if(driverName == ""){
			this.setState({message:"驾驶员姓名不能为空"});
			return;
		}


		if(driverIdCode == ""){
			this.setState({message:"驾驶员身份证不能为空"});
			return;
		}
		if(!yz.test(driverIdCode)){
			this.setState({message:"驾驶员身份证号格式不正确"});
			return;
		}*/
		var yzphone=/^1[3|4|5|7|8]\d{9}$/;
		if(ownerTel!=""){
			if(!yzphone.test(ownerTel)){
				this.setState({message:"车主电话格式不正确"});
				return;
			}
		}
		if(driverTel!=""){
			if(!yzphone.test(driverTel)){
				this.setState({message:"驾驶员电话格式不正确"});
				return;
			}
		}
		var yz = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
		if(ownerIdCode != "") {
			if (!yz.test(ownerIdCode)) {
				this.setState({message: "车主身份证号格式不正确"});
				return;
			}
		}
		if(driverIdCode != ""){
			if(!yz.test(driverIdCode)){
				this.setState({message:"驾驶员身份证号格式不正确"});
				return;
			}
		}
		if(remark!=""){
			if(remark.length>200){
				this.setState({message:"备注长度不能超过200字"});
				return;
			}
		}
		// 关联的台账id集合
		var buildingList = [];
		for(var i=0;i<array.length;i++){
			buildingList.push(array[i].buildingId);
		}

		// 添加的图片弄成集合格式来更新或添加
		var imgList = [];
		if(this.state.bodyimage != "" && typeof(this.state.bodyimage) != undefined){
			imgList.push({"fileId":this.state.bodyimage[0].fileId,"typeCode":"车身"});
		}
		if(this.state.licenseplatenumber != "" && typeof(this.state.licenseplatenumber) != undefined){
			imgList.push({"fileId":this.state.licenseplatenumber[0].fileId,"typeCode":"车牌"});
		}
		if(this.state.licensenumber != "" && typeof(this.state.licensenumber) != undefined){
			imgList.push({"fileId":this.state.licensenumber[0].fileId,"typeCode":"行驶证"});
		}

		/*// 每个字段都只有一张照片时
		var imgList = [{"fileId":this.state.bodyimage[0].fileId,"typeCode":"车身"},
			           {"fileId":this.state.licenseplatenumber[0].fileId,"typeCode":"车牌"},
			           {"fileId":this.state.licensenumber[0].fileId,"typeCode":"行驶证"}];*/

		// 添加
		if(insertIsupdate == 1){
			rules = {"sid":sid,"carPlate":carPlate,"carType":carType,"carBrand":carBrand,"carColor":carColor,"ownerName":ownerName,"ownerTel":ownerTel,"ownerIdCode":ownerIdCode,
					 "driverName":driverName,"driverTel":driverTel,"driverIdCode":driverIdCode,"remark":remark,"imgList":imgList,"buildingList":buildingList};
		}

		// 修改
		if(insertIsupdate == 2){
			rules = {"sid":sid,"carPlate":carPlate,"carType":carType,"carBrand":carBrand,"carColor":carColor,"ownerName":ownerName,"ownerTel":ownerTel,"ownerIdCode":ownerIdCode,
				"driverName":driverName,"driverTel":driverTel,"driverIdCode":driverIdCode,"remark":remark,"imgList":imgList,"buildingList":buildingList,"carId":this.props.carId};
		}
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"badCar.do?action=save",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					layer.alert("保存成功!");
					$("#crews_insert_fdiv").css({"display":"none"});
					$("#crews_insert_div").animate({top:'-22px'});
					if(insertIsupdate == 1){
						nsEventBus.eventbus.broadcast("crews_insert",2);
					}
					if(insertIsupdate == 2){
						nsEventBus.eventbus.broadcast("crews_update",2);
					}
				}else{
					layer.alert("保存失败!"+data.errorMsg,{icon:2});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error);
//					console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
	},
	// 关键字搜索违建信息
	hanOnBuidingsSouce: function(){
		var uid = getCookie("uid");
		var keyword = $("#crews_keytext").val();
		var rules = {"sid":sid,"uid":uid,"pageNo":1,"pagesize":50,"keyword":keyword};
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"buildings.do?action=list",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					this.setState({buildingsinsert:data.pager.list});
				}else{
					layer.alert("查询失败"+data.errorMsg,{icon:2});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert("查询失败,请重新查询!");
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
	},
	hanOnVInsertClick: function(){
		// 添加车辆信息
		this.hanOnVInsertIsVUpdate(1);
	},
	hanOnVUpdateClick: function(){
		// 修改车辆信息
		this.hanOnVInsertIsVUpdate(2);
	},
	render:function()
	{
		// windows窗口中保持最新违建台账显示
		var _this = this;
		nsEventBus.eventbus.on("Illegallybuiltlist","Illegallybuiltlist",function(data){
			_this.setState({autolist:data});
		});
		// 车身照片
		nsEventBus.eventbus.on("UploadImage_updatebody","UploadImage_updatebody",function(bodyimagedata){
			_this.setState({bodyimage:bodyimagedata});
		});
		// 车牌号码照片
		nsEventBus.eventbus.on("UploadImage_updateplate","UploadImage_updateplate",function(plateimagedata){
			_this.setState({licenseplatenumber:plateimagedata});
		});
		// 行驶证号码照片
		nsEventBus.eventbus.on("UploadImage_updatelicense","UploadImage_updatelicense",function(licenseimagedata){
			_this.setState({licensenumber:licenseimagedata});
		});
		var bodyimgList = [];
		 var plateList = [];
		 var licenseList = [];
		 // 修改图片的图片展示
		 if(this.props.photots != undefined){
			 if(this.props.photots.length>=0){
				 // 修改的图片不显示进行修改操作
			 // 图片上传组件所需属性,现有问题,暂不使用
			 /*bodyimgList = [{fileId:this.props.photots[0].fileId,filePath:this.props.photots[0].path}]
			 plateList = [{fileId:this.props.photots[1].fileId,filePath:this.props.photots[1].path}]
			 licenseList = [{fileId:this.props.photots[2].fileId,filePath:this.props.photots[2].path}]*/
			 }
		 }

		/*var bodyimg = "";
		var plate = "";
		var license = "";
		for(var i=0;i<this.props.photots.length;i++){
			console.log(this.props.photots);
			if(this.props.photots[i].type == "车牌"){
				bodyimg = this.props.photots[i].thumPath;
			}
			if(this.props.photots[i].type == "车身"){
				plate = this.props.photots[i].thumPath;
			}
			if(this.props.photots[i].type == "行驶证"){
				license = this.props.photots[i].thumPath;
			}
		}*/
		return (
			React.createElement("div",{},
				React.createElement("div",{id:"crews_isinsert_top"},
					React.createElement("span",{className:"crews_isinsert_title"},""),
					React.createElement("button",{className:"crews_visinsert_clear",onClick:this.hanOnColse},"×")
				),
				React.createElement("div",{id:"crews_vehiclexq_div"},
					React.createElement("div",{className:"crews_vehiclexq_leftdiv1"},
						React.createElement("label",{className:"cvehicle_ches_image"},"车身照片"),
						React.createElement(UploadImage,{className:"notification-modal_input",imgList:bodyimgList,successNum:bodyimgList.length,mulSupported:false,uploadNum:1,tag:"body"})
						// React.createElement("image",{src:"http://192.168.0.94:9999"+plate})
					),
					React.createElement("div",{className:"crews_vehiclexq_leftdiv2"},
						React.createElement("label",{},"类型"),
						React.createElement("select",{className:"crews_vehicle_select"},
							this.state.vehiclelist.map(function(arr){
								return React.createElement("option",{value:arr.codeId},arr.codeName)
							})
						)
					),
					React.createElement("div",{className:"crews_vehiclexq_leftdiv3"},
						React.createElement("label",{},"品牌型号"),
						React.createElement("input",{type:"text",className:"crews_vehicle_input1"})
					),
					React.createElement("div",{className:"crews_vehiclexq_leftdiv4"},
						React.createElement("label",{},"颜色"),
						React.createElement("input",{type:"text",className:"crews_vehicle_input2"})
					),
					React.createElement("div",{className:"crews_vehiclexq_leftdiv5"},
						React.createElement("label",{},"车牌号码"),
						React.createElement("input",{type:"text",className:"crews_vehicle_input3"}),
						React.createElement(UploadImage,{className:"notification-modal_input",imgList:plateList,successNum:plateList.length,mulSupported:false,uploadNum:1,tag:"plate"})
						// React.createElement("image",{src:"http://192.168.0.94:9999"+bodyimg})
					),
					React.createElement("div",{className:"crews_vehiclexq_leftdiv6"},
						React.createElement("label",{},"行驶证号码"),
						// React.createElement("input",{type:"text",className:"crews_vehicle_input4"}),
						React.createElement(UploadImage,{className:"notification-modal_input",imgList:licenseList,successNum:licenseList.length,mulSupported:false,uploadNum:1,tag:"license"})
					),
					React.createElement("div",{className:"crews_vehiclexq_leftdiv7"},
						React.createElement("label",{},"车主"),
						React.createElement("input",{type:"text",className:"crews_vehicle_input5"})
					),
					React.createElement("div",{className:"crews_vehiclexq_leftdiv8"},
						React.createElement("label",{},"手机号码"),
						React.createElement("input",{type:"text",className:"crews_vehicle_input6"})
					),
					React.createElement("div",{className:"crews_vehiclexq_leftdiv9"},
						React.createElement("label",{},"身份证号码"),
						React.createElement("input",{type:"text",className:"crews_vehicle_input7"})
					),
					React.createElement("div",{className:"crews_vehiclexq_leftdiv10"},
						React.createElement("label",{},"驾驶员"),
						React.createElement("input",{type:"text",className:"crews_vehicle_input8"})
					),
					React.createElement("div",{className:"crews_vehiclexq_leftdiv11"},
						React.createElement("label",{},"手机号码"),
						React.createElement("input",{type:"text",className:"crews_vehicle_input9"})
					),
					React.createElement("div",{className:"crews_vehiclexq_leftdiv12"},
						React.createElement("label",{},"身份证号码"),
						React.createElement("input",{type:"text",className:"crews_vehicle_input10"})
					),
					/*React.createElement("div",{className:"crews_vehiclexq_leftdiv13"},
						React.createElement("label",{},"驾驶证号码"),
						React.createElement("input",{type:"text",className:"crews_vehicle_input11"})
					),*/
					React.createElement("div",{className:"crews_vehiclexq_leftdiv14"},
						React.createElement("div",{},"备注"),
						React.createElement("textarea",{className:"crews_vehicle_textarea"})
					)
				),
				React.createElement("div",{id:"crews_constructionrecord_zong"},
					React.createElement("div",{id:"crews_constructionrecord_cation"},
						React.createElement("label",{},"违建施工记录"),
						React.createElement("span",{},"(提示: 请到右侧搜索相关记录，单击即可添加至此)")
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
							return React.createElement(Illegallybuiltlist,{data:arr})
						})
					)
				),
				React.createElement("div",{className:"crews_vehicle_buttond1"},
					React.createElement("div",{className:"crews_vinsert_message"},this.state.message+" "),
					React.createElement("button",{className:"crews_vinsert_subbutton",onClick:this.hanOnVInsertClick},"保 存")
				),
				React.createElement("div",{className:"crews_vehicle_buttond2"},
					React.createElement("div",{className:"crews_vupdate_message"},this.state.message+" "),
					React.createElement("button",{className:"crews_vupdate_subbutton",onClick:this.hanOnVUpdateClick},"保 存")
				)
			)
		);
	}
});

// 当事人基本信息
var Partytails = React.createClass({
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
				React.createElement("div",{id:"crews_xiangqing_div"},
					React.createElement("div",{id:""},
						React.createElement("label",{id:""},"姓名"),
						React.createElement("span",{className:"crews_xianshi_span"},this.props.data.ownerName+"（"+ this.props.data.sexCode +"）")
					),
					React.createElement("div",{id:""},
						React.createElement("label",{id:""},"手机号"),
						React.createElement("span",{className:"crews_xianshi_span"},this.props.data.mobile)
					),
					React.createElement("div",{id:""},
						React.createElement("label",{id:""},"身份证号"),
						React.createElement("span",{className:"crews_xianshi_span"},this.props.data.ownerIdCode)
					),
					React.createElement("div",{id:""},
						React.createElement("label",{id:"label_remark_1"},"备注"),
						React.createElement("span",{id:"huanhang_1",className:"crews_xianshi_span"},this.props.data.remark)
					)
				)
			);
	}
});

// 当事人集合
var Partylist = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
	},
	hanOnMouseOut: function(){
		$(".crews_hmd_tr").removeClass("crews_buidings_hover");
		$(".crews_blacklist_td33 button:not(:eq("+ selindex +"))").hide();
	},
	hanOnMoveHover: function(){
		if($(".crews_hmd_tr:hover").index()-1 == selindex){
			return;
		}

		$(".crews_hmd_tr").removeClass("crews_buidings_hover");
		$(".crews_hmd_tr:hover").addClass("crews_buidings_hover");
		$(".crews_blacklist_td33 button:not(:eq("+ selindex +"))").hide();

		$(".crews_blacklist_td33 button").eq($(".crews_hmd_tr:hover").index()-1).show();
	},
	hanZiCrewsDelete: function(){
		nsEventBus.eventbus.broadcast("zifudelete",$(".crews_hmd_tr:hover").index());
	},
	hanOnHmdClick:function(e){
		$(".crews_hmd_tr").removeClass("crews_buidings_hover");
		$(".crews_hmd_tr").removeClass("backhovercolor");
		$(".crews_hmd_tr:hover").addClass("backhovercolor");

		// 下面两行无用
		selindex = $(".crews_hmd_tr:hover").index()-1;
		$(".crews_blacklist_td33 button:not(:eq("+ selindex +"))").hide();

		// 渲染当事人基本信息
		ReactDOM.render(React.createElement(Partytails,{data:this.props.data}),document.getElementById("crews_fun_inqiehuan"));
		// 当事人信息查询
		PartyAjax(this.props.data.ownerId);

		// 显示当事人列创建人和创建时间
		var datetime = this.props.data.createTimeFormat.substr(0,10);
		$("#crews_wjjl_name").text(this.props.data.ownerName+" 创建于 "+datetime);

		// 点中行的时候
		nsEventBus.eventbus.broadcast("crewsselindexe",[$(".crews_hmd_tr:hover").index(),3]);
	},
	componentDidMount: function(){
	},
	render:function()
	{
		return (
			React.createElement("tr",{className:"crews_hmd_tr",onClick:this.hanOnHmdClick,onMouseOver:this.hanOnMoveHover,onMouseOut:this.hanOnMouseOut},
				React.createElement("td",{className:"crews_blacklist_td11"},this.props.data.ownerName+"（"+this.props.data.sexCode+"）"),
				React.createElement("td",{className:"crews_blacklist_td22"},this.props.data.mobile)
				/*React.createElement("td",{className:"crews_blacklist_td33"},
					// React.createElement("button",{className:"remove_Mans",onClick:this.hanZiCrewsDelete},"×")
				)*/
			)
		);
	}
});

// 当事人表格
var Partytable = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
	},
	componentDidMount: function(){
		// 这里是为了实现更新的最新效果
		if(this.props.selindex >= 0){
			$(".crews_hmd_tr").eq(this.props.selindex).addClass("backhovercolor");
			$(".crews_blacklist_td33 button").eq(this.props.selindex).show();
		}
	},
	render:function()
	{
		return (
			React.createElement("table",{id:"crews_hmd_table"},
				React.createElement("tr",{className:"crews_trth1"},
					React.createElement("th",{className:"buidings_name_th1"},"姓名"),
					React.createElement("th",{},"手机号")
					// React.createElement("th",{style:{"width":"25px"}},"")
				),
				this.props.data.map(function(arr){
					return React.createElement(Partylist,{data:arr})
				})
			)
		);
	}
});

// 当事人信息查询
function PartyAjax(ownerId){
	var rules = {"sid":sid,"ownerId":ownerId};
	var tmp = JSON.stringify(rules);
	$.ajax({
		url:common_ip+"badOwner.do?action=get",
		dataType:'json',
		data:tmp,
		type:'post',
		contentType:"application/x-www-form-urlencoded",
		success: function(data){
			if(data.successFlag){
				// 返回的集合
				$("#crews_wjsgjl_zdiv").empty();
				ReactDOM.render(React.createElement(Ledgerrecords,{data:data.badOwner.buildings}),document.getElementById("crews_wjsgjl_zdiv"));
			}else{
				layer.alert("查询失败"+data.errorMsg,{icon:2});
			}
		}.bind(this),
		error: function(request, state, error){
			layer.alert("出现异常,请重新查询");
			console.error(this.props.url, state, error.toString());
		}.bind(this)
	});
}

// 相关违建台账集合
var Ledgerrecordslist = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
    },
	hanOnMouseOut: function(){
		$(".crews_wjsgjl_zddiv").removeClass("crews_buidings_hover");
	},
	hanOnMoveHover: function(){
		$(".crews_wjsgjl_zddiv").removeClass("crews_buidings_hover");
		$(".crews_wjsgjl_zddiv:hover").addClass("crews_buidings_hover");
	},
	thishanOnXiangQingClick: function(){
		// 跳转到台账详情
		window.location.href = "ledgerdetails.html?buildingId="+this.props.data.buildingId;
	},
	thishanOnXiangQingStatusClick: function(){
		// 跳转到档案详情
		window.location.href = "statistcss_buildingInfo.html?buildingId="+this.props.data.buildingId;
	},
    componentDidMount: function(){
		// 截取字符串
		$(".crews_buidings_length").wordLimit(32);
	},
	componentDidUpdate: function(){
		// 截取字符串
		$(".crews_buidings_length").wordLimit(32);
	},
	render:function()
	{
		// 判断是否已归档
		if(this.props.data.auditStatus != "已归档"){
			var backimage = "url('"+ judgeBinding(this.props.data.harmfulCode,"min") +"')";
			return (
				React.createElement("div",{className:"crews_wjsgjl_zddiv",onClick:this.thishanOnXiangQingClick,onMouseOver:this.hanOnMoveHover,onMouseOut:this.hanOnMouseOut},
					React.createElement("div",{className:"crews_wjsgjl_neirong2"},
						React.createElement("div",{className:"crews_imagestoggle1",style:{"background-image":backimage}}),
						React.createElement("div",{className:"crews_buidings_length"},
							React.createElement("label",{className:"crews_buidl_area1"},"【"+this.props.data.area1+"】"),
							React.createElement("span",{className:"crews_buidl_adress"},this.props.data.address)
						)
					),
					React.createElement("div",{className:""},
						React.createElement("div",{className:"crews_buidl_xq"},"台账详情 >")
					)
				)
			);
		}else{
			return (
				React.createElement("div",{className:"crews_wjsgjl_zddiv",onClick:this.thishanOnXiangQingStatusClick,onMouseOver:this.hanOnMoveHover,onMouseOut:this.hanOnMouseOut},
					React.createElement("div",{className:"crews_wjsgjl_neirong2"},
						React.createElement("div",{className:"crews_imagestoggle2"}),
						React.createElement("div",{className:"crews_buidings_length"},
							React.createElement("label",{className:"crews_buidl_area1"},"【"+this.props.data.area1+"】"),
							React.createElement("span",{className:"crews_buidl_adress"},this.props.data.address)
						)
					),
					React.createElement("div",{className:""},
						React.createElement("div",{className:"crews_buidl_xq"},"档案详情 >")
					)
				)
			);
		}
	}
});

// 相关违建台账详情组件
var Ledgerrecords = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
	},
	componentDidMount: function(){
	},
	render:function()
	{
		if(this.props.data.length <= 0){
			return(React.createElement("div",{className:"Ztitle_tips"},"暂无相关违建台账信息"))
		}else{
			return (
				React.createElement("div",{className:""},
					this.props.data.map(function(arr) {
						return React.createElement(Ledgerrecordslist,{data:arr})
					})
				)
			);
		}
	}
});

// 施工队基本信息
var Crewsdetails = React.createClass({
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
					React.createElement("div",{id:"crews_xiangqing_div"},
							React.createElement("div",{id:""},
									React.createElement("label",{id:""},"负责人"),
									React.createElement("span",{className:"crews_Crewsxianshi_span"},this.props.data.leader)
							),
							React.createElement("div",{id:""},
									React.createElement("label",{id:""},"手机号"),
									React.createElement("span",{className:"crews_Crewsxianshi_span"},this.props.data.leaderMobile)
							),
							React.createElement("div",{id:""},
									React.createElement("label",{id:""},"身份证号"),
									React.createElement("span",{className:"crews_Crewsxianshi_span"},this.props.data.leaderIdCode)
							),
							React.createElement("div",{id:""},
									React.createElement("label",{id:""},"备注"),
									React.createElement("span",{className:"crews_Crewsxianshi_span"},this.props.data.remark)
							)
					)
			);
	}
});

// 施工队删除
function crews_delete_update(crewsId,crewsName){
	var rules = {"sid":sid,"crewsId":crewsId,"crewsName":crewsName};
	var tmp = JSON.stringify(rules);
	$.ajax({
		url:common_ip+"badCrews.do?action=delete",
		dataType:'json',
		data:tmp,
		type:'post',
		contentType:"application/x-www-form-urlencoded",
		success: function(data){
			if(data.successFlag){
				layer.msg("删除成功",{icon:1});
				// 这个是为了×删除,现在无用
				selindex = -1;
				// 为了实现与添加一样的效果,但又不重复
				nsEventBus.eventbus.broadcast("crews_delete",1);
			}else{
				layer.alert("删除失败"+data.errorMsg,{icon:2});
			}
		}.bind(this),
		error: function(request, state, error){
			layer.alert("出现错误,请重新查询");
			console.error(this.props.url, state, error.toString());
		}.bind(this)
	});
}

// 车辆删除
function Vehicle_delete_update(carId,ownerName){
	var rules = {"sid":sid,"carId":carId,"ownerName":ownerName};
	var tmp = JSON.stringify(rules);
	$.ajax({
		url:common_ip+"badCar.do?action=delete",
		dataType:'json',
		data:tmp,
		type:'post',
		contentType:"application/x-www-form-urlencoded",
		success: function(data){
			if(data.successFlag){
				layer.msg("删除成功",{icon:1});
				// 这个是为了×删除,现在无用
				selindex = -1;
				// 为了实现与添加一样的效果,但又不重复
				nsEventBus.eventbus.broadcast("crews_delete",2);
			}else{
				layer.alert("删除失败"+data.errorMsg,{icon:2});
			}
		}.bind(this),
		error: function(request, state, error){
			layer.alert("出现错误,请重新查询");
			console.error(this.props.url, state, error.toString());
		}.bind(this)
	});
}

// 户主删除
function Party_delete_update(ownerId,ownerName){
	var rules = {"sid":sid,"ownerId":ownerId,"ownerName":ownerName};
	var tmp = JSON.stringify(rules);
	$.ajax({
		url:common_ip+"badOwner.do?action=delete",
		dataType:'json',
		data:tmp,
		type:'post',
		contentType:"application/x-www-form-urlencoded",
		success: function(data){
			if(data.successFlag){
				layer.msg("删除成功",{icon:1});
				// 这个是为了×删除,现在无用
				selindex = -1;
				// 为了实现与添加一样的效果,但又不重复
				nsEventBus.eventbus.broadcast("crews_delete",3);
			}else{
				layer.alert("删除失败"+data.errorMsg,{icon:2});
			}
		}.bind(this),
		error: function(request, state, error){
			layer.alert("出现错误,请重新查询");
			console.error(this.props.url, state, error.toString());
		}.bind(this)
	});
}


// 施工队黑名单添加/修改弹出框
function insertIsupdateModel(title,buidings){
	// 设置窗口全局变量为默认值
		array = [];
		index = [];

	// 判断标题是否为更新,如果为更新,则需要设置全局变量为当前数据所有的违建信息
	if(title != undefined){
		if(title.substr(0,2) == "更新"){
			for(var i=0;i<buidings.length;i++){
				array.push(buidings[i]);
			}
		}
	}

		$("#crews_insert_div").animate({scrollTop:0},100)
		$(".crews_isinsert_title").text(title);
		$("#crews_insert_fdiv").css({"z-index":"50"});
		$("#crews_insert_fdiv").fadeIn(300);
		$("#crews_insert_div").animate({top:'22px'},350);
}

// 设置分页显示的行数
var pagexian = 10;
var crewsname;

var tablelist = [];
var keyword = null;
// 表格
var Crews = React.createClass({
	getInitialState: function getInitialState() {
		return {
			pagecount:1,
			page:1,
			pagesize:13,
			funindex:-1,
			selindex:-1,
			dataa:[],
			data:[],
			source:"",		// 点击分页: 搜索内容保存起来
			buidinglist:[]
		};
    },
	// 施工队查询共用方法
    hanOnSelectPublic: function(fun,funtext){
		// 保存下来的搜索内容
		keyword = this.state.source;

    	var rules = {"sid":sid,"pageNo":this.state.page,"pageSize":this.state.pagesize,"keyword":keyword};
		var tmp = JSON.stringify(rules);
 		$.ajax({
 			url:common_ip+"badCrews.do?action=list",
			dataType:'json',
 			data:tmp,
 			type:'post',
 			contentType:"application/x-www-form-urlencoded",
 			success: function(data){
 				if(data.pager.list.length >= 0){
 					// 总页数
					this.setState({pagecount:data.pager.totalPage});
					this.setState({data:data.pager.list});

					// 更新数据以后保持最新效果
					if(funtext == "update"){
						// 施工队基本信息的更新
						$("#crews_fun_inqiehuan").empty();
						ReactDOM.render(React.createElement(Crewsdetails,{data:data.pager.list[this.state.selindex]}),document.getElementById("crews_fun_inqiehuan"));
					}
					// 恢复所有为默认
					if(funtext == "insert"){
						$("#crews_fun_inqiehuan").empty();
						$("#crews_wjsgjl_zdiv").empty();
					}

					// 施工队表格的最新效果
					$("#crews_ddiv_left2").empty();
					ReactDOM.render(React.createElement(Blacktable,{data:data.pager.list,selindex:this.state.selindex}),document.getElementById("crews_ddiv_left2"));
 				}else{
					layer.alert("查询失败"+data.errorMsg,{icon:2});
				}
 			}.bind(this),
 			error: function(request, state, error){
				layer.alert("出现错误,请重新查询");
				console.error(this.props.url, state, error.toString());
			}.bind(this)
 		});
    },
	// 施工队默认数据
    componentDidMount: function(){
		$("#crews_qiehuan_tops label").eq(0).css({"color":"#209BE0"});
		$("#crews_qiehuan_tops label").eq(0).addClass("funcaidanborderbutton");

		$("#crews_insert_fdiv").click(function(even){
			if(event.target==this){
			layer.confirm('您确定要放弃修改吗？', {
				btn: ['确定','取消'] //按钮
			},
			function(index){
				$("#crews_insert_fdiv").fadeOut(300);
				$("#crews_insert_div").animate({top:'-22px'},300);
				layer.close(index);
			});

				//event.stopPropgation()
			}
		})

		$("body").keydown(function(e) {
			if (e.keyCode == "13") {//keyCode=13是回车键
				$('.crews_top_select').click();
			}
		});

    	this.hanOnSelectPublic(0);
	},
	// 施工队,车辆,当事人分页查询
	handleSelect:function(event, selectedEvent){
		this.setState({selindex:-1});
		selindex = -1;
		this.state.page = selectedEvent.eventKey;
		// 1: 施工队    2: 车辆    3: 当事人
		if(this.state.funindex == 1 || this.state.funindex == -1){
			this.hanOnSelectPublic(1);
		}else if(this.state.funindex == 2){
			this.hanOnVehcommon_ipublic(1);
		}else if(this.state.funindex == 3){
			this.hanOnPartyPublic(1);
		}
	},
	// 施工队,车辆,当事人查询共用函数
	hanOnSouceClick: function(){
		// 查询条件
		this.state.source = $(".crews_sel_text").val();
		// 设置分页为默认值
		this.state.page = 1;
		// 设置选中下标为默认值
		this.state.selindex = -1;
		// 这个现在无用
		selindex = -1;
		// 菜单栏下标标识   1: 施工队    2: 车辆    3: 当事人
		if(this.state.funindex == 1 || this.state.funindex == -1){
			// 施工队查询
			this.hanOnSelectPublic(1);
		}else if(this.state.funindex == 2){
			// 车辆查询
			this.hanOnVehcommon_ipublic(1);
		}else if(this.state.funindex == 3){
			// 当事人查询
			this.hanOnPartyPublic(1);
		}
	},
	// 施工队/车辆
	hanOnisInsert:function(){
		// 添加
		$("#crews_insert_div").empty();
		// 调用窗口自适应函数
		this.windowsDefaults();

		// 菜单栏下标标识   1: 施工队    2: 车辆    3: 当事人
		if(this.state.funindex == 1 || this.state.funindex == -1){
			// 施工队windows窗口组件
			ReactDOM.render(React.createElement(CrewsInsertIsUpdate,{}),document.getElementById("crews_insert_div"));

			// 设置施工队所有未默认值
			$(".crews_xqinput_sgdmc").val("");
			$(".crews_xqinput_fzr").val("");
			$(".crews_xqinput_sjh").val("");
			$(".crews_xqinput_sfzh").val("");
			$(".crews_xqinput_bz").val("");

			// 窗口调用
			insertIsupdateModel("添加-------施工队");
			$(".crews_insert_message").text("");

			//	因为用了个笨方法,是两个按钮，两个错误提示，这里显示新增按钮
			$(".crews_isinsert_subbutton,.crews_insert_message").show();
			$(".crews_isupdate_subbutton,.crews_update_message").hide();
		}else if(this.state.funindex == 2){
			// 车辆windows窗口组件
			ReactDOM.render(React.createElement(VehicleInsertIsUpdate,{}),document.getElementById("crews_insert_div"));
			// 窗口调用
			insertIsupdateModel("添加-------车辆");
			//	因为用了个笨方法,是两个按钮，两个错误提示，这里显示新增按钮
			$(".crews_vupdate_subbutton,.crews_vupdate_message").hide();
			$(".crews_vinsert_subbutton,.crews_vinsert_message").show();
		}
	},
	// 施工队/车辆/当事人更新
	hanOnisUpdate:function(){
		if(this.state.selindex == -1){
			layer.alert("请选择你要更新的数据!");
			return;
		}

		// 移除窗口节点
		$("#crews_insert_div").empty();
		// 调用窗口自适应函数
		this.windowsDefaults();

		// 菜单栏下标标识   1: 施工队    2: 车辆    3: 当事人
		if(this.state.funindex == 1 || this.state.funindex == -1){
			// 施工队windows窗口组件
			$("#crews_insert_div").empty();
			ReactDOM.render(React.createElement(CrewsInsertIsUpdate,{crewsId:this.state.data[this.state.selindex].crewsId,buidinglist:this.state.buidinglist}),document.getElementById("crews_insert_div"));

			// 设置窗口内容的默认值
			$(".crews_xqinput_sgdmc").val(this.state.data[this.state.selindex].crewsName);		// 施工队名称
			$(".crews_xqinput_fzr").val(this.state.data[this.state.selindex].leader);			// 负责人id
			$(".crews_xqinput_sjh").val(this.state.data[this.state.selindex].leaderMobile);		// 手机号
			$(".crews_xqinput_sfzh").val(this.state.data[this.state.selindex].leaderIdCode);	// 身份证号
			$(".crews_xqinput_bz").val(this.state.data[this.state.selindex].remark);			// 备注

			// 调用窗口
			insertIsupdateModel("更新-------施工队",this.state.buidinglist);
			$(".crews_insert_message").text("");

			$(".crews_isupdate_subbutton,.crews_update_message").show();
			$(".crews_isinsert_subbutton,.crews_insert_message").hide();
		}else if(this.state.funindex == 2){
			// 车辆windows窗口组件
			ReactDOM.render(React.createElement(VehicleInsertIsUpdate,{carId:this.state.data[this.state.selindex].carId,photots:this.state.data[this.state.selindex].photots,buidinglist:this.state.buidinglist,carType:this.state.data[this.state.selindex].carType}),document.getElementById("crews_insert_div"));
			// 调用窗口函数
			insertIsupdateModel("更新-------车辆",this.state.buidinglist);

			// 设置窗口内容的默认值
			// $(".crews_vehicle_select").val(this.state.data[this.state.selindex].carType);	// 类型
			$(".crews_vehicle_input3").val(this.state.data[this.state.selindex].carPlate);	// 车牌号
			// $(".crews_vehicle_input4").val(this.state.data[this.state.selindex].carId);	// 行驶证号码
			$(".crews_vehicle_input1").val(this.state.data[this.state.selindex].carBrand);	// 品牌型号
			$(".crews_vehicle_input2").val(this.state.data[this.state.selindex].carColor);	// 颜色
			$(".crews_vehicle_input5").val(this.state.data[this.state.selindex].ownerName);	// 车主姓名
			$(".crews_vehicle_input6").val(this.state.data[this.state.selindex].ownerTel);	// 车主联系方式
			$(".crews_vehicle_input7").val(this.state.data[this.state.selindex].ownerIdCode);	// 车主身份证号码
			$(".crews_vehicle_input8").val(this.state.data[this.state.selindex].driverName);	// 驾驶员姓名
			$(".crews_vehicle_input9").val(this.state.data[this.state.selindex].driverTel);	// 驾驶员联系方式
			$(".crews_vehicle_input10").val(this.state.data[this.state.selindex].driverIdCode);// 驾驶员身份证号
			$(".crews_vehicle_textarea").val(this.state.data[this.state.selindex].remark);	// 备注

			$(".crews_vupdate_subbutton,.crews_vupdate_message").show();
			$(".crews_vinsert_subbutton,.crews_vinsert_message").hide();
		}else if(this.state.funindex == 3){
			// 当事人windows窗口组件
			$("#crews_insert_div").empty();
			ReactDOM.render(React.createElement(PartyUpdate,{ownerId:this.state.data[this.state.selindex].ownerId}),document.getElementById("crews_insert_div"));

			// 调用窗口函数
			insertIsupdateModel();
			// 设置窗口内容的默认值
			$(".Party_xdiv2 span").text(this.state.data[this.state.selindex].ownerName);
			$(".Party_xdiv3 select").val(this.state.data[this.state.selindex].sexCode);
			$(".Party_xdiv4 span").text(this.state.data[this.state.selindex].mobile);
			$(".Party_xdiv5 span").text(this.state.data[this.state.selindex].ownerIdCode);
			$(".Party_xdiv6 textarea").val(this.state.data[this.state.selindex].remark);

		}
	},
	hanOnDeleteById: function(){	// 删除函数
		var _this = this;
		if(this.state.selindex == -1){
			layer.alert("请选择你要删除的数据!");
			return;
		}
		layer.confirm('您确定要删除该记录嘛？', {
				btn: ['确定','取消'] //按钮
		}, function(index) {
			 // 菜单栏下标标识   1: 施工队    2: 车辆    3: 当事人
			 if(_this.state.funindex == 1 || _this.state.funindex == -1){
				 // 调用施工队删除函数,并传入指定施工队id
			 	crews_delete_update(_this.state.data[_this.state.selindex].crewsId,_this.state.data[_this.state.selindex].crewsName);
			 }else if(_this.state.funindex == 2){
				 // 调用车辆删除函数,并传入指定车辆id
				 Vehicle_delete_update(_this.state.data[_this.state.selindex].carId,_this.state.data[_this.state.selindex].ownerName);
			 }else if(_this.state.funindex == 3){
				 // 调用当事人删除函数,并传入指定当事人id
				 Party_delete_update(_this.state.data[_this.state.selindex].ownerId,_this.state.data[_this.state.selindex].ownerName);
			 }
			layer.close(index);
		})

	},
	// 添加/修改窗口自适应
	windowsDefaults: function(){
		function ee(){
			if(1300 > $(window).width()){
				$("#crews_insert_fdiv").css("width",1300+"px");
			}else{
				$("#crews_insert_fdiv").css("width",$(window).width()+"px");
			}

			if($("body").height() > $(window).height()){
				if($("#crews_insert_div").height() >= $("body").height()){
					$("#crews_insert_fdiv").css("height",$("#crews_insert_div").height()+26+"px");
					return;
				}
				$("#crews_insert_fdiv").css("height",$("body").height()+"px");
			}else{
				$("#crews_insert_fdiv").css("height",$(window).height()+"px");
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
	// 菜单栏样式
	hanOnFunCsspublic: function(event){
		$("#crews_qiehuan_tops label").css({"color":"#ADADAD"});
		$("#crews_qiehuan_tops label").removeClass("funcaidanborderbutton");
		$(event.target).css({"color":"#209BE0"});
		$(event.target).addClass("funcaidanborderbutton");
	},
	// 施工队菜单
	hanOnTeamClick: function(event){
		// 设置当前页数为默认值
		this.state.page = 1;

		// 因为是默认菜单,选择两次拦截,当前菜单只能选中一次
		if(this.state.funindex == -1){
			return;
		}
		if(this.state.funindex == 1){
			return;
		}

		// 设置搜索条件为空
		this.state.source = "";
		$(".crews_sel_text").val("");

		$("#crews_wjjl_name").text("");
		$("#crews_fun_inqiehuan").css({"height":"220px"});
		$("#crews_wjsgjl_zdiv").css({"height":"339px"});

		// 设置当前选中列下标默认值
		this.state.selindex = -1;
		// 设置当前菜单标识
		this.state.funindex = 1;
		// 施工队查询函数
		this.hanOnSelectPublic(0);
		// 这个是×删除,现在无用
		selindex = -1;

		$("#crewa_shigonduidiv").show();
		$(".crews_top_insert").show();
		$("#crews_div_xid21 label").text("施工队详情");
		// 菜单切换效果函数
		this.hanOnFunCsspublic(event);
		$("#crews_div_xid22").show();
		$("#crews_wjsgjl_cation").text("违建信息");

		// 移除所有dom节点
		$("#crews_wjsgjl_zdiv").empty();
		$("#crews_fun_inqiehuan").empty();
		$("#crews_ddiv_left2").empty();
	},
	// 车辆菜单共用方法
	hanOnVehcommon_ipublic: function(fun,funtext){
		// 保存下来的搜索条件
		keyword = this.state.source;

		var rules = {"sid":sid,"pageNo":this.state.page,"pageSize":9,"keyword":keyword};
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"badCar.do?action=list",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.badCarPager.list.length >= 0){
					// 总页数
					this.setState({pagecount:data.badCarPager.totalPage});
					this.setState({data:data.badCarPager.list});

					// 车辆修改的时候,保存最新效果
					if(funtext == "update"){
						$("#crews_fun_inqiehuan").empty();
						ReactDOM.render(React.createElement(Vehicleils,{data:data.badCarPager.list[this.state.selindex],fungong:"update"}),document.getElementById("crews_fun_inqiehuan"));
					}
					// 车辆更新的时候,恢复所有为默认
					if(funtext == "insert"){
						$("#crews_fun_inqiehuan").empty();
						$("#crews_wjsgjl_zdiv").empty();
					}

					// 表格组件
					$("#crews_ddiv_left2").empty();
					ReactDOM.render(React.createElement(Vehicletable,{data:data.badCarPager.list,selindex:this.state.selindex}),document.getElementById("crews_ddiv_left2"));
				}else{
					layer.alert("车辆查询失败"+data.errorMsg,{icon:2});
				}
			}.bind(this),
			error: function(request, state, error){
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
	},
	// 车辆菜单
	hanOnVehicleClick: function(event){
		// 设置分页为默认
		this.state.page = 1;

		// 如果选中过一次当前菜单,则无法选中第二次
		if(this.state.funindex == 2){
			return;
		}

		// 设置搜索条件为空
		this.state.source = "";
		// 设置所有为默认值,这个可以不用管
		$(".crews_sel_text").val("");

		$("#crewa_shigonduidiv").text("");
		$("#crews_wjjl_name").text("");

		$("#crews_fun_inqiehuan").css({"height":"427px"});
		$("#crews_wjsgjl_zdiv").css({"height":"175px"});

		// 设置选中的下标为默认值
		this.state.selindex = -1;
		// 设置为当前菜单的标识
		this.state.funindex = 2;
		// 车辆查询函数
		this.hanOnVehcommon_ipublic(0);
		// 这个是给×删除用的，现在无用
		selindex = -1;

		$("#crewa_shigonduidiv").hide();
		// 菜单栏切换的效果函数
		this.hanOnFunCsspublic(event);
		$("#crews_div_xid21 label").text("车辆详情");
		$("#crews_div_xid22").hide();
		$(".crews_top_insert").show();

		// 移除dom节点
		$("#crews_fun_inqiehuan").empty();
		$("#crews_ddiv_left2").empty();
		$("#crews_wjsgjl_zdiv").empty();
	},
	// 当事人共用方法查询
	hanOnPartyPublic: function(fun,funtext){
		// 保存下来的查询条件
		keyword = this.state.source;

		var rules = {"sid":sid,"pageNo":this.state.page,"pageSize":this.state.pagesize,"keyword":keyword};
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"badOwner.do?action=list",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.badOwnerPager.list.length>=0){
					// 总页数
					this.setState({pagecount:data.badOwnerPager.totalPage});
					this.setState({data:data.badOwnerPager.list});

					// 修改的时候，保持当事人基本信息为最新数据
					if(funtext == "update"){
						$("#crews_fun_inqiehuan").empty();
						ReactDOM.render(React.createElement(Partytails,{data:data.badOwnerPager.list[this.state.selindex]}),document.getElementById("crews_fun_inqiehuan"));
					}
					// 添加的时候，恢复所有为默认值
					if(funtext == "insert"){
						$("#crews_fun_inqiehuan").empty();
						$("#crews_wjsgjl_zdiv").empty();
					}
					// 当事人表格的最新效果
					$("#crews_ddiv_left2").empty();
					ReactDOM.render(React.createElement(Partytable,{data:data.badOwnerPager.list,selindex:this.state.selindex}),document.getElementById("crews_ddiv_left2"));
				}else{
					layer.alert("当事人查询失败"+data.errorMsg,{icon:2});
				}
			}.bind(this),
			error: function(request, state, error){
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
	},
	// 当事人菜单
	hanOnPartyClick: function(event){
		// 设置分页为默认
		this.state.page = 1;

		// 如果选中过一次当前菜单,则无法选中第二次
		if(this.state.funindex == 3){
			return;
		}
		// 设置搜索条件为空
		this.state.source = "";
		// 设置所有为默认值,这个可以不用管
		$(".crews_sel_text").val("");

		$("#crewa_shigonduidiv").text("");
		$("#crews_wjjl_name").text("");

		$("#crews_fun_inqiehuan").css({"height":"236px"});
		$("#crews_wjsgjl_zdiv").css({"height":"365px"});

		// 当事人查询,函数属性无用
		this.hanOnPartyPublic(0);
		// 设置选中下标为默认值
		this.state.selindex = -1;
		// 设置当前菜单为当事人
		this.state.funindex = 3;
		// 菜单栏切换样式
		this.hanOnFunCsspublic(event);
		// 这个是给×删除用的，现在无用
		selindex = -1;

		// 都是设置为默认值
		$("#crewa_shigonduidiv").hide();
		$(".crews_top_insert").hide();
		$("#crews_div_xid21 label").text("当事人详情");
		$("#crews_div_xid22").hide();
		$("#crews_wjsgjl_cation").text("相关违建");

		// 移除组件
		$("#crews_wjsgjl_zdiv").empty();
		$("#crews_fun_inqiehuan").empty();
		$("#crews_ddiv_left2").empty();
	},
	render:function()
	{
		var ownerName;
		var buildingdatetime;
		var ee;
		var _this = this;
		// 相关联的违建信息
		nsEventBus.eventbus.on("buidings_insert_all","buidings_insert_all",function(buidings){
			_this.state.buidinglist = buidings;
		})

		// 点击菜单内容列的时候
		nsEventBus.eventbus.on("crewsselindexe","crewsselindexe",function(selindex){
			// $("#crews_wjjl_name").text("");

			// 参数1: 对应列下标	  参数2: 相应菜单标识
			$(".crews_wjsgjl_zddiv").css({"background-color":"#FFF"});
			var indexfun = selindex[1];
			_this.state.buildingId = -1;
			var selindex2 = selindex[0]-1;
			if(_this.state.selindex == -1){
				// 一开始请求一次
				_this.setState({selindex:selindex2});
				return;
			}
			_this.setState({selindex:selindex2});
			// 设置不能重复请求选中的数据
			if(_this.state.selindex != selindex2){
				// 渲染选中的页面
			}
		});
		// 删除指定行
		nsEventBus.eventbus.on("zifudelete","zifudelete",function(selindex){
			if(selindex == undefined){
				selindex = 0;
			}
			_this.state.selindex = selindex;
			_this.hanOnDeleteById();
		});
		// 删除成功后的显示效果
		nsEventBus.eventbus.on("crews_delete","crews_delete",function(funindex){
			_this.state.selindex = -1;
			_this.state.page = 1;
			$("#crews_wjjl_name").text("");

			// 菜单栏下标标识   1: 施工队    2: 车辆    3: 当事人
			// 和insert是一样的刷新,但不想重复
			if(funindex == 1) {
				$("#crewa_shigonduidiv").text("");
				_this.hanOnSelectPublic(0,"insert");
			}else if(funindex == 2){
				_this.hanOnVehcommon_ipublic(0,"insert");
			}else if(funindex == 3){
				_this.hanOnPartyPublic(0,"insert");
			}
		});
		// 添加成功后的显示效果
		nsEventBus.eventbus.on("crews_insert","crews_insert",function(funindex){
			_this.state.selindex = -1;
			_this.state.page = 1;
			selindex = -1;

			$("#crews_wjjl_name").text("");

			// 菜单栏下标标识   1: 施工队    2: 车辆    3: 当事人
			if(funindex == 1) {
				$("#crewa_shigonduidiv").text("");
				_this.hanOnSelectPublic(0,"insert");
			}else if(funindex == 2){
				_this.hanOnVehcommon_ipublic(0,"insert");
			}else if(funindex == 3){
				_this.hanOnPartyPublic(0,"insert");
			}
		});
		// 使更新的时候，不刷新页面并保留选中行, 更新成功后的显示效果
		nsEventBus.eventbus.on("crews_update","crews_update",function(funindex){
			// 菜单栏下标标识   1: 施工队    2: 车辆    3: 当事人
			if(funindex == 1) {
				// $("#crews_fun_inqiehuan").empty();
				_this.hanOnSelectPublic(0, "update");
			}else if(funindex == 2){
				_this.hanOnVehcommon_ipublic(0, "update");
			}else if(funindex == 3){
				_this.hanOnPartyPublic(0,"update");
			}
		});
			return (
					React.createElement("div",{id:"crews_div_fid"},
						React.createElement("div",{id:"crews_div_xid1"},
							React.createElement("div",{id:"crews_qiehuan_tops"},
								React.createElement("label",{id:"crews_team_fun",onClick:this.hanOnTeamClick},"施工队"),
								React.createElement("label",{id:"crews_vehicle_fun",onClick:this.hanOnVehicleClick},"车辆"),
								React.createElement("label",{id:"crews_party_fun",onClick:this.hanOnPartyClick},"当事人")
							),
							React.createElement("div",{id:""},
									React.createElement("div",{id:"crews_select_top"},
											React.createElement(Input,{type:"text",className:"crews_sel_text",placeholder:"关键字..."}),
											React.createElement("button",{className:"crews_top_select",onClick:this.hanOnSouceClick},"查询"),
											React.createElement("button",{className:"crews_top_insert",onClick:this.hanOnisInsert},"+ 添加"),
											React.createElement("button",{className:"crews_top_delete",onClick:this.hanOnDeleteById},"× 删除")
									),
									React.createElement("div",{id:"crews_div_left2"},
											React.createElement("div",{id:"crews_ddiv_left2"}
											),
											React.createElement("div",{id:"crews_hmd_feny"},
													React.createElement(Pagination,{
														  prev: true,
														  next: true,
														  first: '第一页',
														  last: '最后一页',
														  ellcommon_ipsis: true,
														  boundaryLinks: true,
														  items: this.state.pagecount,
														  maxButtons: 5,
														  activePage:this.state.page,
														  onSelect: this.handleSelect}
													)
											)
									)
							)
						),
						React.createElement("div",{id:"crews_div_xid2"},
							React.createElement("div",{id:"crews_wjsgjl_div"},
								React.createElement("div",{id:"crews_div_xid21"},
									React.createElement("label",{},"施工队详情"),
									React.createElement("button",{className:"crews_update_div",onClick:this.hanOnisUpdate},
										React.createElement("image",{src:"../images/updateblue.png",className:"crews_top_updateimage"}),
										React.createElement("span",{},"编辑")
									)
								),
								React.createElement("div",{id:"crews_div_xid23"},
									React.createElement("div",{id:"crews_detailed_div"},
											React.createElement("div",{id:"crewa_shigonduidiv"}),
											React.createElement("div",{id:"crews_detailed_ddiv"},"基本信息"),
											React.createElement("div",{id:"crews_fun_inqiehuan"}

											)
									),
									React.createElement("div",{id:"crews_wjsgjl_cation"},"违建记录"),
									React.createElement("div",{id:"crews_wjsgjl_zdiv"}
									)
								),
								React.createElement("div",{id:"crews_wjjl_name"}
								),
								React.createElement("div",{id:"crews_insert_fdiv"},
									React.createElement("div",{id:"crews_insert_div"}
									)
								)
							)
						)
					)
			);
	}
});

// ReactDOM.render(React.createElement(Crews),document.getElementById("crewsdiv"));