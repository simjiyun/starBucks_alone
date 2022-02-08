import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';

class WrapComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <div id='wrap'>
                    <HeaderComponent/>
                    <MainComponent/>
                    <FooterComponent/>
                </div>
            </React.Fragment>
        )
    }
}

export default WrapComponent;