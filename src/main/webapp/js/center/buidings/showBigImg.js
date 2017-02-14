// JavaScrcommon_ipt Document
var ShowBigImg = React.createClass({
    getInitialState: function getInitialState() {
        return {
            data:""

        };
    },
    componentDidMount: function(){
//    		$(document).ready(function(){
//    			$(".lightbox-2").lightbox({
//    			    fitToScreen: true,
//    			    scaleImages: true,
//    			    xScale: 1.2,
//    			    yScale: 1.2,
//   			    displayDownloadLink: true
//    		    });
//    		});
    },
    render:function()
    {
        return (
            React.createElement("a",{href:"../images/nanao.jpg",className:"lightbox-2",rel:"flowers"},
            		React.createElement("image",{src:"../images/1460713362190.jpg",className:"showsmallImg_img"})
            )
        );
    }
});