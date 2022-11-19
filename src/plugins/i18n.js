import { createI18n } from 'vue-i18n'
import thai from './lang/th.json'
import english from './lang/en.json'

const messages = {
    en: english,
    th: thai
}

const i18n = createI18n({
    locale: 'th',
    messages,
})

export default i18n