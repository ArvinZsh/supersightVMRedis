var SuperTreeNode = React.createClass({
	getInitialState:function(){
		return {bumen:this.props.bumen,collapsed:false,listCount:this.props.listCount,isShowHide:this.props.isShowHide};
    },
    handleClick:function(event){
         nsEventBus.eventbus.broadcast("treeView."+this.props.pid+".selectClick",this.state.bumen);
         this.setState({collapsed:!this.state.collapsed});
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
				if(this.state.isShowHide){
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
				if(this.state.isShowHide){
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
			if(this.state.isShowHide){
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

var SuperTreeView = React.createClass({
	render: function(){
        var isstop= this.props.isShowHide;
        var _checkInfo=this.props.checkedInfo;
        var tmp=[];
        var _this=this;
		return(
				React.createElement("div",{id:"treedivid"},
                    this.props.data.map(function(bumen,index){
                        if(!isstop&&bumen.isShowHide){
                            return;
                        }else{
                           return(
                               React.createElement(SuperTreeNode,{pid:_this.props.pid,bumen:bumen,bname:bumen.bname,uname:bumen.uname,listCount:bumen.list.length,isShowHide:bumen.isShowHide,checkedInfo:_checkInfo},
                                   React.createElement(SuperTreeView,{pid:_this.props.pid,data:bumen.list,isShowHide:isstop,checkedInfo:_checkInfo})
                               )
                               );
                        }
                     })
				)
		);
	}
});

var SuperTreeMain = React.createClass({
    getInitialState: function(){
        var _this=this;
        nsEventBus.eventbus.on("treeView."+this.props.pid+".selectClick","treeView."+this.props.pid+".SelectClick",function(data){
            _this.setState({checkedInfo:data});
        });
        return{
            data:[],
            isShowHide:false,
            checkedInfo:"",

        };
    },
    componentDidMount: function(){
        //var array = [{"bname":"部门0","id":"7a8a1469-5a90-4b64-8850-c6c0dc43d4c2","isStopped":false,"isExpand":false,"describe":"部门描述","list":[{"bname":"部门0-0","id":"01620dae-75d9-4ece-867e-cc57281434ad","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门0-1","id":"4d25162f-ccbe-47fd-a153-5f85345605f6","isStopped":false,"isExpand":true,"describe":"部门描述","list":[{"bname":"部门0-1-1","id":"6f227f31-4793-41c3-a37a-624f9401fdab","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]}]},{"bname":"部门0-2","id":"6f227f31-4793-41c3-a37a-624f9401fdab","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门0-3","id":"a0adafaa-3e17-446d-8de7-da0809fc9ee3","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门0-4","id":"0301c648-15a6-446a-9ebd-2f038ab0ac8b","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门0-5","id":"42ea5f4c-82dc-4613-b621-053579206fde","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]}]},{"bname":"部门1","id":"ef806fd7-58f8-4e72-ad9e-87b4fb80c3c3","isStopped":true,"isExpand":false,"describe":"部门描述","list":[{"bname":"部门1-0","id":"71ec710d-8287-4cb0-bc0a-72b6910b91d8","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门1-1","id":"667c1931-b300-41df-a905-9166956b0c43","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门1-2","id":"a35aa468-aab8-435a-a6d8-874a50ef37c9","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门1-3","id":"b98c0f52-a994-4454-86b9-3f65ed29d6b9","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门1-4","id":"504b53ea-fa0d-4b40-a9cd-5751b4f8862e","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门1-5","id":"41de74bc-612a-4775-9688-dd205c3fbb73","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]}]},{"bname":"部门2","id":"91bedf11-09c9-4fd6-a166-c10eb928fbaa","isExpand":false,"describe":"部门描述","list":[{"bname":"部门2-0","id":"874a94f4-7447-437e-b24e-4c8a9a681c74","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门2-1","id":"48e4ab26-38ce-4de4-ae0b-84c140eb1850","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门2-2","id":"f6ad40bd-105c-4ff3-a14a-62d3e2d15548","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门2-3","id":"f780c1d7-7292-4e6b-94fe-fbb39178335a","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门2-4","id":"34526014-9fb1-45b3-8344-a0bb9802faf9","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门2-5","id":"b860425c-1921-4382-9994-54014db4f138","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]}]},{"bname":"部门3","id":"b8c41a3d-c168-4b54-afae-0857b5db7076","isExpand":false,"describe":"部门描述","list":[{"bname":"部门3-0","id":"c11e7a32-a398-448a-a011-4ddcde2cc622","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门3-1","id":"24e46e4f-1d7e-4bdd-b691-e5020b43b93a","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门3-2","id":"26f46dab-bfd3-4f3f-b58b-0cc99dd35051","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门3-3","id":"dd12c177-f937-4501-9df3-5ed6d23d7cb5","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门3-4","id":"94f268a7-e7d7-4b05-baf9-a8620bc9ff3c","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门3-5","id":"1385144b-10d9-45ea-8d7c-bbb2ac7da6b7","isStopped":false,"isExpand":true,"describe":"部门描述","list":[]}]},{"bname":"部门4","id":"4230dcbd-265c-4496-ae95-a1a61d12f1cb","isStopped":true,"isExpand":false,"describe":"部门描述","list":[{"bname":"部门4-0","id":"53704bea-4268-4fe0-a470-e6ba6e1f0c2c","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门4-1","id":"eebe3a76-fcb1-48db-a8e9-6ceb01db6749","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门4-2","id":"2cbbd31b-67b0-4142-9264-8884fc162773","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门4-3","id":"c844ee07-7c96-470e-92fc-3e66c72142f5","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门4-4","id":"0581f793-4885-49e0-b1bf-67bbf060240a","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门4-5","id":"4a616b0f-ddcc-4c5e-9979-73243433c65b","isStopped":true,"isExpand":true,"describe":"部门描述","list":[]}]}]
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
                    layer.alert("加载数据失败！"+data.errorMsg,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },
    render:function()
    {
        if(this.state.data != ""&&typeof(this.state.data)!=undefined&&this.state.data !=null){
            return (
                React.createElement("div",{id:this.props.pid+"_treeDiv"},
                    React.createElement(SuperTreeView,{pid:this.props.pid,data:this.state.data,isShowHide:this.state.isShowHide,checkedInfo:this.state.checkedInfo})
                )
                );
        }else{
            return (
                React.createElement("div",null)
                );
        }
    }
});
//var array = [{"bname":"部门0","isShowHide":false,"list":[{"bname":"部门0-0","isShowHide":false,"list":[]},{"bname":"部门0-1","id":"4d25162f-ccbe-47fd-a153-5f85345605f6","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[{"bname":"部门0-1-1","id":"6f227f31-4793-41c3-a37a-624f9401fdab","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]}]},{"bname":"部门0-2","id":"6f227f31-4793-41c3-a37a-624f9401fdab","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门0-3","id":"a0adafaa-3e17-446d-8de7-da0809fc9ee3","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门0-4","id":"0301c648-15a6-446a-9ebd-2f038ab0ac8b","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门0-5","id":"42ea5f4c-82dc-4613-b621-053579206fde","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]}]},{"bname":"部门1","id":"ef806fd7-58f8-4e72-ad9e-87b4fb80c3c3","isShowHide":true,"isExpand":false,"describe":"部门描述","list":[{"bname":"部门1-0","id":"71ec710d-8287-4cb0-bc0a-72b6910b91d8","isShowHide":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门1-1","id":"667c1931-b300-41df-a905-9166956b0c43","isShowHide":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门1-2","id":"a35aa468-aab8-435a-a6d8-874a50ef37c9","isShowHide":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门1-3","id":"b98c0f52-a994-4454-86b9-3f65ed29d6b9","isShowHide":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门1-4","id":"504b53ea-fa0d-4b40-a9cd-5751b4f8862e","isShowHide":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门1-5","id":"41de74bc-612a-4775-9688-dd205c3fbb73","isShowHide":true,"isExpand":true,"describe":"部门描述","list":[]}]},{"bname":"部门2","id":"91bedf11-09c9-4fd6-a166-c10eb928fbaa","isExpand":false,"describe":"部门描述","list":[{"bname":"部门2-0","id":"874a94f4-7447-437e-b24e-4c8a9a681c74","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门2-1","id":"48e4ab26-38ce-4de4-ae0b-84c140eb1850","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门2-2","id":"f6ad40bd-105c-4ff3-a14a-62d3e2d15548","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门2-3","id":"f780c1d7-7292-4e6b-94fe-fbb39178335a","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门2-4","id":"34526014-9fb1-45b3-8344-a0bb9802faf9","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门2-5","id":"b860425c-1921-4382-9994-54014db4f138","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]}]},{"bname":"部门3","id":"b8c41a3d-c168-4b54-afae-0857b5db7076","isExpand":false,"describe":"部门描述","list":[{"bname":"部门3-0","id":"c11e7a32-a398-448a-a011-4ddcde2cc622","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门3-1","id":"24e46e4f-1d7e-4bdd-b691-e5020b43b93a","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门3-2","id":"26f46dab-bfd3-4f3f-b58b-0cc99dd35051","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门3-3","id":"dd12c177-f937-4501-9df3-5ed6d23d7cb5","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门3-4","id":"94f268a7-e7d7-4b05-baf9-a8620bc9ff3c","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门3-5","id":"1385144b-10d9-45ea-8d7c-bbb2ac7da6b7","isShowHide":false,"isExpand":true,"describe":"部门描述","list":[]}]},{"bname":"部门4","id":"4230dcbd-265c-4496-ae95-a1a61d12f1cb","isShowHide":true,"isExpand":false,"describe":"部门描述","list":[{"bname":"部门4-0","id":"53704bea-4268-4fe0-a470-e6ba6e1f0c2c","isShowHide":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门4-1","id":"eebe3a76-fcb1-48db-a8e9-6ceb01db6749","isShowHide":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门4-2","id":"2cbbd31b-67b0-4142-9264-8884fc162773","isShowHide":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门4-3","id":"c844ee07-7c96-470e-92fc-3e66c72142f5","isShowHide":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门4-4","id":"0581f793-4885-49e0-b1bf-67bbf060240a","isShowHide":true,"isExpand":true,"describe":"部门描述","list":[]},{"bname":"部门4-5","id":"4a616b0f-ddcc-4c5e-9979-73243433c65b","isShowHide":true,"isExpand":true,"describe":"部门描述","list":[]}]}]
//ReactDOM.render(React.createElement(SuperTreeMain,{pid:"treeId",data:array,width:200,height:60}),document.getElementById('container'));