import { CardInfoType } from "./Card"
interface AppFormProps {
  onSubmit: (cardInfo: CardInfoType) => void
  formType: string
  cardToEdit?: CardInfoType | null
}
export default AppFormProps
