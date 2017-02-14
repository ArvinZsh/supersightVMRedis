
var setParameter = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:[],
			datas:[],
			sum:0,
			RamRate:0,
		};
    },
    querySysInfo:function(){
		var sid = getCookie("sid");
		var rules={"sid":sid};
		var tmp = JSON.stringify(rules);
         $.ajax({
			url:common_ip+"statusLoading.do",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag) {
					this.setState({data:data});
					var rate = data.mem.used / data.mem.total*100;
					this.setState({RamRate:rate});
				}else{
					layer.alert(data.errorMsg,{icon:2});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error);
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});

    },
    getRateBarColor:function(rate){
    	if(rate<0){
    		return "RateBarTopWhite";
    	}
		if(rate < 60){
			return "RateBarTopBlue";
		}
		if(rate < 90){
			return "RateBarTopYellow";
		}
			return "RateBarTopRed";
    },
    componentWillMount:function(){
		var sid = getCookie("sid");
		var rules={"sid":sid};
		var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"count.do?action=countModule",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag) {
					this.setState({datas:data.countModule});
				}else{
					layer.alert(data.errorMsg,{icon:2});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error);
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
    },
    changeTimer:function(event){
        var t = this.state.t;
        if (t!="") {
			setInterval(t);
        };
        var Ival = 5000;
        var timer1 = setInterval(function () {
          this.querySysInfo();
        }.bind(this), Ival);
        this.setState({t:timer1});
    },
    componentDidMount: function(){
    	var trColor = document.getElementsByClassName("t_11");
    	for(var i=0;i<trColor.length;i++)
    	{
    		if(i % 2 != 0)
    		{
    			trColor[i].style.backgroundColor = "#F1F9FC";
    		}
    	}
    	this.querySysInfo();
        this.changeTimer(1000);
	},
	render:function render(){
		var cpuRate = this.state.data.cpu;
		var ramRate = this.state.RamRate;
		var ramBarClass = this.getRateBarColor(ramRate);
		var cpuBarClass = this.getRateBarColor(cpuRate);
		if(typeof(cpuRate)!="undefined"){
			cpuRate=cpuRate.toFixed(2);
		}else{
			cpuRate="0.00";
		}
		if(typeof(ramRate)!="undefined"){
			ramRate=ramRate.toFixed(2);
		}
			return (
				React.createElement("div",{},
							React.createElement("div",{className:"table_div",},
											React.createElement("div",{ className: "sys-info-tb-row" },
												React.createElement("div",{ className: "sys_tr_title1" },"服务器CPU使用率：",
														React.createElement("span",null,cpuRate+"%")
												),
											React.createElement("td",{ className: "sys_row_content", height: "50px" },
												React.createElement("div",{ style: { width: 200 + "px" }},
													React.createElement("div",{ className: "RateBarBottom" },
																React.createElement("div", { className: cpuBarClass, style: { width:cpuRate+ "%" } })
													)
												)
										    )
									),
											React.createElement("div",{ className: "sys-info-tb-row1" },
												React.createElement("div",{ className: "sys_tr_title" },"服务器内存使用率：",
														React.createElement("span",null,ramRate+"%")
												),
											React.createElement("td",{ className: "sys_row_content", height: "50px" },
												React.createElement("div",{ style: { width: 200 + "px" }},
													React.createElement("div",{ className: "RateBarBottom1" },
																React.createElement("div", { className:ramBarClass, style: { width: ramRate + "%" } })
													)
											)
									    )
								  )
							 ),
							React.createElement("table",{className:"table_s",id:"tabIdi"},
											React.createElement("tr",{className:"t_11"},
												React.createElement("td",{className:"td1_s"},"有效用户数"),
												React.createElement("td",{className:"td_s"},this.state.datas.useableUserAmount)
											),
											React.createElement("tr",{className:"t_11"},
												React.createElement("td",{className:"td1_s"},"在线用户数"),
												React.createElement("td",{className:"td_s"},this.state.datas.onlineUserAmount)
											),React.createElement("tr",{className:"t_11"},
												React.createElement("td",{className:"td1_s"},"违建记录数"),
												React.createElement("td",{className:"td_s"},this.state.datas.buildAmount)
											),React.createElement("tr",{className:"t_11"},
												React.createElement("td",{className:"td1_s"},"巡查记录数"),
												React.createElement("td",{className:"td_s"},this.state.datas.patrolRecordAmount)
											),React.createElement("tr",{className:"t_11"},
												React.createElement("td",{className:"td1_s"},"GPS记录数"),
												React.createElement("td",{className:"td_s"},this.state.datas.gpsAmount)
											)
							)
				)
			);
	}
});
