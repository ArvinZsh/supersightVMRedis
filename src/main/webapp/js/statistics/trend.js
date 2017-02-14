/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-6-20
 * Time: 下午2:50
 * To change this template use File | Settings | File Templates.
 */
var TrendChart = React.createClass({

    getInitialState: function getInitialState() {
        var renderAsImage=false;
        if(typeof (this.props.renderAsImage)!="undefined"||this.props.renderAsImage!=null){
            renderAsImage=this.props.renderAsImage;
        }
        return {
            title:"历年违建面积新增趋势",
            heads:this.props.heads,
            data1:this.props.data1,
            data2:this.props.data2,
            renderAsImage:renderAsImage
        };
    },
    DrawHandle : function(ec) {

        var myChart = ec.init(document.getElementById('basicInfor_div'));


        option = {
            renderAsImage:this.state.renderAsImage,
            title: {
                text: this.state.title,
                x: "center"
            },
            tooltcommon_ip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c}"
            },
            legend: {
                x: 'left',
                data: ["新增占地面积", "新增建筑面积"]
            },
            xAxis: [
                {
                    type: "category",
                    name: "月份",
                    splitLine: {show: false},
                    data: this.state.heads
                }
            ],
            yAxis: [
                {
                    type: "log",
                    name: "面积（㎡）"
                }
            ],
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: true
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            series: [
                {
                    name: "新增占地面积",
                    type: "line",
                    data: this.state.data1

                },
                {
                    name: "新增建筑面积",
                    type: "line",
                    data: this.state.data2

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
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],

            this.DrawHandle
        );
    },
    render: function() {
        return (
            React.createElement("div", {id:"statement_container"},
                React.createElement("div", {id:"basicInfor_div",className:"basicInfor_div"})
            )
            );
    }
});

var TrendChart1 = React.createClass({

    getInitialState: function getInitialState() {
        var renderAsImage=false;
        if(typeof (this.props.renderAsImage)!="undefined"||this.props.renderAsImage!=null){
            renderAsImage=this.props.renderAsImage;
        }
        return {
            title:"历年违建数量新增趋势",
            heads:this.props.heads,
            data1:this.props.data1,
            data2:this.props.data2,
            data3:this.props.data3,
            renderAsImage:renderAsImage
        };
    },
    DrawHandle : function(ec) {

        var myChart = ec.init(document.getElementById('basicInfor_div1'));


        option = {
            renderAsImage:this.state.renderAsImage,
            title: {
                text: this.state.title,
                x: "center"
            },
            tooltcommon_ip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c}"
            },
            legend: {
                x: 'left',
                data: ["新增", "拆除","永久"]
            },
            xAxis: [
                {
                    type: "category",
                    name: "月份",
                    splitLine: {show: false},
                    data: this.state.heads
                }
            ],
            yAxis: [
                {
                    type: "log",
                    name: "数量"
                }
            ],
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: true
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            series: [
                {
                    name: "新增",
                    type: "line",
                    data: this.state.data1

                },
                {
                    name: "拆除",
                    type: "line",
                    data: this.state.data2

                } ,
                {
                    name: "永久",
                    type: "line",
                    data: this.state.data3

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
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],

            this.DrawHandle
        );
    },
    render: function() {
        return (
            React.createElement("div", {id:"statement_container"},
                React.createElement("div", {id:"basicInfor_div1",className:"basicInfor_div"})
            )
            );
    }
});

var TrendMain =React.createClass({
    getInitialState: function getInitialState() {
        return {
            renderAsImage:false,
            data:"",
        };
    },
    componentDidMount: function(){
        var sid = getCookie("sid");
        var rules1={"sid":sid};
        var tmp1 = JSON.stringify(rules1);
        $.ajax({
            url:common_ip+"count.do?action=reportsTillNow",
            dataType:'json',
            data: tmp1,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    this.setState({data:data});
                    $("#statement_chart1").empty();
                    ReactDOM.render(React.createElement(TrendChart, {renderAsImage:this.state.renderAsImage,heads:this.state.data.curMonths,data1:this.state.data.newCoverAreas,data2:this.state.data.newBuildAreas}),document.getElementById("statement_chart1"));

                    $("#statement_chart2").empty();
                    ReactDOM.render(React.createElement(TrendChart1, {renderAsImage:this.state.renderAsImage,heads:this.state.data.curMonths,data1:this.state.data.amounts,data2:this.state.data.dismantleNumbers,data3:this.state.data.perpetualNumber}),document.getElementById("statement_chart2"));
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
        this.state.renderAsImage=true;
        $("#statement_chart1").empty();
        ReactDOM.render(React.createElement(TrendChart, {renderAsImage:this.state.renderAsImage,heads:this.state.data.curMonths,data1:this.state.data.newCoverAreas,data2:this.state.data.newBuildAreas}),document.getElementById("statement_chart1"));

        $("#statement_chart2").empty();
        ReactDOM.render(React.createElement(TrendChart1, {renderAsImage:this.state.renderAsImage,heads:this.state.data.curMonths,data1:this.state.data.amounts,data2:this.state.data.dismantleNumbers,data3:this.state.data.perpetualNumber}),document.getElementById("statement_chart2"));
        $("#statement_main").jqprint();
    },
    render: function() {
        return(
            React.createElement("div", {id:"statement"},
                React.createElement("div", {id:"statement_Tool"},
                    React.createElement("button",{className:"statement_toolBtn",id:"statement_print",onClick:this.printClick},"打印" )
                ),
                React.createElement("div", {id:"statement_main"},
                    React.createElement("div", {id:"statement_chart1"}
                        //React.createElement(TrendChart, {renderAsImage:this.state.renderAsImage,heads:this.state.data.curMonths,data1:this.state.data.newCoverAreas,data2:this.state.data.newBuildAreas})
                    ),
                    React.createElement("div", {id:"statement_chart2"}
                        //React.createElement(TrendChart1, {renderAsImage:this.state.renderAsImage,heads:this.state.data.curMonths,data1:this.state.data.amounts,data2:this.state.data.dismantleNumbers,data3:this.state.data.perpetualNumber})
                    )
                )
            )
            );
    }
});


//ReactDOM.render(React.createElement(TrendMain,{}), document.body);
