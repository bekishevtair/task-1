import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { CardInfoType } from "../types/Card"
import {
  getCards,
  createCard as apiCreateCard,
  updateCard as apiUpdateCard,
  deleteCard as apiDeleteCard
} from "../api"

// Async Thunks
export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  const cards = await getCards()
  return cards
})

export const addCard = createAsyncThunk(
  "cards/addCard",
  async (card: CardInfoType) => {
    await apiCreateCard(card)
    const cards = await getCards()
    return cards
  }
)

export const editCardThunk = createAsyncThunk(
  "cards/editCard",
  async (card: CardInfoType) => {
    await apiUpdateCard(card)
    const cards = await getCards()
    return cards
  }
)

export const deleteCardThunk = createAsyncThunk(
  "cards/deleteCard",
  async (id: string) => {
    await apiDeleteCard(id)
    return id
  }
)

interface CardsState {
  cards: CardInfoType[]
  loading: boolean
  modalOpen: boolean
  cardToEdit: CardInfoType | null
}

const initialState: CardsState = {
  cards: [],
  loading: false,
  modalOpen: false,
  cardToEdit: null
}

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<CardInfoType | null>) {
      state.cardToEdit = action.payload
      state.modalOpen = true
    },
    closeModal(state) {
      state.modalOpen = false
      state.cardToEdit = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload
        state.loading = false
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.cards = action.payload
      })
      .addCase(editCardThunk.fulfilled, (state, action) => {
        state.cards = action.payload
        state.modalOpen = false
        state.cardToEdit = null
      })
      .addCase(deleteCardThunk.fulfilled, (state, action) => {
        state.cards = state.cards.filter((card) => card.id !== action.payload)
      })
  }
})

export const { openModal, closeModal } = cardsSlice.actions
export default cardsSlice.reducer
