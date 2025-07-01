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
import dayjs from "dayjs"
import enUS from "antd/locale/en_US"
import ruRU from "antd/locale/ru_RU"

const App = () => {
  const { t, i18n } = useTranslation()
  const { createCard } = cardStore
  const [listCards, setListCards] = useState([])
  const locale = i18n.language === "ru" ? ruRU : enUS
  dayjs.locale(i18n.language)

  useEffect(() => {
    getData()
      .then((res) => setListCards(res))
      .catch((e) => console.log(e))
  }, [])
  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: {
          colorPrimary: "#4991a1",
          borderRadius: 30,
          colorBgContainer: "#ffffffb7"
        }
      }}>
      <Modal />
      <header className="header">
        <div className="logo">LOGO</div>
        <div className="lang__switcher">
          <button
            className="lang__btn lang__btn--switcher"
            onClick={() => i18n.changeLanguage("ru")}>
            RU
          </button>
          <button
            className="lang__btn lang__btn--switcher"
            onClick={() => i18n.changeLanguage("en")}>
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
              cardToEdit={null}
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
