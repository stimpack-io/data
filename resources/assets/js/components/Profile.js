import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardDeck,
    CardSubtitle, CardBody, Col, Row } from 'reactstrap'

export default class Profile extends Component {

    render() {
        return (
            <div className="workspace">
                <div >
                    <h3>Cool, welcome {user.nickname}!</h3>
                    <p>First, make sure you have installed stimpack-io/stimpack</p>
                    <p>Then, register the token in your local installation by visiting:</p>
                    <p><b>STIMPACK_IO_TOKEN={user.stimpack_io_token}</b></p>
                </div>
                <p>{user.nickname}</p>
            </div>
        )
    }
}
