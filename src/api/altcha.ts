import { http } from "./http"

interface ServerOk {
    status: true,
    access_token: string
}

interface ServerDeprecate {
    status: false,
    message: string
}

type AltchaResponse = ServerOk | ServerDeprecate

export default class {
    static readonly #verifyUrl = "/altcha/auth"
    static readonly #challengeURL = import.meta.env.PUBLIC_API_URL + "/altcha/challenge"


    static getChallenge() {
        return this.#challengeURL
    }

    static async verify(userData: any): Promise<AltchaResponse> {

        const formData = new FormData(userData)
        const altchaValue = formData.get("altcha")

        if (!altchaValue) {
            return { status: false, message: "Отсутствует результат проверки" }
        }

        try {
            const { data: response } = await http.post<AltchaResponse>(this.#verifyUrl, { altcha: altchaValue })
            return response
        } catch (err: any) {
            console.error(err.message)
            return { status: false, message: "Произошла ошибка верификации" }
        }
    }

}