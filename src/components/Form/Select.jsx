import Option from "./Option"
const Select = function ({ selectOptions }) {
  return (
    <select
      onChange={selectOptions.onChange}
      className="input"
      name=""
      id="">
      <option
        selected
        disabled
        value="default">
        -- Select position --
      </option>
      {selectOptions.map((option) => {
        return (
          <Option
            key={option.id}
            value={option.value}
            text={option.text}
          />
        )
      })}
    </select>
  )
}
export default Select
