import { create } from 'zustand'
import type { UUID } from 'crypto'
import type { Message } from './types'

interface AltStore {
    altStatus: boolean
    setStatus: (_:boolean) => void
    access_token: string | null,
    setToken: (_: string | null) => void 
}
export const useAltStore = create<AltStore>((set, get) => ({
    access_token: null,
    altStatus: false,
    setToken: _ => set(() => ({ access_token: _ })),
    setStatus: _ => set(() => ({altStatus: _}))
}))



interface ChatStore {
    messages: Message[],
    addMsg: (_: Message) => void
    removeMsg: (_: UUID) => void
}

export const useChatStore = create<ChatStore>((set, get) => ({
    messages: [],
    addMsg: _ => {
        const m = get().messages

        _.id = crypto.randomUUID()
        

        set(() => ({messages: [...m, _]}))
    },

    removeMsg: _ => {
        const m = get().messages.filter(({ id }) => id === _)
        set(() => ({messages: m}))
    }
}))