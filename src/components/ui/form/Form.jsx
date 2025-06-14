import { useState } from "react"
import Select from "../select/Select"
import Input from "../input/Input"
import { selectOptions } from "../../../constants"
import "./index.scss"

const Form = function ({ inputsList, handleCardData }) {
  const [card, setCard] = useState({
    name: "",
    phone: "",
    select: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setCard((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const getCardData = () => {
    handleCardData(card)
  }
  return (
    <div className="form">
      {inputsList.map((input) => {
        return (
          <Input
            key={input.id}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            onChange={handleChange}
          />
        )
      })}
      <Select
        selectOptions={selectOptions}
        onChange={handleChange}
      />

      <button
        onClick={getCardData}
        className="btn">
        Add
      </button>
    </div>
  )
}

export default Form
