import "./index.scss"
const Card = ({ cardInfo }) => {
  const { name, phone, position } = cardInfo
  return (
    <div className="card">
      <div className="card-row">
        <h4>Name: </h4>
        <p>{name}</p>
      </div>
      <div className="card-row">
        <h4>Phone: </h4>
        <p>{phone}</p>
      </div>
      <div className="card-row">
        <h4>Position: </h4>
        <p>{position}</p>
      </div>
    </div>
  )
}
export default Card
