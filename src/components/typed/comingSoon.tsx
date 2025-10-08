import { useEffect, useRef } from "react"
import Typed from "typed.js"

export default () => {
    const typedRef = useRef(null)
    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["..."],
            typeSpeed: 300,
            backSpeed: 300,
            loop: true,
            cursorChar:''
        
        })
        return () => {
            typed.destroy()
        }
    }, [])
    return (
        <h1 className="text-3xl relative">
            Coming soon
            <span className="absolute "  ref={typedRef}/>
        </h1>
    )
}