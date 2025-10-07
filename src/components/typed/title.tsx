import { useEffect, useRef } from "react"
import Typed from "typed.js"

export default () => {
    const typedRef = useRef(null)
    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["Full-stack", "или нет", "возможно чуть-чуть", "<b class='text-blue'>#archlinux ❤️</b>"],
            typeSpeed: 50,
            loop: true
        
        })
        return () => {
            typed.destroy()
        }
    }, [])
    return (
        <span  className="text-3xl" ref={typedRef}/>
    )
}