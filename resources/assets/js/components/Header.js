import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { navigate } from '../actions';

export class Header extends Component {
    render() {
        return (
            <div id="header" className="header">
                <div className="logo">
                    <span className="logo-text headline-text-style">Stimpack</span>
                </div>
                <div className="menu">
                    {this.renderUserNavigation()}
                </div>
            </div>
        );
    }

    renderUserNavigation() {
        if(user) {
            return (
                <div>
                    <p data-page="Packs" onClick={this.navigate.bind(this)}>Packs</p>                    
                    <p data-page="Profile" onClick={this.navigate.bind(this)}>Profile</p>
                    <p data-page="Logout" onClick={this.logout.bind(this)}>Logout</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p data-page="Login" onClick={this.login.bind(this)}>Login</p>
                    <p data-page="Register" onClick={this.login.bind(this)}>Register</p>
                </div>
                            
            )
            
        }


    }

    navigate(event) {
        this.props.navigate(event.target.dataset.page)
    }

    login() {
        window.location.href = "http://data.stimpack.test/login";
    }    

    logout() {
        window.location.href = "http://data.stimpack.test/logout";
    }    
}

function mapStateToProps(state) {
    return {
        //
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            navigate: navigate
        }, dispatch);
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(Header);
