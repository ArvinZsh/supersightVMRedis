var info={fileInfo:[{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"},{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"},,{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"},{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"},{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"},{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"},{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"}],noticeInfo:[{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"},{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"},,{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"},{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"},{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"},{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"},{id:"P001",name:"关于整改南枫小区",time:"2016-1-26"}],workInfos:[{title:"公文1xxxxx违建",content:"南澳XX街道，发现违建，请派人处理南澳XX街道，发现违建，请派人处理南澳XX街道，发现违建，请派人处理。。",dateTime:"2016-05-12",week:"周四",docNo:"0x0011",dype:"1"},{title:"公文1xxxxx违建",content:"南澳XX街道，发现违建，请派人处理南澳XX街道，发现违建，请派人处理南澳XX街道，发现违建，请派人处理。。",dateTime:"2016-05-12",week:"周四",docNo:"0x0011",dype:"1"},{title:"公文1xxxxx违建",content:"南澳XX街道，发现违建，请派人处理南澳XX街道，发现违建，请派人处理南澳XX街道，发现违建，请派人处理。。",dateTime:"2016-05-12",week:"周四",docNo:"0x0011",dype:"1"},{title:"公文1xxxxx违建",content:"南澳XX街道，发现违建，请派人处理南澳XX街道，发现违建，请派人处理南澳XX街道，发现违建，请派人处理。。",dateTime:"2016-05-12",week:"周四",docNo:"0x0011",dype:"1"}],basicInfos:[{Month:1,BaseType:"永久地基",Area:100},{Month:1,BaseType:"临时地基",Area:50},{Month:1,BaseType:"j地基",Area:70},{Month:2,BaseType:"永久地基",Area:100},{Month:2,BaseType:"临时地基",Area:50},{Month:2,BaseType:"j地基",Area:40},{Month:3,BaseType:"永久地基",Area:100},{Month:3,BaseType:"临时地基",Area:50},{Month:3,BaseType:"j地基",Area:90},{Month:4,BaseType:"永久地基",Area:150},{Month:4,BaseType:"临时地基",Area:50},{Month:4,BaseType:"j地基",Area:120},{Month:5,BaseType:"永久地基",Area:100},{Month:5,BaseType:"临时地基",Area:60},{Month:5,BaseType:"j地基",Area:40}],initialInfos:[{name:"违法1",value:335},{name:"违法2",value:135},{name:"违法3",value:235},{name:"违法4",value:435},{name:"违法5",value:435}]};

var GetUserInfo=React.createClass({
    getInitialState: function getInitialState() {
        return {
            workInfos: [],
            fileInfo:[],
            enforceAlarm:[],
            basicInfos:[],
            initialInfos:[],
            patrolAlarm:[],
        };
    },
    componentDidMount: function(){
        var creatorId = getCookie("uid");
        var sid = getCookie("sid");
        var orgId = getCookie("orgId");
        var cmd = {"sid":sid,"uid":creatorId,orgId:orgId};
        var tmp = JSON.stringify(cmd);
        $.ajax({
            url:common_ip+"myWork.do",
            dataType:'json',
            data:tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
					
                    console.log(data);
                    this.state.fileInfo=data.fileInfo;
                    this.state.enforceAlarm=data.enforceAlarm;
                    this.state.basicInfos=data.groundInfos;
                    this.state.initialInfos=data.illegalInfos;
                    this.state.patrolAlarm= data.patrolAlarm;

                    ReactDOM.render(React.createElement(BasicInformation,{basicInfos:this.state.basicInfos}),document.getElementById("down_top_mean_down"));
                    ReactDOM.render(React.createElement(IllegalProportion,{initialInfos:this.state.initialInfos}),document.getElementById("down_top_right_down"));
                    this.setState({workInfos:data.workInfos});
                }else{
                    console.log("query data failed");
                    layer.alert(data.errorMsg,{icon:2});
					return;
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert("数据加载异常！",{icon:2,title:"错误"});
//			console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },
    render: function render() {

        return(
            React.createElement("div",{id:"main"},
                React.createElement("div",{id:"logo"},
                    React.createElement("div",{id:"logo_left"}),
                    React.createElement("div",{id:"logo_right"},
                        React.createElement("h1",{id:"logo_right_h"},"南澳查违执法留痕管理系统")
                    )
                ),
                React.createElement("div",{id:"navigation"},
                    React.createElement(Nav,{url:"",checkid:2})
                ),
                React.createElement("div",{id:"down"},
                    React.createElement("div",{id:"down_top"},
                        React.createElement("div",{id:"down_top_left"},
                            React.createElement(MyWork,{workInfos:this.state.workInfos})
                        ),
                        React.createElement("div",{id:"down_top_top"},
                            React.createElement("div",{id:"down_top_mean"},
                                React.createElement("div",{id:"down_top_mean_top"},
                                    React.createElement(Official,{title:"收件箱",data:this.state.fileInfo}),
                                    React.createElement(PatrolAlarm,{title:"巡查预警",data:this.state.patrolAlarm })
                                )
                            ),
                            React.createElement("div",{id:"down_top_right"},
                                React.createElement("div",{id:"down_top_right_top"},
                                    React.createElement(Calendar)
                                ),
                                React.createElement("div",{id:"down_top_right_mean"},
                                    React.createElement("iframe",{id:"weather_inc",name:"weather_inc", src:"http://i.tianqi.com/index.php?c=code&id=112",frameborder:"0", marginwidth:"0", marginheight:"0", scrolling:"no"})
                                )
                            )
                        ),
                        React.createElement("div",{id:"down_top_down"},
                            React.createElement("div",{id:"down_top_mean_mean"},
                                React.createElement(EarlyEarning,{title:"执法预警",data:this.state.enforceAlarm })
                            ),
                            React.createElement("div",{id:"down_top_mean_down"}
                            ),
                            React.createElement("div",{id:"down_top_right_down"}
                            )
                        )
                    ),
                    React.createElement("div",{id:"down_down"})
                )
            ));

    }
});
ReactDOM.render(React.createElement(GetUserInfo), document.getElementById("container"));