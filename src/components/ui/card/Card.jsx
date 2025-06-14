import "./index.scss"
const Card = ({ name, phone, position }) => {
  return (
    <div className="card">
      <div className="card-row">
        <h3>
          <b>Name:</b>
          <span>{name}</span>
        </h3>
      </div>
      <div className="card-row">
        <h3>
          <b>Phone:</b>
          <span>{phone}</span>
        </h3>
      </div>
      <div className="card-row">
        <h3>
          <b>Position:</b>
          <span>{position}</span>
        </h3>
      </div>
    </div>
  )
}
export default Card
