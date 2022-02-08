import React, { Component } from 'react';

class QuickMenuComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="quick-menu">
                <a href="#" className="quick-menu-btn" title="스타벅스 현대카드">
                    <img src={process.env.PUBLIC_URL + "/images/lIpY1G_20211130084912188.png"} alt="퀵메뉴"/>
                </a>
                </div>
            </React.Fragment>
        )
    }
}

export default QuickMenuComponent;