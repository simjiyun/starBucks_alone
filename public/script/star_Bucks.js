(function($, window){
    var starBucks = {
        init: function(){
            this.section1();
            this.section2Notice();  // 객체를 다르게 하면
            this.section2Slide();   // 변수, 함수 충돌을 막을 수 있다.
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.quickMenu();
        },
        section1: function(){
            //애니메이션 페이드 인 효과
            function ani(){
                $('.img').eq(0).stop().animate({opacity:1},700, function(){
                    $('.img').eq(1).stop().animate({opacity:1},600, function(){
                        $('.img').eq(2).stop().animate({opacity:1},600, function(){
                            $('.img').eq(3).stop().animate({opacity:1},600, function(){
                                $('.img').eq(4).stop().animate({opacity:1},600);
                            });
                        });
                    });
                });
            }
            setTimeout(ani, 100);

        },
        section2Notice: function(){
            var cnt = 0;

            // 1.메인 슬라이드 함수
            function mainSlide(){
                $('.notice').css({zIndex:1}).stop().animate({top:24},0);
                $('.notice').eq(cnt==0 ? 4 : cnt-1).css({zIndex:2}).stop().animate({top:0},0);
                $('.notice').eq(cnt).css({zIndex:3}).stop().animate({top:24},0).animate({top:0},1000);
            }

            // 2.다음 카운트 함수
            function nextCount(){
                cnt++;  //출발 1       2 3 4 0 1 2 3 4 0 1 2 3 4
                if(cnt>4){cnt=0}
                mainSlide();
            }

            // 3.자동타이머 함수(셋인터발)
            function autoTimer(){
                setInterval(nextCount,3000);
            }
            setTimeout(autoTimer,100);
        },
        section2Slide: function(){
            var cnt=0;
            var setId=null;
            var winW = $(window).innerWidth()*0.9;  // 창너비의 90% 크기

            // 반응형
            function resizeFn(){
                if($(window).innerWidth()<=829){
                    winW = $(window).innerWidth()*0.9;
                }
                else {
                    winW = 829;
                }

                $('.slide').css({width: winW});     //슬라이드 너비
                $('.slide-wrap').stop().animate({left:-winW*cnt},0);    // 실시간으로 메인 슬라이드 연동 반응 즉각
            }
            resizeFn();

            $(window).resize(function(){
                resizeFn();
            });



            // 1.메인 슬라이드 함수
            function mainSlide(){
                $('.slide-wrap').stop().animate({left:-winW*cnt},600,function(){
                    if(cnt>2){cnt=0}
                    if(cnt<0){cnt=2}
                    $('.slide-wrap').stop().animate({left:-winW*cnt},0);
                    // 슬라이드 번호별 스타일 적용 addClass
                    $('.slide').removeClass('addCurrent');
                    $('.slide').eq(cnt+1).addClass('addCurrent');
                });
                pageEvent();
            }

            // 2-1.다음 카운트 함수
            function nextCount(){
                cnt++;
                mainSlide();
            }
            // 2-1.이전 카운트 함수
            function prevCount(){
                cnt--;
                mainSlide();
            }

            // 3.자동타이머 함수(셋인터발)
            function autoTimer(){
                setId = setInterval(nextCount,3000);
            }
            // autoTimer();

            // 4.페이지 이벤트 함수
            // 효과적용 : 동그라미 색상 변경 현재 슬라이드에만 적용
            //동그라미 이미지 속성 src='' 값을 변경 속성 (attribute 어트리뷰트 : 속성변경)
            // 현재 슬라이드의 페이지버튼 자식요소인 이미지 src 속성 변경
            function pageEvent(){
                $('.page-btn')        .children().attr('src','./images/main_prom_off.png');
                $('.page-btn').eq(cnt==3?0:cnt).children().attr('src','./images/main_prom_on.png');
            }

            // 5. 페이지버튼 클릭 이벤트
            // $('.page-btn').eq(0).on({
            //     click: function(e){
            //         e.preventDefault();
            //         cnt=0;
            //         mainSlide();
            //     }
            // })
            // $('.page-btn').eq(1).on({
            //     click: function(e){
            //         e.preventDefault();
            //         cnt=1;
            //         mainSlide();
            //     }
            // })
            // $('.page-btn').eq(2).on({
            //     click: function(e){
            //         e.preventDefault();
            //         cnt=2;
            //         mainSlide();
            //     }
            // })

            // 배열 반복처리
            $('.page-btn').each(function(idx){
                $(this).on({
                    click: function(e){
                        e.preventDefault();
                        cnt=idx;
                        mainSlide();
                        stopFn();
                    }
                });
            });

            // 6. 일시정지와 플레이버튼 클릭 이벤트
            // 클래스 활용 hasClass() 메서드 이용 : true or false 반환
            // 클릭하여 선택한 요소에 해당 클래스(on)가 있는지 없는지 검색
            // true 이면 있다, flase 이면 없다

            function stopFn(){
                $('.play-btn').children().attr('src','./images/main_prom_play.png');
                $('.play-btn').removeClass('on');  // 삭제
                // 슬라이드 정지
                clearInterval(setId);
            }
            function playFn(){
                $('.play-btn').children().attr('src','./images/main_prom_stop.png');
                $('.play-btn').addClass('on');    //꺼짐 클래스 추가 
                // 슬라이드 재생
                autoTimer();
            }

            $('.play-btn').on({
                click: function(e){
                    e.preventDefault();
                    // 이 버튼에 on 클래스가 있냐고 물어보는 것. 있으면 true가 나옴.
                    // console.log( $(this).hasClass('on') );

                    // var a=1     //숫자  Integer
                    // var b='1'   //문자  String
                    //     console.log('a===b 결과 논리값까지 비교 정확하게 비교 ', a===b);   //false
                    //     console.log('a==b 결과 형태만 비교해서 불정확하게 비교 ', a==b)     //true
                    //     // 논리값까지 비교할 때는 === 를 쓴다

                    if( $(this).hasClass('on') ){   //참이면
                    // if( $(this).is('on')){   //클래스 아이디 요소
                        stopFn();
                    }
                    else{
                        // $(this).children().attr('src','./images/main_prom_stop.png');
                        // $(this).removeClass('off');  // 삭제
                        // $(this).addClass('on');    //꺼짐 클래스 추가 
                        // // 슬라이드 재생
                        // autoTimer();
                        playFn();
                    }
                }
            });
            

            // 타이머를 중지 시킨다.
            // 타이머를 중지 하려면 반드시 타이머 변수 필요 setId
            // 중지되면 이미지 아이콘 모양이 삼각형 플레이모양으로 변경
            // var t = 'on';   //토글기능 t=0
            // // 버튼 누르면 t가 1로 변경 클릭상태를 표시 (정지상태)
            // // 또 한번 클릭하면 t=0으로 변경 (재생상태)

            // $('.play-btn').on({
            //     click: function(e){
            //         e.preventDefault();
            //         if(t=='on'){   // 0이면 재생 상태
            //             t='off';    //정지상태 표시
            //             clearInterval(setId);
            //             $(this).children().attr('src','./images/main_prom_play.png');
            //         }
            //         else{
            //             t=0;    // 정지상태
            //             autoTimer();    // 플레이 재실행
            //             $(this).children().attr('src','./images/main_prom_stop.png');
            //         }
            //     }
            // });

            // 7-1. 다음화살버튼 클릭 이벤트
            $('.next-btn').on({
                click: function(e){
                    e.preventDefault();
                    stopFn();
                    nextCount();
                }
            });
            // 7-2. 이전화살버튼 클릭 이벤트
            $('.prev-btn').on({
                click: function(e){
                    e.preventDefault();
                    stopFn();
                    prevCount();
                }
            });

            // 8. 프로모션 버튼 클릭 이벤트
            // 클릭하면 (슬라이드)#slide 박스가 부드럽게 슬라이드 업
            $('.promotion-btn').on({
                click: function(e){
                  e.preventDefault();

                  if( $(this).hasClass('close')  ){ //오픈
                    $('#slide').stop().slideDown(600);
                    $(this).removeClass('close');
                    playFn();
                  }
                  else{ //닫기 close
                    $('#slide').stop().slideUp(600);
                    $(this).addClass('close');
                    //정지
                    stopFn();
                    cnt=0;
                    // $('.slide-wrap').stop().animate({left:-819*cnt}, 0);
                    mainSlide(); //처음으로 초기화
                  }
                }
              });
            // 슬라이드 콘테이너 박스 위에 마우스 올라가면 슬라이드 정지
            // 슬라이드 콘테이너 박스 위에 마우스 떠나면 슬라이드 재실행
            $('.slide-wrap').on({
                mouseenter: function(){
                    stopFn();
                },
                mouseleave: function(){
                    playFn();
                }
            });
        },
        section3: function(){

        },
        section4: function(){

                // 스크롤이벤트 : 페럴럭스 애니메이션 효과
                $(window).scroll(function(){
                    if($(window).scrollTop()==0){
                        $('#section4').removeClass('addAni');
                    }
                    if($(window).scrollTop()>400){
                        $('#section4').addClass('addAni');
                    }
                });
        },
        section5: function(){
            // 스크롤이벤트 스크롤탑값이($(window).scroolTop()) 섹션3의 탑값에 도달하면
            // 섹션5의 addFadein 클래스 추가 addClass('addFadein')

            var sec3Top = $('#section3').offset().top-500;
            
            $(window).scroll(function(){
                // if( 스크롤탑 값이 >= 섹션3의 탑값 이상이면){
                //     섹션5의 addFadein 클래스 추가 addClass('addFadein')
                if($(window).scrollTop()==0){
                    $('#section5').removeClass('addFadein');
                }
                if($(window).scrollTop()>=sec3Top){
                    $('#section5').addClass('addFadein');
                }
            });

        },
        section6: function(){
            var sec4Top = $('#section4').offset().top;

            $(window).scroll(function(){
                if($(window).scrollTop()==0){
                    $('#section6').removeClass('addAni');
                }
                if($(window).scrollTop()>=sec4Top){
                    $('#section6').addClass('addAni');
                }
            });
        },
        section7: function(){
            var sec6Top = $('#section6').offset().top-200;

                $(window).scroll(function(){

                    if( $(window).scrollTop() == 0 ){
                        $('#section7').removeClass('addFade')
                    }
                    
                    if( $(window).scrollTop() >= sec6Top ){
                        $('#section7').addClass('addFade')
                    }

                });
        },
        section8: function(){
            var sec6Top = $('#section6').offset().top+200;

            $(window).scroll(function(){

                if( $(window).scrollTop() == 0 ){
                    $('#section8').removeClass('addAni')
                }
                
                if( $(window).scrollTop() >= sec6Top ){
                    $('#section8').addClass('addAni')
                }

            });

            //반응형
            var leftW = $('#section8 .left').innerWidth();

            function resize(){
                leftW = $('#section8 .left').innerWidth();
                if(leftW<=366){
                    $('#section8 .left').css({height:leftW*0.85246});
                }
                else {
                    $('#section8 .left').css({height:312});
                }
            }
            resize();

            $(window).resize(function(){
                resize();
            });
        },
        // section9: function(){
        //       var winH = $(window).height()-95; //반응형
        //       var bottomTop = $('#footer').offset().top-winH; //반응형


        //           //반응형
        //           function resizefn(){
        //             winH = $(window).height()-95;
        //             bottomTop = $('#footer').offset().top-winH;                      
        //           }
        //           resizefn();
                  
        //           $(window).resize(function(){
        //             resizefn();
        //             sec9();
        //           });


        //           // 스크롤이벤트 조건부
        //           function sec9(){
        //             if( $(window).scrollTop() > bottomTop ){
        //                 $('#section9').addClass('addSec9');
        //             }
        //             else{
        //                 $('#section9').removeClass('addSec9');
        //             }
        //           }
        //           sec9();

        //           $(window).scroll(function(){
        //             sec9();
        //           });
        // },
        quickMenu: function(){

            // var quciTop=(창높이에서 - 퀵메뉴박스높이)/2
            var quciTop=($(window).height() - 96)/2;
            var quciTop2=150;
                function quickMenuFn(){
                   $('.quick-menu').stop().animate({top:$(window).scrollTop() + quciTop2}, 600, "easeOutExpo");
                }
                quickMenuFn();
            $(window).scroll(function(){
                quickMenuFn();
            });
        }
    }
    starBucks.init();   //스타벅스 객체 init() 매서드 실행
})(jQuery, window);