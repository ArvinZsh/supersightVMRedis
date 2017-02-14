var cluesReportSuccess = React.createClass({
    getInitialState: function getInitialState() {
        return { };
    },
    componentDidMount: function(){

    },
    render: function render() {
        return (
            React.createElement("div",{id:"cluesReportSuccess_All"},
                React.createElement("img",{id:"cluesReportSuccess_img",src:"../images/submitSuccess.png"}),
                React.createElement("div",{className:"cluesReportSuccess_text1"},"提交成功，"),
                React.createElement("div",{className:"cluesReportSuccess_text2"},"感谢您的参与!")
            )
        );
    }
});
ReactDOM.render(React.createElement(cluesReportSuccess), document.getElementById("container"));
