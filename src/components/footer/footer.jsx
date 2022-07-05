import React from "react";
import {Card} from 'react-bootstrap'
import logo from '../header/logo.svg'

function footer() {
    return (
        <Card className="text-center">
            <Card.Footer className="text-muted">
                <div>
                    <img src={logo} alt=""  width="40" height="40" className="d-inline-block align-top"/>
                </div>
                <p>Plan and book your perfect trip with expert advice, travel tips for vehicle information from us</p>
                <p>2022 Fajar Ihsan Adinugroho. All rights reserved</p>
            </Card.Footer>
        </Card>
    )
}

export default footer