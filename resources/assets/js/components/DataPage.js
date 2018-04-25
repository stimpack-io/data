import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Col, Row } from 'reactstrap';

export default class DataPage extends Component {
    render() {
        return (
            <div className="container">
                <h1>Lets browse some packs</h1>
                <img src="img/stimpack_favicon.png" />
                {this.renderCards()}
            </div>
        );
    }

    renderCards() {
        return (
            <Row>
            <Col sm="4">
              <Card>
                <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>                                                
            </Row>
          );        
    }

    renderPack() {
        return data.packs.map(pack => {
            return (
                <div key={pack.id} className="row justify-content-center">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">{pack.name}</div>
                            
                            <div className="card-body">
                                <img src="img/stimpack_favicon.png" />
                                {pack.description}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }
}