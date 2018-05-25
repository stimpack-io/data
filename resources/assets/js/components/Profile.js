import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardDeck,
    CardSubtitle, CardBody, Col, Row } from 'reactstrap'

export default class Profile extends Component {

    render() {
        return (
            <div className="workspace">
                <div>
                    <h3 className="headline">Welcome {user.nickname}!</h3>
                    <div className="color2">
                        <p>First, make sure you have installed stimpack-io/stimpack</p>
                        <p>Then, register the token in your local installation by visiting:</p>
                        <a href={"http://stimpack-dev.test/register/" + user.stimpack_io_token}>{"http://stimpack-dev.test/register/" + user.stimpack_io_token}</a>
                        <p>If you prefer to do it manually enter the following key/value in your env file</p>
                        <p><b>STIMPACK_IO_TOKEN={user.stimpack_io_token}</b></p>
                        <p>Now you are ready to roll out,</p>
                        <p>Good luck!</p>
                    </div>

                </div>
            </div>
        )
    }
}
