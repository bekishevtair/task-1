import type { SelectProps } from "antd"

const REGEXES = {
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/,
  phone: /[^\d+]/g,
  text: /[^a-zA-Zа-яА-ЯёЁ\s-]/g
}
type InputType = "text" | "tel" | "email"

interface InputConfig {
  key: string
  name: string
  type: InputType
  placeholder: string
}

const inputs: InputConfig[] = [
  {
    key: "name",
    name: "name",
    type: "text",
    placeholder: "Name"
  },
  {
    key: "phone",
    name: "phone",
    type: "tel",
    placeholder: "Phone"
  },
  {
    key: "email",
    name: "email",
    type: "email",
    placeholder: "Email"
  }
]
const selectOptions: SelectProps['options'] = [
  {
    label: "Admin",
    value: "Admin"
  },
  {
    label: "Developer",
    value: "Developer"
  },
  {
    label: "DevOps",
    value: "DevOps"
  },
  {
    label: "QA",
    value: "QA"
  }
]

export { inputs, selectOptions, REGEXES }
