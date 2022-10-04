import { useReducer } from "react"
import { CounterSatate } from "./interfaces/interfaces";
import { CounterReducer } from "./state/counterReducer";
import { doIncreaseBy, doReset } from "./actions/actions";
// import * as CounterActions from "./actions/actions";


export const INITIAL_STATE: CounterSatate = {
  counter: 10,
  previous: 0,
  changes: 0,
}


export const CounterReducerComponent= () => {

  const [ state, dispatch] = useReducer(CounterReducer, INITIAL_STATE)

  const handleReset = () => {
    dispatch( doReset() )
  }
  const handleIncreaseBy = (value: number) => {
    dispatch( doIncreaseBy(value) )
  }

  return (
    <> 
      <h1>Counter Reducer Segmentado: </h1>
      <pre>
        { JSON.stringify(state, null, 2 ) }
      </pre>
      <button onClick={ ()=>handleIncreaseBy(-1) }>
        -1
      </button>
      <button onClick={ ()=>handleIncreaseBy(5) }>
        +5
      </button>
      <button onClick={ ()=>handleIncreaseBy(10) }>
        +10
      </button>
      <button onClick={ ()=>handleIncreaseBy(1) }>
        +1
      </button>
      <button onClick={ handleReset }>
       Reset
      </button>
    </>
  )
}
