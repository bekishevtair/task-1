import { CardInfoType } from "../types/Card"

export const getCards = async () => {
  try {
    const response = await fetch("http://localhost:8080/task/all", {
      method: "GET"
    })
    const cards = await response.json()
    return cards
  } catch (e) {
    console.error("Error loading cards: ", e)
  }
}

export const createCard = async ({
  name,
  phone,
  jobPosition
}: CardInfoType) => {
  try {
    const response = await fetch("http://localhost:8080/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, phone, jobPosition })
    })
    return response
  } catch (e) {
    console.error("Error creating card: ", e)
  }
}

export const deleteCard = async (id: string) => {
  try {
    await fetch(`http://localhost:8080/task/${id}`, {
      method: "DELETE"
    })
  } catch (e) {
    console.log("Error deleting card: ", e)
  }
}

export const updateCard = async ({
  id,
  name,
  phone,
  jobPosition
}: CardInfoType) => {
  try {
    const response = await fetch(`http://localhost:8080/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, phone, jobPosition })
    })
    return response
  } catch (e) {
    console.error("Error during updating card: ", e)
  }
}
