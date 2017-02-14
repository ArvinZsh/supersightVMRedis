

var StatistcssBuidingInfoNav=React.createClass({
    getInitialState: function getInitialState() {
        return {
            pageCount:this.props.pageCount,
            selectIndex:-1,

        };
    },
    componentDidMount: function(){

    },
    clickColumn:function(e){
        var num= e.target.id;
        nsEventBus.eventbus.broadcast("statistcss_click",num);
        this.setState({selectIndex:num});
    },
    render: function render() {
        var style1="";
        if(this.state.selectIndex==-1){
             style1= " selected";
        }
        var tmp=[];
        for(var i=0;i<this.props.pageCount;i++){
            if(i==this.state.selectIndex){
                tmp.push(React.createElement("li",{id:i,className:"sbiNar_Li selected",onClick:this.clickColumn},"第"+(i+1)+"页"))
            }else{
                tmp.push(React.createElement("li",{id:i,className:"sbiNar_Li",onClick:this.clickColumn},"第"+(i+1)+"页"))
            }
        }
        return(
            React.createElement("ul",{className:"sbiNar_ul"},
                React.createElement("div",{id:"sbiNar_div"},
                    React.createElement("li",{id:"-1",className:"sbiNar_Li"+style1,onClick:this.clickColumn},"封面"),
                    tmp
                )
            )
        );
    }
    });

var StatistcssRefresh=React.createClass({
    getInitialState: function getInitialState() {
        return {
            data: this.props.data,
            building:this.props.building,
            selectIndex:this.props.selectIndex,
        };
    },
    componentDidMount: function(){
        var _this=this;
        nsEventBus.eventbus.on("statistcss_click","statistcss_click",function(num){
            _this.setState({selectIndex:num});
        });
    },
    componentWillUpdate:function(){
    },
        render: function render() {
            var tmp=[];
            if(typeof (this.props.building)!="undefined"&&this.props.building!=null){
                var approveList=[];
                var index=-1;
                tmp.push(React.createElement(Cover,{data:this.props.building,pageIndex:index,selectIndex:this.state.selectIndex}));
                index++;
                tmp.push(React.createElement(BuildingInfo,{building:this.props.building,pageIndex:index,selectIndex:this.state.selectIndex}));
                index++;
                if(typeof (this.props.building.allRecords)!="undefined"&&this.props.building.allRecords!=null&&this.props.building.allRecords.length>0){

                    for(i = this.props.building.allRecords.length-1;i>=0;i--){
                        if(this.props.building.allRecords[i].type=="firstAudit"){
                            approveList.push(this.props.building.allRecords[i]);
                            tmp.push(React.createElement(RecordProposerLogInfo,{building:this.props.building,data:approveList,pageIndex:index,selectIndex:this.state.selectIndex}));
                            approveList=[];
                            index++;
                        }else if(this.props.building.allRecords[i].type=="auditList"){
                            approveList.push(this.props.building.allRecords[i]);
                            tmp.push(React.createElement(RecordProposerLogInfo,{building:this.props.building,data:approveList,pageIndex:index,selectIndex:this.state.selectIndex}));
                            approveList=[];
                            index++;
                        }else if(this.props.building.allRecords[i].type=="enforceRecord"){
                            tmp.push(React.createElement(RecordEnforceLogInfo1,{building:this.props.building,data:this.props.building.allRecords[i].record,pageIndex:index,selectIndex:this.state.selectIndex}));
                            index++;
                            tmp.push(React.createElement(RecordEnforceLogInfo2,{building:this.props.building,data:this.props.building.allRecords[i].record,pageIndex:index,selectIndex:this.state.selectIndex}));
                            index++;
                            tmp.push(React.createElement(RecordEnforceLogInfo3,{building:this.props.building,data:this.props.building.allRecords[i].record,pageIndex:index,selectIndex:this.state.selectIndex}));
                            index++;
                        }else if(this.props.building.allRecords[i].type=="patrolRecord"){
                            tmp.push(React.createElement(RecordPatrolLogInfo,{building:this.props.building,data:this.props.building.allRecords[i].record,pageIndex:index,selectIndex:this.state.selectIndex}));
                            index++;
                        }else if(this.props.building.allRecords[i].type=="officialNotice"){
                            var building=this.props.building;
                            var selectIndex=this.state.selectIndex;
                            this.props.building.allRecords[i].record.map(function(arrayData){
                                tmp.push(React.createElement(RecordNotficationLogInfo,{building:building,data:arrayData.record,pageIndex:index,selectIndex:selectIndex}));
                                index++;
                            });
                        }
                    }
                }
            }
        return  React.createElement("div",{},tmp);
    }
    }
    );


// JavaScrcommon_ipt Document
var StatistcssBuidingInfo=React.createClass({
    getInitialState: function getInitialState() {
        return {
            data: "",
            building:"",
            selectIndex:-1,
            printArea:[]
        };
    },
    componentDidMount: function(){
        var _this=this;
        nsEventBus.eventbus.on("statistcss_click","statistcss_click1",function(num){
            _this.setState({selectIndex:num});
        });

        var sid = getCookie("sid");
        //var sid = "001";
        var Request = new Object();
        Request = this.GetRequest();
        var buildingId = Request["buildingId"];
        var cmd = {"sid":sid,"buildingId":buildingId};
        var tmp = JSON.stringify(cmd);
        $.ajax({
            url:common_ip+"buildings.do?action=get",
            dataType:'json',
            data:tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    layer.msg("查看成功",{icon:1});
                    this.setState({data:data,building:data.building});
                }else{
                    layer.alert("查看失败"+data.errorMsg,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
//			console.error(this.props.url, state, error.toString());
            }.bind(this)
        })
    },


//获取传过来URL中携带的sid值和buildingId值
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
    printClick:function(){
        $("#StatistcssBuidingInfo_pageContent").empty();
        ReactDOM.render(React.createElement(StatistcssRefresh,{data:this.state.data,building:this.state.building,selectIndex:-100}),document.getElementById("StatistcssBuidingInfo_pageContent"))
        $("#StatistcssBuidingInfo_pageContent").jqprint();
        $("#StatistcssBuidingInfo_pageContent").empty();
        ReactDOM.render(React.createElement(StatistcssRefresh,{data:this.state.data,building:this.state.building,selectIndex:this.state.selectIndex}),document.getElementById("StatistcssBuidingInfo_pageContent"))
    },
    enableClick: function(){
        var sid = getCookie("sid");
        var cmd = {"sid":sid,"buildingId":this.state.building.buildingId};
        var tmp = JSON.stringify(cmd);
        $.ajax({
            url:common_ip+"buildings.do?action=actFile",
            dataType:'json',
            data:tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    layer.msg("启用成功",{icon:1});
                }else{
                    layer.alert("启用失败");
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
//			console.error(this.props.url, state, error.toString());
            }.bind(this)
        })
    },
    render: function render() {
//        var tmp=[];
        var index=1;
        if(typeof (this.state.building.allRecords)!="undefined"&&this.state.building.allRecords!=null&&this.state.building.allRecords.length>0){
            for(i = this.state.building.allRecords.length-1;i>=0;i--){
                if(this.state.building.allRecords[i].type=="firstAudit"){
                    index++;
                }else if(this.state.building.allRecords[i].type=="auditList"){
                    index++;
                }else if(this.state.building.allRecords[i].type=="enforceRecord"){
                    index=index+3;
                }else if(this.state.building.allRecords[i].type=="patrolRecord"){
                    index++;
                }else if(this.state.building.allRecords[i].type=="officialNotice"){
                    this.state.building.allRecords[i].record.map(function(arrayData){
                        index++;
                    });
                }
            }
        }
//        this.state.printArea = tmp;

        return(
            React.createElement("div",{id:"StatistcssBuidingInfo_div"},
                React.createElement("div",{id:"StatistcssBuidingInfo_divNav"},
                    React.createElement("button",{id:"StatistcssBuidingInfo_btn",onClick:this.printClick},"打印"),
                    React.createElement("button",{id:"StatistcssBuidingInfo_btn",onClick:this.enableClick},"启用"),
                    React.createElement(StatistcssBuidingInfoNav,{pageCount:index,data:this.state.data,building:this.state.building})
                ),
                React.createElement("div",{id:"StatistcssBuidingInfo_pageContent"},
                    React.createElement(StatistcssRefresh,{data:this.state.data,building:this.state.building,selectIndex:-1})
                    //tmp
                )
                //React.createElement(Cover,{data:this.state.building})
                //React.createElement(BuildingInfo,{building:this.state.building,pageIndex:1,selectIndex:1})
                //React.createElement(RecordPatrolLogInfo,{building:this.state.building,data:cc,pageIndex:1,selectIndex:1})
                //React.createElement(RecordNotficationLogInfo,{building:this.state.building,data:cc,pageIndex:1,selectIndex:1})
                //React.createElement(RecordProposerLogInfo,{building:this.state.building,data:approveList,pageIndex:1,selectIndex:1})

            )
        );
    }
});

// JavaScrcommon_ipt Document
var StatistcssBuidingInfoM=React.createClass({
    getInitialState: function getInitialState() {
        return {
        };
    },
    componentDidMount: function(){

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
                    React.createElement(Nav,{url:"",checkid:6})
                ),
                React.createElement("div",{id:"user_down"},
                    React.createElement("div",{id:"user_down_left"},
                        React.createElement(LeftColumn,{checkid:5})
                    ),
					React.createElement("div",{id:"potrolCount"},
                        React.createElement(StatistcssBuidingInfo,null)
				    )
                )
            )
            );
    }
});

ReactDOM.render(React.createElement(StatistcssBuidingInfoM,{}), document.getElementById("container"));