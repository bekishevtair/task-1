import "./index.scss";
import AppInput from "../input/Input";
import AppSelect from "../select/Select";
import ButtonForm from "../buttonForm/ButtonForm";
import { CardInfoType } from "../../../types/Card";
import { inputs, selectOptions } from "../../../constants";
import { Form } from "antd";
import { useEffect, useState } from "react";
import { createCard } from "../../../api";

interface AppFormProps {
  onSubmit: (cardInfo: CardInfoType) => void;
  formType: string;
  cardToEdit: CardInfoType | null;
}

const AppForm: React.FC<AppFormProps> = ({
  onSubmit,
  formType,
  cardToEdit,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const createOrUpdateCard = (cardInfo: CardInfoType) => {
    setLoading(true);
    setTimeout(() => {
      const finalCard = {
        ...cardToEdit,
        ...cardInfo,
        id: !!cardToEdit?.id ? cardToEdit.id : Date.now().toString(),
      };
      onSubmit(finalCard);
      form.resetFields();
      setLoading(false);
      createCard({
        name: finalCard.name,
        phone: finalCard.phone,
        jobPosition: finalCard.position,
      });
    }, 1000);
  };
  useEffect(() => {
    if (cardToEdit) {
      form.setFieldsValue(cardToEdit);
    }
  }, [cardToEdit]);
  return (
    <div className="form__container">
      <Form onFinish={createOrUpdateCard} className="form" form={form}>
        {inputs.map(({ name, type, placeholder }) => {
          return (
            <AppInput
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
            />
          );
        })}

        <div className="form__row">
          <AppSelect selectOptions={selectOptions} />
        </div>
        <div className="form__row">
          <ButtonForm loading={loading} btnType={formType} form={form} />
        </div>
      </Form>
    </div>
  );
};

export default AppForm;
