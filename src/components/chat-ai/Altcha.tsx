import { useEffect, useState } from "react";
import { useAltStore } from "./store";
import altcha from "../../api/altcha";
import './styles.css'

export default () => {
    const [message, setMessage] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        const store = useAltStore()
        const res = await altcha.verify(e.currentTarget)

        if (res.status) {
            store.setToken(res.access_token)
            setMessage(null)
        }
        else setMessage(res.message)

    }

    useEffect(() => {
        import('altcha')
    }, [])
    
    return (
        <form onSubmit={handleSubmit} className="text-blue !w-full flex justify-center !p-0" style={{ background: 'transparent' }}>
            <altcha-widget
                strings={`{
                    "label": "Получить 3 токена",
                    "footer": "Чтобы пообщаться с ассистентом",
                    "error": "Произошла какая-то ошибка",
                    "expired": "А робот может написать симфонию?"
                }`}
                style={{
                    "--altcha-color-base": "transparent",
                    "--altcha-color-text": "var(--color-white)",
                    "--altcha-color-border": "var(--color-blue)",
                    "--altcha-border-radius": "12px",
                    "--altcha-border-width": "3.2px",
                    "--altcha-max-width": "100%",
                    width: "100%"

                }}
                name="altcha"
                language="ru"
                challengeurl={altcha.getChallenge()}
            />
        </form>
    )
}