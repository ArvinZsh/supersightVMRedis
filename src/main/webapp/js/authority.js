/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-6-24
 * Time: 下午5:30
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){

    var authorityModules="";
    if(typeof (authorityModules)=="undefined"||authorityModules==null||authorityModules==""){
        var sid = getCookie("sid");
        var roleId = getCookie("roleId");
        var cmd = {"sid":sid,"roleId":roleId};
        var tmp = JSON.stringify(cmd);
        $.ajax({
            url:common_ip+"role.do?action=listNoRoleModule",
            dataType:'json',
            data:tmp,
            type:'post',
            contentType:"application/json",
            success: function(data){
                if(data.successFlag){
                    buttons= data.buttons;
                    setCookie("authority",data.buttons,1800000);
                    var modules = document.getElementsByTagName("li");
                    for(var i=0;i<modules.length;i++){
                        var txt= modules[i].innerText.replace("\n","");
                        for(var j=0;j<data.modules.length;j++){
                            if(data.modules[j].module=="地图浏览"){
                                if(txt==data.modules[j].module){
                                    if(data.modules[j].pageNames.length>=4){
                                        modules[i].className=modules[i].className+" permission_forbidden";
                                    }
                                }
                            }else if(data.modules[j].module=="管理中心"){
                                if(txt==data.modules[j].module){
                                    if(data.modules[j].pageNames.length>=4){
                                        modules[i].className=modules[i].className+" permission_forbidden";
                                    }
                                }
                            }else if(data.modules[j].module=="收发文"){
                                if(txt==data.modules[j].module){
                                    if(data.modules[j].pageNames.length>=4){
                                        modules[i].className=modules[i].className+" permission_forbidden";
                                    }
                                }
                            }else if(data.modules[j].module=="投诉管理"){
                                if(txt==data.modules[j].module){
                                    if(data.modules[j].pageNames.length>=2){
                                        modules[i].className=modules[i].className+" permission_forbidden";
                                    }
                                }
                            }else if(data.modules[j].module=="查询统计"){
                                if(txt==data.modules[j].module){
                                    if(data.modules[j].pageNames.length>=3){
                                        modules[i].className=modules[i].className+" permission_forbidden";
                                    }
                                }
                            }else if(data.modules[j].module=="系统管理"){
                                if(txt==data.modules[j].module){
                                    if(data.modules[j].pageNames.length>=6){
                                        modules[i].className=modules[i].className+" permission_forbidden";
                                    }
                                }
                            }else{
                                for(var k =0;k<data.modules[j].pageNames.length;k++){
                                    if(txt==data.modules[j].pageNames[k]){
                                        modules[i].className=modules[i].className+" permission_forbidden";
                                        modules[i].style.color="#ccc";
                                    }
                                }
                            }
                        }
                    }

                }else{
                    layer.alert(data.message,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert("数据加载异常！",{icon:2,title:"错误"});
//			console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
    }else{
        var modules = document.getElementsByTagName("li");
        for(var i=0;i<modules.length;i++){
            for(var j=0;j<authorityModules.length;j++){
                if(modules[i].innerText==authorityModules[j]){
                    modules[i].className=modules[i].className+" permission_forbidden";
                    modules[i].style.color="#ccc";
                }
            }
        }
    }
        var pageLink=pageName();
        var sid = getCookie("sid");
        var roleId = getCookie("roleId");
        var cmd = {"sid":sid,"roleId":roleId,pageLink:pageLink};
        var tmp = JSON.stringify(cmd);
        $.ajax({
            url:common_ip+"role.do?action=getRoleBtn",
            dataType:'json',
            data:tmp,
            type:'post',
            contentType:"application/x-www-form-urlencoded",
            success: function(data){
                if(data.successFlag){
                    forbiddenButton(data.buttons);
                }else{
                    layer.alert(data.message,{icon:2,title:"错误"});
                }
            }.bind(this),
            error: function(request, state, error){
                layer.alert("数据加载异常！",{icon:2,title:"错误"});
//			console.error(this.props.url, state, error.toString());
            }.bind(this)
        });
});

function pageName()
{
    var strUrl=location.href;
    var arrUrl=strUrl.split("/");
    var strPage=arrUrl[arrUrl.length-1];
    var index= strPage.indexOf("?");
    if(index>0){
        strPage=strPage.substring(0,index)
    }

    return strPage;
}

function forbiddenButton(authorityButtons){
    var buttons = document.getElementsByTagName("button");
    for(var i=0;i<buttons.length;i++){
        var isexist=false;
        for(var j=0;j<authorityButtons.length;j++){
            if(buttons[i].innerText==authorityButtons[j]){
               isexist=true;
                console.log(buttons[i].innerText+"-------"+authorityButtons[j]);
            }
        }
        if(!isexist){
            buttons[i].style.pointerEvents="none";
            buttons[i].style.color="#ccc";
        }
    }
}