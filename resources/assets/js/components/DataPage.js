import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardDeck,
    CardSubtitle, CardBody, Col, Row } from 'reactstrap';
import Header from './Header.js';


export default class DataPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container packs-container">
                    <Row className="pack-wrapper">
                        {this.renderPacks()}
                    </Row>
                </div>
            </div>
        );
    }

    renderPacks() {
        return data.packs.map(pack => {
            return (
                <Col sm="4" key={pack.id}>
                    <Card className="pack-card">
                        <div className="pack-icon-container">
                        </div>
                        <CardBody className="pack-body">
                            <CardTitle className="card-title">{pack.name}</CardTitle>
                            <CardSubtitle className="pack-user">by <u><a href={"https://github.com/" + pack.user.nickname} className="pack-user">{pack.user.nickname}</a></u></CardSubtitle>
                            <CardText className="pack-description">{pack.description}</CardText>
                            <Button value={pack.name} onClick={this.open} className="btn modal-buttons-style">Open</Button>
                            <Button value={pack.id} onClick={this.review} className="btn modal-buttons-style">Review JSON</Button>
                        </CardBody>
                    </Card>
                </Col>
            );
        });
    }

    open(event) {
        window.open('http://stimpack.test/open/ajthinking/' + event.target.value, '_blank');
    }

    review(event) {
        window.open('http://data.stimpack.test/packs/' + event.target.value + '/review', '_blank');
    }
}
