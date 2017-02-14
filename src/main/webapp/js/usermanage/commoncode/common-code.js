var Button = window.Button || ReactBootstrap.Button;
var Input = window.Input || ReactBootstrap.Input;
var Modal = window.Modal || ReactBootstrap.Modal;

var checkhidden2 = function(display){
	var ishidden = $("#editdid .commonbianli");
	ishidden.each(function(index){
		if(ishidden.eq(index).text() == "true"){
			$("#editdid .data_tr").eq(index).css("display",display);
			$("#editdid .data_tr").eq(index).css("background-color","#FFFFFF");
			$("#editdid .data_tr").eq(index).css("color","#b0b0b0");
		}
	})
}
var key = 10000;
var Commoncodedata = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:""
		};
    },
    componentDidMount: function(){

    },
    hanOnTrIndexCilck:function(event){
		var tr = document.getElementsByClassName("data_tr");
		var index = $(".data_tr:hover").index();
		if(key != -1 && key != 10000 ){
			$(".data_tr").removeAttr("style");
		}
		$(".tr_codeyou").removeClass("rightbackcolor2");
		tr[index].style.backgroundColor= "#fffee1";
		key=index;
		// 点击后传递子集合到相应页面
		nsEventBus.eventbus.broadcast("comm_and_codetyepe",[this.props.data,-1]);
	},
	render:function(){
		return(
			React.createElement("div",{className:"data_tr",onClick:this.hanOnTrIndexCilck},
				React.createElement("lable",{className:"commonbianli",style:{"display":"none"}},this.props.data.ishidden+""),
				React.createElement("lable",{className:"data_tdcla"},this.props.data.typeName)
			)
		);
	}
});

var Commoncode = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:[]
		};
    },
	leftAjaxqing: function (){
		checkhidden2("none");
		var _this=this;
		var sid = getCookie("sid");
		var rules = {"sid":sid};
		var tmp  = JSON.stringify(rules);
		$.ajax({
			url:common_ip+"commonCode.do?action=listAll",
			dataType:'json',
			data:tmp,
			type:'post',
			contentType:"application/x-www-form-urlencoded",
			success: function(data){
				//console.log(data);
				if(data.successFlag){
					
					this.setState({data:data.orderList});
				}else{
					layer.alert(data.errorMsg);
				}
			}.bind(this),
			error: function(request, state, error){
				layer.alert(error);
				console.error(this.props.url, state, error.toString());
			}.bind(this)
		});
	},
    componentDidMount: function(){
		this.leftAjaxqing();
	},
	render:function render()
	{
		var _this = this;
		/*nsEventBus.eventbus.on("windows_reload","windows_reload",function(){
			_this.leftAjaxqing();
		});*/
			return (
				React.createElement("div",{className:"commoncoer_div"},
					React.createElement("div",{className:"edit_div"}
					),
					React.createElement("div",{className:"datas_div",id:"editdid"},
						this.state.data.map(function(array){
							return React.createElement(Commoncodedata,{data:array})
						})
					)
				)
			);
	}
});

//ReactDOM.render(React.createElement(Commoncode,{data:[{name:"建筑类型"},{name:"采取措施"}]}), document.getElementById("common-code"));