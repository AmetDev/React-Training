export function CarItem({ car }) {
    return ( 
          <div className="text-white">
                  <div className='border inline-block m-5'>
                  <img className='w-52 h-auto ' src={car.img} alt={car.name}></img>
                  <div className='text-white'>{car.name}</div>
                  <div className='text-white m-1'>{new Intl.NumberFormat("en", {style: "currency", currency: "USD"}).format(car.price)}</div>
                  <button className='text-black bg-slate-400 rounded-md m-1 p-1'>read more</button>
                 </div>
            </div>  
      )
}
