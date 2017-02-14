var BasicInformation = React.createClass({
	
	getInitialState: function getInitialState() {
        return {
        	basicInfos: this.props.basicInfos,
        };
    },
 	DrawHandle : function(ec) {
        
        
        console.log("BasicInformation.DrawHandle:"+this.state.basicInfos);
        if(typeof(this.state.basicInfos)!="undefined" && this.state.basicInfos != null){
        var baseType=[];
        var month=[];
        var area=[];
        var series=[];
        var color=['#1819FF','#6665FE','#CCCCFE','#01B2FE']
        for(var i=0 ; i<this.state.basicInfos.length ; i++){
	        if(typeof(baseType)=="undefined" || baseType == null){
	            baseType.push(this.state.basicInfos[i].groundType);
	        }
	        else{
	            if(baseType.indexOf(this.state.basicInfos[i].groundType)<0){
	               baseType.push(this.state.basicInfos[i].groundType);
	            }
	         }
            if(month.indexOf(this.state.basicInfos[i].month)<0){
               month.push(this.state.basicInfos[i].month);
            }
        }
        
        console.log("BasicInformation.DrawHandle1:"+baseType);
        console.log("BasicInformation.DrawHandle2:"+month);
        var strShow=[{show:true}]
        
         for(var j=0 ; j<baseType.length ; j++){
            var a=[];
        	for(var i=0 ; i<this.state.basicInfos.length ; i++){
        	   if(this.state.basicInfos[i].groundType==baseType[j]){
        	      a.push(this.state.basicInfos[i].area);
        	   }
        	}
        	
        	    var c={
                name:baseType[j],
				type:'bar',
				stack: '违建信息',
                itemStyle: {normal: {color:color[j], label:{show:true}}},
                data:a
              };
        	
        	series.push(c);
        }
        
        
        var myChart = ec.init(document.getElementById('basicInfor_div')); 
        
 			option = {
                    tooltcommon_ip : {
				        trigger: 'axis'
                    },
                    legend: {
                        data:baseType
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
                            data : month
                        },
                        {
                            type : 'category',
			            axisLine: {show:false},
			            axisTick: {show:false},
			            axisLabel: {show:false},
			            splitArea: {show:false},
			            splitLine: {show:false},
                            data : month
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLabel:{formatter:'{value} 平'}
                        }
                    ],
                    series : series
               
                };
                
            // 为echarts对象加载数据 
            myChart.setOption(option); 
            
        }
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
   			React.createElement("div", {id:"basicInfor_div",className:"basicInfor_div"}) 
    );
  	}
});

//ReactDOM.render(React.createElement(BasicInformation,{url:"http://127.0.0.1:8081/"}), document.getElementById("divStaticInput"));
