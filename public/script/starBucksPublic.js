(function($, window){
    var starBucksPublic = {
        init: function(){
            this.header();
            this.goTop();
            this.mobileNav();
        },
        header: function(){
            //모바일 버튼 이벤트
            $('.berger-btn').on({
              click: function(){
                  $('#mobileNav').addClass('addMobile');
              }
            });

            // 통합검색 버튼 클릭 이벤트
            $('.find-btn').on({
                click: function(){
                    $('.find-box').toggleClass('addInput');
                }
            });

            //네비게이션 메인메뉴 마우스 이벤트
            $('.main-btn').on({
                mouseenter: function(){
                    $('.main-btn').removeClass('addCurret');
                    $(this).addClass('addCurret');
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(700,'easeOutExpo');
                },
                focusin: function(){
                    $('.main-btn').removeClass('addCurret');
                    $(this).addClass('addCurret');
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(700,'easeOutExpo');
                }
            });

            //네비게이션을 마우스가 떠나면 모두 초기화
            $('#nav').on({
                mouseleave: function(){
                    $('.main-btn').removeClass('addCurret');
                    $('.sub').stop().slideUp(700,'easeOutExpo');
                }
            });
        },
        goTop: function(){

            //버튼클릭 이벤트
            //스무스 스크롤링
            $('.go-top-btn').on({
                click: function(){
                    $('html, body').stop().animate({scrollTop:0},600,'easeOutExpo');
                }
            });
            
            $('.go-top').stop().fadeOut(1000);

            $(window).scroll(function(){
                if( $(window).scrollTop() >=100 ){
                    $('.go-top').stop().fadeIn(1000);
                }
                else{
                    $('.go-top').stop().fadeOut(1000);
                }
            });
        },
        mobileNav: function(){
            //모바일
            $('.berger-btn').on({   // open
                click: function(e){
                    e.preventDefault();
                    $('#mobileNav').addClass('addMobile');
                    $('.mobile-container').stop().animate({left:0},500);
                }
            });

            var t=false;
            $(window).resize(function(){
              if($(window).width()>960){
                $('.mobile-container').stop().animate({left:110+'%'},400, function(){
                  $('#mobileNav').removeClass('addMobile');
                });
                // 강제 클릭 제이쿼리 함수 trigger(이벤트)
                if(t==false){
                  t=true;
                  $('.mobile-colse').trigger('click');
                }
              }
              else {  // 창너비가 960 미만이면
                t=false;
              }
            });
            
            $('.mobile-close-btn').on({
                click: function(){
                    $('.mobile-container').stop().animate({left:100+'%'},300, function(){
                        $('#mobileNav').removeClass('addMobile');
                    });
                }
            });

            // 모바일 메뉴버튼 이벤트 > 서브메뉴 펼치기
            $('.mobile-container li a').on({
                click: function(){
                    $(this).next('div').slideToggle(400);
                    $(this).toggleClass('addMobile');
                }
            });
        }
    }
    starBucksPublic.init();   //스타벅스 객체 init() 매서드 실행
})(jQuery, window);