var style = {
	position: "relative",
	top: "5px",
	left: "-70px",
	marginRight: " -36px",
	verticalAlign: "inherit"
}
var style2 = {
	position: "relative",
	top: "4px",
	left: "-57px",
	marginRight: " -36px",
	verticalAlign: "inherit"
}
// JavaScrcommon_ipt Document
var CenterNav = React.createClass({
	getInitialState:function(){
		return{
			isOpen:false,
		};
	},
	componentDidMount: function(){
        var div=document.getElementById("divli");
        var lis=div.childNodes;
        lis[this.props.checkid-1].style.backgroundColor="#fff";
	},
	clickColumn:function(event){
       var value=event.target;
		if(value.localName=="img"){
			value = event.target.parentNode.innerText;
		}else{
			value = event.target.innerText;
		}
        if(value=="违建台账"){
            window.location.href = "building.html";
        }else if(value=="执法预警"){
            window.location.href = "lawWarning.html";
        }else if(value=="巡查预警"){
			window.location.href = "taskWarning.html";
		} else if(value=="巡查日志"){
            window.location.href = "inspectionlog.html";
        }else if(value=="执法日志"){
            window.location.href = "enforcementlog.html";
        }else if(value=="黑名单"){
			window.location.href = "crews.html";
		}
		return
	},
	render:function(){
		return (
						React.createElement("ul",{className:"centernav_ul"},
								React.createElement("div",{id:"divli"},
                                    React.createElement("li",{style:{},className:"centernav_li",onClick:this.clickColumn},"违建台账",
										React.createElement("img",{style:style,src:"../images/manageCenter/buiding.png"})
									),
									React.createElement("li",{style:{},className:"centernav_li",onClick:this.clickColumn},"执法预警",
										React.createElement("img",{style:style,src:"../images/manageCenter/taskWarning.png"})
									),
                                    React.createElement("li",{style:{},className:"centernav_li",onClick:this.clickColumn},"巡查预警",
                                        React.createElement("img",{style:style,src:"../images/manageCenter/LawWarning.png"})
                                    ),
                                    React.createElement("li",{style:{},className:"centernav_li",onClick:this.clickColumn},"巡查日志",
                                        React.createElement("img",{style:style,src:"../images/patrolLog.png"})
                                    ),
                                    React.createElement("li",{style:{},className:"centernav_li",onClick:this.clickColumn},"执法日志",
                                        React.createElement("img",{style:style,src:"../images/executeLog.png"})
                                    ),
                                    React.createElement("li",{style:{},className:"centernav_li",onClick:this.clickColumn},"黑名单",
										React.createElement("img",{style:style2,src:"../images/manageCenter/crew.png"})
									)
                                   
                                ),
								React.createElement("div",{className:"centernav_li"})
						)
		);
	}
	
});

//ReactDOM.render(React.createElement(CenterNav,{checkid:2}),document.body)
