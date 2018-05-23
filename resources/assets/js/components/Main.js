import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardDeck,
    CardSubtitle, CardBody, Col, Row } from 'reactstrap';
import Header from './Header.js';
import Side from './Side.js';
import Packs from './Packs.js';
import Profile from './Profile.js';

const Pages = {
    Packs: Packs,
    Profile: Profile
}

export class Main extends Component {
    
    render() {
        let Page = Pages[this.props.activePage];
        return (
            <div>
                <Header />
                <Side />
                <Page />
            </div>
        )
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
            //
        }, dispatch);
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(Main);