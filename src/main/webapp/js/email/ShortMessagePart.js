var ShortMessage = React.createClass({
    getInitialState:function () {
        return {
            workInfo: "",
            num:"",
            stateList:[],
            hintsInfo:"",
            showtrenModal:false,
            sid:"",
            tmp:"",
        };
    },
    componentWillMount:function(){
    },
    componentDidMount:function(){
       
    },
    render:function (){
        return(
            React.createElement("div",{id:"ShortMessage_div"},
                React.createElement("div",{id:"ShortMessage_div1"},
                    React.createElement("div",{id:"ShortMessage_titleDiv"},
                        React.createElement("div",{className:"ShortMessage_div_title1"},
                        "选择内部收件人"),
                        React.createElement("div",{className:"ShortMessage_div_title2"},
                        "*单击姓名即可添加到右侧\"内部收件人\"")
                    )
                ),
                React.createElement(shortMessagetree,{id:"ShortMessage_orgTreediv"})
            )
        );
    }
});