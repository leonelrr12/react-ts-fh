import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react"


export const useCounter = ({ maxCount=1, initialValue=4 }) => {
  const [counter, setCounter] = useState(initialValue)

  const animateToElement = useRef<HTMLHeadingElement>(null)
  const tl = useRef(gsap.timeline())


  const handleClick = () => {
    // counter < maxCount &&  setCounter( prev => prev + 1 )
    setCounter( prev => Math.min( prev + 1, maxCount) )
  }

  useLayoutEffect(() => {

    if(!animateToElement.current) return

    tl.current.to(animateToElement.current, { y: -10 })
      .to(animateToElement.current, { y: 0, duration: 1, ease: 'bounce' })
      .pause()
  }, [])

  useEffect(() => {
    tl.current.play(0)
  }, [counter])

  return {
    counter,
    animateToElement,
    handleClick
  }
}
