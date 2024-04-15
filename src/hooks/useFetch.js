import { useState } from "react"
import axios from 'axios'

const useFetch = () => {

    const [apiData, setApiData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const getApi = url => {
        axios.get(url)
            .then(res => {
                setHasError(false)
                setApiData(res.data)
            })
            .catch(err => {
                console.log(err)
                setHasError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return [apiData, getApi, hasError, isLoading]
}

export default useFetch