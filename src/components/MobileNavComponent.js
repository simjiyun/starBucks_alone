import React, { Component } from 'react';

class MobileNavComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <nav id="mobileNav">
                    <div className="mobile-container">
                        <ul>
                        <li>
                            <form name="searchform" method="post" action="abc.php">
                            <div className="mobile-searchform">
                                <input type="text" name="mobile-search" id="mobile-search"/>
                                <button>Search</button>
                            </div>
                            </form>
                        </li>
                        <li>
                            <a href="#" className="mobile-main-btn">My Starbucks</a>
                            <div className="mobile-sub">
                            <ul>
                                <li><a href="#">한눈에 보기</a></li>
                                <li>
                                <a href="#" className="mob-sub-btn">My 리워드</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">리워드 및 혜택</a></li>
                                    <li><a href="#">별 히스토리</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">My 스타벅스 카드</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">보유 카드</a></li>
                                    <li><a href="#">카드 등록</a></li>
                                    <li><a href="#">카드 충전</a></li>
                                    <li><a href="#">분실신고/잔액이전</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">My 스타벅스 e-Gift Card</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">선물하기</a></li>
                                    <li><a href="#">선물 내역</a></li>
                                    <li><a href="#">장바구니 내역</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">My 쿠폰</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">등록하기</a></li>
                                    <li><a href="#">선물하기</a></li>
                                    <li><a href="#">사용하기</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li><a href="#">My 캘린더</a></li>
                                <li><a href="#">My 메뉴</a></li>
                                <li><a href="#">My 고객의 소리</a></li>
                                <li><a href="#">전자영수증</a></li>
                                <li><a href="#">개인컵 리워드 설정</a></li>
                                <li><a href="#">My DT Pass</a></li>
                                <li>
                                <a href="#" className="mob-sub-btn">개인정보관리</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">개인정보확인 및 수정</a></li>
                                    <li><a href="#">회원 탈퇴</a></li>
                                    <li><a href="#">비밀번호 변경</a></li>
                                    </ul>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="mobile-main-btn">COFFEE</a>
                            <div className="mobile-sub">
                            <ul>
                                <li><a href="#">한눈에 보기</a></li>
                                <li>
                                <a href="#" className="mob-sub-btn">커피</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">스타벅스 원두</a></li>
                                    <li><a href="#">스타벅스 비아</a></li>
                                    <li><a href="#">스타벅스앳홈 by 캡슐</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li><a href="#">나와 어울리는 커피</a></li>
                                <li>
                                <a href="#" className="mob-sub-btn">스타벅스 리저브™</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">ABOUT</a></li>
                                    <li><a href="#">RESERVE MAGAZINE</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">에스프레소 음료</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">도피오</a></li>
                                    <li><a href="#">에스프레소 마키아또</a></li>
                                    <li><a href="#">아메리카노</a></li>
                                    <li><a href="#">마키아또</a></li>
                                    <li><a href="#">카푸치노</a></li>
                                    <li><a href="#">라떼</a></li>
                                    <li><a href="#">모카</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">최상의 커피를 즐기는 법</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">커피 프레스</a></li>
                                    <li><a href="#">푸어 오버</a></li>
                                    <li><a href="#">아이스 푸어 오버</a></li>
                                    <li><a href="#">커피 메이커</a></li>
                                    <li><a href="#">리저브를 매장에서 다양하게 즐기는 법</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">커피 이야기</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">농장에서 우리의 손으로</a></li>
                                    <li><a href="#">최상의 아라비카 원두</a></li>
                                    <li><a href="#">스타벅스 로스트 스펙트럼</a></li>
                                    <li><a href="#">스타벅스 디카페인</a></li>
                                    <li><a href="#">클로버® 커피 추출 시스템</a></li>
                                    </ul>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="mobile-main-btn">MENU</a>
                            <div className="mobile-sub">
                            <ul>
                                <li><a href="#">한눈에 보기</a></li>
                                <li>
                                <a href="#" className="mob-sub-btn">음료</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">전체보기</a></li>
                                    <li><a href="#">콜드 브루</a></li>
                                    <li><a href="#">브루드 커피</a></li>
                                    <li><a href="#">에스프레소</a></li>
                                    <li><a href="#">프라푸치노</a></li>
                                    <li><a href="#">블렌디드</a></li>
                                    <li><a href="#">스타벅스 피지오</a></li>
                                    <li><a href="#">티(티바나)</a></li>
                                    <li><a href="#">기타 제조 음료</a></li>
                                    <li><a href="#">스타벅스 주스(병음료)</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">푸드</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">전체보기</a></li>
                                    <li><a href="#">브레드</a></li>
                                    <li><a href="#">케이크</a></li>
                                    <li><a href="#">샌드위치 & 샐러드</a></li>
                                    <li><a href="#">따뜻한 푸드</a></li>
                                    <li><a href="#">과일 & 요거트</a></li>
                                    <li><a href="#">스낵 & 미니 디저트</a></li>
                                    <li><a href="#">아이스크림</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">상품</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">전체보기</a></li>
                                    <li><a href="#">머그</a></li>
                                    <li><a href="#">글라스</a></li>
                                    <li><a href="#">플라스틱 텀블러</a></li>
                                    <li><a href="#">스테인리스 텀블러</a></li>
                                    <li><a href="#">보온병</a></li>
                                    <li><a href="#">액세서리</a></li>
                                    <li><a href="#">커피 용품</a></li>
                                    <li><a href="#">패키지 티(티바나)</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">카드</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">전체보기</a></li>
                                    <li><a href="#">실물카드</a></li>
                                    <li><a href="#">e-Gift 카드</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">메뉴 이야기</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">나이트로 콜드브루</a></li>
                                    <li><a href="#">콜드 브루</a></li>
                                    <li><a href="#">스타벅스 티바나</a></li>
                                    </ul>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="mobile-main-btn">STORE</a>
                            <div className="mobile-sub">
                            <ul>
                                <li><a href="#">한눈에 보기</a></li>
                                <li>
                                <a href="#" className="mob-sub-btn">매장 찾기</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">빠른 검색</a></li>
                                    <li><a href="#">지역 검색</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li><a href="#">드라이브 스루 매장</a></li>
                                <li><a href="#">스타벅스 리저브™ 매장</a></li>
                                <li><a href="#">커뮤니티 스토어 매장</a></li>
                                <li>
                                <a href="#" className="mob-sub-btn">매장 이야기</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">티바나 바 매장</a></li>
                                    </ul>
                                </div>
                                </li>
                            </ul>
                            </div></li>
                        <li>
                            <a href="#" className="mobile-main-btn">RESPONSIBILITY</a>
                            <div className="mobile-sub">
                            <ul>
                                <li><a href="#">한눈에 보기</a></li>
                                <li><a href="#">사회공헌 캠페인 소개</a></li>
                                <li>
                                <a href="#" className="mob-sub-btn">지역 사회 참여 활동</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">희망배달 캠페인</a></li>
                                    <li><a href="#">재능기부 카페 소식</a></li>
                                    <li><a href="#">커뮤니티 스토어</a></li>
                                    <li><a href="#">청년 지원 프로그램</a></li>
                                    <li><a href="#">우리 농산물 사랑 캠페인</a></li>
                                    <li><a href="#">우리 문화 지키기</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">환경보호 활동</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">친환경 활동</a></li>
                                    <li><a href="#">일회용 컵 없는 매장</a></li>
                                    <li><a href="#">커피 원두 재활용</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">윤리 구매</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">윤리적 원두 구매</a></li>
                                    <li><a href="#">공정무역 인증</a></li>
                                    <li><a href="#">커피 농가 지원 활동</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">글로벌 사회 공헌</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">윤리경영 보고서</a></li>
                                    <li><a href="#">스타벅스 재단</a></li>
                                    <li><a href="#">지구촌 봉사의 달</a></li>
                                    </ul>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="mobile-main-btn">Starbucks Rewards</a>
                            <div className="mobile-sub">
                            <ul>
                                <li><a href="#">한눈에 보기</a></li>
                                <li>
                                <a href="#" className="mob-sub-btn">스타벅스 리워드</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">스타벅스 리워드 소개</a></li>
                                    <li><a href="#">등급 및 혜택</a></li>
                                    <li><a href="#">스타벅스 별</a></li>
                                    <li><a href="#">자주 하는 질문</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">스타벅스 카드</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">스타벅스 카드 소개</a></li>
                                    <li><a href="#">스타벅스 카드 갤러리</a></li>
                                    <li><a href="#">등록 및 조회</a></li>
                                    <li><a href="#">충전 및 이용안내</a></li>
                                    <li><a href="#">분실신고/환불신청</a></li>
                                    <li><a href="#">자주 하는 질문</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">스타벅스 e-Gift Card</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">스타벅스 e-Gift Card 소개</a></li>
                                    <li><a href="#">이용안내</a></li>
                                    <li><a href="#">선물하기</a></li>
                                    <li><a href="#">자주 하는 질문</a></li>
                                    </ul>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="mobile-main-btn">WHAT'S NEW</a>
                            <div className="mobile-sub">
                            <ul>
                                <li><a href="#">한눈에 보기</a></li>
                                <li>
                                <a href="#" className="mob-sub-btn">이벤트</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">전체</a></li>
                                    <li><a href="#">스타벅스 카드</a></li>
                                    <li><a href="#">스타벅스 리워드</a></li>
                                    <li><a href="#">온라인</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">뉴스</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">전체</a></li>
                                    <li><a href="#">상품 출시</a></li>
                                    <li><a href="#">스타벅스와 문화</a></li>
                                    <li><a href="#">스타벅스 사회공헌</a></li>
                                    <li><a href="#">스타벅스 카드출시</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                <a href="#" className="mob-sub-btn">매장별 이벤트</a>
                                <div className="mobile-sub-sub">
                                    <ul>
                                    <li><a href="#">일반 매장</a></li>
                                    <li><a href="#">신규 매장</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li><a href="#">공지사항</a></li>
                                <li><a href="#">월페이퍼</a></li>
                            </ul>
                            </div>
                        </li>
                        </ul>
                        <span className="mobile-close-box">
                        <a href="#" className="mobile-close-btn"><img src="./images/btn_gnb_close.png" alt=""/></a>
                    </span>
                    </div>
                    </nav>
            </React.Fragment>
        )
    }
}

export default MobileNavComponent;