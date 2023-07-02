//import axios from "axios"
const axios = require('axios')
    export const cars = axios.get('http://localhost:4200/cars').then(response => response.data)

