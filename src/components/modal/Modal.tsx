import AppForm from "../ui/form/Form"
import "./index.scss"

const Modal = ({ modalStatus, closeModal, cardToEdit, saveNewCard }) => {
  return (
    <div className={`modal ${modalStatus}`}>
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
            cardToEdit={cardToEdit}
            formType={"Save Edits"}
            onSubmit={saveNewCard}
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
