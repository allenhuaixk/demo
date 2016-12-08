//测试浏览器可视宽度
window.onresize=function(){
    var noww = document.body.clientWidth;
    var nowh = document.body.clientHeight;
    console.log(noww,nowh)
}

//当页面加载完毕的时候
$(function(){

    //注册点击事件实现页面下滑
    $('.btn-list>li>a').click(function(){
        var headerHeight=$('.header').height(),
            bannerListHeight=$('.banner-list').height(),
            allHeight=headerHeight+bannerListHeight;

        $('.btn-list>li>a').removeClass('font-current');

        $(this).addClass('font-current');

        var index=$(this).attr('index');

        $('html,body').animate({scrollTop:$("#link_"+index+"").offset().top-headerHeight},500);

    })

    //通过滚动事件实现头部和导航栏的重合
    $(window).scroll(function() {
        //让我们先获取头部和导航栏的高度吧 哈哈
        var headerHeight=$('.header').height(),
            bannerListHeight=$('.banner-list').height(),
            allHeight=headerHeight+bannerListHeight,
            topHeight=$(document).scrollTop();
       //现在让我们做个判断吧
        if(topHeight==0){
            $('.header').slideDown(1200);
            $('#tag-logo').css('display','none');
        }
        else{
            $('.header').slideUp(1200);
            $('#tag-logo').slideDown(1200);
        }


    });

    //导航栏固定定位
    $(".banner-list").sticky({topSpacing:0});
    console.log($('.header').height());

})