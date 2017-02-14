
var patrolLog = React.createClass({

    getInitialState:function(){
        if(this.props.operationType!="update"){
            return {
                Patrol:[],
                measures:[],
                harmLevel:[],
                title:this.props.title,
                showModal:this.props.showModal,
                orgInfo:"",
                addresseeList:[],
                imgList:[],
                fileList:[],
                uploadState:false,
                isSelectUser:true,
                selectUserType:1,
                uploadMovieState:false,
            };
        }  else{
            var imgs=[];
            var movies = [];
            if(typeof(this.props.data.patrolPhotos)!="undefined"&&this.props.data.patrolPhotos!=null&&this.props.data.patrolPhotos!=""){
                this.props.data.patrolPhotos.map(function(data){
                    imgs.push({filePath:data.path,thumbnailPath:data.thumPath,fileId:data.fileId});
                })
            }
            if(typeof(this.props.data.patrolVideos)!="undefined"&&this.props.data.patrolVideos!=null&&this.props.data.patrolVideos!=""){
                this.props.data.patrolVideos.map(function(data){
                    movies.push({filePath:data.path,thumbnailPath:data.thumPath,fileId:data.fileId,type:data.type});
                })
            }
            return {
                Patrol:[],
                measures:[],
                harmLevel:[],
                title:this.props.title,
                showModal:this.props.showModal,
                orgInfo:"",
                addresseeList:[],
                imgList:imgs,
                fileList:movies,
                uploadState:false,
                uploadMovieState:false,
                isSelectUser:true,
                selectUserType:1,
            };
        }
    },

    componentDidMount: function(){
        var _this = this;

        if(typeof (this.props.data.patrolUserList)!="undefined"&&this.props.data.patrolUserList!=null&&this.props.data.patrolUserList!=""){
            this.props.data.patrolUserList.map(function(data){
                _this.state.addresseeList.push(data);
            });
        }
        nsEventBus.eventbus.on("UploadFile_update","UploadFile_update",function(msg){
            _this.setState({fileList:msg});
        });
        var sid = getCookie("sid");
        var rules={"sid":sid,"typeId":"'PatrolCode','MeasureCode','HarmfulCode'"};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"commonCode.do?action=listSub",
            dataType:'json',
            data: tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    var patrol=[];
                    var measures=[];
                    var harmLevel=[];
                    for(var i=0;i<data.commonCodeList.length;i++){
                        if(data.commonCodeList[i].typeId=="PatrolCode"){
                            patrol.push(data.commonCodeList[i]);
                        }
                        if(data.commonCodeList[i].typeId=="MeasureCode"){
                            measures.push(data.commonCodeList[i]);
                        }
                        if(data.commonCodeList[i].typeId=="HarmfulCode"){
                            harmLevel.push(data.commonCodeList[i]);
                        }
                    }
                    this.setState({Patrol:patrol});


                    if(this.props.operationType=="update"){
                        $("#patril_type").val(this.props.data.patrolCode);
                    }
                    this.setState({measures:measures});
                    this.setState({harmLevel:harmLevel});
                    if(this.props.operationType=="update"){
                        var box=document.getElementsByName('patrol_Step');
                        for (var i=0;i<this.props.data.measures.length;i++ ){
                            for (var j=0;j<box.length;j++ ){
                                if(box[j].value==this.props.data.measures[i].measureCode){
                                    box[j].checked=true;
                                }
                            }
                        }
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
        nsEventBus.eventbus.on("UploadImage_update1","UploadImage_update",function(msg){
            _this.setState({imgList:msg});
        });;
        nsEventBus.eventbus.on("Upload_UploadState","Upload_UploadState",function(msg){
            _this.state.uploadState=msg.state;
        });
        nsEventBus.eventbus.on("Upload_UploadMovieState","Upload_UploadMovieState",function(msg){
            _this.state.uploadMovieState=msg.state;
        });
        nsEventBus.eventbus.on("orgClik","orgClik",function(msg){
            // _this.state.userInfo="";
            $("#hm_meandiv_1").empty();
            ReactDOM.render(React.createElement(TUserList,{orgId:msg.orgId,ishowStop:false,keyValue:""}),document.getElementById("hm_meandiv_1"));
            _this.setState({orgInfo:msg});
        });
        nsEventBus.eventbus.on("userClick","userClick",function(msg){
                for(var i=0;i<_this.state.addresseeList.length;i++){
                    if(_this.state.addresseeList[i].userId==msg.userId){
                        return;
                    }
                }
                var tmp=_this.state.addresseeList;
                tmp.push({userId:msg.userId,userName:msg.userName});
            _this.setState({addresseeList:tmp});
            console.log(msg);
        });

        var time1 = new Date().Format("yyyy-MM-dd");
        document.getElementById("patril_Time").value=time1;
        if(this.props.operationType=="update"){
            document.getElementById("patril_Time").value=this.props.data.createTimeFormat.substring(0,10);
            $("#patril_type").val(this.props.data.patrolCode);
            $("#patril_ischange").val((this.props.data.changeFlag==true)?"1":"0");
            $("#patril_harm").val(this.props.data.harmfulCode);
            document.getElementById("patrol_remark").value=this.props.data.remark;


        }

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
    usertrClick: function usertrClick(e) {
        if(!this.state.isSelectUser){
            return;
        }
        var targetid = e.target.getAttribute("id");
        if(this.state.selectUserType==1&&this.state.addresseeList!=null){
            var num=0;
            for(var i=0;i<this.state.addresseeList.length;i++){
                if(this.state.addresseeList[i].userId==targetid){
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
                if(this.state.copyToList[i].userId==targetid){
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
        var _this = this;
        if(this.state.uploadState){
            layer.alert("文件正在上传请稍等",{icon:5,title:"提示"});
            return;
        }
        if(this.state.uploadMovieState){
            layer.alert("视频正在上传请稍等",{icon:5,title:"提示"});
            return;
        }
        var address = document.getElementById("patrol_address").value.trim();
        var Time = document.getElementById("patril_Time").value.trim();
        var remark = document.getElementById("patrol_remark").value.trim();
        var type = document.getElementById("patril_type").value.trim();
        var isChange = document.getElementById("patril_ischange").value.trim();
        var harm = document.getElementById("patril_harm").value.trim();

        var box=document.getElementsByName('patrol_Step');
        var step=[];
        for (var i=0;i<box.length;i++ ){
            if(box[i].checked){ //判断复选框是否选中
                step.push(box[i].value);
            }
        }
        if(this.state.addresseeList==null||this.state.addresseeList==""||this.state.addresseeList.length==0){
            document.getElementById("patrol-modal_sendl").innerHTML="请选择联系人";
            return;
        }
        if(this.state.imgList==null||this.state.imgList==""||this.state.imgList.length==0){
            document.getElementById("patrol-modal_sendl").innerHTML="请上传现场照片";
            return;
        }
        if(Time==""){
            document.getElementById("patrol-modal_sendl").innerHTML="请选择巡查时间";
            return;
        }
        if(isChange == 1){
            if(remark==""){
                document.getElementById("patrol-modal_sendl").innerHTML="请输入现场情况";
                return;
            }else{
                if(remark.length>180){
                    document.getElementById("patrol-modal_sendl").innerHTML="现场情况长度不超过180";
                    return;
                }
            }
            layer.confirm(' 现场情况有变化，危害等级将上升，确认提交？', {
                    btn: ['确定','取消']
                },
                function(index){
                    layer.close(index);
                    document.getElementById("patrol-modal_sendl").innerHTML="";
                    var addressLists=[];
                    _this.state.addresseeList.map(function(array){
                        addressLists.push({"uid":array.userId,"userName":array.userName});
                    });
                    var creatorId = getCookie("uid");
                    var  creator=getCookie("userName");
                    var iList=[];
                    _this.state.imgList.map(function(data){
                        iList.push(data.fileId)
                    });
                    var itemId="";
                    var building_Id = "";
                    if(_this.props.operationType=="update"){
                        itemId=_this.props.data.itemId;
                        building_Id = _this.props.data.buildingId;
                    }else {
                        building_Id = _this.props.data.buildingId;
                    }
                    console.log(_this.state.fileList);
                    var videoList = [];
                    for(var i = 0; i<_this.state.fileList.length;i++){
                        videoList.push(_this.state.fileList[i].fileId);
                    }
                    if(_this.props.level == "低危"){
                        _this.props.level = "中危"
                    }else if(_this.props.level == "中危"){
                        _this.props.level = "高危未拆"
                    }
                    var sid = getCookie("sid");
                    var rules={"sid":sid, "videoList":videoList,"webFlag":true,"itemId":itemId,"buildingId":building_Id,"remark":remark,"patrolCode":type,"creator":creator,"measureList":step,"userList":addressLists,"imgList":iList,"createTime":Time,"changeFlag":isChange=="1"?true:false,"harmfulCode":_this.props.level}
                    var tmp = JSON.stringify(rules);
                    console.log(tmp);
                    $.ajax({
                        url:common_ip+"patrolRecord.do?action=save",
                        dataType:'json',
                        data: tmp,
                        type:'post',
                        contentType:"application/x-www-form-urlencoded",
                        success: function(data){
                            if(data.successFlag){
                                layer.msg("保存成功！",{icon:1});
                                nsEventBus.eventbus.broadcast("addHints_success","");
                                _this.setState({ showModal: false });
                            } else{
                                layer.alert("保存失败，请稍后再试！"+data.errorMsg);
                            }

                        }.bind(this),
                        error: function(request, state, error){
                            layer.alert(error);
                            console.error(this.props.url, state, error.toString());
                        }.bind(this)
                    });
            });
        }else{
            document.getElementById("patrol-modal_sendl").innerHTML="";
            var addressLists=[];
            _this.state.addresseeList.map(function(array){
                addressLists.push({"uid":array.userId,"userName":array.userName});
            });
            var creatorId = getCookie("uid");
            var  creator=getCookie("userName");
            var iList=[];
            _this.state.imgList.map(function(data){
                iList.push(data.fileId)
            });
            var itemId="";
            var building_Id = "";
            if(_this.props.operationType=="update"){
                itemId=_this.props.data.itemId;
                building_Id = this.props.data.buildingId;
            }else {
                building_Id = this.props.data.buildingId;
            }
            console.log(this.state.fileList);
            var videoList = [];
            for(var i = 0; i<this.state.fileList.length;i++){
                videoList.push(this.state.fileList[i].fileId);
            }
            var sid = getCookie("sid");
            var rules={"sid":sid, "videoList":videoList,"webFlag":true,"itemId":itemId,"buildingId":building_Id,"remark":remark,"patrolCode":type,"creator":creator,"measureList":step,"userList":addressLists,"imgList":iList,"createTime":Time,"changeFlag":isChange=="1"?true:false,"harmfulCode":_this.props.level}
            var tmp = JSON.stringify(rules);
            console.log(tmp);
            $.ajax({
                url:common_ip+"patrolRecord.do?action=save",
                dataType:'json',
                data: tmp,
                type:'post',
                contentType:"application/x-www-form-urlencoded",
                success: function(data){
                    if(data.successFlag){
                        layer.msg("保存成功！",{icon:1});
                        nsEventBus.eventbus.broadcast("addHints_success","");
                        this.setState({ showModal: false });
                    } else{
                        layer.alert("保存失败，请稍后再试！"+data.errorMsg);
                    }

                }.bind(this),
                error: function(request, state, error){
                    layer.alert(error);
                    console.error(this.props.url, state, error.toString());
                }.bind(this)
            });
        }
    },
    render:function() {
        var tmp = [];
        var selectUsers = [];
        if (typeof(this.state.stateList) != undefined && this.state.stateList != null) {
            this.state.stateList.map(function (data) {
                tmp.push(React.createElement("option", {className: "ht_option", value: data.stateId}, data.stateName));
            });
        }
        var showSelectUser = [];
        if (this.state.isSelectUser) {
            showSelectUser.push(React.createElement("div", {id: "hm_leftdiv"},
                React.createElement("p", {className: "patrol_hint"}, "选泽参与人员"),
                React.createElement("div", {ref: "div", className: "org_tree_div", id: "datas_id"},
                    React.createElement(Tree, {isStopped: false, checkedInfo: this.state.orgInfo})
                )
                ),
                React.createElement("div", {id: "hm_meandiv"},
                    React.createElement("p", {className: "patrol_hint1"}, "*单击姓名即可添加"
                    ),
                    React.createElement("div", {id: "hm_meandiv_1"})
                ),
                React.createElement("div", {id: "hm_meandiv1"},
                    React.createElement("p", {id: "userList_head"},
                        React.createElement("label", {className: "userInfo_div_td3"}, "已选中")
                    ),
                    React.createElement("div", {id: "select_user_div"},
                        React.createElement("table", {id: "tabid"},
                            selectUsers
                        )
                    )
                ));
        }
        if (typeof (this.state.addresseeList) != "undefined") {
            for (var i = 0; i < this.state.addresseeList.length; i++) {
                var aa = React.createElement("tr", {className: "", onClick: this.usertrClick},
                    React.createElement("td", {
                        id: this.state.addresseeList[i].userId,
                        className: "userInfo_div_td3"
                    }, this.state.addresseeList[i].userName)
                )
                selectUsers.push(aa);
            }
        }
        var  address="";
        if(this.state.addresseeList!=null&&this.state.addresseeList!=""){
            this.state.addresseeList.map(function(data){
                address=address+data.userName+"；";
            });
        }
        var copTo="";
        if(this.state.copyToList!=null&&this.state.copyToList!=""){
            this.state.copyToList.map(function(data){
                copTo=copTo+data.name+"；";
            });
        }
        var patril_type=[];
        if(typeof(this.state.Patrol)!=undefined&&this.state.Patrol!=null){
            this.state.Patrol.map(function(info){
                patril_type.push(React.createElement("option",{className:"patril_type_o",value:info.codeId},info.codeName));
            })
        }
        var patril_harm=[];
        if(typeof(this.state.harmLevel)!=undefined&&this.state.harmLevel!=null) {
            this.state.harmLevel.map(function (info) {
                patril_harm.push(React.createElement("option", {className: "patril_harm_o",value:info.codeId },info.codeName));
            })
        }
        var patril_step=[];
        if(typeof(this.state.measures)!=undefined&&this.state.measures!=null){
            this.state.measures.map(function (info) {
                patril_step.push(
                        React.createElement("p",{className:"patril_step_p"},
                            React.createElement("input",{type:"checkbox",name:"patrol_Step",className:"patril_step_input",value: info.codeId}),
                            React.createElement("label",{className:"patril_steplabel"}, info.codeName)
                        )
                );

            })
        }

        return React.createElement(
            "div",{id:"hints_toolbar"},
            React.createElement(Modal,{id:"hints_reply",bsSize:"large",show:this.state.showModal,keyboard:true,onHide:this.close,animation:true,dialogClassName:"patrol_modal"},
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
                        React.createElement("p",{className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("b",{},"*"),"参与人" ),
                            React.createElement("input",{className:"hreoly-modal_input",id:"patrol_address",onClick:this.addresseeClick,value:address})
                        ) ,
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("b",{},"*"),"现场照片" ),
                            React.createElement(UploadImage,{className:"hreoly-modal_input",imgList:this.state.imgList,successNum:this.state.imgList.length,mulSupported:false,tag:"1"})
                        ) ,
                        React.createElement("div",{id:"hml_div",className:"hreoly-modal_p"},
                            React.createElement("label",{id:"hml_adjunct",className:"hreoly-modal_label"},"视频" ),
                            React.createElement(UploadMovie,{mulSupported:true,fileList:this.state.fileList,successNum:this.state.fileList.length})
                        ),
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("b",{},"*"),"巡查时间" ),
                            React.createElement("input", {id:"patril_Time",type:"date", name: "begin",className:"hreoly-modal_input"})
                        ) ,
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("b",{},"*"),"巡查类型" ),
                            React.createElement( "select",{id:"patril_type",className:"hreoly-modal_input"},
                                patril_type
                            )
                        ) ,
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("b",{},"*"),"是否有变化" ),
                            React.createElement( "select",{id:"patril_ischange",className:"hreoly-modal_input"},
                                React.createElement( "option",{className:"patril_ischange_o",value:1},"是"),
                                React.createElement( "option",{className:"patril_ischange_o",value:0},"否")
                            )
                        ) ,
                        React.createElement("div",{id:"hreoly-modal_div2",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("b",{},"*"),"危害等级" ),
                            React.createElement( "select",{id:"patril_harm",className:"hreoly-modal_input"},
                                patril_harm
                            )
                        ) ,
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("b",{},"*"),"现场情况" ),
                            React.createElement("textarea",{id:"patrol_remark",className:"patril_condition hreoly-modal_input"})
                        ) ,
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},"已采取措施" ),
                                React.createElement("div",{className:"patril_step"},patril_step
                                )
                        )
                    ) ,
                    React.createElement("p",{id:"hreoly-modal_sendp"},
                        React.createElement("button",{className:"hreoly-modal_p",id:"hreoly-modal_send",onClick:this.sendClick},"保存" ),
                        React.createElement("label",{id:"patrol-modal_sendl"} )
                    )
                )

            )
        );
    }
});
//ReactDOM.render(React.createElement(patrolLog,{title:"+巡查记录",showModal:true,isSelectUser:true,operationType:""}),document.body)

//巡查记录详情
var patrolLogInfo = React.createClass({
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
        ReactDOM.render(React.createElement(patrolLog,{title:"编辑巡查记录",showModal:true,isSelectUser:true,operationType:"update",data:this.props.data[0],patrolUserList:this.props.data[0].userList,level:this.props.data[0].harmfulCode}),document.getElementById("ledgerdetails_add_div"));
    },
    removeClick:function(){
        var _this = this;
        layer.confirm('您确定要删除该条巡查记录吗？', {
                btn: ['确定','取消'] //按钮
            },
            function(index){
                layer.close(index);
                var sid = getCookie("sid");
                var rules={"sid":sid,"itemId":_this.props.data[0].itemId,"type":"patrol"};
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
        var _this =this;
        var tmpimgs=[];
        var imgs = [];
        if(typeof(_this.props.data[0].patrolPhotos)!="undefined"&&_this.props.data[0].patrolPhotos!=null&&_this.props.data[0].patrolPhotos!="") {
            _this.props.data[0].patrolPhotos.map(function(edata){
                tmpimgs.push({filePath: edata.path, thumbnailPath: edata.thumPath});
            })
        }
        imgs.push(React.createElement(ShowBigImg, {imgList: tmpimgs}));
        var users="";
        if(typeof (_this.props.data[0].patrolUserList)!="undefined"&&_this.props.data[0].patrolUserList!=null){
            _this.props.data[0].patrolUserList.map(function(data){
                users+=data.userName+"、";
            });
        }
        var action="";
        if(typeof (_this.props.data[0].measures)!="undefined"&&_this.props.data[0].measures!=null){
            _this.props.data[0].measures.map(function(data){
                action+=data.measureCode+"、";
            });
        }
        var movies=[];
        var tmpmovies=[];
        // var movieDownload = [];
        // var movieDownloadDiv = [];
        if(typeof(this.state.data.patrolVideos)!="undefined"&&this.state.data.patrolVideos!=null&&this.state.data.patrolVideos!="") {
            this.state.data.patrolVideos.map(function(data){
                movies.push({filePath: data.path, thumbnailPath: data.thumPath,fileName:data.type});
                // movieDownload.push({filePath: data.path});
            })
        }

        // if(typeof(movieDownload[0]) != "undefined"){
        //     if((common_ip.substr(0,common_ip.length-1)+movieDownload[0].filePath).length>11){
        //         var str  = (common_ip.substr(0,common_ip.length-1)+movieDownload[0].filePath).substr(0,11)+"...";
        //     }
        //     for(var i = 0;i<movieDownload.length;i++){
        //         movieDownloadDiv.push(React.createElement("a",{className:"download_a",href:common_ip.substr(0,common_ip.length-1)+movieDownload[i].filePath},str));
        //     }
        // }
        tmpmovies.push(React.createElement(MovieResultRow, {imgList: movies}));
        return (
            React.createElement("div",{className:"executeLogInfo"},
                React.createElement("div",{className:"executeLogInfo_head",onClick:this.hanOnistoggleclick},
                    React.createElement("div",{className:"patrolLogInfo_head_l"}

                    ),
                    React.createElement("div",{className:"executeLogInfo_head_c"},
                        React.createElement("label",{className:"executeLogInfo_head_cl"},"巡查-"+_this.props.data[0].patrolCode),
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
                    React.createElement("div",{className:"executeLogInfo_download"},
                        React.createElement("div",{className:"movieTitle"},"视频"),
                            tmpmovies
                    ),
                    React.createElement("div",{className:"patrolLog_right"},
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"巡查时间"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},_this.props.data[0].createTimeFormat) ,
                            React.createElement("button",{className:"executeLogInfo_main_button",onClick:this.editClick},
                                React.createElement("label",{className:"executeLogInfo_main_Edit"}),"编辑"
                            ),
                            React.createElement("button",{className:"executeLogInfo_main_button1",onClick:this.removeClick},
                                React.createElement("label",{className:"executeLogInfo_main_colse"}),
                                React.createElement("span",{className:""},"删除")
                            )
                        ),
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"参与人员"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},users)
                        ),
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"是否有变化"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},(_this.props.data[0].changeFlag==true)?"是":"否")
                        ),
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"危害等级"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},_this.props.data[0].harmfulCode)
                        ),
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"现场情况"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},_this.props.data[0].remark)
                        ),
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"已采取措施"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},action)
                        )
                    )
                )
            )
            );
    }
});


//ReactDOM.render(React.createElement(patrolLogInfo,{index:0,data:{creatortime:"2016-5-11",patrolCode:"巡查后复查",remark:"新华社北京6月7日电（记者王经国）2016年全国军队转业干部安置工作会议7日在京举行。会议传达了中共中央总书记、国家主席、中央军委主席习近平关于深化国防和军队改革期间军队转业干部安置工作的重要讲话，对学习贯彻讲话精神，做好军队转业干部安置工作作出部署。",userList:[{uid:"1",userName:"王杰"},{uid:"2",userName:"张国栋"}],imgList:[{fileId:"12001",filePath:"images/weijian1.jpg",thumbnailPath:"images/weijian1.jpg",fileName:""},{fileId:"12001",filePath:"images/weijian2.png",thumbnailPath:"images/weijian2.png",fileName:""},{fileId:"12001",filePath:"images/weijian1.jpg",thumbnailPath:"images/weijian1.jpg",fileName:""},{fileId:"12001",filePath:"images/weijian2.png",thumbnailPath:"images/weijian2.png",fileName:""}]}}),document.body)
