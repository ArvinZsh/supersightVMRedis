// JavaScrcommon_ipt Document
var Modal = window.Modal || ReactBootstrap.Modal;
var TUserList= React.createClass({
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
        var userLists=[{id:"1100101",pwd:"****",name:"张国东",position:"经理",org:"执法一部",phone:"12456789521",email:"Email@163.com",apparatusNo:"123455",isStopped:false},{id:"1100102",pwd:"****",name:"张东",position:"执法员",org:"执法一部",phone:"12456789521",email:"Email@163.com",apparatusNo:"123455",isStopped:false},{id:"1100103",pwd:"****",name:"张国",position:"执法员",org:"执法一部",phone:"12456789521",email:"Email@163.com",apparatusNo:"123455",isStopped:true},];
        for(var i=0;i<50;i++){
            userLists.push({id:"11001"+i,pwd:"****",name:"张东",position:"执法员",org:"执法一部",phone:"12456789521",email:"Email@163.com",apparatusNo:"123455",isStopped:false});
        }
        console.log("UserList:"+this.props.orgId);
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
                )
                userlist.push(aa);
            }
        }
        return (
            React.createElement("div",{},
                React.createElement("div",{id:"userList_div_div"},
                    React.createElement("table",{id:"tabid"},
                        userlist
                    )
                )
            )
        );

    }
});

var Messagesuccess = React.createClass({
    getInitialState: function(){
        return{
            list:[]
        };
    },
    componentDidMount: function(){
    	
    },
    usertrClick:function(e){
       
    },
    render:function()
    {
        return (
            React.createElement("div",{id:"message_success_div"},
            	React.createElement("div",{id:"message_success_ddiv1"},
            			React.createElement("label",{},"已发送"),
            			React.createElement("span",{},"状态页")
            	),
            	React.createElement("div",{id:"message_success_ddiv2"},
            			React.createElement("div",{id:"message_success_dddiv1"},
		            			React.createElement("label",{},"发送时间:"),
		            			React.createElement("span",{},"222222222")
            			),
            			React.createElement("div",{id:"message_success_dddiv2"},
		            			React.createElement("label",{},"接收人:"),
		            			React.createElement("span",{},"gewagewag")
            			),
            			React.createElement("div",{id:"message_success_dddiv3"},
		            			React.createElement("label",{},"其他手机:"),
		            			React.createElement("span",{},"个挖个网")
		            	),
            			React.createElement("div",{id:"message_success_dddiv4"},
            					React.createElement("label",{},"短信内容:"),
            					React.createElement("span",{className:"message_context"},"222222热瓦特挖土222")
            			),
            			React.createElement("div",{id:"message_success_dddiv5"},
		            			React.createElement("label",{},"温馨提示:"),
		            			React.createElement("span",{},"个挖个挖")
            			)
            	)
            )
        );

    }
});

var Message = React.createClass({
    getInitialState:function(){
             if(typeof(this.props.transceiverInfo)==undefined||this.props.transceiverInfo==null||this.props.transceiverInfo==""){
                 return {
                     title:this.props.title,
                     showModal:this.props.showModal,
                     orgInfo:"",
                     hintsId:"",
                     hintsTitle:"",
                     addresseeList:[],
                     copyToList:[],
                     imgList:[],
                     fileList:[],
                     cintent:"",
                     isSelectUser:this.props.isSelectUser,
                     selectUserType:1,
                     operationType:this.props.operationType,
                     limitlength:0
                 };
             }  else{
                   return {
                        title:this.props.title,
                        showModal:this.props.showModal,
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
                       limitlength:0
                    };
             }
    },

    componentDidMount: function(){
        document.getElementById("message_thereccommon_ipient").value=this.state.hintsTitle;
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
            ReactDOM.render(React.createElement(TUserList,{orgId:msg.id,ishowStop:false,keyValue:""}),document.getElementById("hm_meandiv_1"));
            _this.setState({orgInfo:msg});
        });
        nsEventBus.eventbus.on("userClick","userClick",function(msg){
        	if(!_this.state.isSelectUser){
                return;
            }
            if(_this.state.selectUserType==1){
                for(var i=0;i<_this.state.addresseeList.length;i++){
                    if(_this.state.addresseeList[i].id==msg.id){
                        return;
                    }
                }
                var tmp=_this.state.addresseeList;
                tmp.push(msg);
                _this.setState({addresseeList:tmp});
            }else if(_this.state.selectUserType==2){
                for(var i=0;i<_this.state.copyToList.length;i++){
                    if(_this.state.copyToList[i].id==msg.id){
                        return;
                    }
                }
                var tmp=_this.state.copyToList;
                tmp.push(msg);
                _this.setState({copyToList:tmp});
            }
        });
    },
    close: function close() {
        this.setState({ showModal: false });
    },
    usertrClick: function usertrClick(e) {
        if(!this.state.isSelectUser){
            return;
        }
        var targetid = e.target.getAttribute("id");
        if(this.state.selectUserType==1&&this.state.addresseeList!=null){
            var i=0;
            this.state.addresseeList.map(function(e){
                if(e.id==targetid){
                   return;
                }
                i++;
            });
            var tmp= this.state.addresseeList;
            tmp.splice(i,1);
            this.setState({addresseeList:tmp});
        }else if(this.state.selectUserType==2&&this.state.copyToList!=null){
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
    //收件人点击事件
    addresseeClick:function addresseeClick(e){
          this.setState({selectUserType:1});
    },
    //抄送点击事件
    copyToClick:function copyToClick(e){
        this.setState({selectUserType:2});
    },
    //发送点击事件
    sendClick:function sendClick(){
        var hintsTitle = document.getElementById("message_thereccommon_ipient").value.trim();
        var cintent = document.getElementById("hreoly-Cintent").value.trim();
        var jsr = $("#message_thereccommon_ipient").val().trim();
        var phones = $("#Othermobilephones").val().trim();
        var context = $("#hreoly-Cintent").val().trim();
        if(jsr==""){
            document.getElementById("message_state_tishi").innerHTML="请输入接收人";
            return;
        }
        if(phones==""){
            document.getElementById("message_state_tishi").innerHTML="请输入其他手机";
            return;
        }
        if(context==""){
            document.getElementById("message_state_tishi").innerHTML="请选择内容";
            return;
        }
        document.getElementById("hreoly-modal_sendl").innerHTML="";
        var tmp={id:this.state.hintsId,cintent:cintent,hintsTitle:hintsTitle,address:this.state.address,fileList:this.state.fileList,imgList:this.state.imgList,copyTo:this.state.copyToList}
        /**$.ajax({
         url:this.props.url,
         dataType:'JSON',
         Type:'POST',
         data:{cmd:this.state.operationType,SessionId:this.state.sid,id:this.state.hintsId,cintent:cintent,hintsTitle:hintsTitle,address:this.state.address,fileList:this.state.fileList,imgList:this.state.imgList,copyTo:this.state.copyToList},
         success: function(data){
         console.log(temp);
         this.setState({workInfos:eval(temp)});
         onGotUserInfo();

         }.bind(this),
         error: function(request, state, error){
         layer.alert(error);
         console.error(this.props.url, state, error.toString());
         }.bind(this)
         }); */

        this.setState({ showModal: false });
    },
    hanOnXianZhi:function(even){
    	this.setState({limitlength:$("#hreoly-Cintent").val().length});
    	$("#hreoly-Cintent").val($("#hreoly-Cintent").val().substr(0,99));
//    	$("#message_thereccommon_ipient").text();	
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
//                        React.createElement("p",{id:"userList_head"}
//                            React.createElement("label",{className:"userInfo_div_td3"},"姓名"),
//                            React.createElement("label",{className:"userInfo_div_td4"},"职位")
//                        ),
                        React.createElement("div",{ id: "hm_meandiv_1" })
                    )
                    );
            }
            if(this.state.selectUserType==1&&this.state.addresseeList!=null){
                for(var i=0;i<this.state.addresseeList.length;i++){
                    var aa = React.createElement("tr",{className:"",onClick:this.usertrClick},
                        React.createElement("td",{id:this.state.addresseeList[i].id,className:"userInfo_div_td3"},this.state.addresseeList[i].name)
                    )
                    selectUsers.push(aa);
                }
            }else if(this.state.selectUserType==2&&this.state.copyToList!=null){
                for(var i=0;i<this.state.copyToList.length;i++){
                    var aa = React.createElement("tr",{id:this.state.copyToList[i].id,className:"",onClick:this.usertrClick},
                        React.createElement("td",{id:this.state.copyToList[i].id,className:"userInfo_div_td3"},this.state.copyToList[i].name)
                    )
                    selectUsers.push(aa);
                }
            }

            var  address="";
            var _this = this;
            if(this.state.addresseeList!=null&&this.state.addresseeList!=""){
                this.state.addresseeList.map(function(data,index){
                	console.log();
                	if(_this.state.addresseeList.length-1 == index){
                		address=address+data.name;
                	}else{
                		address=address+data.name+",";
                	}
                });
            }
            var copTo="";
            if(this.state.copyToList!=null&&this.state.copyToList!=""){
                this.state.copyToList.map(function(data){
                    copTo=copTo+data.name+",";
                });
            }

            return React.createElement(
                "div",{id:"hints_toolbar"},
                    React.createElement(
                        "div",
                        { id: "hreoly-modal-div" },
                        React.createElement("div",{id:"message_content_div"},
                        		React.createElement("div",{className:"message_cation_ddiv1"},"请选择内部收件人"),
                        		React.createElement("div",{className:"message_cation_ddiv2"},"*单击即可添加到右侧 【内部收件人】 栏"),
                        		React.createElement("div",{className:"message_content_ddiv1"},showSelectUser)
                        ),
                        React.createElement("div",{id:"message_beenselected_fdiv"},
                        		React.createElement("div",{ id: "message_beenselected_div2" },"短信"),
		                        React.createElement("div",{ id: "message_beenselected_div" },
		                                React.createElement("p",{id:"message_beenselected_p"},
		                                    React.createElement("label",{className:"message_beenselected_label"},"内部收件人")
		                                ),
		                                React.createElement("div",{id:""},
		                                    React.createElement("table",{id:"message_beenselected_table"},
		                                        selectUsers
		                                    )
		                                )
		                        ),
		                        React.createElement("div",{ id: "hm_rightdiv" },
		                            React.createElement("p",{className:"hreoly-modal_p",id:"hreoly-modal_p1"},
		                                React.createElement("label",{className:"hreoly-modal_label"},"*接收人" ),
		                                React.createElement("input",{id:"message_thereccommon_ipient",className:"hreoly-modal_input",onClick:this.addresseeClick,value:address})
		                            ),
		                            React.createElement("p",{className:"hreoly-modal_p"},
		                                React.createElement("label",{className:"hreoly-modal_label"},"其他手机" ),
		                                React.createElement("input",{id:"Othermobilephones",className:"hreoly-modal_input",onClick:this.copyToClick,placeholder:"请手工输入手机号,多个手机号用逗号分隔"})
		                            ) ,
		                            React.createElement("p",{className:"hreoly-modal_p",id:"hreoly-modal_content"},
		                                React.createElement("label",{className:"hreoly-modal_label"},"内容" ),
		                                React.createElement("textarea",{id:"hreoly-Cintent",className:"hreoly-modal_input",onChange:this.hanOnXianZhi}),
		                                React.createElement("span",{className:"message_limitlength_cla"},this.state.limitlength+"/100")
		                            ),
		                            React.createElement("p",{id:"hreoly-modal_sendp"},
		                                React.createElement("button",{className:"hreoly-modal_p",id:"hreoly-modal_send",onClick:this.sendClick},"发 送" ),
		                                React.createElement("p",{id:"message_state_tishi"} )
		                            )
		                        )
		                  )
//                        React.createElement(Messagesuccess,{})
                    )
            );
        }
    });
//ReactDOM.render(React.createElement(Transceiver,{title:"发文——回复",showModal:true,isSelectUser:true}),document.body)