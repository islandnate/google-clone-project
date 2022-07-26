import { useState, useEffect } from 'react';
import API_KEY from "./keys.jsx"

const CONTEXT_KEY = "e90b92e78af313ea1"

const UseGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData()
    }, [term])

    return { data }
}

export default UseGoogleSearch;
