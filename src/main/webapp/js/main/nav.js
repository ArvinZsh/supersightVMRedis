'use strict';

var Modal = window.Modal || ReactBootstrap.Modal;

var ChangePwd = React.createClass({
    getInitialState:function(){
        return {
            showModal:this.props.show,
            user:this.props.user,
            sid:this.props.sid
        };
    },

    componentDidMount:function(){

    },

    close:function(){
        var _this=this;
        layer.confirm('您确定要放弃修改吗？', {
                btn: ['确定','取消'] //按钮
            },
            function(index){
                _this.setState({ showModal: false });
                layer.close(index);
            });
    },

    open:function open(){
        this.setState({showModal:true});
    },

    handleSave:function(){
        var orcommon_ipwd = $("#divOrcommon_ipwdTxt").val();
        var newPwd = $("#divNewPwdTxt").val();
        var confirmPwd = $("#divConfirmPwdTxt").val();
        if(orcommon_ipwd == ""){
            layer.alert('请输入原密码!',{icon:2,title: '提示'});
            return;
        }
        if(newPwd == ""){
            layer.alert('请输入新密码!',{icon:2,title: '提示'});
            return;
        }
        if(confirmPwd == ""){
            layer.alert('请再次输入新密码!',{icon:2,title: '提示'});
            return;
        }

        if(newPwd != confirmPwd){
            layer.alert('确认密码与新密码不一致，请重新输入确认密码!',{icon:2,title: '提示'});
            return;
        }

        var obj = new Object();
		obj.name = getCookie("userName");
        obj.sid = this.state.sid;
        obj.userId = this.state.user;
        obj.loginPwd = newPwd;
        obj.oriPwd = orcommon_ipwd;
        var tmp = JSON.stringify(obj);
        $.ajax({
            url:common_ip+"users.do?action=updatePwd",
            dataType:'json',
            data:tmp,
            type:'POST',
            contentType:"application/x-www-form-urlencoded",
            success:function(ret){
                if(ret.successFlag){
                    layer.msg("修改密码成功！",{icon: 1});
                    removeCookie("uid");
                    removeCookie("sid");
                    removeCookie("loginUid");
                    removeCookie("userName");
                    removeCookie("dutyName");
                    removeCookie("orgId");
                    window.location.href="login.html";
                }else{
                    layer.alert(ret.errorMsg,{icon: 2,title: '错误'});
                }
            }, error:function(request,state,error){
                layer.alert("登录失败了",{icon: 2,title: '错误'});
            }
        });

    },

    render:function(){
        return React.createElement(
            Modal,
            {id:"divChangePwd",show:this.state.showModal,onHide:this.close},
            React.createElement(
                Modal.Header,
                {closeButton:true},
                React.createElement(
                    Modal.Title,
                    {id:"divChangePwdTitle"},
                    "修改密码"
                )
            ),
            React.createElement(
                Modal.Body,
                null,
                React.createElement(
                    "div",
                    {id:"divChangeArea"},
                    React.createElement(
                        "div",
                        {className:"divChangeAreaTr"},
                        React.createElement(
                            "a",
                            {id:"divOrcommon_ipwd"},
                            "原密码："
                        ),
                        React.createElement(
                            "input",
                            {id:"divOrcommon_ipwdTxt",type:"password"}
                        )
                    ),
                    React.createElement(
                        "div",
                        {className:"divChangeAreaTr"},
                        React.createElement(
                            "a",
                            {id:"divNewPwd"},
                            "新密码："
                        ),
                        React.createElement(
                            "input",
                            {id:"divNewPwdTxt",type:"password"}
                        )
                    ),
                    React.createElement(
                        "div",
                        {className:"divChangeAreaTr"},
                        React.createElement(
                            "a",
                            {id:"divConfirmPwd"},
                            "确认新密码："
                        ),
                        React.createElement(
                            "input",
                            {id:"divConfirmPwdTxt",type:"password"}
                        )
                    )
                ),
                React.createElement(
                    Modal.Footer,
                    null,
                    React.createElement(
                        "button",
                        {id:"ChangePwdBtn",onClick:this.handleSave},
                        "确 认"
                    )
                )
            )
        )
    }

});

var navlablestyle = {
    textAlign:"center",
    display: "inline-table",
    width:"120px",
    height:"40px",
    cursor: "pointer",
    lineHeight:"40px",
    overflow:"hidden"
};

var t;

function dingshi(){
    console.log(1);


    t=setTimeout("dingshi()",1000);
};

var yanse = function(even)
{
    var lablel = document.getElementsByTagName("lable");
    for(var i=0;i<lablel.length;i++)
    {
        lablel[i].style.backgroundColor = "#FFFFFF";
    }
    even.target.style.backgroundColor = "#99ccff";
};

function wenhou(){
    var wenhou = "";
    var hours = new Date().getHours();
    if(hours < 12 && hours >= 6){
        wenhou = "早上好";
    }else if(hours >= 12 && hours < 15){
        wenhou = "中午好";
    }else if(hours >= 15 && hours < 18){
        wenhou = "下午好";
    }else{
        wenhou = "晚上好";
    }

    return wenhou;
}

var Nav = React.createClass({
    getInitialState: function getInitialState() {
        return {
            msg:"",
            name:"admin",
            wenhou:""
        }
    },
    componentWillMount: function(){
        var wenhou2 = wenhou();
        this.setState({wenhou:wenhou2});
    },
    componentDidMount: function(){
        var div=document.getElementById("main_nav_dvr");
        var lis=div.childNodes;
        var lis1 = document.getElementsByClassName("nav_bottom_border");
        lis1[this.props.checkid-1].style.backgroundColor="#fff";
        // lis[this.props.checkid-1].style.backgroundColor="#0193DE";
        lis[this.props.checkid-1].style.color="#fff";

        var _this = this;
        setInterval(function(){
            var wenhou2 = wenhou();
            _this.setState({wenhou:wenhou2});
        },1000);
    },
    handleOnWorkClick: function(even)
    {
        window.location.href = "mapviews.html";
    },
    handleOnSystemClick: function(even)
    {
        window.location.href = "org.html";
    },
    handleOnReceiveClick: function(even)
    {
        window.location.href = "main.html";
    },
    handleOntransceiverClick: function(){
        window.location.href = "inbox.html";
    },
    handleOnPatrolClick: function(even)
    {
        window.location.href = "hints.html";
    },
    handleOnMapClick: function(even)
    {
        window.location.href = "building.html";
    },
    handleOnRecordClick: function(even)
    {
        window.location.href = "historyLog.html";
    },
    closeLogin:function(){
        removeCookie("roleId");
        removeCookie("uid");
        removeCookie("sid");
        removeCookie("loginUid");
        removeCookie("userName");
        removeCookie("dutyName");
        removeCookie("orgId");
        window.location.href="login.html";
    },

    handleChangePwd:function(){
        var user = getCookie("uid");
        var sid = getCookie("sid");
        $("#divChangePwdContainer").empty();
        ReactDOM.render(React.createElement(ChangePwd,{user:user,sid:sid,show:true}),document.getElementById("divChangePwdContainer"));
    },

    handleClickAc:function(){
        var allList = document.getElementById("divBtn");
        allList.style.display = "block";
    },

    handleMouseLeave:function(e){
        var allList = document.getElementById("divBtn");
        allList.style.display = "none";
    },

    render:function render()
    {

        return (
            React.createElement("div",{id:"main_nav_dvr"},
                React.createElement("li",{id:"main_nav_lab",style:navlablestyle,onClick:this.handleOnWorkClick},"地图浏览",
                    React.createElement("div",{className:"nav_bottom_border"})),
                React.createElement("li",{id:"main_nav_lab2",style:navlablestyle,onClick:this.handleOnReceiveClick},"工作台",
                    React.createElement("div",{className:"nav_bottom_border"})),
                React.createElement("li",{id:"main_nav_lab4",style:navlablestyle,onClick:this.handleOnMapClick},"管理中心",
                    React.createElement("div",{className:"nav_bottom_border"})),
                React.createElement("li",{id:"main_nav_lab6",style:navlablestyle,onClick:this.handleOntransceiverClick},"收发文",
                    React.createElement("div",{className:"nav_bottom_border"})),
                React.createElement("li",{id:"main_nav_lab3",style:navlablestyle,onClick:this.handleOnPatrolClick},"投诉管理",
                    React.createElement("div",{className:"nav_bottom_border"})),
                React.createElement("li",{id:"main_nav_lab5",style:navlablestyle,onClick:this.handleOnRecordClick},"统计查询",
                    React.createElement("div",{className:"nav_bottom_border"})),
                React.createElement("li",{id:"main_nav_lab1",style:navlablestyle,onClick:this.handleOnSystemClick},"系统管理",
                    React.createElement("div",{className:"nav_bottom_border"})),
                React.createElement("div",{id:"main_nav_div"},
                    React.createElement(
                        "span",
                        {id:"main_nav_div_span",onMouseOver:this.handleClickAc,onMouseLeave:this.handleMouseLeave},
                        this.state.wenhou+","+getCookie("userName"),
                        React.createElement(
                            "div",
                            {className:"user_dropdown",id:"divBtn",display:"none;"},
                            React.createElement(
                                "ul",
                                {className:"user_dropdown_ul"},
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        {id:"pwd_modify",onClick:this.handleChangePwd},
                                        "修改密码"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        {id:"quit_btn",onClick:this.closeLogin},
                                        "退出"
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement("div",{id:"main_nav_div_span1"})
                ),
                React.createElement("div",{className:"tnav_bottom_border"}),
                React.createElement("div",{id:"divChangePwdContainer"}),
                React.createElement("div",{id:"main_nav_begin"}),
                React.createElement("div",{id:"main_nav_end"})
            )
        );
    }
});
