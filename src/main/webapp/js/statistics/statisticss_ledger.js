

var StatisticsLedgerRemove =React.createClass({
    getInitialState: function getInitialState() {
        var data=[];
        if(typeof (this.props.data)!="undefined"&&this.props.data!=null&&this.props.data!=""){
             data=this.props.data;
        }
        return {
            data:data,
        };
    },
    render: function() {
        var tmp=[];
        var area1=0;
        var area2=0;
        for(var i=0;i<this.state.data.length;i++){
            area1+= this.state.data[i].coverArea;
            area2+=  this.state.data[i].buildArea;
            tmp.push(
                React.createElement("tr",{className:"statenent_thead"},
                    React.createElement("td",{},i+1),
                    React.createElement("td",{},this.state.data[i].address),
                    React.createElement("td",{},this.state.data[i].enforceRemark),
                    React.createElement("td",{className:"statenent_tr"},this.state.data[i].constructCode),
                    React.createElement("td",{},this.state.data[i].coverArea),
                    React.createElement("td",{},this.state.data[i].buildArea),
                    React.createElement("td",{},this.state.data[i].tempBlockCount),
                    React.createElement("td",{},this.state.data[i].floorCount),
                    React.createElement("td",{},this.state.data[i].enforceDateFormat),
                    React.createElement("td",{},this.state.data[i].ownerName),
                    React.createElement("td",{},this.state.data[i].ownerTel),
                    React.createElement("td",{},this.state.data[i].remark)
                )
            );
        }
        return(
            React.createElement("div",{},
            React.createElement("table",{id:"statenent_table"},
                React.createElement("tr",{className:"statenent_thead"},
                    React.createElement("th",{},"序号"),
                    React.createElement("th",{},"违建详细地址"),
                    React.createElement("th",{},"现状描述"),
                    React.createElement("th",{},"违建类型"),
                    React.createElement("th",{},"拆除占地面积"),
                    React.createElement("th",{className:"statenent_tr"},"拆除面积"),
                    React.createElement("th",{},"拆除栋数"),
                    React.createElement("th",{},"拆除总层数"),
                    React.createElement("th",{},"拆除时间"),
                    React.createElement("th",{},"业主姓名"),
                    React.createElement("th",{},"业主电话"),
                    React.createElement("th",{},"备注")
                ),
                tmp,
                React.createElement("tr",{className:"statenent_thead"},
                    React.createElement(
                        "td",
                        { colSpan: "4" },
                        "合计"
                    ),
                    React.createElement("td",{},area1),
                    React.createElement("td",{},area2),
                    React.createElement("td",{},""),
                    React.createElement("td",{},""),
                    React.createElement("td",{},""),
                    React.createElement("td",{},""),
                    React.createElement("td",{},""),
                    React.createElement("td",{},"")
                )
            )
        ));
    }
});

var StatisticsLedgerAdd =React.createClass({
    getInitialState: function getInitialState() {
        var data=[];
        if(typeof (this.props.data)!="undefined"&&this.props.data!=null&&this.props.data!=""){
            data=this.props.data;
        }
        return {
            data:data,
        };
    },
    render: function() {
        var tmp=[];
        var area1=0;
        var area2=0;
        for(var i=0;i<this.state.data.length;i++){
            area1+= this.state.data[i].coverArea;
            area2+=  this.state.data[i].buildArea;
            tmp.push(
                React.createElement("tr",{className:"statenent_thead"},
                    React.createElement("td",{},i+1),
                    React.createElement("td",{},this.state.data[i].address),
                    React.createElement("td",{className:"statenent_tr"},this.state.data[i].constructCode),
                    React.createElement("td",{},this.state.data[i].coverArea),
                    React.createElement("td",{},this.state.data[i].buildArea),
                    React.createElement("td",{},this.state.data[i].tempBlockCount),
                    React.createElement("td",{},this.state.data[i].floorCount),
                    React.createElement("td",{},this.state.data[i].enforceDateFormat),
                    React.createElement("td",{},this.state.data[i].ownerName),
                    React.createElement("td",{},this.state.data[i].ownerTel),
                    React.createElement("td",{},this.state.data[i].remark)
                )
            );
        }
        return(
            React.createElement("div",{},
                React.createElement("table",{id:"statenent_table"},
                    React.createElement("tr",{className:"statenent_thead"},
                        React.createElement("th",{},"序号"),
                        React.createElement("th",{},"违建详细地址"),
                        React.createElement("th",{},"违建类型"),
                        React.createElement("th",{},"占地面积"),
                        React.createElement("th",{className:"statenent_tr"},"建筑面积"),
                        React.createElement("th",{},"栋数"),
                        React.createElement("th",{},"层数"),
                        React.createElement("th",{},"发现时间"),
                        React.createElement("th",{},"业主姓名"),
                        React.createElement("th",{},"业主电话"),
                        React.createElement("th",{},"备注")
                    ),
                    tmp,
                    React.createElement("tr",{className:"statenent_thead"},
                        React.createElement(
                            "td",
                            { colSpan: "3" },
                            "合计"
                        ),
                        React.createElement("td",{},area1),
                        React.createElement("td",{},area2),
                        React.createElement("td",{},""),
                        React.createElement("td",{},""),
                        React.createElement("td",{},""),
                        React.createElement("td",{},""),
                        React.createElement("td",{},""),
                        React.createElement("td",{},"")
                    )
                )
            ));
    }
});


var StatisticsLedger =React.createClass({
    getInitialState: function getInitialState() {
        return {
            communitys: ['巴西','印尼','美国','印度','中国','世界人口(万)'],
            griddings:[],
            buildingType:[],
            statisticsType:0,
            statementType:0,
            title:"",
            data:"",
        };
    },
    componentDidMount: function(){

        var mydateInput = document.getElementById("statement_timefor");
        var time = new Date().Format("yyyy-MM-dd");
        var time=new Date().GetDate(20);
        mydateInput.value=time;

        var mydateInput2 = document.getElementById("statement_timeto");
        var time2 = new Date().Format("yyyy-MM-dd");
        mydateInput2.value=time2;

        var sid = getCookie("sid");
        var value=document.getElementById("statement_statisticsType").value;
        this.state.statisticsType=value;
        var rules1={"sid":sid,"typeId":"'CommunityCode','ConstructCode'"};
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
                    for(var i=0;i<data.commonCodeList.length;i++){
                        if(data.commonCodeList[i].typeId=="CommunityCode"){
                            communitycode.push(data.commonCodeList[i]);
                        }else if(data.commonCodeList[i].typeId="ConstructCode"){
                            this.state.buildingType.push(data.commonCodeList[i]);
                        }
                    }
                    this.setState({communitys:communitycode});
                } else{
                    layer.alert("请求失败！"+data.errorMsg,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error,{icon:2,title:"错误"});
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
        var rules1={"sid":sid,"orderNo":3,"orgName":""};
        var tmp1 = JSON.stringify(rules1);
        $.ajax({
            url:common_ip+"orgInfo.do?action=listByCmd",
            dataType:'json',
            data: tmp1,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    this.setState({griddings:data.orgList});
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
    statementTypeclick:function(e){
        var value=document.getElementById("statement_statementType").value;
        if(value==0){
            document.getElementById("statement_statementMonth").style.display="none";
        } else{
            document.getElementById("statement_statementMonth").style.display="block";
        }
    },
    ondblclick:function(e){
        var statisticsType=document.getElementById("statement_statisticsType").value;
        this.setState({statisticsType:statisticsType})
    },
    statementClick:function(e){
        var timeFrom=document.getElementById("statement_timefor").value;
        var timeTo=document.getElementById("statement_timeto").value;
        var buildingTypes=document.getElementById("statement_buildingTypes").value;
        var rangValue=document.getElementById("statement_statisticsPar").value;
        var statisticsPar=document.getElementById("statement_budingType").value;
        var val=$("#statement_statisticsPar").find("option:selected").text();
        var rangType="";
        if(rangValue==""){
            rangType="all";
        }else if(this.state.statisticsType==0){
            rangType="area1";
        }else if(val.indexOf("组")>=0){
            rangType="grid";
        }else if(val.indexOf("中队")>=0){
            rangType="lochus";
        }

        var sid = getCookie("sid");
        if(statisticsPar==0){
            var rules1={"sid":sid,"constructCode":buildingTypes,"timeFrom":timeFrom,"timeTo":timeTo,"rangType":rangType,"rangValue":rangValue};
            var tmp1 = JSON.stringify(rules1);
            $.ajax({
                url:common_ip+"count.do?action=destroyReport",
                dataType:'json',
                data: tmp1,
                type:'post',
                contentType:"application/x-www-form-urlencoded",
                success: function(data){
                    if(data.successFlag){
                        $("#statement_main").empty();
                        ReactDOM.render(React.createElement(StatisticsLedgerRemove,{data:data.destroyReports}), document.getElementById("statement_main"));
                    } else{
                        layer.alert("请求失败！"+data.errorMsg,{icon:2,title:"错误"});
                    }
                }.bind(this),
                error: function(request, state, error){
                    layer.alert(error,{icon:2,title:"错误"});
                    console.error(this.props.url, state, error.toString());
                }.bind(this)
            });
        }else{
            var rules1={"sid":sid,"constructCode":buildingTypes,"timeFrom":timeFrom,"timeTo":timeTo,"rangType":rangType,"rangValue":rangValue};
            var tmp1 = JSON.stringify(rules1);
            $.ajax({
                url:common_ip+"count.do?action=newBuildReport",
                dataType:'json',
                data: tmp1,
                type:'post',
                contentType:"application/x-www-form-urlencoded",
                success: function(data){
                    if(data.successFlag){
                        $("#statement_main").empty();
                        ReactDOM.render(React.createElement(StatisticsLedgerAdd,{data:data.newReports}), document.getElementById("statement_main"));
                    } else{
                        layer.alert("请求失败！"+data.errorMsg,{icon:2,title:"错误"});
                    }
                }.bind(this),
                error: function(request, state, error){
                    layer.alert(error,{icon:2,title:"错误"});
                    console.error(this.props.url, state, error.toString());
                }.bind(this)
            });
        }

    },
    statementExport:function(){
        exportExecl("statenent_table");
    },
    printClick:function(e){
        var head=[];
        if(this.state.statementType==0){
            haed=this.state.data.curMonths
        }else{
            haed=this.state.data.names;
        }
//        $("#statement_main").empty();
//        ReactDOM.render(React.createElement(StatisticsChart,{title:this.state.title,renderAsImage:true,heads:haed,data1:this.state.data.newCoverAreas,data2:this.state.data.newBuildAreas,data3:this.state.data.amounts}), document.getElementById("statement_main"));
//        $("#statement_container").jqprint();
    },
    statisticsParChonge:function(e){
        var statementType=document.getElementById("statement_statementType").value;
        var statisticsPar=document.getElementById("statement_statisticsPar").value;
        if(statementType==0&&statisticsPar==""){
            document.getElementById("statement_headType").style.display="block";
        } else{
            document.getElementById("statement_headType").style.display="none";
        }
    },

    render: function() {
        var buildingTypes=[];
        buildingTypes.push(React.createElement("option", {value:""},"全部类型"));
        for(var i=0;i<this.state.buildingType.length;i++){
            buildingTypes.push(React.createElement("option", {value:this.state.buildingType[i].codeName},this.state.buildingType[i].codeName));
        }

        var tmpStatisticsPar=[];
        if(this.state.statisticsType==0){
            tmpStatisticsPar.push(React.createElement("option", {value:""},"全部社区"));
            for(var i=0;i<this.state.communitys.length;i++){
                tmpStatisticsPar.push(React.createElement("option", {value:this.state.communitys[i].codeName},this.state.communitys[i].codeName));
            }
        }else{
            tmpStatisticsPar.push(React.createElement("option", {value:""},"全部大队"));
            for(var i=0;i<this.state.griddings.length;i++){
                tmpStatisticsPar.push(React.createElement("option", {value:this.state.griddings[i].orgName},this.state.griddings[i].orgName));
            }
        }
        return(
            React.createElement("div", {id:""},
                React.createElement("div", {id:"statement"},
                    React.createElement("div", {id:"statement_Tool"},
                        React.createElement("input",{type:"date",className:"statement_condition",id:"statement_timefor"}),
                        React.createElement("input",{type:"date",className:"statement_condition",id:"statement_timeto"}),
                        React.createElement("select", {id:"statement_buildingTypes",className:"statement_condition"},
                            buildingTypes
                        ),
                        React.createElement("select", {id:"statement_statisticsType",className:"statement_condition",onChange:this.ondblclick},
                            React.createElement("option", {value:0},"按社区统计"),
                            React.createElement("option", {value:1},"按网格统计")
                        ),
                        React.createElement("select", {id:"statement_statisticsPar",className:"statement_condition",onChange:this.statisticsParChonge},
                            tmpStatisticsPar
                        ),
                        React.createElement("select", {id:"statement_budingType",className:"statement_condition"},
                            React.createElement("option", {value:0},"拆除"),
                            React.createElement("option", {value:1},"新增")
                        ),
                        React.createElement("button",{className:"statement_toolBtn",id:"statement_toolOK",onClick:this.statementClick},"确定" ),
                        React.createElement("button",{className:"statement_toolBtn",id:"statement_print",onClick:this.statementExport},"导出" )
                    )
                ) ,
                React.createElement("div", {id:"statement_main"})

            )
            );
    }
});
var StatisticsLedgerMain =React.createClass({
    getInitialState: function getInitialState() {
        return {
            workInfo: "",
            num:"",
        };
    },
    componentDidMount: function(){
        var temp="";
//	    	$.ajax({
//				  url:this.props.url,
//				  dataType:'JSON',
//				  Type:'POST',
//				  data:{cmd:'SelectUserInfo',SessionId:this.state.sid},
//				  success: function(data){
//					  console.log(temp);
//					   this.setState({workInfos:eval(temp)});
//					   onGotUserInfo();
//				  }.bind(this),
//				  error: function(request, state, error){
////					  layer.alert(error);
//					  /**
//					   *测试
//					   *
//					   * */
//					   this.setState({workInfos:eval(temp)});
//					  console.error(this.props.url, state, error.toString());
//				  }.bind(this)
//			  });
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
                    React.createElement(Nav,{url:"",checkid:6})
                ),
                React.createElement("div",{id:"user_down"},
                    React.createElement("div",{id:"user_down_left"},
                        React.createElement(LeftColumn,{checkid:2})
                    ),
                    React.createElement("div",{id:"potrolCount"},
                        React.createElement(StatisticsLedger,{})
                    )
                )
            )
            );
    }
});


ReactDOM.render(React.createElement(StatisticsLedgerMain,{}),document.getElementById("container"));
