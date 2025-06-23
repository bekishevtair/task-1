import "./index.scss";
import { Input, Form } from "antd";
import { UserOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { VALIDATE_DATA } from "../../../constants";

const AppInput = ({ name, type, placeholder, value, handleChange, status }) => {
  const dataIcons = {
    text: <UserOutlined />,
    tel: <PhoneOutlined />,
    email: <MailOutlined />
  }
  return (
    <Form.Item
      style={{
        width: "100%",
      }}
      name={name}
      rules={[
        {
          required: true,
          validator: (_, value) => {
            switch (type) {
              case "email":
                if (!VALIDATE_DATA.email.test(value)) {
                  return Promise.reject(new Error("Только буквы и цифры"));
                }
                return Promise.resolve();
              case "tel": 
                return Promise.resolve();
              case "text": 
                return Promise.resolve();
            }
          },
        },
      ]}
    >
      <Input
        value={value}
        name={name}
        status={status}
        size="large"
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        prefix={dataIcons[type]}
      />
    </Form.Item>
  );
};
export default AppInput;
