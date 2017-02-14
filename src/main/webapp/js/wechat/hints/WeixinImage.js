'use strict';
var Input   = window.Input || ReactBootstrap.Input;
var Button  = window.Button || ReactBootstrap.Button;
var Table   = window.Table || ReactBootstrap.Table;
var Image   = window.Image || ReactBootstrap.Image;
(function($, win){
    //绑定图片选择的事件
    function bind_change(btnObj,fileObj){
        $(btnObj).unbind("click").bind("click",function(){
            fileObj.click();
        });
        $(fileObj).change(function(){
            var that = $(this);
            //判断图片的类型和大小
            judgeTypeSize(btnObj,that,1000,img_upload);
        });
    }
    function judgeTypeSize(btnObj,fileObj, maxSize,callback){
        var value = fileObj.val();
        if (!value.match(/.jpg|.jpeg|png/i)){
            layer.alert("图片格式必须是jpg或jpeg或png");
        }else {
            var size = fileObj[0].files[0].size;//得到图片的大小[]
            var span = fileObj.parent().find("span");//错误的提示span
            console.log(size/1024+"kb");
            var trueSize = Math.ceil(size/1024);//把字节转换成kb
            if(trueSize > maxSize){
                span.show();
                span.html("照片尺寸过大，请重新选择");
            }else{
                span.hide();
                if(callback){
                    callback(btnObj,fileObj[0]);
                }
            }
        }
    }
    function getImgUrl(fileObj){
        var url;
        if(fileObj.files&&fileObj.files[0]){//火狐下
            url=window.URL.createObjectURL(fileObj.files[0]);
        }else{////IE下
            fileObj.select();
            url= fileObj.selection.createRange().text;
            document.selection.empty();
        }
        return url;
    }
    //得到图片的地址并进行预览
    function img_upload(btnObj,fileObj){
        var url = getImgUrl(fileObj);
        var $imgBox = $(imgBox);
        var imgLeft = $(".img-left");
        var img = $imgBox.find("img");
        img.attr("src",url);
        imgLeft[0].insertBefore($imgBox[0], btnObj);//js的方法
        //$(btnObj).hide();
        console.log("成功了");
    }
})(jQuery,window);
var UploadResultRow = React.createClass({
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
        layer.confirm('您确定要删除该图片？', {
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
                        nsEventBus.eventbus.broadcast("deleteImgClick"+_this.props.tag,_this.props.imgInfo);
                    }else{
                        layer.alert("删除失败！"+data.errorMsg,{icon:2,title:"错误"});
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
        if(!this.props.isUploaded){
            tmp.push(React.createElement(
                "div",
                {className:"UploadImageTr_divd"} ,
                React.createElement(
                    "p",
                    {className:"UploadImageTr_p"}
                )
            ));
        }else{
            tmp.push(React.createElement(
                "div",
                {className:"UploadImageTr_divd1"} ,
                React.createElement(
                    "p",
                    {id:"",className:"UploadImageTr_p1",onClick:this.deleteClick},"删除"
                )
            ));
        }
        return React.createElement(
            "div",
            {className:"UploadImageTr_div"},
            React.createElement(
                "img",
                {id:this.props.imgInfo.fileId,className:"UploadImageTd_img",src:this.props.imgInfo.filePath==undefined?this.props.imgInfo.path:this.props.imgInfo.filePath}
            ),
            tmp
        );
    }

});

var UploadImage = React.createClass({
    displayName:"UploadImage",

    getInitialState:function getInitialState(){
        var ui=[];
        if(typeof (this.props.imgList)!=undefined&&this.props.imgList!=null){
            ui=this.props.imgList;
        }
        var num=6;
        if(typeof (this.props.uploadNum)!=undefined&&this.props.uploadNum!=null){
            num=this.props.uploadNum;
        }
        var tag="";
        if(typeof (this.props.tag)!=undefined&&this.props.tag!=null){
            tag=this.props.tag;
        }
        return {
            UploadImg:ui,
            selectedPath:null,
            isfull:false,
            successNum:this.props.successNum,
            imgNum:num,
            tag:tag,
        };
    },

    componentWillMount:function componentWillMount(){
        var _this=this;
        nsEventBus.eventbus.on("deleteImgClick"+_this.state.tag,"deleteImgClick"+_this.state.tag,function(data){
            var tmp=_this.state.UploadImg;
            var index = tmp.indexOf(data);
            if (index > -1) {
                tmp.splice(index, 1);
                _this.state.isfull=false;
                _this.setState({UploadImg:tmp});
                _this.state.successNum= _this.state.successNum-1;
            }
            nsEventBus.eventbus.broadcast("UploadImage_update"+_this.state.tag,_this.state.UploadImg);
        });
        if(this.props.initPath){
            this.setState({selectedPath:this.props.initPath});
        }
        if(this.state.UploadImg.length>=this.state.imgNum){
            this.state.isfull=true;
        }
    },

    handleOnClick:function handleOnClick(){
        var tmpPaths = this.state.UploadImg;
//        var formData = new FormData($("#uploadForm")[0]);
        var formData = new FormData();
        var _this = this;
        if($("#uploadForm"+this.state.tag)[0][0].files && $("#uploadForm"+this.state.tag)[0][0].files.length > 0){
            for(var i = 0; i < $("#uploadForm"+this.state.tag)[0][0].files.length;i++){
                formData.append("file",$("#uploadForm"+this.state.tag)[0][0].files[i]);
            }

//            $.ajax({
//                url:'http://192.168.0.94:9999/fileUpload.do',
//                type:'POST',
//                cache:false,
//                contentType:false,
//                processData:false,
//                data:formData,
//                success:function(ret){
//                    layer.alert(ret);
//                }.bind(this),
//                error:function(request,state,error){
//                    layer.alert(error);
//                }.bind(this)
//            });
            nsEventBus.eventbus.broadcast("Upload_UploadState",{state:true});
            var sid = getCookie("sid");
            $.ajax({
                url:common_ip+'fileUpload.do?sid='+sid,
                type:'POST',
                cache:false,
                contentType:false,
                processData:false,
                data:formData,
                success: function(ret){
                    if(ret.successFlag){
                        layer.msg("上传成功！",{icon:1});
                        if(ret.data && ret.data.length > 0){
                            ret.data.map(function(val){
                                tmpPaths[_this.state.successNum].fileId=val.fileId;
                                tmpPaths[_this.state.successNum].filePath=val.filePath;
                                _this.state.successNum= _this.state.successNum+1;
                            });
                            var aa=_this.state.imgNum;
                            _this.setState({imgNum:aa});
                            // _this.setState({UploadImg:tmpPaths});
                            if(_this.state.successNum==_this.state.UploadImg.length){
                                nsEventBus.eventbus.broadcast("Upload_UploadState",{state:false});
                            }
                            nsEventBus.eventbus.broadcast("UploadImage_update"+this.state.tag,this.state.UploadImg);
                        }
                    }else{
                        layer.alert("上传失败！"+ret.errorMsg,{icon:2,title:"错误"});
                    }
                }.bind(this),
                error:function(request,state,error){
                    layer.alert(error);
                }.bind(this)
            });
        } else {
            layer.alert("请选择要上传的图片");
        }
    },

    handleReset:function handleReset(){
        if($("#uploadForm"+this.state.tag)[0][0].files){
            $("#inputFile")[0].value = null;
        }
    },
    handleOnblur:function handleOnblur(e){
        var imgPath=this.state.UploadImg;
        var _this=this;
        for(var i=0;i<e.target.files.length;i++)
        {
            var file = e.target.files.item(i);
            //允许文件MIME类型 也可以在input标签中指定accept属性
            //console.log(/^image\/.*$/i.test(file.type));
            if(!(/^image\/.*$/i.test(file.type)))
            {
                continue;           //不是图片 就跳出这一次循环
            }
            if(file.size>1000000){
                layer.alert("图片大小不能超过1M！");
                return
            }
            var this_ = this;
            //var files = inputImg;

            //实例化FileReader API
            var freader = new FileReader();
            freader.readAsDataURL(file);
            freader.onload=function(e)
            {
                imgPath.push({fileId:"",filePath:e.target.result,fileName:""});
                if(imgPath.length>=_this.state.imgNum){
                    _this.state.isfull=true;
                }
                _this.setState({UploadImg:imgPath});
//                var img = '<img src="../../center/'+e.target.result+'" width="200px" height="200px"/>';
//                $("#divImageTable").empty().append(img);
            }
        }

        this.handleOnClick();
    },
    handleAddOnClick:function handleAddOnClick(e){
        $("#inputImg"+this.state.tag).click();
    },
    render:function render(){
        var tmp = [];
        var _this=this;
        if(this.state.UploadImg && this.state.UploadImg.length > 0){
            var i=0;
            this.state.UploadImg.map(function(data){
                i++;
                if(i<=_this.state.successNum){
                    tmp.push(React.createElement(UploadResultRow,{imgInfo:data,isUploaded:true,tag:_this.state.tag}));
                }else{
                    tmp.push(React.createElement(UploadResultRow,{imgInfo:data,isUploaded:false,tag:_this.state.tag}));
                }
            });
        }
        if(!this.state.isfull){
            tmp.push(
                React.createElement(
                    "div",
                    {id:"divImageAdd",onClick:this.handleAddOnClick}
                ));
        }

        return React.createElement(
            "div",
            {id:"uploadImg_div"},
            React.createElement(
                "form",
                {action:"fileUpload.do", enctype:"multcommon_ipart/form-data", method:"post", id:"uploadForm"+this.state.tag},
                React.createElement(
                    "div",
                    {id:"divImageTable"},
                    tmp
                ),
                React.createElement(
                    "input",
                    {type:"file",ref:"myFile",id:"inputImg"+this.state.tag,multcommon_iple:this.props.mulSupported,onChange:this.handleOnblur,style:{contentEditable:"false",display: "none"}}
                )
            )
        );
    }
});

//ReactDOM.render(React.createElement(UploadImage,{mulSupported:true}),document.body)