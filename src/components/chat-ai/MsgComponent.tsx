import type { Message } from "./types"

type Props = React.ComponentProps<"div"> & Message

const msgClass = "flex gap-2 bg-terminal py-1 px-2 rounded-xl"
const getMsg = ({ role, text, time }: Props) => {
    switch (role) {
        case 'bot': return (
            <>
                <span className="text-blue">ai@chat:</span>
                <div className={msgClass}  >
                    <p className="inline-block">
                        {text}
                    </p>
                </div>
            </>
        )
        case 'system': return (
            <div className="text-yellow">
                [System] {text}
            </div>
        )
        case 'user': return (
            <>
                <span className="text-blue">guest@chat:</span>
                <div className={msgClass}>
                    <p className="inline-block">
                        <span className="text-blue font-bold">{'> '}</span>
                        {text}
                    </p>
                </div>
            </>
        )
    }
}

export default (props: Props) => {
    return (
        <div
            className="flex flex-col gap-1 rounded-2xl"
            data-aos="fade-right"

        >
            {getMsg(props)}
        </div>
    )
}
