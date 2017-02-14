// JavaScrcommon_ipt Document
var UserMain=React.createClass({
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
								React.createElement("h1",{id:"logo_right_h"},"南澳查违执法留痕管理系统")				
							)
						),
						React.createElement("div",{id:"navigation"},
								React.createElement(Nav,{url:"",checkid:1})
						),
						React.createElement("div",{id:"user_down"},
							React.createElement("div",{id:"user_down_left"},
								React.createElement(LeftColumn,{checkid:1})
							),
							React.createElement("div",{id:""},
									React.createElement(MapViews)
							)
						)
					)
				);
	    }
	});

ReactDOM.render(React.createElement(UserMain), document.getElementById("container"));