var style = {
	position: "relative",
	top: "5px",
	left: "-70px",
	marginRight: " -36px",
	verticalAlign: "inherit"
}
var LeftColumn = React.createClass({
	getInitialState:function(){
		return{
			isOpen:false,
		};
	},
	componentDidMount: function(){
		$(".ulStyle").css("height","755px");
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
        if(value=="组织架构"){
            window.location.href = "org.html";
        }else if(value=="人员管理"){
            window.location.href = "userManage.html";
        }else if(value=="数据字典"){
            window.location.href = "commcode.html";

        }else if(value=="操作日志"){
            window.location.href = "log.html";
        } else if(value=="系统状态"){
            window.location.href = "setParameter.html";
        }else if(value=="角色权限"){
            window.location.href = "roleAuthority.html";
        }
		return
	},
	render:function(){
		return (
						React.createElement("ul",{className:"ulStyle"},
								React.createElement("div",{id:"divli"},
                                    React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn,onmousedown:"javascrcommon_ipt:this.style.backgroundColor='#F00'"},"组织架构",
										React.createElement("img",{style:style,src:"../images/org/org.png"})
									),
                                    React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"人员管理",
										React.createElement("img",{style:style,src:"../images/org/userManage.png"})
									),
                                    React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"数据字典",
										React.createElement("img",{style:style,src:"../images/org/dataManage.png"})
									),
                                    React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"操作日志",
										React.createElement("img",{style:style,src:"../images/org/log.png"})
									),
                                    React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"系统状态",
										React.createElement("img",{style:style,src:"../images/org/sysState.png"})
									),
									React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"角色权限",
										React.createElement("img",{style:style,src:"../images/authority/userAuthority.png"})
									)
                                ),
								React.createElement("div",{className:"liStyle"})
						)
		);
	}
	
});

//ReactDOM.render(React.createElement(LeftColumn),document.getElementById("leftcolumn"));