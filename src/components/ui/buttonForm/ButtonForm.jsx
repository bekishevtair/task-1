import "./index.scss"
import { Button, Form } from "antd"
import { useEffect, useState } from "react"

const ButtonForm = ({ form, btnType }) => {
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
      size="large"
      disabled={!submittable}
      className="btn"
      type="primary">
      {btnType}
    </Button>
  )
}
export default ButtonForm
