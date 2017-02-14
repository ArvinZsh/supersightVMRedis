// JavaScrcommon_ipt Document
var SendMsgMain=React.createClass({
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
//							setInterval(function() {
								React.createElement(Nav,{url:"",checkid:5})
//							},1000)
						),
						React.createElement("div",{id:"user_down"},
							React.createElement("div",{id:"user_down_left"},
								React.createElement(sendMsgColumn,{checkid:2})
							),
							React.createElement("div",{id:"sendMsg_center"},
									React.createElement(SendMsg,null)
							),
							React.createElement("div",{id:"sendMsg_pop"},
								React.createElement(SendMsgPoP1,{className:"div_sendMsgpop"})
							),
							React.createElement("div",{id:"sendMsg_pop1"},
								React.createElement(SendMsgPoP2,{className:"div_sendMsgpop1"})
							)
						)
					)
				);
	    }
	});

ReactDOM.render(React.createElement(SendMsgMain), document.getElementById("container"));