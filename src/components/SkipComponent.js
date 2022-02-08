import React, { Component } from 'react';

class SkipComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <ul id="skip">
                    <li><a href="#header">메뉴 바로가기</a></li>
                    <li><a href="#main">콘텐츠 바로가기</a></li>
                    <li><a href="#footer">푸터 바로가기</a></li>
                </ul>
            </React.Fragment>
        )
    }
}

export default SkipComponent;