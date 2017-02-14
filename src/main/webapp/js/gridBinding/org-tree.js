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
//var OrgEdit = React.createClass({
//
//    getInitialState:function getInitialState(){
//        var name="";
//        var describe="" ;
//        layer.alert(this.props.operationType);
//        if(this.props.operationType=="updateOrg"){
//               name= this.props.data.bname;
//               describe=this.props.data.describe;
//               layer.alert(name+":"+describe);
//        }
//        return {
//            orgName:name,                               //编辑值，Change状态时为传值，Add时为空
//            orgDescribe:describe,
//        };
//    },
//    componentDidMount: function(){
//        document.getElementById("orgEdit_name").value=this.state.orgName;
//        document.getElementById("orgEdit_describe").value=this.state.orgDescribe;
//    },
//    //确定点击
//    okClick:function getInitialState(){
//        var name = document.getElementById("orgEdit_name").value;
//        var describe = document.getElementById("orgEdit_describe").value;
//        if(name==""){
//            document.getElementById("orgEdit_p").innerText="请输入部门名";
//            return;
//        }
//        /**$.ajax({
//         url:this.props.url,
//         datatype:'json',
//         type:'post',
//         data:{cmd:this.props.operType,Id:this.props.id,orgName:name,orgDescribe:describe},
//         success: function(data){
//         this.setState({data:(eval(data))});
//         }.bind(this),
//         error: function(request, state, error){
//         layer.alert(error);
//         console.error(this.props.url, state, error.toString());
//         }.bind(this)
//         });*/
//        nsEventBus.eventbus.broadcast("orgEditOk",'');
//    },
//    //取消点击
//    noClick:function getInitialState(){
//        nsEventBus.eventbus.broadcast("orgEditNo",'');
//    },
//
//	render:function render(){
//        return React.createElement("div",{className:""},
//            React.createElement("h2",{className:"orgEdit_title"},"部门编辑"),
//            React.createElement("div",{className:"orgEdit"},
//                React.createElement("label",{className:"orgEdit_label"},"部门名:"),
//                React.createElement("input",{type:"text",id:"orgEdit_name",className:"org_input",ref: "find",placeholder: "部门名"})
//            ),
//            React.createElement("div",{className:"orgEdit"},
//                React.createElement("label",{className:"orgEdit_label"},"部门描述:"),
//                React.createElement("input",{type:"text",id:"orgEdit_describe",className:"org_input",ref: "find",placeholder: "部门描述"})
//            ) ,
//            React.createElement("div",{className:"orgEdit"},
//                React.createElement(Button,{id:"orgedit_no",className:"add_button",onClick:this.noClick},"取消"),
//                React.createElement(Button,{className:"edit_button",onClick:this.okClick},"确定")
//            ),
//            React.createElement("p",{id:"orgEdit_p"})
//        )
//    }
//});

var TreeNode = React.createClass({
	getInitialState:function(){
		return {bumen:this.props.bumen,collapsed:false,listCount:this.props.listCount,isStopped:this.props.isStopped};
    },
    handleClick:function(event){
        this.setState({collapsed:!this.state.collapsed});
         nsEventBus.eventbus.broadcast("orgClik",this.state.bumen);
        //yanse(event);
    },
	render:function(event){
		var talltree="";
		var tubiao = "";
		var tree_stop = "";
        var tree_checked="";

        if(typeof(this.props.checkedInfo)!="undefined"&&this.props.checkedInfo!=null&&this.props.checkedInfo.bname==this.state.bumen.bname){
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
					this.props.data.map(function(bumen,index){
                        if(!isstop&&bumen.isStopped){
                            return;
                        }
						return (
							React.createElement(TreeNode,{bumen:bumen,bname:bumen.bname,uname:bumen.uname,listCount:bumen.list.length,isStopped:bumen.isStopped,checkedInfo:_checkInfo},
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
            data:array
        };
    },
    componentDidMount: function(){
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


    render:function()
    {
        this.state.list.splice(0,this.state.list.length);
        var cc=this.props.users.bname;
        var dd=this.props.users.describe;
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
                     if(this.props.users.list[i].isStopped){
                         styletd1="orgInfo_div_stp_td1";
                         styletd2="orgInfo_div_stp_td3";
                     }
                     var aa = React.createElement("tr",{className:""},
                         React.createElement("td",{className:styletd1},this.props.users.list[i].bname),
                         React.createElement("td",{className:styletd2},this.props.users.list[i].describe)
                     )
                     this.state.list.push(aa);
                 }
            }
        if(this.props.users.isStopped){
            styletd1="orgInfo_div_stp_td1";
            styletd2="orgInfo_div_stp_td3";
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

var orgEdit = React.createClass({
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
            ReactDOM.render(React.createElement(OrgList,{users:msg}),document.getElementById("userList_div"));
        });
        nsEventBus.eventbus.on("orgEditOk","orgEditOk",function(msg){
            _this.setState({isShowEdit:_isShow});
        });
        nsEventBus.eventbus.on("orgEditNo","orgEditNo",function(msg){
            _this.setState({isShowEdit:_isShow});
        });
	},
    //点击添加
	clickadd:function(event){
        this.setState({isShowEdit:!this.state.isShowEdit});
        this.state.operType="addOrg";
		return
	},
    // 点击编辑
    clickEdit:function(event){
        this.state.operType="updateOrg";
        this.setState({isShowEdit:!this.state.isShowEdit});
        return
    },
    //点击停用
    clickStop:function(event){
        console.log(this.state.orgInfo);
        if(typeof(this.state.orgInfo)=="undefined"||this.state.orgInfo==null||this.state.orgInfo==""){
            layer.alert("请选择停用部门")
            return;
        }
        if(this.state.orgInfo.isStopped){
            layer.alert("当前部门已是停用状态")
            return;
        }
        console.log("stoporg:"+this.state.orgInfo.id)
        return
    },
    //点击是否显示停用
	clickIsShowStop:function(event){
		var va = document.getElementById("orgtree_checkbox").checked;
        this.setState({isStopped:va});
		return
	},
	render:function render()
	{
		var tmp=[];
		if(this.state.isShowEdit){
			tmp.push(React.createElement("div",{id:"orgEdit"},React.createElement("div",{id:"orgEdit_div"},
                React.createElement(OrgEdit,{data:this.state.orgInfo,operationType:this.state.operType})
            )));
			}
			return (
                React.createElement("div",{className:"usersdiv"},
                    React.createElement("div",{className:"org_tool_div"},
                        React.createElement("div",{className:"edit_div"},
                            React.createElement(Button,{className:"add_button",onClick:this.clickadd},"＋部门"),
                            React.createElement(Button,{className:"edit_button",onClick:this.clickEdit},"编辑"),
                            React.createElement(Button,{className:"isenable_button",onClick:this.clickStop},"停用"),
                            React.createElement("label",{className:"isenable_orglabel"},"显示已停用部门"),
                            React.createElement("input",{id:"orgtree_checkbox",type:"checkbox",onClick:this.clickIsShowStop})
                        )
                    ),
						React.createElement("div",{className:"user_div"},
								React.createElement("div",{ref:"div",className:"org_tree_div",id:"datas_id"},
										React.createElement(Tree,{url:"jsp/tree.jsp",isStopped:this.state.isStopped,checkedInfo:this.state.orgInfo})
								),
								tmp
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