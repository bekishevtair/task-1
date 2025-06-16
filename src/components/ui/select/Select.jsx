import Option from "./Option"
import "./index.scss"
const Select = ({ selectOptions, value, handleChange }) => {
  return (
    <select
      value={value}
      className="select"
      name="position"
      onChange={handleChange}>
      <option
        value="default"
        defaultValue
        hidden>
        --Select position--
      </option>
      {selectOptions.map(({ text, value }) => {
        return (
          <Option
            key={text}
            text={text}
            value={value}
          />
        )
      })}
    </select>
  )
}

export default Select
