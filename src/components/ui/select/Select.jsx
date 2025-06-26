import { Select, Form } from "antd"
import "./index.scss"

const AppSelect = ({ selectOptions }) => {
  return (
    <Form.Item
      rules={[{ required: true, message: `Please select your position` }]}
      name={"position"}
      style={{ width: "100%" }}>
      <Select
        size="large"
        style={{ width: "100%" }}
        options={selectOptions}
        placeholder="Selected position"
      />
    </Form.Item>
  )
}

export default AppSelect
