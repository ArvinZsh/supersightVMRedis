
var Modal = window.Modal || ReactBootstrap.Modal;

var array = [{"bname":"部门0","id":"7a8a1469-5a90-4b64-8850-c6c0dc43d4c2","isStopped":false,"isExpand":false,"describe":"部门描述","list":[{"bname":"部门0-0","id":"01620dae-75d9-4ece-867e-cc57281434ad","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门0-1","id":"4d25162f-ccbe-47fd-a153-5f85345605f6","isStopped":false,"isExpand":true,"describe":"部门描述","list":[{"bname":"部门0-1-1","id":"6f227f31-4793-41c3-a37a-624f9401fdab","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]}]},{"bname":"部门0-2","id":"6f227f31-4793-41c3-a37a-624f9401fdab","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门0-3","id":"a0adafaa-3e17-446d-8de7-da0809fc9ee3","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门0-4","id":"0301c648-15a6-446a-9ebd-2f038ab0ac8b","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门0-5","id":"42ea5f4c-82dc-4613-b621-053579206fde","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]}]},{"bname":"部门1","id":"ef806fd7-58f8-4e72-ad9e-87b4fb80c3c3","isStopped":true,"isExpand":false,"describe":"部门描述","list":[{"bname":"部门1-0","id":"71ec710d-8287-4cb0-bc0a-72b6910b91d8","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门1-1","id":"667c1931-b300-41df-a905-9166956b0c43","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门1-2","id":"a35aa468-aab8-435a-a6d8-874a50ef37c9","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门1-3","id":"b98c0f52-a994-4454-86b9-3f65ed29d6b9","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门1-4","id":"504b53ea-fa0d-4b40-a9cd-5751b4f8862e","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门1-5","id":"41de74bc-612a-4775-9688-dd205c3fbb73","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]}]},{"bname":"部门2","id":"91bedf11-09c9-4fd6-a166-c10eb928fbaa","isExpand":false,"describe":"部门描述","list":[{"bname":"部门2-0","id":"874a94f4-7447-437e-b24e-4c8a9a681c74","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门2-1","id":"48e4ab26-38ce-4de4-ae0b-84c140eb1850","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门2-2","id":"f6ad40bd-105c-4ff3-a14a-62d3e2d15548","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门2-3","id":"f780c1d7-7292-4e6b-94fe-fbb39178335a","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门2-4","id":"34526014-9fb1-45b3-8344-a0bb9802faf9","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门2-5","id":"b860425c-1921-4382-9994-54014db4f138","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]}]},{"bname":"部门3","id":"b8c41a3d-c168-4b54-afae-0857b5db7076","isExpand":false,"describe":"部门描述","list":[{"bname":"部门3-0","id":"c11e7a32-a398-448a-a011-4ddcde2cc622","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门3-1","id":"24e46e4f-1d7e-4bdd-b691-e5020b43b93a","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门3-2","id":"26f46dab-bfd3-4f3f-b58b-0cc99dd35051","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门3-3","id":"dd12c177-f937-4501-9df3-5ed6d23d7cb5","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门3-4","id":"94f268a7-e7d7-4b05-baf9-a8620bc9ff3c","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门3-5","id":"1385144b-10d9-45ea-8d7c-bbb2ac7da6b7","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]}]},{"bname":"部门4","id":"4230dcbd-265c-4496-ae95-a1a61d12f1cb","isStopped":true,"isExpand":false,"describe":"部门描述","list":[{"bname":"部门4-0","id":"53704bea-4268-4fe0-a470-e6ba6e1f0c2c","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门4-1","id":"eebe3a76-fcb1-48db-a8e9-6ceb01db6749","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门4-2","id":"2cbbd31b-67b0-4142-9264-8884fc162773","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门4-3","id":"c844ee07-7c96-470e-92fc-3e66c72142f5","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门4-4","id":"0581f793-4885-49e0-b1bf-67bbf060240a","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门4-5","id":"4a616b0f-ddcc-4c5e-9979-73243433c65b","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]}]}]

yanse = function(even)
{
	var div = document.getElementsByTagName("div");
	for(var i=0;i<div.length;i++)
	{
		div[i].style.backgroundColor = "#FFFFFF";
		div[i].style.color = "#0093DD";
	}
	even.target.style.backgroundColor = "#fff7cd";
};
//编辑
var OrgEdit = React.createClass({

    getInitialState:function getInitialState(){
        var name="";
        var remark="" ;
        if(this.props.operationType=="updateOrg"){
            name= this.props.data.orgName;
            remark=this.props.data.remark;
        }
        return {
            orgName:name,                               //编辑值，Change状态时为传值，Add时为空
            orgRemark:remark,
            showModal:true,
        };
    },
    componentDidMount: function(){
        document.getElementById("orgEdit_name").value=this.state.orgName;
        document.getElementById("orgEdit_describe").value=this.state.orgRemark;
    },
    //确定点击
    okClick:function getInitialState(){
        var name = document.getElementById("orgEdit_name").value;
        var remark = document.getElementById("orgEdit_describe").value;
        if(name==""){
            document.getElementById("orgEdit_p").innerText="请输入部门名";
            return;
        }else{
            if(name.length>50){
                document.getElementById("orgEdit_p").innerText="名称长度不超过50";
                return;
            }
        }
        if(remark!=""){
            if(remark.length>100){
                document.getElementById("orgEdit_p").innerText="描述长度不超过100";
                return;
            }
        }
        var sid = getCookie("sid");
        var pid="0";
        var tmpid="";
        if(this.props.operationType!="updateOrg"&&typeof (this.props.data)!=undefined&&this.props.data!=null&&this.props.data!=""){
            pid=this.props.data.orgId;
        }
        if(this.props.operationType=="updateOrg"&&typeof (this.props.data)!=undefined&&this.props.data!=null&&this.props.data!=""){
            tmpid=this.props.data.orgId;
        }

        //获取orderNo
        var ordNo=0;
        if(this.props.operationType!="updateOrg"){
            if(typeof (this.props.data.orgName)!=undefined&&this.props.data.orgName!=null){
                if(this.props.data.list!=null&&this.props.data.list.length>0){
                    this.props.data.list.map(function (arry) {
                        if(arry.orderNo>ordNo){
                            ordNo=arry.orderNo;
                        }
                    });
                }else{
                    var num=this.props.data.orderNo%10;
                    if(num>0){
                        ordNo=this.props.data.orderNo+10*num;
                    }else{
                        ordNo=this.props.data.orderNo+10;
                    }
                }
            }
            if(ordNo!=0){
                ordNo++;
            }
        }
        else{
            ordNo=this.props.data.orderNo;
        }
        console.log(pid);
        var rules={"id":tmpid,"parentId":pid,"sid":sid,"orgName":name,"remark":remark,"orderNo":ordNo};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"orgInfo.do?action=save",
            dataType:'json',
            data: tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
					layer.msg("保存成功！",{icon:1});
                    this.setState({showModal:false});
                    location.reload();
                } else{
                    layer.alert("操作失败！"+data.errorMsg,{icon:2});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },
    close: function close() {
       var _this = this;
        layer.confirm('您确定要放弃当前修改？',{
            btn:['确定','取消']
        },function (index) {
            _this.setState({ showModal: false });
            layer.close(index);
          }
        )
    },

	render:function render(){
        return React.createElement("div",{className:""},
            React.createElement(Modal,{id:"org_reply",bsSize:"large",show:this.state.showModal,keyboard:true,onHide:this.close,animation:true,dialogClassName:"orgModal"},
                React.createElement(
                    Modal.Header,
                    { closeButton: true },
                    React.createElement(
                        Modal.Title,
                        { id: "contained-modal-title-lg" },
                        this.props.title
                    )
                ) ,
                React.createElement("div",{className:"orgEdit"},
                    React.createElement("label",{className:"orgEdit_label"},"部门名:"),
                    React.createElement("input",{name:"buName",type:"text",id:"orgEdit_name",className:"org_input",ref: "find",placeholder: "部门名"})
                ),
                React.createElement("div",{className:"orgEdit"},
                    React.createElement("label",{className:"orgEdit_label"},"部门描述:"),
                    React.createElement("input",{name:"buMark",type:"text",id:"orgEdit_describe",className:"org_input",ref: "find",placeholder: "部门描述"})
                ) ,
                React.createElement("div",{className:"orgEdit"},
                    React.createElement("button",{className:"org_edit_button",onClick:this.okClick},"确定")
                ),
                React.createElement("p",{id:"orgEdit_p"})
        )
        )
    }
});

var TreeNode = React.createClass({
	getInitialState:function(){
		return {bumen:this.props.bumen,collapsed:false,listCount:this.props.listCount,isStopped:this.props.isStopped};
    },
    handleClick:function(event){
        this.setState({collapsed:!this.state.collapsed});

         nsEventBus.eventbus.broadcast("orgClik",this.props.bumen);
        //yanse(event);
    },
	render:function(event){
		var talltree="";
		var tubiao = "";
		var tree_stop = "";
        var tree_checked="";

        if(typeof(this.props.checkedInfo)!="undefined"&&this.props.checkedInfo!=null&&this.props.checkedInfo.orgId==this.state.bumen.orgId){
            tree_checked="tree_nostop_div_check";
        }
		if(this.state.listCount>0){
			if(this.state.collapsed)
			{
				if(this.state.isStopped){
					talltree="treeopen";
					tree_stop="tree_stop_div";
					tubiao = "opentubiao_stop";
				}else{
					talltree="treeopen";
					tree_stop="tree_nostop_div";
					tubiao = "opentubiao";
				}
			}else
			{
				if(this.state.isStopped){
					talltree="treecolse";
					tree_stop="tree_stop_div";
					tubiao = "colsetubiao_stop";
				}else{
					talltree="treecolse";
					tubiao = "colsetubiao";
					tree_stop="tree_nostop_div";
				}
			}
		}else{
			talltree="treeopen";
			tubiao = "nottubiao";
			if(this.state.isStopped){
			        tree_stop="tree_stop_div";
			}else{
                    tree_stop="tree_nostop_div";
			}
		}
		return (
				React.createElement("div",{style:{cursor: "pointer"}},
						React.createElement("div",{className:tree_checked,onClick:this.handleClick},
								React.createElement("p",{className:tubiao}),
								React.createElement("div",{className:tree_stop,style:{padding:"2px 0 0 25px",marginTop:"3px",height:"28px"}},this.props.bname)
						),
						React.createElement("div",{className:talltree},
								React.createElement("div",{id:"chi",style:{marginLeft:"20px"}},this.props.children)
						)
				)
		);
	}
});

var TreeView = React.createClass({
	render: function(){
        var isstop= this.props.isStopped;
        var _checkInfo=this.props.checkedInfo;
		return(
				React.createElement("div",{id:"treedivid1"},
                    this.props.data.map(function(bumen){
                        if(!isstop&&bumen.stopFlag){
                            return;
                        }
                        return (
                           React.createElement(TreeNode,{bumen:bumen,bname:bumen.orgName,listCount:bumen.list.length,isStopped:isstop,checkedInfo:_checkInfo},
                                React.createElement(TreeView,{data:bumen.list,isStopped:isstop,checkedInfo:_checkInfo})
                           )
                        );


                    })
		        )
        );
	}
});

var Tree = React.createClass({
    getInitialState: function(){
        return{
            data:[]
        };
    },
    componentDidMount: function(){
        var sid = getCookie("sid");
        var rules={"sid":sid};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"orgInfo.do?action=orderList",
            dataType:'json',
            data: tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    this.setState({data:data.orderOrgList});
                } else{
                    layer.alert("请求失败！"+data.errorMsg,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
        var _this = this;
        nsEventBus.eventbus.on("orgHandleOk","orgHandleOk",function(){
            var sid = getCookie("sid");
            var rules={"sid":sid};
            var tmp = JSON.stringify(rules);
            $.ajax({
                url:common_ip+"orgInfo.do?action=orderList",
                dataType:'json',
                data: tmp,
                type:'post',
                contentType:"application/x-www-form-urlencoded",
                success: function(data){
                    if(data.successFlag){
                        _this.setState({data:data.orderOrgList});
                    } else{
                        layer.alert("请求失败！"+data.errorMsg,{icon:2,title:"错误"});
                    }
                }.bind(this),
                error: function(request, state, error){
                    layer.alert(error);
                    console.error(this.props.url, state, error.toString());
                }.bind(this)
            });
        });
    },
    render:function()
    {
        if(this.state.data != ""){
            return (
                React.createElement("div",{id:"fudivid"},
                    React.createElement(TreeView,{data:this.state.data,isStopped:this.props.isStopped,checkedInfo:this.props.checkedInfo})
                )
            );
        }else{
            return (
                React.createElement("div",null)
            );
        }
    }
});

var OrgList= React.createClass({
    getInitialState: function(){
        return{
            list:[]
        };
    },

//    componentWillReceiveProps:function(nextProps){
//        this.setState({
//            list:nextProps.list
//        });
//    },

    render:function()
    {
        this.state.list.splice(0,this.state.list.length);
        var cc=this.props.users.orgName;
        var dd=this.props.users.remark;
        if(typeof(this.props.users)=="undefined"||this.props.users==null){
            return (
                React.createElement("div",{},
                    React.createElement("table",{id:"tabid"},
                        React.createElement("tr",{className:styleDiv},
                            React.createElement("th",{className:"orgInfo_div_td1"},"名称"),
                            React.createElement("th",{className:"orgInfo_div_td3"},"描述")
                        )
                    ))
                );
        }

        var styletd1="orgInfo_div_td1";
        var styletd2="orgInfo_div_td3";
            if(typeof(this.props.users.list)!="undefined"&&this.props.users.list!=null&&this.props.users.list!=""){
                 for(var i=0;i<this.props.users.list.length;i++){
                     if(this.props.isShowStop==false&&this.props.users.list[i].stopFlag==true){
                            continue;
                     }
                     if(this.props.users.list[i].stopFlag){
                         styletd1="orgInfo_div_stp_td1";
                         styletd2="orgInfo_div_stp_td3";
                     }else{
                         styletd1="orgInfo_div_td1";
                         styletd2="orgInfo_div_td3";
                     }
                     var aa = React.createElement("tr",{className:""},
                         React.createElement("td",{className:styletd1},this.props.users.list[i].orgName),
                         React.createElement("td",{className:styletd2},this.props.users.list[i].remark)
                     )
                     this.state.list.push(aa);
                 }
            }
        if(this.props.users.stopFlag){
            styletd1="orgInfo_div_stp_td1";
            styletd2="orgInfo_div_stp_td3";
        }else{
            styletd1="orgInfo_div_td1";
            styletd2="orgInfo_div_td3";
        }
            return (
                React.createElement("div",{id:"orgList_div_div"},
                        React.createElement("table",{id:"tabid"},
                            React.createElement("tr",{className:"orgListHead"},
                                React.createElement("th",{className:"offical_div_td1"},"名称"),
                                React.createElement("th",{className:"offical_div_td3"},"描述")
                            ),
                        React.createElement("tr",{className:""},
                            React.createElement("td",{className:styletd1},cc),
                            React.createElement("td",{className:styletd2},dd)
                        ),
                        this.state.list
                    ))
                );

    }
});

var orgTreeMaim= React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:this.props.data,
			isEnable:true,
			isStopped:false,
            isShowEdit:false,
            orgInfo:'',
            operType:"updateOrg",
		};
    },
    componentDidMount: function(){
        var _this = this;
        var _isShow=this.state.isShowEdit;
        nsEventBus.eventbus.on("orgClik","orgClik",function(msg){
            _this.setState({orgInfo:msg});
            $("#userList_div").empty();
            ReactDOM.render(React.createElement(OrgList,{users:msg,isShowStop:_this.state.isStopped}),document.getElementById("userList_div"));
        });
	},
    //点击添加
	clickadd:function(event){
        this.setState({isShowEdit:!this.state.isShowEdit});
        this.state.operType="addOrg";
        $("#orgEdit").empty();
        var title="";
        if(typeof (this.state.orgInfo.orgName)==undefined||this.state.orgInfo.orgName==null){
            title= "添加主部门";
        }    else{
            title="新增部门到（"+this.state.orgInfo.orgName+"）";
        }
        ReactDOM.render( React.createElement(OrgEdit,{data:this.state.orgInfo,operationType:this.state.operType,title:title}),document.getElementById("orgEdit"));
	},
    // 点击编辑
    clickEdit:function(event){
        this.state.operType="updateOrg";
        this.setState({isShowEdit:!this.state.isShowEdit});
        if(this.state.orgInfo==""){
            layer.alert("请选择编辑部门");
            return;
        }
        if(this.state.orgInfo.stopFlag){
            layer.alert("抱歉,当前部门是停用状态,无法进行编辑!")
            return;
        }
        $("#orgEdit").empty();
        console.log(this.state.orgInfo);
        ReactDOM.render( React.createElement(OrgEdit,{data:this.state.orgInfo,operationType:this.state.operType,title:"编辑部门（"+this.state.orgInfo.orgName+"）"}),document.getElementById("orgEdit"));
    },
    //点击停用
    clickStop:function(event){
        if(typeof(this.state.orgInfo)=="undefined"||this.state.orgInfo==null||this.state.orgInfo==""){
            layer.alert("请选择停用部门")
            return;
        }

        if(this.state.orgInfo.stopFlag){
            layer.alert("当前部门已是停用状态")
            return;
        }

        var sid = getCookie("sid");
        var rules={"sid":sid,"Id":this.state.orgInfo.orgId,"orgName":this.state.orgInfo.orgName};
        var tmp = JSON.stringify(rules);
        layer.confirm('您确定要停用该部门？', {
            btn: ['确定','取消'] //按钮
        }, function() {
            $.ajax({
                url: common_ip+"orgInfo.do?action=stop",
                dataType: 'json',
                data: tmp,
                type: 'post',
                contentType: "application/x-www-form-urlencoded",
                success: function (data) {
                    if (data.successFlag) {
                        layer.msg('停用成功！', {icon: 1});
                        nsEventBus.eventbus.broadcast("orgHandleOk","Disable");
                    } else {
                        layer.msg("停用失败！" + data.errorMsg, {icon: 2,title:"错误"});
                    }
                }.bind(this),
                error: function (request, state, error) {
                    layer.alert(error);
                    console.error(this.props.url, state, error.toString());
                }.bind(this)
            });

        });
    },
    //点击是否显示停用
	clickIsShowStop:function(event){
		var val = document.getElementById("orgtree_checkbox").checked;
        this.setState({isStopped:val});
        $("#userList_div").empty();
        ReactDOM.render(React.createElement(OrgList,{users:this.state.orgInfo,isShowStop:val}),document.getElementById("userList_div"));
		return;
	},
	render:function render()
	{
		var tmp=[];
			return (
                React.createElement("div",{className:"usersdiv"},
                    React.createElement("div",{className:"org_tool_div"},
                        React.createElement("div",{className:"edit_div"},
                            React.createElement("button",{className:"add_button",onClick:this.clickadd},"+部门"),
                            React.createElement("button",{className:"edit_button",onClick:this.clickEdit},"编辑"),
                            React.createElement("button",{className:"isenable_button",onClick:this.clickStop},"停用"),
                            React.createElement("label",{className:"isenable_orglabel"},"显示已停用部门"),
                            React.createElement("input",{id:"orgtree_checkbox",type:"checkbox",onClick:this.clickIsShowStop})
                        )
                    ),
						React.createElement("div",{className:"user_div"},
								React.createElement("div",{ref:"div",className:"org_tree_div",id:"datas_id"},
										React.createElement(Tree,{isStopped:this.state.isStopped,checkedInfo:this.state.orgInfo})
								),
                            React.createElement("div",{id:"orgEdit"})
						),
                    React.createElement("div",{id:"userList_div"},
                        React.createElement("div",{id:"orgList_div_div"},
                            React.createElement("table",{id:"tabid"},
                                React.createElement("tr",{className:"orgListHead"},
                                    React.createElement("th",{className:"offical_div_td1"},"名称"),
                                    React.createElement("th",{className:"offical_div_td3"},"描述")
                                )
                            ))
                     )
                 )
			);
	}
});



//ReactDOM.render(React.createElement(Tree,{url:"jsp/tree.jsp"}),document.body);