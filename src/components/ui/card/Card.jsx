import "./index.scss"
import Input from "../input/Input"
import Select from "../select/Select"
import { selectOptions } from "../../../constants"
const Card = ({ cardInfo }) => {
  return (
    <div className="card">
      <div className="card-row">
        <div className="btn-wrapper">
          <button></button>
          <button></button>
        </div>
      </div>
      <div className="card-row">
        <b>Name: </b>
        <p>{cardInfo.name}</p>
        <Input value={cardInfo.name} />
      </div>
      <div className="card-row">
        <b>Phone: </b>
        <p>{cardInfo.phone}</p>
        <Input value={cardInfo.phone} />
      </div>
      <div className="card-row">
        <b>Position: </b>
        <p>{cardInfo.position}</p>
        <Select
          value={cardInfo.position}
          selectOptions={selectOptions}
        />
      </div>
    </div>
  )
}
export default Card
