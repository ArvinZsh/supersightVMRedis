// JavaScrcommon_ipt Document
var ParameMain=React.createClass({
	    getInitialState: function getInitialState() {
	        return {
	        	workInfo: "",
	        	num:"",
	        };
	    },
		componentDidMount: function(){

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
							React.createElement(Nav,{url:"",checkid:7})
											),
						React.createElement("div",{id:"user_down"},
							React.createElement("div",{id:"user_down_left"},
								React.createElement(LeftColumn,{checkid:5})
							),
							React.createElement("div",{id:""},
								React.createElement(setParameter)
							),
							React.createElement("div",{id:"sys_All"},
								React.createElement("label",{className:"pie_title"},"系统负荷状态"),
								React.createElement("div",{className:"pies_type"},
									React.createElement("label",{className:"type1_font"},"已使用"),
									React.createElement("div",{className:"type1_color"}),
									React.createElement("label",{className:"type2_font"},"未使用"),
									React.createElement("div",{className:"type2_color"})
								),
								React.createElement(PieChart,{className:"pie_1",data:[{title:"C盘",usedname:"已使用",unusedname:"未使用", used:200, unused:300},{title:"D盘",usedname:"已使用",unusedname:"未使用", used:150, unused:350},{title:"E盘",usedname:"已使用",unusedname:"未使用", used:200, unused:300},{title:"F盘",usedname:"已使用",unusedname:"未使用", used:250, unused:250}]})
							)
						)
					)
				);
	    }
	});
ReactDOM.render(React.createElement(ParameMain), document.getElementById("container"));