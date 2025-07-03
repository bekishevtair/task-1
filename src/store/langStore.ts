import { makeAutoObservable, runInAction } from "mobx"
import i18n from "../i18n"

class LangStore {
  lang = "en"
  loaderStatus = ""
  constructor() {
    makeAutoObservable(this)
    const storedLang = localStorage.getItem("lang")
    if (storedLang) {
      this.changeLang(storedLang)
    }
  }

  loadLang = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id
    this.loaderStatus = "active"
    setTimeout(() => {
      runInAction(() => {
        this.changeLang(id)
        this.loaderStatus = ""
      })
    }, 1000)
  }

  changeLang = (lang: string) => {
    i18n.changeLanguage(lang)
    this.lang = lang
    document.documentElement.lang = lang
    localStorage.setItem("lang", lang.toString())
  }
}
const langStore = new LangStore()
export default langStore
