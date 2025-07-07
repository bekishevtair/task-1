import "./index.scss"
import AppInput from "../input/Input"
import AppSelect from "../select/Select"
import ButtonForm from "../buttonForm/ButtonForm"
import { CardInfoType } from "../../../types/Card"
import { selectOptions } from "../../../constants"
import { Form } from "antd"
import { useEffect, useState } from "react"

import { useTranslation } from "react-i18next"
import { InputConfig } from "../../../types"
import AppFormProps from "../../../types/Form"

const AppForm: React.FC<AppFormProps> = ({
  onSubmit,
  formType,
  cardToEdit = null
}) => {
  const { t } = useTranslation()
  const inputs = t("section-1.form.inputs", {
    returnObjects: true
  }) as InputConfig[]
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)

  const createOrUpdateCard = (cardInfo: CardInfoType) => {
    setLoading(true)
    setTimeout(() => {
      const finalCard = {
        ...cardToEdit,
        ...cardInfo
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
    <div className="form__container">
      <Form
        onFinish={createOrUpdateCard}
        className="form"
        form={form}
        autoComplete={"true"}>
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
    </div>
  )
}

export default AppForm
