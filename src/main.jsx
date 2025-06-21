import { createRoot } from "react-dom/client"
import "./App.scss"
import App from "./App.jsx"
import { ConfigProvider } from "antd"

createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#4991a1",
        borderRadius: 10,
        colorBgContainer: "#fff"
      }
    }}>
    <App />
  </ConfigProvider>
)
