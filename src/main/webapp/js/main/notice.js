var divs = {
    overflow:"auto",
    height:"145px",
    width:"345px",
    margin:"0px",
    padding:"0px"
}

var tables = {
    borderCollapse:"collapse",
    border:"-1px solid #cecece",
    borderTop:"0px",
    margin:"auto",
    margin: "0px"
}

var table2s = {
    borderCollapse:"collapse",
    border:"-1px solid #cecece",
    margin:"auto",
    marginTop:"13px",
    margin: "0px",

}

var trs = {
    borderRight:"-1px solid #cecece",
    textAlign: "center",
    backgroundColor: "#cecece",
}


var tdss = {
    borderRight:"-1px solid #cecece",
    textAlign: "center",
    width:"120px"
}

var Notice = React.createClass({
    getInitialState: function getInitialState() {
        return {data:this.props.data};
    },
    componentDidMount: function(){
        var trColor = document.getElementsByClassName("t11");
        console.log(trColor);
        for(var i=0;i<trColor.length;i++)
        {
            if(i % 2 != 0)
            {
                trColor[i].style.backgroundColor = "#eee";
            }
        }
    },
    render:function render()
    {
        return (
            React.createElement("div",{style:{height:"174px"}},
                React.createElement("div",{style:{margin:"0px 6px -14px 4px"}},"处罚公告"),
                React.createElement("table",{style:table2s}
                ),
                React.createElement("div",{style:divs},
                    React.createElement("table",{style:tables,id:"tabIdi"},
                        this.state.data.map(function(array){
                            return(
                                React.createElement("tr",{className:"t11"},
                                    React.createElement("td",{style:tdss},array.id),
                                    React.createElement("td",{style:tdss},array.name),
                                    React.createElement("td",{style:tdss},array.time)
                                )
                                );
                        })
                    )
                )
            )
            );
    }
});

//ReactDOM.render(React.createElement(Notice,{data:[{id:"P001",name:"处理违规建筑",time:"2016-1-26"},{id:"P002",name:"处理违规建筑",time:"2016-1-26"},{id:"P002",name:"处理违规建筑",time:"2016-1-26"},{id:"P002",name:"处理违规建筑",time:"2016-1-26"},{id:"P002",name:"处理违规建筑",time:"2016-1-26"},{id:"P002",name:"处理违规建筑",time:"2016-1-26"},{id:"P003",name:"处理违规建筑",time:"2016-1-26"},{id:"P004",name:"处理违规建筑",time:"2016-1-26"},{id:"P005",name:"处理违规建筑",time:"2016-1-26"}]}), document.getElementById("main"));