import axios from 'axios';
import React from 'react';
import { useEffect, useState } from "react"
import { UI } from './UI';

export function Pagination() {
    const [fetching, setFetching] = useState([])
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10&_page=1').then((response) => setFetching([...fetching, response.data]))
   }, [])
   
    return (
        <UI arr={fetching}/>
    )
}


