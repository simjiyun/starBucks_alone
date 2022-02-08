import React, { Component } from 'react';

class FooterComponent extends Component {

    render() {
        return (
            <React.Fragment>
                  <footer id="footer">
                    <div className="container">
                    <div className="top">
                        <div className="wrap">
                        <ul>
                            <li className="mobile">
                            <dl>
                                <dt><a href="#">CUSTOMER SERVICE & IDEAS</a></dt>
                                <dd><a href="#">자주 하는 질문</a></dd>
                                <dd><a href="#">고객의 소리</a></dd>
                                <dd className="mobile-arrow"><a href="#">스타벅스 이용 팁</a></dd>
                                <dd><a href="#">고객 경험 설문조사</a></dd>
                                <dd><a href="#">비회원 전자영수증 조회</a></dd>
                            </dl>
                            </li>
                            <li>
                            <dl>
                                <dt><a href="#">COMPANY</a></dt>
                                <dd><a href="#">한눈에 보기</a></dd>
                                <dd><a href="#">스타벅스 사명</a></dd>
                                <dd className="mobile-arrow"><a href="#">스타벅스 소개</a></dd>
                                <dd><a href="#">국내 뉴스룸</a></dd>
                                <dd><a href="#">세계의 스타벅스</a></dd>
                                <dd><a href="#">글로벌 뉴스룸</a></dd>
                            </dl>
                            </li>
                            <li>
                            <dl>
                                <dt><a href="#">CORPORATE SALES</a></dt>
                                <dd><a href="#">단체 및 기업 구매 안내</a></dd>
                            </dl>
                            </li>
                            <li>
                            <dl>
                                <dt><a href="#">PARTNERSHIP</a></dt>
                                <dd><a href="#">신규 입점 제의</a></dd>
                                <dd><a href="#">협력 고객사 등록신청</a></dd>
                            </dl>
                            </li>
                            <li>
                            <dl>
                                <dt><a href="">ONLINE COMMUNITY</a></dt>
                                <dd><a href="#">페이스북</a></dd>
                                <dd><a href="#">트위터</a></dd>
                                <dd><a href="#">유튜브</a></dd>
                                <dd><a href="#">인스타그램</a></dd>
                            </dl>
                            </li>
                            <li>
                            <dl>
                                <dt><a href="">RECRUIT</a></dt>
                                <dd><a href="#">채용 소개</a></dd>
                                <dd><a href="#">채용 지원하기</a></dd>
                            </dl>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="wrap">
                        <span><a href="#" title="여성가족부장관상"><img src="./images/footer_award23.jpg" alt=""/></a></span>
                        <span><a href="#" title="행정안전부장관 표창"><img src="./images/footer_award24.jpg" alt=""/></a></span>
                        <span><a href="#" title="농림축산식품부 장관상"><img src="./images/footer_award25.jpg" alt=""/></a></span>
                        <span><a href="#" title="국회산업통상자원중소벤쳐위원회장상"><img src="./images/footer_award26.jpg" alt=""/></a></span>
                        <span><a href="#" title="대통령직속 일자리위원회 부위원장"><img src="./images/footer_award27.jpg" alt=""/></a></span>
                        <span><a href="#" title="반성장위원회 위원장상"><img src="./images/footer_award28.jpg" alt="동"/></a></span>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="wrap">
                        <ul>
                            <li>
                            <div>
                                <span><a href="#">개인정보처리방침</a></span>
                                <span><i></i></span>
                                <span><a href="#">영상정보처리기기 운영관리 방침</a></span>
                                <span><i></i></span>
                                <span><a href="#">홈페이지 이용약관</a></span>
                                <span><i></i></span>
                                <span><a href="#">위치정보 이용약관</a></span>
                                <span><i></i></span>
                                <span><a href="#">스타벅스 카드 이용약관</a></span>
                                <span><i></i></span>
                                <span><a href="#">비회원 이용약관</a></span>
                                <span><i></i></span>
                                <span><a href="#">My DT Pass 서비스 이용약관</a></span>
                                <span><i></i></span>
                                <span><a href="#">윤리경영 핫라인</a></span>
                            </div>
                            </li>
                            <li>
                            <div>
                                <span><a href="#" className="find-btn" title="찾아오시는길">찾아오시는길</a></span>
                                <span><a href="#" className="find-btn" title="신규입점제의">신규입점제의</a></span>
                                <span><a href="#" className="find-btn" title="사이트맵">사이트맵</a></span>
                            </div>
                            </li>
                            <li>
                            <address>
                                사업자등록번호 : 201-81-21515 (주)스타벅스커피 코리아 대표이사 : 송 데이비드 호섭 TEL : 1522-3232 개인정보 책임자 : 하익성
                            </address>
                            </li>
                            <li>
                            <p>
                                &copy;2021 Starbucks Coffee Company. All Rights Reserved.
                            </p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default FooterComponent;