import AppInput from "../input/Input"
import AppSelect from "../select/Select"
import ButtonForm from "../buttonForm/ButtonForm"
import { inputs, selectOptions } from "../../../constants"
import { useEffect, useState } from "react"
import { Form } from "antd"

import "./index.scss"

const AppForm = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const initialValues = { name: "", phone: "", email: "", position: "" }
  const [cardInfo, setCardInfo] = useState(initialValues)
  const [isBtnDisabled, setBtnDisabled] = useState(true)
  const [inputStatus, setInputStatus] = useState({
    name: "",
    phone: "",
    email: "",
    position: ""
  })

  const handleChange = async (e) => {
    try {
      await form.validateFields()
    } catch (e) {
      console.log(e)
    }
    // console.log(await form.validateFields())
    const { name, value } = e.target
    const filteredValue = {
      phone: value.replace(/[^+\d]/g, ""),
      name:
        value
          .replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, "")
          .charAt(0)
          .toUpperCase() + value.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, "").slice(1)
    }
    if (name === "email") {
      setCardInfo({ ...cardInfo, [name]: value })
      setInputStatus({
        ...inputStatus,
        [name]:
          value &&
          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
            ? ""
            : "error"
      })
      return
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
    console.log(form, 'form')
    console.log(form.getFieldsValue())

    onSubmit(form.getFieldsValue());
    form.resetFields();
    setBtnDisabled(true);
    // setCardInfo(initialValues)
  }

  useEffect(() => {
    setBtnDisabled(
      !Object.values(cardInfo).every(Boolean) ||
        Object.values(inputStatus).some(Boolean)
    )
  }, [cardInfo])

  return (
    <Form className="form" form={form}>
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
