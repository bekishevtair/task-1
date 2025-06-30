import { makeAutoObservable } from "mobx"
import { CardInfoType } from "../types/Card"

class CardStore {
  cards: CardInfoType[] = []
  modalStatus: string | null = null
  cardToEdit: CardInfoType | null = null
  constructor() {
    makeAutoObservable(this)
    const storedCards = localStorage.getItem("cards")
    if (storedCards) {
      this.cards = JSON.parse(storedCards)
    }
  }

  createCard = (card: CardInfoType) => {
    this.cards.push(card)
    this.saveToStorage()
  }
  editCard = (card: CardInfoType) => {
    this.cardToEdit = card
    this.modalStatus = "active"
  }
  updateCard = (updateCard: CardInfoType) => {
    this.cards = this.cards.map((card) =>
      card.id === updateCard.id ? updateCard : card
    )
    this.modalStatus = null
    this.saveToStorage()
  }
  removeCard = (id: string) => {
    this.cards = this.cards.filter((card) => card.id !== id)
    this.saveToStorage()
  }
  closeModal = () => {
    this.modalStatus = null
    this.cardToEdit = null
  }
  saveToStorage() {
    localStorage.setItem("cards", JSON.stringify(this.cards))
  }
}

const cardStore = new CardStore()
export default cardStore
