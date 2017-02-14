
"use strict";

/**
 * 一个工作组件
 */
var OneWork = React.createClass({
    getInitialState: function getInitialState() {
        return {
            workInfo: this.props.info,
            num:this.props.num,
            typeId:"",
        };
    },
    handleOnClick:function handleOnTiltClick(event){

        var str ="";
        if(this.state.workInfo.type=="hint"){
            str ="hints.html?hintsId=";
            str += this.state.workInfo.id;
        }else if(this.state.workInfo.type=="affirmAudit"){
            var str ="ledgerdetails.html?buildingId=";
            str +=  this.state.workInfo.id;
        }else{
            var str ="ledgerdetails.html?buildingId=";
            str +=  this.state.workInfo.id;
        }
        window.location.href = str;
    },
    render: function render() {
        var classname="";
        var title="";
        var link="";
        if(this.state.workInfo.type=="hint"){
            classname="onework_div_div";
            title="违建线索";
            link="线索详情>";
        }else if(this.state.workInfo.type=="affirmAudit"){
            classname="onework_div_div4";
            title="新增台账";
            link="台账详情>";
        }else if(this.state.workInfo.type=="auditAndFirst"){
            classname="onework_div_div2";
            title="执法申请";
            link="申请详情>";
        }else if(this.state.workInfo.type=="harmfulAuditAndFirst"){
            classname="onework_div_div2";
            title="危害申请";
            link="申请详情>";
        }else if(this.state.workInfo.type=="audit"){
            classname="onework_div_div3";
            title="执法审批";
            link="审批详情>";
        }else if(this.state.workInfo.type=="harmfulAudit"){
            classname="onework_div_div3";
            title="危害审批";
            link="审批详情>";
        }else{
            classname="onework_div_div3";
            title="审批结果";
            link="审批详情>";
        }
        var str;
        if(this.state.workInfo.content.length>20){
            str = this.state.workInfo.content.substr(0,20)+"...";
        }else{
            str = this.state.workInfo.content;
        }
        if(typeof(this.state.workInfo)!="undefined"&&this.state.workInfo!=null){
            return (
                React.createElement("div", {onClick: this.handleOnClick,className:"onework_div"+this.state.num},
                    React.createElement("div", {className:"onework_div_div1"},
                        React.createElement("div", {className:classname}),
                        React.createElement("p", {className:"onework_div_p1 "},title),
                        React.createElement("p", {className:"onework_div_p2"},this.state.workInfo.createTimeFormat.substring(0,10)),
                        React.createElement("p", {className:"onework_div_p3"},this.state.workInfo.week)
                    ),
                    React.createElement("p", {className:"onework_p"}, "      "+str),
                    React.createElement("a", {className:"onework_a"},link)
                ));
        }else{
            return(
                React.createElement("div", {style: divStyle},
                    React.createElement("label", {style: {float: "left", padding: "17px 0px 0px 5px"}}, "数据有误"),
                    React.createElement("span", {style: {float: "left", padding: "17px 0px 0px 5px"}}, "数据有误")
                ));
        }
    }
});


/**
 * 我的工作组件
 */
var MyWork = React.createClass({
    getInitialState: function getInitialState() {
        return {
            workInfos:this.props.workInfos
        };
    },
    render: function render() {

        console.log("myWork.render:"+this.state.workInfos);
        var temp = [];

        if(typeof(this.props.workInfos)!="undefined" && this.props.workInfos != null){
            for(var i = 0; i < this.props.workInfos.length;i++){
                var num=i%2==0?1:2;
                temp.push(React.createElement(OneWork,{info:this.props.workInfos[i],num:num}));
            }
        }
        return (
            React.createElement("div", {onClick: this.handleOnClick,className:"myWork_div"},
                React.createElement("p", {className:"myWork_p"},"待办事项"),
                temp
            )
            );
    }
});

//var temp = [{title:"公文1xxxxx违建",content:"南澳XX街道，发现违建，请派人处理南澳XX街道，发现违建，请派人处理南澳XX街道，发现违建，请派人处理。。",dateTime:"2016-05-12",week:"周四",docNo:"0x0011",dype:"1"},{title:"公文1xxxxx违建",content:"南澳XX街道，发现违建，请派人处理南澳XX街道，发现违建，请派人处理南澳XX街道，发现违建，请派人处理。。",dateTime:"2016-05-12",week:"周四",docNo:"0x0011",dype:"1"},{title:"公文1xxxxx违建",content:"南澳XX街道，发现违建，请派人处理南澳XX街道，发现违建，请派人处理南澳XX街道，发现违建，请派人处理。。",dateTime:"2016-05-12",week:"周四",docNo:"0x0011",dype:"1"},{title:"公文1xxxxx违建",content:"南澳XX街道，发现违建，请派人处理南澳XX街道，发现违建，请派人处理南澳XX街道，发现违建，请派人处理。。",dateTime:"2016-05-12",week:"周四",docNo:"0x0011",dype:"1"}];

//ReactDOM.render(React.createElement(MyWork,{workInfos:temp}), document.getElementById("divStaticInput"));






















