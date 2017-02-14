var Button = window.Button || ReactBootstrap.Button;
var Input = window.Input || ReactBootstrap.Input;
var Modal = window.Modal || ReactBootstrap.Modal;
var GridBinding = React.createClass({
			getInitialState: function getInitialState() {
				return {
					data:[],
					key:1000,
					curTabTests:[],
				};
		    },
		    componentWillMount:function(){
		    	var manLists=[{id:"1101",name:"周润发周总",userList:[{id:"001",name:"周文豪"},{id:"002",name:"王杰"}]}];
		        for(var i=1;i<50;i++){
		        	manLists.push({id:"1101"+i,name:"周润发周总",userList:[{id:"001"+i,name:"周文豪"},{id:"002"+i,name:"王杰"}]});
		        }
		        this.setState({data:manLists});
		    },
			componentDidMount: function(){
				var trBin;
//				$.ajax({
//			  		url:"...",
//			  		datatype:'json',
//			  		type:'post',
//			  		data:{page:this.state.page},
//				  	success: function(data){
//						this.setState({data:(eval(data))});
//				  	}.bind(this),
//				  	error: function(request, state, error){
//					  	layer.alert(error);
//					  	console.error(this.props.url, state, error.toString());
//				  	}.bind(this)
//		  		});
				
				var _this=this;
				$(".gridBinding_tr").click(function () {
				    var index = $(".gridBinding_tr").index(this);
				    _this.setState({key:index});
				});
				
			},
			onDeltr:function(e){
				var _this=this;
				$(".gridBinding_tr").click(function () {
				    var index = $(".gridBinding_tr").index(this);
				    _this.setState({key:index});
				});
				if($(".gridBinding_tr").eq(this.state.key).text() != "true"){
					$(".gridBinding_tr").eq(this.state.key).empty();
				}
				if(_this.state.key==1000){
					layer.alert("请先选中一行数据");
					return;
				}
			},
		 clickcolor:function(event){
		    	var tr = document.getElementsByClassName("gridBinding_tr");
		    	for(var i=0;i<tr.length;i++)
		    	{
		    		if(i % 2 != 0)
		    		{
		    			tr[i].style.backgroundColor = "#F1F9FC";
		    		}else{
		    			tr[i].style.backgroundColor = "#fff";
		    		}
		    	}
		    	event.target.parentNode.style.backgroundColor = "#FFF8CE";
		    	event.target.childNodes.backgroundColor = "#FFF8CE";
		    	event.target.style.marginRight = "-1px";
		    	if($(".gridBinding_tr").eq(this.state.key).text() != "true"){
					trBin=this.state.data[this.state.key];
					 nsEventBus.eventbus.broadcast("transfer_tree",trBin);
					 console.log(trBin);
				}
		},
		findgridBinding:function(){
			console.log(trBin);
			$.ajax({
				url: "...",
				dataType:'json',
		  		type : "post",
		  		data:{binding:trBin},
				success: function(data)
				{
					if(date.isok){
						window.location.href="#";
						return;
					}else{
						layer.alert(data.message);
						return;
					}
				}.bind(this),
				error: function(request, state, error){
					
				}.bind(this)
			});
		},
		render:function render(){
				return (
						React.createElement("div",{},
								React.createElement("div",{ className: "gridBinding_div" },
										React.createElement(GridBinPoP, {value: "添加网格" }),
										React.createElement(Input, { type: "button", className: "gridBinding_Del", value: "删除网格",onClick:this.onDeltr})
								),
								React.createElement("table",{id:"gridBinding_table"},
										React.createElement("tr",{className:"gridBinding_th"},
												React.createElement("th",{className:"th_gridId"},"网格编号"),
												React.createElement("th",{className:"th_gridName"},"网格名称")
										)
								),
								React.createElement("div",{className:"div_grid"},
										React.createElement("table",{className:"table_grid",onClick:this.clickcolor},
											this.state.data.map(function(array,index){
												if(index % 2 !=0){
													return(
															React.createElement("tr",{className:"gridBinding_tr",id:"gridBinding_line",style:{backgroundColor:"#F1F9FC"}},
																	React.createElement("td",{className:"gridBinding_td"},array.id),
																	React.createElement("td",{className:"gridBinding_td1"},array.name)
															)
													);
												}
												return(
														React.createElement("tr",{className:"gridBinding_tr",id:"gridBinding_line",style:{backgroundColor:"#fff"}},
																React.createElement("td",{className:"gridBinding_td"},array.id),
																React.createElement("td",{className:"gridBinding_td1"},array.name)
														)
												);
											})
										)
								),
								React.createElement("div",{className:"div_binding"},"人员绑定"),
								React.createElement(Input, { type: "button", className: "gridBinding", value: "绑定" ,onClick:this.findgridBinding})
						)
				);
		}

});
var GridBinPoP = React.createClass({
    getInitialState: function getInitialState() {
        return { showModal: false };
    },
    open: function open() {
        this.setState({ showModal: true });
    },
    close: function close() {
        this.setState({ showModal: false });
    },
    ensure:function ensure(){
    	 var id = $(".gridId_Id").val();
    	 var name = $(".gridId_Name").val();
    	 if(id.length==0){
    		 layer.alert("请输入网格编号！");
    		 return;
    	 }
    	 if(name.length==0){
    		 layer.alert("请输入网格人员名称！");
    		 return;
    	 }
    	 if(name.length>=8){
    		 layer.alert("网格人员姓名太长！");
    		 return;
    	 }
    	 if(id.length>=8){
    		 layer.alert("网格编号太长！");
    		 return;
    	 }
    	 if(id.length!=0 && name.length!=0){
    		 $(".gridBinding_tr").eq(0).parent().prepend("<tr class=\"gridBinding_tr\" id=\"gridBinding_line\"  onClick=\"this.clickcolor\"><td class=\"gridBinding_td\" >"+id+"</td><td class=\"gridBinding_td1\" >"+name+"</td></tr>");
    	 }
    	 var tr = document.getElementsByClassName("gridBinding_tr");
	    	for(var i=0;i<tr.length;i++)
	    	{
	    		if(i % 2 != 0)
	    		{
	    			tr[i].style.backgroundColor = "#F1F9FC";
	    		}else{
	    			tr[i].style.backgroundColor = "#fff";
	    		}
	    	}
        this.setState({ showModal: false });
       
        
    },
    render: function render() {
        return (
            React.createElement(
                "div",
                {id:"showmoSavebtn"},
            React.createElement("button", {className:"showmoAddbtn",bsStyle:"info",bsSize:"small",onClick: this.open },"添加网格"),

                React.createElement(
                Modal,
                {bsSize:"large",show:this.state.showModal,keyboard:true,onHide:this.close,animation:true,dialogClassName:"custom-modal" },
                React.createElement(
                    Modal.Header,
                    { closeButton: false },
                    React.createElement(
                        Modal.Title,
                        { id: "contained-modal-title-lg" },
                        "添加网格"
                    )
                ),
                React.createElement(
                    Modal.Body,
                    {className:"Modal_div"},
	                React.createElement("div",{className:"grid_div"},
                    React.createElement("label",{className:"grid_label"},"*编号:"),
					React.createElement(Input,{type:"text",className:"gridId_Id"}),
                    React.createElement("label",{className:"grid_label1"},"*名称:"),
					React.createElement(Input,{type:"text",className:"gridId_Name"})
					),
					 React.createElement(
		                        "button",
		                        { className:"btn_save",onClick: this.ensure,bsStyle:"info",bsSize:"normal" },
		                        "保存"
		             ),
		                    React.createElement(
								"button",
		                        { className:"btn_cancel",onClick: this.close,bsStyle:"info",bsSize:"normal"  },
		                        "取消"
		             )
                )
            )
            )
        );
    }

});
