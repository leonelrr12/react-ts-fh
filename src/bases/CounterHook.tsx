import { useCounter } from "../hooks/useCounter";

interface Props {
  initialValue?: number;
}

export const CounterHook = ({ initialValue = 0 }: Props) => {

  const { counter, animateToElement, handleClick } = useCounter({
    maxCount: 10,
    initialValue: 4
  })
  
  return (
    <> 
      <h1>Counter Hook</h1>
      <h2 ref={ animateToElement }>{ counter }</h2>

      <button onClick={ handleClick }>
        +
      </button>
    </>
  )
}
