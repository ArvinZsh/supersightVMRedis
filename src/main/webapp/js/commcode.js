// JavaScrcommon_ipt Document
var UserMain=React.createClass({
	    getInitialState: function getInitialState() {
	        return {
	        	workInfo: "",
	        	num:"",
	        };
	    },
		componentDidMount: function(){
			
		},
	    render: function render() {
		    	return(
		    		React.createElement("div",{id:"main"},
						React.createElement("div",{id:"logo"},
						    React.createElement("div",{id:"logo_left"}),
						    React.createElement("div",{id:"logo_right"},
								React.createElement("h1",{id:"logo_right_h"},common_title)				
							)
						),
						React.createElement("div",{id:"navigation"},
//							setInterval(function() {
								React.createElement(Nav,{url:"",checkid:6})
//							},1000)
						),
						React.createElement("div",{id:"user_down"},
							React.createElement("div",{id:"user_down_left"},
								React.createElement(LeftColumn,{checkid:2})
							),
							React.createElement("div",{id:"common_code_auto"},
									React.createElement(Commoncode,{data:[{name:"建筑类型",ishidden:false,list:[{types:"永久",names:"yongjiu",values:"永久"},{types:"建筑",names:"jianzhu",values:"建筑"},{types:"地基",names:"diji",values:"地基"},{types:"建筑",names:"jianzhu",values:"建筑"}]},{name:"违法范围",ishidden:false,list:[{types:"收购",names:"shougou",values:"收购"},{types:"打击",names:"daji",values:"打击"}]},{name:"采取措施",ishidden:true}]})
							),
							React.createElement("div",{id:"common_code_right"},
//									React.createElement(Codetypelist,{data:[{types:"永久",names:"yongjiu",values:"永久"},{types:"建筑",names:"jianzhu",values:"建筑"},{types:"建筑",names:"jianzhu",values:"建筑"},{types:"地基",names:"diji",values:"地基"},{types:"建筑",names:"jianzhu",values:"建筑"},{types:"地基",names:"diji",values:"地基"},{types:"建筑",names:"jianzhu",values:"建筑"},{types:"地基",names:"diji",values:"地基"},{types:"建筑",names:"jianzhu",values:"建筑"},{types:"地基",names:"diji",values:"地基"},{types:"建筑",names:"jianzhu",values:"建筑"},{types:"地基",names:"diji",values:"地基"}]})
									React.createElement(Codetypelist)
							)
						)
					)
				);
	    }
	});

ReactDOM.render(React.createElement(UserMain), document.getElementById("container"));