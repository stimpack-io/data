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
        let activePage = "AcceptGdpr"

        // true if no user, or a user that has accepted gdpr
        if(!user || user.has_accepted_gdpr){            
            activePage = this.props.activePage;
        }

        return Pages[activePage]
        
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
