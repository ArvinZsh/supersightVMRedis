"use strict";


/**
 * 人员信息展示
 */
var UserInfo = React.createClass({
    getInitialState: function getInitialState() {
		console.log("userInfo:"+this.props.userInfo);
        return {
            userInfo:this.props.userInfo
        };
    },
    render: function render() {
        return (
        		React.createElement("div", {className:"userInfo_div"},
					React.createElement("div", {className:"userInfo_div_left"},
						  React.createElement("image", {className:"userInfo_div_left",src:this.state.userInfo.photoPath})
						),
					React.createElement("div", {className:"userInfo_div_right"},
					      React.createElement("p", {className:"userInfo_div_fight_p2"},this.state.userInfo.name),
					      React.createElement("div", {className:"userInfo_div_fight_div"},"编辑"),
						  React.createElement("p", {className:"userInfo_div_fight_p"},
							  React.createElement("label", {className:"userInfo_div_fight_label1"},this.state.userInfo.userId),
							  React.createElement("label", {className:"userInfo_div_fight_label2"},"密码："+this.state.userInfo.pwd)
								),
						  React.createElement("p", {className:"userInfo_div_fight_p1"},
							  React.createElement("label", {className:"userInfo_div_fight_label2"},this.state.userInfo.orgName),
							  React.createElement("label", {className:"userInfo_div_fight_label2"},"---"+this.state.userInfo.dutyName)
								),
						  React.createElement("p", {className:"userInfo_div_fight_p1"},"执法仪编号："+this.state.userInfo.psdvrii),
						  React.createElement("p", {className:"userInfo_div_fight_p1"},"手机号："+this.state.userInfo.phone),
						  React.createElement("p", {className:"userInfo_div_fight_p1"},"邮箱："+this.state.userInfo.email)
						)
        		)
        		);
    }
});
var temp = {photoPath:"images/head.jpg",name:"张三",userId:"11001",pwd:"123456",orgName:"执法部1",dutyName:"队长",psdvrii:"11223",phone:"12345674123",email:"dccgh@qq.com"};

//ReactDOM.render(React.createElement(UserInfo,{userInfo:{photoPath:"images/head.jpg",name:"张三",userId:"11001",pwd:"123456",orgName:"执法部1",dutyName:"队长",psdvrii:"11223",phone:"12345674123",email:"dccgh@qq.com"}}), document.getElementById("container"));