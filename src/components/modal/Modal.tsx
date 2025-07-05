import AppForm from "../ui/form/Form"
import "./index.scss"
import cardStore from "../../store/cardStore"
import { observer } from "mobx-react-lite"

const Modal = () => {
  const { cardToEdit, closeModal, isModalActive, updateCard } = cardStore
  return (
    <div className={`modal ${isModalActive ? "active" : ""}`}>
      <div className="container">
        <div className="flex flex-end m-b-4">
          <button
            className="modal__btn modal__btn--close"
            onClick={closeModal}>
            Close
          </button>
        </div>
        <div className="row">
          <AppForm
            formType={"Save Edits"}
            onSubmit={updateCard}
            cardToEdit={cardToEdit}
          />
        </div>
      </div>
    </div>
  )
}

export default observer(Modal)
