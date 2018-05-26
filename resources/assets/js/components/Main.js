import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { navigate } from '../actions';

import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardDeck,
    CardSubtitle, CardBody, Col, Row } from 'reactstrap';
import Header from './Header.js';
import Side from './Side.js';
import Packs from './Packs.js';
import Profile from './Profile.js';
import AcceptGdpr from './AcceptGdpr.js';

const Pages = {
    Packs: Packs,
    Profile: Profile,
    AcceptGdpr: AcceptGdpr
}

export class Main extends Component {

    render() {
        let Page = this.getActivePageOrGdpr();

        return (
            <div>
                <Header />
                <Side />
                <Page />
            </div>
        )
    }

    getActivePageOrGdpr(){

        if(user && user.has_accepted_gdpr == "0" && this.props.activePage != "AcceptGdpr"){
            console.log('Shold send u to AcceptGdpr!')
            //this.props.navigate("AcceptGdpr")
        }else{
            console.log('You made the Gdpr test!')
            return Pages[this.props.activePage]
        }
    }

}

function mapStateToProps(state) {
    return {
        activePage: state.activePage
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
)(Main);
