/* 헤더 상단 고정 */
$(function(){
    $(window).scroll(function(){
        var top = $(this).scrollTop();

        if(top > 150){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });
    $(window).trigger('scroll');
});




/* 메인네비게이션  */
$(function(){
    var gnb = '.gnb';
    var mainnav = '.mainnav';
    var subnav = '.subnav';
    var speed = 'fast';

    var subbg = $('<div class="subbg"></div>');
    $('header').append(subbg);


    
    $(gnb).hover(function(){
        $(this).find(subnav).add(subbg).stop().slideDown(speed);
    },function(){
        $(this).find(subnav).add(subbg).stop().slideUp(speed);
        $(mainnav).removeClass('active');
    });
    

    $(mainnav).first().focus(function(){
        $(gnb).trigger('mouseenter');
    });

    $(mainnav).focus(function(){
        $(subnav).removeClass('active');
        $(subnav).addClass('active');
    });


    $(mainnav).first().focus(function(){
        $(gnb).trigger('mouseenter');
    });


    $(subnav).last().find('a:last').keydown(function(e){
        if(e.keyCode == 9){
            if(!e.shiftKey){
                $(gnb).trigger('mouseleave');
            }
        }
    });


    $(mainnav).first().keydown(function(e){
        if(e.keyCode == 9){
            if(e.shiftKey){
                $(gnb).trigger('mouseleave');
            }
        }
    });
});



/* footer - family site */

$(function(){


    var familysite = '.family_site';
     var speed = 'fast';  //밀리초 단위로 써도됨

    $(familysite).find('button').click(function(){
        $(this).next().stop().slideToggle(speed);
        $(this).toggleClass('active');
        
    });

    $(familysite).mouseleave(function(){
    $(familysite).find('.transparent').stop().slideUp(speed);
    $(familysite).find('button').removeClass('active');
    }); 
})


