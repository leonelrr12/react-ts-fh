import { CounterAction } from "../actions/actions";
import { CounterSatate } from "../interfaces/interfaces";


export  const CounterReducer = ( state: CounterSatate, action: CounterAction ): CounterSatate => {

  const { counter, previous, changes } = state;

  switch (action.type) {
    case 'reset':
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      }
    case 'increaseBy':
      return {
        counter: counter + action.payload.value,
        previous: counter,
        changes: changes + 1
      }
    default:
      return state
  }
 }
