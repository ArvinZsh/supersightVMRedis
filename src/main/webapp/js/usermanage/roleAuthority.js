// JavaScrcommon_ipt Document

// 表格样式
var roleRows = function(){
    $(".statistics_record_table_tr").each(function(index){
		if(index%2==1){
			$(".statistics_record_table_tr").eq(index).css("background-color","#FFFFFF");
		}else{
			$(".statistics_record_table_tr").eq(index).css("background-color","#F1F9FC");
		}
	});
};

var RoleList = React.createClass({
    getInitialState:function(){
        return {
            roleList:[],
            selectedIndex:-1,
            selectedId:"",
        };
    },

    queryData:function(){
        var _this = this;
        var rules = new Object();
        rules.sid = getCookie("sid");
        var tmp = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"role.do?action=listAllRole",
			dataType:'json',
			data: tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				if(data.successFlag){
					this.setState({roleList:data.roleInfos});
					this.setSelect(this.state.selectedIndex);
                    nsEventBus.eventbus.broadcast("findRepeatName",data.roleInfos);
				} else{
					layer.alert(data.errorMsg,{icon:2,title:"错误"});
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error,{icon:2,title:"错误"});
			}.bind(this)
		});
    },

    componentWillMount:function(){
        var _this = this;
        nsEventBus.eventbus.on("SaveRole","SaveRole",function(msg){
            _this.queryData();
        });
    },

    componentDidMount:function(){
        var _this = this;
        this.queryData();
        nsEventBus.eventbus.on("ChangeRoleName","ChangeRoleName",function(roleObj){
            _this.state.roleList[roleObj.roleNameTr] = roleObj.roleName;
        });
    },

    handleAdd:function(){
        //向后台发送ajax请求
        var lst = this.state.roleList;
        var obj = new Object();
        obj.roleName = "新建角色";
        obj.buttons = [];
        obj.remark = "";
        lst.push(obj);
        this.setState({selectedId:obj.roleId,roleList:lst,selectedIndex:lst.length - 1});
        nsEventBus.eventbus.broadcast("fileSelectButton",obj);
    },

    handleDel:function(){
        //删除选中的角色
        var obj = new Object();
		obj.roleName = $(".roleTrSelected")[0].innerText;
        obj.sid = getCookie("sid");
        obj.roleId = this.state.selectedId;
        var _this = this;
        var tmp = JSON.stringify(obj);
        if(typeof(obj.roleId)== "undefined"){
            this.state.roleList[this.state.selectedIndex] = "";
            nsEventBus.eventbus.broadcast("clearNameinput","删除成功!");
            _this.queryData();
            return;
        }
        layer.confirm('您确定要删除该角色？', {
                btn: ['确定','取消'] //按钮
            }, function() {
            $.ajax({
                url:common_ip+"role.do?action=delete",
                dataType:'json',
                data: tmp,
                type:'post',
                contentType:"application/x-www-form-urlencoded",
                success: function(data){
                    if(data.successFlag){
                        layer.msg('删除成功！', {icon: 1});
                        _this.queryData();
                    } else{
                        layer.alert("删除失败！"+data.errorMsg,{icon:2,title:"错误"});
                        return;
                    }
                }.bind(this),
                error: function(request, state, error){
                    layer.alert(error,{icon:2,title:"错误"});
                }.bind(this)
            });
        });
    },

    setSelect:function(num){
        if(num != -1){
            nsEventBus.eventbus.broadcast("fileSelectButton",this.state.roleList[this.state.selectedIndex]);
        }
    },

    handleSelected:function(e){
        var num = $(".roleTr:hover").index();
        this.setState({selectedId:e.currentTarget.id,selectedIndex:num});
        nsEventBus.eventbus.broadcast("fileSelectButton",this.state.roleList[num]);
    },

    render:function(){
        var style = "";
        var rows = [];
        if(this.state.roleList.length > 0){
                for(var i = 0; i < this.state.roleList.length; i++){
                if(this.state.selectedId ==this.state.roleList[i].roleId || this.state.selectedIndex == i){
                    style = " roleTrSelected";
                }else{
                    style = "";
                }
                 if(this.state.roleList[i].roleName == "" || typeof(this.state.roleList[i].roleName) == "undefined"){
                    continue;
                 }
                rows.push(React.createElement(
                    "div",
                    {id:this.state.roleList[i].roleId,className:"roleTr"+style,onClick:this.handleSelected},
                    React.createElement(
                        "span",
                        {className:"inputRoleNameTxt"},
                        this.state.roleList[i].roleName
                    )
                ));
            }
        }

        return React.createElement(
            "div",
            {id:"divRoleList"},
            React.createElement(
                "div",
                {id:"divRoleListTitle"},
                React.createElement("span",{id:"divRoleListTitleName"},"角色列表权限"),
                React.createElement("span",{id:"divRoleListAddBtn",onClick:this.handleAdd},"＋"),
                React.createElement("span",{id:"divRoleListDelBtn",onClick:this.handleDel},"－")
            ),
            React.createElement(
                "div",
                {id:"divRoleListTable"},
                rows
            )
        );
    }

});

var roleAuthorityMain=React.createClass({
    getInitialState: function getInitialState() {
        return {
            workInfo: "",
            num:"",
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
                    React.createElement(Nav,{url:"",checkid:7})
                ),
                React.createElement("div",{id:"user_down"},
                    React.createElement("div",{id:"user_down_left"},
                        React.createElement(LeftColumn,{checkid:6})
                    ),
                    React.createElement("div",{id:"user_down_mean"},
                        React.createElement(RoleList,{url:"jsp/tree.jsp"})
                    ),
                    React.createElement("div",{id:"user_info_div1"},
                        React.createElement(AuthorityButtons,null)
                    )

                )
            ));
    }
});

ReactDOM.render(React.createElement(roleAuthorityMain), document.getElementById("container"));
