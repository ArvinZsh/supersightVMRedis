var shortMessageSuccess =  React.createClass({
    getInitialState: function getInitialState() {
        return {
            year:"",
            month:"",
        };
    },
    GetRequest:function() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;

    },
    sendMessage:function(){
        window.location.href="ShortMessage.html";
    },
    componentDidMount: function(){
        var sid = getCookie("sid");
        var rules = {"sid":sid};
        var tmp = JSON.stringify(rules);
        var _this = this;
        $.ajax({
            url:common_ip+"sms.do?action=count",
            dataType:'json',
            data:tmp,
            type:'POST',
            contentType:"application/x-www-form-urlencoded",
            success:function(data){
                if(data.successFlag){
					
                    _this.setState({year:data.thisYear});
                    _this.setState({month:data.thisMonth});
                }else{
                    layer.alert("加载数据失败"+data.errorMsg,{icon: 2,title: '错误'});
                }
            }, error:function(request,state,error){
                layer.alert("操作错误",{icon: 2,title: '错误'});
            }
        });
    },
    render: function render() {
        var  creator = this.GetRequest().creator;
        var  receivers = this.GetRequest().receivers;
        var  content = this.GetRequest().content;
        return(
            React.createElement("div",{id:"bgc_white"},
                React.createElement("div",{id:"tip_success"},"您的短信已发送!"),
                React.createElement("div",{id:"tip_success2"},"温馨提示:本月已发送"+this.state.month+"条，本年已发送"+this.state.year+"条"),
                    React.createElement("div",{id:"now_bgc"},
                        React.createElement("label",{className:"time_bgc"},"发送时间"),
                        React.createElement("label",{className:"send_time_label"},this.GetRequest().createTime),
                        React.createElement("label",{className:"sender_label"},"发件人"),
                        React.createElement("label",{className:"send_sender_label"},decodeURI(creator)),
                        React.createElement("label",{className:"sendee_label"},"接收人"),
                        React.createElement("label",{className:"send_sendee_label"},decodeURI(receivers)),
                        React.createElement("label",{className:"send_content"},"内容"),
                        React.createElement("label",{className:"send_content_label"},decodeURI(content))
                    ),
                React.createElement("button",{className:"button_shortMessage",onClick:this.sendMessage},"继续发短信")
            )
        );
    }
})

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
                    React.createElement(shortMessageSuccess,null)
                )
            )
        );
    }
});
ReactDOM.render(React.createElement(ShortMessageMain), document.getElementById("container"));

