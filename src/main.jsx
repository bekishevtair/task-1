import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./App.scss"
import App from "./App.jsx"
import { ConfigProvider } from "antd"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#b3b42b",
          borderRadius: 20,

          // Alias Token
          colorBgContainer: "#f6ffed"
        }
      }}>
      <App />
    </ConfigProvider>
  </StrictMode>
)
