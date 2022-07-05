import React from "react"
import {Navbar, Container, Nav, Button} from "react-bootstrap"
import style from './navbar.module.css'
import {ReactComponent as Logo} from './logo.svg'

function Navbars() {
    return (
        <>
        <Navbar bg="light" variant="light" className={style.nav} fixed="top">
                <Container>
                 <Navbar.Brand href="/"><Logo /></Navbar.Brand>
                    <Nav className={style.navbar}>
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="vehicles">Vehicles</Nav.Link>
                     <Button href="login" variant="outline-warning" className={style.button}>Login</Button>{' '}
                     <Button href="register" variant="warning" className={style.button}>Register</Button>{' '}
                    </Nav>
                </Container>
            </Navbar>
        </>
        
    )
}

export default Navbars