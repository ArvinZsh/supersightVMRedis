// JavaScrcommon_ipt Document
var Modal = window.Modal || ReactBootstrap.Modal;
var TUserList= React.createClass({
    getInitialState: function(){
        return{
            list:[],
            userId:"",
            keyValue:this.props.keyValue,
        };
    },
    componentDidMount: function(){
        var validateOffStaffFlag = false;
        if(this.props.enforce=="enforce"){
            validateOffStaffFlag = true
        }
        var sid = getCookie("sid");
        var loginUid = getCookie("loginUid");
        var rules={"sid":sid,"orgId":this.props.orgId,"key":"","loginUid":loginUid,"validateOffStaffFlag":validateOffStaffFlag};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"users.do?action=listByOrg",
            dataType:'json',
            data: tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag) {
                    // if(data.users[0].orgId == this.props.orgId){
                        this.setState({list: data.users});
                    // }
                } else{
                    layer.alert("初始化数据失败！"+data.errorMsg,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },
    usertrClick:function(e){
        var targetid = $(".userInfo_div_tr:hover")[0].firstChild.id;
        var userInfo="";
        this.state.list.map(function(e){
            if(e.userId==targetid){
                userInfo=e;
            }
        });
        nsEventBus.eventbus.broadcast("userClick",userInfo);
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
                    React.createElement("td",{id:usertr_trId,className:"userInfo_div_td3"},this.state.list[i].userName),
                    React.createElement("td",{id:usertr_trId,className:"userInfo_div_td4"},this.state.list[i].dutyName)
                )
                userlist.push(aa);
            }
        }
        return (
            React.createElement("div",{},
                React.createElement("div",{id:"userList_div_div"},
                    React.createElement("table",{id:"tabid"},
                        userlist
                    ))
            )
            );

    }
});

var Transceiver = React.createClass({

    getInitialState:function(){
             if(typeof(this.props.transceiverInfo)==undefined||this.props.transceiverInfo==null||this.props.transceiverInfo==""){
                 return {
                     title:this.props.title,
                     showModal:this.props.showModal,
                     orgInfo:"",
                     hintsId:"",
                     hintsTitle:"",
                     addresseeList:[],
                     copyToList:[],
                     imgList:[],
                     fileList:[],
                     cintent:"",
                     isSelectUser:this.props.isSelectUser,
                     selectUserType:1,
                     operationType:this.props.operationType,
                     uploadState:false,
                     apply:this.props.apply,
                 };
             }  else{
                   return {
                        title:this.props.title,
                        showModal:this.props.showModal,
                        orgInfo:"",
                        hintsId:this.props.transceiverInfo.id,
                        hintsTitle:this.props.transceiverInfo.title,
                        addresseeList:this.props.transceiverInfo.addresseeList,
                        copyToList:this.props.transceiverInfo.copyToList,
                        imgList:this.props.transceiverInfo.imgList,
                        fileList:this.props.transceiverInfo.fileList,
                       cintent:this.props.transceiverInfo.cintent,
                        isSelectUser:this.props.isSelectUser,
                        selectUserType:1,
                       operationType:this.props.operationType,
                       apply:this.props.apply,
                    };
             }
    },

    componentDidMount: function(){
        $("input[name='Whether']").get(0).checked=true;
        var _this=this;
        document.getElementById("hreoly-Title").value=this.state.hintsTitle;
        if(this.refs.mySelect==undefined){
            document.getElementById("hreoly-Cintent").value=this.state.cintent;
        }else{
            document.getElementById("hreoly-Cintent").value="";
        }
        nsEventBus.eventbus.on("UploadImage_update1","UploadImage_update",function(msg){
             _this.setState({imgList:msg});
        });
        nsEventBus.eventbus.on("UploadFile_update","UploadFile_update",function(msg){
            _this.setState({fileList:msg});
        });
        nsEventBus.eventbus.on("Upload_UploadState","Upload_UploadState",function(msg){
            _this.state.uploadState=msg.state;
        });
        nsEventBus.eventbus.on("orgClik","orgClik",function(msg){
            _this.state.userInfo="";
            $("#hm_meandiv_1").empty();
            ReactDOM.render(React.createElement(TUserList,{orgId:msg.orgId,ishowStop:false,keyValue:""}),document.getElementById("hm_meandiv_1"));
            _this.setState({orgInfo:msg});
        });
        nsEventBus.eventbus.on("userClick","userClick",function(msg){
            if(!_this.state.isSelectUser){
                return;
            }
            if(_this.state.selectUserType==1){
                if(_this.state.apply == "apply"){
                    if(_this.state.addresseeList.length == 0){
                        var tmp=_this.state.addresseeList;
                        tmp.push({id:msg.userId,name:msg.userName});
                        _this.setState({addresseeList:tmp});
                    }
                }else{
                    for(var i=0;i<_this.state.addresseeList.length;i++){
                        if(_this.state.addresseeList[i].id==msg.userId){
                            return;
                        }
                    }
                    var tmp=_this.state.addresseeList;
                    tmp.push({id:msg.userId,name:msg.userName});
                    _this.setState({addresseeList:tmp});
                }
            }else if(_this.state.selectUserType==2){
                if(_this.state.apply == "apply") {
                    $("#copyToMan").attr({"disabled":"disabled"});
                }else{
                    for(var i=0;i<_this.state.copyToList.length;i++){
                        if(_this.state.copyToList[i].id==msg.id){
                            return;
                        }
                    }
                    var tmp=_this.state.copyToList;
                    tmp.push({id:msg.userId,name:msg.userName});
                    _this.setState({copyToList:tmp});
                }
            }
            console.log(msg);
        });
    },
    close: function close() {
        var _this=this;
        layer.confirm('您确定要放弃编辑吗？', {
            btn: ['确定','取消'] //按钮
        },
        function(index){
            _this.setState({ showModal: false });
            layer.close(index);
        });
    },
    usertrClick: function usertrClick(e) {
        if(!this.state.isSelectUser){
            return;
        }
        var targetid = e.target.getAttribute("id");
        if(this.state.selectUserType==1&&this.state.addresseeList!=null){
            var num=0;
            for(var i=0;i<this.state.addresseeList.length;i++){
                 if(this.state.addresseeList[i].id==targetid){
                     num=i;
                    break;
                 }
            }
            var tmp= this.state.addresseeList;
            tmp.splice(num,1);
            this.setState({addresseeList:tmp});
        }else if(this.state.selectUserType==2&&this.state.copyToList!=null){
            var num=0;
            for(var i=0;i<this.state.copyToList.length;i++){
                if(this.state.copyToList[i].id==targetid){
                    num=i;
                    break;
                }
            }
            var tmp= this.state.copyToList;
            tmp.splice(num,1);
            this.setState({copyToList:tmp});
        }
    },
    //收件人点击事件
    addresseeClick:function addresseeClick(e){
          this.setState({selectUserType:1});
    },
    //抄送点击事件
    copyToClick:function copyToClick(e){
        this.setState({selectUserType:2});
    },
    //发送点击事件
    sendClick:function sendClick(){
        if(this.state.uploadState){
            layer.alert("文件正在上传请稍等");
            return;
        }
        var hintsTitle = document.getElementById("hreoly-Title").value.trim();
        if(this.refs.mySelect==undefined){
            var cintent = document.getElementById("hreoly-Cintent").value.trim();
        }else{
            var cintent = ""
        }
        if(hintsTitle==""){
            document.getElementById("hreoly-modal_sendl").innerHTML="请输入标题";
            return;
        }
        if(hintsTitle.length>45){
            document.getElementById("hreoly-modal_sendl").innerHTML="标题长度不超过45";
            return;
        }
        if(this.refs.mySelect==undefined) {
            if (cintent == "") {
                document.getElementById("hreoly-modal_sendl").innerHTML = "请输入发送内容";
                return;
            }
        }
        if(cintent.length>500){
            document.getElementById("hreoly-modal_sendl").innerHTML="内容长度不能超过500";
            return;
        }
        if(this.state.addresseeList==null||this.state.addresseeList==""||this.state.addresseeList.length==0){
            document.getElementById("hreoly-modal_sendl").innerHTML="请选择联系人";
            return;
        }
        document.getElementById("hreoly-modal_sendl").innerHTML="";
        var  copyList=[];
        this.state.copyToList.map(function(array){
            copyList.push({"id":array.id,"name":array.name});
        });
        var addressLists=[];
        this.state.addresseeList.map(function(array){
            addressLists.push({"id":array.id,"name":array.name});
        });
        var creatorId = getCookie("uid");
        var  creator=getCookie("userName");
        var iList=[];
        this.state.imgList.map(function(data){
             iList.push(data.fileId)
        });
        cintent=cintent.replace(/\n/g,"<br/>")
        var fList=[];
        this.state.fileList.map(function(data){
            fList.push(data.fileId)
        });
        var  replyTag=null;
        if(typeof (this.props.module)!="undefined"||this.props.module!=null){
            if(this.props.affirmBuilding != undefined && this.props.affirmBuilding!=""){
                this.props.module = this.props.affirmBuilding;
            }
            replyTag={"module":this.props.module,"receMailId":"","itemId":this.props.itemId,status:this.props.status};
        }
        var sid = getCookie("sid");
        var linkUrl="";
        if(typeof (this.props.linkUrl)!="undefined"){
            linkUrl= this.props.linkUrl;
        }
        if(this.props.operationType == "transceiverHints"){
            creatorId = this.props.transceiverInfo.addresseeList[0].id;
        }
        var realFlag = $('input:radio:checked').val();
        var rules={"sid":sid,"shortContent":cintent,"realFlag":realFlag,"creator":creator,"creatorId":creatorId,"title":hintsTitle,"address":addressLists,"fileList":fList,"imgList":iList,"copyAddress":copyList,"replyTag":replyTag,"linkUrl":linkUrl}
        var tmp = JSON.stringify(rules);
        console.log(tmp);
        $.ajax({
         url:common_ip+"mail.do?action=send",
         dataType:'json',
         data: tmp,
         type:'post',
         contentType:"application/x-www-form-urlencoded",
         success: function(data){
             if(data.successFlag){
				 layer.msg("发送成功！",{icon:1});
                 nsEventBus.eventbus.broadcast("addHints_success","");
                 this.setState({ showModal: false });
             } else{
                 layer.alert("发送失败，请稍后再试！"+data.errorMsg,{icon:2,title:"错误"});
             }
         }.bind(this),
         error: function(request, state, error){
         layer.alert(error);
         console.error(this.props.url, state, error.toString());
         }.bind(this)
         });
    },
    // handleYesOrNo: function handleYesOrNo(event) {
    //     $("input[name='Whether']").get(0).checked=false;
    // },
    render:function(){
            var tmp=[];
            var selectUsers=[];
            if(typeof(this.state.stateList)!=undefined&&this.state.stateList!=null){
                this.state.stateList.map(function(data){
                    tmp.push(React.createElement( "option",{className:"ht_option",value:data.stateId},data.stateName));
                });
            }
            var showSelectUser=[];
            var modalstyle="custom-modal1";
            if(this.state.isSelectUser){
                var modalstyle="custom-modal";
                showSelectUser.push( React.createElement("div",{ id: "hm_leftdiv" },
                    React.createElement("div",{ref:"div",className:"org_tree_div",id:"datas_id"},
                        React.createElement(Tree,{isStopped:false,checkedInfo:this.state.orgInfo})
                    )
                ),
                    React.createElement("div",{ id: "hm_meandiv" },
                        React.createElement("p",{id:"userList_head"},
                            React.createElement("label",{className:"userInfo_div_td3"},"姓名"),
                            React.createElement("label",{className:"userInfo_div_td4"},"职位")
                        ),
                        React.createElement("div",{ id: "hm_meandiv_1" })
                    ),
                    React.createElement("div",{ id: "hm_meandiv1" },
                        React.createElement("p",{id:"userList_head"},
                            React.createElement("label",{className:"userInfo_div_td3"},"已选中")
                        ),
                        React.createElement("div",{id:"select_user_div"},
                            React.createElement("table",{id:"tabid"},
                                selectUsers
                            )
                        )
                    ));
            }
            if(this.state.selectUserType==1&&this.state.addresseeList!=null){
                for(var i=0;i<this.state.addresseeList.length;i++){
                    var aa = React.createElement("tr",{className:"",onClick:this.usertrClick},
                        React.createElement("td",{id:this.state.addresseeList[i].id,className:"userInfo_div_td3"},this.state.addresseeList[i].name)
                    )
                    selectUsers.push(aa);
                }
            }else if(this.state.selectUserType==2&&this.state.copyToList!=null){
                for(var i=0;i<this.state.copyToList.length;i++){
                    var aa = React.createElement("tr",{id:this.state.copyToList[i].id,className:"",onClick:this.usertrClick},
                        React.createElement("td",{id:this.state.copyToList[i].id,className:"userInfo_div_td3"},this.state.copyToList[i].name)
                    )
                    selectUsers.push(aa);
                }
            }

            var  address="";
                if(this.state.addresseeList!=null&&this.state.addresseeList!=""&&this.state.addresseeList[0].name!=""){
                    this.state.addresseeList.map(function(data){
                        address=address+data.name+"；";
                    });
                }

            var copTo="";
                if (this.state.copyToList != null && this.state.copyToList != "" && this.state.copyToList[0].name != "") {
                    this.state.copyToList.map(function (data) {
                        copTo = copTo + data.name + "；";
                    });
                }
                var str = "收件人";
                if(this.state.apply == "apply"){
                    str = "审批人";
                }
            var  content = [];
            if(this.state.apply == "reply"){
                content.push(
                    React.createElement("div",{style:{width: "100%", height:"auto",float: "left", marginBottom: "10px"}},
                        React.createElement("label", {style: {float: "left", padding: "16px 0px 0px 15px",color:"#23A0DB"}}, "是否属实"),
                        React.createElement("label", {style: {float: "left", padding: "16px 0px 0px 5px",color: "#848E9F"}}, "是"),
                        React.createElement("div", {style: {padding: "0px 0px 0px 106px"}},
                            React.createElement(Input, {ref: "mySelect",type: "radio", name: "Whether", value: "是"})
                        ),
                        React.createElement("label", {style: {float: "left", padding: "1px 0px 0px 25px",color: "#848E9F"}}, "否"),
                        React.createElement("div", {style: {padding: "0px 0px 0px 145px"}},
                             React.createElement(Input, { ref: "mySelect",type: "radio", name: "Whether", value: "否"})
                        )

                    )
                )
            }else{
                content.push(
                    React.createElement("p",{className:"hreoly-modal_p",id:"hreoly-modal_content"},
                        React.createElement("label",{className:"hreoly-modal_label"},"内容" ),
                        React.createElement("textarea",{id:"hreoly-Cintent",className:"hreoly-modal_input"})
                    )
                )
            }
            return React.createElement(
                "div",{id:"hints_toolbar"},
                React.createElement(Modal,{id:"hints_reply",bsSize:"large",show:this.state.showModal,keyboard:true,onHide:this.close,animation:true,dialogClassName:modalstyle},
                    React.createElement(
                        Modal.Header,
                        { closeButton: true },
                        React.createElement(
                            Modal.Title,
                            { id: "contained-modal-title-lg" },
                            this.state.title
                        )
                    ) ,
                    React.createElement(
                        "div",
                        { id: "hreoly-modal-div" },
                        showSelectUser,
                        React.createElement("div",{ id: "hm_rightdiv" },
                            React.createElement("p",{className:"hreoly-modal_p",id:"hreoly-modal_p1"},
                                React.createElement("label",{className:"hreoly-modal_label"},"标题" ),
                                React.createElement("input",{id:"hreoly-Title",className:"hreoly-modal_input"})
                            ),
                            React.createElement("p",{className:"hreoly-modal_p"},
                                React.createElement("label",{className:"hreoly-modal_label"},str ),
                                React.createElement("input",{className:"hreoly-modal_input",id:"hints_address",onClick:this.addresseeClick,value:address})
                            ) ,
                            React.createElement("p",{className:"hreoly-modal_p"},
                                React.createElement("label",{className:"hreoly-modal_label"},"抄送" ),
                                React.createElement("input",{id:"copyToMan" ,className:"hreoly-modal_input",onClick:this.copyToClick,value:copTo})
                            ) ,
                            React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                                React.createElement("label",{className:"hreoly-modal_label"},"图片" ),
                                React.createElement(UploadImage,{className:"hreoly-modal_input",imgList:this.state.imgList,successNum:this.state.imgList.length,mulSupported:false,tag:"1",uploadNum:this.props.uploadNum})
                            ) ,
                            content,
                            React.createElement("div",{id:"hml_div",className:"hreoly-modal_p"},
                                React.createElement("label",{id:"hml_adjunct",className:"hreoly-modal_label"},"附件" ),
                                React.createElement(UploadFile,{mulSupported:true,fileList:this.state.fileList,successNum:this.state.fileList.length})
                            )
                        ),
                        React.createElement("p",{id:"hreoly-modal_sendp"},
                            React.createElement("button",{className:"hreoly-modal_p",id:"hreoly-modal_send1",onClick:this.sendClick},"发送" ),
                            React.createElement("label",{id:"hreoly-modal_sendl"} )
                        )
                    )

                )
            );
        }
    });
//ReactDOM.render(React.createElement(Transceiver,{title:"发文——回复",showModal:true,isSelectUser:true}),document.body)