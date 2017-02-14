// JavaScrcommon_ipt Document


var showbigImgstyle = {
    position:"absolute"
};
var showbigImgDivstyle = {
    position:"relative"
};
var ShowBigImg = React.createClass({
    getInitialState: function getInitialState() {
        return {
            data:""

        };
    },
    componentDidMount: function(){
        $(document).ready(function(){
            $(".lightbox-2").lightbox({
                fitToScreen: true,
                scaleImages: true,
                xScale: 1.2,
                yScale: 1.2,
                displayDownloadLink: true
            });
        });
    },

    hanOnMaxImagenone: function(){
        $(".showbigImg_img").hide();
    },
    render:function()
    {
        var tmp=[];
        if(typeof (this.props.imgList)!="undefined"){
            this.props.imgList.map( function(data){
                    tmp.push(React.createElement("a",{ className:"lightbox-2",href:data.filePath,rel:"flowers"},
                        React.createElement("image",{className:"showsmallImg_img",src:data.thumbnailPath,alt:"图片正在加载中..."})
                    ));
                }
            )
        }
        return (
            React.createElement("div",{ className:"showBigImg_div"},
                 tmp
            )
        );
    }
});