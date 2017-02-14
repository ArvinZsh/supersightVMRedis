//表单对象
var Button = window.Button || ReactBootstrap.Button;
var Input = window.Input || ReactBootstrap.Input;
var InputInstance = window.InputInstance || {};

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
    //提交登录事件
    onSubmitLogin:function(){
		var uid = this.refs.username.refs.input.value.trim();
		var uiderr =this.refs.uiderr;
		var password = this.refs.password.refs.input.value.trim();
		var passerr = this.refs.passerr;
		if(uid.length == 0){
			layer.alert("请输入用户名",{icon:2,title:"提示"});
			return;
		}else{
			uiderr.innerText = '';
		}
		if(password.length == 0){
			layer.alert("请输入密码",{icon:2,title:"提示"});
			return;
		}else{
			passerr.innerText = '';
		}
		
		$.ajax({
			  url:'/login.do',
			  dataType:'json',
			  Type:'post',
			  data:$('#form').serialize(),
			  success: function(data){
				  layer.alert("ok");
				  if(data.successFlag){
					  setCookiesSid(data.userEx.sid,data.userInfo.userId,data.userInfo.userName,data.userInfo.orgId,data.userEx.orgName,data.userInfo.dutyId,data.userEx.dutyName);
					  window.location.href = "login-success.html?uid="+uid;
					  return;
				  }else{
				 	  this.setState({msg:"登录失败:因为"+ data.message});
				 	  layer.alert(this.state.msg);
					  return;
				  }
			  }.bind(this),
			  error: function(request, state, error){
				  layer.alert(data);
				  layer.alert(error);
				  console.error(this.props.url, state, error.toString());
			  }.bind(this)
		  });
	},
	//返回渲染对象
    render: function render() {
        return (
            React.createElement("form", {id:"form",className:"divsStyle"},
            	React.createElement("div", {className:"logoStyle"}),
            	React.createElement("div", {className:"titleStyle"}, "南澳查违执法留痕管理系统"),
            	React.createElement("div",{className:"formdiv"},
            	React.createElement("div",{className:"udivStyle"},
            	React.createElement("label", {className:"userName"}),
                React.createElement(Input, {
                	className:"text1",
                	name:"name",
                    type: "text",
                    ref: "username",
                    placeholder: "账号...",
                    onChange: this.handleOnChange,
                })),
                React.createElement("label",{className:"uiderr",ref:"uiderr"}),
                React.createElement("div",{className:"pdivStyle"},
                React.createElement("label", {className:"passWord"}),
                React.createElement(Input, {
                	className:"text2",
                	name:"pwd",
                    type: "password",
                    ref: "password",
                    placeholder: "密码...",
                    onChange: this.handleOnChange,
                })),
                React.createElement("label",{className:"passworderr",ref:"passerr"}),
				React.createElement(Button,{className:"button",onClick:this.onSubmitLogin},"登录")
           )));
    }
});
//创建实例
InputInstance.render = function () {
    var inputInstance = React.createElement("div", {},
        React.createElement(
        		LoginForm
        )
    );
    ReactDOM.render(inputInstance, document.getElementById("login"));
};
//渲染实例
InputInstance.render();