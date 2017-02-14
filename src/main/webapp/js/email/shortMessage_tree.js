
var shortMessagetree = React.createClass({
    getInitialState:function(){
            return {
                addresseeList:[],
                imgList:[],
                fontState:0,
                isSelectUser:true,
                selectUserType:1,
            };
    },
    componentDidMount: function(){
        var _this = this;
        nsEventBus.eventbus.on("orgClik","orgClik",function(msg){
            // _this.state.userInfo="";
            $("#hm_meandiv_1").empty();
            ReactDOM.render(React.createElement(TUserList,{orgId:msg.orgId,ishowStop:false,keyValue:""}),document.getElementById("hm_meandiv_1"));
            _this.setState({orgInfo:msg});
        });
        nsEventBus.eventbus.on("userClick","userClick",function(msg){
            for(var i=0;i<_this.state.addresseeList.length;i++){
                if(_this.state.addresseeList[i].id==msg.userId){
                    return;
                }
            }
            var tmp=_this.state.addresseeList;
            tmp.push({id:msg.userId,name:msg.userName,mobile:msg.mobile});
            _this.setState({addresseeList:tmp});
            console.log(msg);
            
        });

    },
    usertrClick: function usertrClick(e) {
        if(!this.state.isSelectUser){
            return;
        }
        var targetid = e.target.getAttribute("userId");
        if(this.state.selectUserType==1&&this.state.addresseeList!=null){
            var num=0;
            for(var i=0;i<this.state.addresseeList.length;i++){
                if(this.state.addresseeList[i].userId==targetid){
                    num=i;
                    break;
                }
            }
            var tmp= this.state.addresseeList;
            tmp.splice(num,1);
            this.setState({addresseeList:tmp});
        }else if(this.state.selectUserType==2&&this.state.copyToList!=null){
            var num=0;
            for(var i=0;i<this.state.copyToList.length;i++){
                if(this.state.copyToList[i].userId==targetid){
                    num=i;
                    break;
                }
            }
            var tmp= this.state.copyToList;
            tmp.splice(num,1);
            this.setState({copyToList:tmp});
        }
    },
    sendMessage:function(){
        var _this = this;
        var addressee = $(".hreoly-modal_input").val().substring(0,$(".hreoly-modal_input").val().length-1)//收件人名称

        var phoneNumber = $(".ShortMessage_text2").val();//手机号码
        var text = $(".ShortMessage_textarea").val();//短信内容
        var creator = getCookie("userName");//发送人
        var createTime = new Date().Format("yyyy-MM-dd");//发送时间
		if(addressee.length==0 && phoneNumber.length==0){
			layer.alert('至少填入一个电话号码或者收件人',{icon:5,title:"提示"});
            return;
		}
        var yz =/^((13|15|18)\d{9}\;)*(13|15|18)\d{9}$/;
        if(phoneNumber.length != 0){
            if(yz.test(phoneNumber) == false){
                layer.tips('电话号码必须是数字,单个手机号不加分号,多个手机号码必须用英文分号分隔', '.ShortMessage_text2', {
                    tips: 2
                });
                return;
            }
        }
        if(text.length == 0){
            layer.tips('正文不能为空', '.ShortMessage_textarea', {
                tips: 2
            });
            return;
        }
		phoneNumber = phoneNumber+";";
        var sid = getCookie("sid");
        var rules = {"sid":sid,"creator":creator,"createTime":createTime,"receivers":_this.state.addresseeList,"otherList":phoneNumber,"content":text};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"sms.do?action=send",
            dataType:'json',
            data:tmp,
            type:'POST',
            contentType:"application/x-www-form-urlencoded",
            success:function(data){
                if(data.successFlag){
                    layer.msg('发送成功',{icon:1});
                    if(typeof(addressee) != undefined && addressee != null){
                        window.location.href=encodeURI(encodeURI("ShortMessageSuccess.html?creator="+creator+"&createTime="+createTime+"&receivers="+addressee+"&otherList="+phoneNumber+"&content="+text));
                    }else{
                        window.location.href=encodeURI(encodeURI("ShortMessageSuccess.html?creator="+creator+"&createTime="+createTime+"&receivers="+""+"&otherList="+phoneNumber+"&content="+text));
                    }

                }else{
                    layer.alert("发送失败"+data.errorMsg,{icon: 2,title: '错误'});
                }
            }, error:function(request,state,error){
                layer.alert("操作错误",{icon: 2,title: '错误'});
            }
        });
    },
    handleChange:function(){
            this.setState({fontState:$(".ShortMessage_textarea").val().length});
            if($(".ShortMessage_textarea").val().length>100){
                $(".zifus_text").css("color","red");
            }else{
                $(".zifus_text").css("color","#0093DD");
            }

    },
    render:function() {
        var tmp = [];
        var selectUsers = [];
        if (typeof(this.state.stateList) != undefined && this.state.stateList != null) {
            this.state.stateList.map(function (data) {
                tmp.push(React.createElement("option", {className: "ht_option", value: data.stateId}, data.stateName));
            });
        }
        var showSelectUser = [];

            showSelectUser.push(React.createElement("div", {id: "hm_leftdiv"},
                React.createElement("div", {ref: "div", className: "org_tree_div", id: "datas_id"},
                    React.createElement(Tree, {isStopped: false, checkedInfo: this.state.orgInfo})
                )
                ),
                React.createElement("div", {id: "hm_meandiv"},
                    React.createElement("div", {id: "hm_meandiv_1"})
                ),
                React.createElement("div", {id: "hm_meandiv1"},
                    React.createElement("div", {id: "select_user_div"},
                        React.createElement("table", {id: "tabid"},
                            selectUsers
                        )
                    )
                ));
        if (typeof (this.state.addresseeList) != "undefined") {
            for (var i = 0; i < this.state.addresseeList.length; i++) {
                var aa = React.createElement("tr", {className: "", onClick:this.usertrClick},
                    React.createElement("td", {
                        id: this.state.addresseeList[i].userId,
                        className: "userInfo_div_td3"
                    }, this.state.addresseeList[i].name)
                )
                selectUsers.push(aa);
            }
        }
        var  address="";
        if(this.state.addresseeList!=null&&this.state.addresseeList!=""){
            this.state.addresseeList.map(function(data){
                address=address+data.name+"；";
            });
        }
        return React.createElement("div",{id:"shortMessagetree"},
				React.createElement(
				"div",{id:"hints_toolbar"},
				React.createElement("div",{id:"hints_reply",dialogClassName:"patrol_modal"},
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
						{ id: "hreoly-modal-div"},
						showSelectUser
					)
				),
				
						React.createElement("div",{id:"ShortMessage_div2"},
							React.createElement("div",{className:"ShortMessage_div_title3"},"短信"),
							React.createElement("div",{className:"ShortMessage_div_title4"},"内部收件人")
						),
						React.createElement("div",{className:"ShortMessage_userTextdiv"}),
						React.createElement("div",{className:"ShortMessage_userTextEditdiv"},
							React.createElement("div",{className:"ShortMessage_textDiv1"},
								React.createElement("div",{className:"ShortMessage_label1"},"内部收件人"),
								React.createElement("input",{className:"hreoly-modal_input",id:"hints_address",placeholder:"请输入内部收件人",onClick:this.addresseeClick,value:address})
							),
							React.createElement("div",{className:"ShortMessage_textDiv2"},
								React.createElement("div",{className:"ShortMessage_label2"},"其他手机号"),
								React.createElement("input",{type:"text",className:"ShortMessage_text2",onChange:this.phoneUpdate,placeholder:"请输入手机号，多个手机号用英文分号分隔..."})
							),
							React.createElement("div",{className:"ShortMessage_textDiv3"},
								React.createElement("div",{className:"ShortMessage_label3"},"内容"),
								React.createElement("textarea",{wrap:"virtual",onChange:this.handleChange ,cols:"3",row:"70",className:"ShortMessage_textarea"}),
								React.createElement("div",{className:"zifus_text"},this.state.fontState+"/100字")
							),
							React.createElement("button",{className:"ShortMessage_button",onClick:this.sendMessage},"发送")
						)
					),
					React.createElement("p",{className:"hreoly-modal_p",id:"hreoly-modal_content"},
						React.createElement("input",{type:"hidden",id:"hreoly-Cintent",className:"hreoly-modal_input"})
				
		));
    }
});
