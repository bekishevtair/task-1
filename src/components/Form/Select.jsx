import Option from "./Option"
const Select = function ({ selectOptions }) {
  console.log(selectOptions)
  return (
    <select
      className="input"
      name=""
      id="">
      <option
        selected
        disabled
        value="">
        -- Select position --
      </option>
      {selectOptions.map((option) => {
        console.log(option)
        return (
          <Option
            value={option.value}
            text={option.text}
          />
        )
      })}
    </select>
  )
}
export default Select
