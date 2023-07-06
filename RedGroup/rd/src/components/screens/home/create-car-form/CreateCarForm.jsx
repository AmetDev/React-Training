import { useState } from "react";
import { cars } from "../cars.data";

const clearData = {
    price: '',
    name: '',
    image: '',
}

const CreateCarForm = ({setCars}) => {
    const [data, setData] = useState(clearData);
 
    const createCar = (e) => {
        e.preventDefault()    
        const count = cars.map(car => car.id)
        setCars(prev => [{id: prev.length+1,...data}, ...prev])
    }
    return (
        <form className="flex">
            <input onChange={e => setData(prev => ({...prev, name:e.target.value}))} value={data.name} className=" mb-8 p-1.5 border-solid border-2 border-yellow" placeholder="Name" />
            <input  onChange={e =>setData(prev => ({...prev, price:e.target.value}))} value={data.price}  className=" mb-8 p-1.5 border-solid border-2 border-yellow" placeholder="Price" />
            <input  onChange={e => setData(prev => ({...prev, image:e.target.value}))} value={data.image}  className=" mb-8 p-1.5 border-solid border-2 border-yellow" placeholder="Image" />
            <button onClick={e => createCar(e)} className="bg-white m-2 p-4 block hover:bg-slate-500 rounded-xl transition-all">Create</button>
        </form>
    )
}
export default CreateCarForm;