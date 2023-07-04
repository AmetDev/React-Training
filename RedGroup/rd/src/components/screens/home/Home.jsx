//import car from './car1.jpg'
import {cars} from './cars.data'
import { CarItem } from './car-item/CarItem'
//import React, { useState } from 'react';
import CreateCarForm from './create-car-form/CreateCarForm';
export  function Home() {
  // cars.map(car=> {
  //   key = car.id
  //   console.log(car.name)
  // })
  //const [car, setCar] = useState('')
  //const filtredCars = useMemo(cars.filter(car => car.price >= 20000), [])
  return (
    <div>
    <h1 className='text-white'>Cars catalog</h1>
    <CreateCarForm/>
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
