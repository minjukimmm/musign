//메인메뉴의 움직이는 바
$('.gnb li a').mouseenter(function(){
    let bar=$(this).position().left;
    console.log(bar)
    let widNum=$(this).width();
    //$('.bar').animate({실행문},시간)
    $('.bar').animate({
        'left':bar+"px",
        'width':widNum+"px",
        'opacity':1
        },300)
})

$('.gnb').mouseleave(function(){
 
    $('.bar').animate({
        'left':0,
        'width':0,
        'opacity':0
        },10)
})

$('.animate').scrolla({
    // default
    mobile: true, // disable animation on mobiles
    once: false, // only once animation play on scroll
    animateCssVersion: 4 // used animate.css version (3 or 4)
});

//$('.menuOpen .open').on('click',function(){})
$('.menuOpen .open').click(function(){
$('.menuOpen .menuWrap').addClass('on')
})
$('.menuWrap .close').click(function(){
    $('.menuOpen .menuWrap').removeClass('on')
    })

//background color 변경
$(window).scroll(function(){
    //$(this)는 window
    let scrollTop=$(this).scrollTop();
    console.log(scrollTop)
    let offset=$('.service').offset().top - 400;
    if(scrollTop>offset){
        $('body').addClass('on')
    }else{
        $(body).removeClass('on')
    }
});