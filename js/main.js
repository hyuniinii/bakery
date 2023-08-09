
//popup
$(document).ready(function(){
  //쿠키(cookie) : 사용자 컴퓨터에 저장되는 작은 텍스트 파일
  //사용자가 웹브라우저에 접속 : 쿠키 발생

  //n일 만료 함수 선언 - 생각만 하고 있는 상태
  //name : 쿠키 이름을 지정하는 매개변수
  //value : 쿠키 값을 지정하는 매개변수
  //expire : 만료일 - 숫자로 지정
  function setCookie(name,value,expire){
      var today = new Date();

      today.setDate(today.getDate() + expire);

      //쿠키값만들기
      document.cookie = name + '=' + value + '; path=/; expires=' + today.toGMTString() + ';';
  }

  //문서객체 담기
  var popup = '.popup';
  var chk = '#chk_box';

  //2. close를 클릭했을 때
  $(popup).find('a').click(function(e){
      e.preventDefault(); //기본이벤트 제거

      //prop() : 문서객체의 태그속성을 컨트롤하는 메서드
      //속성명과 속성값이 같을 때 값을 true/false로 처리
      var chkValue = $(chk).prop('checked');

      if(chkValue){ //체크되었다면
          //만료함수 호출
          setCookie('exCookie','yes',1); //일주일 뒤면 숫자를 7로 변경
      }

      $(popup).stop().fadeOut(0); //사라지게 처리
  });

  //초기실행 - 쿠키값을 확인해서 쿠키값 여부에 따라 팝업창을 보여줄지 말지 결정
  var cookieData = document.cookie;

  //indexOf() : String메서드 - 문자열에 값이 있으면 0을 반환, 없으면 -1 혹은 -2를 반환
  if(cookieData.indexOf('exCookie=yes') < 0){ //exCookie가 없다 = 체크박스를 체크하지 않음
      $(popup).fadeIn(0); //팝업 보임
  }else{ //체크박스를 체크했다면
      $(popup).fadeOut(0);
  }


});



/* 메인배너 이미지 */
$(document).ready(function(){
    var swiper = new Swiper("main .swiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: "main .swiper-pagination",
            clickable: true,
        },
        loop: true,
        speed: 600,
      });
});






/*  our_touslesjours _ ourBestMenu _ select button */
$(function(){

    var select = '.our_touslesjours .select';
    var speed = 'fast';  //밀리초 단위로 써도됨
    var category ='.our_touslesjours .select a';

    $(select).find('button').click(function(){
        $(this).next().find('.tab_box').stop().slideToggle(speed);
        $(this).toggleClass('active');
        
    });

    $(select).mouseleave(function(){
      $(this).find('.tab_box').stop().slideUp(speed);
    });

    $(category).click(function(){
      $(select).find('.tab_box').stop().slideUp(speed);
    });
  
    $(category).click(function(e){
      e.preventDefault();
      var text = $(this).html();
      $(select).find('.default').html(text);
    });
});





/*  our_touslesjours _  tab_contents  (스와이퍼) */
$(document).ready(function(){
  var swiper  = new Swiper('.best_swiper .swiper.best01', {
    loop: true,
    navigation: {
    },
    slidesPerView: 4,
    spaceBetween: 100,
    autoplay: {
        delay: 1800,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".best_swiper .best01 .swiper-pagination",
      clickable: true,
  },
}); 

  
  $('.gallery .tab_btn a').click(function(){

      $('.gallery .btn a').removeClass('active');
      $(this).addClass('active');

      var index = $(this).parent().index();
      
      $('.our_touslesjours .best_swiper > div').removeClass('active');

      $('.our_touslesjours .best_swiper > div').eq(index).addClass('active');


      //스와이퍼
      swiper.destroy();

      if(index==0){
        swiper  = new Swiper('.best_swiper .swiper.best01', {
          loop: true,
          navigation: {
          },
          slidesPerView: 4,
          spaceBetween: 100,
          autoplay: {
              delay: 1800,
              disableOnInteraction: false,
          },
          pagination: {
            el: ".best_swiper .best01 .swiper-pagination",
            clickable: true,
          },
        }); 
      }else if(index==1){
        swiper  = new Swiper('.best_swiper .swiper.best02', {
          loop: true,
          navigation: {
          },
          slidesPerView: 4,
          spaceBetween: 100,
          autoplay: {
              delay: 1800,
              disableOnInteraction: false,
          },
          pagination: {
            el: ".best_swiper .best02 .swiper-pagination",
            clickable: true,
          },
        }); 
      }else if(index==2){
        swiper  = new Swiper('.best_swiper .swiper.best03', {
          loop: true,
          navigation: {
          },
          slidesPerView: 4,
          spaceBetween: 100,
          autoplay: {
              delay: 1800,
              disableOnInteraction: false,
          },
          pagination: {
            el: ".best_swiper .best03 .swiper-pagination",
            clickable: true,
          },
        }); 
      }else if(index==3){
        swiper  = new Swiper('.best_swiper .swiper.best04', {
          loop: true,
          navigation: {
          },
          slidesPerView: 4,
          spaceBetween: 100,
          autoplay: {
              delay: 1800,
              disableOnInteraction: false,
          },
          pagination: {
            el: ".best_swiper .best04 .swiper-pagination",
            clickable: true,
          },
        }); 
      }
  });
});






/* ourBestMenu _ tab_bar */
$(document).ready(function(){
    $('.tab_btn a').click(function(e){
        e.preventDefault(); /* 위로 올라가는것 방지 */

        $('.best_menu .tab_btn a').click(function(){
            $('.best_menu .tab_btn a').removeClass('active');
            $(this).addClass('active');

            var index = $(this).parent().index(); 

            $('.best_menu .contents > div').removeClass('active');
            $('.gallery .contents > div').eq(index).addClass('active');
        });
    });
});






//event
$(document).ready(function(){
  $(window).scroll(function(){
      var top = $(this).scrollTop();

      if(top > 900){
          $('.inner_wrap').addClass('active');
      }else{
        $('.inner_wrap').removeClass('active');
      }

  });
});
