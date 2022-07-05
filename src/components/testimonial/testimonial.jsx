import React from 'react'
import {Card} from 'react-bootstrap'
import profile from './person1.png'


function Testimonial() {
    return (
        <Card style={{ width: '23rem' }}>
        <Card.Img variant="top" src={profile} />
        <Card.Body style={{display:'flex', justifyContent:'right'}}>
            <Card.Link href="#">Previous</Card.Link>
            <Card.Link href="#">Next</Card.Link>
        </Card.Body>
        </Card>
    )
}

export default Testimonial