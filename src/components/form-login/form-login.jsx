import React, {useState, useEffect} from "react"
import {Form, Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import useApi from "../../helpers/useApi"
import {login} from '../../store/reducer/users'
import {useDispatch, useSelector} from 'react-redux'

function FormLogin() {
    const [Users, setUsers] = useState({ email: 'email', password: 'password'})

    const {isAuth} = useSelector((state) => state.users)

    const api = useApi()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigate('/')
        }
    }, [isAuth])

    const onChangeInput = (event) => {
        event.preventDefault()
        const data = {...Users}
        data[event.target.name] = event.target.value
        setUsers(data)
    }

    const goLogin = () => {
        console.log(Users)
        api.requests({
            method: 'POST',
            url: '/auth/',
            data: Users
        })
        .then((res) => {
            const {data} = res.data
            dispatch(login(data.token))
        }).catch((err) => {
            console.log("error", err)
        })
    }

    return (
        <>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" onChange={onChangeInput} placeholder='email' />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" onChange={onChangeInput} placeholder='password' />
        </Form.Group>
        <Button defaultValue="Login" onClick={goLogin} variant="primary" type="button">
            Login
        </Button>
        </Form>
        </>
    )
}

export default FormLogin