// JavaScrcommon_ipt Document
var Pagination = ReactBootstrap.Pagination;
var Input = window.Input||ReactBootstrap.Input;

var key = 10000;
var InBox = React.createClass({
    getInitialState: function getInitialState() {
        return {
            data:[],
            pageSize:20,
            page:1,
            selectId:"",
            dataCount:0,
            emailInfo:'',
            timeForm:"",
            timeTo:"",
            selectData:'',
        };
    },
    componentWillMount:function(){

    },
    handleSelect:function(event, selectedEvent){
        this.setState({page:selectedEvent.eventKey});
        console.log(selectedEvent.eventKey);
        var begin = $("input[name='begin']").val();
        var end = $("input[name='end']").val();
        var key= $("input[name='keyword']").val();
        var uid = getCookie("uid");
        var sid = getCookie("sid");
        var userName=getCookie("userName");
        var tmp = {"sid":sid,"pageNo":selectedEvent.eventKey,"pageSize":this.state.pageSize,"userName":userName,"uid":uid,"timeFrom":this.state.timeFrom,"timeTo":this.state.timeTo, "keyword":key, };
        var tmp1  = JSON.stringify(tmp);
        $.ajax({
            url:common_ip+"mail.do?action=listSend",
            dataType:'json',
            data:tmp1,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
					
                    if(data.sendPager.list!=null&&data.sendPager.list.length>=0){
                        this.state.selectId=data.sendPager.list[0].mailId;
                        this.state.emailInfo=data.sendPager.list[0];
                    }
                    this.state.data=data.sendPager.list;
                    this.setState({dataCount:data.sendPager.totalCount});
                }else{
                    layer.alert(data.errorMsg,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },
    outBoxListPage:function(){
        $("body").keydown(function(e) {
            if (e.keyCode == "13") {//keyCode=13是回车键
                $('.mail_button').click();
            }
        });
        var uid = getCookie("uid");
        var sid = getCookie("sid");
        var userName=getCookie("userName");
        var mydateInput = document.getElementById("mail_text");
        var time = new Date().Format("yyyy-MM-dd");
        var time=new Date().GetDate(20);
        mydateInput.value=time;
        var mydateInput2 = document.getElementById("mail_text1");
        var time2 = new Date().Format("yyyy-MM-dd");
        mydateInput2.value=time2;
        this.state.timeForm=time;
        this.state.timeTo=time2;
        var tmp = {"sid":sid,"pageNo":"1","pageSize":this.state.pageSize,"userName":userName,"uid":uid,"timeFrom":time,"timeTo":time2, "keyword":"", };
        var tmp1  = JSON.stringify(tmp);
        $.ajax({
            url:common_ip+"mail.do?action=listSend",
            dataType:'json',
            data:tmp1,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    if(data.sendPager.list.length==0){
                        layer.alert("当前用户没有发件记录",{icon:7});
                    }
                    if(data.sendPager.list!=null&&data.sendPager.list.length>0){
                        this.state.selectId=data.sendPager.list[0].mailId;
                        this.state.emailInfo=data.sendPager.list[0];
                    }
                    this.state.data=data.sendPager.list;
                    this.setState({dataCount:data.sendPager.totalCount});
                }else{
                    layer.alert(data.errorMsg,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },
    componentDidMount: function(){
        this.outBoxListPage();
        var _this = this;
        nsEventBus.eventbus.on("QueryOutbox","QueryOutbox",function(msg){
            _this.outBoxListPage();
        });
    },
    findMail:function(){
        var begin = $("input[name='begin']").val();
        var end = $("input[name='end']").val();
        if(begin!=""&&end!="") {
            this.state.timeFrom = begin;
            this.state.timeTo = end;
        }
        var key= $("input[name='keyword']").val();
        var uid = getCookie("uid");
        var sid = getCookie("sid");
        var userName=getCookie("userName");
        var tmp = {"sid":sid,"pageNo":this.state.page,"pageSize":this.state.pageSize,"userName":userName,"uid":uid,"timeFrom":this.state.timeFrom,"timeTo":this.state.timeTo, "keyword":key, };
        var tmp1  = JSON.stringify(tmp);
        $.ajax({
            url:common_ip+"mail.do?action=listSend",
            dataType:'json',
            data:tmp1,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
					layer.msg("查询成功！",{icon:1});
                    if(data.sendPager.list!=null&&data.sendPager.list.length>0){
                        this.state.selectId=data.sendPager.list[0].mailId;
                        this.state.emailInfo=data.sendPager.list[0];
                    }
                    this.state.data=data.sendPager.list;
                    this.setState({dataCount:data.sendPager.totalCount});
                }else{
                    layer.alert("查询数据失败！"+data.errorMsg,{icon:2,title:"错误"});
                 
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },
    selcetClick:function(e){
		var tr = document.getElementsByClassName("mail_tr");
        var index = $(".mail_tr:hover").index()-1;
        if(key != -1 && key != 10000 ){
            $(".mail_tr").removeAttr("style");
        }
        tr[index].style.backgroundColor= "#fffee1";
        key=index;
        var targetid = e.target.getAttribute("id");
        this.setState({selectId:targetid});
        $("#emailInfo").empty();
        ReactDOM.render(React.createElement(emailInfo,{mailId:targetid}),document.getElementById("emailInfo"));
        var info="";
        for(var i=0;i<this.state.data.length;i++){
            if(this.state.data[i].mailId==targetid){
                info=this.state.data[i];
                break;
            }
        }
        this.setState({selectData:info});
    },
    deleteClick:function(){
        var _this = this;
        if(this.state.selectData==""){
            layer.alert("请选择要删除的数据！",{icon:0});
            return;
        }
        layer.confirm('您确定要删除吗？', {
                btn: ['确定','取消'] //按钮
            },
            function(index){
                layer.close(index);
                var sid = getCookie("sid");
                var rule = {"sid":sid,"mailId":_this.state.selectData.mailId};
                var tmp = JSON.stringify(rule);
                $.ajax({
                    url:common_ip+"mail.do?action=deleteSend",
                    dataType:'json',
                    data:tmp,
                    type:'post',
                    contentType:"application/x-www-form-urlencoded",
                    success: function(data){
                        if(data.successFlag){
                            layer.msg("删除成功！",{icon:1});
                            nsEventBus.eventbus.broadcast("QueryOutbox",null);
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
    render:function render(){
        var _this=this;
        var tmp=[];
        if(this.state.emailInfo!=""){
            tmp.push(React.createElement(emailInfo,{mailId:this.state.selectId}));
        }
        return (
            React.createElement("div",{id:"mail_down_right"},
                React.createElement(
                    "div",
                    {id:"outbox_Allbutton"},
                    React.createElement( "button",{className:"outbox_delete",onClick:this.deleteClick},"删除")
                ),
                React.createElement("div",{ className: "mail_div" },
                    React.createElement("input", {id:"mail_text",type:"date", name: "begin"}),
                    React.createElement("label",{className: "mail_zhi" },"~"
                    ),
                    React.createElement("input", {id:"mail_text1",type:"date", name: "end"}),
                    React.createElement("input", { type: "text", className: "mail_search", name: "keyword", placeholder: "关键字" }),
                    React.createElement("button", { className: "mail_button", onClick:this.findMail},"搜索")
                ),
                React.createElement("div",{ className: "mail_div_list" },
                    React.createElement("div",{ className: "mail_div_Tible" },
                        React.createElement("table",{id:"mail_table"},
                            React.createElement("tr",{id:"mail_th",className:"mail_th"},
                                React.createElement("th",{className:"outbox_td1"},"时间"),
                                React.createElement("th",{className:"outbox_td2"},"收件人"),
                                React.createElement("th",{className:"outbox_td3"},"标题")
                            ),
                            this.state.data.map(function(array,index){
                                var str=array.title;
                                if(array.title.length>5){
                                     str= array.title.substr(0,6)+"...";
                                }
                                var uname= array.receiverList;
                                if(array.receiverList.length>5){
                                    uname= array.receiverList.substr(0,6)+"...";
                                }
                                return(
                                    React.createElement("tr",{className:"mail_tr",id:"mail_line",onClick:_this.selcetClick},
                                        React.createElement("td",{id:array.mailId,className:"outbox_td1"},array.createTimeFormat),
                                        React.createElement("td",{id:array.mailId,className:"outbox_td2"},uname),
                                        React.createElement("td",{id:array.mailId,className:"outbox_td3"},str)
                                    )
                                    );
                            })
                        )
                    ) ,React.createElement(Pagination, {
                        id:"pagination",
                        prev: true,
                        next: true,
                        first: '首页',
                        last: '尾页',
                        ellcommon_ipsis: true,
                        boundaryLinks: true,
                        items: Math.ceil(this.state.dataCount/this.state.pageSize),
                        maxButtons: 5,
                        activePage: this.state.page,
                        onSelect: this.handleSelect

                    })
                ),
                React.createElement("div",{id:"emailInfo"},
                    tmp
                )
            )
            );
    }
});

// JavaScrcommon_ipt Document
var OutboxMain=React.createClass({
    getInitialState: function getInitialState() {
        return {
            workInfo: "",
            num:"",
        };
    },
    componentDidMount:function(){
        var Request = new Object();
        Request = this.GetRequest();
        var isSend = Request["isSend"];
       if(isSend){
           ReactDOM.render(React.createElement(Transceiver,{title:"新建发文",showModal:true,isSelectUser:true,operationType:"sendFile"}),document.getElementById("sendfile_div"));
       }
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
                    React.createElement(Nav,{url:"",checkid:4})
                ),
                React.createElement("div",{id:"user_down"},
                    React.createElement("div",{id:"user_down_left"},
                        React.createElement(LeftColumn,{checkid:3})
                    ),
                    React.createElement("div",{id:"inbox_id"},
                        React.createElement(InBox)
                    )
                )
            )
            );
    }
});
ReactDOM.render(React.createElement(OutboxMain), document.getElementById("container"));
