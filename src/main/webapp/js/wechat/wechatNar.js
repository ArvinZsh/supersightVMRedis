var style = {
	position: "relative",
	top: "5px",
	left: "-70px",
	marginRight: " -36px",
	verticalAlign: "inherit"
}
// JavaScrcommon_ipt Document
var WechatNav = React.createClass({
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
        if(value=="违建线索"){
            window.location.href = "hints.html";
        }else if(value=="微信发布"){
            window.location.href = "SendMessage.html";
        }
		return
	},
	render:function(){
		return (
						React.createElement("ul",{className:"centernav_ul"},
								React.createElement("div",{id:"divli"},
                                    React.createElement("li",{style:{},className:"centernav_li",onClick:this.clickColumn},"违建线索",
										React.createElement("img",{style:style,src:"../images/complaintManage/clue.png"})
									),
                                   React.createElement("li",{style:{},className:"centernav_li",onClick:this.clickColumn},"微信发布",
										React.createElement("img",{style:style,src:"../images/complaintManage/weixin.png"})
									)
                                ),
								React.createElement("div",{className:"centernav_li"})
						)
		);
	}
	
});

//ReactDOM.render(React.createElement(CenterNav,{checkid:2}),document.body)