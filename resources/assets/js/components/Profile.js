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
                    <div className="connect-instructions">
                        <div className="mt-3">   
                            <p>Lets get started!</p>
                            <p>First, make sure you have installed stimpack-io/stimpack</p>
                            <p>Then, register the token in your local installation by visiting:</p>
                            <a target="_blank" href={ stimpack_client_url + "/register/" + user.stimpack_io_token}>{stimpack_client_url + "/register/" + user.stimpack_io_token}</a><br/><br/>
                            <p>If you prefer to do it manually enter the following key/value in your env file</p>
                            <p><b>STIMPACK_IO_TOKEN={user.stimpack_io_token}</b></p>
                            <p>Now you are ready to roll out,</p>
                            <p>Good luck!</p>
                            <p>PS. At anytime you can <a href="/users/delete">delete your account</a> and all associated content.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
