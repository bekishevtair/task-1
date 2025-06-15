import Input from "../input/Input"
import Select from "../select/Select"
import ButtonForm from "../buttonForm/ButtonForm"
import { inputs, selectOptions } from "../../../constants"
import { useState } from "react"
import "./index.scss"

const Form = ({ onSubmit }) => {
  const initialvalues = { name: "", phone: "", position: "" }
  const [cardInfo, setCardInfo] = useState(initialvalues)

  const handleChange = (e) => {
    const { name, value } = e.target
    setCardInfo((prev) => {
      return { ...prev, [name]: value }
    })
  }
  const createCard = () => {
    onSubmit(cardInfo)
    setCardInfo(initialvalues)
  }

  return (
    <div className="form">
      {inputs.map(({ name, type, placeholder }) => {
        return (
          <Input
            key={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={cardInfo[name]}
            handleChange={handleChange}
          />
        )
      })}

      <div className="form-row">
        <Select
          value={cardInfo.position}
          selectOptions={selectOptions}
          handleChange={handleChange}
        />
      </div>
      <div className="form-row">
        <ButtonForm onClick={createCard} />
      </div>
    </div>
  )
}

export default Form
