import React, {useState, useEffect} from "react"
import Navbar from "../../components/header/navbar"
import Search from "../../components/search/search"
import Cards from "../../components/cards/cards"
import Footer from "../../components/footer/footer"
import style from './vehicle.module.css'
import useApi from "../../helpers/useApi"

function Vehicles() {
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
        <Search />
        <div className={style.card}>
            <h1>Popular in Town</h1>
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
        <div className={style.card}>
            <h2>Cars</h2>
            <br />
            <div className={style.content}>
            <Cards title={'Van'} image={'https://images.unsplash.com/photo-1626827521786-1909df055fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} 
            location={'Jakarta'}/>
            </div>
        </div>
        <div className={style.card}>
            <h2>Bike</h2>
            <br />
            <div className={style.content}>
            <Cards title={'Van'} image={'https://images.unsplash.com/photo-1626827521786-1909df055fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} 
            location={'Jakarta'}/>
            </div>
        </div>
        <div className={style.card}>
            <h2>Bicycle</h2>
            <br />
            <div className={style.content}>
            <Cards title={'Van'} image={'https://images.unsplash.com/photo-1626827521786-1909df055fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} 
            location={'Jakarta'}/>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Vehicles