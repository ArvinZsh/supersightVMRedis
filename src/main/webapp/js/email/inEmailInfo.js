// JavaScrcommon_ipt Document
var emailInfo=React.createClass({
    getInitialState: function getInitialState() {
        return {
            emailId:this.props.itemId,
            emailInfo:[],
        };
    },
    componentWillMount:function(){
        var uid = getCookie("uid");
        var sid = getCookie("sid");
        var userName=getCookie("userName");
        var tmp = {"sid":sid,"itemId":this.state.emailId};
        var tmp1  = JSON.stringify(tmp);
        $.ajax({
            url:common_ip+"mail.do?action=getReceiverDetail",
            dataType:'json',
            data:tmp1,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
					
                   this.setState({emailInfo:data.receiverData});
                    document.getElementById("emailInfo-Cintent").innerHTML= this.state.emailInfo.shortContent;
                }else{
                    layer.alert("初始化失败！"+data.errorMsg,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert(error);
                console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    },
    render:function render(){
        var img=[];
        img.push(React.createElement(ShowBigImg,{imgList:this.state.emailInfo.imgList}));
        var file=[];
        if(this.state.emailInfo==""||typeof (this.state.emailInfo)==undefined||this.state.emailInfo==null){
            return(React.createElement(
                "div","获取邮件详细失败...")
            );
        }
        if(this.state.emailInfo==""||typeof (this.state.emailInfo)==undefined||this.state.emailInfo==null){
            this.state.emailInfo.fileList.map(function(data){
                file.push(React.createElement("a",{className:"emailInfo_a",href:data.filePath},data.fileName));
            });
        }
        var linkUrl=[];
        if(this.state.emailInfo.linkUrl!=""&&this.state.emailInfo.linkUrl!=null&&typeof(this.state.emailInfo.linkUrl)!="undefined"){
            linkUrl.push(
                React.createElement("p",{className:"emailInfo-modal_p"},
                    React.createElement("label",{className:"emailInfo-modal_label"},"跳转到" ),
                    React.createElement("a",{className:"",href:this.state.emailInfo.linkUrl},"操作页")
                ) );
        }

       return( React.createElement(
            "div",
            { id: "emailInfo-div" },
            React.createElement("div",{ id: "" },
                React.createElement("p",{className:"emailInfo-modal_p",id:"emainlInfo_head"},"邮件详情"),
                React.createElement("p",{className:"emailInfo-modal_p",id:"emailInfo-modal_p1"},
                    React.createElement("label",{className:"emailInfo-modal_label"},"标题" ),
                    React.createElement("label",{id:"emailInfo-Title",className:"emailInfo-modal_input"},this.state.emailInfo.title)
                ),
                React.createElement("p",{className:"emailInfo-modal_p"},
                    React.createElement("label",{className:"emailInfo-modal_label"},"发件人" ),
                    React.createElement("label",{className:"emailInfo-modal_input",id:"hints_address",onClick:this.addresseeClick},this.state.emailInfo.address.name)
                ) ,
                React.createElement("p",{className:"emailInfo-modal_p"},
                    React.createElement("label",{className:"emailInfo-modal_label"},"抄送" ),
                    React.createElement("label",{className:"emailInfo-modal_input",onClick:this.copyToClick},this.state.emailInfo.copyList)
                ) ,
                React.createElement("div",{id:"emailInfo-modal_div1",className:"emailInfo-modal_p"},
                    React.createElement("label",{className:"emailInfo-modal_label1 emailInfo-modal_label"},"图片" ),
                    React.createElement("div",{id:"emailInfo-modal_img",className:"emailInfo-modal_p"},
                        img
                    )
                ) ,
                linkUrl,
                React.createElement("p",{className:"emailInfo-modal_p",id:"emailInfo-modal_content"},
                    React.createElement("label",{className:"emailInfo-modal_label",id:"emailInfo_cintent"},"内容" ),
                    React.createElement("label",{id:"emailInfo-Cintent",className:"emailInfo-modal_input"})
                ),
                React.createElement("div",{id:"hml_div",className:"emailInfo-modal_p"},
                    React.createElement("label",{id:"hml_adjunct",className:"emailInfo-modal_label1 emailInfo-modal_label"},"附件" ),
                    React.createElement("div",{id:"emailInfo-modal_img",className:"emailInfo-modal_p"},
                        file
                    )
                )
            )
        ));
    }
});
