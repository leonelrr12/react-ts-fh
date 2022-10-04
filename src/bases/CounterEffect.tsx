import { useEffect, useRef, useState } from "react"
import { gsap } from 'gsap'

const MAXIMUN_COUNT = 10;

interface Props {
  initialValue?: number;
}

export const CounterEffect = ({ initialValue = 0 }: Props) => {

  const [counter, setCounter] = useState(initialValue)
  const counterEle = useRef<HTMLHeadingElement>(null)

  const handleClick = () => {
    // counter < MAXIMUN_COUNT &&  setCounter( prev => prev + 1 )
    setCounter( prev => Math.min( prev + 1, MAXIMUN_COUNT) )
  }

  useEffect(() => {
    if(counter < 10) return

    console.log('%cLlego al Máximo valor', 'color: red, background-color: white')

    const tl = gsap.timeline()

    tl.to(counterEle.current, { y: -10 })
      .to(counterEle.current, { y: 0, duration: 1, ease: 'bounce' })

  }, [counter])
  
  return (
    <> 
      <h1>Counter Effect</h1>
      <h2 ref={ counterEle }>{ counter }</h2>

      <button onClick={ handleClick }>
        +
      </button>
    </>
  )
}
