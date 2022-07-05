import React from "react"
import {Card, Button} from 'react-bootstrap'
import style from './cards.module.css'
import {Link, useNavigate} from 'react-router-dom'

function Cards(props) {
    const navigasi = useNavigate()

    const goto = () => {
        navigasi(`/detail/${props.id}`)
    }

    return (
        <>
            <Card key={props.id} style={{ width: '18rem'}}>
            <Card.Img className={style.img} src={props.image} />
            <Card.Body>
                <Link to={`/detail/${props.id}`}>
                    <Card.Title>{props.title}</Card.Title>
                </Link>
                <Card.Text>
                {props.location}
                </Card.Text>
                <Button variant="primary" onClick={goto}>Details</Button>
            </Card.Body>
            </Card>
        </>
    )
}

export default Cards