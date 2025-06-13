import { useState } from "react";
import Input from "./input/Input.jsx";
import Select from "./Select";

const Form = function ({ inputsList }) {
  const [selectOptions, setOptions] = useState([
    {
      id: 1,
      value: "Admin",
      text: "Admin",
    },
    {
      id: 2,
      value: "Developer",
      text: "Developer",
    },
    {
      id: 3,
      value: "QA",
      text: "QA",
    },
    {
      id: 4,
      value: "DevOps",
      text: "DevOps",
    },
  ]);
  const [card, setCard] = useState({
    name: "",
    phone: "",
    select: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
    if (name === "name") {
      setCard({ ...card, name: value });
    } else if (name === "phone") {
      setCard({ ...card, phone: value });
    }
  };

  const createCard = () => {
    console.log(card, "card");
  };
  return (
    <div className="form">
      {inputsList.map((input) => {
        return (
          <Input
            key={input.id}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            onChange={handleChange}
          />
        );
      })}
      <Select selectOptions={selectOptions} onChange={handleChange} />

      <button onClick={createCard} className="btn">
        Add
      </button>
    </div>
  );
};

export default Form;
