
const common_ip = "http://192.168.10.94:8090/failover/";
const common_title = "南澳查违执法留痕管理系统";
function getCookiesSid() {
	return $.cookie('nanaoSid'); // 读取 cookie 
}

/**
 *
 * @param sid  会话Id
 * @param nameId  姓名ID
 * @param name  姓名
 * @param branchId 部门I
 * @param branch 部门名称
 * @param postId 职务ID
 * @param post 职务ID
 */
function setCookiesSid(sid,nameId,name,branchId,branch,postId,post){
	Object.defineProperty(document, "cookie", { get: function() {
		return "nanaoSid="+sid+" ; nanaoNId="+nameId+" ; nanaoName="+name+" ; nanaoBranchId="+branchId+" ; naNaoBranch="+branch+" ; nanaoPostId="+postId+" ; nanaoPost="+post;
	} });
}

function deleteCookies(){
	Object.defineProperty(document, "cookie", { get: function() {
		return "nanaoSid= ''; nanaoNId= ''; nanaoName= ''; nanaoBranchId= ''; naNaoBranch= ''; nanaoPostId= ''; nanaoPost=''";
	} });
}

function getCookiesNameId() {
	return $.cookie("nanaoNId"); // 读取 cookie 
}

function getCookiesName() {
	return $.cookie("nanaoName"); // 读取 cookie 
}

//获取部门id
function getCookiesBranchId() {
	return $.cookie("nanaoBranchId");
}

//获取部门名称
function getCookiesBranch() {
	return $.cookie("naNaoBranch");
}

//设置部门名称
function setCookiesBranch(value){
	$.cookie('naoaoNane', value);
}

//获取职位id
function getCookiesPostId() {
	return $.cookie("nanaoPostId");
}
//获取职位名称
function getCookiesPost() {
	return $.cookie("nanaoPost");
}


// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt) { //author: meizz
	var o = {
		"M+": this.getMonth() + 1,                 //月份
		"d+": this.getDate(),                    //日
		"h+": this.getHours(),                   //小时
		"m+": this.getMinutes(),                 //分
		"s+": this.getSeconds(),                 //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds()             //毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

Date.prototype.GetDate = function(days){
	var now=new Date();
	if(days>=1){now=new Date(now.getTime()-86400000*days);}
	var yyyy=now.getFullYear(),mm=(now.getMonth()+1).toString(),dd=now.getDate().toString();
	if(mm.length==1){mm='0'+mm;} if(dd.length==1){dd='0'+dd;}
	return (yyyy+'-'+mm+'-'+dd);
}


//前提：所有ajax请求都是用jquery的$.ajax发起的，而非原生的XHR；
var ajaxBack = $.ajax;
var ajaxCount = 0;
var allAjaxDone = function(){$('#test').append('all done!<br>');} //一行代码，就可以知道所有ajax请求什么时候结束
//由于get/post/getJSON等，最后还是调用到ajax，因此只要改ajax函数即可
$.ajax = function(setting){
    var cb = setting.complete;
    setting.complete = function(){
        if(arguments[0].responseText.indexOf("超时,请重新登录")>=0||arguments[0].responseText.indexOf("请传入sessionID")>=0){
            window.location.href = "login.html";
        }
    }
    ajaxBack(setting);
}

function judgeBinding(judgename,type){
	var imagename = "";
	// type = "min" : "小图标"    "hover" : "选中图标"    "" : "普通图标"
	if(judgename == "高危已拆"){
		type == "min" ? imagename = "../images/mapimage2/Already_min.png":type == "hover" ?imagename = "../images/mapimage2/Already_on.png" : imagename = "../images/mapimage2/Already.png";
	}else if(judgename == "高危未拆"){
		type == "min" ? imagename = "../images/mapimage2/highriskmin.png":type == "hover" ?imagename = "../images/mapimage2/highriskicon.png" : imagename = "../images/mapimage2/highrisk.png";
	}else if(judgename == "中危"){
		type == "min" ? imagename = "../images/mapimage2/moderateriskmin.png" :type == "hover" ?imagename = "../images/mapimage2/moderateriskicon.png": imagename = "../images/mapimage2/moderaterisk.png";
	}else if(judgename == "低危"){
		type == "min" ? imagename = "../images/mapimage2/lowriskmin.png" :type == "hover" ?imagename = "../images/mapimage2/lowriskicon.png" : imagename = "../images/mapimage2/lowrisk.png";
	}else if(judgename == "拆除"){
		type == "min" ? imagename = "../images/mapimage2/removedmin.png" :type == "hover" ?imagename = "../images/mapimage2/removedicon.png" : imagename = "../images/mapimage2/removed.png";
	}else if(judgename == "装修"){
		type == "min" ? imagename = "../images/mapimage2/RenovationMin.png" :type == "hover" ?imagename = "../images/mapimage2/RenovationSelect.png" : imagename = "../images/mapimage2/RenovationBig.png";
	}else if(judgename == "拆危重建"){
		type == "min" ? imagename = "../images/mapimage2/rebuildmin.png" :type == "hover" ?imagename = "../images/mapimage2/rebuildicon.png" : imagename = "../images/mapimage2/rebuild.png";
	}
	return imagename;
}






