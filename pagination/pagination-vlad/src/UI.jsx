import { Pagination } from "./App";

export function UI(fetching) {
    //   fetching.map(element => {
    //     return (
    //         <div>
    //             {element}
    //         </div>
    //     )
    //   })
    const todos = fetching.map((el) => <div key={el.id}>{el}</div>)
    return todos
}