import React, { Component } from 'react';

class HeaderComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <header id="header">
                    <div className="container clearfix">
                        <div className="logo-box">
                            <h1><a href="#" title="logo"><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo"/></a></h1>
                        </div>
                        <div className="nav-box">
                            <aside id="aside">
                                <ul>
                                    <li><a href="#" title="Sign In">Sign In</a></li>
                                    <li><a href="#" title="My Starbucks">My Starbucks</a></li>
                                    <li><a href="#" title="Customer Service & Ideas">Customer Service & Ideas</a></li>
                                    <li><a href="#" title="Find a Store">Find a Store</a></li>
                                    <li><div className="find-box"><input type="text" placeholder="통합검색"/><a href="#" title="통합검색" className="find-btn"><img src={process.env.PUBLIC_URL + "/images/icon_magnifier_black.png"} alt=""/></a></div></li>
                                </ul>
                            </aside>
                            <nav id="nav">
                                <ul>
                                    <li>
                                        <a href="#" className="main-btn" title="COFFEE">COFFEE</a>
                                        <div className="sub sub1">
                                            <div className="sub-top">
                                                <div className="sub-container">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#" title="커피">커피</a></dt>
                                                                <dd><a href="#" title="스타벅스 원두">스타벅스 원두</a></dd>
                                                                <dd><a href="#" title="스타벅스 비아">스타벅스 비아</a></dd>
                                                                <dd><a href="#" title="스타벅스앳홈 by 캡슐">스타벅스앳홈 by 캡슐</a></dd>
                                                            </dl>
                                                        </li>
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">나와 어울리는 커피</a></dt>
                                                                <dd></dd>
                                                            </dl>
                                                        </li>
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">스타벅스 리저브™</a></dt>
                                                                <dd><a href="#">RESERVE MAGAZINE</a></dd>
                                                            </dl>
                                                        </li>
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">에스프레소 음료</a></dt>
                                                                <dd><a href="#">도피오</a></dd>
                                                                <dd><a href="#">에스프레소 마키아또</a></dd>
                                                                <dd><a href="#">아메리카노</a></dd>
                                                                <dd><a href="#">마키아또</a></dd>
                                                                <dd><a href="#">카푸치노</a></dd>
                                                                <dd><a href="#">라떼</a></dd>
                                                                <dd><a href="#">모카</a></dd>
                                                            </dl>
                                                        </li>
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">최상의 커피를 즐기는 법</a></dt>
                                                                <dd><a href="#">커피 프레스</a></dd>
                                                                <dd><a href="#">푸어 오버</a></dd>
                                                                <dd><a href="#">아이스 푸어 오버</a></dd>
                                                                <dd><a href="#">커피 메이커</a></dd>
                                                                <dd><a href="#">리저브를 매장에서 다양하게 즐기는 법</a></dd>
                                                            </dl>
                                                        </li>
                                                    </ul>
                                                    <ul className="clearfix">
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">커피 이야기</a></dt>
                                                                <dd><a href="#">농장에서 우리의 손으로</a></dd>
                                                                <dd><a href="#">최상의 아라비카 원두</a></dd>
                                                                <dd><a href="#">스타벅스 로스트 스펙트럼</a></dd>
                                                                <dd><a href="#">스타벅스 디카페인</a></dd>
                                                                <dd><a href="#">클로버® 커피 추출 시스템</a></dd>
                                                            </dl>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="sub-bottom">
                                                <div className="sub-container">
                                                    <dl>
                                                        <dt><a href="#">나와 어울리는 커피 찾기</a></dt>
                                                        <dd>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</dd>
                                                        <dt><a href="#">최상의 커피를 즐기는 법</a></dt>
                                                        <dd>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" className="main-btn" title="MENU">MENU</a>
                                        <div className="sub sub2">
                                            <div className="sub-top">
                                                <div className="sub-container">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">음료</a></dt>
                                                                <dd><a href="#">콜드 브루</a></dd>
                                                                <dd><a href="#">브루드 커피</a></dd>
                                                                <dd><a href="#">에스프레소</a></dd>
                                                                <dd><a href="#">프라푸치노</a></dd>
                                                                <dd><a href="#">블렌디드</a></dd>
                                                                <dd><a href="#">스타벅스 피지오</a></dd>
                                                                <dd><a href="#">티(티바나)</a></dd>
                                                                <dd><a href="#">기타 제조 음료</a></dd>
                                                                <dd><a href="#">스타벅스 주스(병음료)</a></dd>
                                                            </dl>
                                                        </li>
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">푸드</a></dt>
                                                                <dd><a href="#">브레드</a></dd>
                                                                <dd><a href="#">케이크</a></dd>
                                                                <dd><a href="#">샌드위치 & 샐러드</a></dd>
                                                                <dd><a href="#">따뜻한 푸드</a></dd>
                                                                <dd><a href="#">과일 & 요거트</a></dd>
                                                                <dd><a href="#">스낵 & 미니 디저트</a></dd>
                                                                <dd><a href="#">아이스크림</a></dd>
                                                            </dl>
                                                        </li>
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">상품</a></dt>
                                                                <dd><a href="#">머그</a></dd>
                                                                <dd><a href="#">글라스</a></dd>
                                                                <dd><a href="#">플라스틱 텀블러</a></dd>
                                                                <dd><a href="#">스테인리스 텀블러</a></dd>
                                                                <dd><a href="#">보온병</a></dd>
                                                                <dd><a href="#">액세서리</a></dd>
                                                                <dd><a href="#">커피 용품</a></dd>
                                                                <dd><a href="#">패키지 티(티바나)</a></dd>
                                                            </dl>
                                                        </li>
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">카드</a></dt>
                                                                <dd><a href="#">실물카드</a></dd>
                                                                <dd><a href="#">e-Gift 카드</a></dd>
                                                            </dl>
                                                        </li>
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">메뉴 이야기</a></dt>
                                                                <dd><a href="#">나이트로 콜드브루</a></dd>
                                                                <dd><a href="#">콜드 브루</a></dd>
                                                                <dd><a href="#">스타벅스 티바나</a></dd>
                                                            </dl>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="sub-bottom">
                                                <div className="sub-container">
                                                    <dl>
                                                        <dt><a href="#">나이트로 콜드 브루 <img src={process.env.PUBLIC_URL + "/images/icon_gnb_new.png"} alt=""/></a></dt>
                                                        <dd>나이트로 커피 정통의 물결치듯 흘러내리는 캐스케이딩과 부드러운 크림을 경험하세요.</dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" className="main-btn" title="STORE">STORE</a>
                                        <div className="sub sub3">
                                            <div className="sub-top">
                                                <div className="sub-container">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">매장 찾기</a></dt>
                                                                <dd><a href="#">퀵 검색</a></dd>
                                                                <dd><a href="#">지역 검색</a></dd>
                                                            </dl>
                                                        </li>
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">드라이브 스루 매장</a></dt>
                                                                <dd></dd>
                                                            </dl>
                                                        </li>
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">스타벅스 리저브™ 매장</a></dt>
                                                                <dd></dd>
                                                            </dl>
                                                        </li>
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">커뮤니티 스토어 매장</a></dt>
                                                                <dd></dd>
                                                            </dl>
                                                        </li>
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">매장 이야기</a></dt>
                                                                <dd><a href="#">티바나 바 매장</a></dd>
                                                            </dl>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="sub-bottom">
                                                <div className="sub-container">
                                                    <dl>
                                                        <dt><a href="#">매장찾기</a></dt>
                                                        <dd>보다 빠르게 매장을 찾아보세요.</dd>
                                                    </dl>
                                            </div>
                                            </div>
                                        </div>
                                        </li>
                                        <li>
                                        <a href="#" className="main-btn" title="RESPONSIBILITY">RESPONSIBILITY</a>
                                        <div className="sub sub4">
                                            <div className="sub-top">
                                            <div className="sub-container">
                                                <ul className="clearfix">
                                                <li>
                                                    <dl>
                                                    <dt><a href="#">사회공헌 캠페인 소개</a></dt>
                                                    <dd></dd>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                    <dt><a href="#">지역 사회 참여 활동</a></dt>
                                                    <dd><a href="#">희망배달 캠페인</a></dd>
                                                    <dd><a href="#">재능기부 카페 소식</a></dd>
                                                    <dd><a href="#">커뮤니티 스토어</a></dd>
                                                    <dd><a href="#">청년 지원 프로그램</a></dd>
                                                    <dd><a href="#">우리 농산물 사랑 캠페인</a></dd>
                                                    <dd><a href="#">우리 문화 지키기</a></dd>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                    <dt><a href="#">환경보호 활동</a></dt>
                                                    <dd><a href="#">친환경 활동</a></dd>
                                                    <dd><a href="#">일회용 컵 없는 매장</a></dd>
                                                    <dd><a href="#">커피 원두 재활용</a></dd>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                    <dt><a href="#">윤리 구매</a></dt>
                                                    <dd><a href="#">윤리적 원두 구매</a></dd>
                                                    <dd><a href="#">공정무역 인증</a></dd>
                                                    <dd><a href="#">커피 농가 지원 활동</a></dd>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                    <dt><a href="#">글로벌 사회 공헌</a></dt>
                                                    <dd><a href="#">윤리경영 보고서</a></dd>
                                                    <dd><a href="#">스타벅스 재단</a></dd>
                                                    <dd><a href="#">지구촌 봉사의 달</a></dd>
                                                    </dl>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                            <div className="sub-bottom">
                                            <div className="sub-container">
                                                <dl>
                                                <dt><a href="#"></a></dt>
                                                <dd></dd>
                                    </dl>
                                </div>
                                </div>
                            </div>
                            </li>
                            <li>
                            <a href="#" className="main-btn" title="STARBUCKS REWARDS">STARBUCKS REWARDS</a>
                            <div className="sub sub5">
                                <div className="sub-top">
                                <div className="sub-container">
                                    <ul className="clearfix">
                                    <li>
                                        <dl>
                                        <dt><a href="#">스타벅스 리워드</a></dt>
                                        <dd><a href="#">스타벅스 리워드 소개</a></dd>
                                        <dd><a href="#">등급 및 혜택</a></dd>
                                        <dd><a href="#">스타벅스 별</a></dd>
                                        <dd><a href="#">자주 하는 질문</a></dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                        <dt><a href="#">스타벅스 카드</a></dt>
                                        <dd><a href="#">스타벅스 카드 소개</a></dd>
                                        <dd><a href="#">스타벅스 카드 갤러리</a></dd>
                                        <dd><a href="#">등록 및 조회</a></dd>
                                        <dd><a href="#">충전 및 이용안내</a></dd>
                                        <dd><a href="#">분실신고/환불신청</a></dd>
                                        <dd><a href="#">자주 하는 질문</a></dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                        <dt><a href="#">스타벅스 e-Gift Card</a></dt>
                                        <dd><a href="#">스타벅스 e-Gift Card 소개</a></dd>
                                        <dd><a href="#">이용안내</a></dd>
                                        <dd><a href="#">선물하기</a></dd>
                                        <dd><a href="#">자주 하는 질문</a></dd>
                                        </dl>
                                    </li> 
                                    </ul>                   
                                </div>
                                </div>
                                <div className="sub-bottom">
                                <div className="sub-container">
                                    <dl>
                                    <dt><a href="#">스타벅스 카드 등록하기</a></dt>
                                    <dd>카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.</dd>
                                    </dl>
                                </div>
                                </div>
                            </div>
                            </li>
                            <li>
                            <a href="#" className="main-btn" title="WHAT'S NEW">WHAT'S NEW</a>
                            <div className="sub sub6">
                                <div className="sub-top">
                                <div className="sub-container">
                                    <ul className="clearfix">
                                    <li>
                                        <dl>
                                        <dt><a href="#">이벤트</a></dt>
                                        <dd><a href="#">전체</a></dd>
                                        <dd><a href="#">스타벅스 카드</a></dd>
                                        <dd><a href="#">스타벅스 리워드</a></dd>
                                        <dd><a href="#">온라인</a></dd>
                                        <dd><a href="#">e-프리퀀시 증정품</a></dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                        <dt><a href="#">뉴스</a></dt>
                                        <dd><a href="#">전체</a></dd>
                                        <dd><a href="#">상품 출시</a></dd>
                                        <dd><a href="#">스타벅스와 문화</a></dd>
                                        <dd><a href="#">스타벅스 사회공헌</a></dd>
                                        <dd><a href="#">스타벅스 카드출시</a></dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                        <dt><a href="#">매장별 이벤트</a></dt>
                                        <dd><a href="#">일반 매장</a></dd>
                                        <dd><a href="#">신규 매장</a></dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                        <dt><a href="#">e-프리퀀시</a></dt>
                                        <dd><a href="#">이용안내</a></dd>
                                        <dd><a href="#">이용현황</a></dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                        <dt><a href="#">공지사항</a></dt>
                                        <dd></dd>
                                        </dl>
                                    </li>
                                    </ul>
                                    <ul className="clearfix">
                                    <li>
                                        <dl>
                                        <dt><a href="#">월페이퍼</a></dt>
                                        <dd></dd>
                                        </dl>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                                <div className="sub-bottom">
                                <div className="sub-container">
                                    <dl>
                                    <dt><a href="#">매장별 이벤트</a></dt>
                                    <dd>스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.</dd>
                                    <dt><a href="#">월페이퍼</a></dt>
                                    <dd>매월 업데이트되는 월페이퍼(PC/Mobile)로 스타벅스를 더욱 가깝게 즐겨보세요!</dd>
                                    </dl>
                                </div>
                                </div>
                            </div>
                            </li>
                        </ul>
                        </nav>
                        
                        {/* <!-- 모바일 네비게이션 --> */}
                        <div id="mobile">
                        <ul>
                            <li><a href="#" className="login-btn"><img src={process.env.PUBLIC_URL + "/images/icon_user_m.png"} alt=""/></a></li>
                            <li><a href="#" className="maps-btn"><img src={process.env.PUBLIC_URL + "/images/icon_spot_m.png"} alt=""/></a></li>
                            <li><a href="#" className="berger-btn"><img src={process.env.PUBLIC_URL + "/images/btn_berger_m.png"} alt=""/></a></li>
                        </ul>
                        </div>

                    </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default HeaderComponent;