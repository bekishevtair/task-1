import { Select, Form } from "antd"
import type { SelectProps } from "antd"
import "./index.scss"
import { useTranslation } from "react-i18next"

interface AppSelectProps {
  selectOptions: SelectProps["options"]
}

const AppSelect: React.FC<AppSelectProps> = ({ selectOptions }) => {
  const { t } = useTranslation()
  return (
    <Form.Item
      rules={[{ required: true, message: `Please select your position` }]}
      name={"position"}
      style={{ width: "100%" }}>
      <Select
        size="large"
        style={{ width: "100%" }}
        options={selectOptions}
        placeholder={t("section-1.form.selectPlaceholder")}
      />
    </Form.Item>
  )
}

export default AppSelect
