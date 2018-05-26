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
                <span id="controlBar" className="controlBar">
                    <span data-page="Packs" onClick={this.navigate.bind(this)} className="control-bar-item">
                        <i title="Packs" className={"fas fa-cubes icon-control-bar"}></i><span className="control-bar-item-text">Packs</span>
                    </span>
                    <span data-page="Profile" onClick={this.navigate.bind(this)} className="control-bar-item">
                        <i title="Profile" className={"fas fa-user-circle icon-control-bar"}></i><span className="control-bar-item-text">Profile</span>
                    </span>
                    <span data-page="Logout" onClick={this.logout.bind(this)} className="control-bar-item">
                        <i title="Logout" className={"fas fa-sign-out-alt icon-control-bar"}></i><span className="control-bar-item-text">Logout</span>
                    </span>
                </span>
            )
        } else {
            return (
                <span id="controlBar" className="controlBar">
                    <span data-page="Packs" onClick={this.navigate.bind(this)} className="control-bar-item">
                        <i title="Packs" className={"fas fa-cubes fa-2x icon-control-bar"}></i><span className="control-bar-item-text">Packs</span>
                    </span>
                    <span data-page="Login" onClick={this.login.bind(this)} className="control-bar-item">
                        <i title="Login" className={"fas fa-sign-in-alt icon-control-bar"}></i><span className="control-bar-item-text">Login</span>
                    </span>
                    <span data-page="Register" onClick={this.login.bind(this)} className="control-bar-item">
                        <i title="Register" className={"fas fa-clipboard-list icon-control-bar"}></i><span className="control-bar-item-text">Register</span>
                    </span>

                </span>

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
