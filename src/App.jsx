import { useState } from "react"
import AppForm from "./components/ui/form/Form"
import Card from "./components/card/Card"
import "./App.scss"
import "antd/dist/reset.css" // новая версия
import { Button } from "antd"
function App() {
  const [cards, setCards] = useState([])
  const createCard = (cardInfo) => {
    setCards([...cards, cardInfo])
  }

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="form-container">
            <AppForm onSubmit={createCard} />
          </div>
        </div>
        <div className="row">
          <div className="card-container">
            {cards.map((card, index) => {
              return (
                <Card
                  key={`card-${index}`}
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
