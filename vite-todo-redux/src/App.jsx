import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { setArrText, setWriteText } from './redux/ListReducer'

function App() {
  const dispatch = useDispatch();
  const {writeText, ArrText} = useSelector(state => state.rootSlice)
  const funcOnSubmit = () => {
dispatch(setArrText(writeText))
  }
  return (
    <>
      <input onChange={(event) => dispatch(setWriteText(event.target.value)) }  type="text" placeholder='write some text...'/>
      <div onClick={()=>funcOnSubmit()}>click</div>
      <div>
        <ul>
          {
            ArrText.map((el) => {
              return (
              <div key={el}>{el}</div>
              )
            })

          }
        </ul>
      </div>
    </>
  )
}

export default App
