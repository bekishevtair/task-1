import { makeAutoObservable, runInAction } from "mobx"
import { CardInfoType } from "../types/Card"
import {
  getCards,
  deleteCard as apiDeleteCard,
  createCard as apiCreateCard,
  updateCard as apiUpdateCard
} from "../api"

class CardStore {
  cards: CardInfoType[] = []
  isModalActive: boolean = false
  cardToEdit: CardInfoType | null = null
  loading: string | null = ""

  constructor() {
    makeAutoObservable(this)
    this.loadCards()
  }

  loadCards = async () => {
    try {
      const cardsFromBackend = await getCards()
      runInAction(() => {
        this.cards = cardsFromBackend
      })
    } catch (e) {
      console.error("Error during loading cards: ", e)
    }
  }

  createCard = async (card: CardInfoType) => {
    try {
      await apiCreateCard({
        name: card.name,
        phone: card.phone,
        jobPosition: card.jobPosition
      })
      const cardsFromBackend = await getCards()
      runInAction(() => {
        this.cards = cardsFromBackend
      })
    } catch (e) {
      console.error("Failed creating card: ", e)
    }
  }
  editCard = (card: CardInfoType) => {
    this.cardToEdit = card
    this.isModalActive = true
  }

  updateCard = async (updatedCard: CardInfoType) => {
    await apiUpdateCard(updatedCard)
    const cardsFromBackend = await getCards()
    runInAction(() => {
      this.cards = cardsFromBackend
      this.cardToEdit = null
      this.isModalActive = false
    })
  }
  
  deleteCard = async (id: string) => {
    try {
      await apiDeleteCard(id)
      runInAction(() => {
        this.cards = this.cards.filter((card) => card.id !== id)
      })
    } catch (e) {}
  }
  closeModal = () => {
    this.isModalActive = false
    console.log("asdad")
    this.cardToEdit = null
  }
}

const cardStore = new CardStore()
export default cardStore
