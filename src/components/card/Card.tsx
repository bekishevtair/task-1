import "./index.scss"
import { CardProps } from "../../types/Card"
import { observer } from "mobx-react-lite"
import cardStore from "../../store/cardStore"
import { useTranslation } from "react-i18next"
import { CardInfoLabels } from "../../types/CardInfoLabels"

const Card: React.FC<CardProps> = ({ cardInfo }) => {
  const { t } = useTranslation()
  const card = t("section-2.card", {
    returnObjects: true
  }) as CardInfoLabels
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
        <h4>{card.name}: </h4>
        <p>{name}</p>
      </div>
      <div className={`card__row card__phone`}>
        <h4>{card.phone}: </h4>
        <p>{phone}</p>
      </div>
      <div className={`card__row card__email`}>
        <h4>{card.email}: </h4>
        <p>{email}</p>
      </div>
      <div className={`card__row card__position`}>
        <h4>{card.jobPosition}: </h4>
        <p>{position}</p>
      </div>
    </div>
  )
}
export default observer(Card)
