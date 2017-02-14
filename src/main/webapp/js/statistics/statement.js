/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-6-20
 * Time: 下午2:50
 * To change this template use File | Settings | File Templates.
 */
var StatisticsChart = React.createClass({

    getInitialState: function getInitialState() {
        var renderAsImage=false;
        if(typeof (this.props.renderAsImage)!="undefined"||this.props.renderAsImage!=null){
            renderAsImage=this.props.renderAsImage;
        }
        var heads=[];
        if(typeof (this.props.heads)!="undefined"&&this.props.heads!=null&&this.props.heads!=""){
            heads=this.props.heads
        }
        return {
            heads:heads,//['巴西','印尼','美国','印度','中国','世界人口(万)'],
            data1:this.props.data1,//[18203, 23489, 29034, 104970, 131744, 630230],
            data2:this.props.data2,//[19325, 23438, 31000, 121594, 134141, 681807],
            data3:this.props.data3,//[5,2,9,1,4,5],
            renderAsImage:renderAsImage,
        };
    },
    DrawHandle : function(ec) {

        var myChart = ec.init(document.getElementById('basicInfor_div'));

        option = {
            renderAsImage:this.state.renderAsImage,
//            title : {
//                text: '',
//                subtext: '数据来自网络'
//            },
            tooltcommon_ip : {
                trigger: 'axis'
            },
            legend: {
                data:['新增总占地面积', '新增总建筑面积']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'value',
                    boundaryGap : [0, 0.01]
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : this.state.heads
                }
            ],
            series : [
                {
                    name:'新增总占地面积',
                    type:'bar',
                    data:this.state.data1
                },
                {
                    name:'新增总建筑面积',
                    type:'bar',
                    data:this.state.data2
                }
            ]
        };

            // 为echarts对象加载数据
            myChart.setOption(option);


    },
    componentDidMount: function(){

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
        var tmp=[];
        var dataCount1=0,dataCount2=0,dataCount3=0;
        for(var i=0;i<this.state.heads.length;i++){
            dataCount1=dataCount1+this.state.data3[i];
            dataCount2=dataCount2+ this.state.data1[i];
            dataCount3=dataCount3+ this.state.data2[i];
            tmp.push(
                React.createElement("tr",{className:"statenent_thead"},
                    React.createElement("th",{},this.state.heads[i]),
                    React.createElement("th",{},this.state.data3[i]),
                    React.createElement("th",{},this.state.data1[i]),
                    React.createElement("th",{className:"statenent_tr"},this.state.data2[i])
                )
            );
        }
        return (
            React.createElement("div", {id:"statement_container"},
               React.createElement("p",{id:"statement_title"},this.props.title),
                React.createElement("p",{id:"statement_hade"},common_title),
               React.createElement("div", {id:"basicInfor_div",className:"basicInfor_div"}),
                React.createElement("div",{},
                    React.createElement("table",{id:"statenent_table"},
                        React.createElement("tr",{className:"statenent_thead"},
                            React.createElement("th",{},"社区"),
                            React.createElement("th",{},"新增违建数量"),
                            React.createElement("th",{},"新增总占地面积(m",
                                React.createElement("sup",{},2) ,
                                React.createElement("label",{},")")
                            ),
                            React.createElement("th",{className:"statenent_tr"},"新增总建筑面积(m",
                                React.createElement("sup",{},2) ,
                                React.createElement("label",{},")")
                            )
                        ),
                        tmp,
                        React.createElement("tr",{className:"statenent_thead"},
                            React.createElement("th",{},"合计"),
                            React.createElement("th",{},dataCount1),
                            React.createElement("th",{},dataCount2),
                            React.createElement("th",{className:"statenent_tr"},dataCount3)
                        )
                    )
                )
             )
            );
    }
});

var StatementMain =React.createClass({
    getInitialState: function getInitialState() {
        return {
            communitys: ['巴西','印尼','美国','印度','中国','世界人口(万)'],
            griddings:[],
            statisticsType:0,
            statementType:0,
            title:"",
            data:"",
        };
    },
    componentDidMount: function(){
        var sid = getCookie("sid");
        var rules1={"sid":sid,"typeId":"'CommunityCode'"};
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
    },
    ondblclick:function(e){
        var value=document.getElementById("statement_statisticsType").value;
        this.state.statisticsType=value;
        if(value==0){
            if(this.state.communitys.length==0){
                var sid = getCookie("sid");
                var rules1={"sid":sid,"typeId":"'CommunityCode'"};
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
            }else{
                var tmp=this.state.communitys;
                this.setState({communitys:tmp});
            }
        }else{
            if(this.state.griddings.length==0){
                var sid = getCookie("sid");
                var rules1={"sid":sid,"orderNo":2,"orgName":""};
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
            }else{
                var tmp=this.state.griddings;
                this.setState({griddings:tmp});
            }
        }
    },
    statementTypeclick:function(e){
        var value=document.getElementById("statement_statementType").value;
        if(value==0){
            document.getElementById("statement_statementMonth").style.display="none";
        } else{
            document.getElementById("statement_statementMonth").style.display="block";
        }
    },
    statementClick:function(e){
        var statementType=document.getElementById("statement_statementType").value;
        var year=document.getElementById("statement_statementYear").value;
        var month=document.getElementById("statement_statementMonth").value;
        var statisticstypee=document.getElementById("statement_statisticsType").value;
        var statisticsPar=document.getElementById("statement_statisticsPar").value;
        var val=$("#statement_statisticsPar").find("option:selected").text();
        var tmp="";
        if(statementType==0){
            tmp=year+"年南澳"+val+"违建新增报表"
            this.state.title=tmp;
        }else{
            tmp=year+"年"+month+"月南澳"+val+"违建新增报表";
            this.state.title=tmp;
        }

        var sid = getCookie("sid");
        var rules1={"sid":sid,"statementType":statementType,"year":year,"month":month,"statisticstype":statisticstypee,"statisticsPar":statisticsPar==""?"":val};
        var tmp1 = JSON.stringify(rules1);
        $.ajax({
            url:common_ip+"count.do?action=reports",
            dataType:'json',
            data: tmp1,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    this.state.data=data;
                    var head=[];
                    this.state.statementType=statementType;
                    if(statementType==0){
                        haed=this.state.data.curMonths
                    }else{
                        haed=this.state.data.names;
                    }
                    $("#statement_main").empty();
                    ReactDOM.render(React.createElement(StatisticsChart,{title:this.state.title,heads:haed,data1:this.state.data.newCoverAreas,data2:this.state.data.newBuildAreas,data3:this.state.data.amounts}), document.getElementById("statement_main"));
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
    printClick:function(e){
        var head=[];
        if(this.state.statementType==0){
            haed=this.state.data.curMonths
        }else{
            haed=this.state.data.names;
        }
        $("#statement_main").empty();
        ReactDOM.render(React.createElement(StatisticsChart,{title:this.state.title,renderAsImage:true,heads:haed,data1:this.state.data.newCoverAreas,data2:this.state.data.newBuildAreas,data3:this.state.data.amounts}), document.getElementById("statement_main"));
        $("#statement_container").jqprint();
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
                        React.createElement("option", {value:1},"月报")
                    ),
                    React.createElement("select", {id:"statement_statementYear",className:"statement_condition"},
                        tmp
                    ),
                    React.createElement("select", {id:"statement_statementMonth",className:"statement_condition",style:{display:"none"}},
                        tmpMonth
                    ),
                    React.createElement("select", {id:"statement_statisticsType",className:"statement_condition",onChange:this.ondblclick},
                        React.createElement("option", {value:0},"按社区统计"),
                        React.createElement("option", {value:1},"按网格统计")
                    ),
                    React.createElement("select", {id:"statement_statisticsPar",className:"statement_condition",onChange:this.statisticsParChonge},
                        tmpStatisticsPar
                    ),
                    React.createElement("select", {id:"statement_headType",className:"statement_condition",style:{display:"block"}},
                        React.createElement("option", {value:1},"月份"),
                        React.createElement("option", {value:0},"其他")
                    ),
                    React.createElement("button",{className:"statement_toolBtn",id:"statement_toolOK",onClick:this.statementClick},"确定" ),
                    React.createElement("button",{className:"statement_toolBtn",id:"statement_print",onClick:this.printClick},"打印" )
                ),
                React.createElement("div", {id:"statement_main"})
            )
        );
    }
});


//ReactDOM.render(React.createElement(StatementMain,{}), document.body);
