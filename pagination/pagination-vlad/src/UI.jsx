import { Pagination } from "./App";

export function UI(fetching) {
    let ar1 = fetching.arr
    console.log(ar1) 
    return (
        <div>
            {ar1.map(el => el.map(el1 => 
            <div key={el1.id}>
                 <div>{el1.title}</div>
                <img src={el1.thumbnailUrl} alt="sijdf"></img>     
            </div>
            ))}
        </div>
    )
}