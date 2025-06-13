const Option = function ({ value, text, id }) {
  return (
    <option
      key={id}
      value={value}>
      {text}
    </option>
  )
}
export default Option
