var GridUserList= React.createClass({
    getInitialState: function(){
        return{
            list:[],
            userId:"",
            keyValue:this.props.keyValue,
        };
    },
    componentDidMount: function(){
//        $.ajax({
//            url:this.props.url,
//            dataType:'JSON',
//            Type:'POST',
//            data:{cmd:'getUserByorgId',sid:"",orgId:this.props.orgId,key:this.state.keyValue},  //为空查全部
//            success: function(data){
//                console.log(temp);
//                this.setState({list:eval(temp)});
//            }.bind(this),
//            error: function(request, state, error){
//                layer.alert(error);
//            }.bind(this)
//        });
    	var _this = this;
        var userLists=[{id:"1100101",pwd:"****",name:"张国东",position:"经理",org:"执法一部",phone:"12456789521",email:"Email@163.com",apparatusNo:"123455",isStopped:false},{id:"1100102",pwd:"****",name:"张东",position:"执法员",org:"执法一部",phone:"12456789521",email:"Email@163.com",apparatusNo:"123455",isStopped:false},{id:"1100103",pwd:"****",name:"张国",position:"执法员",org:"执法一部",phone:"12456789521",email:"Email@163.com",apparatusNo:"123455",isStopped:true},];
        for(var i=0;i<50;i++){
            userLists.push({id:"11001"+i,pwd:"****",name:"张东",position:"执法员",org:"执法一部",phone:"12456789521",email:"Email@163.com",apparatusNo:"123455",isStopped:false});
        }
        this.setState({list:userLists});
    },
    usertrClick:function(e){
        var targetid = e.target.getAttribute("id");
        var userInfo="";
        this.state.list.map(function(e){
            if(e.id==targetid){
                userInfo=e;
            }
        });
        nsEventBus.eventbus.broadcast("userClick",userInfo);
        this.setState({userId:targetid});
    },
    render:function()
    {
        var userlist=[];
        var styletd1="userInfo_div_tr";
        var usertr_trId="";
        if(typeof(this.state.list)!="undefined"&&this.state.list!=null&&this.state.list!=""){
            for(var i=0;i<this.state.list.length;i++){
                usertr_trId= this.state.list[i].id;
                if(!this.props.ishowStop&&this.state.list[i].isStopped){
                    continue;
                }
                if(this.state.list[i].isStopped){

                    if(this.state.userId==this.state.list[i].id){
                        styletd1="userInfo_div_stp_tr userInfo_div_trid";
                    }else{
                        styletd1="userInfo_div_stp_tr";
                    }
                } else{
                    if(this.state.userId==this.state.list[i].id){
                        styletd1="userInfo_div_tr userInfo_div_trid";
                    }else{
                        styletd1="userInfo_div_tr";
                    }
                }
                var aa = React.createElement("tr",{className:styletd1,onClick:(this.usertrClick)},
                    React.createElement("td",{id:usertr_trId,className:"userInfo_div_td3"},this.state.list[i].name),
                    React.createElement("td",{id:usertr_trId,className:"userInfo_div_td4"},this.state.list[i].position)
                );
                userlist.push(aa);
            }
        }
        return (
            React.createElement("div",{},
                React.createElement("div",{id:"userList_div_div"},
                    React.createElement("table",{id:"tabid"},
                        userlist
                    ))
            )
            );

    }
});

var GridTreeList = React.createClass({

    getInitialState:function(){

       return {
            title:this.props.title,
            orgInfo:"",
            hintsId:this.props.transceiverInfo.id,
            hintsTitle:this.props.transceiverInfo.title,
            addresseeList:this.props.transceiverInfo.addresseeList,
            copyToList:this.props.transceiverInfo.copyToList,
            imgList:this.props.transceiverInfo.imgList,
            fileList:this.props.transceiverInfo.fileList,
           cintent:this.props.transceiverInfo.cintent,
            isSelectUser:this.props.isSelectUser,
            selectUserType:1,
           operationType:this.props.operationType,
           data:[],
        };
    },
    componentWillMount:function(){
    	
    	
    },
    componentDidMount: function(){
        document.getElementById("hreoly-Title").value=this.state.hintsTitle;
        document.getElementById("hreoly-Cintent").value=this.state.cintent;

        var _this=this;
        nsEventBus.eventbus.on("deleteImgClick","deleteImgClick",function(msg){
               layer.alert("删除图片："+msg);
        });
        nsEventBus.eventbus.on("deleteFileClick","deleteImgClick",function(msg){
            layer.alert("删除文件："+msg);
        });
        nsEventBus.eventbus.on("orgClik","orgClik",function(msg){
            _this.state.userInfo="";
            $("#userList_div").empty();
            ReactDOM.render(React.createElement(GridUserList,{orgId:msg.id,ishowStop:false,keyValue:""}),document.getElementById("hm_meandiv_1"));
            _this.setState({orgInfo:msg});
        });
        nsEventBus.eventbus.on("userClick","userClick",function(msg){
            if(!_this.state.isSelectUser){
                return;
            }
            if(_this.state.selectUserType==1){
                var tmp=_this.state.addresseeList;
                tmp.push(msg);
                _this.setState({addresseeList:tmp});
            }else if(_this.state.selectUserType==2){
                var tmp=_this.state.copyToList;
                tmp.push(msg);
                _this.setState({copyToList:tmp});
            }
        });
	   	 nsEventBus.eventbus.on("transfer_tree","transfer_tree",function(data){
	   		 if(data.length==0){
	   			_this.setState({data:[{id:"1101",name:"周润发周总",userList:[{id:"001",name:"周文豪"},{id:"002",name:"王杰"}]}]});	 
	   		 }else{
	   			_this.setState({data:data});
	   		 }
	   	 });
    },
    close: function close() {
    },
    usertrClick: function usertrClick(e) {
        if(!this.state.isSelectUser){
            return;
        }
        var targetid = e.target.getAttribute("id");
        if(this.state.selectUserType==1){
            var i=0;
            this.state.addresseeList.map(function(e){
                if(e.id==targetid){
                   return;
                }
                i++;
            });
            var tmp1= this.state.addresseeList;
            tmp1.splice(i,1);
            this.setState({addresseeList:tmp1});
            
            this.state.data.userList.map(function(e){
                if(e.id==targetid){
                   return;
                }
                i++;
            });
            var data = this.state.data;
            var tmp= this.state.data.userList;
            tmp.splice(i,1);
            this.setState({data:data});
        }else if(this.state.selectUserType==2){
            var i=0;
            this.state.copyToList.map(function(data){
                if(data.id==targetid){
                    return;
                }
                i++;
            });
            var tmp= this.state.copyToList;
            tmp.splice(i,1);
            this.setState({copyToList:tmp});
        }
    },
   
    render:function(){
            var tmp=[];
            var selectUsers=[];
            if(typeof(this.state.stateList)!=undefined&&this.state.stateList!=null){
                this.state.stateList.map(function(data){
                    tmp.push(React.createElement( "option",{className:"ht_option",value:data.stateId},data.stateName));
                });
            }
            var showSelectUser=[];
            var modalstyle="custom-modal1";
            if(this.state.isSelectUser){
                var modalstyle="custom-modal";
                showSelectUser.push( React.createElement("div",{ id: "hm_leftdiv" },
                    React.createElement("div",{ref:"div",className:"org_tree_div",id:"datas_id"},
                        React.createElement(Tree,{isStopped:false,checkedInfo:this.state.orgInfo})
                    )
                ),
                    React.createElement("div",{ id: "hm_meandiv" },
                        React.createElement("p",{id:"userList_head"},
                            React.createElement("label",{className:"userInfo_div_td3"},"姓名"),
                            React.createElement("label",{className:"userInfo_div_td4"},"职位")
                        ),
                        React.createElement("div",{ id: "hm_meandiv_1" })
                    ),
                    React.createElement("div",{ id: "hm_meandiv1" },
                        React.createElement("p",{id:"userList_head"},
                            React.createElement("label",{className:"userInfo_div_td3"},"已绑定")
                        ),
                        React.createElement("div",{id:"select_user_div"},
                            React.createElement("table",{id:"tabid"},
                                selectUsers
                            )
                        )
                    ));
            }
            if(this.state.selectUserType==1){
                for(var i=0;i<this.state.addresseeList.length;i++){
                    var aa = React.createElement("tr",{className:"",onClick:this.usertrClick},
                        React.createElement("td",{id:this.state.addresseeList[i].id,className:"userInfo_div_td3"},this.state.addresseeList[i].name)
                    );
                    selectUsers.push(aa);
                }
                if(this.state.data.length!=0){
                	for(var j=0;j<this.state.data.userList.length;j++){
	                    var bb = React.createElement("tr",{className:"",onClick:this.usertrClick},
	                        React.createElement("td",{id:this.state.data.userList[j].id,className:"userInfo_div_td3"},this.state.data.userList[j].name)
	                    );
	                    selectUsers.push(bb);
                	}
                }
            }else if(this.state.selectUserType==2){
                for(var i=0;i<this.state.copyToList.length;i++){
                    var aa = React.createElement("tr",{id:this.state.copyToList[i].id,className:"",onClick:this.usertrClick},
                        React.createElement("td",{id:this.state.copyToList[i].id,className:"userInfo_div_td3"},this.state.copyToList[i].name)
                    );
                    selectUsers.push(aa);
                }
            }

            var  address="";
            this.state.addresseeList.map(function(data){
                 address=address+data.name+"；";
            });
            var copTo="";
            this.state.copyToList.map(function(data){
                copTo=copTo+data.name+"；";
            });

            return React.createElement(
                "div",{id:"hints_toolbar"},
                React.createElement("div",{id:"hints_reply",bsSize:"large",show:this.state.showModal,keyboard:true,onHide:this.close,animation:true,dialogClassName:modalstyle},
                    React.createElement(
                     "div",
                        { closeButton: true },
                        React.createElement(
                        		  "div",
                            { id: "contained-modal-title-lg" },
                            this.state.title
                        )
                    ) ,
                    React.createElement(
                        "div",
                        { id: "hreoly-modal-div" },
                        showSelectUser,
                        React.createElement("div",{ id: "hm_rightdiv" },
                            React.createElement("p",{className:"hreoly-modal_p",id:"hreoly-modal_p1"},
                                React.createElement("label",{className:"hreoly-modal_label"} ),
                                React.createElement("input",{type:"hidden",id:"hreoly-Title",className:"hreoly-modal_input"})
                            ),
                            React.createElement("p",{className:"hreoly-modal_p"},
                                React.createElement("label",{className:"hreoly-modal_label"}),
                                React.createElement("input",{type:"hidden",className:"hreoly-modal_input",id:"hints_address"})
                            ) ,
                            React.createElement("p",{className:"hreoly-modal_p"},
                                React.createElement("label",{className:"hreoly-modal_label"}),
                                React.createElement("input",{type:"hidden",className:"hreoly-modal_input"})
                            ) ,
                         
                            React.createElement("p",{className:"hreoly-modal_p",id:"hreoly-modal_content"},
                                React.createElement("label",{className:"hreoly-modal_label"}),
                                React.createElement("input",{type:"hidden",id:"hreoly-Cintent",className:"hreoly-modal_input"})
                            ),
                          
                            React.createElement("p",{id:"hreoly-modal_sendp"},
                                React.createElement("input",{type:"hidden",className:"hreoly-modal_p",id:"hreoly-modal_send",onClick:this.sendClick}),
                                React.createElement("label",{id:"hreoly-modal_sendl"} )
                            )
                        )
                    )

                )
            );
        }
    });
