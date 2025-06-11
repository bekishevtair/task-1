import { useState } from "react"
import Input from "./Input"
import Select from "./Select"
const Form = function ({ inputs }) {
  const [selectOptions, setOptions] = useState([
    {
      id: 1,
      value: "",
      text: "Option 1"
    },
    {
      id: 2,
      value: "",
      text: "Option 2"
    },
    {
      id: 3,
      value: "",
      text: "Option 3"
    }
  ])
  return (
    <form
      className="form"
      action="">
      {inputs.map((input) => {
        return (
          <Input
            type={input.type}
            placeholder={input.placeholder}
          />
        )
      })}
      <Select selectOptions={selectOptions} />

      <button className="btn">Add</button>
    </form>
  )
}

export default Form
