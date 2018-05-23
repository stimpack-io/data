import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
    render() {
        return (
            <div id="header" className="header">
                <div className="logo">
                    <span className="logo-text headline-text-style">Stimpack</span>
                </div>
                <div className="menu">
                    <div className="menu-bottom">
                    </div>
                </div>
            </div>
        );
    }
}
