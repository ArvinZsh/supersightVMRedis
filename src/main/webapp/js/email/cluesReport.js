var cluesReport = React.createClass({
    getInitialState: function getInitialState() {
        return { showModal: false,imgList:[]};
    },
    componentDidMount: function(){
        var _this = this;
        nsEventBus.eventbus.on("deleteImgClick","deleteImgClick",function(msg){
            layer.alert("删除图片："+msg);
        });
        nsEventBus.eventbus.on("UploadImage_update","UploadImage_update",function(imgList){
            _this.setState({imgList:imgList});
        });
    },
    submitHints:function(){
        var address= $('.clues_textarea1').val();
        var describe = $('.clues_textarea2').val();
        var informant = $('.clues_input').val();
        var phone = $('.clues_input1').val();
        if(this.state.imgList.length<=0){
            layer.alert('请上传举报照片', {icon:0,area: ['500px', '300px']});
            return;
        }
        if(address.length==0){
            layer.alert('请输入地址', {icon:0,area: ['500px', '300px']});
            return;
        }
        if(address.length>100){
            layer.alert('地址长度不能超过100',{icon:0,area: ['600px', '300px']});
            return;
        }
        if(describe.length==0){
            layer.alert('请输入描述',{icon:0,area: ['500px', '300px']});
            return;
        }
        if(describe.length>100){
            layer.alert('描述长度不能超过100',{icon:0,area: ['600px', '300px']});
            return;
        }
        if(informant.length==0){
            layer.alert('请输入举报人',{icon:0,area: ['500px', '300px']});
            return;
        }
        if(informant.length>20){
            layer.alert('举报人字数不能超过20',{icon:0,area: ['600px', '300px']});
            return;
        }
        if(phone.length==0){
            layer.alert('请输入手机号',{icon:0,area: ['500px', '300px']});
            return;
        }
        var yzphone=/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        if(yzphone.test(phone) == false){
            layer.alert('手机号格式错误',{icon:0,area: ['500px', '300px']});
            return;
        }
        var iList=[];
        this.state.imgList.map(function(data){
            iList.push(data.fileId)
        });
        var creator = getCookie("userName");
        var rules = {"sid":"wechatOnlySid","creator":creator,"imgList":iList,"informant":informant,"address":address,"remark":describe,"mobile":phone,"statusId":"未处理"};
        var tmp = JSON.stringify(rules);
        $.ajax({
            url:common_ip+"hint.do?action=save",
            dataType:'json',
            data:tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success:function(data){
                if(data.successFlag){
                    layer.msg('举报成功',{icon:1});
                    window.location.href="cluesReportSuccess.html";
                }else{
                    layer.alert("举报失败"+data.errorMsg,{icon: 2,area: ['500px', '300px'],title: '错误'});
                }
            }, error:function(request,state,error){
                layer.alert("操作错误",{icon: 2,area: ['500px', '300px'],title: '错误'});
            }
        });

    },
    render: function render() {
        return (
            React.createElement("div",{id:"cluesReport_All"},
                            React.createElement( "div",{id:"imgs_All"},
                                React.createElement("label",{className:"clues_xin"},"*"),
                                React.createElement("label",{id:"clues_photo"},"照 片"),
                                React.createElement("div",{id:"clues_images"},
                                    React.createElement(UploadImage,{imgList:this.state.imgList,successNum:this.state.imgList.length,mulSupported:false})
                                ),
                                React.createElement("label",{id:"clues_tcommon_ips"},"注:最多6张图片")
                            ),
                            React.createElement("div",{className:"clues_address"},
                                React.createElement("label",{className:"clues_xin"},"*"),
                                React.createElement("label",{className:"clues_addressL"},"地 址"),
                                React.createElement("textarea",{cols:"3",row:"50",className:"clues_textarea1"})
                            ),
                            React.createElement("div",{className:"clues_describe"},
                                React.createElement("label",{className:"clues_xin"},"*"),
                                React.createElement("label",{className:"clues_describeL"},"描 述"),
                                React.createElement("textarea",{cols:"3",row:"50",className:"clues_textarea2"})
                            ),
                            React.createElement("div",{className:"clues_informant"},
                                React.createElement("label",{className:""},"举报人"),
                                React.createElement("input",{placeholder:'请输入举报人!', type:"text",className:"clues_input"})
                            ),
                            React.createElement("div",{className:"clues_phone"},
                                React.createElement("label",{className:""},"手机号"),
                                React.createElement("input",{placeholder:'请输入手机号!',type:"text",className:"clues_input1"})
                            ),
                            React.createElement("button",{ id:"clues_submitButton",onClick:this.submitHints},"提交线索")
         )
    );
    }
});
ReactDOM.render(React.createElement(cluesReport), document.getElementById("container"));
