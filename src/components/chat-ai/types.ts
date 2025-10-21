import type { UUID } from "crypto"
import type dayjs from "dayjs"

export interface Message {
    role: 'user' | 'bot' | 'system'
    time: dayjs.Dayjs,
    text: string,
    id?: UUID
}