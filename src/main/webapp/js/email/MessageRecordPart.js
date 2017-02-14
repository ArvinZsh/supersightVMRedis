var Input = React.Input || ReactBootstrap.Input;
var Pagination= React.Pagination || ReactBootstrap.Pagination;
var MessageRecord = React.createClass({
    getInitialState:function () {
        return{
            pageNo:1,
            pageSize:5,
            data:[],
            dataCount:1,
            timeFrom:"",
            timeTo:"",
        }
    },
    componentDidMount:function(){
        $("body").keydown(function(e) {
            if (e.keyCode == "13") {//keyCode=13是回车键
                $('.find_messageRecord').click();
            }
        });

        var _this = this;
        var mydateInput = document.getElementById("record_date1");
        var time = new Date().Format("yyyy-MM-dd");
        var time=new Date().GetDate(1);
        mydateInput.value=time;
        var mydateInput2 = document.getElementById("record_date2");
        var time2 = new Date().Format("yyyy-MM-dd");
        mydateInput2.value=time2;
        this.setState({timeFrom:time});
        this.setState({timeTo:time2});
        var statusCode = $(".MessageRecord_state option:selected").val();
        var keyword = $(".input_keys").val();
        var sid = getCookie("sid");
		var userName = getCookie("userName");
        var rules = {"userName":userName,"sid":sid,"timeFrom":time,"timeTo":time2,"statusCode":statusCode,"keyWord":keyword,"pageNo":this.state.pageNo,"pageSize":this.state.pageSize};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"sms.do?action=list",
            dataType:'json',
            data:tmp,
            type:'POST',
            contentType:"application/x-www-form-urlencoded",
            success:function(data){
                if(data.successFlag){
					
                    _this.setState({data:data.pager});
                    _this.setState({dataCount:data.pager.totalCount});
                }else{
                    layer.alert(data.errorMsg,{icon: 2,title: '错误'});
                }
            }, error:function(request,state,error){
                layer.alert("操作错误"+data.errorMsg,{icon: 2,title: '错误'});
            }
        });
        $(".messageRecord_content_text").wordLimit(80);
    },
    componentDidUpdate: function(){
        $(".messageRecord_content_text").wordLimit(80);
    },
    findShortMessage:function(){
        this.state.pageNo = 1;

        var _this = this;
        var keyword = $(".input_keys").val();
        var statusCode = $(".MessageRecord_state option:selected").val();
        var mydateInput = $("#record_date1").val();
        var mydateInput2 = $("#record_date2").val();
		var userName = getCookie("userName");
        var sid = getCookie("sid");
        var rules = {"sid":sid,"userName":userName,"timeFrom":mydateInput,"timeTo":mydateInput2,"statusCode":statusCode,"keyWord":keyword,"pageNo":this.state.pageNo,"pageSize":this.state.pageSize};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"sms.do?action=list",
            dataType:'json',
            data:tmp,
            type:'POST',
            contentType:"application/x-www-form-urlencoded",
            success:function(data){
                if(data.successFlag){
					layer.msg("查询成功！",{icon:1});
                    _this.setState({data:data.pager});
                    _this.setState({dataCount:data.pager.totalCount});
                }else{
                    layer.alert(data.errorMsg,{icon: 2,title: '错误'});
                }
            }, error:function(request,state,error){
                layer.alert("操作错误",{icon: 2,title: '错误'});
            }
        });
    },
    handleSelect:function(event, selectedEvent){
        var _this = this;
        this.setState({pageNo:selectedEvent.eventKey});
        var keyword = $(".input_keys").val();
        var statusCode = $(".MessageRecord_state option:selected").val();
        var sid = getCookie("sid");
        var mydateInput = $("#record_date1").val();
        var mydateInput2 = $("#record_date2").val();
		var userName = getCookie("userName");
        var rules = {"sid":sid,"userName":userName,"timeFrom":mydateInput,"timeTo":mydateInput2,"statusCode":statusCode,"keyWord":keyword,"pageNo":selectedEvent.eventKey,"pageSize":this.state.pageSize};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"sms.do?action=list",
            dataType:'json',
            data:tmp,
            type:'POST',
            contentType:"application/x-www-form-urlencoded",
            success:function(data){
                if(data.successFlag){
					
                    _this.setState({data:data.pager});
                    _this.setState({dataCount:data.pager.totalCount});
                }else{
                    layer.alert(data.errorMsg,{icon: 2,title: '错误'});
                }
            }, error:function(request,state,error){
                layer.alert("操作错误",{icon: 2,title: '错误'});
            }
        });
    },
    render:function () {
        var tmp = [];
        if(typeof(this.state.data.list)!=undefined&&this.state.data.list!=null){
            for(var i=0;i<this.state.data.list.length;i++){
				if(this.state.data.list[i].statusCode=="失败"){
					$(".Record_state_text").eq(i).css("color","red");
				}else{
					$(".Record_state_text").eq(i).css("color","#1E9BD9");
				}
				var str=this.state.data.list[i].receiverList;
				var str1=this.state.data.list[i].creator;
				if(this.state.data.list[i].receiverList.length==0){
					 str = "无";
				}
				if(this.state.data.list[i].creator.length==0){
					 str1 = "无";
				}
                tmp.push(	
                            React.createElement("div",{className:"Recoed_titleMain"},
                                React.createElement("div",{className:"messageRecord_date"},this.state.data.list[i].createTimeFormat),
                                React.createElement("div",{className:"Record_state_text"},this.state.data.list[i].statusCode)
                            ),
                            React.createElement("div",{className:"Recoed_textMain"},
                                    React.createElement("div",{className:"outBox_man"},"发件人"),
                                    React.createElement("div",{className:"outBox_man_text"},str1),
                                    React.createElement("div",{className:"inBox_man"},"接收人"),
                                    React.createElement("div",{className:"inBox_man_text"},str),
                                    React.createElement("div",{className:"messageRecord_content"},"内容"),
                                    React.createElement("div",{className:"messageRecord_content_text"},this.state.data.list[i].content)
                            )
                )
            }
			
        }
        return(
            React.createElement("div",{className:"MessageRecord_div"},
                React.createElement("div",{className:"MessageRecord_topContent"},
                    React.createElement("input",{type:"date",className:"input_date1",id:"record_date1"}),
                    React.createElement("label",{className:"label_zhi"},"~"),
                    React.createElement("input",{type:"date",className:"input_date2",id:"record_date2"}),
                    React.createElement(Input,{type:"select",className:"MessageRecord_state"},
                         React.createElement("option",{value:""},"全部状态"),
                         React.createElement("option",{value:"成功"},"发送成功"),
                         React.createElement("option",{value:"失败"},"发送失败")
                    ),
                    React.createElement("input",{className:"input_keys",placeholder:"请输入关键字"}),
                    React.createElement("button",{className:"find_messageRecord",onClick:this.findShortMessage},"搜索")
                ),
                React.createElement("div",{className:"messageRecord_MainAll"},
                    React.createElement("div",{className:"messageRecord_MainContent"},
                        tmp
                    ),
                    React.createElement("div",{className:"messageRecord_Paginationdiv"},
                        React.createElement(Pagination, {
                            id:"MessageRecord_pagination",
                            prev: true,
                            next: true,
                            first: '首页',
                            last: '尾页',
                            ellcommon_ipsis: true,
                            boundaryLinks: true,
                            items: Math.ceil(this.state.dataCount/this.state.pageSize),
                            maxButtons: 5,
                            activePage: this.state.pageNo,
                            onSelect: this.handleSelect
                        })
                    )
                )
            )
        )
    }
});