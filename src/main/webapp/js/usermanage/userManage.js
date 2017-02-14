// JavaScrcommon_ipt Document

var UserInfoEdit = React.createClass({

    getInitialState:function getInitialState(){
        return {
            orgInfo:this.props.orgInfo, showModal:true,isEditorg:false,dutyList:[],roleList:[],userLoginOrNot:false,
            userDuty:this.props.data.dutyId,userRole:this.props.data.roleId,
        };
    },
    componentDidMount: function(){
        var _this=this;

        nsEventBus.eventbus.on("orgClik","orgClik_user1",function(msg){
            _this.setState({orgInfo:msg});
            document.getElementById("userEdit_org").value=msg.orgName;
        });

        var sid = getCookie("sid");
        var rules={"sid":sid,"typeId":"'PostCode'"};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"commonCode.do?action=listSub",
            dataType:'json',
            data: tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
					
                    this.setState({dutyList:data.commonCodeList});
                } else{
                    layer.alert("加载数据失败！"+data.errorMsg,{icon:2});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
        var obj = new Object();
        obj.sid = sid;
        tmp = JSON.stringify(obj);
        $.ajax({
            url:common_ip+"role.do?action=listAllRoleName",
            dataType:'json',
            data: tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    this.setState({roleList:data.roleInfos});
                } else{
                    layer.alert("加载数据失败！"+data.errorMsg,{icon:2});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });

        document.getElementById("userEdit_org").value=this.state.orgInfo.orgName;
        if(this.props.operationType=="save"){
            document.getElementById("userEdit_username").value=this.props.data.loginUid;
            document.getElementById("userEdit_name").value=this.props.data.userName;
            document.getElementById("userEdit_pwd").value=this.props.data.loginPwd;
//            var selectInde=0;
//            for(var i=0;i<this.dutyList.length;i++){
//                 if()
//            }
            document.getElementById("userEdit_duty").text=this.props.data.dutyId;
            document.getElementById("userEdit_phone").value=this.props.data.mobile;
            document.getElementById("userLoginOrNotBtn").checked=this.props.data.serviceFlag;
        }
    },
    //确定点击
    okClick:function getInitialState(){
        var name = document.getElementById("userEdit_name").value;
        var loginUid = document.getElementById("userEdit_username").value;
        var pwd = document.getElementById("userEdit_pwd").value;
        var position = document.getElementById("userEdit_duty").value;
        var org = document.getElementById("userEdit_org").value;
        var phone = document.getElementById("userEdit_phone").value;
        var roleId = document.getElementById("roleEdit_role").value;
        if(loginUid==""){
            document.getElementById("orgEdit_p").innerText="请输入用户名";
            return;
        }
        if(loginUid.length>20){
            document.getElementById("orgEdit_p").innerText="用户名长度不超过20";
            return;
        }
        if(name==""){
            document.getElementById("orgEdit_p").innerText="请输入姓名";
            return;
        }
        if(name.length>20){
            document.getElementById("orgEdit_p").innerText="姓名长度不超过20";
            return;
        }
        if(pwd==""){
            document.getElementById("orgEdit_p").innerText="请输入密码";
            return;
        }else{
            var ze1 = /^([A-Z]|[a-z]|\d){6,20}$/
            if (!ze1.test(pwd)) {
                document.getElementById("orgEdit_p").innerText="密码必须为数字或者字母组合,长度是6到20位";
                return;
            }
        }
        if(position==""){
            document.getElementById("orgEdit_p").innerText="请输入职务";
            return;
        }
        if(roleId==""){
            document.getElementById("orgEdit_p").innerText="请选择角色";
        }
        if(org==""){
            document.getElementById("orgEdit_p").innerText="请输入部门名";
            return;
        }if(phone==""){
            document.getElementById("orgEdit_p").innerText="请输入电话";
            return;
        }else{
            var yzphone = /^1[3|4|5|7|8]\d{9}$/;
                if(!yzphone.test(phone)){
                    document.getElementById("orgEdit_p").innerText="电话号码格式错误";
                    return;
                }
        }
        var sid = getCookie("sid");
        var userid = "";
        if(this.props.operationType=="save"){
                userid=this.props.data.userId;
        }

        var serviceFlag = $("#userLoginOrNotBtn")[0].checked;
        var rules={"sid":sid,"userId":userid,"loginPwd":pwd,"loginUid":loginUid,"name":name,"position":position,"roleId":roleId,"orgId":this.state.orgInfo.orgId,"phone":phone,"isStopped":false,"serviceFlag":serviceFlag};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"users.do?action=save",
            dataType:'json',
            data: tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
					layer.msg("保存成功",{icon:1});
                    this.setState({ showModal: false });
                    nsEventBus.eventbus.broadcast("userEditOk",'');
                } else{
                    layer.alert("保存失败"+data.errorMsg,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });

        //
    },
    orgEditClick:function orgEditClick(){
          this.setState({isEditorg:true});
    },
    close: function close() {
		var _this = this;
		layer.confirm('您确定要放弃修改吗？', {
			btn: ['确定','取消'] //按钮
		},
		function(index){
            layer.close(index);
			 _this.setState({ showModal: false });
		});
       
    },
    handleSelectChanged:function(e){
        if(e.target.checked){

        }
    },
    onchange:function(e){
        this.setState({userDuty:e.target.selectedOptions.value});
    },
    handleRoleChange:function(e){
        this.setState({userRole:e.target.selectedOptions.value});
    },
    render:function render(){
        var tmp=[];
        var tmp1=[];
        var tmp2=[];
        var style="userModal";
        var styleOrgEdiLeft="userEdit_left";
        var duty=[];
        var roles = [];
        var userEidtOkClick="";
        if(this.props.operationType=="save"){
            if(this.state.isEditorg){
                style="userModal_editOrg";
                styleOrgEdiLeft="orgEdit_left";
                orgEdit_right_tree="orgEdit_right_tree";
                tmp.push(React.createElement(Tree,{isStopped:false,checkedInfo:this.state.orgInfo}))
                tmp2.push(
                    React.createElement("div",{className:"orgEdit_right"},
                        React.createElement("div",{className:orgEdit_right_tree},
                            tmp
                        )
                    ));
            }else{
                tmp1.push(
                    React.createElement("label",{className:"orgEdit_label_edit",onClick:this.orgEditClick})
                );
            }
        }
        this.state.dutyList.map(function(info){
            duty.push(React.createElement("option",{className:"duty_option",value:info.itemId},info.codeName));
        });
        this.state.roleList.map(function(info){
            roles.push(React.createElement("option",{className:"role_option",value:info.roleId},info.roleName));
        });
        return React.createElement("div",{className:""},
            React.createElement(Modal,{id:"user_reply",bsSize:"large",show:this.state.showModal,keyboard:true,onHide:this.close,animation:true,dialogClassName:style},
                React.createElement(
                    Modal.Header,
                    { closeButton: true },
                    React.createElement(
                        Modal.Title,
                        { id: "contained-modal-title-lg" },
                        this.props.title
                    )
                ) ,
                React.createElement("div",{className:"userEdit_left"},
                    React.createElement("div",{className:"orgEdit"},
                        React.createElement("label",{className:"orgEdit_label"},"用户名:"),
                        React.createElement("input",{type:"text",id:"userEdit_username",className:"org_input",ref: "find",placeholder: "用户名"})
                    ) ,
                    React.createElement("div",{className:"orgEdit"},
                        React.createElement("label",{className:"orgEdit_label"},"姓名:"),
                        React.createElement("input",{type:"text",id:"userEdit_name",className:"org_input",ref: "find",placeholder: "姓名"})
                    ) ,
                    React.createElement("div",{className:"orgEdit"},
                        React.createElement("label",{className:"orgEdit_label"},"密码:"),
                        React.createElement("input",{type:"text",id:"userEdit_pwd",className:"org_input",ref: "find",placeholder: "密码"})
                    ),
                    React.createElement("div",{className:"orgEdit"},
                        React.createElement("label",{className:"orgEdit_label"},"职务:"),
                        React.createElement(
                            "select",
                            {id:"userEdit_duty",className:"select",onChange:this.onchange,value:this.state.userDuty,style:{width:this.props.width+"px",height:this.props.height+"px"}},
                            duty
                        )
                    ) ,
                    React.createElement("div",{className:"orgEdit"},
                        React.createElement("label",{className:"orgEdit_label"},"角色:"),
                        React.createElement(
                            "select",
                            {id:"roleEdit_role",className:"select",onChange:this.handleRoleChange,value:this.state.userRole,style:{width:this.props.width+"px",height:this.props.height+"px"}},
                            roles
                        )
                    ),
                    React.createElement("div",{className:"orgEdit"},
                        React.createElement("label",{className:"orgEdit_label"},"部门:"),
                        React.createElement("input",{type:"text",id:"userEdit_org",className:"org_input",ref: "find",placeholder: "部门",readOnly:true}),
                        tmp1
                    ) ,
                    React.createElement("div",{className:"orgEdit"},
                        React.createElement("label",{className:"orgEdit_label"},"手机号:"),
                        React.createElement("input",{type:"text",id:"userEdit_phone",className:"org_input",ref: "find",placeholder: "手机号"})
                    ) ,


                    React.createElement("div",{className:"user_Edit"},
                        React.createElement("input",{type:"checkbox",id:"userLoginOrNotBtn",className:"author_buttons",onChange:this.handleSelectChanged}),
                        React.createElement("label",{id:"userLoginOrNotLabel",className:"author_btoon_label"},"是否登录人员"),
                        React.createElement("button",{className:"edit_button",onClick:this.okClick},"确定")
                    ),
                    React.createElement("p",{id:"orgEdit_p"})
                    ),tmp2
            )
        )
    }
});
var UserList= React.createClass({
getInitialState: function(){
        return{
            list:[],
            userId:"",
            keyValue:this.props.keyValue,
        };
    },
    componentDidMount: function(){
        var sid = getCookie("sid");
        var rules={"sid":sid,"orgId":this.props.orgId,"keyword":this.props.keyValue};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"users.do?action=list",
            dataType:'json',
            data: tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    this.setState({list:data.users});
                } else{
                    layer.alert("加载数据失败"+data.errorMsg,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
//        var userLists=[{id:"1100101",pwd:"****",name:"张国东",position:"经理",org:"执法一部",phone:"12456789521",email:"Email@163.com",apparatusNo:"123455",isStopped:false},{id:"1100102",pwd:"****",name:"张东",position:"执法员",org:"执法一部",phone:"12456789521",email:"Email@163.com",apparatusNo:"123455",isStopped:false},{id:"1100103",pwd:"****",name:"张国",position:"执法员",org:"执法一部",phone:"12456789521",email:"Email@163.com",apparatusNo:"123455",isStopped:true},];
//         for(var i=0;i<50;i++){
//             userLists.push({id:"1100102",pwd:"****",name:"张东",position:"执法员",org:"执法一部",phone:"12456789521",email:"Email@163.com",apparatusNo:"123455",isStopped:false});
//         }
//        console.log("UserList:"+this.props.orgId);
//        this.setState({list:userLists});
    },
    usertrClick:function(e){
        var targetid = e.target.getAttribute("id");
        var userInfo="";
        this.state.list.map(function(e){
               if(e.userId==targetid){
                   userInfo=e;
               }
        });
        nsEventBus.eventbus.broadcast("userClick",userInfo)
        this.setState({userId:targetid});
    },
    render:function()
    {
        var userlist=[];
        var styletd1="userInfo_div_tr";
        var usertr_trId="";
        if(typeof(this.state.list)!="undefined"&&this.state.list!=null&&this.state.list!=""){
            for(var i=0;i<this.state.list.length;i++){
                usertr_trId= this.state.list[i].userId;
                if(!this.props.ishowStop&&!this.state.list[i].loginableFlag){
                    continue;
                }
                if(!this.state.list[i].loginableFlag){

                    if(this.state.userId==this.state.list[i].userId){
                         styletd1="userInfo_div_stp_tr userInfo_div_trid";
                    }else{
                         styletd1="userInfo_div_stp_tr";
                    }
                } else{
                    if(this.state.userId==this.state.list[i].userId){
                         styletd1="userInfo_div_tr userInfo_div_trid";
                    }else{
                        styletd1="userInfo_div_tr";
                    }
                }
                var aa = React.createElement("tr",{className:styletd1,onClick:(this.usertrClick)},
                    React.createElement("td",{id:usertr_trId,className:"userInfo_div_td1"},this.state.list[i].loginUid),
                    React.createElement("td",{id:usertr_trId,className:"userInfo_div_td3"},this.state.list[i].userName),
                    React.createElement("td",{id:usertr_trId,className:"userInfo_div_td4"},this.state.list[i].dutyName),
                    React.createElement("td",{id:usertr_trId,className:"userInfo_div_td7"},this.state.list[i].roleName),
                    React.createElement("td",{id:usertr_trId,className:"userInfo_div_td5"},this.state.list[i].orgName),
                    React.createElement("td",{id:usertr_trId,className:"userInfo_div_td6"},this.state.list[i].mobile)
                )
                userlist.push(aa);
            }
        }
        return (
            React.createElement("div",{id:"userList_div_div"},
                React.createElement("table",{id:"tabid"},
                    React.createElement("tr",{id:"userList_head"},
                        React.createElement("th",{className:"userInfo_div_td1"},"账户"),
                        React.createElement("th",{className:"userInfo_div_td3"},"姓名"),
                        React.createElement("th",{className:"userInfo_div_td4"},"职位"),
                        React.createElement("th",{className:"userInfo_div_td7"},"角色权限"),
                        React.createElement("th",{className:"userInfo_div_td5"},"部门"),
                        React.createElement("th",{className:"userInfo_div_td6"},"手机")
                    )
                ),
                React.createElement("div",{className:"userManager_lines"},
                    userlist
                )

            )
            );

    }
});

var orgEdittoUser = React.createClass({
    getInitialState: function getInitialState() {
        return {
            data:this.props.data,
            isEnable:true,
            isStopped:false,
            isShowEdit:false,
            orgInfo:'',
            userInfo:"",
            operType:"updateOrg",
        };
    },
    componentDidMount: function(){
        var _this = this;
        var _isShow=this.state.isShowEdit;
        var key = document.getElementById("user_search").value;
        nsEventBus.eventbus.on("orgClik","orgClik_user",function(msg){
            _this.setState({orgInfo:msg});
            _this.state.userInfo="";
            $("#userList_div").empty();
            ReactDOM.render(React.createElement(UserList,{orgId:msg.orgId,ishowStop:_this.state.isStopped,keyValue:key}),document.getElementById("userList_div"));
        });
        nsEventBus.eventbus.on("userClick","userClick",function(msg){
            _this.state.userInfo=msg;
            console.log(msg);
        });
        nsEventBus.eventbus.on("userEditOk","userEditOk",function(msg){
            _this.setState({isShowEdit:_isShow});
            $("#userList_div").empty();
            ReactDOM.render(React.createElement(UserList,{orgId:_this.state.orgInfo.orgId,ishowStop:_this.state.isStopped,keyValue:key}),document.getElementById("userList_div"));
        });
        nsEventBus.eventbus.on("userEditNo","orgEditNo",function(msg){
            _this.setState({isShowEdit:_isShow});
        });
        $("body").keydown(function(e) {
            if (e.keyCode == "13") {//keyCode=13是回车键
                $('.search_button').click();
            }
        });
    },
    //点击添加
    clickadd:function(event){
        if(typeof(this.state.orgInfo)=="undefined"||this.state.orgInfo==null||this.state.orgInfo==""){
            layer.alert("请选择要加入部门")
            return;
        }
        this.setState({isShowEdit:!this.state.isShowEdit});
        this.state.operType="addUser";

        $("#userEdit_div").empty();
        ReactDOM.render(React.createElement(UserInfoEdit,{title:"添加人员到（"+this.state.orgInfo.orgName+"）",operationType:"addUser",orgInfo:this.state.orgInfo,data:this.state.userInfo}),document.getElementById("userEdit_div"));
        return
    },
    // 点击编辑
    clickEdit:function(event){
        if(typeof(this.state.userInfo)=="undefined"||this.state.userInfo==null||this.state.userInfo==""){
            layer.alert("请选择编辑人员");
            return;
        }
        if(!this.state.userInfo.loginableFlag){
            layer.alert("当前人员是停用状态");
            return;
        }
        this.state.operType="updateUser";
        this.setState({isShowEdit:!this.state.isShowEdit});
        $("#userEdit_div").empty();
        ReactDOM.render(React.createElement(UserInfoEdit,{title:"编辑人员到（"+this.state.orgInfo.orgName+"）",operationType:"save",orgInfo:this.state.orgInfo,data:this.state.userInfo}),document.getElementById("userEdit_div"));
        return
    },
    //点击停用
    clickStop:function(event){
		var _this = this;
        if(typeof(this.state.userInfo)=="undefined"||this.state.userInfo==null||this.state.userInfo==""){
            layer.alert("请选择停用人员",{icon:2,title:"提示"});
            return;
        }
        if(!this.state.userInfo.loginableFlag){
            layer.alert("当前人员已是停用状态",{icon:2,title:"提示"});
            return;
        }
        var sid = getCookie("sid");
        var rules={"sid":sid,"userId":this.state.userInfo.userId,"userName":this.state.userInfo.userName};
        var tmp = JSON.stringify(rules);
        layer.confirm('您确定要停用该人员？', {
                btn: ['确定','取消'] //按钮
            }, function() {
                $.ajax({
                    url:common_ip+"users.do?action=stop",
                    dataType:'json',
                    data: tmp,
                    type:'post',
                    contentType:"application/x-www-form-urlencoded",
                    success: function(data){
                        if(data.successFlag){
                            layer.msg("停用成功",{icon: 1});
							console.log("stoporg:"+this.state.orgInfo.id)
							$("#userList_div").empty();
							ReactDOM.render(React.createElement(UserList,{orgId:_this.state.orgInfo.orgId,ishowStop:_this.state.isStopped,keyValue:""}),document.getElementById("userList_div"));
							return
                        } else{
                            layer.msg("停用失败！"+data.errorMsg,{icon: 2});
                        }
                    }.bind(this),
                    error: function(request, state, error){
                        layer.alert(error);
                        console.error(this.props.url, state, error.toString());
                    }.bind(this)
                });
        });
        
    },
    //点击是否显示停用
    clickIsShowStop:function(event){
        var va = document.getElementById("orgtree_checkbox").checked;
        this.setState({isStopped:va});
        $("#userList_div").empty();
        ReactDOM.render(React.createElement(UserList,{orgId:this.state.orgInfo.orgId,ishowStop:va,keyValue:""}),document.getElementById("userList_div"));
        return
    },
    //搜索
    clickSearch:function(event){
        var index = $(".tree_nostop_div_check").index();
        if(index == -1){
           layer.alert("请展开树菜单之后再进行搜索!",{icon:0});
            return;
        }
        var key = document.getElementById("user_search").value;
        $("#userList_div").empty();
        ReactDOM.render(React.createElement(UserList,{orgId:this.state.orgInfo.orgId,ishowStop:this.state.isStopped,keyValue:key}),document.getElementById("userList_div"));
        return
    },
    render:function render()
    {
        return (
            React.createElement("div",{className:"usersdiv"},
                React.createElement("div",{className:"org_tool_div"},
                    React.createElement("div",{className:"edit_div"},
                        React.createElement("button",{className:"add_button",onClick:this.clickadd},"+人员"),
                        React.createElement("button",{className:"edit_button",onClick:this.clickEdit},"编辑"),
                        React.createElement("button",{className:"isenable_button",onClick:this.clickStop},"停用"),

                        React.createElement("button",{className:"search_button",onClick:this.clickSearch},"搜索"),
                        React.createElement("input",{type:"text",id:"user_search",className:"usersearch_input",ref: "find",placeholder: "搜索关键字"}),
                        React.createElement("label",{className:"isenable_label"},"显示已停用人员"),
                        React.createElement("input",{id:"orgtree_checkbox",type:"checkbox",onClick:this.clickIsShowStop})
                    )
                ),
                React.createElement("div",{className:"user_div"},
                    React.createElement("div",{ref:"div",className:"org_tree_div",id:"datas_id"},
                        React.createElement(Tree,{isStopped:false,checkedInfo:this.state.orgInfo})
                    ),
                    React.createElement("div",{id:"userEdit_div"})
                ),
                React.createElement("div",{id:"userList_div"},
                    React.createElement("div",{id:"userList_div_div"},
                        React.createElement("table",{id:"tabid"},
                            React.createElement("tr",{id:"userList_head"},
                            React.createElement("th",{className:"userInfo_div_td1"},"账户"),
                            React.createElement("th",{className:"userInfo_div_td3"},"姓名"),
                            React.createElement("th",{className:"userInfo_div_td4"},"职位"),
                            React.createElement("th",{className:"userInfo_div_td7"},"角色"),
                            React.createElement("th",{className:"userInfo_div_td5"},"部门"),
                            React.createElement("th",{className:"userInfo_div_td6"},"手机")
                        )
                    )
                )
            ))
            );
    }
});

var UserMain=React.createClass({
	    getInitialState: function getInitialState() {
	        return {
	        	workInfo: "",
	        	num:"",
	        };
	    },
		componentDidMount: function(){

		},
	    render: function render() {
		    	return(
		    		React.createElement("div",{id:"main"},
						React.createElement("div",{id:"logo"},
						    React.createElement("div",{id:"logo_left"}),
						    React.createElement("div",{id:"logo_right"},
								React.createElement("h1",{id:"logo_right_h"},common_title)
												)
											),
						React.createElement("div",{id:"navigation"},
							React.createElement(Nav,{url:"",checkid:7})
											),
						React.createElement("div",{id:"user_down"},
							React.createElement("div",{id:"user_down_left"},
								React.createElement(LeftColumn,{checkid:2})
								),
							React.createElement("div",{id:"user_down_mean"},
								React.createElement(orgEdittoUser,{url:"jsp/tree.jsp"})
												)

                        )
		    	    ));
	    }
	});
ReactDOM.render(React.createElement(UserMain), document.getElementById("container"));