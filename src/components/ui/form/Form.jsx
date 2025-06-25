import AppInput from "../input/Input"
import AppSelect from "../select/Select"
import ButtonForm from "../buttonForm/ButtonForm"
import { inputs, selectOptions } from "../../../constants"
import { useEffect, useState } from "react"
import { Form } from "antd"

import "./index.scss"

const AppForm = ({ onSubmit }) => {
  const [form] = Form.useForm()

  const createCard = (cardInfo) => {
    onSubmit(cardInfo)
    form.resetFields()
  }

  return (
    <Form
      validateTrigger="onChange"
      name="validateOnly"
      onFinish={createCard}
      className="form"
      form={form}>
      {inputs.map(({ name, type, placeholder }) => {
        return (
          <AppInput
            key={name}
            name={name}
            type={type}
            placeholder={placeholder}
          />
        )
      })}

      <div className="form__row">
        <AppSelect selectOptions={selectOptions} />
      </div>
      <div className="form__row">
        <ButtonForm form={form} />
      </div>
    </Form>
  )
}

export default AppForm
