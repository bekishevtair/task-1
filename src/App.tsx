import AppForm from "./components/ui/form/Form"
import Modal from "./components/modal/Modal"
import CardListContainer from "./components/cardListContainer/CardListContainer"
import cardStore from "./store/cardStore"
import "./App.scss"
import { ConfigProvider } from "antd"

import "antd/dist/reset.css"
import { useEffect, useState, useTransition } from "react"
import { getData } from "./api/index"
import { useTranslation } from "react-i18next"

const App = () => {
  const { t, i18n } = useTranslation()
  const { createCard } = cardStore
  const [listCards, setListCards] = useState([])
  const [lang, setLang] = useState("en")
  const [loaderStatus, setLoaderStatus] = useState("")
  const [switcherBtnStatus, setSwitcherBtnStatus] = useState("")
  const changeLang = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id
    setLoaderStatus("active")
    setTimeout(() => {
      i18n.changeLanguage(id)
      setLang(id)
      setLoaderStatus("")
    }, 1500)
  }
  useEffect(() => {
    const storedLang = localStorage.getItem("lang")
    if (storedLang) {
      document.documentElement.lang = storedLang
      i18n.changeLanguage(storedLang)
      setLang(storedLang)
    }
  }, [])
  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem("lang", lang.toString())
  }, [lang])

  useEffect(() => {
    getData()
      .then((res) => setListCards(res))
      .catch((e) => console.log(e))
  }, [])

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4991a1",
          borderRadius: 30,
          colorBgContainer: "#ffffffb7"
        }
      }}>
      <div className={`loader ${loaderStatus}`}>
        <img
          width={"140px"}
          src="./public/Loading.gif"
          alt=""
        />
      </div>
      <Modal />
      <header className="header">
        <div className="logo">{t("header.logo")}</div>
        <div className="lang__switcher">
          <button
            id="ru"
            className={`lang__btn lang__btn--switcher ${lang === "ru" ? "active" : ""}`}
            onClick={(e) => changeLang(e)}>
            RU
          </button>
          <button
            id="en"
            className={`lang__btn lang__btn--switcher ${lang === "en" ? "active" : ""}`}
            onClick={(e) => changeLang(e)}>
            EN
          </button>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="row flex flex-center">
            <h1 className="title title-h1">{t("section-1.title")}</h1>
          </div>
          <div className="row">
            <AppForm
              formType={t("section-1.form.button")}
              onSubmit={createCard}
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row flex flex-center">
            <h2 className="title title-h2">{t("section-2.title")}</h2>
          </div>
          <div className="row">
            <CardListContainer />
          </div>
        </div>
      </section>
    </ConfigProvider>
  )
}

export default App
