import AppInput from "../input/Input"
import AppSelect from "../select/Select"
import ButtonForm from "../buttonForm/ButtonForm"
import { inputs, selectOptions } from "../../../constants"
import { useEffect, useState } from "react"
import { Form } from "antd"

import "./index.scss"

const AppForm = ({ onSubmit }) => {
  const initialValues = { name: "", phone: "", position: "" }
  const [cardInfo, setCardInfo] = useState(initialValues)
  const [isBtnDisabled, setBtnDisabled] = useState(true)
  const [inputStatus, setInputStatus] = useState({
    name: "",
    position: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const filteredValue = {
      phone: value.replace(/[^+\d]/g, ""),
      name: value.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, "")
    }

    setCardInfo({ ...cardInfo, [name]: filteredValue[name] })
    setInputStatus({
      ...inputStatus,
      [name]: filteredValue[name] ? "" : "error"
    })
  }
  const handleChangeOnSelect = (value) => {
    setCardInfo({ ...cardInfo, position: value })
  }
  const createCard = () => {
    onSubmit(cardInfo)
    setCardInfo(initialValues)
    setBtnDisabled(true)
  }

  useEffect(() => {
    setBtnDisabled(!Object.values(cardInfo).every(Boolean))
  }, [cardInfo])

  return (
    <Form className="form">
      {inputs.map(({ name, type, placeholder }) => {
        return (
          <AppInput
            status={inputStatus[name]}
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
        <AppSelect
          value={cardInfo.position}
          selectOptions={selectOptions}
          handleChangeOnSelect={handleChangeOnSelect}
        />
      </div>
      <div className="form-row">
        <ButtonForm
          isBtnDisabled={isBtnDisabled}
          onClick={createCard}
        />
      </div>
    </Form>
  )
}

export default AppForm
