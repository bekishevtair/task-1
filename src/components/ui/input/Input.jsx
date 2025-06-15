import "./index.scss"
const Input = ({ name, type, placeholder, value, handleChange }) => {
  return (
    <div className="form-row">
      <input
        className="input"
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}
export default Input
