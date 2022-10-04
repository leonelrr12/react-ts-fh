import './App.css'
import { CounterEffect } from './bases/CounterEffect'
import { CounterHook } from './bases/CounterHook'
import { CounterReducerComponent } from './count-reducer/CounterReducerComponent'
// import { CounterReducerComponent } from './count-reducer/CounterReducerComponent'


function App() {
  return (
    <>
      <h1>React with TypeScript</h1>
      <hr />
      <CounterEffect initialValue={ 1 } /> 
      <CounterHook initialValue={ 5 } /> 
      <CounterReducerComponent /> 
    </>
  )
}

export default App
