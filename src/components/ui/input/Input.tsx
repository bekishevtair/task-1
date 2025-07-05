import "./index.scss"
import { Input, Form } from "antd"
import { UserOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons"
import { REGEXES } from "../../../constants"
import AppInputProps from "../../../types/Input"

const AppInput: React.FC<AppInputProps> = ({ name, type, placeholder }) => {
  const { text, phone } = REGEXES
  const dataIcons = {
    text: <UserOutlined />,
    tel: <PhoneOutlined />
  }
  return (
    <Form.Item
      name={name}
      normalize={(value) => {
        if (type === "tel") return value.replace(phone, "").slice(0, 15)
        if (type === "text")
          return (
            value.replace(text, "").charAt(0).toUpperCase() +
            value.replace(text, "").slice(1)
          )
        return value
      }}
      rules={[
        {
          required: true,
          message: `Please fulfill your "${placeholder}"`
        }
      ]}>
      <Input
        size="large"
        type={type}
        placeholder={placeholder}
        prefix={dataIcons[type]}
      />
    </Form.Item>
  )
}
export default AppInput
