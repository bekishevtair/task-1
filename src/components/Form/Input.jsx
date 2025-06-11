const Input = function (props) {
  // console.log(props)
  return (
    <input
      className="input"
      type={props.type}
      placeholder={props.placeholder}
    />
  )
}
export default Input
