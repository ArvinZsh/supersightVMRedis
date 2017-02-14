var ShortMessageMain = React.createClass({
    getInitialState: function getInitialState() {
        return {
            workInfo: "",
            num:"",
        };
    },

    render: function render() {
        return(
            React.createElement("div",{id:"main"},
                React.createElement("div",{id:"logo"},
                    React.createElement("div",{id:"logo_left"}),
                    React.createElement("div",{id:"logo_right"},
                        React.createElement("h1",{id:"logo_right_h"},common_title)
                    )
                ),
                React.createElement("div",{id:"navigation"},
                    React.createElement(Nav,{url:"",checkid:4})
                ),
                React.createElement("div",{id:"user_down"},
                    React.createElement("div",{id:"user_down_left"},
                        React.createElement(LeftColumn,{checkid:4})
                    )
                ),
                React.createElement("div",{id:"ShortMessage"},
                    React.createElement(ShortMessage,null)
                )
            )
        );
    }
});
ReactDOM.render(React.createElement(ShortMessageMain), document.getElementById("container"));
