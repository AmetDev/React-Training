import { useParams } from "react-router-dom";
import {useState, useEffect } from "react";
import { CarService } from "../../../../services/car.service";

const CarDetail = () => {
    useEffect(() => {
        const fetchData = async () => {
        const data1 = await CarService.getAll();
        setCars(data1)
        }
        fetchData()
      }, [])

    return <div className="text-white">CarDetail {id}</div>
}

export default CarDetail;