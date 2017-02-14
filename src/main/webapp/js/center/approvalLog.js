
var Modal = window.Modal || ReactBootstrap.Modal;
var approvalLogEdit = React.createClass({

    getInitialState:function(){
        return {
            showModal:this.props.showModal,
            title:this.props.title,

        };
    },

    componentDidMount: function(){
    },

    close: function close() {
		var _this=this;
        layer.confirm('您确定要放弃修改吗？', {
                btn: ['确定','取消'] //按钮
            },
            function(index){
                _this.setState({ showModal: false });
                layer.close(index);
        });
    },
    //保存点击事件
    sendClick:function sendClick(){
        var creatorId = getCookie("uid");
         var date=$(".execute_date").val();
        var remark=$("#approval_remark").val();
        var approvalFlag=document.getElementById("execute_agree");
        if(remark==""){
            remark = "无";
        }
         if(approvalFlag.checked && date==""){
             document.getElementById("hreoly-modal_sendl").innerHTML="请选择时间";
             return;
         }
        var  creator=getCookie("userName");
        var sid = getCookie("sid");
        var rules={"sid":sid,"itemId":"","planDestroyDate":date,approvalFlag:approvalFlag.checked,"buildingId":this.props.data.buildingId,"auditorId":creatorId,dutyName:getCookie("dutyName"),"auditor":creator,"remark":remark,"firstFlag":0}
        var tmp = JSON.stringify(rules);
        console.log(tmp);
        $.ajax({
            url:common_ip+"buildingAudit.do?action=save",
            dataType:'json',
            data: tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
					layer.msg("审批成功！",{icon:1});
                    nsEventBus.eventbus.broadcast("addHints_success","");
                    this.setState({ showModal: false });
                } else{
                    layer.alert("审批失败，请稍后再试！"+data.errorMsg,{icon:2,title:"错误"});
                }

            }.bind(this),
            error: function(request, state, error){
                layer.alert(error,{icon:2,title:"错误"});
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },
    approvalClick:function () {
        var approvalFlag=document.getElementById("execute_agree");
        if(approvalFlag.checked){
            $(".execute_datadiv").css("display","block");
        }else{
            $(".execute_datadiv").css("display","none");
        }
    },
    render:function(){
        return React.createElement(
            "div",{id:"hints_toolbar"},
            React.createElement(Modal,{id:"hints_reply",bsSize:"large",show:this.state.showModal,keyboard:true,onHide:this.close,animation:true,dialogClassName:"approval_modal"},
                React.createElement(
                    Modal.Header,
                    { closeButton: true },
                    React.createElement(
                        Modal.Title,
                        { id: "contained-modal-title-lg" },
                        this.state.title
                    )
                ) ,
                React.createElement("div",{ id: "hm_rightdiv" },
                    React.createElement("div",{id:"execute_date_div"},
                        React.createElement("label",{className:"execute_date_xin"},"*" ),
                        React.createElement("label",{className:"execute_date_label"},"同意申请" ),
                        React.createElement("input",{type:"checkbox",id:"execute_agree",name:"agree",value:"true",onClick:this.approvalClick})
                    ),
                    React.createElement("div",{id:"execute_date_div",className:"execute_datadiv",style:{display:"none"}},
                        React.createElement("label",{className:"execute_date_xin"},"*" ),
                        React.createElement("label",{className:"execute_date_label"},"执法时间" ),
                        React.createElement("input",{type:"date",className:"execute_date"})
                    ),
                    React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                        React.createElement("label",{className:"hreoly-modal_label"},"审批意见" ),
                        React.createElement("textarea",{id:"approval_remark",className:"patril_condition hreoly-modal_input"})
                    ) ,

                    React.createElement("p",{id:"hreoly-modal_sendp"},
                        React.createElement("button",{className:"hreoly-modal_p",id:"hreoly-modal_send",onClick:this.sendClick},"保存" ),
                        React.createElement("label",{id:"hreoly-modal_sendl"} )
                    )
                )
            )
        );
    }
});
var approvalHarmful = React.createClass({

    getInitialState:function(){
        return {
            showModal:this.props.showModal,
            title:this.props.title,

        };
    },

    componentDidMount: function(){
    },

    close: function close() {
        var _this=this;
        layer.confirm('您确定要放弃修改吗？', {
                btn: ['确定','取消'] //按钮
            },
            function(index){
                _this.setState({ showModal: false });
                layer.close(index);
            });
    },
    //保存点击事件
    sendClick:function sendClick(){
        var creatorId = getCookie("uid");
        var date=$(".execute_date").val();
        var remark=$("#approval_remark").val();
        var approvalFlag=document.getElementById("execute_agree");
        if(remark==""){
            remark = "无";
        }
        var  creator = getCookie("userName");
        var sid = getCookie("sid");
        var auditId  = getCookie("uid");
        var auditor  = getCookie("userName");
        var rules={"sid":sid,buildingId:this.props.data.buildingId,auditor:auditor,auditId:auditId,remark:remark,approvalFlag:approvalFlag.checked};
        var tmp = JSON.stringify(rules);
        console.log(tmp);
        $.ajax({
            url:common_ip+"buildings.do?action=approvalHarmful",
            dataType:'json',
            data: tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    layer.msg("审批成功！",{icon:1});
                    nsEventBus.eventbus.broadcast("addHints_success","");
                    this.setState({ showModal: false });
                } else{
                    layer.alert("审批失败，请稍后再试！"+data.errorMsg,{icon:2,title:"错误"});
                }

            }.bind(this),
            error: function(request, state, error){
                layer.alert(error,{icon:2,title:"错误"});
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },
    render:function(){
        return React.createElement(
            "div",{id:"hints_toolbar"},
            React.createElement(Modal,{id:"hints_reply",bsSize:"large",show:this.state.showModal,keyboard:true,onHide:this.close,animation:true,dialogClassName:"approval_modal"},
                React.createElement(
                    Modal.Header,
                    { closeButton: true },
                    React.createElement(
                        Modal.Title,
                        { id: "contained-modal-title-lg" },
                        this.state.title
                    )
                ) ,
                React.createElement("div",{ id: "hm_rightdiv" },
                    React.createElement("div",{id:"execute_date_div"},
                        React.createElement("label",{className:"execute_date_xin"},"*" ),
                        React.createElement("label",{className:"execute_date_label"},"同意申请" ),
                        React.createElement("input",{type:"checkbox",id:"execute_agree",name:"agree",value:"true"})
                    ),
                    React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                        React.createElement("label",{className:"hreoly-modal_label"},"审批意见" ),
                        React.createElement("textarea",{id:"approval_remark",className:"patril_condition hreoly-modal_input"})
                    ) ,

                    React.createElement("p",{id:"hreoly-modal_sendp"},
                        React.createElement("button",{className:"hreoly-modal_p",id:"hreoly-modal_send",onClick:this.sendClick},"保存" ),
                        React.createElement("label",{id:"hreoly-modal_sendl"} )
                    )
                )
            )
        );
    }
});
//ReactDOM.render(React.createElement(approvalLogEdit,{title:"+审批",showModal:true,isSelectUser:true,datat:{}}),document.body)


//审批详情
var ApprovalInfo = React.createClass({
    getInitialState:function(){
        return {
        };
    },
    componentDidMount: function(){
        if(this.props.index==0){
            $("#executeLogInfo_main"+this.props.index).css("display", "block");
            $("#executeLogInfo_head_rd"+this.props.index).attr("class","executeLogInfo_head_rd1");
        }
    },
    hanOnistoggleclick: function(){
        if($("#executeLogInfo_main"+this.props.index).css("display")== "block"){
            $("#executeLogInfo_main"+this.props.index).css("display", "none");
            $("#executeLogInfo_head_rd"+this.props.index).attr("class","executeLogInfo_head_rd");
        }else{
            $("#executeLogInfo_main"+this.props.index).css("display", "block");
            $("#executeLogInfo_head_rd"+this.props.index).attr("class","executeLogInfo_head_rd1");
        }
    },
    editClickt: function(){

    },
    render:function(){
        var str  = "";
        if(this.props.data[0].auditType!="" && this.props.data[0].auditType!=undefined && this.props.data[0].auditType.length!=0){
            str = this.props.data[0].auditType+"审批";
        }
        return (
            React.createElement("div",{className:"executeLogInfo"},
                React.createElement("div",{className:"executeLogInfo_head"},
                    React.createElement("div",{className:"approvalInfo_head_l"}

                    ),
                    React.createElement("div",{className:"executeLogInfo_head_c"},
                        React.createElement("label",{className:"executeLogInfo_head_cl"},str),
                        React.createElement("label",{className:"executeLogInfo_head_cll"},this.props.data[0].auditTimeFormat)
                    ),
                    React.createElement("div",{className:"executeLogInfo_head_r"},
                        React.createElement("div",{id:"executeLogInfo_head_rd"+this.props.index,className:"executeLogInfo_head_rd",onClick:this.hanOnistoggleclick})
                    )
                ),
                React.createElement("div",{id:"executeLogInfo_main"+this.props.index,className:"executeLogInfo_main approvalInfo_div",style:{display: "none"}},
                    React.createElement("div",{className:"executeLogInfo_main_div"},
                        React.createElement("label",{className:"executeLogInfo_main_label"},"审批人"),
                        React.createElement("label",{className:"executeLogInfo_main_label1 approvalInfo_label"},this.props.data[0].auditor),
                        React.createElement("label",{className:"executeLogInfo_main_label"},"是否同意："),
                        React.createElement("label",{className:"executeLogInfo_main_label1 approvalInfo_label"},this.props.data[0].approvalFlag?"是":"否")
                    ),
                    React.createElement("p",{className:"approvaInfo_p"},this.props.data[0].remark
                    )
                )
            )
            );
    }
});


//ReactDOM.render(React.createElement(ApprovalInfo,{index:0,data:{itemId:"465456",auditor:"张三",auitTime:"20160606",remark:"我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见我有毛意见"}}),document.body)

//上报记录
var ProposerInfo = React.createClass({
    getInitialState:function(){
        return {
        };
    },
    componentDidMount: function(){
        if(this.props.index==0){
            $("#executeLogInfo_main"+this.props.index).css("display", "block");
            $("#executeLogInfo_head_rd"+this.props.index).attr("class","executeLogInfo_head_rd1");
        }
    },
    hanOnistoggleclick: function(){
        if($("#executeLogInfo_main"+this.props.index).css("display")== "block"){
            $("#executeLogInfo_main"+this.props.index).css("display", "none");
            $("#executeLogInfo_head_rd"+this.props.index).attr("class","executeLogInfo_head_rd");
        }else{
            $("#executeLogInfo_main"+this.props.index).css("display", "block");
            $("#executeLogInfo_head_rd"+this.props.index).attr("class","executeLogInfo_head_rd1");
        }
    },
    editClickt: function(){

    },
    render:function(){
        var str  = "";
        if(this.props.data[0].auditType!="" && this.props.data[0].auditType!=undefined && this.props.data[0].auditType.length!=0){
            str = this.props.data[0].auditType+"申请";
        }
        return (
            React.createElement("div",{className:"executeLogInfo"},
                React.createElement("div",{className:"executeLogInfo_head",onClick:this.hanOnistoggleclick},
                    React.createElement("div",{className:"approval_head_l"}

                    ),
                    React.createElement("div",{className:"executeLogInfo_head_c"},
                        React.createElement("label",{className:"executeLogInfo_head_cl"},str),
                        React.createElement("label",{className:"executeLogInfo_head_cll"},this.props.data[0].auditTimeFormat)
                    ),
                    React.createElement("div",{className:"executeLogInfo_head_r"},
                        React.createElement("div",{id:"executeLogInfo_head_rd"+this.props.index,className:"executeLogInfo_head_rd"})
                    )
                ),
                React.createElement("div",{id:"executeLogInfo_main"+this.props.index,className:"executeLogInfo_main approvalInfo_div",style:{display: "none"}},
                    React.createElement("div",{className:"executeLogInfo_main_div"},
                        React.createElement("label",{className:"executeLogInfo_main_label"},"上报人"),
                        React.createElement("label",{className:"executeLogInfo_main_label1 approvalInfo_label"},this.props.data[0].auditor)
                    ),
                    React.createElement("p",{className:"approvaInfo_p"},this.props.data[0].remark)
                )
            )
            );
    }
});
//审批文件详情
var ApprovalFileInfo = React.createClass({
    getInitialState:function(){
        return {
            data:this.props.data[0]
        };
    },
    componentDidMount: function(){
        if(this.props.index==0){
            $("#executeLogInfo_main"+this.props.index).css("display", "block");
            $("#executeLogInfo_head_rd"+this.props.index).attr("class","executeLogInfo_head_rd1");
        }
    },
    hanOnistoggleclick: function(){
        if($("#executeLogInfo_main"+this.props.index).css("display")== "block"){
            $("#executeLogInfo_main"+this.props.index).css("display", "none");
            $("#executeLogInfo_head_rd"+this.props.index).attr("class","executeLogInfo_head_rd");
        }else{
            $("#executeLogInfo_main"+this.props.index).css("display", "block");
            $("#executeLogInfo_head_rd"+this.props.index).attr("class","executeLogInfo_head_rd1");
        }
    },
    editClick: function(){
        $("#ledgerdetails_add_div").empty();
        ReactDOM.render(React.createElement(ApprovalFile,{showModal:true,title:'编辑审批文件',buildingId:this.props.data[0].buildingId,imgList:this.props.data[0].imgList,approveDate:this.props.data[0].approveDateFormat,fileName:this.props.data[0].fileName,itemId:this.props.data[0].itemId}),document.getElementById("ledgerdetails_add_div"));
    },
    removeClick:function(){
        var _this = this;
        layer.confirm('您确定要删除该条巡查记录吗？', {
                btn: ['确定','取消'] //按钮
            },
            function(index){
                layer.close(index);
                var sid = getCookie("sid");
                var rules={"sid":sid,"itemId":_this.props.data[0].itemId};
                var tmp = JSON.stringify(rules);
                $.ajax({
                    url:common_ip+"approve.do?action=delete",
                    dataType:'json',
                    data: tmp,
                    type:'post',
                    contentType:"application/x-www-form-urlencoded",
                    success: function(data){
                        if(data.successFlag){
                            layer.msg("删除成功！",{icon:1});
                            nsEventBus.eventbus.broadcast("addHints_success","");
                        } else{
                            layer.alert("删除失败！"+data.errorMsg,{icon:2,title:"错误"});
                        }
                    }.bind(this),
                    error: function(request, state, error){
                        layer.alert(error,{icon:2,title:"错误"});
                        console.error(this.props.url, state, error.toString());
                    }.bind(this)
                });
            });
    },
    render:function(){
        var _this =this;
        var tmpimgs=[];
        var imgs = [];
        if(typeof(_this.props.data[0].imgList)!="undefined"&&_this.props.data[0].imgList!=null&&_this.props.data[0].imgList!="") {
            _this.props.data[0].imgList.map(function(edata){
                tmpimgs.push({filePath: edata.path, thumbnailPath: edata.thumPath});
            })
        }
        imgs.push(React.createElement(ShowBigImg, {imgList: tmpimgs}));
        return (
            React.createElement("div",{className:"executeLogInfo"},
                React.createElement("div",{className:"executeLogInfo_head",onClick:this.hanOnistoggleclick},
                    React.createElement("div",{className:"approval_head_l"}

                    ),
                    React.createElement("div",{className:"executeLogInfo_head_c"},
                        React.createElement("label",{className:"executeLogInfo_head_cl"},"审批文件-"+_this.props.data[0].fileName),
                        React.createElement("label",{className:"executeLogInfo_head_cll"},_this.props.data[0].createTimeFormat)
                    ),
                    React.createElement("div",{className:"executeLogInfo_head_r"},
                        React.createElement("div",{id:"executeLogInfo_head_rd"+this.props.index,className:"executeLogInfo_head_rd"})
                    )
                ),
                React.createElement("div",{id:"executeLogInfo_main"+this.props.index,className:"executeLogInfo_main",style:{display: "none"}},
                    React.createElement("div",{className:"executeLogInfo_main_imgdiv"},
                        imgs
                    ) ,
                    React.createElement("div",{className:"approval_right"},
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"审批时间"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},_this.props.data[0].approveDateFormat) ,
                            React.createElement("button",{className:"executeLogInfo_main_button",onClick:this.editClick},
                                React.createElement("label",{className:"executeLogInfo_main_Edit"}),"编辑"
                            ),
                            React.createElement("button",{className:"executeLogInfo_main_button1",onClick:this.removeClick},
                                React.createElement("label",{className:"executeLogInfo_main_colse"}),
                                React.createElement("span",{className:""},"删除")
                            )
                        )
                    )
                )
            )
        );
    }
});

//ReactDOM.render(React.createElement(ProposerInfo,{index:0,data:{itemId:"465456",auditor:"张三",auitTime:"20160606"}}),document.body)
