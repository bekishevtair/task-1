import { useState } from "react"
import AppForm from "./components/ui/form/Form"
import Card from "./components/card/Card"
import "./App.scss"
import "antd/dist/reset.css"
function App() {
  const [cards, setCards] = useState([])
  const createCard = (cardInfo) => {
    const newCard = {
      ...cardInfo,
      id: Date.now()
    }
    setCards([...cards, newCard])
  }
  const removeCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id))
  }
  console.log(Date.now())

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="form__container">
            <AppForm onSubmit={createCard} />
          </div>
        </div>
        <div className="row">
          <div className="card__container">
            {cards.map((card) => {
              return (
                <Card
                  key={card.id}
                  onClick={removeCard}
                  cardInfo={card}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
