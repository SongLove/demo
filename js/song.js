/**
 * Created by Administrator on 2017/7/16.
 */
$(function () {
    /*页面图片轮播*/
    var timebj=0;
    var arrbj=["b"];
    var s=["time1.jpg","time2.jpg","time3.jpg","time4.jpg"];
    $("#section0").css("background-image","url("+s[0]+")");
    setInterval(function () {
            $("#section0").css("background-image","url("+s[timebj]+")");
            timebj++;
            if(timebj>=4){
                timebj=0;
            }
    },2000);

    //导航条显示
    $("#more").bind("click",function () {
        $(".fix").stop().slideToggle(300);
    });
    window.onscroll = function () {
        var bdscrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //console.log(bdscrollTop);
        if(bdscrollTop > 700){
            $("#nav-fix").addClass("fixed-nav");
        }else{
            $("#nav-fix").removeClass("fixed-nav");
        }
        /*滚动相应DVI导航字体加颜色*/
        $(".section").each(function () {
            var section_top = $(this).offset().top-100;
            var section_index = $(this).index();
            if(bdscrollTop > section_top){
                $(".ul-display li").eq(section_index).addClass("on").siblings().removeClass("on");
                $(".ul-display.fix li").eq(section_index).addClass("on").siblings().removeClass("on");
                $(".section").eq(section_index).addClass("active");
            }
           // console.log($(this).offset().top);
        })
    }
    /*点击导航跳转到相应的块*/
    $(".ul-display li").click(function () {
        var bdscrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var index = $(this).index();
        var section_top = $(".section").eq(index).offset().top-70;
        if(index==1){
            section_top+=20;
        }
        $("body").animate({
            scrollTop:section_top
        },"slow");
        console.log(index);
    })

    window.onresize = function () {
        var body = document.body.clientWidth;
        console.log(body);
        if(body>1000){
            $("#xx").hide();
        }else if(body < 800){
            $("#xx li").click(function () {
                $("#xx").hide();
            })
        }
    }
})