//import car from './car1.jpg'
import {cars} from './cars.data'
import { CarItem } from './car-item/CarItem'

function Home() {
  // cars.map(car=> {
  //   key = car.id
  //   console.log(car.name)
  // })
  <div>
    <h1>Cars catalog</h1>
    <div>
      {cars.length ? (
        cars.map(car => <CarItem key={car.id} car={car} />)
      ): (
        <p className='text-white'>There a no cars</p>
      )}
    </div>
  </div>
}
export default Home;