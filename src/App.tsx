import AppForm from "./components/ui/form/Form";
import Modal from "./components/modal/Modal";
import CardListContainer from "./components/cardListContainer/CardListContainer";
import cardStore from "./store/cardStore";
import "./App.scss";
import "antd/dist/reset.css";
import { useEffect, useState } from "react";
import { getData } from "./api/index";

const App = () => {
  const { createCard } = cardStore;
  const [listCards, setListCards] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => setListCards(res))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <Modal />
      <section className="section">
        <div className="container">
          <div className="row">
            <AppForm
              formType={"Add Card"}
              onSubmit={createCard}
              cardToEdit={null}
            />
          </div>
          <div className="row">
            <CardListContainer />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
