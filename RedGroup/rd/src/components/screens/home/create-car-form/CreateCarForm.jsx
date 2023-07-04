import { useState } from "react";
import { cars } from "../cars.data";

const CreateCarForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('')
    const [car1, setCar] = useState([name, image,price])
    const [cars1, setCars] = useState(cars)
    const createCar = (e) => {
        setCar([name, image,price])
        const count = cars.map(car => car.id)
        console.log(count.length)
        const ob1 = {id:String(count.length+1),name: name, image:image, price: Number(price)}
        e.preventDefault()
        setCars((prevCars1)=>[
            ...prevCars1,
            ob1
        ])
        //setCars(prevCars1 => prevCars1.push(ob1))
        console.log(cars1)
    }
    //console.log(car1)
   

    return (
        <form className="flex">
            <input onChange={e => setName(e.target.value)} value={name} className=" mb-8 p-1.5 border-solid border-2 border-yellow" placeholder="Name" />
            <input  onChange={e => setPrice(e.target.value)} value={price}  className=" mb-8 p-1.5 border-solid border-2 border-yellow" placeholder="Price" />
            <input  onChange={e => setImage(e.target.value)} value={image}  className=" mb-8 p-1.5 border-solid border-2 border-yellow" placeholder="Image" />
            <button onClick={e => createCar(e)} className="bg-white m-2 p-4 block hover:bg-slate-500 rounded-xl transition-all">Create</button>
        </form>
    )
}
export default CreateCarForm;