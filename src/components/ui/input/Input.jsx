import "./index.scss"
import { Input } from "antd"
import { UserOutlined, PhoneOutlined } from "@ant-design/icons"

const AppInput = ({ name, type, placeholder, value, handleChange }) => {
  return (
    <div className="form-row">
      <Input
        size="large"
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        prefix={type === "text" ? <UserOutlined /> : <PhoneOutlined />}
      />
      {/* <input
        className="input"
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      /> */}
    </div>
  )
}
export default AppInput
