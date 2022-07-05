import React from "react"
import FormRegister from "../../components/form-register/register"
import style from './register.module.css'
import {Row, Col} from 'react-bootstrap'
import Image from '../login/image1.jpg'

function Register() {
    return (
        <>
        <Row>
        <h2 className={style.h2}>Sign Up</h2>
            <Col className={style.form}>
                <FormRegister />
            </Col>
            <Col className={style.image}>
                <img src={Image}
                className='img-fluid shadow-4' alt='...' />
            </Col>
        </Row>


        </>
    )
}

export default Register