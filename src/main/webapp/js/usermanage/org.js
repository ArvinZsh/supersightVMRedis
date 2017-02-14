// JavaScrcommon_ipt Document
var OrgMain=React.createClass({
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
								React.createElement(LeftColumn,{checkid:1})
								),
							React.createElement("div",{id:"user_down_mean"},
								React.createElement(orgTreeMaim,{url:"jsp/tree.jsp"})
												),
                            React.createElement("div",{id:"user_info_div1"})

                        )
		    	    ));
	    }
	});


ReactDOM.render(React.createElement(OrgMain), document.getElementById("container"));