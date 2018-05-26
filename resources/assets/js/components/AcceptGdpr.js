import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardDeck,
    CardSubtitle, CardBody, Col, Row } from 'reactstrap'

export default class AcceptGdpr extends Component {

    render() {
        return (
            <div className="workspace">
                <Row className="pack-wrapper">
                    <a href="/acceptGDPR">In accordance to GDPR I, by clicking this link, accept your privacy policy!</a>
                </Row>
            </div>
        )
    }

}
