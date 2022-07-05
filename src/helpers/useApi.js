import {useState, useEffect} from "react"
import axios from "axios"
import {useSelector} from 'react-redux'

function useApi(urls = '') {
    const {token} = useSelector((state) => state.users)
    const [requests, setRequests] = useState({
        baseURL: process.env.REACT_APP_BASEURL || urls,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    const setConfig = () => {
        setRequests({
            ...requests,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
    }

    useEffect(() => {
        setConfig()
    }, [])

    return {
        requests: axios.create(requests)
    }
}

export default useApi
