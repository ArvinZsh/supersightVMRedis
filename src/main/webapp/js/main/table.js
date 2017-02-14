

var Tables = React.createClass({
	getInitialState: function getInitialState() {
		return {data:this.props.data};
    },
    componentDidMount: function(){
    	var trrColor = document.getElementsByTagName("tr");
    	for(var i=0;i<trrColor.length;i++)
    	{
    		if(i % 2 != 0)
    		{
    			trrColor[i].style.backgroundColor = "#eee";
    		}
    	}
	},
	render:function render()
	{
			return (
				React.createElement("div",{style:{},className:"divh"},
							React.createElement("table",{className:"tabl2w"},
								React.createElement("tr",{className:"trsw"},
										React.createElement("th",{className:"namesw"},"名称"),
										React.createElement("th",{className:"idsw"},"序号")
								)
							),
						React.createElement("div",{className:"divw"},
							React.createElement("table",{className:"tablw",id:"tabid"},
									this.state.data.map(function(array){
										return(
											React.createElement("tr",{className:"td2sw"},
												React.createElement("td",{style:{},className:"td2sw"},array.name),
												React.createElement("td",{style:{},className:"td2sw"},array.id)
											)
											
										);
								}),
								React.createElement("tr",{className:"td2sw"},
												React.createElement("td",{style:{},className:"td2sw"},""),
												React.createElement("td",{style:{},className:"td2sw"},"")
								),
								React.createElement("tr",{className:"td2sw"},
												React.createElement("td",{style:{},className:"td2sw"},""),
												React.createElement("td",{style:{},className:"td2sw"},"")
								),
								React.createElement("tr",{className:"td2sw"},
												React.createElement("td",{style:{},className:"td2sw"},""),
												React.createElement("td",{style:{},className:"td2sw"},"")
								),
								React.createElement("tr",{className:"td2sw"},
												React.createElement("td",{style:{},className:"td2sw"},""),
												React.createElement("td",{style:{},className:"td2sw"},"")
								),
								React.createElement("tr",{className:"td2sw"},
												React.createElement("td",{style:{},className:"td2sw"},""),
												React.createElement("td",{style:{},className:"td2sw"},"")
								),
								React.createElement("tr",{className:"td2sw"},
												React.createElement("td",{style:{},className:"td2sw"},""),
												React.createElement("td",{style:{},className:"td2sw"},"")
								),
								React.createElement("tr",{className:"td2sw"},
												React.createElement("td",{style:{},className:"td2sw"},""),
												React.createElement("td",{style:{},className:"td2sw"},"")
								),
								React.createElement("tr",{className:"td2sw"},
										React.createElement("td",{style:{},className:"td2sw"},""),
										React.createElement("td",{style:{},className:"td2sw"},"")
								),
								React.createElement("tr",{className:"td2sw"},
										React.createElement("td",{style:{},className:"td2sw"},""),
										React.createElement("td",{style:{},className:"td2sw"},"")
								),
								React.createElement("tr",{className:"td2sw"},
										React.createElement("td",{style:{},className:"td2sw"},""),
										React.createElement("td",{style:{},className:"td2sw"},"")
								),
								React.createElement("tr",{className:"td2sw"},
										React.createElement("td",{style:{},className:"td2sw"},""),
										React.createElement("td",{style:{},className:"td2sw"},"")
								),
								React.createElement("tr",{className:"td2sw"},
										React.createElement("td",{style:{},className:"td2sw"},""),
										React.createElement("td",{style:{},className:"td2sw"},"")
								)
							)
						)
					)
			);
	}
});

ReactDOM.render(React.createElement(Tables,{data:[{name:"部门1.1",id:1.1},{name:"部门1.2",id:1.2},{name:"部门1.3",id:1.3}]}), document.getElementById("table"));