import { useTranslation } from "react-i18next"
import { observer } from "mobx-react-lite"
import langStore from "../../store/langStore"

const Header = () => {
  const { lang, loadLang } = langStore
  const { t } = useTranslation()
  return (
    <header className="header">
      <div className="logo">{t("header.logo")}</div>
      <div className="lang__switcher">
        <button
          id="ru"
          className={`lang__btn lang__btn--switcher ${lang === "ru" ? "active" : ""}`}
          onClick={(e) => loadLang(e)}>
          RU
        </button>
        <button
          id="en"
          className={`lang__btn lang__btn--switcher ${lang === "en" ? "active" : ""}`}
          onClick={(e) => loadLang(e)}>
          EN
        </button>
      </div>
    </header>
  )
}

export default observer(Header)
