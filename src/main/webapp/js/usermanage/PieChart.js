var PieChart = React.createClass({
	getInitialState: function getInitialState() {
        return {
			pieChartInfo:[],
        };
    },
	componentWillMount:function(){
		var sid = getCookie("sid");
		var rules={"sid":sid};
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"statusLoading.do",
			dataType:'json',
			data: tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					
					this.setState({pieChartInfo:data.disks});
					var info  = [];
					info =  data.disks;
					for(var i =0; i<info.length;i++){
						if(info[i].unused == 0 && info[i].used == 0){
							continue;
						}
						ReactDOM.render(React.createElement(PieChart1,{data:info[i],divs:"pieChart_div2"+i}),document.getElementById("pieChart_divq"+i));
					}
				} else{
					layer.alert("加载数据失败！"+data.errorMsg,{icon:2,title:"错误"});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error);
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
	},
	componentDidMount: function(){

	},
	render: function() {
		var i=0;
		var tmp=[];
		this.state.pieChartInfo.map(function (pieChartInfo) {
			tmp.push(React.createElement("div",{id:"pieChart_divq"+i}))
			i++;
		});
		return (
			React.createElement("div",{className:"pieChart_All"},
				tmp
			)
		);
	}
});
var PieChart1 = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:this.props.data,
			unused:this.props.data.unused,
		};
	},
	DrawHandle : function(ec) {
		var myChart2 = ec.init(document.getElementById(this.props.divs),'macarons');
		if(this.state.data.unused==undefined){
			this.state.unused = (this.state.data.total-this.state.data.used);
		}
		option = {
			title : {
				x:'center'
			},
			tooltcommon_ip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			color:['#213A7A','#008ED6'],
			series :[{
				name:this.state.data.name,
				type: 'pie',
				radius : '80%',
				center:['50%', '50%'],
				itemStyle : {
					normal : {
						label : {
							show : false
						},
						labelLine : {
							show : false
						},
					},

				},
				data:[
					{value:this.state.data.used,name:"已使用" },
					{value:this.state.unused,name:"未使用"}
				],
			}]
		}
		myChart2.setOption(option);
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
			React.createElement("div",{},
				React.createElement("div",{id:this.props.divs,className:"pieChart1_div"}),
				React.createElement("div",{className:"datas_Name"},this.state.data.name)
			)
		)
	}
});
