import { observer } from "mobx-react-lite"
import langStore from "../../store/langStore"

const Loader = () => {
  const { loaderStatus } = langStore
  return (
    <div className={`loader ${loaderStatus}`}>
      <img
        loading="lazy"
        width={"140px"}
        src="./public/Loading.gif"
        alt="Loading..."
      />
    </div>
  )
}
export default observer(Loader)
