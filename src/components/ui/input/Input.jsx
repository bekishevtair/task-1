import "./index.scss"
import { Input, Form } from "antd"
import { UserOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons"

const AppInput = ({ name, type, placeholder }) => {
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
        if (type === "tel") return value.replace(/[^\d+]/g, "").slice(0, 15)
        if (type === "text")
          return (
            value
              .replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, "")
              .charAt(0)
              .toUpperCase() +
            value.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, "").slice(1)
          )
        return value
      }}
      rules={[
        {
          required: true,
          message: `Please fulfill your "${placeholder}"`,
          type: type === "email" ? type : null
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
