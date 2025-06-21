import "./index.scss"
import { Button } from "antd"

const ButtonForm = ({ onClick, isBtnDisabled }) => {
  return (
    <Button
      size="large"
      disabled={isBtnDisabled}
      className="btn"
      onClick={onClick}
      type="primary">
      Add
    </Button>
  )
}
export default ButtonForm
