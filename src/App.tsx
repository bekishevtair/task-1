import AppForm from "./components/ui/form/Form"
import Modal from "./components/modal/Modal"
import CardListContainer from "./components/cardListContainer/CardListContainer"
import cardStore from "./store/cardStore"
import { observer } from "mobx-react-lite"
import "./App.scss"
import "antd/dist/reset.css"

const App = () => {
  const { createCard } = cardStore

  return (
    <>
      <Modal />
      <section className="section">
        <div className="container">
          <div className="row">
            <AppForm
              formType={"Add Card"}
              onSubmit={createCard}
              cardToEdit={null}
            />
          </div>
          <div className="row">
            <CardListContainer />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
