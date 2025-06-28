import "./index.scss"
import AppInput from "../input/Input"
import AppSelect from "../select/Select"
import ButtonForm from "../buttonForm/ButtonForm"
import { inputs, selectOptions } from "../../../constants"
import { Form } from "antd"
import { useEffect, useState } from "react"

const AppForm = ({ onSubmit, formType, cardToEdit }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const createOrUpdateCard = (cardInfo) => {
    setLoading(true)
    setTimeout(() => {
      const finalCard = {
        ...cardToEdit,
        ...cardInfo,
        id: !!cardToEdit?.id ? cardToEdit.id : Date.now()
      }
      onSubmit(finalCard)
      form.resetFields()
      setLoading(false)
    }, 1000)
  }
  useEffect(() => {
    if (cardToEdit) {
      form.setFieldsValue(cardToEdit)
    }
  }, [cardToEdit])
  return (
    <Form
      onFinish={createOrUpdateCard}
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
        <ButtonForm
          loading={loading}
          btnType={formType}
          form={form}
        />
      </div>
    </Form>
  )
}

export default AppForm
