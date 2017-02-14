var Pagination = ReactBootstrap.Pagination;
var Input = ReactBootstrap.Input;
var HistoryLoglist = React.createClass({
    getInitialState: function getInitialState() {
        return {
            data:""
        };
    },
    componentDidMount: function(){
    },
    render:function()
    {
        var str=this.props.data.patrolTimeFormat;
        return (
            React.createElement("div", {id:"page"},
                React.createElement("table", {id:"inspectionlog_table"},
                    React.createElement("tr",null,
                        React.createElement("th", {className: "inspection_th0"}, ""),
                        React.createElement("th", {className: "inspection_th3"}, "点数"),
                        React.createElement("th", {className: "inspection_th4"}, "违建点名称")
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr1"},
                        React.createElement("td", {className: "inspection_th1"}, "巡查时间"),
                        React.createElement("td",{className:"inspection_th1",colSpan: "2"},str.substring(0,11))
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr2"},
                        React.createElement("td", {className: "inspection_th1"}, "所属中队"),
                        React.createElement("td",{className:"inspection_th1",colSpan:"2"},this.props.data.lohus)
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr3"},
                        React.createElement("td", {className: "inspection_th1"}, "有变化"),
                        React.createElement("td",{className:"inspection_th1"},this.props.data.changeCount),
                        React.createElement("td",{className:"inspection_th2"},this.props.data.changeAddress)
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr4"},
                        React.createElement("td", {className: "inspection_th1"}, "无变化"),
                        React.createElement("td",{className:"inspection_th1"},this.props.data.unChangeCount),
                        React.createElement("td",{className:"inspection_th2"},this.props.data.unChangeAddress)
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr5"},
                        React.createElement("td",{className:"inspection_th0"},"未巡查"),
                        React.createElement("td",{className:"inspection_th1"},this.props.data.uncheckCount),
                        React.createElement("td",{className:"inspection_th2"},this.props.data.uncheckAddress)
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr6"},
                        React.createElement("td",{className:"inspection_th0"},"新增"),
                        React.createElement("td",{className:"inspection_th1"},this.props.data.newCount),
                        React.createElement("td",{className:"inspection_th2"},this.props.data.newAddress)
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr7"},
                        React.createElement("td", {className: "inspection_th3"}, "中队领导审批"),
                        React.createElement("td",{className:"inspection_th1",colSpan:"2"},"")
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr8"},
                        React.createElement("td",{className:"inspection_th0"},"大队领导审批"),
                        React.createElement("td",{className:"inspection_th1",colSpan:"2"},"")
                    )
                )
            )
        );
    }
});
var TrendsLoglist = React.createClass({
    getInitialState: function getInitialState() {
        return {
            data:""
        };
    },
    componentDidMount: function(){
    },
    render:function()
    {
        var area=this.props.data.area.split(",");
        var strs=[];
        var _this=this;
        for(var i=0;i<area.length;i++){
            var str_1=area[i]+":";
            var isinclude=false;
            this.props.data.patrolChangeReports.map(function(array){
                if (area[i] ==array.area) {
                    isinclude=true;
                    var address=array.changeContent.split(":")[0];
                    var str_0="";
                    for(var j=0;j<_this.props.notice.length;j++){
                        if(address=_this.props.notice[j].address){
                            str_0+=",现场开具"+_this.props.notice[j].typeCode+_this.props.notice[j].noticeNo;
                        }
                    }
                    str_1+=array.changeContent+str_0+"。";
                }
            })
            if(!isinclude){
                str_1+="无变化。";
            }
            strs.push(React.createElement("label",{},str_1));
            strs.push(React.createElement("br",{}));
        }
        var str=this.props.data.patrolTimeFormat.substring(0,11);
        return (
            React.createElement("div", {id:"pageTrendsLog"},
                React.createElement("div", {id:"pageTrendsLog_title"},
                    React.createElement("h3",{},"大鹏新区规划土地监察动态巡查信息记录表")
                ),
                React.createElement("table", {id:"inspectionlog_table"},
                    React.createElement("tr",null,
                        React.createElement("td", {className: "inspection_th0"}, "巡查时间"),
                        React.createElement("td", {className: "inspection_th1",colSpan: "2"}, str+"\r\n"+"9:00-15:00"),
                        React.createElement("td", {className: "inspection_th3"}, "巡查人员（有执法证需写执法证号）"),
                        React.createElement("td", {className: "inspection_th5",colSpan: "2"}, this.props.data.names)
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr1"},
                        React.createElement("td", {className: "inspection_th0"}, "巡查区域及路线"),
                        React.createElement("td",{className:"inspection_th1",colSpan: "5"},this.props.data.area)
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr2"},
                        React.createElement("td", {className: "inspection_th0"}, "巡查基本情况记录（巡查地点、项目、主体、面积、用途、现状、进度、项目审批等情况）"),
                        React.createElement("td",{className:"inspection_th2",colSpan:"5"},strs)
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr3"},
                        React.createElement("td", {className: "inspection_th0",rowSpan:"2"}, "对涉嫌违法行为的初步核查情况"),
                        React.createElement("td",{className:"inspection_th1"},"当事人"),
                        React.createElement("td",{className:"inspection_th2"},""),
                        React.createElement("td",{className:"inspection_th3"},"联系方式"),
                        React.createElement("td",{className:"inspection_th2"},"")
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr4"},
                        React.createElement("td", {className: "inspection_th1",colSpan:"4"}, "基本情况 ：")
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr5"},
                        React.createElement("td",{className:"inspection_th0"},"巡查直接责任人（当次巡查的负责人）巡查意见"),
                        React.createElement("td",{className:"inspection_th1",colSpan:"4"},"")
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr6"},
                        React.createElement("td",{className:"inspection_th0"},"对违法行为的制止措施及效果"),
                        React.createElement("td",{className:"inspection_th1",colSpan:"5"},"")
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr7"},
                        React.createElement("td", {className: "inspection_th0"}, "巡查主要责任人（各片区负责人）审核意见"),
                        React.createElement("td",{className:"inspection_th2",colSpan:"5"},"")
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr8"},
                        React.createElement("td",{className:"inspection_th0"},"报告情况"),
                        React.createElement("td",{className:"inspection_th1",colSpan:"5"},"")
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr9"},
                        React.createElement("td",{className:"inspection_th0"},"巡查机构负责人（队领导）审核意见"),
                        React.createElement("td",{className:"inspection_th1",colSpan:"5"},"")
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr10"},
                        React.createElement("td",{className:"inspection_th0"},"后续处理情况"),
                        React.createElement("td",{className:"inspection_th1",colSpan:"5"},"")
                    ),
                    React.createElement("tr",{className:"inspectionlog_table_tr11"},
                        React.createElement("td",{className:"inspection_th0"},"备    注"),
                        React.createElement("td",{className:"inspection_th1",colSpan:"5"},"")
                    )
                ),
                React.createElement("p",{},"备注：本表由巡查人员根据每次巡查情况填写，按时间顺序分年度装订成巡查台帐。")
            )
        );
    }
});
function checktoggle(domid) {
    var checkboxall = $(domid);
    if(checkboxall.attr("name") == "check_true"){
        checkboxall.removeClass("checkIcon");
        checkboxall.addClass("normalCheck");
    }else{
        checkboxall.removeClass("normalCheck");
        checkboxall.addClass("checkIcon");
    }
}
var sid = getCookie("sid");
// 表格
var HistoryLog = React.createClass({
    getInitialState: function getInitialState() {
        return {
            data:[],
            selindex:-1,
            page: 1,
            pageSize:12,
            totalCount:1,
            check1:1,
            check2:1,
            check3:1,
            checkValue:6,
            selectOrg:"",
            orgList:[],
            isChange:"",
        };
    },
    hanOnPublicFun: function(choice,changeFlag,page){
        if(typeof(isChange)=="undefined"){
            isChange = "";
        }

        var time  = document.getElementById("beginTime").value;

        var orgId = getCookie("orgId");
        var rules = {"sid":sid,"pageNo":1,"pageSize":100,"time":time,"key":"","range":6,"orgId":orgId};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"buildings.do?action=patrolLogHistory",
            dataType:'json',
            data:tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                console.log(data);
                if(data.successFlag){
                    var tmp=[];
                    data.patrolHisLogReport.map(function (arr) {
                        tmp.push(arr.lohus);
                    });
                    this.state.orgList=tmp;
                    if(tmp.length>=0){
                        this.state.selectOrg=tmp[0];
                    }
                    this.setState({data:data})
                }else{
                    layer.alert("查询失败");
                    layer.alert(data.errorMsg);
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
//			console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },
    hanOnTrendsFun: function(){
        var time  = document.getElementById("beginTime").value;

        var orgId = getCookie("orgId");
        var rules = {"sid":sid,"time":time};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"buildings.do?action=patrolLogDynamic",
            dataType:'json',
            data:tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                console.log(data);
                if(data.successFlag){
                    var tmp=[];
                    data.patrolLogDynamicReport.map(function (arr) {
                        tmp.push(arr.orgName);
                    });
                    this.state.orgList=tmp;
                    if(tmp.length>=0){
                        this.state.selectOrg=tmp[0];
                    }
                    this.setState({data:data})
                }else{
                    layer.alert("查询失败");
                    layer.alert(data.errorMsg);
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
//			console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },
    hanOnChangeFun: function(choice,changeFlag,page){
        if(typeof(isChange)=="undefined"){
            isChange = "";
        }

        var time  = document.getElementById("beginTime").value;

        var sid = getCookie("sid");
        var orgId = getCookie("orgId");
        var rules = {"sid":sid,"time":time};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"buildings.do?action=patrolChangeLog",
            dataType:'json',
            data:tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                console.log(data);
                if(data.successFlag){
                    var tmp=[];
                    data.patrolTodayLog.map(function (arr) {
                        var index=arr.gridId.indexOf("队");
                        var gridNmae=arr.gridId.substring(0,index+1);
                        var isExit=false;
                        tmp.map(function (arry) {
                            if(arry==gridNmae){
                                isExit=true;
                            }
                        });
                        if(!isExit){
                            tmp.push(gridNmae);
                        }
                    });
                    this.state.orgList=tmp;
                    if(tmp.length>=0){
                        this.state.selectOrg=tmp[0];
                    }
                    this.setState({data:data})
                }else{
                    layer.alert("查询失败");
                    layer.alert(data.errorMsg);
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
//			console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },
    componentDidMount: function(){

        $("body").keydown(function(e) {
            if (e.keyCode == "13") {//keyCode=13是回车键
                $('.find_history').click();
            }
        });

        var mydateInput = document.getElementById("beginTime");
        var time = new Date().Format("yyyy-MM-dd");
        mydateInput.value=time;


        this.hanOnTrendsFun();
    },
    // handleSelect:function(event,selectedEvent){
    //     this.setState({page:selectedEvent.eventKey});
    //     this.hanOnPublicFun("handleSelect",this.state.checkValue,selectedEvent.eventKey);
    // },
    // findHistory:function(){
    //     this.state.page=1;
    //     this.hanOnPublicFun("find",this.state.checkValue,1);
    // },
    hanOnStartTime:function(){
        this.state.page=1;
        if(this.state.isChange=="false"){
            this.hanOnPublicFun("find",this.state.checkValue,1);
        }else if(this.state.isChange=="true"){
            this.hanOnChangeFun();
        }else{
            this.hanOnTrendsFun();
        }
    },
    hanOnDaoChuClick:function(){
        exportExecl("history_exportexecl");
    },
    checkboxChange:function () {
        this.state.isChange=document.getElementById("inspection_type").value;
        if(this.state.isChange=="false"){
            this.hanOnPublicFun("find",this.state.checkValue,1);
        }else if(this.state.isChange=="true"){
            this.hanOnChangeFun();
        }else{
            this.hanOnTrendsFun();
        }
    },
    hanOnBinaHuaChange: function(){
        this.setState({selectOrg:$("#selectOrg").val()});
    },
    printClick:function(){
        $("#history_exportexecl").jqprint();
    },
    render:function() {
        var _this=this;
        var tmp=[];
        if(this.state.isChange=="false") {
            if (typeof (this.state.data.patrolHisLogReport) != "undefined" && this.state.data.patrolHisLogReport != null && this.state.data.patrolHisLogReport != "") {
                this.state.data.patrolHisLogReport.map(function (arr) {
                    if (arr.lohus == _this.state.selectOrg) {
                        tmp.push(React.createElement(HistoryLoglist, {data: arr}));
                    }
                })
            }
        }else if(this.state.isChange=="true"){
            var items=[];
            items.push(React.createElement("tr",null,
                React.createElement("th", {className: "inspection_th10"}, "序号"),
                React.createElement("th", {className: "inspection_th11"}, "详细地址"),
                React.createElement("th", {className: "inspection_th12"}, "所属网格组"),
                React.createElement("th", {className: "inspection_th13"}, "巡查人"),
                React.createElement("th", {className: "inspection_th14"}, "现场情况")
            ));
            if (typeof (this.state.data.patrolTodayLog) != "undefined" && this.state.data.patrolTodayLog != null && this.state.data.patrolTodayLog != "") {
                var i=0;
                this.state.data.patrolTodayLog.map(function (arry) {
                    i++;
                    items.push(React.createElement("tr",{className:"inspection_tr11"},
                        React.createElement("td", {className: "inspection_th10"}, i),
                        React.createElement("td", {className: "inspection_th11"}, arry.address),
                        React.createElement("td", {className: "inspection_th12"}, arry.gridId),
                        React.createElement("td", {className: "inspection_th13"},  arry.names),
                        React.createElement("td", {className: "inspection_th14"}, arry.remark)
                    ));
                })
            }
            tmp.push(React.createElement("table", {id:"inspectionlog_table"},items))
        }else{
            if (typeof (this.state.data.patrolLogDynamicReport) != "undefined" && this.state.data.patrolLogDynamicReport != null && this.state.data.patrolLogDynamicReport != "") {
                this.state.data.patrolLogDynamicReport.map(function (arr) {
                    if (arr.orgName == _this.state.selectOrg) {
                        tmp.push(React.createElement(TrendsLoglist, {data: arr,notice:_this.state.data.patrolLogDynamicNotice}));
                    }
                })
            }
        }

        var options=[];
        if(typeof (this.state.orgList)!="undefined"&&this.state.orgList!=null&&this.state.orgList!="") {
            this.state.orgList.map(function (arr) {
                options.push(React.createElement("option", {value: arr}, arr));
            })
        }
        return (
            React.createElement("div", {id:"inspectionlog_fdiv"},
//				React.createElement("select", {id:"selectSourceid",onChange:this.hanOnBinaHuaChange},
//					React.createElement("option",{value:""},"全部"),
//					React.createElement("option",{value:true},"有变化"),
//					React.createElement("option",{value:false},"无变化")
//				),
//				React.createElement("select", {id:"showType",onChange:this.hanOnBinaHuaChange},
//                    React.createElement("option",{value:0},"报表"),
//                    React.createElement("option",{value:1},"详情")
//                ),
                React.createElement(Input,{id:"beginTime",className:"history_begin",type:"date",onChange:this.hanOnStartTime}),
                React.createElement("select", {id:"inspection_type",onChange:this.checkboxChange},
                    React.createElement("option", {value: ""}, "巡查动态"),
                    React.createElement("option", {value: false}, "巡查日志"),
                    React.createElement("option", {value: true}, "变化日志")
                ),
                React.createElement("select", {id:"selectOrg",onChange:this.hanOnBinaHuaChange},
                    options
                ),
                React.createElement("button", {id:"inspection_button",onClick:this.hanOnDaoChuClick},"导出"),
                React.createElement("button",{id:"print_btn",onClick:this.printClick},"打印"),
                React.createElement("div",{id:"history_exportexecl"},
                    tmp
                )
            )
        );
    }
})
