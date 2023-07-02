//import car1 from './car1.jpg'
export default function Home() {
  return (
    <div>
      <h1 className="text-white text-4xl mt-4 mb-2">
        Cars catalog
      </h1>
      <div>
        <div className = "inline-block m-4 border-2 border-color: rgb(255 255 255);">
          <img className="bg-cover w-100%" src="https://avatars.mds.yandex.net/get-autoru-vos/2087846/567fbfcff81d088c09eae25dd6dee7ba/456x342n" alt="bmw" />
          <h2 className = "text-white pt-4">Car 1</h2>
          <p  className= "text-white pt-4 pb-4">$ 1000000</p>
          <button className="bg-white m-1 mb-4">Read more</button>
        </div>
      </div>
    </div>
 
  )
}