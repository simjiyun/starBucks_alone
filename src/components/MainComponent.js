import React, { Component } from 'react';

class MainComponent extends Component {

    render() {
        return (
            <React.Fragment>
                  <main id="main">
                    <section id="section1">
                    <div className="container">
                        <h2 className="hide">메인 섹션 Carry Merry</h2>
                        <span className="img img1">
                        <img src={process.env.PUBLIC_URL + "/images/m_2021_chiristmas2_slogan.png"} alt=""/>
                        </span>
                        <span className="star star1">
                        <img src={process.env.PUBLIC_URL + "/images/2021_chiristmas2_bg_left.png"} alt=""/>
                        </span>
                        <span className="star star2">
                        <img src={process.env.PUBLIC_URL + "/images/2021_chiristmas2_bg_right.png"} alt=""/>
                        </span>
                        <span className="img img2">
                        <img src={process.env.PUBLIC_URL + "/images/2021_christmas2_drink.png"} alt=""/>
                        </span>
                        <span className="img img3">
                        <img src={process.env.PUBLIC_URL + "/images/2021_christmas2_drink2.png"} alt=""/>
                        </span>
                        <span className="img img4">
                        <img src={process.env.PUBLIC_URL + "/images/2021_christmas2_drink3.png"} alt=""/>
                        </span>
                        <span className="img img5">
                        <a href="#" className="view-btn">자세히 보기</a>
                        </span>
                    </div>
                    </section>

                    <section id="section2">
                    <div id="notice">
                        <div className="container">
                        <div className="notice-box">
                            <div className="notice-title">
                            <h2>
                            {/* <!-- 공지사항 타이틀 --> */}
                                <img src={process.env.PUBLIC_URL + "/images/notice_ttl.png"} alt="Notice Title"/>
                                <img src={process.env.PUBLIC_URL + "/images/icon_board_speaker.png"} alt="Notice Title"/>
                            </h2>
                            </div>
                            {/* <!-- 공지사항 목록박스 --> */}
                            <div className="notice-list">
                            <ul>
                                <li className="notice"><a href="#">스타벅스커피 코리아 원산지 오표시 관련 고객설명문</a></li>
                                <li className="notice"><a href="#">사이렌 오더 주문 건수 제한 안내(11/2~12/31)</a></li>
                                <li className="notice"><a href="#">2021 플래너 쿠폰 3종 유효 기간 연장 안내</a></li>
                                <li className="notice"><a href="#">시스템 개선 및 점검 안내</a></li>
                                <li className="notice"><a href="#">시스템 개선 및 점검 안내</a></li>
                            </ul>
                            </div>
                            {/* <!-- 공지사항 더보기 버튼 박스 --> */}
                            <div className="notice-more">
                            <a href="#" title="Notice More View"><img src={process.env.PUBLIC_URL + "/images/btn_notice_plus.png"} alt=""/></a>
                            </div>
                        </div>
                        <div className="promotion-box">
                            <div>
                            <a href="#" className="promotion-btn blind close" title="스타벅스 프로모션">스타벅스 프로모션</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div id="slide">
                        <div className="container2">
                        <div className="slide-container">
                            <div className="slide-view">
                            <ul className="slide-wrap clearfix">
                                <li className="slide slide3"><img src={process.env.PUBLIC_URL + "/images/8CV1tZ_20201231084934041.jpg"} alt=""/><span><a href="#" className="veiw-btn" title="자세히 보기">자세히 보기</a></span></li>
                                <li className="slide slide1 addCurrent"><img src={process.env.PUBLIC_URL + "/images/dBa9HS_20211201143944413.jpg"} alt=""/><span><a href="#" className="veiw-btn" title="자세히 보기">자세히 보기</a></span></li>
                                <li className="slide slide2"><img src={process.env.PUBLIC_URL + "/images/GsfdzI_20211020160006261.jpg"} alt=""/><span><a href="#" className="veiw-btn" title="자세히 보기">자세히 보기</a></span></li>
                                <li className="slide slide3"><img src={process.env.PUBLIC_URL + "/images/8CV1tZ_20201231084934041.jpg"} alt=""/><span><a href="#" className="veiw-btn" title="자세히 보기">자세히 보기</a></span></li>
                                <li className="slide slide1 addCurrent"><img src={process.env.PUBLIC_URL + "/images/dBa9HS_20211201143944413.jpg"} alt=""/><span><a href="#" className="veiw-btn" title="자세히 보기">자세히 보기</a></span></li>
                            </ul>
                            </div>
                            {/* <!-- 좌우화살버튼 --> */}
                            <span className="next-btn-box">
                            <a href="#" className="next-btn blind" title="Next Button">next</a>
                            </span>
                            <span className="prev-btn-box">
                            <a href="#" className="prev-btn blind" title="Prev Button">prev</a>
                            </span>
                            {/* <!-- 페이지버튼 --> */}
                            <div className="page-btn-box">
                            <span><a href="#" className="play-btn on" title="play & stop"><img src={process.env.PUBLIC_URL + "/images/main_prom_stop.png"} alt=""/></a></span>
                            <span><a href="#" className="page-btn" title="page1"><img src={process.env.PUBLIC_URL + "/images/main_prom_on.png"} alt=""/></a></span>
                            <span><a href="#" className="page-btn" title="page2"><img src={process.env.PUBLIC_URL + "/images/main_prom_off.png"} alt=""/></a></span>
                            <span><a href="#" className="page-btn" title="page3"><img src={process.env.PUBLIC_URL + "/images/main_prom_off.png"} alt=""/></a></span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>

                    <section id="section3">
                    <div className="container clearfix">
                        <div className="left"> {/*  <!-- 칸 --> */}
                        <div className="gap"> {/* <!-- 여백 --> */}
                            <div className="content"> {/* <!-- 실제 콘텐츠 --> */}
                            <h2><img src={process.env.PUBLIC_URL + "/images/rewards-logo.png"} alt="logo"/></h2>
                            </div>
                        </div>
                        </div>
                        <div className="right">
                        <div className="gap">
                            <div className="content">
                            <div className="top clearfix">
                                <div className="top-left">
                                <h3>스타벅스만의 특별한 혜택,<br/> <strong>스타벅스 리워드</strong></h3>
                                <p><strong>스타벅스 회원이세요?</strong> 로그인을 통해<br/> 나만의 리워드를 확인해보세요.</p>
                                <p><strong>스타벅스 회원이 아니세요?</strong><br/> 가입을 통해 리워드 혜택을 즐기세요.</p>
                                </div>
                                <div className="top-right"> {/* <!--플렉스(Flex) 콘테이너(container2) - 부모영역--> */}
                                <div className="button-box clearfix"> {/* <!-- 플렉스(Flex) 아이템(item) - 자식영역 --> */}
                                    <a href="#" className="signup-btn">회원가입</a> {/* <!-- 플렉스(Flex) 아이템(item) - 자식영역 --> */}
                                    <a href="#" className="login-btn">로그인</a> {/* <!-- 플렉스(Flex) 아이템(item) - 자식영역 --> */}
                                </div>
                                </div>
                            </div>
                            <div className="bottom clearfix">
                                <div className="bottom-left">
                                <p>회원 가입 후, 스타벅스 e-Gift Card를<br/> <strong>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</strong></p>
                                <p>카드를 등록하여 스타벅스 리워드 회원이 되신 후,<br/> 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</p>
                                </div>
                                <div className="bottom-right">
                                <div className="button-box">
                                    <a href="#" className="gift-btn">e-Gift Card 선물하기</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>

                    <section id="section4">
                    <div className="container">
                        <div className="left">
                        <div className="wrap">
                            <img src={process.env.PUBLIC_URL + "/images/2021_chrsitmas_bean.png"} alt="크리스마스 블렌드 이미지"/>
                        </div>
                        </div>
                        <div className="right">
                        <div className="wrap">
                            <h2><img src={process.env.PUBLIC_URL + "/images/2021_chrsitmas_bean_txt.png"} alt="함께할 때 더욱 맛있는 크리스마스 블렌드 타이틀"/></h2>
                            <p><a href="#" className="more-view-btn">자세히 보기</a></p>
                        </div>
                        </div>
                    </div>
                    </section>

                    <section id="section5">
                    {/* <!-- 가상요소 생성 --> */}
                    <div className="container">
                        <div className="title">
                        <h2><img src={process.env.PUBLIC_URL + "/images/reserve_christmas_bean_title_211018.png"} alt="Reserve the Merry"/></h2>
                        <p><a href="#" className="more-view-btn">자세히 보기</a></p>
                        </div>
                    </div>
                    </section>

                    <section id="section6">
                    <div className="container">
                        <div className="left">
                        <h2><img src={process.env.PUBLIC_URL + "/images/fav_prod_txt01.png"} alt="Pick Your ..."/></h2>
                        <h3><img src={process.env.PUBLIC_URL + "/images/fav_prod_txt02.png"} alt="다양한 메뉴를 ..."/></h3>
                        <p><a href="#" className="more-view-btn">자세히 보기</a></p>
                        </div>
                        <div className="right">
                        <img src={process.env.PUBLIC_URL + "/images/2021_christmas2_fav.png"} alt="크리스마스 카드"/>
                        </div>
                    </div>
                    </section>

                    <section id="section7">
                    <div className="container">
                        <div className="left">
                        <h2><img src={process.env.PUBLIC_URL + "/images/reserve_text_pc.png"} alt="reserve_text_pc"/></h2>
                        <p><a href="#" className="more-view-btn" title="자세히 보기">자세히 보기</a></p>
                    </div>
                    <div className="right">
                        <img src={process.env.PUBLIC_URL + "/images/reserve_visual_pc.png"} alt="reserve_visual_pc"/>
                    </div>
                    </div>
                    </section>

                    <section id="section8">
                    <div className="container">
                        <div className="left">
                        <span><img src={process.env.PUBLIC_URL + "/images/store_exp_img01.png"} alt="store_exp_img01"/></span>
                        </div>
                        <div className="right">
                        <h2><img src={process.env.PUBLIC_URL + "/images/store_txt01.png"} alt="스타벅스를 가까이에서 경험해 보세요"/></h2>
                        <h3><img src={process.env.PUBLIC_URL + "/images/store_txt02.png"} alt="차별화된 커피 경험을..."/></h3>
                        <p><a href="#" className="find-btn" title="매장찾기">매장찾기</a></p>
                        </div>
                    </div>
                    </section>

                </main>
            </React.Fragment>
        )
    }
}

export default MainComponent;