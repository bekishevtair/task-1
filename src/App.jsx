import "./index.scss";
import Form from "./components/ui/Form";
import { inputsList } from "./constats";

function App() {
  return (
    <div>
      <section className="section">
        <h1>Task 1</h1>
        <div className="container">
          <div className="row">
            <div className="wrapper">
              <Form inputsList={inputsList} />
            </div>
          </div>
          <div className="row">
            <div className="wrapper"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
