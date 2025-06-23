import "./index.scss"
const Card = ({ cardInfo, onClick, id }) => {
  const { name, phone, email, position } = cardInfo
  return (
    <div
      className="card"
      id={id}>
      <div className={`card-row`}>
        <button onClick={onClick}>Remove</button>
      </div>
      <div className={`card-row card-name`}>
        <h4>Name: </h4>
        <p>{name}</p>
      </div>
      <div className={`card-row card-phone`}>
        <h4>Phone: </h4>
        <p>{phone}</p>
      </div>
      <div className={`card-row card-email`}>
        <h4>Email: </h4>
        <p>{email}</p>
      </div>
      <div className={`card-row card-position`}>
        <h4>Position: </h4>
        <p>{position}</p>
      </div>
    </div>
  )
}
export default Card
