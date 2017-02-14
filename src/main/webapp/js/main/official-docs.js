
var Official = React.createClass({
    getInitialState: function getInitialState() {
        return {
            data:this.props.data,
            title:this.props.title
        };
    },
    componentDidMount: function(){

//    	var trback = document.getElementsByTagName("tr");
//    	for(var i=0;i<trback.length;i++)
//    	{
//    		if(i % 2 == 1)
//    		{
//    			trback[i].style.backgroundColor = "#F1F9FC";
//    		}
//    	}
    },
    onClick:function(e){
        window.location.href = "inbox.html";
    },
    handleOnClick:function(event){
        var str ="inbox.html?emailId=";
        str += this.props.data[event.currentTarget.rowIndex].itemId;
        window.location.href = str;
    },
    render:function render()
    { var _this =this;


        return (
            React.createElement("div",{className:"offical_div"},
                React.createElement("div",{className:"offical_div_div"},
                    React.createElement("p",{id:"offical_div_p"},this.state.title,
                        React.createElement("label",{className:"offical_div_a",onClick:this.onClick},"更多》")),
                    React.createElement("div",{},
                        React.createElement("table",{id:"tabid",width:"100%"},
                            this.props.data.map(function(dwen){
                                var name=dwen.creator;
                                if(typeof (dwen.creator)!="undefined"&&dwen.creator.length>5){
                                    name=dwen.creator.substring(0,5)+"...";
                                }
                                var title=dwen.title;
                                if(typeof (dwen.title)!="undefined"&&dwen.title.length>39){
                                    title=dwen.title.substring(0,39)+"...";
                                }
                                return(
                                    React.createElement("tr",{className:"official_tr",width:"100%",onClick: _this.handleOnClick},
                                        React.createElement("td",{id:"offical_div_td1"},name),
                                        React.createElement("td",{id:"offical_div_td4"},title)
                                    )
                                );
                            })
                        )
                    )
                )
            )
        );
    }
});

var PatrolAlarm = React.createClass({
    getInitialState: function getInitialState() {
        return {
            data:this.props.data,
            title:this.props.title
        };
    },
    componentDidMount: function(){

//    	var trback = document.getElementsByTagName("tr");
//    	for(var i=0;i<trback.length;i++)
//    	{
//    		if(i % 2 == 1)
//    		{
//    			trback[i].style.backgroundColor = "#F1F9FC";
//    		}
//    	}
    },
    onClick:function(e){
        window.location.href = "taskWarning.html";
    },
    handleOnClick:function(event){
        var data = this.props.data[event.currentTarget.rowIndex];
        var str ="ledgerdetails.html?buildingId=";
        str += data.buildingId;
//        window.open(str);
        window.location.href = str;
    },
    render:function render()
    {
        var _this =this;
        return (
            React.createElement("div",{className:"offical_div"},
                React.createElement("div",{className:"offical_div_div"},
                    React.createElement("p",{id:"offical_div_p"},this.state.title,
                        React.createElement("label",{className:"offical_div_a",onClick:this.onClick},"更多》")),
                    React.createElement("div",{},
                        React.createElement("table",{id:"tabid",width:"100%"},
                            this.props.data.map(function(dwen){
                                var name=dwen.gridId;
                                if(typeof (dwen.gridId)!="undefined"&&dwen.gridId.length>10){
                                    name=dwen.gridId.substring(0,10)+"...";
                                }
                                var address= dwen.address;
                                if(typeof (dwen.address)!="undefined"&&dwen.address.length>20){
                                    address=dwen.address.substring(0,20)+"...";
                                }
                                return(
                                    React.createElement("tr",{className:"official_tr",width:"100%",onClick: _this.handleOnClick},
                                        React.createElement("td",{id:"offical_div_td1"},name),
                                        React.createElement("td",{id:"patrol_div_td3"},"【"+dwen.area1+"】"+address)
                                    )
                                );
                            })
                        )
                    )
                )
            )
        );
    }
});

var EarlyEarning = React.createClass({
    getInitialState: function getInitialState() {
        return {
            data:this.props.data,
            title:this.props.title
        };
    },
    componentDidMount: function(){

//    	var trback = document.getElementsByTagName("tr");
//    	for(var i=0;i<trback.length;i++)
//    	{
//    		if(i % 2 == 1)
//    		{
//    			trback[i].style.backgroundColor = "#F1F9FC";
//    		}
//    	}
    },
    onClick:function(e){
        window.location.href = "lawWarning.html";
    },
    handleOnClick:function(event){
        var data = this.props.data[event.currentTarget.rowIndex];
        var str ="ledgerdetails.html?buildingId=";
        str += data.buildingId;
//        window.open(str);
        window.location.href = str;
    },
    render:function render()
    {
        var _this =this;
        return (
            React.createElement("div",{className:"offical_div"},
                React.createElement("div",{className:"offical_div_div"},
                    React.createElement("p",{id:"offical_div_p"},this.state.title,
                        React.createElement("label",{className:"offical_div_a",onClick:this.onClick},"更多》")
                    ),
                    React.createElement("div",{},
                        React.createElement("table",{id:"tabid",width:"100%"},
                            this.props.data.map(function(dwen){
                                var name=dwen.gridId;
                                if(typeof (dwen.gridId)!="undefined"&&dwen.gridId.length>10){
                                    name=dwen.gridId.substring(0,10)+"...";
                                }
                                var address= dwen.address;
                                if(typeof (dwen.address)!="undefined"&&dwen.address.length>36){
                                    address=dwen.address.substring(0,36)+"...";
                                }
                                return(
                                    React.createElement("tr",{className:"official_tr",width:"100%",onClick: _this.handleOnClick},
                                        React.createElement("td",{id:"offical_div_td1"},name),
                                        React.createElement("td",{id:"offical_div_td3"},"【"+dwen.area1+"】"+address)
                                    )
                                );
                            })
                        )
                    )
                )
            )
        );
    }
});

//ReactDOM.render(React.createElement(Official,{data:[{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"},{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"},,{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"},,{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"}]}), document.getElementById("did"));