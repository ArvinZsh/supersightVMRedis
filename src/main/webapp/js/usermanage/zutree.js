var array1 = [{jiegou:"组织结构",gong:[{insert:"新增",update:"编辑",dele:"删除"}]},{jiegou:"视频监控",gong:[{insert:"摄像几分组"}]}];

var ZuTreeview =  React.createClass({
	getInitialState: function(){
		return{
			isok:false
		};
	},
	handleClick:function(event){
		this.setState({isok:!this.state.isok});
	},
	render:function()
	{
//		var dierji = "";
//		var disanji = "";
//		if(this.state.isok){
//			dierji = "dierjiopen";
//		}else{
//			dierji = "dierjicolse";
//		}
		return (
			React.createElement("div",{id:"zutreediv2",style:{margin:"8px 0 0 0"}},
				React.createElement("div",{onClick:this.handleClick},this.props.data.jiegou),
				this.props.data.gong.map(function(arr){
					return(
						React.createElement("div",{id:"dierjiz",style:{margin:"0px 0 0 23px"}},
							React.createElement("div",{},arr.insert),
							React.createElement("div",{},arr.update),
							React.createElement("div",{},arr.dele)
						)
					)
				})
			)
		);
	}
});

var ZuTreeviw = React.createClass({
	render:function()
	{
		return (
			React.createElement("div",{id:"fuzutreediv"},
				React.createElement("div",{id:"zizutreediv"},"权限设置"),
				this.props.data.map(function(arr){
					return (
						React.createElement(ZuTreeview,{data:arr})
					)
				})
			)
		);
	}
});

var ZuTree = React.createClass({
	getInitialState: function(){
		return{
			data:array1
		};
	},
	render:function()
	{
		return (
			React.createElement("div",{id:""},
				React.createElement(ZuTreeviw,{data:this.state.data})
			)
		);
	}
});

//ReactDOM.render(React.createElement(ZuTree),document.body);