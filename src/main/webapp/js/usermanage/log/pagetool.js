
/**
 * 分页工具
 * @param total
 * @param pageSize
 * @param totalPage
 * @returns
 */
function Pageglobal(data,pama,view_id,pagecount){
	/**
	 * 当前页码
	 */
	this.curPage = 0;
	/**
	 * 数据
	 */
	this.data = eval(data);
	/**
	 * 总记录数
	 */
	this.total = this.data.length;
	/**
	 * 每页显示数
	 */
	this.pageSize = 10;
	/**
	 * 总页数
	 */
	this.totalPage = Math.ceil(this.total/this.pageSize);
	/**
	 * 数据列集合 - 显示顺序列，按顺序
	 */
	this.pama = pama;
	/**
	 * 显示数据的id
	 */
	this.view_id = view_id||"listTable";
	/**
	 * 页码显示区id
	 */
	this.pagecount = pagecount||"pagecount";
}
Pageglobal.prototype={//添加方法
	setData: function(data){
		this.data = data;
	},
	getData: function(){
		return this.data;
	},
	getTotal: function(){
		return this.total;
	},
	getPageSize: function(){
		return this.pageSize;
	},
	getTotalPage: function(){
		return this.totalPage;
	},
	getCurPage: function(){
		return this.curPage;
	},
	setCurPage: function(curPage){
		this.curPage = curPage;
	},
	setTotalPage: function(totalPage){
		this.totalPage = totalPage;
	},
	setTotal: function(total){
		this.total = total;
	},
	setPageSize: function(pageSize){
		this.pageSize = pageSize;
	},
	setPama: function(name, value){
		this.pama[name] = value;
	},
	setTableData : function(page){
		this.curPage = page;
		var view_cur;
		if(this.pageSize > this.total){
			view_cur = this.total;
		}else{
			view_cur = this.pageSize;
		}
		var j = 0;
		var begin_cur = (page-1)*this.pageSize;//开始数据
		var i = 0;
		var tbody = document.getElementById(this.view_id);
		while (tbody.hasChildNodes()) {tbody.removeChild(tbody.lastChild);}//清空
		while(i < view_cur){
			var tr=document.createElement("tr");
			tr.className="tr_data";
			tr.id=++j;
			 
			for(var s in this.pama){
				var inti=begin_cur+i;
				if(inti<this.total){
					var td=document.createElement("td");
					td.appendChild(document.createTextNode(""+this.data[inti][this.pama[s]]));
					tr.appendChild(td);
				}
			}
			i++;
			tbody.appendChild (tr);
		}
		 $("td").each(function(index){
			  if(index % 3 == 0){
				  $("td").eq(index+2).css({"color":"black"});
			  }
		  });
	      		$(".tr_data").click(function(){
	        		$(this).addClass("noneColor").siblings().removeClass("noneColor"); 
	        	});
		this.setTablePageStr();
		
	},
	/**
	 * 添加方法,获取显示表单
	 */
	getPageData : function(page){
		//var data=[{name:"a",age:12},{name:"b",age:11},{name:"c",age:13},{name:"d",age:14}];  
		this.curPage = page;
		var str="";
		var begin_cur = (page-1)*this.pageSize;//开始数据
		//for(var o in this.data){//o和s得到的是序号而已可以用data[o].name/data[o]["name"]得到name对应的value
		var i = 0;
		var view_cur;
		if(this.pageSize > this.total){
			view_cur = this.total;
		}else{
			view_cur = this.pageSize;
		}
		while(i < view_cur){
			str +="<tr>";
			for(var s in this.pama){
				//layer.alert(begin_cur+i+"-"+this.pama[s]);
				str += "<td>"+this.data[begin_cur+i][this.pama[s]]+"</td>";
			}
			i++;
			str += "</tr>";
		}
		//}
		return str;
		
	},
	/**
	 * 获取分页脚本
	 */
	setTablePageStr : function(){
		var pageStr = "";
		//页码大于最大页数 
	    if(this.curPage>this.totalPage&&this.totalPage>0) this.curPage = this.totalPage; 
	    //页码小于1
	    if(this.curPage<1&&this.total>0) this.curPage=1;
	    pageStr = "<span class='total'>共"+this.total+"条</span><span>"+this.curPage +"/"+this.totalPage+"</span>"; 
	    //如果是第一页 
	    console.log(this.curPage);
	    if(this.curPage<=1){
	        pageStr += "<span class='beginPage'>首页</span><span class='prevPage'>上一页</span>"; 
	    }else{ 
	        pageStr += "<span class='beginPage'><a href='javascrcommon_ipt:setTableData(1)'>首页</a></span><span class='prevPage'><a href='javascrcommon_ipt:setTableData("+(parseInt(this.curPage)-1)+")' >上一页</a></span>"; 
	    }
	    //如果是最后页 
	    if(this.curPage>=this.totalPage){
	        pageStr += "<span class='nextPage'>下一页</span><span class='endPage'>尾页</span>"; 
	    }else{ 
	        pageStr += "<span class='nextPage'><a href='javascrcommon_ipt:setTableData("+(parseInt(this.curPage)+1)+")'>下一页</a>"+
	        "</span><span class='endPage'><a href='javascrcommon_ipt:setTableData("+this.totalPage+")'>尾页</a></span>"; 
	    }
	    
	    var pagecountObj = document.getElementById(this.pagecount);
		pagecountObj.innerHTML=pageStr;
	},
	getPama: function(name){
		return this.pama[name];
	},
	init: function(){
		if(this.totalPage){
			this.curPage = 1;
		}
		this.setTablePageStr();
		//var viewObj = document.getElementById(this.view_id);
		this.setTableData(this.curPage);
		
	}
	
};
