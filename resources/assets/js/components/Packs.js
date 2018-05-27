import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardDeck,
    CardSubtitle, CardBody, Col, Row } from 'reactstrap'

export default class Packs extends Component {

    render() {
        return (
            <div className="workspace">
                <Row className="pack-wrapper">
                    {this.renderPacks()}
                </Row>
            </div>
        )
    }

    renderPacks() {
        return data.packs.map(pack => {
            return (
                <Col sm="4" key={pack.id}>
                    <Card className="pack-card">
                        <div alt={pack.name} title={pack.name} className="card-title-wrapper card-title">
                            {pack.name}
                        </div>
                        <CardBody className="pack-body">
                            <CardSubtitle className="pack-user">by <a href={"https://github.com/" + pack.user.nickname} className="pack-user">{pack.user.nickname}</a></CardSubtitle>
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
        window.open('http://stimpack.test/open/' + user.nickname + '/' + event.target.value, '_blank');
    }

    review(event) {
        window.open( + '/packs/' + event.target.value + '/review', '_blank');
    }
}
