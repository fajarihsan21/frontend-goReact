import React from "react"
import FormLogin from "../../components/form-login/form-login"
import style from './login.module.css'
import {Row, Col} from 'react-bootstrap'
import Image from './image1.jpg'

function Login() {
    return (
        <>
        <Row>
            <Col>
                <img src={Image}
                className='img-fluid shadow-4' alt='...' />
            </Col>
            <Col className={style.form}>
            <h2 className={style.h2}>Login</h2>
                <FormLogin />
            </Col>
        </Row>
        </>
    )
}

export default Login