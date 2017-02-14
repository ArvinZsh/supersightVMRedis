var AuthorityButtons=React.createClass({
    getInitialState: function getInitialState() {
        return {
           buttonsData:"",
           selectData:"",
           roleName:"",
           allSelected:false,
            roleList:"",
        };
    },
    componentDidMount: function(){

        var _this = this;
        nsEventBus.eventbus.on("clearNameinput","clearNameinput",function(msg){
            _this.setState({roleName:""});
            layer.msg(msg,{icon:1});
        });
        nsEventBus.eventbus.on("findRepeatName","findRepeatName",function(repatName){
            _this.state.roleList = repatName;
        });

//        var tmp=[{module:"管理中心",pages:[{pageLink:"building.html",pageName:"违建台账",buttons:["building.上 报","building.保 存","building.新 增","building.查 看","building.编 辑"]},{pageLink:"lawWarning.html",pageName:"执法预警",buttons:["lawWarning.访问","lawWarning.刷新","lawWarning.浏览"]}]},{module:"管理中心",pages:[{pageLink:"org.html",pageName:"组织架构",buttons:["org.停用","org.确定","org.编辑","org.访问","org.＋部门"]}]}]
//        this.setState({buttonsData:tmp});
        var _this=this;
        var sid = getCookie("sid");
        var cmd = {"sid":sid};
        var tmp = JSON.stringify(cmd);
        $.ajax({
            url:common_ip+"role.do?action=listAllRoleBtns",
            dataType:'json',
            data:tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    this.setState({buttonsData:data.pageRoles});
                }else{
                    layer.alert(data.errorMsg,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert("数据加载异常！",{icon:2,title:"错误"});
//			console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
        nsEventBus.eventbus.on("fileSelectButton","fileSelectButton",function(par){
//            var tmp1={roleId:"",roleName:"",remark:"",buttons:["building.上 报","building.保 存","building.新 增","building.查 看","building.编 辑"]}
            if(typeof(par) == "undefined"){
                _this.setState({selectData:"",roleName:""});
                _this.setSelect("");
                return;
            }
            _this.setState({selectData:par,roleName:par.roleName});
            _this.setSelect(par.buttons);
        });
    },
    setSelect:function(e){
        if(typeof (e)=="undefined"|| e==null||e==""){
            return;
        }
        var box=document.getElementsByName('author_button');
        var step=[];
        for (var i=0;i<box.length;i++ ){
            box[i].checked=false;
        }
        for (var i=0;i<box.length;i++ ){
            e.map(function(button){
                if(box[i].value==button){ //判断复选框是否选中
                    box[i].checked=true;
                }
            });
        }
    },
    onClick:function(e){
        nsEventBus.eventbus.broadcast("fileSelectButton","");
    } ,
    handleChange:function(e){

        var obj = new Object;
        obj.roleName = $("#roleNameTxt").val();
        obj.roleNameTr = $(".roleTrSelected").index();
        this.setState({roleName:obj.roleName});
        nsEventBus.eventbus.broadcast("ChangeRoleName",obj);

    },
    handleSelectChanged:function(e){
        var box=document.getElementsByName('author_button');
        if(e.target.checked){
            for (var i=0;i<box.length;i++ ){
                box[i].checked=true;
            }
        }else{
            for (var i=0;i<box.length;i++ ){
                box[i].checked=false;
            }
        }
    },
    saveClick:function(e){
        var index = $(".roleTrSelected").index();
        if(index == -1){
            layer.alert("请添加或者选中一个角色");
            return;
        }
        for(var i =0; i<this.state.roleList.length;i++) {
            for (var i = 0; i < this.state.roleList.length; i++) {
                var isRepeated = false;
                for (var j = i + 1; j < this.state.roleList.length; j++) {
                    if (this.state.roleList[i].roleName == this.state.roleList[j].roleName) {
                        isRepeated = true;
                        break;
                    }
                    var roleNameTr = $(".roleTrSelected").index();
                    var roleNameTr1 = $(".roleTr").index();
                    if(this.state.roleList[roleNameTr].roleName != this.state.roleName && this.state.roleList[j-1].roleName == this.state.roleName){
                        layer.alert("名字重复了,请换一个角色名", {icon: 2});
                        return;
                    }
                }
                if (isRepeated) {
                        layer.alert("名字重复了,请换一个角色名", {icon: 2});
                        return;
                }
            }
        }

        if($("#roleNameTxt")[0].value == ""){
            layer.alert("角色名称不能为空，请选择角色！",{icon:5,title:"提示"});
            return;
        }
        var box=document.getElementsByName('author_button');
        var buttons=[];
        for (var i=0;i<box.length;i++ ){
            if(box[i].checked==true){ //判断复选框是否选中
                buttons.push(box[i].value);
            }
        }
        console.log(buttons)
        var roleid="";
        if(typeof (this.state.selectData)!="undefined"&&this.state.selectData!=null&&this.state.selectData!=null){
              roleid=this.state.selectData.roleId;
        }
        if(buttons.length<=0){
            layer.alert("请赋予角色至少一个权限使用",{icon:0});
            return;
        }
        var sid = getCookie("sid");
        var cmd = {"sid":sid,roleId:roleid,roleName:this.state.roleName,remark:this.state.selectData.remark,buttons:buttons};
        var tmp = JSON.stringify(cmd);
        $.ajax({
            url:common_ip+"role.do?action=save",
            dataType:'json',
            data:tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    layer.msg('保存成功！', {icon: 1});
                    nsEventBus.eventbus.broadcast("SaveRole",null);
                }else{
                    layer.alert(data.message,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert("数据加载异常！",{icon:2,title:"错误"});
//			console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },
    render: function render() {
        var tmp=[];
        if(this.state.buttonsData!=""&&this.state.buttonsData!=null){
            this.state.buttonsData.map( function(data){
                    tmp.push(React.createElement("p",{className:"author_module_p"},data.module));
                    if(typeof (data.pages)!=undefined&&data.pages!=null&&data.pages!=""){
                        var pagehtml=[],pagehtml1=[];
                        data.pages.map(function(page){
                            if(typeof (page.buttons)!=undefined&&page.buttons!=null&&page.buttons!=""){
                                var buttonhtml=[];
                                buttonhtml.push(React.createElement("label",{className:"author_page_label"},page.pageName));
                                page.buttons.map(function(button){
                                    var strs=button.split(".");
                                    if(strs.length>=2){
                                            if(button=="ledgerdetails.删 除"){
                                                buttonhtml.push( React.createElement("input",{type:"checkbox",name:"author_button",className:"author_buttons",value:button}),
                                                    React.createElement("label",{className:"author_btoon_label"},"删除台账"));
                                            }else if(button=="ledgerdetails.删除"){
                                                buttonhtml.push( React.createElement("input",{type:"checkbox",name:"author_button",className:"author_buttons",value:button}),
                                                    React.createElement("label",{className:"author_btoon_label"},"删除记录"));
                                            }else{
                                                buttonhtml.push( React.createElement("input",{type:"checkbox",name:"author_button",className:"author_buttons",value:button}),
                                                    React.createElement("label",{className:"author_btoon_label"},strs[1]));
                                            }
                                    }
                                });
                                pagehtml.push(React.createElement("p",{className:"author_page_p"},buttonhtml));
                            }
                        });
                    tmp.push(React.createElement("div",{className:"author_module_div"},pagehtml));
                    }
            }
            )
        }
        return(
            React.createElement("div",{className:"author_right_div"},
                React.createElement("div",{id:"divRoleName"},
                    React.createElement(
                        "p",{className:"roleNameLabel"},"角色名称:"
                    ),
                    React.createElement(
                        "input",{id:"roleNameTxt",onChange:this.handleChange,value:this.state.roleName}
                    )
                ),
                React.createElement("p",{className:"author_right_head"},"权限设置",
                    React.createElement("input",{type:"checkbox",id:"allSelectBtn",className:"author_buttons",value:this.state.allSelected,onChange:this.handleSelectChanged}),
                    React.createElement("label",{id:"allSelectLabel",className:"author_btoon_label"},"全选")
                ),
                React.createElement("div",{className:"author_right_divc"},tmp),
                React.createElement("button",{id:"author_right_button",onClick:this.saveClick},"保存")
            )
            );

    }
});
//ReactDOM.render(React.createElement(AuthorityButtons),document.body);
