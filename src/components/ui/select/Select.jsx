import { Select } from "antd"
import "./index.scss"

const AppSelect = ({ selectOptions, value, handleChangeOnSelect }) => {
  return (
    <Select
      value={value || "--Select position--"}
      size="large"
      style={{ width: "100%" }}
      onChange={handleChangeOnSelect}
      options={selectOptions}
    />
  )
}

export default AppSelect
