import { useState } from "react"
import AppForm from "./components/ui/form/Form"
import Modal from "./components/modal/Modal"
import Card from "./components/card/Card"
import "./App.scss"
import "antd/dist/reset.css"
function App() {
  const [cards, setCards] = useState([])
  const [modalStatus, setModalStatus] = useState("")
  const [cardToEdit, setCardToEdit] = useState(null)
  const createCard = (cardInfo) => {
    setCards([...cards, cardInfo])
  }
  const editCard = (card) => {
    console.log(card.id)
    setCardToEdit(card)
    setModalStatus("active")
  }
  const closeModal = () => {
    setModalStatus("")
  }

  const removeCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id))
  }
  const saveNewCard = (updatedCard) => {
    setCards((prev) =>
      prev.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    )
    setModalStatus("")
    setCardToEdit(null)
  }

  return (
    <>
      <Modal
        cardToEdit={cardToEdit}
        closeModal={closeModal}
        modalStatus={modalStatus}
        saveNewCard={saveNewCard}
      />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="form__container">
              <AppForm
                formType={"Add Card"}
                onSubmit={createCard}
              />
            </div>
          </div>
          <div className="row">
            <div className="card__container">
              {cards.map((card) => {
                return (
                  <Card
                    key={card.id}
                    onRemove={removeCard}
                    onEdit={() => editCard(card)}
                    cardInfo={card}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
