import "./index.scss"
const Card = ({ cardInfo, onRemove, onEdit }) => {
  const { name, phone, email, position, id } = cardInfo
  return (
    <div
      className="card"
      id={id}>
      <div className={`card__row flex flex-end`}>
        <button
          className="card__btn card__btn--edit"
          onClick={() => onEdit(cardInfo)}></button>
        <button
          className="card__btn card__btn--remove"
          onClick={() => onRemove(id)}></button>
      </div>
      <div className={`card__row card__name`}>
        <h4>Name: </h4>
        <p>{name}</p>
      </div>
      <div className={`card__row card__phone`}>
        <h4>Phone: </h4>
        <p>{phone}</p>
      </div>
      <div className={`card__row card__email`}>
        <h4>Email: </h4>
        <p>{email}</p>
      </div>
      <div className={`card__row card__position`}>
        <h4>Position: </h4>
        <p>{position}</p>
      </div>
    </div>
  )
}
export default Card
