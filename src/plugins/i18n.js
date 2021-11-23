import Vue from "vue"
import VueI18n from "vue-i18n"
import ru from '../localization/ru.localization.json'
import en from '../localization/en.localization.json'

Vue.use(VueI18n)

const messages = {
  ru,
  en
}

export default new VueI18n({
  locale: 'ru',
  messages
})