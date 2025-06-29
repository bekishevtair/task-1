import "./index.scss"
import { Input, Form } from "antd"
import { UserOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons"
import { REGEXES } from "../../../constants"

type  InputType= "text" | "tel" | "email"
interface AppInputProps {
  name:string
  type: InputType
  placeholder:string
}

const AppInput: React.FC<AppInputProps> = ({ name, type, placeholder }) => {
  const { text, phone } = REGEXES
  const dataIcons = {
    text: <UserOutlined />,
    tel: <PhoneOutlined />,
    email: <MailOutlined />
  }
  return (
    <Form.Item
      style={{
        width: "100%"
      }}
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
          message: `Please fulfill your "${placeholder}"`,
          type: type === "email" ? type : undefined
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
