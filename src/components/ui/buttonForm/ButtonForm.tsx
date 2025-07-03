import "./index.scss"
import { Button, Form } from "antd"
import { useEffect, useState } from "react"
import ButtonFormProps from "../../../types/ButtonForm"

const ButtonForm: React.FC<ButtonFormProps> = ({ form, btnType, loading }) => {
  const [submittable, setSubmittable] = useState(false)
  const values = Form.useWatch([], form)
  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false))
  }, [form, values])
  return (
    <Button
      htmlType="submit"
      loading={loading}
      size="large"
      disabled={!submittable}
      className="btn"
      type="primary">
      {btnType}
    </Button>
  )
}
export default ButtonForm
