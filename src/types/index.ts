type InputType = "text" | "tel" | "email"

export interface InputConfig {
  key: string
  name: string
  type: InputType
  placeholder: string
}