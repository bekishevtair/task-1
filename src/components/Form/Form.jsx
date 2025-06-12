import { useState } from "react"
import Input from "./Input"
import Select from "./Select"
const Form = function ({ inputs }) {
  const [selectOptions, setOptions] = useState([
    {
      id: 1,
      value: "Admin",
      text: "Admin"
    },
    {
      id: 2,
      value: "Developer",
      text: "Developer"
    },
    {
      id: 3,
      value: "QA",
      text: "QA"
    },
    {
      id: 4,
      value: "DevOps",
      text: "DevOps"
    }
  ])
  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
  }
  return (
    <form
      className="form"
      action="">
      {inputs.map((input) => {
        return (
          <Input
            key={input.id}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            onChange={handleChange}
          />
        )
      })}
      <Select
        selectOptions={selectOptions}
        onChange={handleChange}
      />

      <button className="btn">Add</button>
    </form>
  )
}

export default Form
