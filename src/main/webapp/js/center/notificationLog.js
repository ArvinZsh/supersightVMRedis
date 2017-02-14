
var Modal = window.Modal || ReactBootstrap.Modal;

var Notification = React.createClass({

    getInitialState:function(){
        return {
            imgList:this.props.imgList,
            successNum:this.props.successNum,
            notification:this.props.notification,
            tag:this.props.tag,
            notificationInfo:"",
            photoId:"",
            result:"",
        };
    },

    componentDidMount: function(){
        var _this=this;
        nsEventBus.eventbus.on("UploadImage_update"+this.props.tag,"UploadImage_update"+this.props.tag,function(msg){
            if(msg.length>0){
                _this.setState({photoId:msg[0].fileId});
                var noticeNo =document.getElementById("noticeNo").value;
                var sid = getCookie("sid");
                var creator = getCookie("Name");
                var rules={"sid":sid,"noticeId":"","typeCode":_this.state.notification,"buildingId":_this.props.buildingId.buildingId,"creator":creator,"photoId":msg[0].fileId,"noticeNo":noticeNo}
                var tmp = JSON.stringify(rules);
                console.log(tmp);
                $.ajax({
                    url:common_ip+"officialNotice.do?action=save",
                    dataType:'json',
                    data: tmp,
                    type:'post',
                    contentType:"application/x-www-form-urlencoded",
                    success: function(data){
                        if(data.successFlag){
							layer.msg("上传成功！",{icon:1});
                            _this.state.result="上传成功！";
                            _this.setState({result:"上传成功！"});
                            nsEventBus.eventbus.broadcast("addHints_success","");
                        } else{
                            _this.setState({result:"上传失败！"});
                            layer.alert(data.errorMsg,{icon:2});
                        }

                    }.bind(this),
                    error: function(request, state, error){
                        layer.alert(error);
                        console.error(this.props.url, state, error.toString());
                    }.bind(this)
                });
            }else{
                _this.setState({photoId:""});
            }
        });

    },
    onClick:function(e){
        if(e.currentTarget.checked){
            ReactDOM.render(React.createElement(UploadImage,{className:"notification-modal_input",imgList:this.props.imgList,successNum:this.props.successNum,mulSupported:false,uploadNum:1,tag:this.props.tag}),document.getElementById("notification_div"+this.props.tag));
        }else{
            if(this.state.photoId!=""){
                e.currentTarget.checked=true;
                layer.alert("请先删除上传通知书",{icon:"2",title:"提示"});
                return;
            }
            $("#notification_div"+this.props.tag).empty();
        }

    },
    render:function(){
        return React.createElement("div",{className:"notification_div"},
            React.createElement("p",{className:"patril_step_p"},
                React.createElement("input",{type:"checkbox",name:"notification",className:"patril_step_input",value:this.props.value,onClick:this.onClick}),
                React.createElement("label",{className:"patril_steplabel"},this.props.text),
                React.createElement("label",{className:"patril_steplabel_1"},this.state.result)
            ),
            React.createElement("label",{className:"notification_div1"},
                React.createElement("label",{className:"patril_steplabel"},"通知书编号："),
                React.createElement("input",{type:"txt",className:"patril_input",id:"noticeNo"})
            ),
            React.createElement("div",{id:"notification_div"+this.props.tag})
        )
    }
});
var NotificationLogEdit = React.createClass({

    getInitialState:function(){
        //var patrilStep=[{value:"责令停止违法行为通知书",text:"责令停止违法行为通知书"},{value:"责令改正通知书",text:"责令改正通知书"},{value:"限期拆除通知书",text:"限期拆除通知书"},{value:"查封（扣押）决定书及清单",text:"查封（扣押）决定书及清单"},{value:"停止供水、供电、出售预拌混泥土通知书",text:"停止供水、供电、出售预拌混泥土通知书"},{value:"催告书",text:"催告书"},{value:"限期拆除公告",text:"限期拆除公告"},{value:"强制执行决定书",text:"强制执行决定书"}]
        return {
            uploadState:false,
            imgList:[],
            showModal:this.props.showModal,
            title:this.props.title,
            patrilStep:[],
        };
    },

    componentDidMount: function(){

        var sid = getCookie("sid");
        var creator =getCookie("userName");
        var rules={"sid":sid,"buildingId":this.props.buildingId.buildingId}
        var tmp = JSON.stringify(rules);
        var _this=this;
        $.ajax({
            url:common_ip+"officialNotice.do?action=list",
            dataType:'json',
            data: tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
					
                    _this.setState({imgList:data.list});
                } else{
                    layer.alert("获取已开具通知书失败！请重试！"+data.errorMsg,{icon:2});
                }

            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
        var rules1={"sid":sid,"typeId":"'NoticeCode'"};
        var tmp1 = JSON.stringify(rules1);
        $.ajax({
            url:common_ip+"commonCode.do?action=listSub",
            dataType:'json',
            data: tmp1,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
					
                    var noticecode=[];
                    for(var i=0;i<data.commonCodeList.length;i++){
                        if(data.commonCodeList[i].typeId=="NoticeCode"){
                            noticecode.push(data.commonCodeList[i]);
                        }
                    }
                    this.setState({patrilStep:noticecode});

                } else{
                    layer.alert("请求失败！"+data.errorMsg,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error,{icon:2,title:"错误"});
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },
    close: function close() {
     this.setState({ showModal: false });
    },
    //保存点击事件
    sendClick:function sendClick(){
        if(this.state.uploadState){
            layer.alert("文件正在上传请稍等");
            return;
        }
    },
    render:function(){

         var patril_step=[];
            var i=0;
            var _this=this;
            if(typeof(this.state.imgList)!=undefined&&this.state.imgList!=null&&this.state.imgList!=""){
                this.state.imgList.map(function(data){
                    if(typeof (data.img)!="undefined"){

                        patril_step.push(
                            React.createElement("div",{className:"notification_div"},
                                React.createElement("p",{className:"patril_step_p"},
                                    React.createElement("input",{type:"checkbox",name:"notification",className:"patril_step_input",value:data.typeCode,onClick:this.onClick,disabled:"disabled",checked:true}),
                                    React.createElement("label",{className:"patril_steplabel"},data.typeCode)
                                ),
                                React.createElement("div",{id:"notification_div"},

                                    React.createElement("p",{className:"UploadImageTd_p"},
                                        React.createElement("label",{className:"UploadImageTd_lab"},"通知书编号："),
                                        React.createElement("label",{className:"UploadImageTd_noticeNo"},data.noticeNo=="null"?"无":data.noticeNo)
                                    ),
                                    React.createElement("img",{className:"UploadImageTd_img", src:data.img.thumPath})
                                )
                            )
                        );
                        i++;
                    }
                });
        }
        i=0;
        if(typeof(this.state.patrilStep)!=undefined&&this.state.patrilStep!=null){
            this.state.patrilStep.map(function(data){
                var isexist=false;
                _this.state.imgList.map(function(data1){
                   if(data.codeId==data1.typeCode){
                       isexist=true
                   }
                });
                if(!isexist){
                    patril_step.push(
                        React.createElement(Notification,{className:"notification-modal_input1",imgList:[],successNum:0,notification:data.codeId,tag:i,value:data.codeId,text:data.codeName,buildingId:_this.props.buildingId})
                    );
                    i++;
                }
            });
        }


        return React.createElement(
            "div",{id:"hints_toolbar"},
            React.createElement(Modal,{id:"hints_reply",bsSize:"large",show:this.state.showModal,keyboard:true,onHide:this.close,animation:true,dialogClassName:"notification_modal"},
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
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},"开具通知书" ),
                            React.createElement("div",{className:"patril_step"},
                                patril_step
                            )
                        ) ,

                        React.createElement("p",{id:"hreoly-modal_sendp"},
                            React.createElement("label",{id:"hreoly-modal_sendl"} )
                        )
                    )
            )
        );
    }
});
//ReactDOM.render(React.createElement(NotificationLogEdit,{title:"+通知书记录",showModal:true,isSelectUser:true}),document.body)

//通知书详情
var NotificationInfo = React.createClass({
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
    removeClick:function(){
        var _this = this;
        var index1 = $(".executeLogInfo_main_div:hover").index();
        layer.confirm('您确定要删除该条通知书吗？', {
                btn: ['确定','取消'] //按钮
            },
            function(index){
                layer.close(index);
                var sid = getCookie("sid");

                var rules={"sid":sid,"itemId":_this.props.data[index1].noticeId,"type":"notice"};
                var tmp = JSON.stringify(rules);
                $.ajax({
                    url:common_ip+"buildings.do?action=deleteRecord",
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
        var tmp=[];
        var _this = this;
        this.props.data.map( function(data){
            var imgs=[];
            if(typeof(data.img)!="undefined"&&data.img!=null&&data.img!=""){
                imgs.push({filePath:data.img.path,thumbnailPath:data.img.thumPath});
                //imgs.push(data.img);
                tmp.push(
                React.createElement("div",{className:"executeLogInfo_main_div"},
                    React.createElement("p",{className:"executeLogInfo_main_p"},"《"+data.typeCode+"》",
                        React.createElement("button",{className:"noticeInfo_main_button1",onClick:_this.removeClick},
                            React.createElement("label",{className:"executeLogInfo_main_colse"}),
                            React.createElement("span",{className:""},"删除")
                        )
                    ),
                    React.createElement("label",{className:"noticeInfo_noticeNo"},"通知书编号："),
                    React.createElement("label",{className:"UploadImageTd_noticeNo"},data.noticeNo=="null"?"无":data.noticeNo),
                    React.createElement(ShowBigImg,{imgList:imgs})
                ));
            }else{
                tmp.push(
                    React.createElement("div",{className:"executeLogInfo_main_div"},
                        React.createElement("label",{className:"UploadImageTd_noticeNo"},data.noticeNo),
                        React.createElement("p",{className:"executeLogInfo_main_p"},data.typeCode),
                        React.createElement("p",{className:""},"图片暂无")
                 ))
            }
        })
        return (
            React.createElement("div",{className:"executeLogInfo"},
                React.createElement("div",{className:"executeLogInfo_head",onClick:this.hanOnistoggleclick},
                    React.createElement("div",{className:"notificationInfo_head_l"}

                    ),
                    React.createElement("div",{className:"executeLogInfo_head_c"},
                        React.createElement("label",{className:"executeLogInfo_head_cl"},"通知书"),
                        React.createElement("label",{className:"executeLogInfo_head_cll"},this.props.data[0].noticeDateFormat)
                    ),
                    React.createElement("div",{className:"executeLogInfo_head_r"},
                        React.createElement("div",{id:"executeLogInfo_head_rd"+this.props.index,className:"executeLogInfo_head_rd"})
                    )
                ),
                React.createElement("div",{id:"executeLogInfo_main"+this.props.index,className:"executeLogInfo_main",style:{display: "none"}},
                    React.createElement("div",{className:"notificationInfo_main_div"},
                        tmp,
                        React.createElement("div",{className:"executeLogInfo_main_div"}
                        )
                    )
                )
            )
            );
    }
});


//ReactDOM.render(React.createElement(NotificationInfo,{index:0,data:[{noticeId:"465456",noticeNo:"",tyoeCoide:"",noticeData:"20160606",photoId:"5454",img:{fileId:"12001",filePath:"../images/weijian2.png",thumbnailPath:"../images/weijian2.png",fileName:""}},{noticeId:"465456",noticeNo:"",tyoeCoide:"",noticeData:"20160606",photoId:"5454",img:{fileId:"12001",filePath:"../images/weijian2.png",thumbnailPath:"../images/weijian2.png",fileName:""}}]}),document.body)
