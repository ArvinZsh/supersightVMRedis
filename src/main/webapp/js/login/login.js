//表单对象
var Button = window.Button || ReactBootstrap.Button;
var Input = window.Input || ReactBootstrap.Input;
//var InputInstance = window.InputInstance || {};

/**
 * 登录表单
 */
var LoginForm = React.createClass({
	//初始化状态
	getInitialState: function getInitialState() {
		return {
			msg: "",
			isEnable: true,
		};
	},
	componentDidMount:function () {
		$("body").keydown(function(e) {
			if (e.keyCode == "13") {//keyCode=13是回车键
				$('.button').click();
			}
		});
	},
	handleOnChange1:function () {

	},
	//提交登录事件
	onSubmitLogin:function(){
		
			var loginUid = this.refs.username.refs.input.value.trim();
			var pwd = this.refs.password.refs.input.value.trim();
			var loginMsg = this.refs.loginMsg;
			if(loginUid.length == 0){
				layer.alert('请输入用户名!',{icon:2,title: '提示'});
				return
			}
			if(pwd.length == 0){
				layer.alert('请输入密码!',{icon: 2,title: '提示'});
				return
			}
			var rules = {"loginUid":loginUid, "pwd":pwd};
			var tmp = JSON.stringify(rules);
			console.log(tmp);
			$.ajax({
				url:common_ip+"login.do",
				dataType:'json',
				data:tmp,
				type:'POST',
				contentType:"application/json",
				success:function(ret){
					if(ret.successFlag){
						layer.msg("登录成功！",{icon: 1});
						setCookie("roleId",ret.user.roleId,86400000);
						setCookie("uid", ret.uid,86400000);
						setCookie("sid", ret.sid,86400000);
						setCookie("loginUid",loginUid,86400000);
						setCookie("userName",ret.user.userName,86400000);
						setCookie("dutyName",ret.user.dutyName,86400000);
						setCookie("orgId",ret.user.orgId,86400000);
						console.log(getCookie("uid"));
						console.log(getCookie("sid"));
						console.log(getCookie("loginUid"));
						window.location.href="mapviews.html";
					}else{
						layer.alert(ret.errorMsg,{icon: 2,title: '错误'});
					}

				}, error:function(request,state,error){
					layer.alert("登录失败了",{icon: 2,title: '错误'});
				}
			});
		
	},
	//返回渲染对象
	render: function render() {
		return (
			React.createElement("div", {id:"form",className:"divsStyle"},
				React.createElement("div",{id:"img_login_div"},
					React.createElement("div", {className:"logoStyle"})
				),
				React.createElement("div",{className:"formdiv"},
					React.createElement("div",{className:"udivStyle"},
						React.createElement("label", {className:"userName"}),
						React.createElement(Input, {
							className:"text1",
							name:"userName",
							type: "text",
							ref: "username",
							placeholder: "账号..."

						})),
					React.createElement("label",{className:"uiderr",ref:"uiderr"}),
					React.createElement("div",{className:"pdivStyle"},
						React.createElement("label", {className:"passWord"}),
						React.createElement(Input, {
							className:"text2",
							name:"pwd",
							type: "password",
							ref: "password",
							placeholder: "密码..."
						})),
					React.createElement("label",{className:"passworderr",ref:"passerr"}),
					React.createElement("div",{className:"login_button"},
						React.createElement("button",{className:"button",onClick:this.onSubmitLogin})
					),
					React.createElement("div",{className:"LoginMessage",ref:"loginMsg"})
				)));
	}
});
//创建实例
/*InputInstance.render = function () {
	var inputInstance = React.createElement("div", {},
		React.createElement(
			LoginForm
		)
	);
	ReactDOM.render(inputInstance, document.getElementById("login"));
};
//渲染实例
InputInstance.render();*/
ReactDOM.render(React.createElement(LoginForm,null), document.getElementById("login"));