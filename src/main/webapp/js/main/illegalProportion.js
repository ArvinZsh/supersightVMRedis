var IllegalProportion = React.createClass({
	
	getInitialState: function getInitialState() {
		//var temp = [{name:"违法1",value:335},{name:"违法2",value:135},{name:"违法3",value:235},{name:"违法4",value:435},{name:"违法5",value:435}];
        return {
        	illegalInfo: this.props.initialInfos,
        };
    },
 	DrawHandle : function(ec) {
        var myChart = ec.init(document.getElementById('illegal_div'),'macarons'); 
        
        console.log("IllegalProportion.DrawHandle:"+this.state.illegalInfo);
        if(typeof(this.state.illegalInfo)!="undefined" && this.state.illegalInfo != null){
        var names=[];
        var infos=[];
        for(var i=0 ; i<this.state.illegalInfo.length ; i++){
        	names.push(this.state.illegalInfo[i].name);
        	var a={value:this.state.illegalInfo[i].amount,name:this.state.illegalInfo[i].name};
        	infos.push(a);
        }
        console.log("IllegalProportion.DrawHandle:"+names);
        console.log("IllegalProportion.DrawHandle:"+infos);
 			option = {
                title : {
                    x:'center'
                },
                tooltcommon_ip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                toolbox: {
                    show : true,
                    feature : {
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:infos
                    }
                ]
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

