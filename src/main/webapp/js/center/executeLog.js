
var Patril_harm = React.createClass({
    getInitialState:function(){
        return {
            data:[]
        }
    },
    componentDidMount: function(){
        if(typeof (this.props.data)!="undefined"){
            for(var i=0;i<this.props.harmLevel.length;i++){
                // 这里只是判断字符串
                if (this.props.harmLevel[i].codeName == this.props.data.harmfulCode){
                    $("#execute_harm option").eq(i).attr({"selected":"selected"});
                }
            }
        }
    },
    render:function(){
        console.log(this.props.harmLevel);
        return(
            React.createElement("div", {},
                this.props.harmLevel.map(function (info) {
                    return React.createElement("option", {className:"patril_harm_o",value:info.codeId},info.codeName)
                })
            )
        )
    }
})
var PlayMovies = React.createClass({
    getInitialState: function () {
        return {
            showModal:this.props.showModal,
            href:this.props.href,
            title:this.props.title,
        };
    },
    componentWillMount:function(){

    },
    close: function close() {
        this.setState({showModal:false});
    },
    render:function () {
        return(
            React.createElement(Modal,{className:"Movies_Model",bsSize:"large",show:this.state.showModal,keyboard:true,onHide:this.close,animation:true},
                React.createElement(
                    Modal.Header,
                    { closeButton: true },
                    React.createElement(
                        Modal.Title,
                        { id: "contained-modal-title-lg" },
                        this.state.title
                    )
                ),
                React.createElement("div", {className: "Movies_Model_Content"},
                    React.createElement("video",{src:this.state.href,controls:"controls",autoplay:"autoplay",width:"800px",height:"500px"})
                )
            )
        )
    }
});
var MovieResultRow = React.createClass({
    getInitialState:function getInitialState(){
        return {
            data:this.props.imgList,
        };
    },
    playMovie:function(event){
        $("#playMovies").empty();
        var href = event.target.name;
        var id =  event.target.id;
        var title =  event.target.alt;
        ReactDOM.render(React.createElement(PlayMovies,{showModal:true,href:href,title:title}),document.getElementById("playMovies"));
    },

    render:function render(){
        var _this = this;
        var tmp=[];
        this.state.data.map(function(movie){
            tmp.push(
                React.createElement("img",{alt:movie.fileName,id:movie.fileId,className:"MovieImageTd_img",name:common_ip.substr(0,common_ip.length-1)+movie.filePath,src:common_ip.substr(0,common_ip.length-1)+movie.thumbnailPath,onClick:_this.playMovie},
                    React.createElement(
                        "div",
                        {className:"MovieImageTr_divd1"} ,
                        React.createElement(
                            "a",
                            {id:"",href:common_ip.substr(0,common_ip.length-1)+movie.filePath,className:"MovieImageTr_a"},"下载"
                        )
                    ),
                    React.createElement("div",{className:"openImg"}))
            )
        });

        return React.createElement(
            "div",
            {className:"MovieImageTr_div"},
            tmp,
            React.createElement("div",{id:"playMovies"})
        );
    }

});
var executeLog = React.createClass({

    getInitialState:function(){
        if(typeof(this.props.data)==undefined||this.props.data==null||this.props.data==""){
            return {
                measures:[],
                harmLevel:[],
                title:this.props.title,
                showModal:this.props.showModal,
                orgInfo:"",
                addresseeList:[],
                imgList:[],
                fileList:[],
                lastImgList:[],
                isSelectUser:this.props.isSelectUser,
                operationType:this.props.operationType,
                uploadState:false,
                uploadMovieState:false,
                data:this.props.data,
                selectUserType:1
            };
        }  else{
            return {
                measures:[],
                harmLevel:[],
                title:this.props.title,
                showModal:this.props.showModal,
                orgInfo:"",
                addresseeList:[],
                fileList:this.props.data.videos,
                imgList:this.props.data.afEnforcePhotos,
                lastImgList:this.props.data.beEnforcePhotos,
                isSelectUser:this.props.isSelectUser,
                operationType:this.props.operationType,
                uploadState:false,
                uploadMovieState:false,
                data:this.props.data,
                selectUserType:1
            };
        }
    },
    componentWillMount: function() {


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
                    var measures=[];
                    var harmLevel=[];
                    for(var i=0;i<data.commonCodeList.length;i++){
                        if(data.commonCodeList[i].typeId=="MeasureCode"){
                            measures.push(data.commonCodeList[i]);
                        }
                        if(data.commonCodeList[i].typeId=="HarmfulCode"){
                            harmLevel.push(data.commonCodeList[i]);
                        }
                    }
                    $("#execute_harm").empty();
                    ReactDOM.render(React.createElement(Patril_harm,{harmLevel:harmLevel,data:this.props.data}),document.getElementById("execute_harm"));
                    this.setState({measures:measures});

                    if(this.props.operationType=="update"){
                        var box=document.getElementsByName('execute_Step');
                        for (var i=0;i<this.props.data.measures.length;i++ ){
                            for (var j=0;j<box.length;j++ ){
                                if(box[j].value==this.props.data.measures[i].measureCode){
                                    box[i].checked=true;
                                }
                            }
                        }
                    }

                    // this.setState({harmLevel:harmLevel});
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
    componentDidMount: function(){
        var _this = this;
        nsEventBus.eventbus.on("UploadFile_update","UploadFile_update",function(msg){
            _this.setState({fileList:msg});
        });
        nsEventBus.eventbus.on("UploadImage_update1","UploadImage_update1",function(msg){
            _this.setState({imgList:msg});
        });
        nsEventBus.eventbus.on("UploadImage_update2","UploadImage_update2",function(msg){
            _this.setState({lastImgList:msg});
        });
        nsEventBus.eventbus.on("Upload_UploadState","Upload_UploadState",function(msg){
            _this.state.uploadState=msg.state;
        });
        nsEventBus.eventbus.on("Upload_UploadMovieState","Upload_UploadMovieState",function(msg){
            _this.state.uploadMovieState=msg.state;
        });
        nsEventBus.eventbus.on("orgClik","orgClik",function(msg){
            _this.state.userInfo="";
            $("#hm_meandiv_1").empty();
            ReactDOM.render(React.createElement(TUserList,{orgId:msg.orgId,ishowStop:false,keyValue:"",enforce:"enforce"}),document.getElementById("hm_meandiv_1"));
            _this.setState({orgInfo:msg});
        });
        nsEventBus.eventbus.on("userClick","userClick",function(msg){
            if(!_this.state.isSelectUser){
                return;
            }
                for(var i=0;i<_this.state.addresseeList.length;i++){
                    if(_this.state.addresseeList[i].id==msg.userId){
                        return;
                    }
                }
            var tmp=_this.state.addresseeList;
            tmp.push({id:msg.userId,name:msg.userName});
            _this.setState({addresseeList:tmp});
            console.log(msg);
        });


     /*   var time1 = new Date().Format("yyyy-MM-dd");
        document.getElementById("execute_Time").value=time1;*/
        if(this.props.operationType=="update"){

            var leader=this.props.data.leader.split(",");
            if(leader.length<=1){
                this.state.addresseeList=[{name:this.props.data.leader}]
            }else{
                var tmp=[];
                leader.map(function(data){
                    if(data!=""){
                        tmp.push({name:data});
                    }
                });
                this.state.addresseeList=tmp;
            }

            document.getElementById("execute_Time").value=this.props.data.enforceDateFormat.substring(0,10);
            document.getElementById("execute_phone").value=this.props.data.mobile;
            document.getElementById("execute_pda").value=this.props.data.pdaNo;

            document.getElementById("execute_condition").value = this.props.data.enforceRemark;

            $("#execute_isInPlace").val(""+this.props.data.endFlag+"");

            document.getElementById("execute_endReason").value=this.props.data.endReason;
            document.getElementById("execute_cooperationRemark").value=this.props.data.cooperationRemark;
            document.getElementById("execute_crewsCount").value=this.props.data.crewsCount;

            $("#execute_isDismantle").val(""+this.props.data.destroyFlag+"");
            document.getElementById("execute_BuildArea").value=this.props.data.buildArea;
            document.getElementById("execute_tier").value=this.props.data.floorCount;
            document.getElementById("execute_TempArea").value=this.props.data.tempArea;
            document.getElementById("execute_TempBlockCount").value=this.props.data.tempBlockCount;
            document.getElementById("execute_BackfillArea").value=this.props.data.backfillArea;
            document.getElementById("execute_OtherRemark").value=this.props.data.otherRemark;


        }

    },
    //收件人点击事件
    addresseeClick:function addresseeClick(e){
        this.setState({selectUserType:1});
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
    //发送点击事件
    sendClick:function sendClick(){
        var _this = this;
        if(this.state.uploadState){
            layer.alert("文件正在上传请稍等");
            return;
        }
        if(this.state.uploadMovieState){
            layer.alert("视频正在上传请稍等",{icon:5,title:"提示"});
            return;
        }
        var phone = document.getElementById("execute_phone").value.trim();
        var pda = document.getElementById("execute_pda").value.trim();
        var time = document.getElementById("execute_Time").value.trim();
        var harm = _this.props.level
        var condition = document.getElementById("execute_condition").value.trim();
        var isInPlace = document.getElementById("execute_isInPlace").value.trim();
        var endReason = document.getElementById("execute_endReason").value.trim();
        var cooperationRemark = document.getElementById("execute_cooperationRemark").value.trim();
        var crewsCount = document.getElementById("execute_crewsCount").value.trim();
        var isDismantle = document.getElementById("execute_isDismantle").value.trim();
        var buildArea = document.getElementById("execute_BuildArea").value.trim();
        var TempArea = document.getElementById("execute_TempArea").value.trim();
        var tier = document.getElementById("execute_tier").value.trim();
        var TempBlockCount = document.getElementById("execute_TempBlockCount").value.trim();
        var BackfillArea = document.getElementById("execute_BackfillArea").value.trim();
        var OtherRemark = document.getElementById("execute_OtherRemark").value.trim();
        if(isDismantle == "true"){
            harm = "高危已拆";
        }
        if(this.state.addresseeList==null||this.state.addresseeList==""||this.state.addresseeList.length==0){
            document.getElementById("executeLog-modal_sendl").innerHTML="请选择负责人";
            return;
        }
        var yzphone = /^1[3|4|5|7|8]\d{9}$/;
        if(phone!=""&&yzphone.test(phone) == false){
            document.getElementById("executeLog-modal_sendl").innerHTML="请输入正确的手机号码";
            return;
        }
        var ze = /\D/g;
        if(pda!=""&&ze.test(pda) == true){
            document.getElementById("executeLog-modal_sendl").innerHTML="PDA号码必须是数字";
            return;
        }
        if(time==""){
            document.getElementById("executeLog-modal_sendl").innerHTML="请选择查处时间";
            return;
        }
        if(this.state.imgList.length<=0){
            document.getElementById("executeLog-modal_sendl").innerHTML="请上传查处前照片";
            return;
        }
        if(this.state.lastImgList.length<=0){
            document.getElementById("executeLog-modal_sendl").innerHTML="请上传查处后照片";
            return;
        }
        if(condition==""){
            document.getElementById("executeLog-modal_sendl").innerHTML="请输入查处情况";
            return;
        }else{
            if(condition.length>180){
                document.getElementById("executeLog-modal_sendl").innerHTML="查处情况长度不超过180";
                return;
            }
        }
        if(isInPlace == "false" && endReason==""){
            document.getElementById("executeLog-modal_sendl").innerHTML="请输入未到位原因";
            return;
        }else{
            if(endReason.length>180){
                document.getElementById("executeLog-modal_sendl").innerHTML="未到位原因长度不超过180";
                return;
            }
        }
        if(cooperationRemark != "" && cooperationRemark.length>180){
            document.getElementById("executeLog-modal_sendl").innerHTML="联动情况长度不超过180";
            return;
        }
        if(crewsCount==""){
            document.getElementById("executeLog-modal_sendl").innerHTML="请输入投入人数";
            return;
        }else{
            if(crewsCount>99999){
                document.getElementById("executeLog-modal_sendl").innerHTML="投入人数不能超过99999";
                return;
            }
        }
        if(ze.test(crewsCount) == true){
            document.getElementById("executeLog-modal_sendl").innerHTML="投入人数必须是整数";
            return;
        }
        var ze1 =/^(-)?\d{1,7}(\.\d{1,3})?$/;
        if(buildArea!=""&&ze1.test(buildArea) == false){
            document.getElementById("executeLog-modal_sendl").innerHTML="请输入正确格式拆除永久建筑面积,格式（示例100.0）";
            return;
        }
        if(tier!=""&&ze1.test(tier) == false){
            document.getElementById("executeLog-modal_sendl").innerHTML="请输入正确格式拆除永久层数,格式（示例100）";
            return;
        }
        if(tier==""){
            tier=0;
        }
        if(TempArea!=""&&ze1.test(TempArea) == false){
            document.getElementById("executeLog-modal_sendl").innerHTML="请输入正确格式建筑面积,格式（示例100.0）";
            return;
        }
        if(TempBlockCount!=""&&ze1.test(TempBlockCount) == false){
            document.getElementById("executeLog-modal_sendl").innerHTML="请输入正确格式拆除临时栋数,格式（示例100）";
            return;
        }
        if(TempBlockCount==""){
            TempBlockCount=0;
        }
        if(BackfillArea!=""&&ze1.test(BackfillArea) == false){
            document.getElementById("executeLog-modal_sendl").innerHTML="请输入正确格式回填面积,格式（示例100.0）";
            return;
        }
        var box=document.getElementsByName('execute_Step');
        var step=[];
        for (var i=0;i<box.length;i++ ){
            if(box[i].checked){ //判断复选框是否选中
                step.push(box[i].value);
            }
        }

        document.getElementById("executeLog-modal_sendl").innerHTML="";
        var creatorId = getCookie("uid");
        var  creator=getCookie("userName");
        var iList=[];
        this.state.imgList.map(function(data){
            iList.push({"fileId":data.fileId,"typeCode":"af"})
        });
        this.state.lastImgList.map(function(data){
            iList.push({"fileId":data.fileId,"typeCode":"be"})
        });

        var  itemId="";
        if(this.props.operationType=="update"){
            itemId=this.props.data.itemId;
        }
        var buildingId = "";
        if(typeof(this.props.data) != "undefined"){
            buildingId = this.props.data.buildingId;
        }else{
            buildingId = this.props.buildingId.buildingId;
        }
        var address="";
        this.state.addresseeList.map(function(data){
            address+=data.name+",";
        });
        console.log(this.state.fileList);
        var videoList = [];
        for(var i = 0; i<this.state.fileList.length;i++){
            videoList.push({"fileId":this.state.fileList[i].fileId,"typeCode":"vdo"});
        }
        var myDate = new Date();
        var hours = myDate.getHours();
        var minutes = myDate.getMinutes();
        var seconds = myDate.getSeconds();
        time = time+" "+hours+":"+minutes+":"+seconds;
        var sid = getCookie("sid");
        var rules={"sid":sid,"videoList":videoList,"webFlag":true,itemId:itemId,buildingId:buildingId,"createTime":time,"leader":address,"imgList":iList,"enforceDate":time,"enforceRemark":condition,"endFlag":isInPlace,"endReason":endReason,"cooperationRemark":cooperationRemark,"crewsCount":crewsCount,"tempArea":TempArea,"tempBlockCount":TempBlockCount,"backfillArea":BackfillArea,"otherRemark":OtherRemark,measureList:step,"floorCount":tier,"buildArea":buildArea,"destroyFlag":isDismantle,"pdaNo":pda,"mobile":phone,"harmfulCode":harm }

        var tmp = JSON.stringify(rules);
        console.log(tmp);
        $.ajax({
            url:common_ip+"enforceRecord.do?action=save",
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
                    layer.alert("发送失败，请稍后再试！"+data.errorMsg);
                }

            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },
    onchange:function(){
        if($("#execute_isInPlace").val()=="false"){
            $("#execute_endReason").removeAttr("disabled");
        }else{
            $("#execute_endReason").attr({"disabled":"disabled"});
        }
    },
    render:function(){
        var tmp=[];
        var selectUsers=[];
        if(typeof(this.state.stateList)!=undefined&&this.state.stateList!=null){
            this.state.stateList.map(function(data){
                tmp.push(React.createElement( "option",{className:"ht_option",value:data.stateId},data.stateName));
            });
        }
        var showSelectUser=[];
        if(this.state.isSelectUser){
            showSelectUser.push( React.createElement("div",{ id: "hm_leftdiv" },
                React.createElement("p",{className:"patrol_hint"},"选泽查处负责人"),
                React.createElement("div",{ref:"div",className:"org_tree_div",id:"datas_id"},
                    React.createElement(Tree,{isStopped:false,checkedInfo:this.state.orgInfo})
                )
                ),
                React.createElement("div",{ id: "hm_meandiv" },
                    React.createElement("p",{className:"patrol_hint1"},"*单击姓名即可添加"
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
        for(var i=0;i<this.state.addresseeList.length;i++){
            var aa = React.createElement("tr",{className:"",onClick:this.usertrClick},
                React.createElement("td",{id:this.state.addresseeList[i].id,className:"userInfo_div_td3"},this.state.addresseeList[i].name)
            )
            selectUsers.push(aa);
        }

        var  address="";
        if(this.state.addresseeList!=null&&this.state.addresseeList!=""){
            this.state.addresseeList.map(function(data){
                address=address+data.name+"；";
            });
        }
        var copTo="";
        if(this.state.copyToList!=null&&this.state.copyToList!=""){
            this.state.copyToList.map(function(data){
                copTo=copTo+data.name+"；";
            });
        }

        var patril_step=[];
        if(typeof(this.state.measures)!=undefined&&this.state.measures!=null){
            this.state.measures.map(function (info) {
                patril_step.push(
                    React.createElement("p",{className:"patril_step_p"},
                        React.createElement("input",{type:"checkbox",name:"execute_Step",className:"patril_step_input",value: info.codeId}),
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
                                React.createElement("b",{},"*"),"查处负责人" ),
                            React.createElement("input",{className:"hreoly-modal_input",id:"hints_address",onClick:this.addresseeClick,value:address})
                        ) ,
                        React.createElement("p",{className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},"手机号码" ),
                            React.createElement("input",{className:"hreoly-modal_input",id:"execute_phone"})
                        ) ,
                        React.createElement("p",{className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},"PDA号码" ),
                            React.createElement("input",{className:"hreoly-modal_input",id:"execute_pda"})
                        ) ,
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("b",{},"*"),"查处前照片" ),
                            React.createElement(UploadImage,{className:"hreoly-modal_input",imgList:this.state.imgList,successNum:this.state.imgList.length,mulSupported:false,tag:"1"})
                        ) ,
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("b",{},"*"),"查处后照片" ),
                            React.createElement(UploadImage,{className:"hreoly-modal_input",imgList:this.state.lastImgList,successNum:this.state.lastImgList.length,mulSupported:false,tag:"2"})
                        ) ,
                        React.createElement("div",{id:"hml_div",className:"hreoly-modal_p"},
                            React.createElement("label",{id:"hml_adjunct",className:"hreoly-modal_label"},"视频" ),
                            React.createElement(UploadMovie,{mulSupported:true,fileList:this.state.fileList,successNum:this.state.fileList.length})
                        ),
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("b",{},"*"),"查处时间" ),
                            React.createElement("input", {id:"execute_Time",type:"date", name: "begin",className:"hreoly-modal_input"})
                        ) ,
                        React.createElement("div",{id:"hreoly-modal_div2",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("b",{},"*"),"危害等级"),
                            React.createElement("select",{id:"execute_harm",className:"hreoly-modal_input"}
                            )
                        ) ,
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("b",{},"*"),"查处情况" ),
                            React.createElement("textarea",{id:"execute_condition",className:"patril_condition hreoly-modal_input"})
                        ) ,
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("b",{},"*"),"是否到位" ),
                            React.createElement( "select",{id:"execute_isInPlace",className:"hreoly-modal_input",onChange:this.onchange},
                                React.createElement( "option",{className:"patril_ischange_o",value:true},"是"),
                                React.createElement( "option",{className:"patril_ischange_o",value:false},"否")
                            )
                        ) ,
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("b",{},"*"),"未到位原因" ),
                            React.createElement("textarea",{id:"execute_endReason",disabled:"disabled",className:"patril_condition hreoly-modal_input"})
                        ) ,
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},"联动情况" ),
                            React.createElement("textarea",{id:"execute_cooperationRemark",className:"patril_condition hreoly-modal_input"})
                        ) ,
                        React.createElement("p",{className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("b",{},"*"),"投入人数" ),
                            React.createElement("input",{className:"hreoly-modal_input",id:"execute_crewsCount"})
                        ) ,
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},"已采取措施" ),
                            React.createElement("div",{className:"patril_step"},patril_step
                            )
                        ) ,
                        React.createElement("div",{id:"hreoly-modal_div1",className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},
                                React.createElement("b",{},"*"),"是否已拆除" ),
                            React.createElement( "select",{id:"execute_isDismantle",className:"hreoly-modal_input"},
                                React.createElement( "option",{className:"patril_ischange_o",value:true},"是"),
                                React.createElement( "option",{className:"patril_ischange_o",value:false},"否")
                            )
                        ) ,
                        React.createElement("p",{className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label1"},"拆除永久建筑面积" ),
                            React.createElement("input",{className:"hreoly-modal_input1",id:"execute_BuildArea"}),
                            React.createElement("label",{className:"hreoly_modal_unit"},"m"),
                            React.createElement("sup",{className:"hreoly_modal_unit"},2)
                        ) ,
                        React.createElement("p",{className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label1"},"拆除永久层数" ),
                            React.createElement("input",{className:"hreoly-modal_input1",id:"execute_tier"}) ,
                            React.createElement("label",{className:"hreoly_modal_unit"},"层")
                        ) ,
                        React.createElement("p",{className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label1"},"拆除临时建筑面积" ),
                            React.createElement("input",{className:"hreoly-modal_input1",id:"execute_TempArea"}),
                            React.createElement("label",{className:"hreoly_modal_unit"},"m"),
                            React.createElement("sup",{className:"hreoly_modal_unit"},2)
                        ) ,
                        React.createElement("p",{className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label1"},"拆除临时栋数" ),
                            React.createElement("input",{className:"hreoly-modal_input1",id:"execute_TempBlockCount"}),
                            React.createElement("label",{className:"hreoly_modal_unit"},"栋")
                        ) ,
                        React.createElement("p",{className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label1"},"回填基础面积" ),
                            React.createElement("input",{className:"hreoly-modal_input1",id:"execute_BackfillArea"}),
                            React.createElement("label",{className:"hreoly_modal_unit"},"m"),
                            React.createElement("sup",{className:"hreoly_modal_unit"},2)
                        ) ,
                        React.createElement("p",{className:"hreoly-modal_p"},
                            React.createElement("label",{className:"hreoly-modal_label"},"其它" ),
                            React.createElement("input",{className:"hreoly-modal_input",id:"execute_OtherRemark"})
                        )
                    )  ,

                    React.createElement("p",{id:"hreoly-modal_sendp"},
                        React.createElement("button",{className:"hreoly-modal_p",id:"hreoly-modal_send",onClick:this.sendClick},"保存" ),
                        React.createElement("label",{id:"executeLog-modal_sendl"} )
                    )
                )

            )
        );
    }
});

//ReactDOM.render(React.createElement(executeLog,{title:"+执法记录",showModal:true,isSelectUser:true,operationType:""}),document.body)

//执法记录详情
var executeLogLogInfo = React.createClass({
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
            // if( this.state.data.videos.length != 0 ){
            //     $(".executeLogInfo_download").eq(this.props.index).css({width:"436",height:"244"});
            // }else{
            //     $(".executeLogInfo_download").eq(this.props.index).css({width:"0",height:"0"});
            // }
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
        ReactDOM.render(React.createElement(executeLog,{title:"编辑执法记录",showModal:true,isSelectUser:true,operationType:"update",data:this.state.data,level:this.state.data.harmfulCode}),document.getElementById("ledgerdetails_add_div"));
    },
    removeClick:function(){
        var _this = this;
        layer.confirm('您确定要删除该条执法记录吗？', {
                btn: ['确定','取消'] //按钮
            },
            function(index){
                layer.close(index);
                var sid = getCookie("sid");
                var rules={"sid":sid,"itemId":_this.props.data[0].itemId,"type":"enforce"};
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
    componentWillMount: function(){

    },
    render:function(){
        var _this = this;
        var tmpimgs=[];
        var imgs = [];
        if(typeof(this.state.data.afEnforcePhotos)!="undefined"&&this.state.data.afEnforcePhotos!=null&&this.state.data.afEnforcePhotos!="") {
            this.state.data.afEnforcePhotos.map(function(edata){
                tmpimgs.push({filePath: edata.path, thumbnailPath: edata.thumPath});
            })
        }
        imgs.push(React.createElement(ShowBigImg, {imgList: tmpimgs}));
        var tmpimgs1=[];
        var imgs1 = [];
        if(typeof(this.state.data.beEnforcePhotos)!="undefined"&&this.state.data.beEnforcePhotos!=null&&this.state.data.beEnforcePhotos!="") {
            this.state.data.beEnforcePhotos.map(function(edata){
                tmpimgs1.push({filePath: edata.path, thumbnailPath: edata.thumPath});
            })
        }
        imgs1.push(React.createElement(ShowBigImg, {imgList: tmpimgs1}));
        var users="";
        if(typeof (this.props.data.userList)!="undefined"&&this.props.data.userList!=null){
            this.props.data.userList.map(function(data){
                users+=data.userName+"、";
            });
        }
        var action="";
        if(typeof (this.state.data.measures)!="undefined"&&this.state.data.measures!=null){
            this.state.data.measures.map(function(data){
                action+=data.measureCode+"、";
            });
        }
        var floorCount = this.state.data.floorCount;
        if(typeof (floorCount)=="undefined"){
            floorCount = "";
        }
        var movies=[];
        var tmpmovies=[];
        // var movieDownload = [];
        // var movieDownloadDiv = [];
        if(typeof(this.state.data.videos)!="undefined"&&this.state.data.videos!=null&&this.state.data.videos!="") {
            this.state.data.videos.map(function(data){
                movies.push({filePath: data.path, thumbnailPath: data.thumPath,fileId:data.fileId,fileName:data.type});
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
                    React.createElement("div",{className:"executeLogInfo_head_l"}

                    ),
                    React.createElement("div",{className:"executeLogInfo_head_c"},
                        React.createElement("label",{className:"executeLogInfo_head_cl"},"执法"),
                        React.createElement("label",{className:"executeLogInfo_head_cll"},this.state.data.enforceDateFormat)
                    ),
                    React.createElement("div",{className:"executeLogInfo_head_r"},
                        React.createElement("div",{id:"executeLogInfo_head_rd"+this.props.index,className:"executeLogInfo_head_rd"})
                    )
                ),
                React.createElement("div",{id:"executeLogInfo_main"+this.props.index,className:"executeLogInfo_main",style:{display: "none"}},
                    React.createElement("div",{className:"executeLogInfo_main_left"},
                        React.createElement("div",{className:"executeLogInfo_main_beforediv"},
                            React.createElement("p",{className:"executeLogInfo_main_p"},
                                "查处前"
                            ) ,
                            React.createElement("div",{className:"executeLogInfo_main_div"},
                                imgs
                            )
                        ),
                        React.createElement("div",{className:"executeLogInfo_main_backdiv"},
                            React.createElement("p",{className:"executeLogInfo_main_p"},
                                "查处后"
                            ) ,
                            React.createElement("div",{className:"executeLogInfo_main_div"},
                                imgs1
                            )
                        ),
                        React.createElement("div",{className:"executeLogInfo_download"},
                            React.createElement("div",{className:"movieTitle"},"视频"),
                            tmpmovies
                        )
                    ),
                    React.createElement("div",{className:"executeLogInfo_main_right"},
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"查处时间"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},this.state.data.enforceDateFormat),
                            React.createElement("button",{className:"executeLogInfo_main_button",onClick:this.editClick},
                                React.createElement("label",{className:"executeLogInfo_main_Edit"}),
                                React.createElement("span",{className:""},"编辑")
                            ),
                            React.createElement("button",{className:"executeLogInfo_main_button1",onClick:this.removeClick},
                                React.createElement("label",{className:"executeLogInfo_main_colse"}),
                                React.createElement("span",{className:""},"删除")
                            )
                        ),
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"查处负责人"),
                            React.createElement("label",{className:"executeLogInfo_main_label11"},this.state.data.leader)
                        ),
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"手机号码"),
                            React.createElement("label",{className:"executeLogInfo_main_label11"},this.state.data.mobile)
                        ),
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"PDA号码"),
                            React.createElement("label",{className:"executeLogInfo_main_label11"},this.state.data.pdaNo)
                        ),
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"危害等级"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},this.state.data.harmfulCode)
                        ),
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"查处情况"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},this.state.data.enforceRemark)
                        ),
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"是否到位"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},(this.state.data.endFlag==true)?"是":"否")
                        ),
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"未到原因"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},this.state.data.endReason)
                        ),
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"联动情况"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},this.state.data.cooperationRemark)
                        ),
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"投入人数"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},this.state.data.crewsCount)
                        )  ,
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"已采取措施"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},action)
                        )  ,
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"是否拆除"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},(this.state.data.destroyFlag==true)?"是":"否")
                        ),
                        React.createElement("div",{id:"executeLogInfo_main_mj",className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_labels"},"拆除永久建筑面积"),
                            React.createElement("label",{className:"executeLogInfo_main_labels1"},this.state.data.buildArea,
                                React.createElement("sup",{className:""},2)) ,
                            React.createElement("label",{className:"executeLogInfo_main_labels"},"拆除永久层数"),
                            React.createElement("label",{className:"executeLogInfo_main_labels1"},floorCount+"层"),
                            React.createElement("label",{className:"executeLogInfo_main_labels"},"拆除临时建筑面积"),
                            React.createElement("label",{className:"executeLogInfo_main_labels1"},this.state.data.tempArea+"m",
                                React.createElement("sup",{className:""},2)
                            ),
                            React.createElement("label",{className:"executeLogInfo_main_labels"},"拆除临时栋数"),
                            React.createElement("label",{className:"executeLogInfo_main_labels1"},this.state.data.tempBlockCount+"栋"),
                            React.createElement("label",{className:"executeLogInfo_main_labels"},"回填基础面积"),
                            React.createElement("label",{className:"executeLogInfo_main_labels1"},this.state.data.backfillArea+"m",
                                React.createElement("sup",{className:""},2)
                            )
                        ),
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            React.createElement("label",{className:"executeLogInfo_main_label"},"其他"),
                            React.createElement("label",{className:"executeLogInfo_main_label1"},this.state.data.otherRemark)
                        )
                    )
                ))
        );
    }
});

//ReactDOM.render(React.createElement(executeLogLogInfo,{index:0,data:{creatortime:"2016-5-11",patrolCode:"巡查后复查",remark:"新华社北京6月7日电（记者王经国）2016年全国军队转业干部安置工作会议7日在京举行。会议传达了中共中央总书记、国家主席、中央军委主席习近平关于深化国防和军队改革期间军队转业干部安置工作的重要讲话，对学习贯彻讲话精神，做好军队转业干部安置工作作出部署。",userList:[{uid:"1",userName:"王杰"},{uid:"2",userName:"张国栋"}],imgList:[{fileId:"12001",filePath:"images/weijian1.jpg",thumbnailPath:"images/weijian1.jpg",fileName:""},{fileId:"12001",filePath:"images/weijian2.png",thumbnailPath:"images/weijian2.png",fileName:""},{fileId:"12001",filePath:"images/weijian1.jpg",thumbnailPath:"images/weijian1.jpg",fileName:""},{fileId:"12001",filePath:"images/weijian2.png",thumbnailPath:"images/weijian2.png",fileName:""}]}}),document.body)
