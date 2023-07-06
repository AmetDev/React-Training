//import car from './car1.jpg'
//import {cars as carsData} from './cars.data'
import { CarItem } from './car-item/CarItem'
import React, { useState, useEffect } from 'react';
import CreateCarForm from './create-car-form/CreateCarForm';
import { CarService } from '../../../services/car.service';
// import { useNavigate } from "react-router-dom";
export default function Home() {


  const [cars, setCars] = useState({});
  useEffect(() => {
    const fetchData = async () => {
    const data1 = await CarService.getAll();
    console.log(data1)
    setCars(data1)
    }
    fetchData()
  }, [])


  // cars.map(car=> {
  //   key = car.id
  //   console.log(car.name)
  // })
  //const [car, setCar] = useState('')
  //const filtredCars = useMemo(cars.filter(car => car.price >= 20000), [])

  // const nav =  useNavigate();

  return (
    <div>
    <h1 className='text-white'>Cars catalog</h1>
    {/* <button className="bg-white m-2" onClick={()=>nav('car/1')}>go</button> */}
    <CreateCarForm setCars={setCars}/>
    <div>
      {cars.length ? (
        cars.map(car => <CarItem key={car.id} car={car} />)
      ): (
        <p className='text-white'>There a no cars</p>
      )}
    </div>
  </div>
  )
}

