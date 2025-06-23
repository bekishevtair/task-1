import { useState } from "react"
import AppForm from "./components/ui/form/Form"
import Card from "./components/card/Card"
import "./App.scss"
import "antd/dist/reset.css"
function App() {
  const [cards, setCards] = useState([])
  const createCard = (cardInfo) => {
    setCards([...cards, cardInfo])
  }
  const removeCard = (e) => {
    console.log(e)

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
            {cards.map((card) => {
              return (
                <Card
                  onClick={removeCard}
                  id={`card-${Math.floor(Math.random() * 1000)}`}
                  key={`card-${Math.floor(Math.random() * 1000)}`}
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
