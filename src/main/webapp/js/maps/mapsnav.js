var style1={
    position:"relative",
    top: "5px",
    left: "-70px",
    marginRight:" -36px",
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
        if(value=="违建展示"){
            window.location.href = "mapviews.html";
        }else if(value=="巡查轨迹"){
            window.location.href = "patrolhistorys.html";
        }else if(value=="人员定位"){
            window.location.href = "patroltracks.html";
        }else if(value=="车辆定位"){
            window.location.href = "vehiclepositioning.html";
        }else if(value=="车辆轨迹"){
            window.location.href = "vehicletrack.html";
        } else if(value=="巡查任务"){
            window.location.href = "patrolmissions.html";
        }
    },
        render:function(){
            return (
                React.createElement("ul",{className:"ulStyle"},

                    React.createElement("div",{id:"divli"},
                        React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"违建展示",
                        React.createElement("img",{style:style1,src:"../images/leftViewicon/wjdt.png"})
                        ),
                        React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"人员定位",
                            React.createElement("img",{style:style1,src:"../images/leftViewicon/rydw.png"})
                        ),
                        React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"车辆定位",
                           React.createElement("img",{style:style1,src:"../images/leftViewicon/vehiclelocation.png"})
                        ),
                        React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"巡查轨迹",
                            React.createElement("img",{style:style1,src:"../images/leftViewicon/xcgj.png"})
                        ),
                        React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"车辆轨迹",
                            React.createElement("img",{style:style1,src:"../images/leftViewicon/vehicletrack.png"})
                        ),
                        React.createElement("li",{style:{},className:"liStyle",onClick:this.clickColumn},"巡查任务",
                            React.createElement("img",{style:style1,src:"../images/leftViewicon/xcrw.png"})
                        )
                    ),
                    React.createElement("div",{className:"liStyle"})
                )
                );
        }

    });

//ReactDOM.render(React.createElement(LeftColumn),document.getElementById("leftcolumn"));