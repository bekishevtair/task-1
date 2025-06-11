import { useState } from "react"
import "./index.scss"
import Form from "./components/Form/Form"

function App() {
  const [inputs, setInput] = useState([
    {
      id: 1,
      type: "text",
      placeholder: "Name"
    },
    {
      id: 2,
      type: "tel",
      placeholder: "Phone Number"
    }
  ])
  return (
    <div>
      <section className="section">
        <h1>Task 1</h1>
        <div className="container">
          <div className="row">
            <div className="wrapper">
              <Form inputs={inputs} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
