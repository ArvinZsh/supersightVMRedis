
var Input = window.Input || ReactBootstrap.Input;

var colorColumn = function(event){
	var li = document.getElementsByTagName("lable");
	for(var i=0;i<li.length;i++)
	{
		li[i].parentNode.style.backgroundColor = "#F1F9FC";
		li[i].parentNode.style.color = "black";
		if(li[i].parentNode.style==event.target.style){
			event.target.style.backgroundColor = "#FFF8CE";
		}
	}
	console.log(event.target.style.backgroundColor);
	if(event.target.style.backgroundColor == "rgb(255, 248, 206)"){
		event.target.style.color = "#1696D2";
		event.target.childNodes.item(1).style.color = "black";
	}
	
};
var UserEdit = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:this.props.data,
			isEnable:true,
		};
    },
    componentDidMount: function(){
		
	},
	clickColumn:function(event){
		window.location.href = "#";
		colorColumn(event);
		return
	},
	render:function render()
	{
			return (
						React.createElement("div",{className:"user_div"},
								React.createElement("div",{className:"edit_div"},
									React.createElement("button",{className:"add_button"},"＋人员"),
									React.createElement("button",{className:"edit_button"},"编辑")
								),
								React.createElement("div",{className:"find_div"},
									React.createElement(Input,{type:"text",className:"find_input",ref: "find",placeholder: "搜索内容...",}),
									React.createElement("button",{className:"find_button"},"搜索")
								),
								React.createElement("div",{className:"datas_div",onClick:this.clickColumn},
										React.createElement(Datas,{data:this.state.data})
								),
								React.createElement("div",{className:"isenable_div"},
										React.createElement(Input,{className:"isenable_checkbox",type:"checkbox",checked:"checked"}),
										React.createElement("label",{className:"isenable_label"},"显示已停用人员"),
										React.createElement("button",{className:"isenable_button"},"停用")
								)
						)
			);
	}
});
var Datas = React.createClass({
	getInitialState: function getInitialState() {
		return {
			data:this.props.data,
		};
    },
	render:function(){
		return(
				React.createElement("div",{className:"datas_div"},
						this.state.data.map(function(array){
							return (
									React.createElement("div",{className:"data_tr"},
									React.createElement("lable",{className:"data_td_id",id:"data_td",style:{}},array.id),
									React.createElement("lable",{className:"data_td_name",id:"data_td",style:{}},array.name)	
							));
						})
				)
		);
	}
});
//ReactDOM.render(React.createElement(UserEdit,{data:[{id:110001,name:"张三"},{id:110001,name:"李四"},{id:110001,name:"王二"},{id:110001,name:"麻子"}]}), document.getElementById("userEdit"));