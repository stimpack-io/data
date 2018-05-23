import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardDeck,
    CardSubtitle, CardBody, Col, Row } from 'reactstrap';
import Header from './Header.js';
import Side from './Side.js';
import Workspace from './Workspace.js';


export default class DataPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Side />
                <Workspace />
            </div>
        )
    }
}
