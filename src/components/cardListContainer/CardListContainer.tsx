import Card from "../card/Card"
import { observer } from "mobx-react-lite"
import cardStore from "../../store/cardStore"
import "./index.scss"

const CardListContainer = () => {
  const { cards } = cardStore

  return (
    <div className="card__container">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            cardInfo={card}
          />
        )
      })}
    </div>
  )
}
export default observer(CardListContainer)
