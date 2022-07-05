import React, {useState, useEffect} from "react"
import {Form, Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import useApi from "../../helpers/useApi"
import {useDispatch, useSelector} from 'react-redux'

function FormRegis() {
    const [Users, setUsers] = useState({ email: 'email', password: 'password', name: 'name', 
    brithdate: 'birthdate', address: 'address', phone:'phone'})

    const api = useApi()

    const onChangeInput = (event) => {
        event.preventDefault()
        const data = {...Users}
        data[event.target.name] = event.target.value
        setUsers(data)
    }

    const signup = () => {
        console.log(Users)
        api.requests({
            method: 'POST',
            url: '/users/',
            data: Users
        })
        .then((res) => {
            console.log('res', res)
        })
        .catch((err) => {
            console.log("error", err)
        })
    }

    return (
        <>
        <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" onChange={onChangeInput} placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" onChange={onChangeInput} placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="name" onChange={onChangeInput} placeholder="Your Name" />
        </Form.Group>
        
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Photo</Form.Label>
            <Form.Control type="file" disabled/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupBirhtdate">
            <Form.Label>Birthdate</Form.Label>
            <Form.Control name="birthdate" type="birthdate" onChange={onChangeInput} placeholder="YYYY-MM-DD" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control name="address" type="address" onChange={onChangeInput} placeholder="Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control name="phone" type="phone" onChange={onChangeInput} placeholder="Phone Number" />
        </Form.Group>
        <Button onClick={signup} variant="primary" type="button">
            Register
        </Button>
        </Form>
        </>
    )
}

export default FormRegis