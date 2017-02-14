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
       if(value=="历史日志"){
            window.location.href = "historyLog.html";
        }else if(value=="违建报表"){
            window.location.href = "statisticssLedger.html";
        } else if(value=="同比环比"){
           window.location.href = "statisticss_contrast.html";
        }else if(value=="历年趋势"){
            window.location.href = "statisticss_buildingTrend.html";
        }else if(value=="违建档案"){
            window.location.href = "statistcss_buildingReport.html";
        }
    },
        render:function(){
            return (
                React.createElement("ul",{className:"ulStyle"},
                    React.createElement("div",{id:"divli"},
                        React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"历史日志",
                            React.createElement("img",{style:style,src:"../images/tongji/historylog.png"})
                        ),
                        React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"违建报表",
                            React.createElement("img",{style:style,src:"../images/tongji/addB.png"})
                        ),
                        React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"同比环比",
                            React.createElement("img",{style:style,src:"../images/tongji/inspectionlog.png"})
                        ),
                        React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"历年趋势",
                            React.createElement("img",{style:style,src:"../images/tongji/qushiTab.png"})
                        ),
                        React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"违建档案",
                            React.createElement("img",{style:style,src:"../images/tongji/wjStatistics.png"})
                        )
                    ),
                    React.createElement("div",{className:"liStyle"})
                )
            );
        }

    });

//ReactDOM.render(React.createElement(LeftColumn),document.getElementById("leftcolumn"));