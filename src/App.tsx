import { useState, useEffect  } from "react"
import AppForm from "./components/ui/form/Form"
import Modal from "./components/modal/Modal"
import Card from "./components/card/Card"
import { CardInfoType } from "./types/Card"
import "./App.scss"
import "antd/dist/reset.css"
function App() {
  const [cards, setCards] = useState<CardInfoType[]>([])

  const [modalStatus, setModalStatus] = useState<string | null>(null)

  const [cardToEdit, setCardToEdit] = useState<CardInfoType | null>(null)

  const createCard = (cardInfo: CardInfoType) => {
    setCards([...cards, cardInfo])
    
  }
  const editCard = (card: CardInfoType) => {
    setCardToEdit(card)
    setModalStatus("active")
  }
  const closeModal = () => {
    setModalStatus(null)
  }

  const removeCard = (id: number) => {
    setCards((prev) => prev.filter((card) => card.id !== id))
  }
  const saveNewCard = (updatedCard: CardInfoType) => {
    setCards((prev) =>
      prev.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    )
    setModalStatus(null)
    setCardToEdit(null)
  }

  useEffect(() => {
    const storedCards = localStorage.getItem("cards")
    if (storedCards) {
      setCards(JSON.parse(storedCards))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards))
  }, [cards])

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
                cardToEdit={null}
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