
var Modal = window.Modal || ReactBootstrap.Modal;

var MessageReply = React.createClass({
    getInitialState: function () {
        return {
            showModal:this.props.showModal,
            title:this.props.title,
            fontState:0,
            mobile:this.props.mobile,
        };
    },
    componentWillMount:function(){
        var _this = this;
        if(_this.state.mobile == "null" || typeof(_this.state.mobile)=="undefined"){
            _this.state.mobile = "无";
        }
    },
    close: function close() {
        this.setState({showModal:false});
    },
    textareaChange:function(){
        this.setState({fontState:$(".MessageReply_content_textarea").val().length});
        if($(".MessageReply_content_textarea").val().length>100){
            $(".MessageReply_tcommon_ipFont").css("color","red");
        }else{
            $(".MessageReply_tcommon_ipFont").css("color","#0093DD");
        }
    },
    sendMessage:function(){
        var _this = this;
        var phoneText = $(".MessageReply_phone_input").val();
        if(phoneText == "null"){
            layer.alert("该线索没有手机号!",{icon:0,title:"提示"});
            return;
        }
        var yzphone = /^1[3|4|5|7|8]\d{9}$/;
        if(yzphone.test(phoneText) == false){
            layer.alert("该条线索的手机号是错误的!",{icon:0,title:"提示"});
            return;
        }
        var textareaText = $(".MessageReply_content_textarea").val();
        if(textareaText.length == 0){
            layer.alert("请输入内容!",{icon:0});
            return;
        }
        var _this = this;
        var phoneNumber = $(".MessageReply_phone_input").val()+";";//手机号码
        var text = $(".MessageReply_content_textarea").val();//短信内容
        var creator = getCookie("userName");
        var createTime = new Date().Format("yyyy-MM-dd");//发送时间
        var sid = getCookie("sid");
        var rules = {"sid":sid,"creator":creator,"otherList":phoneNumber,"content":text,"hintId":this.props.hintsId};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"sms.do?action=reply",
            dataType:'json',
            data:tmp,
            type:'POST',
            contentType:"application/x-www-form-urlencoded",
            success:function(data){
                if(data.successFlag){
                    layer.msg('发送成功',{icon:1});
                    _this.setState({showModal:false});
                }else{
                    layer.alert("发送失败"+data.errorMsg,{icon: 2,title: '错误'});
                }
            }, error:function(request,state,error){
                layer.alert("操作错误",{icon: 2,title: '错误'});
            }
        });
    },
    render:function () {

        return(
            React.createElement(Modal,{className:"MessageReply_div",bsSize:"large",show:this.state.showModal,keyboard:true,onHide:this.close,animation:true},
                React.createElement(
                    Modal.Header,
                    { closeButton: true },
                    React.createElement(
                        Modal.Title,
                        { id: "contained-modal-title-lg" },
                        this.state.title
                    )
                ) ,
                React.createElement("div", {className: "MessageReplyphone_div"},
                    React.createElement("div", {className: "MessageReply_phone"}, "手机号"),
                    React.createElement("input", {
                        readOnly:"readOnly",
                        type: "text",
                        className: "MessageReply_phone_input",
                        placeholder: "请输入手机号",
                        value:this.state.mobile
                    })
                ),
                React.createElement("div", {className: "MessageReplytextarea_div"},
                    React.createElement("div", {className: "MessageReply_textarea"}, "内容"),
                    React.createElement("textarea", {
                        wrap: "virtual",
                        cols: "3",
                        row: "70",
                        className: "MessageReply_content_textarea",
                        onChange:this.textareaChange,
                        placeholder: "请输入内容"
                    }),
                    React.createElement("div", {className: "MessageReply_tcommon_ipFont"}, this.state.fontState + "/100字")
                ),
                React.createElement("button", {className: "MessageReply_button", onClick: this.sendMessage}, "发送")
            )
        )
    }
});
//线索工具栏
var HintsToolbar = React.createClass({

    getInitialState:function(){
        return {
            stateList:[],
            hintsInfo:"",
            showtrenModal:false,
            sid:"",
        };
    },

    componentDidMount: function(){
        // $("body").keydown(function(e) {
        //     if (e.keyCode == "13") {//keyCode=13是回车键
        //         $('#hints_toolbar_topbtn').click();
        //     }
        // });

        var mydateInput = document.getElementById("hints_bingTime");
        var time = new Date().Format("yyyy-MM-dd");
        var time=new Date().GetDate(21);
        mydateInput.value=time;
        var mydateInput2 = document.getElementById("hints_endTime");
        var time2 = new Date().Format("yyyy-MM-dd");
        mydateInput2.value=time2;
        var _this=this;
        nsEventBus.eventbus.on("addHints_success","addHints_success",function(msg){
            _this.selectClick();
        });
        nsEventBus.eventbus.on("hintsInfoSelect","hintsInfoSelect",function(data){
            var sid = getCookie("sid");
            var tmp = {"sid":sid,"hintsId":data.hintId};
            var tmp1  = JSON.stringify(tmp);
            $.ajax({
                url:common_ip+"hint.do?action=getDetail",
                dataType:'json',
                data:tmp1,
                type:'post',
                contentType:"application/x-www-form-urlencoded",
                success: function(data){
                    if(data.successFlag){
                        _this.setState({hintsInfo:data.illegalHintEx});
                        $("#udr_top_right").empty();
                        ReactDOM.render(React.createElement(HintsInfo,{id:_this.state.hintsInfo.hintId,hintsInfo:_this.state.hintsInfo}),document.getElementById("udr_top_right") );
                    }else{
                        layer.alert("加载失败！"+data.errorMsg,{icon:2});
                    }
                }.bind(this),
                error: function(request, state, error){
                    layer.alert(error);
                    console.error( state, error.toString());
                }.bind(this)
            });
            //test
//            var tmp={id:"00221",time:"2016-05-12",address:"南澳大鹏新区南澳街道2号",userid:"10001",name:"张国东",phone:"13888888888",startName:"已回复",imgList:[{fileId:"12001",filePath:"../images/weijian1.jpg",fileName:""},{fileId:"12001",filePath:"../images/weijian2.png",fileName:""},{fileId:"12001",filePath:"../images/weijian1.jpg",fileName:""},{fileId:"12001",filePath:"../images/weijian2.png",fileName:""}],describe:"违章建筑认定的依据，根据城乡规划法的规定，在城市、镇规划区内进行建筑物、构筑物、道路、管线和其他工程建设的，建设单位或者个人应当向城市、县人民政府城乡规划主管部门"};

            //_this.state.hintsInfo=tmp;
        });
        var stateList=[{stateId:"",stateName:"全部"},{stateId:"未处理",stateName:"未处理"},{stateId:"已回复",stateName:"已回复"},{stateId:"已转发",stateName:"已转发"}];
        this.setState({stateList:stateList});
        /**$.ajax({
         url:this.props.url,
         dataType:'JSON',
         Type:'POST',
         data:{cmd:'SelectUserInfo',SessionId:this.state.sid},
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

    },
    selectClick:function(){
        var bingTimg = document.getElementById("hints_bingTime").value;
        var endTimg = document.getElementById("hints_endTime").value;
        var start= document.getElementById("hints_toolbar_downsel").value;
        var key=document.getElementById("hints_toolbar_key").value;

        $("#udr_top_left").empty();
        ReactDOM.render(React.createElement(HintsList,{bingTime:bingTimg,endTime:endTimg,start:start,keyvalse:key}),document.getElementById("udr_top_left"));

    },
    // var tmp={time:"2016-05-12",address:"南澳大鹏新区南澳街道2号",name:"张国东",phone:"13888888888",startName:"已回复",imgList:[{fileId:"12001",filePath:"../images/weijian1.jpg"},{fileId:"12001",filePath:"../images/weijian2.png"},{fileId:"12001",filePath:"../images/weijian1.jpg"},{fileId:"12001",filePath:"../images/weijian2.png"}],describe:"违章建筑认定的依据，根据城乡规划法的规定，在城市、镇规划区内进行建筑物、构筑物、道路、管线和其他工程建设的，建设单位或者个人应当向城市、县人民政府城乡规划主管部门"};

//回复点击事件
    replyClick:function(){
        $("#hints_toolbar_Modal").empty();
        if(typeof (this.state.hintsInfo.buildingId) != "undefined"){
            if(this.state.hintsInfo.interior == false ){
                this.setState({ showtrenModal: true });
                var tmp={addresseeList:[],copyToList:[],copyToList:[],title:"线索："+this.state.hintsInfo.address,imgList:[],content:"",fileList:[]};
                tmp.addresseeList.push({id:this.state.hintsInfo.creatorId,name:this.state.hintsInfo.creator});
                var iList=[];
                tmp.imgList=iList;
                tmp.cintent="回复：\n----------------------------------------------------------\n举报时间："+this.state.hintsInfo.createTimeFormat+"\n社区："+this.state.hintsInfo.area1+"\n地址："+this.state.hintsInfo.address+"\n举报人："+this.state.hintsInfo.creator+"\n描述："+this.state.hintsInfo.remark
                $("#hints_toolbar_Modal").empty();
                ReactDOM.render(React.createElement(Transceiver,{title:"发文—违建线索回复",showModal:true,isSelectUser:false,transceiverInfo:tmp,operationType:"transceiverHints",module:"hint",itemId:this.state.hintsInfo.hintId,status:"已回复",linkUrl:"ledgerdetails.html?buildingId="+this.state.hintsInfo.buildingId}),document.getElementById("hints_toolbar_Modal"))
            }
        }else{
            if(this.state.hintsInfo.interior == false ){
                this.setState({ showtrenModal: true });
                var tmp={addresseeList:[],copyToList:[],copyToList:[],title:"线索："+this.state.hintsInfo.address,imgList:[],content:"",fileList:[]};
                tmp.addresseeList.push({id:this.state.hintsInfo.creatorId,name:this.state.hintsInfo.creator});
                var iList=[];
                tmp.imgList=iList;
                tmp.cintent="回复：\n----------------------------------------------------------\n举报时间："+this.state.hintsInfo.createTimeFormat+"\n社区："+this.state.hintsInfo.area1+"\n地址："+this.state.hintsInfo.address+"\n举报人："+this.state.hintsInfo.creator+"\n描述："+this.state.hintsInfo.remark
                $("#hints_toolbar_Modal").empty();
                ReactDOM.render(React.createElement(Transceiver,{title:"发文—违建线索回复",showModal:true,isSelectUser:false,transceiverInfo:tmp,operationType:"transceiverHints",module:"hint",itemId:this.state.hintsInfo.hintId,status:"已回复"}),document.getElementById("hints_toolbar_Modal"))
            }
        }
        if(this.state.hintsInfo.interior == true){
            ReactDOM.render(React.createElement(MessageReply,{showModal:true,title:"短信回复",mobile:this.state.hintsInfo.mobile,hintsId:this.state.hintsInfo.hintId}),document.getElementById("hints_toolbar_Modal"));
        }


    },
    //转发的点击事件
    transmitClick:function(){
        if(this.state.hintsInfo==""){
            layer.alert("请选转发线索！");
            return;
        }
        this.setState({ showtrenModal: true });
        var content = "社区："+this.state.hintsInfo.area1+"；\n地址："+this.state.hintsInfo.address+"；\n描述："+this.state.hintsInfo.remark+"；";
        var tmp={addresseeList:[],copyToList:[],copyToList:[],title:"违建线索转发-"+this.state.hintsInfo.address,imgList:[],cintent:content,fileList:[]};
        var iList= []
        this.state.hintsInfo.photoUrlList.map(function(data){
            var index=data.indexOf("FileId=");
            var str=data.substr(index+7);
            var indexof = str.indexOf('&');
            var str1 = str.substring(indexof,-15);
            iList.push({fileId:str1,fileName:"",filePath:data})
        });
        if(this.state.hintsInfo.creator!=""){
            tmp.addresseeList.push({id:this.state.hintsInfo.creatorId,name:this.state.hintsInfo.creator});
            tmp.imgList=iList;
        }
        $("#hints_toolbar_Modal").empty();
        ReactDOM.render(React.createElement(Transceiver,{title:"发文—违建线索转发",showModal:true,isSelectUser:true,transceiverInfo:tmp,operationType:"transpondHints",module:"hint",itemId:this.state.hintsInfo.hintId,status:"已转发",linkUrl:"hints.html?hintId="+this.state.hintsInfo.hintId,uploadNum:20}),document.getElementById("hints_toolbar_Modal"))
    },
    //新增点击事件
    addClick:function(){
        $("#hints_toolbar_Modal").empty();
        ReactDOM.render(React.createElement(CreateHints,{title:"新增线索",showModal:true,operationType:"addHints"}),document.getElementById("hints_toolbar_Modal"));
    },
    //编辑点击事件
    editClick:function(){
        if(this.state.hintsInfo==""){
            layer.alert("请选编辑线索！");
            return;
        }
        var iList= []
        this.state.hintsInfo.photoUrlList.map(function(data){
            var index=data.indexOf("FileId=");
            var str=data.substr(index+7);
            var indexof = str.indexOf('&');
            var str1 = str.substring(indexof,-15);
            iList.push({fileId:str1,fileName:"",filePath:data})
        });
        $("#hints_toolbar_Modal").empty();
        ReactDOM.render(React.createElement(CreateHints,{title:"编辑线索",showModal:true,operationType:"editHints",data:this.state.hintsInfo,address:this.state.hintsInfo.address,describe:this.state.hintsInfo.remark,reportId:this.state.hintsInfo.creatorId,imgList:iList,hintsId:this.state.hintsInfo.hintId}),document.getElementById("hints_toolbar_Modal"));
    },
    //删除点击事件
    deleteClick:function(){
        var _this = this;
        if(this.state.hintsInfo==""){
            layer.alert("请选编辑线索！");
            return;
        }
        layer.confirm('您确定要删除吗？', {
                btn: ['确定','取消'] //按钮
            },
            function(index){
                layer.close(index);
                var obj = new Object();
                obj.sid = getCookie("sid");
                obj.address =  _this.state.hintsInfo.address;
                obj.hintId = _this.state.hintsInfo.hintId;
                var tmp = JSON.stringify(obj);
                $.ajax({
                    url:common_ip+"hint.do?action=delete",
                    dataType:'json',
                    data:tmp,
                    type:'post',
                    contentType:"application/x-www-form-urlencoded",
                    success: function(data){
                        if(data.successFlag){
                            layer.alert("删除成功！",{icon:1});
                            nsEventBus.eventbus.broadcast("QueryHints",null);
                        }else{
                            layer.alert(data.errorMsg,{icon:2});
                        }
                    }.bind(this),
                    error: function(request, state, error){
                        layer.alert(error);
                        console.error( state, error.toString());
                    }.bind(this)
                });
            });
    },
    close: function close() {
        this.setState({ showModal: false });
    },
    render:function(){
        var tmp=[];
        if(typeof(this.state.stateList)!=undefined&&this.state.stateList!=null){
            this.state.stateList.map(function(data){
                tmp.push(React.createElement( "option",{className:"ht_option",value:data.stateId},data.stateName));
            });
        }
        return React.createElement(
            "div",{id:"hints_toolbar"},
            React.createElement(
                "div",
                {id:"hints_toolbar_top"},
                React.createElement( "button",{id:"hints_toolbar_reply",className:"hints_toolbar_topbtn",onClick:this.replyClick},"回复"),
                React.createElement( "button",{className:"hints_toolbar_topbtn1",onClick:this.transmitClick},"转发"),
                React.createElement( "button",{className:"hints_toolbar_topbtn1",onClick:this.addClick},"新增"),
                React.createElement( "button",{className:"hints_toolbar_topbtn1",onClick:this.editClick},"编辑"),
                React.createElement( "button",{className:"hints_toolbar_topbtn1",onClick:this.deleteClick},"删除")
            ),
            React.createElement(
                "div",
                {id:"hints_toolbar_down"},
                React.createElement("input", {id:"hints_bingTime",type:"date", name: "begin"}),
                React.createElement( "span",{},"~"),
                React.createElement("input", {id:"hints_endTime",type:"date", name: "end"}),
                React.createElement( "select",{id:"hints_toolbar_downsel"},
                    tmp
                ),
                React.createElement( "input",{id:"hints_toolbar_key",name:"keyword",placeholder:"关键字"}),
                React.createElement( "button",{id:"hints_toolbar_topbtn",onClick:this.selectClick},"查询")
            ),
            React.createElement(
                "div",
                {id:"hints_toolbar_Modal"}
            )

        );
    }
});
var key = 10000;
////线索列表
var Pagination = ReactBootstrap.Pagination;
var HintsList = React.createClass({
    getInitialState: function(){
        var dataCount=100;
        console.log("bingTime:"+this.props.bingTime+ ",endTime:"+this.props.endTime+", key:"+this.props.keyvalse+",start:"+this.props.start);
        return{
            list:[],
            activePage:1,
            dataCount:dataCount,
            pageDataCount:16,
            bingTime:this.props.bingTime,
            endTime:this.props.endTime,
            key:this.props.keyvalse,
            start:this.props.start,
            selectData:"",
        };
    },
    //获取传过来URL中携带的sid值和buildingId值
    GetRequest:function() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    },
    componentWillMount:function(){
        var _this = this;
        nsEventBus.eventbus.on("QueryHints","QueryHints",function(msg){
            var begin = $("input[name='begin']").val();
            var end = $("input[name='end']").val();
            var key= $("input[name='keyword']").val();
            var sid = getCookie("sid");
            var tmp = {"sid":sid,"pageNo":_this.state.activePage,"pageSize":_this.state.pageDataCount,"timeFrom":begin,"timeTo":end,state:_this.state.start, "keyword":key };
            var tmp1  = JSON.stringify(tmp);
            $.ajax({
                url:common_ip+"hint.do?action=list",
                dataType:'json',
                data:tmp1,
                type:'post',
                contentType:"application/x-www-form-urlencoded",
                success: function(data){
                    if(data.successFlag){

                        if(data.illegalHintPager.list!=null&&data.illegalHintPager.list.length>0){
                            //判断默认选中
                            var url = _this.GetRequest();
                            if(typeof (url.hintId)!="undefined"){
                                var selectData="";
                                data.illegalHintPager.list.map(function(event){
                                    if(event.hintId==url.hintId){
                                        selectData=event;
                                    }
                                });
                                _this.setState({selectData:selectData});
                                nsEventBus.eventbus.broadcast("hintsInfoSelect",{hintId:url.hintId});
                            }else{
                                _this.state.selectData=data.illegalHintPager.list[0];
                                nsEventBus.eventbus.broadcast("hintsInfoSelect",_this.state.selectData);
                            }
                        }
                        _this.setState({list:data.illegalHintPager.list});
                        _this.setState({dataCount:data.illegalHintPager.totalCount});
                    }else{
                        layer.alert("加载数据失败"+data.errorMsg,{icon:2,title:"错误"});
                    }
                }.bind(this),
                error: function(request, state, error){
                    layer.alert("发生错误",{icon:2,title:"错误"});

                }.bind(this)
            });
        });
    },
    componentDidMount: function(){
        var begin = $("input[name='begin']").val();
        var end = $("input[name='end']").val();
        var key= $("input[name='keyword']").val();
        var sid = getCookie("sid");
        var tmp = {"sid":sid,"pageNo":1,"pageSize":this.state.pageDataCount,"timeFrom":begin,"timeTo":end,state:this.state.start, "keyword":key };
        var tmp1  = JSON.stringify(tmp);
        $.ajax({
            url:common_ip+"hint.do?action=list",
            dataType:'json',
            data:tmp1,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){

                    if(data.illegalHintPager.list!=null&&data.illegalHintPager.list.length>0){
                        //判断默认选中
                        var url = this.GetRequest();
                        if(typeof (url.hintId)!="undefined"){
                            var selectData="";
                            data.illegalHintPager.list.map(function(event){
                                if(event.hintId==url.hintId){
                                    selectData=event;
                                }
                            });
                            this.setState({selectData:selectData});
                            nsEventBus.eventbus.broadcast("hintsInfoSelect",{hintId:url.hintId});
                        }else{
                            this.state.selectData=data.illegalHintPager.list[0];
                            nsEventBus.eventbus.broadcast("hintsInfoSelect",this.state.selectData);
                        }
                    }
                    this.setState({list:data.illegalHintPager.list});
                    this.setState({dataCount:data.illegalHintPager.totalCount});
                }else{
                    layer.alert("加载数据失败"+data.errorMsg,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert("发生错误",{icon:2,title:"错误"});

            }.bind(this)
        });
//        var hintsLists=[{id:"1100101",time:"2016-05-12",address:"大鹏新区葵涌海语山林",handleStart:"未处理"},{id:"1100101",time:"2016-05-12",address:"大鹏新区葵涌海语山林",handleStart:"已回复"},{id:"1100101",time:"2016-05-12",address:"大鹏新区葵涌海语山林",handleStart:"已转发"}];
//        for(var i=0;i<13;i++){
//            hintsLists.push({id:"11001"+i,time:"2016-05-12",address:"大鹏新区葵涌海语山林",handleStart:"未处理"});
//        }
//        this.setState({list:hintsLists});
    },
    hintsClick:function(e){
        var tr = document.getElementsByClassName("userInfo_div_tr");
        var index = $(".userInfo_div_tr:hover").index()-1;
        if(key != -1 && key != 10000 ){
            $(".userInfo_div_tr").removeAttr("style");
        }

        key=index;
        var targetid = e.target.getAttribute("id");
        var hintsInfo="";
        this.state.list.map(function(e){
            if(e.hintId==targetid){
                hintsInfo=e;
            }
        });
//        nsEventBus.eventbus.broadcast("userClick",userInfo)
        nsEventBus.eventbus.broadcast("hintsInfoSelect",hintsInfo);
        this.setState({selectData:hintsInfo});
    },
    handleSelect: function handleSelect(event, selectedEvent) {
        this.setState({
            activePage: selectedEvent.eventKey
        });

        var begin = $("input[name='begin']").val();
        var end = $("input[name='end']").val();
        var key= $("input[name='keyword']").val();
        var sid = getCookie("sid");
        var tmp = {"sid":sid,"pageNo":selectedEvent.eventKey,"pageSize":this.state.pageDataCount,"timeFrom":begin,"timeTo":end, "keyword":key };
        var tmp1  = JSON.stringify(tmp);
        $.ajax({
            url:common_ip+"hint.do?action=list",
            dataType:'json',
            data:tmp1,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){

                    if(data.illegalHintPager.list!=null&&data.illegalHintPager.list.length>0){
                        this.state.selectData=data.illegalHintPager.list[0];
                        nsEventBus.eventbus.broadcast("hintsInfoSelect",this.state.selectData);
                    }
                    this.setState({list:data.illegalHintPager.list});
                    this.setState({dataCount:data.illegalHintPager.totalCount});
                }else{
                    layer.alert(data.errorMsg,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
                console.error( state, error.toString());
            }.bind(this)
        });
    },
    render:function()
    {
        var hinstlist=[];
        var handlestyle="";
        var style = "userInfo_div_tr";
        var strAddress;
        if(typeof(this.state.list)!="undefined"&&this.state.list!=null&&this.state.list!=""){
            for(var i=0;i<this.state.list.length;i++){
                usertr_trId= this.state.list[i].hintId;
                if(usertr_trId == this.state.selectData.hintId){
                    style = "userInfo_div_trs";
                }else{
                    style = "userInfo_div_tr";
                }
                if(this.state.list[i].address.length > 18){
                    strAddress = this.state.list[i].address.substr(0,18)+"..."
                }else{
                    strAddress = this.state.list[i].address;
                }
                if(this.state.list[i].statusId=="未处理"){
                    handlestyle="userInfo_div_td3_1";
                } else if(this.state.list[i].statusId=="已回复"){
                    handlestyle="userInfo_div_td3_2";
                } else if(this.state.list[i].statusId=="已转发"){
                    handlestyle="userInfo_div_td3_3";
                }
                var aa = React.createElement("tr",{className:style,onClick:(this.hintsClick)},
                    React.createElement("td",{id:usertr_trId,className:"userInfo_div_td1"},this.state.list[i].createTimeFormat),
                    React.createElement("td",{id:usertr_trId,className:"userInfo_div_td2"},strAddress),
                    React.createElement("td",{id:usertr_trId,className:handlestyle+" userInfo_div_td3"},this.state.list[i].statusId)
                )
                hinstlist.push(aa);
            }
        }
        return (
            React.createElement("div",{id:"hontsList_left"},
                React.createElement("div",{id:"hintsList_div_div"},
                    React.createElement("table",{id:"tabid"},
                        React.createElement("tr",{id:"userList_head"},
                            React.createElement("th",{className:"userInfo_div_td1"},"举报时间"),
                            React.createElement("th",{className:"userInfo_div_td2"},"地址"),
                            React.createElement("th",{className:"userInfo_div_td3"},"状态")
                        ),
                        hinstlist
                    )
                ) ,
                React.createElement("div",{id:"hontsList_left_down"},
                    React.createElement(Pagination, {
                        prev: true,
                        next: true,
                        first: '首页',
                        last: '尾页',
                        ellcommon_ipsis: true,
                        boundaryLinks: true,
                        items: Math.ceil(this.state.dataCount/this.state.pageDataCount),
                        maxButtons: 5,
                        activePage: this.state.activePage,
                        onSelect: this.handleSelect })
                )
            ));
    }
});

var SourceReply = React.createClass({
    getInitialState: function () {
        return {
            fontState:0,
            title:this.props.title,
            showModal:this.props.showModal,
        };
    },
    componentDidMount:function(){
        $(".MessageReplytextarea_div").css({"margin-top":" 40px","margin-left":"27px"})
        $("input[name=Whether]:eq(0)").attr("checked","true");
    },
    close: function close() {
        var _this = this;
        layer.confirm('您确定要放弃操作吗？', {
                btn: ['确定','取消'] //按钮
            },
            function(index){
                _this.setState({ showModal: false });
                layer.close(index);
            });
    },
    sendMessage:function(){
        var _this = this;
        var sid = getCookie("sid");
        var realFlag = $('input:radio:checked').val();
        var rules = {sid:sid,hintId:this.props.hintsId,realFlag:realFlag,ComplaintContent:""};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"hint.do?action=complaintReply",
            dataType:'json',
            data:tmp,
            type:'POST',
            contentType:"application/x-www-form-urlencoded",
            success:function(data){
                if(data.successFlag){
                    layer.msg('发送成功',{icon:1});
                    _this.setState({showModal:false});
                }else{
                    layer.alert("发送失败"+data.errorMsg,{icon: 2,title: '错误'});
                }
            }, error:function(request,state,error){
                layer.alert("操作错误",{icon: 2,title: '错误'});
            }
        });
    },
    render:function () {
        return(
            React.createElement(Modal,{className:"MessageReply_div",bsSize:"large",show:this.state.showModal,keyboard:true,onHide:this.close,animation:true},
                React.createElement(
                    Modal.Header,
                    { closeButton: true },
                    React.createElement(
                        Modal.Title,
                        { id: "contained-modal-title-lg" },
                        this.state.title
                    )
                ) ,
               React.createElement("div", {className: "MessageReplytextarea_div"},
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
                ),
                React.createElement("button", {className: "MessageReply_button", onClick: this.sendMessage}, "发送")
               )
            )
        )
    }
});
//线索详情
var HintsInfo = React.createClass({
    getInitialState:function(){
        return {
            hintsId:this.props.id,
            hintsInfo:this.props.hintsInfo,
        };
    },
    componentWillMount:function () {

        if(this.state.hintsInfo.mobile == "null" || this.state.hintsInfo.mobile == "" || typeof(this.state.hintsInfo.mobile) == "undefined"){
            this.state.hintsInfo.mobile = "无";
        }
    },
    componentDidMount: function() {
        if(this.state.hintsInfo.source!="" && this.state.hintsInfo.source!="null" && typeof (this.state.hintsInfo.source) != "undefined" && this.state.hintsInfo.source=="部门转办"){
            $("#hinst_info_div").css({"width": "300", "float": "left"});
        }
    },
    SourceReply:function(){
        $("#SourceReply_Modal").empty();
        if(this.state.hintsInfo.statusId == "已回复"){
            layer.alert("该线索已回复!",{icon:7});
            return;
        }
        ReactDOM.render(React.createElement(SourceReply,{showModal:true,title:"违建线索—来源回复",hintsId:this.state.hintsInfo.hintId}),document.getElementById("SourceReply_Modal"));
    },
    render:function(){
        var tmp=[];
        if(typeof(this.state.hintsInfo)!="undefined"){
            if(typeof(this.state.hintsInfo.photoUrlList)!="undefined"&&this.state.hintsInfo.photoUrlList!=null){
                this.state.hintsInfo.photoUrlList.map(function(data){
                    tmp.push(React.createElement("img", { className:"hintsInf_img",src: data,alt:"图片加载失败" }));
                });
            }
            var handlestyle="";
            if(this.state.hintsInfo.statusId=="未处理"){
                handlestyle="userInfo_div_td3_1";
            } else if(this.state.hintsInfo.statusId=="已回复"){
                handlestyle="userInfo_div_td3_2";
            } else if(this.state.hintsInfo.statusId=="已转发"){
                handlestyle="userInfo_div_td3_3";
            }
            var str = [];
            if(this.state.hintsInfo.buildingId != "" && typeof (this.state.hintsInfo.buildingId) != "undefined"){
                str.push(React.createElement( "p",{className:"hints_toolbar_topbtn"},
                    React.createElement("label",{className:"htt_lable1"},"跳转到："),
                    React.createElement("a",{className:"htt_lable3",href:"ledgerdetails.html?buildingId="+this.state.hintsInfo.buildingId},"台账页")
                ));
            }
            var hintsSource = [];
            var defaultHintsSource = [];
            if(this.state.hintsInfo.source!="" && this.state.hintsInfo.source!="null" && typeof (this.state.hintsInfo.source) != "undefined" && this.state.hintsInfo.source=="部门转办"){
                hintsSource.push(React.createElement( "p",{ className:"hints_hintsSource"},
                    React.createElement("label",{className:"hintsSource_lable1"},"线索来源："),
                    React.createElement("label",{className:"hintsSource_lable3"},this.state.hintsInfo.source),
                    React.createElement( "button",{className:"hintsSource_Reply",onClick:this.SourceReply},"来源回复")
                ));
            }else{
                defaultHintsSource.push(React.createElement( "p",{ className:"hints_toolbar_topbtn"},
                    React.createElement("label",{className:"htt_lable1"},"线索来源："),
                    React.createElement("label",{className:"htt_lable3"},this.state.hintsInfo.source)
                ));
            }

            return React.createElement(
                "div",{id:"hinst_info"},
                React.createElement(
                    "div",
                    {id:"hinst_info_div"},
                    React.createElement( "p",{ className:"hints_toolbar_topbtn"},
                        React.createElement("label",{className:"htt_lable1"},"举报时间："),
                        React.createElement("label",{className:"htt_lable3"},this.state.hintsInfo.createTimeFormat)
                    ),
                    React.createElement( "p",{className:"hints_toolbar_topbtn"},
                        React.createElement("label",{className:"htt_lable1"},"社区："),
                        React.createElement("label",{className:"htt_lable2"},this.state.hintsInfo.area1)
                    ),
                    React.createElement( "p",{className:"hints_toolbar_topbtn"},
                        React.createElement("label",{className:"htt_lable1"},"居民小组："),
                        React.createElement("label",{className:"htt_lable2"},this.state.hintsInfo.area0)
                    ),
                    React.createElement( "p",{className:"hints_toolbar_topbtn"},
                        React.createElement("label",{className:"htt_lable1"},"地址："),
                        React.createElement("label",{className:"htt_lable2"},this.state.hintsInfo.address)
                    ),
                    React.createElement( "p",{className:"hints_toolbar_topbtn"},
                        React.createElement("label",{className:"htt_lable1"},"举报人："),
                        React.createElement("label",{className:"htt_lable3"},this.state.hintsInfo.creator)
                    ),
                    React.createElement( "p",{ className:"hints_toolbar_topbtn"},
                        React.createElement("label",{className:"htt_lable1"},"举报人类型："),
                        React.createElement("label",{className:"htt_lable3"},this.state.hintsInfo.creatorType)
                    ),
                    React.createElement( "p",{ className:"hints_toolbar_topbtn"},
                        React.createElement("label",{className:"htt_lable1"},"手机号码："),
                        React.createElement("label",{className:"htt_lable3"},this.state.hintsInfo.mobile)
                    ),
                    str,
                    defaultHintsSource,
                    React.createElement( "p",{id:"hints_info_p",className:"hints_toolbar_topbtn"},
                        React.createElement("label",{id:"htt_lable1",className:"htt_lable1"},"描述："),
                        React.createElement("label",{id:"htt_lable2",className:"htt_lable2"},this.state.hintsInfo.remark)
                    )
                ),
                hintsSource,
                React.createElement(
                    "div",
                    {id:"hinst_info_imgs"},
                    tmp
                ),
                React.createElement(
                    "div",{id:"hi_start"},
                    React.createElement("label",{id:"hinfo_start1"},"状态："),
                    React.createElement("label",{id:"hinfo_start2",className:handlestyle},this.state.hintsInfo.statusId)
                ),
                React.createElement(
                    "div",
                    {id:"SourceReply_Modal"}
                )
            );
        }else{
            return React.createElement(
                "div",{id:"hinst_info"},
                React.createElement(
                    "div",
                    {id:"hinst_info_div"},"未获取到线索详情或者获取线索详情失败！")
            )
        }

    }
});



//ReactDOM.render(React.createElement(HintsList,{}),document.body)
