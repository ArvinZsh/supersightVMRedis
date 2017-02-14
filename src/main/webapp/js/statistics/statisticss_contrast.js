



var StatisticscontrastTabl =React.createClass({
    getInitialState: function getInitialState() {
        var data=[];
        if(typeof (this.props.data)!="undefined"&&this.props.data!=null&&this.props.data!=""){
            data=this.props.data;
        }
        return {
            data:data,
            statisticsType:this.props.statisticsType,
        };
    },
    printClick:function(e){
        exportExecl("statenent_contrast_table");
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
        var trs=[];
        this.state.data.names.map(function(data){
            trs.push(React.createElement("th",{},data));
        });
        var trs1=[];
        this.state.data.data.map(function(data){
            trs1.push(React.createElement("td",{},data));
        });
        var trs2=[];
        this.state.data.comparedData.map(function(data){
            trs2.push(React.createElement("td",{},data));
        });
        var trs3=[];
        this.state.data.growthRatio.map(function(data){
            trs3.push(React.createElement("td",{},data));
        });
        var trs4=[];
        this.state.data.yearComparedData .map(function(data){
            trs4.push(React.createElement("td",{},data));
        });
        var trs5=[];
        this.state.data.yearGrowthRatio .map(function(data){
            trs5.push(React.createElement("td",{},data));
        });
        var str=[];
        if(this.state.statisticsType!=0){
            str.push(React.createElement("tr",{className:"statenent_thead"},React.createElement("td",{},"去年同期"),trs4));
            str.push(React.createElement("tr",{className:"statenent_thead"},React.createElement("td",{},"同比比率"),trs5));
        }

        return(
            React.createElement("div",{},
                React.createElement("div",{className:"statement_exportdiv"},
                    React.createElement("button",{className:"statement_exportClick",id:"statement_print",onClick:this.printClick},"导出" )),
                React.createElement("table",{id:"statenent_contrast_table",className:"statenent_table"},
                    React.createElement("tr",{className:"statenent_thead"},
                        React.createElement("th",{width:"111" ,height:"52"},""
                        ),
                        trs
                    ),
                    React.createElement("tr",{className:"statenent_thead"},React.createElement("td",{},"本期"),trs1),
                    React.createElement("tr",{className:"statenent_thead"},React.createElement("td",{},"上期"),trs2),
                    React.createElement("tr",{className:"statenent_thead"},React.createElement("td",{},"环比比率"),trs3),
                    str
                )
            ));
    }
});

var StatisticsRatioTable =React.createClass({
    getInitialState: function getInitialState() {
        var data=[];
        if(typeof (this.props.data)!="undefined"&&this.props.data!=null&&this.props.data!=""){
            data=this.props.data;
        }
        return {
            data:data,
            statisticsType:this.props.statisticsType,
            unitType:this.props.unitType
        };
    },
    printClick:function(e){
        exportExecl("statenent_Ratio_thead");
    },
    render: function() {
        var head1=this.state.statisticsType==0?"社区":"网格";
        var tmp=[];
        var count=0;
        for(var i=0;i<this.state.data.data.length;i++){
            count+=this.state.data.data[i];
            tmp.push(
                React.createElement("tr",{className:"statenent_thead"},
                    React.createElement("td",{},this.state.data.names[i]),
                    React.createElement("td",{},this.state.data.data[i]),
                    React.createElement("td",{},this.state.data.percent [i])
                )
            );
        }

        return(
            React.createElement("div",{},
                React.createElement("div",{className:"statement_exportdiv"},
                    React.createElement("button",{className:"statement_exportClick",id:"statement_print",onClick:this.printClick},"导出" )),
                React.createElement("table",{id:"statenent_Ratio_thead",className:"statenent_table"},
                    React.createElement("tr",{className:"statenent_Ratio_thead"},
                        React.createElement("th",{width:"111" ,height:"52"},head1),
                        React.createElement("th",{width:"111" ,height:"52"},this.state.unitType),
                        React.createElement("th",{width:"111" ,height:"52"},"比例")
                    ), tmp
                )
            ));
    }
});

var BasicInformation = React.createClass({

    getInitialState: function getInitialState() {
        return {
            data: this.props.data,
            statisticsType:this.props.statisticsType,
        };
    },
    DrawHandle : function(ec) {
            var myChart = ec.init(document.getElementById('basicInfor_div'));
            var series=series= [
                {
                    name:'本期',
                    type:'bar',
                    data:this.state.data.data
                },{
                    name:'上期',
                    type:'bar',
                    data:this.state.data.comparedData
                },{
                    name:'去年同期',
                    type:'bar',
                    data:this.state.data.yearComparedData
                } ];
            var legend= ["本期","上期","去年同期"]
            if(this.state.statisticsType==0){
                legend= ["本期","上期"]

                series= [
                    {
                        name:'本期',
                        type:'bar',
                        data:this.state.data.data
                    },{
                        name:'上期',
                        type:'bar',
                        data:this.state.data.comparedData
                    }]
            }
            option = {
                tooltcommon_ip : {
                    trigger: 'axis'
                },
                legend: {
                    data:legend
                },
                toolbox: {
                    show : true,
                    feature : {
                        saveAsImage : {show: true}
                    }
                },
                calculable : false,
                grid: {y: 30, y2:30, x:50,x2:15},
                xAxis : [
                    {
                        type : 'category',
                        data : this.state.data.names
                    },
                    {
                        type : 'category',
                        axisLine: {show:false},
                        axisTick: {show:false},
                        axisLabel: {show:false},
                        splitArea: {show:false},
                        splitLine: {show:false},
                        data :  this.state.data.names
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel:{formatter:'{value}'}
                    }
                ],
                series : series

            };

            // 为echarts对象加载数据
            myChart.setOption(option);


    },
    componentDidMount: function(){

        //var temp = [{Month:1,BaseType:"永久地基",Area:100},{Month:1,BaseType:"临时地基",Area:50},{Month:1,BaseType:"j地基",Area:70},{Month:2,BaseType:"永久地基",Area:100},{Month:2,BaseType:"临时地基",Area:50},{Month:2,BaseType:"j地基",Area:40},{Month:3,BaseType:"永久地基",Area:100},{Month:3,BaseType:"临时地基",Area:50},{Month:3,BaseType:"j地基",Area:90},{Month:4,BaseType:"永久地基",Area:150},{Month:4,BaseType:"临时地基",Area:50},{Month:4,BaseType:"j地基",Area:120},{Month:5,BaseType:"永久地基",Area:100},{Month:5,BaseType:"临时地基",Area:60},{Month:5,BaseType:"j地基",Area:40}];
        this.setState({basicInfos:eval(this.state.basicInfos)});

        // 路径配置
        require.config({
            paths: {
                echarts: '../lib/echarts/dist'
            }
        });

        require(
            [
                'echarts',
                'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
            ],
            this.DrawHandle
        );
    },
    render: function() {
        return (
            React.createElement("div",{},
                React.createElement("div", {id:"basicInfor_div",className:"basicInfor_div"})
                )
        );
    }
});

var statostocsProportion = React.createClass({

    getInitialState: function getInitialState() {
        //var temp = [{name:"违法1",value:335},{name:"违法2",value:135},{name:"违法3",value:235},{name:"违法4",value:435},{name:"违法5",value:435}];
        return {
            data: this.props.data,
        };
    },
    DrawHandle : function(ec) {
        var myChart = ec.init(document.getElementById('illegal_div'),'macarons');

        console.log("IllegalProportion.DrawHandle:"+this.state.illegalInfo);
        if(typeof(this.state.data)!="undefined" && this.state.data != null){
            var infos=[];
            for(var i=0 ; i<this.state.data.names.length ; i++){
                var a={value:this.state.data.data[i],name:this.state.data.names[i]};
                infos.push(a);
            }
            console.log("IllegalProportion.DrawHandle:"+infos);
            option = {
                title : {
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series : [
                    {
                        name: '违建比例',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:infos,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]


//                title : {
//                    x:'center'
//                },
//                tooltcommon_ip : {
//                    trigger: 'item',
//                    formatter: "{a} <br/>{b} : {c} ({d}%)"
//                },
//                toolbox: {
//                    show : true,
//                    feature : {
//                        saveAsImage : {show: true}
//                    }
//                },
//                calculable : true,
//                series : [
//                    {
//                        type:'pie',
//                        radius : '55%',
//                        center: ['50%', '60%'],
//                        data:infos
//                    }
//                ]
            };

            // 为echarts对象加载数据
            myChart.setOption(option);
        }
    },
    componentDidMount: function(){

        // 路径配置
        require.config({
            paths: {
                echarts: '../lib/echarts/dist'
            }
        });

        // 使用
        require(
            [
                'echarts',
                'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
            ],
            this.DrawHandle
        );
    },
    render: function() {
        return (
            React.createElement("div", {id:"illegal_div",className:"illegal_div"})
            );
    }
});


var StatisticsContrast =React.createClass({
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
        var myDate = new Date();
        var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
        document.getElementById("statement_statementYear").value=year;
    },
    statementTypeclick:function(e){
        var statementType=document.getElementById("statement_statementType").value;
        if(statementType==0){
            document.getElementById("statement_statementPeriod").style.display="none";
            document.getElementById("statement_statementMonth").style.display="none";
        } else if(statementType==1){
            document.getElementById("statement_statementMonth").style.display="none";
            document.getElementById("statement_statementPeriod").style.display="inline-block";
        }else{
            document.getElementById("statement_statementMonth").style.display="inline-block";
            document.getElementById("statement_statementPeriod").style.display="none";
        }
    },
    ondblclick:function(e){
        var statisticsType=document.getElementById("statement_statisticsType").value;
        this.setState({statisticsType:statisticsType})
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
    statementClick:function(e){
        var timeType=document.getElementById("statement_statementType").value;
        var year=document.getElementById("statement_statementYear").value;
        var timeParam="";
        if(timeType==1){
             timeParam=document.getElementById("statement_statementPeriod").value;
        }else if(timeType==2){
            timeParam=document.getElementById("statement_statementMonth").value;
        }
        var rangeType=document.getElementById("statement_statisticsType").value;
        var paramType=document.getElementById("statement_paramType").value;
        var unitType=document.getElementById("statement_unitType").value;
        var lochusFlag=false;
        if(rangeType==2){
            rangeType=1;
            lochusFlag=true;
        }

        var sid = getCookie("sid");
        var rules1={"sid":sid,"timeType":timeType,"year":year,"timeParam":timeParam,"rangeType":rangeType,"paramType":paramType,"unitType":unitType,"lochusFlag":lochusFlag};
        var tmp1 = JSON.stringify(rules1);
        $.ajax({
            url:common_ip+"count.do?action=compared",
            dataType:'json',
            data: tmp1,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    var statisticData=data;
                    if(lochusFlag){
                        statisticData.names=data.lochusNames;
                        statisticData.data=data.lochusDate ;
                        statisticData.comparedData=data.lochusComparedData ;
                        statisticData.growthRatio=data.lochusGrowthRatio;
                        statisticData.percent=data.lochusPercent ;
                        statisticData.yearComparedData=data.lochusYearComparedData ;
                        statisticData.yearGrowthRatio=data.lochusYearGrowthRatio ;

                    }
                    var data1= 0,data2=0,data3=0;
                    for(var i=0;i<data.names.length;i++){
                        data1 +=data.data[i];
                        data2+=data.comparedData[i];
                        data3+=data.yearComparedData[i];
                    }
                    statisticData.names.push("全大队");
                    statisticData.data.push(data1);
                    statisticData.comparedData.push(data2);
                    statisticData.yearComparedData.push(data3);
                    var data4="";
                    if(data2!=0){
                          data4=(data1-data2)/data2*100;
                          data4=data4.toFixed(2)+"%";
                    }
                    statisticData.growthRatio.push(data4);

                    var data5="";
                    if(data3!=0){
                        data5=(data1-data3)/data3*100;
                        data5=data5.toFixed(2)+"%";
                    }
                    statisticData.yearGrowthRatio.push(data5);

                    $("#statement_map").empty();
                    ReactDOM.render(React.createElement(BasicInformation,{data:statisticData,statisticsType:timeType}), document.getElementById("statement_map"));
                    $("#statement_table").empty();
                    ReactDOM.render(React.createElement(StatisticscontrastTabl,{data:statisticData,statisticsType:timeType}), document.getElementById("statement_table"));
                    $("#statement_ratioMap").empty();
                    ReactDOM.render(React.createElement(statostocsProportion,{data:statisticData,statisticsType:rangeType,unitType:unitType}), document.getElementById("statement_ratioMap"));
                    $("#statement_ratioTable").empty();
                    ReactDOM.render(React.createElement(StatisticsRatioTable,{data:statisticData,statisticsType:rangeType,unitType:unitType}), document.getElementById("statement_ratioTable"));
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
    render: function() {
        var myDate = new Date();
        var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
        var tmp=[];
        tmp.push(React.createElement("option", {value:2009},"2009年"));
        for(var i=0;i<=year-2009;i++){
            tmp.push(React.createElement("option", {value:2009+i},(2009+i)+"年"));
        }
        var tmpMonth=[];
        for(var i=1;i<=12;i++){
            tmpMonth.push(React.createElement("option", {value:i},i+"月"));
        }
        var tmpStatisticsPar=[];
        if(this.state.statisticsType==0){
            tmpStatisticsPar.push(React.createElement("option", {value:""},"全部社区"));
            for(var i=0;i<this.state.communitys.length;i++){
                tmpStatisticsPar.push(React.createElement("option", {value:this.state.communitys[i].codeName},this.state.communitys[i].codeName));
            }
        }else{
            tmpStatisticsPar.push(React.createElement("option", {value:""},"全部网格"));
            for(var i=0;i<this.state.griddings.length;i++){
                tmpStatisticsPar.push(React.createElement("option", {value:this.state.griddings[i].orgId},this.state.griddings[i].orgName));
            }
        }
        return(
            React.createElement("div", {id:"statement"},
                React.createElement("div", {id:"statement_Tool"},
                    React.createElement("select", {id:"statement_statementType",className:"statement_condition",onChange:this.statementTypeclick},
                        React.createElement("option", {value:0},"年报"),
                        React.createElement("option", {value:1},"季报"),
                        React.createElement("option", {value:2},"月报")
                    ),
                    React.createElement("select", {id:"statement_statementYear",className:"statement_condition"},
                        tmp
                    ),
                    React.createElement("select", {id:"statement_statementPeriod",className:"statement_condition",style:{display:"none"}},
                        React.createElement("option", {value:1},"第一季"),
                        React.createElement("option", {value:2},"第二季"),
                        React.createElement("option", {value:3},"第三季"),
                        React.createElement("option", {value:4},"第四季")
                    ),
                    React.createElement("select", {id:"statement_statementMonth",className:"statement_condition",style:{display:"none"}},
                        tmpMonth
                    ),
                    React.createElement("select", {id:"statement_statisticsType",className:"statement_condition",onChange:this.ondblclick},
                        React.createElement("option", {value:0},"按社区统计"),
                        React.createElement("option", {value:1},"按网格统计"),
                        React.createElement("option", {value:2},"按中队统计")
                    ),
                    React.createElement("select", {id:"statement_paramType",className:"statement_condition"},
                        React.createElement("option", {value:"全部"},"全部"),
                        React.createElement("option", {value:"存量"},"存量"),
                        React.createElement("option", {value:"增量"},"增量"),
                        React.createElement("option", {value:"拆除"},"拆除")
                    ),
                    React.createElement("select", {id:"statement_unitType",className:"statement_condition"},
                        React.createElement("option", {value:"数量"},"数量"),
                        React.createElement("option", {value:"占地面积"},"占地面积"),
                        React.createElement("option", {value:"建筑面积"},"建筑面积")
                    ),
                    React.createElement("button",{className:"statement_toolBtn",id:"statement_toolOK",onClick:this.statementClick},"确定" )
                ),
                React.createElement("div", {id:"statement_main"},
                    React.createElement("p", {id:"",className:"basicInfor_p"},"同比环比统计"),
                    React.createElement("div", {id:"statement_map"}),
                    React.createElement("div", {id:"statement_table"}),
                    React.createElement("p", {id:"",className:"basicInfor_p"},"违建占比统计"),
                    React.createElement("div", {id:"statement_map1"},
                        React.createElement("div", {id:"statement_ratioMap"}),
                        React.createElement("div", {id:"statement_ratioTable"})
                    )
                )
            )
            );
    }
});
var StatisticsContrastMain =React.createClass({
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
                        React.createElement(LeftColumn,{checkid:3})
                    ),
                    React.createElement("div",{id:"potrolCount"},
                        React.createElement(StatisticsContrast,{})
                    )
                )
            )
            );
    }
});


ReactDOM.render(React.createElement(StatisticsContrastMain,{}),document.getElementById("container"));
