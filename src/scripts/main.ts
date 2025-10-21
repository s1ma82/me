import aos from 'aos'
import 'aos/dist/aos.css'

aos.init({
    duration: 100, easing: "ease-out", once: true
})

const mailBtn = document.getElementById('mailBtn')
const toast = document.getElementById('toast')
if (mailBtn && toast) mailBtn.onclick = () => {
    navigator.clipboard.writeText('s1mahochukvas@vk.com')
    toast.removeAttribute('hidden')
    setTimeout(() => toast.setAttribute('hidden', 'true'), 2000)
}