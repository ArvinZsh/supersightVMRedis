//封面组件
var Cover=React.createClass({
    getInitialState:function(){
        return {
            data:"",
            pageIndex:this.props.pageIndex,
            selectIndex:this.props.selectIndex,
        };
    },
    componentDidMount: function(){

    },
    render:function(){
        var tmp="none";
        if(this.props.pageIndex==this.props.selectIndex||this.props.selectIndex==-100){
            tmp="block";
        }
        if(typeof (this.props.data)=="undefined"||typeof (this.props.data)=="undefined"){
            return "";
        }else{
            return(
                React.createElement("div",{id:"record_page_div",style:{display:tmp}},
                    React.createElement("div",{className:"record_cover_logo"},
                        React.createElement("img",{className:"record_cover_logoimg",src:"../images/logo.png"})
                    ),
                    React.createElement("div",{className:"record_cover_div"},
                        React.createElement("h1",{},"违 \v \v \v建 \v \v \v档 \v \v \v案")
                    ),
                    React.createElement("div",{className:"record_cover_div"},
                        React.createElement("h2",{},common_title)
                    ),
                    React.createElement("div",{className:"record_cover_div"},
                        React.createElement("label",{className:"record_cover_labelLeft"},"所属社区："),
                        React.createElement("label",{className:"record_cover_labelright"},this.props.data.area1)
                    ),
                    React.createElement("div",{className:"record_cover_div"},
                        React.createElement("label",{className:"record_cover_labelLeft"},"详细地址："),
                        React.createElement("label",{className:"record_cover_labelright"},this.props.data.address)
                    ),
                    React.createElement("div",{className:"record_cover_div"},
                        React.createElement("label",{className:"record_cover_labelLeft"},"所属网格："),
                        React.createElement("label",{className:"record_cover_labelright"},this.props.data.gridId)
                    ),
                    React.createElement("div",{className:"record_cover_div"},
                        React.createElement("label",{className:"record_cover_labelLeft"},"建筑物编码："),
                        React.createElement("label",{className:"record_cover_labelright"},this.props.data.officialNo)
                    ),
                    React.createElement("div",{className:"record_cover_div"},
                        React.createElement("label",{className:"record_cover_labelLeft"},"归档时间："),
                        React.createElement("label",{className:"record_cover_labelright"},this.props.data.editTimeFormat)
                    )
                )
            );
        }
    }
});

//违建信息
    var BuildingInfo=React.createClass({
        getInitialState:function(){
            return {
            };
        },
        componentDidMount: function(){

        },
        render:function(){
            var tmp="none";
            if(this.props.pageIndex==this.props.selectIndex||this.props.selectIndex==-100){
                tmp="block";
            }
            return(
                React.createElement("div",{id:"record_page_div",style:{display:tmp}},
                    React.createElement("div",{className:"record_page_divd"},
                    React.createElement("div",{className:"record_head_div"},
                        React.createElement("label",{className:"record_head_labelright"},"【"+this.props.building.area1+"】"+this.props.building.address)
                    ),
                    React.createElement("hr",{className:"record_head_p"}),
                    React.createElement("div",{className:"record_bInfo_div"},
                        React.createElement("label",{className:"record_bInfo_labelLeft"},"所属网格："),
                        React.createElement("label",{className:"record_bInfo_labelright"},this.props.building.gridId),
                        React.createElement("label",{className:"record_bInfo_labelLeft"},"建筑物编码："),
                        React.createElement("label",{className:"record_bInfo_labelright"},this.props.building.officialNo)
                    ),
                    React.createElement("div",{className:"record_bInfo_div"},
                        React.createElement("table",{id:"record_table"},
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"备用地址"),
                                React.createElement("td",{className:"record_td2"},this.props.building.bakAddress)
                            ),
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"案件来源"),
                                React.createElement("td",{className:"record_td2"},this.props.building.sourceCode)
                            ),
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"发现人"),
                                React.createElement("td",{className:"record_td2"},this.props.building.discoverer)
                            ),
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"发现时间"),
                                React.createElement("td",{className:"record_td2"},this.props.building.discoverTimeFormat)
                            )
                        )
                    ),
                    React.createElement("div",{className:"record_bInfo_div"},
                        React.createElement("p",{className:"record_bInfo_p"},"详细信息")
                    ),
                    React.createElement("div",{className:"record_bInfo_div"},
                        React.createElement("table",{id:"record_table"},
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"房屋编码"),
                                React.createElement("td",{className:"record_td2"},this.props.building.officialNo)
                            ),
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"占地面积"),
                                React.createElement("td",{className:"record_td2"},this.props.building.coverArea)
                            ),
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"建筑面积"),
                                React.createElement("td",{className:"record_td2"},this.props.building.buildArea)
                            ),
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"层数"),
                                React.createElement("td",{className:"record_td2"},this.props.building.totalFloor)
                            ) ,
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"栋数"),
                                React.createElement("td",{className:"record_td2"},this.props.building.totalFloor)
                            )  ,
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"动工情况"),
                                React.createElement("td",{className:"record_td2"},this.props.building.buildFlag==true?"是":"否")
                            ) ,
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"违建类型"),
                                React.createElement("td",{className:"record_td2"},this.props.building.constructCode )
                            )
                        )
                    ),
                    React.createElement("div",{className:"record_bInfo_div"},
                        React.createElement("p",{className:"record_bInfo_p"},"其他信息")
                    ),
                    React.createElement("div",{className:"record_bInfo_div"},
                        React.createElement("table",{id:"record_table"},
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"当事人"),
                                React.createElement("td",{className:"record_td2"},this.props.building.ownerName)
                            ),
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"联系电话"),
                                React.createElement("td",{className:"record_td2"},this.props.building.ownerTel)
                            ),
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"身份证号码"),
                                React.createElement("td",{className:"record_td2"},this.props.building.ownerIdCode)
                            ),
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"违法类型"),
                                React.createElement("td",{className:"record_td2"},this.props.building.illegalCode)
                            ) ,
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"建筑物类型"),
                                React.createElement("td",{className:"record_td2"},this.props.building.groundCode)
                            )  ,
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"建筑类型"),
                                React.createElement("td",{className:"record_td2"},this.props.building.constructCode)
                            ) ,
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"是否重大"),
                                React.createElement("td",{className:"record_td2"},this.props.building.bigCaseFlag==true?"是":"否" )
                            ),
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"大案类型"),
                                React.createElement("td",{className:"record_td2"},this.props.building.bigCaseCode )
                            ),
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"是否立案"),
                                React.createElement("td",{className:"record_td2"},this.props.building.caseFlag==true?"是":"否" )
                            ),
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"立案号"),
                                React.createElement("td",{className:"record_td2"},this.props.building.caseNo )
                            ),
                            React.createElement("tr",{className:"record_tr"},
                                React.createElement("td",{className:"record_td1"},"立案说明"),
                                React.createElement("td",{className:"record_td2"},this.props.building.caseRemark )
                            )
                        )
                    )
                )
                )
            );
        }
    });




//巡查记录详情
var RecordPatrolLogInfo = React.createClass({
    getInitialState:function(){
        return {
        };
    },
    componentDidMount: function(){

    },
    render:function(){
        var _this =this;
        var tmpimgs=[];
        var imgs = [];
        if(typeof(this.props.data.patrolPhotos)!="undefined"&&this.props.data.patrolPhotos!=null&&this.props.data.patrolPhotos!="") {
            this.props.data.patrolPhotos.map(function(edata){
                //tmpimgs.push({filePath: edata.path, thumbnailPath: edata.thumPath});
                imgs.push( React.createElement("div", {className:"record_patrol_imgIdv",ref:"recor_imgdiv"},
                    React.createElement("img", {ref:"recor_img",className:"record_patrol_img",src:edata.thumPath})
                ));//edata.path
            })
        }
        var users="";
        if(typeof (this.props.data.patrolUserList)!="undefined"&&this.props.data.patrolUserList!=null){
            this.props.data.patrolUserList.map(function(data){
                users+=data.userName+"、";
            });
        }
        var action="";
        if(typeof (this.props.data.measures)!="undefined"&&this.props.data.measures!=null){
            this.props.data.measures.map(function(data){
                action+=data.measureCode+"、";
            });
        }
        var tmp="none";
        if(this.props.pageIndex==this.props.selectIndex||this.props.selectIndex==-100){
            tmp="block";
        }
        return(
            React.createElement("div",{id:"record_page_div",style:{display:tmp}},
                React.createElement("div",{className:"record_page_divd"},
                    React.createElement("div",{className:"record_head_div"},
                        React.createElement("label",{className:"record_head_labelright"},"【"+this.props.building.area1+"】"+this.props.building.address)
                    ),
                    React.createElement("hr",{className:"record_head_p"}),
                    React.createElement("div",{className:"record_bInfo_div"},
                        React.createElement("label",{className:"record_bInfo_labelLeft"},"所属网格："),
                        React.createElement("label",{className:"record_bInfo_labelright"},this.props.building.gridId),
                        React.createElement("label",{className:"record_bInfo_labelLeft"},"建筑物编码："),
                        React.createElement("label",{className:"record_bInfo_labelright"},this.props.building.officialNo)
                    ),
                React.createElement("div",{className:"record_bInfo_div"},
                    React.createElement("p",{className:"record_bInfo_p"},"工作记录")
                ),
                React.createElement("div",{className:"executeLogInfo_head_c"},
                    React.createElement("label",{className:"executeLogInfo_head_cl"},"巡查-"+_this.props.data.patrolCode)
                ),
                React.createElement("div",{className:"record_bInfo_div"},
                    React.createElement("table",{id:"record_table"},
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"巡查时间"),
                            React.createElement("td",{className:"record_td2"},this.props.data.createTimeFormat)
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"参与人员"),
                            React.createElement("td",{className:"record_td2"},users)
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"危害等级"),
                            React.createElement("td",{className:"record_td2"},this.props.data.harmfulCode)
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"现场情况"),
                            React.createElement("td",{className:"record_td2"},this.props.data.remark)
                        )
                    )
                ),
                React.createElement("div",{id:"executeLogInfo_main"},
                    React.createElement("div",{className:"executeLogInfo_main_div"},
                        imgs
                    )
                )
            )
            )
            );
    }
});

//通知书详情
var RecordNotficationLogInfo = React.createClass({
    getInitialState:function(){
        return {
        };
    },
    componentDidMount: function(){

    },
    render:function(){
        var tmp="none";
        if(this.props.pageIndex==this.props.selectIndex||this.props.selectIndex==-100){
            tmp="block";
        }
        var src="";
        if(typeof (this.props.data.img)!="undefined"){
            src=this.props.data.img.path;
        }
        return(
            React.createElement("div",{id:"record_page_div",style:{display:tmp}},
                React.createElement("div",{className:"record_page_divd"},
                    React.createElement("div",{className:"record_head_div"},
                        React.createElement("label",{className:"record_head_labelright"},"【"+this.props.building.area1+"】"+this.props.building.address)
                    ),
                    React.createElement("hr",{className:"record_head_p"}),
                    React.createElement("div",{className:"record_bInfo_div"},
                        React.createElement("label",{className:"record_bInfo_labelLeft"},"所属网格："),
                        React.createElement("label",{className:"record_bInfo_labelright"},this.props.building.gridId),
                        React.createElement("label",{className:"record_bInfo_labelLeft"},"建筑物编码："),
                        React.createElement("label",{className:"record_bInfo_labelright"},this.props.building.officialNo)
                    ),
                React.createElement("div",{className:"record_bInfo_div"},
                    React.createElement("p",{className:"record_bInfo_p"},"工作记录")
                ),
                React.createElement("div",{className:"executeLogInfo_head_c"},
                    React.createElement("label",{className:"executeLogInfo_head_cl"},"通知书记录")
                ),
                React.createElement("div",{className:"record_bInfo_div"},
                    React.createElement("table",{id:"record_table"},
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"已制发文书"),
                            React.createElement("td",{className:"record_td2"},this.props.data.typeCode)
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"制发时间"),
                            React.createElement("td",{className:"record_td2"},this.props.data.createTimeFormat)
                        )
                    )
                ),
                React.createElement("div",{id:"executeLogInfo_main"},
                    React.createElement("div",{className:"executeLogInfo_main_div"},
                        React.createElement("div",{className:"record_notfication_imgdiv"},
                            React.createElement("img",{className:"record_notfication_img",src:src})//src
                        )
                    )
                )
            )
            )
            );
    }
});

//审批详情
var RecordProposerLogInfo = React.createClass({
    getInitialState:function(){
        return {
            data:this.props.data[0]
        };
    },
    componentDidMount: function(){

    },
    render:function(){
        if(typeof (this.props.data)=="undefined"||this.props.data==null||this.props.data==""){
            return ( React.createElement("div",{id:"record_page_div",style:{display:tmp}}));
        }

        var tmp="none";
        if(this.props.pageIndex==this.props.selectIndex||this.props.selectIndex==-100){
            tmp="block";
        }
        return(
            React.createElement("div",{id:"record_page_div",style:{display:tmp}},
                React.createElement("div",{className:"record_page_divd"},
                    React.createElement("div",{className:"record_head_div"},
                        React.createElement("label",{className:"record_head_labelright"},"【"+this.props.building.area1+"】"+this.props.building.address)
                    ),
                    React.createElement("hr",{className:"record_head_p"}),
                    React.createElement("div",{className:"record_bInfo_div"},
                        React.createElement("label",{className:"record_bInfo_labelLeft"},"所属网格："),
                        React.createElement("label",{className:"record_bInfo_labelright"},this.props.building.gridId),
                        React.createElement("label",{className:"record_bInfo_labelLeft"},"建筑物编码："),
                        React.createElement("label",{className:"record_bInfo_labelright"},this.props.building.officialNo)
                    ),
                React.createElement("div",{className:"record_bInfo_div"},
                    React.createElement("p",{className:"record_bInfo_p"},"工作记录")
                ),
                this.props.data.map(function(data){
                     if(data.type=="firstAudit"){
                         return(
                             React.createElement("div",{},
                                 React.createElement("div",{className:"executeLogInfo_head_c"},
                                     React.createElement("label",{className:"executeLogInfo_head_cl"},"上报")
                                 ),
                                 React.createElement("div",{className:"record_bInfo_div"},
                                     React.createElement("table",{id:"record_table"},
                                         React.createElement("tr",{className:"record_tr"},
                                             React.createElement("td",{className:"record_td1"},"上报人"),
                                             React.createElement("td",{className:"record_td2"},data.record.auditor)
                                         ),
                                         React.createElement("tr",{className:"record_tr"},
                                             React.createElement("td",{className:"record_td1"},"上报时间"),
                                             React.createElement("td",{className:"record_td2"},data.record.auditTimeFormat)
                                         )
                                     )
                                 )
                             )
                         );
                     }else{
                         return(
                             React.createElement("div",{},
                                 React.createElement("div",{className:"executeLogInfo_head_c"},
                                     React.createElement("label",{className:"executeLogInfo_head_cl"},"审批")
                                 ),
                                 React.createElement("div",{className:"record_bInfo_div"},
                                     React.createElement("table",{id:"record_table"},
                                         React.createElement("tr",{className:"record_tr"},
                                             React.createElement("td",{className:"record_td1"},"审批人"),
                                             React.createElement("td",{className:"record_td2"},data.record.auditor)
                                         ),
                                         React.createElement("tr",{className:"record_tr"},
                                             React.createElement("td",{className:"record_td1"},"审批时间"),
                                             React.createElement("td",{className:"record_td2"},data.record.auditTimeFormat)
                                         ),
                                         React.createElement("tr",{className:"record_tr"},
                                             React.createElement("td",{className:"record_td1"},"审批意见"),
                                             React.createElement("td",{className:"record_td2"},data.record.remark)
                                         )
                                     )
                                 )
                             )
                         );
                     }
                })
                )
            )
            );
    }
});

//执法记录详情1
var RecordEnforceLogInfo1 = React.createClass({
    getInitialState:function(){
        return {
        };
    },
    componentDidMount: function(){

    },
    render:function(){
        var action="";
        if(typeof (this.props.data.measures)!="undefined"&&this.props.data.measures!=null){
            this.props.data.measures.map(function(data){
                action+=data.measureCode+"、";
            });
        }
        var tmp="none";
        if(this.props.pageIndex==this.props.selectIndex||this.props.selectIndex==-100){
            tmp="block";
        }
        return(
            React.createElement("div",{id:"record_page_div",style:{display:tmp}},
                React.createElement("div",{className:"record_page_divd"},
                    React.createElement("div",{className:"record_head_div"},
                        React.createElement("label",{className:"record_head_labelright"},"【"+this.props.building.area1+"】"+this.props.building.address)
                    ),
                    React.createElement("hr",{className:"record_head_p"}),
                    React.createElement("div",{className:"record_bInfo_div"},
                        React.createElement("label",{className:"record_bInfo_labelLeft"},"所属网格："),
                        React.createElement("label",{className:"record_bInfo_labelright"},this.props.building.gridId),
                        React.createElement("label",{className:"record_bInfo_labelLeft"},"建筑物编码："),
                        React.createElement("label",{className:"record_bInfo_labelright"},this.props.building.officialNo)
                    ),
                React.createElement("div",{className:"record_bInfo_div"},
                    React.createElement("p",{className:"record_bInfo_p"},"工作记录")
                ),
                React.createElement("div",{className:"executeLogInfo_head_c"},
                    React.createElement("label",{className:"executeLogInfo_head_cl"},"执法")
                ),
                React.createElement("div",{className:"record_bInfo_div"},
                    React.createElement("table",{id:"record_table"},
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"查处时间"),
                            React.createElement("td",{className:"record_td2"},this.props.data.enforceDate)
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"查处负责人"),
                            React.createElement("td",{className:"record_td2"},this.props.data.leader)
                        ) ,
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"手机号码"),
                            React.createElement("td",{className:"record_td2"},"")
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"PDA号码"),
                            React.createElement("td",{className:"record_td2"},"")
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"危害等级"),
                            React.createElement("td",{className:"record_td2"},this.props.data.harmfulCode)
                        ) ,
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"查处情况"),
                            React.createElement("td",{className:"record_td2"},this.props.data.enforceRemark)
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"是否到位"),
                            React.createElement("td",{className:"record_td2"},this.props.data.endFlag==true?"是":"否")
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"未到位原因"),
                            React.createElement("td",{className:"record_td2"},this.props.data.endReason)
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"联动情况"),
                            React.createElement("td",{className:"record_td2"},this.props.data.cooperationRemark)
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"投入人数"),
                            React.createElement("td",{className:"record_td2"},this.props.data.crewsCount)
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"已采取措施"),
                            React.createElement("td",{className:"record_td2"},action)
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"是否已拆除"),
                            React.createElement("td",{className:"record_td2"},this.props.data.destroyFlag==true?"是":"否")
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"拆除永久建筑面积"),
                            React.createElement("td",{className:"record_td2"},this.props.data.buildArea+"m",
                                React.createElement("sup",{className:""},2))
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"拆除永久层数"),
                            React.createElement("td",{className:"record_td2"},this.props.data.floorCount+"层")
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"拆除临时建筑面积"),
                            React.createElement("td",{className:"record_td2"},this.props.data.tempArea+"m",
                                React.createElement("sup",{className:""},2))
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"拆除临时栋数"),
                            React.createElement("td",{className:"record_td2"},this.props.data.tempBlockCount+"栋")
                        ) ,
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"回填基础面积"),
                            React.createElement("td",{className:"record_td2"},this.props.data.backfillArea+"m",
                                React.createElement("sup",{className:""},2))
                        ),
                        React.createElement("tr",{className:"record_tr"},
                            React.createElement("td",{className:"record_td1"},"其他"),
                            React.createElement("td",{className:"record_td2"},this.props.data.otherRemark)
                        )
                    )
                )
            )
            )
        );
    }
});

//执法记录详情2
var RecordEnforceLogInfo2 = React.createClass({
    getInitialState:function(){
        return {
            data:this.props.data[0]
        };
    },
    componentDidMount: function(){

    },
    render:function(){
        var tmpimgs=[];
        if(typeof(this.props.data.afEnforcePhotos)!="undefined"&&this.props.data.afEnforcePhotos!=null&&this.props.data.afEnforcePhotos!="") {
            this.props.data.afEnforcePhotos.map(function(edata){
                tmpimgs.push(React.createElement("div",{className:"record_Proposer_imgdiv"},React.createElement("img",{className:"record_Proposer_img",src:edata.thumPath})));
            })

            ///test
//            for(var i=0;i<6;i++){
//                tmpimgs.push(React.createElement("div",{className:"record_Proposer_imgdiv"},React.createElement("img",{className:"record_Proposer_img",src:"../images/weijian6.png"})));
//            }
        }

        var tmp="none";
        if(this.props.pageIndex==this.props.selectIndex||this.props.selectIndex==-100){
            tmp="block";
        }
        return(
            React.createElement("div",{id:"record_page_div",style:{display:tmp}},
                React.createElement("div",{className:"record_page_divd"},
                    React.createElement("div",{className:"record_head_div"},
                        React.createElement("label",{className:"record_head_labelright"},"【"+this.props.building.area1+"】"+this.props.building.address)
                    ),
                    React.createElement("hr",{className:"record_head_p"}),
                    React.createElement("div",{className:"record_bInfo_div"},
                        React.createElement("label",{className:"record_bInfo_labelLeft"},"所属网格："),
                        React.createElement("label",{className:"record_bInfo_labelright"},this.props.building.gridId),
                        React.createElement("label",{className:"record_bInfo_labelLeft"},"建筑物编码："),
                        React.createElement("label",{className:"record_bInfo_labelright"},this.props.building.officialNo)
                    ),
                React.createElement("div",{className:"record_bInfo_div"},
                    React.createElement("p",{className:"record_bInfo_p"},"工作记录")
                ),
                React.createElement("div",{className:"executeLogInfo_head_c"},
                    React.createElement("label",{className:"executeLogInfo_head_cl"},"执法")
                ),
                React.createElement("div",{className:"executeLogInfo_title_c"},
                    React.createElement("label",{className:"executeLogInfo_title_cl"},"查处前")
                ),
                React.createElement("div",{id:"executeLogInfo_main"},
                    React.createElement("div",{className:"executeLogInfo_main_div"},
                        tmpimgs
                    )
                )
            )
            )
            );
    }
});

//执法记录详情3
var RecordEnforceLogInfo3 = React.createClass({
    getInitialState:function(){
        return {
            data:this.props.data[0]
        };
    },
    componentDidMount: function(){

    },
    render:function(){
        var tmpimgs = [];
        if(typeof(this.props.data.beEnforcePhotos)!="undefined"&&this.props.data.beEnforcePhotos!=null&&this.props.data.beEnforcePhotos!="") {
            this.props.data.beEnforcePhotos.map(function(edata){
                tmpimgs.push(React.createElement("div",{className:"record_Proposer_imgdiv"},React.createElement("img",{className:"record_Proposer_img",src:edata.thumPath})));
            })
        }

        var tmp="none";
        if(this.props.pageIndex==this.props.selectIndex||this.props.selectIndex==-100){
            tmp="block";
        }
        return(
            React.createElement("div",{id:"record_page_div",style:{display:tmp}},
                React.createElement("div",{className:"record_page_divd"},
                    React.createElement("div",{className:"record_head_div"},
                        React.createElement("label",{className:"record_head_labelright"},"【"+this.props.building.area1+"】"+this.props.building.address)
                    ),
                    React.createElement("hr",{className:"record_head_p"}),
                    React.createElement("div",{className:"record_bInfo_div"},
                        React.createElement("label",{className:"record_bInfo_labelLeft"},"所属网格："),
                        React.createElement("label",{className:"record_bInfo_labelright"},this.props.building.gridId),
                        React.createElement("label",{className:"record_bInfo_labelLeft"},"建筑物编码："),
                        React.createElement("label",{className:"record_bInfo_labelright"},this.props.building.officialNo)
                    ),
                    React.createElement("div",{className:"record_bInfo_div"},
                        React.createElement("p",{className:"record_bInfo_p"},"工作记录")
                    ),
                    React.createElement("div",{className:"executeLogInfo_head_c"},
                        React.createElement("label",{className:"executeLogInfo_head_cl"},"执法")
                    ),
                    React.createElement("div",{className:"executeLogInfo_title_c"},
                        React.createElement("label",{className:"executeLogInfo_title_cl"},"查处后")
                    ),
                    React.createElement("div",{id:"executeLogInfo_main"},
                        React.createElement("div",{className:"executeLogInfo_main_div"},
                            tmpimgs
                        )
                    )
                )
            )
            );
    }
});


//ReactDOM.render(React.createElement(BuildingInfo,{}), document.body);