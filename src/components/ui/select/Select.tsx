import { Select, Form } from "antd"
import type { SelectProps } from "antd"
import "./index.scss"

interface AppSelectProps {
  selectOptions: SelectProps['options']
}

const AppSelect: React.FC<AppSelectProps> = ({ selectOptions }) => {
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
