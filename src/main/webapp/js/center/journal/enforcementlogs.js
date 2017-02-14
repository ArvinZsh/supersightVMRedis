// JavaScrcommon_ipt Document
var UserMain=React.createClass({
	getInitialState: function getInitialState() {
		return {
			workInfo: "",
			num:"",
		};
	},
	componentDidMount: function(){
		var temp="";
//	    	$.ajax({
//				  url:this.props.url,
//				  dataType:'JSON',
//				  Type:'POST',
//				  data:{cmd:'SelectUserInfo',SessionId:this.state.sid},
//				  success: function(data){
//					  console.log(temp);
//					   this.setState({workInfos:eval(temp)});
//					   onGotUserInfo();
//				  }.bind(this),
//				  error: function(request, state, error){
////					  layer.alert(error);
//					  /**
//					   *测试
//					   *
//					   * */
//					   this.setState({workInfos:eval(temp)});
//					  console.error(this.props.url, state, error.toString());
//				  }.bind(this)
//			  });
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
					React.createElement(Nav,{url:"",checkid:3})
				),
				React.createElement("div",{id:"user_down"},
					React.createElement("div",{id:"user_down_left"},
						React.createElement(CenterNav,{checkid:5})
					),
//							React.createElement("div",{id:"potrolCount"},
//							    React.createElement("img",{style:{height: "510px", width: "859px;"},id:"potrolCount",src:"../images/statistcss_buildingReport.png"})
//							)
					React.createElement(
						Enforcementlog,
						null
					)
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(UserMain,{}), document.getElementById("container"));