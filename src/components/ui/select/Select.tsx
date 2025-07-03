import { Select, Form } from "antd"
import "./index.scss"
import { useTranslation } from "react-i18next"
import AppSelectProps from "../../../types/Select"

const AppSelect: React.FC<AppSelectProps> = ({ selectOptions }) => {
  const { t } = useTranslation()
  return (
    <Form.Item
      rules={[{ required: true, message: `Please select your position` }]}
      name={"jobPosition"}
      style={{ width: "100%" }}>
      <Select
        size="large"
        options={selectOptions}
        placeholder={t("section-1.form.selectPlaceholder")}
      />
    </Form.Item>
  )
}

export default AppSelect
