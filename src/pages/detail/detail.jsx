import React, {useState, useEffect} from "react"
import style from './detail.module.css'
import {Button} from 'react-bootstrap'
import Navbar from "../../components/header/navbar"
import Footer from "../../components/footer/footer"
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Detail() {
    const [data, setData] = useState({})
    const params = useParams()

    useEffect(() => {
        axios
        .get(`https://my-go-backend.herokuapp.com/vehicles/${params.id}`)
        .then((res) => {
            setData(res.data.data)
        })
        .catch((err) => {
            console.log('🚀 ~ file: detail.jsx ~ line 16 ~ axios.get ~ err', err)
        })
    }, [])

    return (
        <>
        <Navbar />
        <div className={style.title}>
            <h2>Detail</h2>
        </div>
        <div className={style.container}>
        <div className={style.card} style={{ maxWidth: 1000 }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src={data.image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{data.vehicle_name}</h5> 
                <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
                </p>
                <p className="card-text">
                <small className="text-muted">Price: $5000</small>
                </p>
                <Button variant="outline-dark" className={style.button}>Chat Admin</Button>{' '}
                <Button variant="outline-success" className={style.button}>Reservation</Button>{' '}
            </div>
            </div>
        </div>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default Detail