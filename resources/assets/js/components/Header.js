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
                    <span className="logo-text headline">Stimpack</span>
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

                    <span name="Packs" data-page="Packs" onClick={this.navigate.bind(this)} className="control-bar-item">
                        <i title="Packs" className={"fas fa-cubes icon-control-bar"}></i><span className="control-bar-item-text">Packs</span>
                    </span>
                    <p data-page="Profile" onClick={this.navigate.bind(this)}>Profile</p>
                    <p data-page="Logout" onClick={this.logout.bind(this)}>Logout</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p data-page="Packs" onClick={this.navigate.bind(this)}>Packs</p>
                    <p data-page="Login" onClick={this.login.bind(this)}>Login</p>
                    <p data-page="Register" onClick={this.login.bind(this)}>Register</p>
                </div>

            )

        }


    }

    navigate(event) {
        event.preventDefault()
        this.props.navigate(event.currentTarget.dataset.page)
    }

    login() {
        window.location.href = "/login";
    }

    logout() {
        window.location.href = "/logout";
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
