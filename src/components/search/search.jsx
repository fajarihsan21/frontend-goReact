import React from "react"
import style from './search.module.css'
import {Form, Button, FormControl, Nav} from 'react-bootstrap'

function Search() {
    return (
        <>
        <Nav className={style.search}>
        <Form className="d-flex">
            <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
        </Nav>
        </>
    )
}

export default Search