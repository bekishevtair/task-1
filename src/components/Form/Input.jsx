const Input = function (props) {
  return (
    <input
      key={props.id}
      className="input"
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}
export default Input
