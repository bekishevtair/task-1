import "./index.scss"
import Form from "./components/ui/form/Form"
import Card from "./components/ui/card/Card"
import { inputsList } from "./constants"
import { useState } from "react"

function App() {
  const [cards, setCards] = useState([])
  const handleCardData = (cardData) => {
    setCards((prev) => {
      return [...prev, cardData]
    })
  }
  return (
    <div>
      <section className="section">
        <h1>Task 1</h1>
        <div className="container">
          <div className="row">
            <div className="wrapper">
              <Form
                inputsList={inputsList}
                handleCardData={handleCardData}
              />
            </div>
          </div>
          <div className="row">
            <div className="card-container">
              {cards.map((card) => {
                return (
                  <Card
                    name={card.name}
                    phone={card.phone}
                    position={card.select}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
