import "./index.scss"
import { Input, Form } from "antd"
import { UserOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons"

const AppInput = ({ name, type, placeholder, value, handleChange, status }) => {
  return (
    <Form.Item
      style={{
        width: "100%"
      }}
      rules={[{ required: true, message: `Please input your ${name}` }]}>
      <Input
        value={value}
        name={name}
        status={status}
        size="large"
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        prefix={
          type === "text" ? (
            <UserOutlined />
          ) : type === "tel" ? (
            <PhoneOutlined />
          ) : type === "email" ? (
            <MailOutlined />
          ) : (
            ""
          )
        }
      />
    </Form.Item>
  )
}
export default AppInput
