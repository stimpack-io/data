import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
    render() {        
        return (
            <div id="header" className="header">            
                <span className="heading-icon-and-app-name">                    
                    <span className="header-text">data.stimpack.io</span>
                </span>                
            </div>
        );
    }    
}