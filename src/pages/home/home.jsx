import React, {useState, useEffect} from "react"
import Navbar from "../../components/header/navbar"
import Cards from "../../components/cards/cards"
import Testimonial from "../../components/testimonial/testimonial"
import Footer from "../../components/footer/footer"
import style from './home.module.css'
import {Dropdown, Container, Row, Col, Button} from 'react-bootstrap'
import useApi from "../../helpers/useApi"

function Home() {
    const [prod, setProd] = useState([])

    const api = useApi()

    const getDataProd = async () => {
        api.requests({
            method: 'GET',
            url: '/vehicles/'
        })
        .then(res => {
            const {data} = res.data
            if (Array.isArray(data)) {
                    setProd(data)
                }
        })
        .catch(err => {
            console.log('error', err)
        })
    }
    // did mount
    useEffect(() => {
        getDataProd()
    }, [])

    return (
        <>
        <Navbar />
        <div className={style.background}>
            <div className={style.container}>
                <h1 className={style.h1}>Explore and</h1>
                <h1>Travel</h1>
                <h6 className={style.h6}>Vehicle Finder</h6>

                <div className={style.dropdown}>
                <Container>
                <Row>
                    <Col>
                        <Dropdown>
                        <Dropdown.Toggle variant="secondary" className={style.dropButton}>Location</Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col className={style.right}>
                        <Dropdown>
                        <Dropdown.Toggle variant="secondary" className={style.dropButton}>Type</Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col> 
                        <Dropdown>
                        <Dropdown.Toggle variant="secondary" className={style.dropButton}>Payment</Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col className={style.right}>
                        <Dropdown>
                        <Dropdown.Toggle variant="secondary" className={style.dropButton}>Date</Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <br />
                <Button variant="warning">Explore</Button>{' '}
                </Container>
                </div>
            </div>
        </div>

        <div className={style.card}>
            <h1>Content</h1>
            <br />
            <div className={style.content}>
            <Cards title={'Van'} image={'https://images.unsplash.com/photo-1626827521786-1909df055fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} 
            location={'Jakarta'}/>
            {prod.map((v) => {
            return (
              <Cards key={v.id_vehicle} title={v.vehicle_name} image={v.image} location={v.location} />
            )
          })}
            </div>
        </div>

        <Container className={style.card}>
        <Row>
            <Col>
            <div className={style.h6}>
                <h1>Testimonials</h1>
            </div>
            <div>
                "It was the right decision to rent vehicle here, I spent less money
                and enjoy the trip. It was an amazing experience to have a ride for
                wildlife trip!"
                <span className="name">
                <br />
                <br /> <h5>Edward Weevil</h5> 
                </span>
                Founder Circle
            </div>
            </Col>
            <Col className={style.testi}><Testimonial /></Col>
        </Row>
        </Container>

        <Footer />
        </>
    )

}

export default Home