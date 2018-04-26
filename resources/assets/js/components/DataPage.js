import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardDeck,
    CardSubtitle, CardBody, Col, Row } from 'reactstrap';

export default class DataPage extends Component {
    render() {
        return (
            <div className="container">
                <Row>
                    {this.renderPacks()}
                </Row>
            </div>
        );
    }

    renderPacks() {
        return data.packs.map(pack => {
            console.log(pack);
            return (
                <Col sm="4" key={pack.id}>
                    <Card className="pack-card">
                        <div className="pack-icon-container">
                        </div>
                        <CardBody className="pack-body">
                            <CardTitle>{pack.name}</CardTitle>
                            <CardSubtitle><a href={"https://github.com/" + pack.user.name}>github.com/{pack.user.name}</a></CardSubtitle>
                            <CardText className="pack-description">{pack.description}</CardText>
                            <Button value={pack.name} onClick={this.open} className="pack-button">Open</Button>
                            <Button value={pack.id} onClick={this.review} className="pack-button">Review JSON</Button>                            
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