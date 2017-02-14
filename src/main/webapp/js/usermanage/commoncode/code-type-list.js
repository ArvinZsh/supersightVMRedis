
var Input = window.Input || ReactBootstrap.Input;

var stopFlag = "";

// 禁用颜色: 为了判断方便,请在每个逗号后面打个空格
var ishiddencolor = "rgb(192, 192, 192)";

var selindex = -1;
var Codetypelistdata = React.createClass({
	getInitialState: function getInitialState() {
		return {
			isStopped:false
		};
	},
	hanOnListClick:function(){
		stopFlag = this.props.data.stopFlag;
		nsEventBus.eventbus.broadcast("commlist_righthover",$(".tr_codeyou:hover").index());

		$(".tr_codeyou:hover").removeClass("right_tr_hover_back_color");
		$(".tr_codeyou").removeClass("rightbackcolor2");

		$(".tr_codeyou:hover").addClass("rightbackcolor2");
		selindex = $(".tr_codeyou:hover").index();
	},
	hanOnMoveHover: function () {
		if($(".tr_codeyou:hover").index() == selindex){
			return;
		}
		$(".tr_codeyou:hover").addClass("right_tr_hover_back_color");
	},
	hanOnMouseOut: function(){
		$(".tr_codeyou").removeClass("right_tr_hover_back_color");
	},
	componentDidMount: function(){
	},
	render:function(){
		var back = "";
		if(this.props.data.stopFlag){
			back = ishiddencolor;
		}
			if($(".condetype_buttom_checkbox").attr("checked") == "checked"){
				return (
					React.createElement("div", {className: "tr_codeyou", id: "tr_colors",style:{"background-color":back}, onClick: this.hanOnListClick,onMouseOver:this.hanOnMoveHover,onMouseOut:this.hanOnMouseOut},
						React.createElement("label", {className: "codetype_td1"}, this.props.data.typeId),
						React.createElement("label", {className: "codetype_td2"}, this.props.data.codeId),
						React.createElement("label", {className: "codetype_td3"}, this.props.data.codeName)
					)
				);
			}else{
				if(this.props.data.stopFlag == false){
					return (
						React.createElement("div", {className: "tr_codeyou", id: "tr_colors", onClick: this.hanOnListClick,onMouseOver:this.hanOnMoveHover,onMouseOut:this.hanOnMouseOut},
							React.createElement("label", {className: "codetype_td1"}, this.props.data.typeId),
							React.createElement("label", {className: "codetype_td2"}, this.props.data.codeId),
							React.createElement("label", {className: "codetype_td3"}, this.props.data.codeName)
						)
					);
				}else{
					return (React.createElement("div"))
				}
			}
	}
});

function windwosmodel(title){
	$("#codetypelist_insert_div").animate({scrollTop:0},100)
	$(".codetypelist_insert_ddivlabel").text(title);
	$("#codetypelist_insert_fdiv").fadeIn(300);
	$("#codetypelist_insert_div").animate({top:'22px'},350);
}

var cidetyoekust = [];
var Codetypelist = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:[],
			typeId:"",
			selindex:-1,
			fun:"",
			yingcang:false,
		};
	},
	isopen:function(){
		if(this.state.typeId ==""){
			layer.alert("请选择元素!");
			return;
		}
		windwosmodel("保 存 内 容");
		$(".codetypelist_insert_input1").val(this.state.typeId);
		$(".codetypelist_insert_input2").val("");
		$(".codetypelist_insert_input3").val("");
		this.setState({fun:"add"})
	},
	isxiuopen:function(){
		if(this.state.selindex == -1){
			layer.alert("未点中任何内容!");
			return;
		}
		if(stopFlag){
			//layer.alert("抱歉,该元素已经禁用!");
			return;
		}

		windwosmodel("编 辑 内 容");

		$(".codetypelist_insert_input1").val(this.state.data[this.state.selindex].typeId);
		$(".codetypelist_insert_input3").val(this.state.data[this.state.selindex].codeName);
		this.setState({fun:"edit"})
	},
	colse:function(){
		$("#codetypelist_insert_div").animate({scrollTop:0},100)
		$("#codetypelist_insert_div").animate({top:'-22px'},300);
		$("#codetypelist_insert_fdiv").fadeOut(300);
	},
	hanOnAddisUpdate: function(){
		var itemId;
		var typeId = $(".codetypelist_insert_input1").val();
		var codeName = $(".codetypelist_insert_input3").val();
		$(".codetypelist_insert_span").eq(0).text("");
		$(".codetypelist_insert_span").eq(1).text("");
		if(typeId == ""){
			$(".codetypelist_insert_span").eq(0).text("类型不能为空");
			return;
		}
		if(codeName == ""){
			$(".codetypelist_insert_span").eq(1).text("值不能为空");
			return;
		}
		if(codeName.length>36){
			$(".codetypelist_insert_span").eq(1).text("值不超过36字");
			return;
		}

		if(this.state.fun == "edit") {
			itemId = this.state.data[this.state.selindex].itemId;
		}
		console.log(typeId);
		var sid = getCookie("sid");
		var parentId="";
		if(this.state.data.length<=0){
			parentId="ROOT";
		}else{
			parentId=this.state.data[0].parentId
		}
		var rules = {"sid":sid,"typeId":typeId,"itemId":itemId,"parentId":parentId,"codeId":codeName,"codeName":codeName};

		var tmp  = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"commonCode.do?action=save",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					$("#codetypelist_insert_fdiv").hide();
					if(this.state.fun == "add") {
						layer.msg("保存成功!!",{icon:1,title:"成功"});
					}
					if(this.state.fun == "edit") {
						layer.msg("编辑成功!",{icon:1,title:"成功"});
					}
					window.location.reload();
				}else{
					layer.alert(data.errorMsg,{icon:2,title:"错误"});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error);
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
	},
	hanOnHidden:function(){
		var tr = document.getElementsByClassName("tr_codeyou");
		var backcolor = "";
		if(typeof(tr[this.state.selindex]) != "undefined"){
			backcolor = tr[this.state.selindex].style.backgroundColor;
		}
		if(this.state.selindex == -1){
			layer.alert("未选中元素!",{icon:2,title:"错误"});
			return;
		}
		if(backcolor == ishiddencolor){
			layer.alert("抱歉,该元素已经禁用!",{icon:2,title:"错误"});
			return;
		}
		var sid = getCookie("sid");
		var rules = {"sid":sid,"typeId":this.state.data[this.state.selindex].typeId,"itemId":this.state.data[this.state.selindex].itemId};
		var tmp  = JSON.stringify(rules);
		layer.confirm('您是否要停用该关键字？', {
				btn: ['确定','取消'] //按钮
			}, function() {
				$.ajax({
					url:common_ip+"commonCode.do?action=stop",
					dataType:'json',
					data:tmp,
					type:'post',
					contentType:"application/x-www-form-urlencoded",
					success: function(data){
						if(data.successFlag){
							layer.msg("停用成功",{icon:1});
							window.location.reload();
						}else{
							layer.alert("停用失败!"+data.errorMsg,{icon:2,title:"错误"});
						}
					}.bind(this),
					error: function(request, state, error){
						layer.alert(error,{icon:2,title:"错误"});
						console.error(this.props.url, state, error.toString());
					}.bind(this)
				});
		});
	},
	hanOnIsToggleClick: function () {
		this.setState({yingcang:true});
	},
	windwoszishiying: function(){
		function ee(){
			if(1300 > $(window).width()){
				$("#codetypelist_insert_fdiv").css("width",1300+"px");
			}else{
				$("#codetypelist_insert_fdiv").css("width",$(window).width()+"px");
			}

			if($("body").height() > $(window).height()){
				if($("#codetypelist_insert_div").height() >= $("body").height()){
					$("#codetypelist_insert_fdiv").css("height",$(".buiddings_borwsse_dierji3").height()+26+"px");
					return;
				}
				$("#codetypelist_insert_fdiv").css("height",$("body").height()+"px");
			}else{
				$("#codetypelist_insert_fdiv").css("height",$(window).height()+"px");
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
	componentDidMount:function(){
		$("#codetypelist_insert_fdiv").click(function(even){
			if(event.target==this){
				$("#codetypelist_insert_fdiv").fadeOut(300);
				$("#codetypelist_insert_div").animate({top:'-22px'},300);
			}
		})


		this.windwoszishiying();
	},
	render:function render()
	{
		var _this = this;
		nsEventBus.eventbus.on("comm_and_codetyepe","comm_and_codetyepe",function(dataa){
			var data = dataa[0];

			$(".tr_codeyou").removeClass("rightbackcolor")
			_this.state.selindex = dataa[1];
			_this.setState({data:data.list});
			_this.setState({typeId:data.typeId});
			cidetyoekust = data;
		});
		nsEventBus.eventbus.on("commlist_righthover","commlist_righthover",function(index){
			if(index == undefined){
				index = 0;
			}
			_this.setState({selindex:index})
		});
		return (
			React.createElement("div",{className:"codetypelist"},
				React.createElement("div",{className:"edit_div"},
					React.createElement("button",{className:"codetype_add_button",onClick:this.isopen},"+添加"),
					React.createElement("button",{className:"codetype_edit_button",onClick:this.isxiuopen},"编 辑")
				),
				React.createElement("div",{id:"codetypelist2"},
					React.createElement("div",{id:"tableid2"},
						React.createElement("label",{className:"codetype_td4"},"类型"),
						React.createElement("label",{className:"codetype_td5"},"关键字"),
						React.createElement("label",{className:"codetype_td6"},"值")
					),
					React.createElement("div",{id:"codeguidong"},
						this.state.data.map(function(array,index){
							return React.createElement(Codetypelistdata,{data:array,index:index})
						})
					)
				),
				React.createElement("div",{className:"condetype_buttom_div"},
					React.createElement(Input,{className:"condetype_buttom_checkbox",id:"isenable",type:"checkbox",onClick:this.hanOnIsToggleClick}),
					React.createElement("label",{className:"condetype_buttom_lable"},"显示已停用关键字"),
					React.createElement("button",{className:"condetype_buttom_button",onClick:this.hanOnHidden},"停 用")
				),
				React.createElement("div",{id:"codetypelist_insert_fdiv"},
					React.createElement("div",{id:"codetypelist_insert_div"},
						React.createElement("div",{className:"codetypelist_insert_ddiv"},
							React.createElement("label",{className:"codetypelist_insert_ddivlabel"},"添 加 内 容"),
							React.createElement("label",{className:"codetypelist_insert_ddivlabel2",onClick:this.colse},"关闭")
						),
						React.createElement("div",{className:"codetypelist_insert_ddiv2"},
							React.createElement("label",{className:"codetypelist_insert_lable1"},"类型: "),
							React.createElement("input",{readOnly:"readOnly",type:"text",className:"codetypelist_insert_input1",placeholder:"请输入内容"}),
							React.createElement("span",{className:"codetypelist_insert_span"})
						),
						React.createElement("div",{className:"codetypelist_insert_ddiv3"},
							React.createElement("label",{className:"codetypelist_insert_lable3"},"值: "),
							React.createElement("input",{type:"text",className:"codetypelist_insert_input3",placeholder:"请输入值"}),
							React.createElement("span",{className:"codetypelist_insert_span"})
						),
						React.createElement("div",{className:"codetypelist_insert_ddiv4"},
							React.createElement("button",{className:"codetypelist_insert_buttom1",onClick:this.hanOnAddisUpdate},"确 定")
						)
					)
				)
			)
		);
	}
});

//ReactDOM.render(React.createElement(Codetypelist,{data:[{types:"永久",names:"yongjiu",values:"永久"},{types:"建筑",names:"jianzhu",values:"建筑"},{types:"地基",names:"diji",values:"地基"},{types:"建筑",names:"jianzhu",values:"建筑"},{types:"地基",names:"diji",values:"地基"},{types:"建筑",names:"jianzhu",values:"建筑"},{types:"地基",names:"diji",values:"地基"},{types:"建筑",names:"jianzhu",values:"建筑"},{types:"地基",names:"diji",values:"地基"},{types:"建筑",names:"jianzhu",values:"建筑"},{types:"地基",names:"diji",values:"地基"},{types:"建筑",names:"jianzhu",values:"建筑"},{types:"地基",names:"diji",values:"地基"},{types:"建筑",names:"jianzhu",values:"建筑"},{types:"地基",names:"diji",values:"地基"},{types:"建筑",names:"jianzhu",values:"建筑"},{types:"地基",names:"diji",values:"地基"},{types:"建筑",names:"jianzhu",values:"建筑"},{types:"地基",names:"diji",values:"地基"},{types:"地基",names:"diji",values:"地基"}]}), document.getElementById("code-type-list"));