// JavaScrcommon_ipt Document
var LogMain=React.createClass({
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
							React.createElement(Nav,{checkid:7})
											),
						React.createElement("div",{id:"user_down"},
							React.createElement("div",{id:"user_down_left"},
								React.createElement(LeftColumn,{checkid:4})
							)
						)
						)
				);
	    }
	});
ReactDOM.render(React.createElement(LogMain), document.getElementById("container"));