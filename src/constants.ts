import type { SelectProps } from "antd"
import { InputConfig } from "./types"

const URL_CARDS = "http://localhost:8080/task"
const REGEXES = {
  phone: /[^\d+]/g,
  text: /[^a-zA-Zа-яА-ЯёЁ\s-]/g
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
  }
]
const selectOptions: SelectProps["options"] = [
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

export { inputs, selectOptions, REGEXES, URL_CARDS }
