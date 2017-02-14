'use strict';

var Pagination = ReactBootstrap.Pagination;
var Input = window.Input || ReactBootstrap.Input;
var Button = window.Button || ReactBootstrap.Button;
var Grid = ReactBootstrap.Grid || "";
var Row = ReactBootstrap.Row || "";
var Col = ReactBootstrap.Col || "";
var Image = ReactBootstrap.Image || "";
var Tabs = window.Tabs || ReactBootstrap.Tabs;
var Tab = window.Tab || ReactBootstrap.Tab;

var BuildCase = ["是否立案","是","否"];

// 表格样式
var buildinggehang = function(){
    $(".statistics_record_table_tr").each(function(index){
		if(index%2==1){
			$(".statistics_record_table_tr").eq(index).css("background-color","#FFFFFF");
		}else{
			$(".statistics_record_table_tr").eq(index).css("background-color","#F1F9FC");
		}
	});
};

function datefun(yur){
	var date2 = new Date();
	var month = date2.getMonth()+1;
	var getdate = date2.getDate()+yur;

	if(month >= 1 && month<10){
		month = "0"+month;
	}
	if(getdate >= 1 && getdate<10){
		getdate = "0"+getdate;
	}
	var date = date2.getFullYear() + "-" + month + "-" + getdate;
	return date;
}

/**
 * 档案列表页页头
 * 可选择设置count，显示件数
 * 不设置count，则不显示件数
 */
var RecordsTitle = React.createClass({
        displayName:'RecordsTitle',

        render:function render(){
            var tmp = "档案列表";
            if(this.props.count != "undefined"){
                tmp += "（共" + this.props.count + "件）";
            }
            return (
                React.createElement(
                    "div",
                    {id:"divStatistics_RecordTitle"},
                    React.createElement(
                        "h4",
                        {id:"divStatistics_RecordTitle"},
                        tmp
                    )
                )
                );
        }
    });

/**
 *
 * 需要设置参数 EventTag——查询触发事件标识
 */
var QueryBar = React.createClass({
    displayName:'QueryBar',

    getInitialState:function getInitialState(){
        return {
            AllBlockArea:[],
            AllGrid:[],
            queryBlockArea:"所有社区",
            queryGrid:"所有网格",
            queryTxt:"",
            queryBuildCase:""
        };
    },

    componentDidMount:function componentDidMount(){
        $("body").keydown(function(e) {
            if (e.keyCode == "13") {//keyCode=13是回车键
                $('#statistics_queryButton').click();
            }
        });
        var _this = this;
        var sid = getCookie("sid");
        var rules={"sid":sid,"typeId":"'CommunityCode'"};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"commonCode.do?action=listSub",
            dataType:'json',
            data: tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
					
                    var blocks=[];
                    for(var i=0;i<data.commonCodeList.length;i++){
                        if(data.commonCodeList[i].typeId=="CommunityCode"){
                            blocks.push(data.commonCodeList[i]);
                        }
                    }
                    this.setState({AllBlockArea:blocks});
                } else{
                    layer.alert("请求失败！"+data.errorMsg,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error,{icon:2,title:"错误"});
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });

        var rules1={"sid":sid,"orderNo":2,"orgName":""};
		var tmp1 = JSON.stringify(rules1);
		$.ajax({
			url:common_ip+"orgInfo.do?action=listByCmd",
			dataType:'json',
			data: tmp1,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					
					this.setState({AllGrid:data.orgList});
				} else{
					layer.alert("请求失败！"+data.errorMsg,{icon:2,title:"错误"});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error,{icon:2,title:"错误"});
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});

    },

    handleQuery:function handleQuery(){
        var obj = new Object();
        obj.timeFrom =  $(".buidding_min_sel").val();					// 开始时间
        obj.timeTo =  $(".buidding_max_sel").val();					    // 结束时间
        if($("#statistics_queryBlockArea")[0].value != "所有社区"){
            obj.area1 = $("#statistics_queryBlockArea")[0].value;
        }
        if($("#statistics_queryGrid")[0].value != "所有网格"){
            obj.gridId = $("#statistics_queryGrid")[0].selectedOptions[0].text;
        }
        if($("#statistics_queryBuildCase")[0].value != "是否立案" && $("#statistics_queryBuildCase")[0].value != ""){
            if($("#statistics_queryBuildCase")[0].value == "是"){
                obj.caseFlag = 1;
            }else{
                obj.caseFlag = 0;
            }
        }
        if($("#statistics_queryTxt")[0].value != ""){
            obj.keyword = $("#statistics_queryTxt")[0].value;
        }
        if(this.props.EventTag != "undefined"){
            nsEventBus.eventbus.broadcast(this.props.EventTag,obj);
            // this.setState({queryTxt:""});
        }
    },

    handleTxtChanged:function handleTxtChanged(event){
        this.setState({queryTxt:event.currentTarget.value});
    },

    handleBlockAreaChanged:function handleBlockAreaChanged(event){
        this.setState({queryBlockArea:event.target.selectedOptions[0].value});
        var obj = new Object();
        obj.timeFrom =  $(".buidding_min_sel").val();					// 开始时间
        obj.timeTo =  $(".buidding_max_sel").val();					    // 结束时间
        if($("#statistics_queryBlockArea")[0].value != "所有社区"){
            obj.area1 = $("#statistics_queryBlockArea")[0].selectedOptions[0].text;
        }
        if($("#statistics_queryGrid")[0].value != "所有网格"){
            obj.gridId = $("#statistics_queryGrid")[0].selectedOptions[0].text;
        }
        if($("#statistics_queryBuildCase")[0].selectedOptions[0].text != "是否立案" && $("#statistics_queryBuildCase")[0].selectedOptions[0].text != ""){
            if($("#statistics_queryBuildCase")[0].selectedOptions[0].text == "是"){
                obj.caseFlag = 1;
            }else{
                obj.caseFlag = 0;
            }
        }
        if($("#statistics_queryTxt")[0].value != ""){
            obj.keyword = $("#statistics_queryTxt")[0].value;
        }
        if(this.props.EventTag != "undefined"){
            nsEventBus.eventbus.broadcast(this.props.EventTag,obj);
            this.setState({queryTxt:""});
        }
    },

    handleGridChanged:function handleGridChanged(event){
        this.setState({queryGrid:event.target.selectedOptions[0].value});
        var obj = new Object();
        obj.timeFrom =  $(".buidding_min_sel").val();					// 开始时间
        obj.timeTo =  $(".buidding_max_sel").val();					    // 结束时间
        if($("#statistics_queryBlockArea")[0].value != "所有社区"){
            obj.area1 = $("#statistics_queryBlockArea")[0].selectedOptions[0].text;
        }
        if($("#statistics_queryGrid")[0].value != "所有网格"){
            obj.gridId = $("#statistics_queryGrid")[0].selectedOptions[0].text;
        }
        if($("#statistics_queryBuildCase")[0].selectedOptions[0].text != "是否立案" && $("#statistics_queryBuildCase")[0].selectedOptions[0].text != ""){
            if($("#statistics_queryBuildCase")[0].selectedOptions[0].text == "是"){
                obj.caseFlag = 1;
            }else{
                obj.caseFlag = 0;
            }
        }
        if($("#statistics_queryTxt")[0].value != ""){
            obj.keyword = $("#statistics_queryTxt")[0].value;
        }
        if(this.props.EventTag != "undefined"){
            nsEventBus.eventbus.broadcast(this.props.EventTag,obj);
            this.setState({queryTxt:""});
        }
    },

    handleBuildCaseChanged:function handleBlockAreaChanged(event){
        this.setState({queryBuildCase:event.target.selectedOptions[0].value});
        var obj = new Object();
        obj.timeFrom =  $(".buidding_min_sel").val();					// 开始时间
        obj.timeTo =  $(".buidding_max_sel").val();					    // 结束时间
        if($("#statistics_queryBlockArea")[0].value != "所有社区"){
            obj.area1 = $("#statistics_queryBlockArea")[0].value;
        }
        if($("#statistics_queryGrid")[0].value != "所有网格"){
            obj.gridId = $("#statistics_queryGrid")[0].selectedOptions[0].text;
        }
        if($("#statistics_queryBuildCase")[0].value != "是否立案" && $("#statistics_queryBuildCase")[0].value != ""){
            if($("#statistics_queryBuildCase")[0].value == "是"){
                obj.caseFlag = 1;
            }else{
                obj.caseFlag = 0;
            }
        }
        if($("#statistics_queryTxt")[0].value != ""){
            obj.keyword = $("#statistics_queryTxt")[0].value;
        }
        if(this.props.EventTag != "undefined"){
            nsEventBus.eventbus.broadcast(this.props.EventTag,obj);
            this.setState({queryTxt:""});
        }
    },

    render:function render(){

        var blocks = [];
        var grids = [];
        var buildCases = [];
        blocks.push(React.createElement(
            "option",
            {className:"queryBlock_option",value:"所有社区"},
            "所有社区"
        ));
        grids.push(React.createElement(
            "option",
            {className:"queryGrid_option",value:"所有网格"},
            "所有网格"
        ));
        for(var i=0;i<this.state.AllBlockArea.length;i++){
            blocks.push(React.createElement(
                "option",
                {className:"queryBlock_option",value:this.state.AllBlockArea[i].codeName},
                this.state.AllBlockArea[i].codeName
            ));
        }
        for(var i=0;i<this.state.AllGrid.length;i++){
            grids.push(React.createElement(
                "option",
                {className:"queryGrid_option",value:this.state.AllGrid[i].orgId},
                this.state.AllGrid[i].orgName
            ));
        }
        for(var i=0;i<BuildCase.length;i++){
            buildCases.push(React.createElement(
                "option",
                {className:"queryBuildCase_option",value:BuildCase[i]},
                BuildCase[i]
            ));
        }

        return (
            React.createElement(
                "div",
                {id:"divStatistics_queryBar"},
                React.createElement(Input,{id:"beginTime",className:"buidding_min_sel",type:"date"}),
                React.createElement("label",{className:"building_data_mix"},"~"),
                React.createElement(Input,{id:"endTime",className:"buidding_max_sel",type:"date"}),
                React.createElement(
                    "select",
                    {id:"statistics_queryBlockArea",onChange:this.handleBlockAreaChanged},
                    blocks
                ),
                React.createElement(
                    "select",
                    {id:"statistics_queryGrid",onChange:this.handleGridChanged},
                    grids
                ),
                React.createElement(
                    "select",
                    {id:"statistics_queryBuildCase",onChange:this.handleBuildCaseChanged},
                    buildCases
                ),
                React.createElement(
                    "input",
                    {type:"text",placeholder:"建筑物编码/地址/当事人...",id:"statistics_queryTxt",onChange:this.handleTxtChanged,value:this.state.queryTxt}
                ),
                React.createElement(
                    "button",
                    {id:"statistics_queryButton",onClick:this.handleQuery},
                    "搜索"
                )
            )
        );
    }
});
var pageMsg ;
var RecordsTable = React.createClass({
    displayName:'RecordsTable',

    getInitialState:function getInitialState(){
        return {
            records:[],
            page:1,
            pageSize:10,
            totalCount:1,
            pagecount:1,
            key:10000,
        };
    },

    componentWillMount:function componentWillMount(){
        var _this = this;
        nsEventBus.eventbus.on("QueryRecord","QueryRecord",function(msg){
            _this.queryData(msg,"select");
            pageMsg = msg;
        });
        nsEventBus.eventbus.on("statistics_detail","statistics_detail",function(msg){
            var selectedbuildingId = _this.state.records[msg-1].buildingId;
            var str ="statistcss_buildingInfo.html?buildingId=";
            str += selectedbuildingId;
            window.open(str);
        });
    },

    componentDidMount:function componentDidMount(){
        this.queryData(null);
//        buildinggehang();
    },
    queryData:function queryData(paras,selindexBy){
        // 每次查询的时候,恢复分页为默认值
        var sid = getCookie("sid");
        if(selindexBy == "select"){
            this.state.page = 1;
        }
        var rules = new Object();
        var sid = getCookie("sid");
        rules.sid = sid;
        rules.pageNo = this.state.page;
        rules.pagesize = this.state.pageSize;
        // 设置分页的时候，数据还是保持查询或默认的请求
        if(paras != null){
            if(paras.area1 != "所有社区" && typeof(paras.area1) != "undefined"){
                rules.area1 = paras.area1;
            }
            if(paras.gridId != "所有网格" && typeof(paras.gridId) != "undefined"){
                rules.gridId = paras.gridId;
            }
            if(paras.caseFlag != "是否立案" && typeof(paras.caseFlag) != "undefined"){
                rules.caseFlag = paras.caseFlag;
            }
            if( typeof(paras.keyword) != "undefined" && paras.keyword != null && paras.keyword != ""){
                rules.keyword = paras.keyword;
            }
            if(typeof(paras.timeFrom) != "undefined" && paras.timeFrom != ""){
                rules.timeFrom = paras.timeFrom;
            }
            if(typeof(paras.timeTo) != "undefined" && paras.timeTo != ""){
                rules.timeTo = paras.timeTo;
            }
        }
        var _this = this;
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"count.do?action=listFiles",
            dataType:'json',
            data:tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    // 分页计算
					
                    var zhuan = JSON.parse(data.filePager.totalCount);
                    _this.setState({totalCount:parseInt(zhuan)});
                    var pagecount = parseInt(zhuan / 10);
                    if(zhuan % 10 != 0){
                        pagecount++;
                    }

                    _this.setState({pagecount:pagecount});
                    _this.setState({records:data.filePager.list});
                }else{
                    layer.alert("查询失败"+data.errorMsg,{icon:2});
                     layer.alert(data.errorMsg);
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
    //			console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },

    componentDidUpdate:function componentDidUpdate(){
//        buildinggehang();
    },

    handleCheckDetail:function handleCheckDetail(){
//        $(".statistics_record_table_tr:hover").css("background-color","#FFF8CE");
        var tr = document.getElementsByClassName("statistics_record_table_tr");
        var index = $(".statistics_record_table_tr:hover").index();
        if(this.state.key != -1 && this.state.key != 10000 ){
            $(".statistics_record_table_tr").removeAttr("style");
        }
        tr[index - 1].style.backgroundColor= "#fffee1";
        this.setState({key:index-1});
        nsEventBus.eventbus.broadcast("statistics_detail",index);
//        buildinggehang();
    },

    handleSelect:function(event, selectedEvent){
        this.state.page = selectedEvent.eventKey;
		this.setState({page:selectedEvent.eventKey});
           this.queryData(pageMsg,"handleSelect");
    },

    render:function render(){
        var rows = [];
        for(var i = 0; i < this.state.records.length; i++){
            rows.push(React.createElement(
                "tr",
                {className:"statistics_record_table_tr",onClick:this.handleCheckDetail},
                React.createElement(
                    "td",
                    {className:"statistics_record_table_tr_time"},
                    this.state.records[i].editTimeFormat
                ),
                React.createElement(
                    "td",
                    {className:"statistics_record_table_tr_place"},
                    "【" + this.state.records[i].area1 + "】" + this.state.records[i].address
                ),
                React.createElement(
                    "td",
                    {className:"statistics_record_table_tr_grid"},
                    this.state.records[i].gridId
                ),
                React.createElement(
                    "td",
                    {className:"statistics_record_table_tr_person"},
                    this.state.records[i].ownerName
                ),
                React.createElement(
                    "td",
                    {className:"statistics_record_table_tr_buildCase"},
                    this.state.records[i].caseFlag == true?"是":"否"
                )
            ));
        }
        return (
            React.createElement(
                "div",
                {id:"divStatistics_table"},
                React.createElement(
                    "div",
                    {id:"divPageTitle"},
                    React.createElement(RecordsTitle,{count:this.state.totalCount})
                ),
                React.createElement(
                    "div",
                    {id:"divPageQueryBar"},
                    React.createElement(QueryBar,{EventTag:"QueryRecord"})
                ),
                React.createElement(
                    "div",
                    {id:"divStatistics_tableContent"},
                    React.createElement(
                        "table",
                        {id:"statistics_table"},
                        React.createElement(
                            "tr",
                            {id:"statistics_titleTr"},
                            React.createElement("th",{id:"statistic_title_time"},"归档时间"),
                            React.createElement("th",{id:"statistic_title_place"},"地点（小区+地址）"),
                            React.createElement("th",{id:"statistic_title_grid"},"网格号码"),
                            React.createElement("th",{id:"statistic_title_person"},"当事人"),
                            React.createElement("th",{id:"statistic_title_buildCase"},"是否立案")
                        ),
                        rows
                    )
                ),
                React.createElement(
                    "div",
                    {className:"buildings_disanji_fen"},
                    React.createElement(Pagination,{id:"buildings_fenye",prev: true,
                        next: true,
                        first: '第一页',
                        last: '最后一页',
                        ellcommon_ipsis: true,
                        boundaryLinks: true,
                        items: this.state.pagecount,
                        maxButtons: 5,
                        activePage: this.state.page,
                        onSelect: this.handleSelect}
                    )
                )
            )
        );
    }

});
