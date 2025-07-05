import Header from "./components/header/Header"
import AppForm from "./components/ui/form/Form"
import CardListContainer from "./components/cardListContainer/CardListContainer"
import Loader from "./components/loader/Loader"
import Modal from "./components/modal/Modal"

import cardStore from "./store/cardStore"

import { ConfigProvider } from "antd"
import { useTranslation } from "react-i18next"
import { observer } from "mobx-react-lite"

import "./App.scss"
import "antd/dist/reset.css"

const App = () => {
  const { t } = useTranslation()
  const { createCard } = cardStore

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4991a1",
          borderRadius: 30,
          colorBgContainer: "#ffffffb7"
        }
      }}>
      <Loader />
      <Modal />
      <Header />
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

export default observer(App)
