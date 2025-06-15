import { useState } from "react"
import Form from "./components/ui/form/Form"
import Card from "./components/ui/card/Card"
import "./App.scss"
function App() {
  const [cards, setCards] = useState([])
  const createCard = (cardInfo) => {
    setCards((prev) => {
      return [...prev, cardInfo]
    })
  }

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="form-container">
            <Form onSubmit={createCard} />
          </div>
        </div>
        <div className="row">
          <div className="card-container">
            {cards.map((card) => {
              return (
                <Card
                  key={card.name}
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
