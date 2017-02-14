var gridBinMain=React.createClass({
	    getInitialState: function getInitialState() {
	        return {
	        	workInfo: "",
	        	num:"",
	        	stateList:[],
	            hintsInfo:"",
	            showtrenModal:false,
	            sid:"",
	            tmp:"",
	        };
	    },
	    componentWillMount:function(){
	    	  var _this=this;
	    	var tmp={id:"00221",time:"2016-05-12",address:"南澳大鹏新区南澳街道2号",name:"张国东",phone:"13888888888",startName:"已回复",imgList:[{fileId:"12001",filePath:"../images/weijian1.jpg",fileName:""},{fileId:"12001",filePath:"../images/weijian2.png",fileName:""},{fileId:"12001",filePath:"../images/weijian1.jpg",fileName:""},{fileId:"12001",filePath:"../images/weijian2.png",fileName:""}],describe:"违章建筑认定的依据，根据城乡规划法的规定，在城市、镇规划区内进行建筑物、构筑物、道路、管线和其他工程建设的，建设单位或者个人应当向城市、县人民政府城乡规划主管部门"};
            _this.state.hintsInfo=tmp;
            tmp={addresseeList:[],copyToList:[],copyToList:[],title:"违建线索：南澳大鹏新区南澳街道2号1栋105号",imgList:[],content:"",fileList:[]};
	        this.setState({ showtrenModal: true });
	        tmp={id:this.state.hintsInfo.id,addresseeList:[],copyToList:[],copyToList:[],title:"违建线索：南澳大鹏新区南澳街道2号1栋105号",imgList:[],content:"",fileList:[]};
	        tmp.addresseeList.push(this.state.hintsInfo);
	        tmp.imgList=this.state.hintsInfo.imgList;
	        tmp.cintent="回复：\n----------------------------------------------------------\n举报时间："+this.state.hintsInfo.time+"\n地址："+this.state.hintsInfo.address+"\n举报人："+this.state.hintsInfo.name+"\n电话："+this.state.hintsInfo.phone+"\n描述："+this.state.hintsInfo.describe
	        $("#hints_toolbar_Modal").empty();
	        this.setState({tmp:tmp});
	    },
		componentDidMount: function(){
			var temp="";
		        nsEventBus.eventbus.on("hintsInfoSelect","hintsInfoSelect",function(data){
		            /**$.ajax({
		             url:this.props.url,
		             dataType:'JSON',
		             Type:'POST',
		             data:{cmd:'getHintsInfoByID',SessionId:this.state.sid,hintsId:data.id},
		             success: function(data){
		             console.log(temp);
		             _this.setState({hintsInfo:eval(temp)});
		             }.bind(this),
		             error: function(request, state, error){
		             layer.alert(error);
		             console.error(this.props.url, state, error.toString());
		             }.bind(this)
		             }); */
		        });
	    	$.ajax({
				  url:this.props.url,
				  dataType:'JSON',
				  Type:'POST',
				  data:{cmd:'SelectUserInfo',SessionId:this.state.sid},
				  success: function(data){
					  console.log(temp);
					   this.setState({workInfos:eval(temp)});
					   onGotUserInfo();
					   
				  }.bind(this),
				  error: function(request, state, error){
					  layer.alert(error);
					  /**
					   *测试
					   * 
					   * */
					   this.setState({workInfos:eval(temp)});
					  console.error(this.props.url, state, error.toString());
				  }.bind(this)
			  });
	    	
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
								React.createElement(Nav,{url:"",checkid:2})
												),
							React.createElement("div",{id:"user_down"},
								React.createElement("div",{id:"user_down_left"},
									React.createElement(LeftColumn,{checkid:2})
								)
							),
							React.createElement("div",null,
									React.createElement(GridTreeList,{showModal:true,isSelectUser:true,transceiverInfo:this.state.tmp,operationType:"transpondHints"})
							),
							React.createElement("div",null,
									React.createElement(GridBinding,null)
							)
						)
				);
	    }
	});
ReactDOM.render(React.createElement(gridBinMain,{url:"http://127.0.0.1:8081/"}), document.getElementById("container"));