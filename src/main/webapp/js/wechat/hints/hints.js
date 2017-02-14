
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
								React.createElement("h1",{id:"logo_right_h"},common_title)
												)
											),
						React.createElement("div",{id:"navigation"},
							React.createElement(Nav,{url:"",checkid:5})
											),
						React.createElement("div",{id:"user_down"},
							React.createElement("div",{id:"user_down_left"},
								React.createElement(WechatNav,{checkid:1})
							),
                            React.createElement("div",{id:"user_down_right"},
                                React.createElement("div",{id:"ud_right_top"},
                                    React.createElement(HintsToolbar,{id:"hintsToolbar"})
                                ),
                                React.createElement("div",{id:"ud_right_down"},
                                    React.createElement("div",{id:"udr_top_left"},
                                        React.createElement(HintsList,{id:"hintsList"})
                                    ),
                                    React.createElement("div",{id:"udr_top_right"}
                                    )
                                )
                            )
							
						)
					)
				);
	    }
	});
ReactDOM.render(React.createElement(UserMain), document.getElementById("container"));