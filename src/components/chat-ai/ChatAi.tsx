import dayjs from "dayjs"
import { useEffect, useRef } from "react"
import { useAltStore, useChatStore } from "./store"
import MsgComponent from "./MsgComponent"

export default () => {
    const { messages, addMsg } = useChatStore()
    const { altStatus, setStatus } = useAltStore()
    const scrollRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        setStatus(true)
        setTimeout(() => {
            addMsg({
                role: 'system',
                text: 'Это конечно не киллер-фича, но она ещё доделывается',
                time: dayjs()
            })
        }, 5000)
    }, [])
    useEffect(() => {
        const elem = scrollRef.current
        if (elem) {
            console.log(elem, elem.scrollTop, elem.scrollHeight)
            elem.scrollTop = elem.scrollHeight
        }
    }, [messages])
    return (
        <div className={`border-blue border-2 border-b-transparent rounded-2xl rounded-bl-none rounded-b-none  w-full text-2xl flex flex-col justify-between transition-[.3s]
            ${!altStatus ? "h-0" : "h-96"}
        `}>
            <div className="w-full h-7 flex justify-start gap-3 items-center bg-terminal rounded-t-2xl px-4">
                <div className="bg-red rounded-full w-4 h-4"/>
                <div className="bg-yellow rounded-full w-4 h-4"/>
                <div className="bg-green rounded-full w-4 h-4"/>
            </div>
            <div className="flex flex-col flex-1 py-3 px-4 h-[calc(100%-26px)]  gap-2 ">
                <div
                    className="flex flex-col flex-1 gap-4 h-[calc(100%-64px)] overflow-y-auto scrollbar-hide scroll-smooth"
                    ref={scrollRef}
                >
                    {messages.map((_, i) => <MsgComponent {..._}  key={i}/>)}
                </div>
                <div className="flex gap-1 bg-terminal rounded-2xl items-center px-2 w-full h-fit">
                    <span className="text-blue">{'>'}</span>
                    <input className="input text-[26px]" placeholder="Отправь сообщение..." disabled/>
                </div>
            </div>
        </div>
    )
}