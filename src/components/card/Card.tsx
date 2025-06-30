import "./index.scss"
import { CardInfoType } from "../../types/Card"
import { observer } from "mobx-react-lite"
import cardStore from "../../store/cardStore"
interface CardProps {
  cardInfo: CardInfoType
}

const Card: React.FC<CardProps> = ({ cardInfo }) => {
  const { name, phone, email, position, id } = cardInfo
  const { removeCard, editCard } = cardStore

  return (
    <div
      className="card"
      id={id}>
      <div className={`card__row flex flex-end`}>
        <button
          className="card__btn card__btn--edit"
          onClick={() => editCard(cardInfo)}></button>
        <button
          className="card__btn card__btn--remove"
          onClick={() => removeCard(id)}></button>
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
export default observer(Card)
