import { useState } from "react"
import Form from "./components/ui/form/Form"
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
      <Button type="primary"> Hellloooooooo</Button>
      <div className="container">
        <div className="row">
          <div className="form-container">
            <Form onSubmit={createCard} />
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
