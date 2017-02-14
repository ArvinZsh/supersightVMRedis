'use strict';

var Input   = window.Input || ReactBootstrap.Input;
var Table   = window.Table || ReactBootstrap.Table;
var Image   = window.Image || ReactBootstrap.Image;

var UploadFileRow = React.createClass({
    displayName:"UploadResultRow",

    getInitialState:function getInitialState(){
        return {
            path:"",
        };
    },

    handleCopyClick:function handleCopyClick(){
        if(event.clcommon_ipboardData){
            return event.clcommon_ipboardData.setData("text/plain", this.props.imgInfo.path);
        }else if(window.clcommon_ipboardData){
            window.clcommon_ipboardData.setData('text',this.props.imgInfo.path);
        }else{
            document.execCommand("Copy","true",this.props.imgInfo.path);
            layer.alert("暂不支持一键复制，请选择路径按Ctrl+C进行复制！");
        }
    },
    //删除点击事件
    deleteClick:function deleteClick(e){
        var _this = this;
        var sid = getCookie("sid");
        var tmp = {"sid":sid, "fileId":this.props.imgInfo.fileId};
        var tmp1  = JSON.stringify(tmp);
		layer.confirm('您确定要删除该文件？', {
                btn: ['确定','取消'] //按钮
            }, function() {
				$.ajax({
					url:common_ip+"file.do?action=deleteFile",
					dataType:'json',
					data:tmp1,
					type:'post',
					contentType:"application/x-www-form-urlencoded",
					success: function(data){
						if(data.successFlag){
							layer.msg("删除成功！",{icon:1});
							nsEventBus.eventbus.broadcast("deleteFileClick",_this.props.imgInfo);
						}else{
							layer.alert(data.errorMsg,{icon:2,title:"错误"});
						}
					}.bind(this),
					error: function(request, state, error){
						layer.alert(error);
						console.error(this.props.url, state, error.toString());
					}.bind(this)
				});
		});
    },

    render:function render(){
        var tmp=[];
        var tmp1=[];
        if(!this.props.isUploaded){
            tmp.push(React.createElement(
                "label",
                {className:"UploadImageTr_label"}
            ));
        }else{
            tmp.push(
                React.createElement(
                    "label",
                    {className:"UploadImageTr_labelsucc"}
                )

            );
            tmp1.push( React.createElement(
                "label",
                {id:"",className:"UploadImageTr_label1",onClick:this.deleteClick},"删除"
            ));
        }
        return React.createElement(
            "div",
            {className:"UploadFileTr_div"},
            React.createElement("label",{id:"uploadfile_con"},
                React.createElement(
                    "a",
                    {id:this.props.imgInfo.fileId,className:"UploadImageTd_a",href:this.props.imgInfo.filePath},this.props.imgInfo.fileName
                ),
                tmp
            ),
            tmp1
        );
    }

});

var UploadFile = React.createClass({
    displayName:"UploadImage",

    getInitialState:function getInitialState(){
        return {
            UploadImg:this.props.fileList,
            selectedPath:null,
            isfull:false,
            successNum:this.props.successNum,
        };
    },

    componentWillMount:function componentWillMount(){
        var _this=this;
        nsEventBus.eventbus.on("deleteFileClick","deleteFileClick",function(data){
            var tmp=_this.state.UploadImg;
            var index = tmp.indexOf(data);
            if (index > -1) {
                tmp.splice(index, 1);
            }
            _this.setState({UploadImg:tmp});
            _this.state.successNum= _this.state.successNum-1;
            nsEventBus.eventbus.broadcast("UploadFile_update",_this.state.UploadImg);
        });
        if(this.props.initPath){
            this.setState({selectedPath:this.props.initPath});
        }
    },

    handleOnClick:function handleOnClick(){
        var tmpPaths = this.state.UploadImg;
//        var formData = new FormData($("#uploadFileForm")[0]);
        var formData = new FormData();
        var _this = this;
        if($("#uploadFileForm")[0][0].files && $("#uploadFileForm")[0][0].files.length > 0){
            for(var i = 0; i < $("#uploadFileForm")[0][0].files.length;i++){
                formData.append("file",$("#uploadFileForm")[0][0].files[i]);
            }
            var sid = getCookie("sid");
            nsEventBus.eventbus.broadcast("Upload_UploadState",{state:true});
            $.ajax({
                url:common_ip+'fileUpload.do?sid='+sid,
                type:'POST',
                cache:false,
                contentType:false,
                processData:false,
                data:formData,
                success: function(ret){
                    if(ret.successFlag){
						layer.msg("上传成功",{icon:1});
                        if(ret.data && ret.data.length > 0){
                            ret.data.map(function(val){
                                tmpPaths[_this.state.successNum].fileId=val.fileId;
                                tmpPaths[_this.state.successNum].filePath=val.filePath;
                                tmpPaths[_this.state.successNum].fileName=val.fileName;
                                _this.state.successNum= _this.state.successNum+1;
                            });
                            _this.setState({UploadImg:tmpPaths});
                            if(_this.state.successNum==_this.state.UploadImg.length){
                                nsEventBus.eventbus.broadcast("Upload_UploadState",{state:false});
                            }
                            nsEventBus.eventbus.broadcast("UploadFile_update",_this.state.UploadImg);
                        }
                    }else{
						layer.alert("上传失败！"+ret.errorMsg,{icon:1,title:"错误"});
                    }
                }.bind(this),
                error:function(request,state,error){
                    layer.alert(error);
                }.bind(this)
            });
        } else {
            layer.alert("请选择要上传的文件");
        }
    },

    handleReset:function handleReset(){
        if($("#uploadFileForm")[0][0].files){
            $("#inputFile")[0].value = null;
        }
    },
    handleFOnblur:function handleOnblur(e){
        var imgPath=this.state.UploadImg;
        var files = e.target.files
        var _this=this;
        for(var i=0;i<files.length;i++)
        {
            var file = files.item(i);
            //允许文件MIME类型 也可以在input标签中指定accept属性
            //console.log(/^image\/.*$/i.test(file.type));
//            if(!(/^image\/.*$/i.test(file.type)))
//            {
//                continue;           //不是图片 就跳出这一次循环
//            }
            if(file.size>10485760){
                layer.alert("文件大小不能超过10M！");
                return
            }
            imgPath.push({fileId:"123",filePath:"",fileName:file.name});
            console.log(i+":"+file.name);
            if(imgPath.length>=6){
                _this.state.isfull=true;
            }
            _this.setState({UploadImg:imgPath});
        }
        this.handleOnClick();
    },
    handleAddFOnClick:function handleAddOnClick(e){
        $("#inputFile").click();
    },
    render:function render(){
        var tmp = [];
        var _this=this;
        if(!this.state.isfull){
            tmp.push(
            );
        }
        if(this.state.UploadImg && this.state.UploadImg.length > 0){
            var i=0;
            this.state.UploadImg.map(function(data){
                i++;
                if(i<=_this.state.successNum){
                    tmp.push(React.createElement(UploadFileRow,{imgInfo:data,isUploaded:true}));
                }else{
                    tmp.push(React.createElement(UploadFileRow,{imgInfo:data,isUploaded:false}));
                }
            });
        }

        return React.createElement(
            "div",
            {id:"uploadImg_div"},
            React.createElement(
                "form",
                {id:"uploadFileForm",method:"POST",enctype:"multcommon_ipart/form-data"},
                React.createElement(
                    "input",
                    {type:"file",ref:"myFile",id:"inputFile",multcommon_iple:this.props.mulSupported,onChange:this.handleFOnblur}
                ),
                React.createElement(
                    "div",
                    {id:"divImageTable"},
                    React.createElement(
                        "div",
                        {id:"divFileAdd",onClick:this.handleAddFOnClick},
                        React.createElement("p",{className:"addFiles"},"添加附件")
                    ),
                    React.createElement("div",{id:"uploadFileList"},
                        tmp
                    )
                )
            )
        );
    }
});

//ReactDOM.render(React.createElement(UploadFile,{mulSupported:true}),document.body)