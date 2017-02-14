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
var style3 = {
	position: "relative",
	top: "4px",
	left: " -45px",
	marginRight: " -36px",
	verticalAlign: "inherit"
}
// JavaScrcommon_ipt Document

var LeftColumn = React.createClass({
	getInitialState:function(){
		return{
			isOpen:false,
		};
	},
	componentDidMount: function(){
		$(".ulStyle").css("height","781px");
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
        if(value=="发文"){
			if($("#inboxStyle").css("background-color")=="rgb(255, 255, 255)"){
				this.setState({isOpen:false});
				$("#sendfile_div").empty();
				ReactDOM.render(React.createElement(Transceiver,{title:"新建发文",showModal:true,isSelectUser:true,operationType:"sendFile"}),document.getElementById("sendfile_div"));
			}else{
                window.location.href = "outbox.html?isSend=true";

				//layer.alert("请在发件箱中发文",{icon:2,title:"提示！"});
			}
		}else if(value=="收件箱"){
            window.location.href = "inbox.html";
        }else if(value=="发件箱"){
            window.location.href = "outbox.html";
        }else if(value=="发短信"){
			window.location.href = "ShortMessage.html";
        }else if(value=="短信记录"){
			window.location.href = "MessageRecord.html";
        }
		return
	},
	render:function(){
		return (
						React.createElement("ul",{className:"ulStyle"},
								React.createElement("div",{id:"divli"},
                                    React.createElement("li",{style:{},id:"outFile",className:"liStyle"},
									
                                        React.createElement("button",{id:"outfile_lable",onClick:this.clickColumn},"发文",
											React.createElement("img",{style:style3,src:"../images/mail/sendMessage.png"})
										)
                                    ),
                                    React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"收件箱",
										React.createElement("img",{style:style2,src:"../images/mail/outbox.png"})
									),
                                    React.createElement("li",{style:{},id:"inboxStyle",className:"liStyle",onClick:this.clickColumn},"发件箱",
										React.createElement("img",{style:style2,src:"../images/mail/inbox.png"})
									),
                                    React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"发短信",
										React.createElement("img",{style:style2,src:"../images/mail/shortMessage.png"})
									),
                                    React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"短信记录",
										React.createElement("img",{style:style,src:"../images/mail/MessageRecord.png"})
									)
                                ),
								React.createElement("div",{className:"liStyle"}),
                                React.createElement("div",{id:"sendfile_div"})
						)
		);
	}
	
});

//ReactDOM.render(React.createElement(LeftColumn),document.getElementById("leftcolumn"));