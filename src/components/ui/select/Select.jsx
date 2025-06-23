import { Select, Form } from "antd"
import "./index.scss"

const AppSelect = ({ selectOptions, value, handleChangeOnSelect }) => {
  return (
    <Form.Item
      rules={[{ required: true, message: `Please select your position` }]}
      style={{ width: "100%" }}>
      <Select
        value={value || "--Select position--"}
        size="large"
        style={{ width: "100%" }}
        onChange={handleChangeOnSelect}
        options={selectOptions}
      />
    </Form.Item>
  )
}

export default AppSelect
