import axios from 'axios';
import React from 'react';
import { useEffect, useState } from "react"
import { UI } from './UI';

export function Pagination() {
    const [fetching, setFetching] = useState([])
    const [update, setUpdate] = useState(1)
    useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${update}`).then((response) => setFetching([...fetching, response.data]))
   }, [update])
   function handleClick(e) {
    console.log(e)
    setUpdate(prev => prev +1)
   }

    return (
        <div>
               <UI arr={fetching}/>
               <button onClick = {handleClick}>more</button>
        </div>
     
    )
}


