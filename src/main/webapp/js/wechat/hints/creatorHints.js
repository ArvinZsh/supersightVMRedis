// JavaScrcommon_ipt Document
var CreateHints = React.createClass({

    getInitialState:function(){
         var tmp=[];
        if(typeof(this.props.imgList)!=undefined && this.props.imgList!=null&&this.props.imgList!=""){
            tmp=this.props.imgList;
        }
        return {
            title:this.props.title,
            hintsId:this.props.hintsId,
            showModal:this.props.showModal,
            address:this.props.address,
            describe:this.props.describe,
            reportId:this.props.reportId,
            imgList:tmp,
            operationType:this.props.operationType,
            uploadState:false,
            Community:[],
            SourceCode:[],
        };
    },
    componentDidMount: function(){
        $("#hreoly-modal-div").css("height","537px");
        if(typeof(this.state.describe)!=undefined && this.state.describe!=null&&this.state.describe!=""){
            document.getElementById("hreoly-describe").value=this.state.describe;
        }
        if(typeof(this.state.address)!=undefined && this.state.address!=null&&this.state.address!=""){
            document.getElementById("hreoly-Address").value=this.state.address;
        }
        if(this.props.operationType=="editHints") {
            document.getElementById("hreoly_area0").value = this.props.data.area0;
            document.getElementById("hreoly_creator").value = this.props.data.creator;
            document.getElementById("hreoly_mobile").value = this.props.data.mobile;
        }

        var _this=this;
        nsEventBus.eventbus.on("UploadImage_update","UploadImage_update",function(msg){
            _this.setState({imgList:msg});
        });
        nsEventBus.eventbus.on("Upload_UploadState","Upload_UploadState",function(msg){
            _this.state.uploadState=msg.state;
        });

        var sid = getCookie("sid");
        var rules1={"sid":sid,"typeId":"'CommunityCode','SourceCode'"};
        var tmp1 = JSON.stringify(rules1);
        $.ajax({
            url:common_ip+"commonCode.do?action=listSub",
            dataType:'json',
            data: tmp1,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    var communitycode=[];
                    var sourcecode = [];
                    for(var i=0;i<data.commonCodeList.length;i++){
                        if(data.commonCodeList[i].typeId=="CommunityCode"){
                            communitycode.push(data.commonCodeList[i]);
                        }
                        if(data.commonCodeList[i].typeId=="SourceCode"){
                            sourcecode.push(data.commonCodeList[i]);
                        }

                    }
                    this.setState({Community:communitycode});
                    this.setState({SourceCode:sourcecode});
                    if(this.props.operationType=="editHints") {
                        document.getElementById("buiddings_borwse_community").value = this.props.data.area1;
                        document.getElementById("buiddings_borwse_sourcecode").value = this.props.data.source;
                    }
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
        var _this=this;
        layer.confirm('您确定要放弃修改吗？', {
                btn: ['确定','取消'] //按钮
            },
            function(index){
                _this.setState({ showModal: false });
                layer.close(index);
            });
    },
    //发送点击事件
    sendClick:function sendClick(){
        var describe = document.getElementById("hreoly-describe").value.trim();
        var address = document.getElementById("hreoly-Address").value.trim();
        var community = document.getElementById("buiddings_borwse_community").value.trim();
        var area0 = document.getElementById("hreoly_area0").value.trim();
        var reportMan = document.getElementById("hreoly_creator").value.trim();
        var mobile = document.getElementById("hreoly_mobile").value.trim();
        var sourcecode = document.getElementById("buiddings_borwse_sourcecode").value.trim();
        if(area0!="" && area0.length>100){
            document.getElementById("hreoly-modal_sendl").innerHTML="居民小组长度不超过100";
            return;
        }else{
            document.getElementById("hreoly-modal_sendl").innerHTML="";
        }
        if(community==""){
            document.getElementById("hreoly-modal_sendl").innerHTML="请选择社区";
            return;
        }
        var validateName =/^[\u4E00-\u9FA5]+$/;
        if(reportMan!="" && !validateName.test(reportMan)){
            document.getElementById("hreoly-modal_sendl").innerHTML="举报人必须为全中文";
            return;
        }
        if(reportMan!="" && reportMan.length>20){
            document.getElementById("hreoly-modal_sendl").innerHTML="举报人长度不超过20";
            return;
        }
        var re = /^0\d{2,3}-?\d{7,8}$/;
        var re1 = /^1\d{10}$/
        if(mobile!=""&&!re.test(mobile)&&!re1.test(mobile)){
            document.getElementById("hreoly-modal_sendl").innerHTML="请输入正确举报电话";
            return;
        }
        if(address==""){
            document.getElementById("hreoly-modal_sendl").innerHTML="请输入地址";
            return;
        }else{
            if(address.length>100){
                document.getElementById("hreoly-modal_sendl").innerHTML="地址长度不超过100";
                return;
            }else{
                document.getElementById("hreoly-modal_sendl").innerHTML="";
            }
        }
        if(describe==""){
            document.getElementById("hreoly-modal_sendl").innerHTML="请输入描述";
            return;
        }else{
            if(describe.length>3000){
                document.getElementById("hreoly-modal_sendl").innerHTML="描述长度不超过3000";
                return;
            }else{
                document.getElementById("hreoly-modal_sendl").innerHTML="";
            }
        }
        document.getElementById("hreoly-modal_sendl").innerHTML="";
        //var tmp={id:this.state.hintsId,describe:describe,reportPhone:reportPhone,reportName:reportName,address:address,imgList:this.state.imgList}
        /**$.ajax({
         url:this.props.url,
         dataType:'JSON',
         Type:'POST',
         data:{cmd:this.state.operationType,SessionId:this.state.sid,id:this.state.hintsId,describe:this.state.describe,reportPhone:this.state.reportPhone,reportName:this.state.reportName,address:this.state.address,imgList:this.state.imgList},
         success: function(data){
         console.log(temp);
         this.setState({workInfos:eval(temp)});
         onGotUserInfo();

         }.bind(this),
         error: function(request, state, error){
         layer.alert(error);
         console.error(this.props.url, state, error.toString());
         }.bind(this)
         }); */
        var id="";
        var state="未处理"
        var imgLists=[];
        this.state.imgList.map(function(data){
            imgLists.push(data.fileId);
        });
        var sid = getCookie("sid");
        var uid = getCookie("uid");
        if(this.state.operationType=="editHints"){
             uid=this.state.reportId;
            id=this.state.hintsId;
            state=this.props.data.statusId;
        }
        var creator = getCookie("userName");
        var rules={"sid":sid,"creatorId":uid,"hintId":id,"remark":describe,"creatorName":creator,"isInterior":"true","creator":reportMan,"source":sourcecode,"mobile":mobile,"address":address,"imgList":imgLists,"statusId":state,creatortype:"内部人员",area0:area0,area1:community}
        var tmp = JSON.stringify(rules);
        console.log(tmp);
        $.ajax({
            url:common_ip+"hint.do?action=save",
            dataType:'json',
            data: tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    layer.msg("操作成功",{icon:1});
                    this.setState({ showModal: false });
                    nsEventBus.eventbus.broadcast("addHints_success","");
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
    render:function(){

        var community=[];
        if(typeof(this.state.Community)!=undefined&&this.state.Community!=null){
            this.state.Community.map(function(arr){
                community.push(React.createElement("option",{className:"buiding_communitycla",value:arr.codeId},arr.codeName));
            })
        }
        var sourcecode=[];
        if(typeof(this.state.SourceCode)!=undefined&&this.state.SourceCode!=null){
            this.state.SourceCode.map(function(arr){
                sourcecode.push(React.createElement("option",{value:arr.codeId},arr.codeName))
            })
        }
        return React.createElement(
            "div",{id:"hints_toolbar"},
            React.createElement(Modal,{id:"hints_reply",bsSize:"large",show:this.state.showModal,keyboard:true,onHide:this.close,animation:true,dialogClassName:"custom-modaladd"},
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
                    React.createElement("div",{ id: "hm_rightdiv" },
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("span",{className:"execute_date_xin"},"*" ),"现场照片"),
                            React.createElement(UploadImage,{className:"hreoly-modal_input",imgList:this.state.imgList,successNum:this.state.imgList.length,mulSupported:false})
                        ) ,
                        React.createElement("p",{className:"hreoly-modal_p",id:"hreoly-modal_p1"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("span",{className:"execute_date_xin"},"*" ),"社区" ),
                            React.createElement("select",{id:"buiddings_borwse_community",className:"buiddings_borwse_grid"},
                                community
                            )
                        ),
                        React.createElement("p",{className:"hreoly-modal_p",id:"hreoly-modal_p1"},
                            React.createElement("label",{className:"hreoly-modal_label"},"居民小组" ),
                            React.createElement("input",{id:"hreoly_area0",className:"hreoly-modal_input input_height"})
                        ),
                        React.createElement("div",{className:"builddings_allmap"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("span",{className:"execute_date_xin"},"*" ),"线索来源" ),
                            React.createElement("select",{id:"buiddings_borwse_sourcecode",className:"buiddings_borwse_grid"},
                                sourcecode
                            )
                        ),
                        React.createElement("div",{id:"hreoly_report"},
                            React.createElement("p",{className:"hreoly-modal_p",id:"hreoly-modal_p1"},
                                React.createElement("label",{className:"hreoly-modal_label"},"举报人" ),
                                React.createElement("input",{id:"hreoly_creator",className:"hreoly-modal_input input_height"})
                            ),
                            React.createElement("p",{className:"hreoly-modal_p",id:"hreoly-modal_p1"},
                                React.createElement("label",{className:"hreoly-modal_label"},"电话：" ),
                                React.createElement("input",{id:"hreoly_mobile",className:"hreoly-modal_input input_height"})
                            )
                        ),
                        React.createElement("p",{className:"hreoly-modal_p",id:"hreoly-modal_p1"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("span",{className:"execute_date_xin"},"*" ),"地址" ),
                            React.createElement("input",{id:"hreoly-Address",className:"hreoly-modal_input"})
                        ),
                        React.createElement("p",{className:"hreoly-modal_p",id:"hreoly-modal_content"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("span",{className:"execute_date_xin"},"*" ),"描述" ),
                            React.createElement("textarea",{id:"hreoly-describe",className:"hreoly-modal_input"})
                        )
                    ),
                    React.createElement("p",{id:"hreoly-modal_sendp"},
                        React.createElement("button",{className:"hreoly-modal_p",id:"hreoly-modal_send",onClick:this.sendClick},"保存" ),
                        React.createElement("label",{id:"hreoly-modal_sendl"} )
                    )
                )

            )
        );
    }
});