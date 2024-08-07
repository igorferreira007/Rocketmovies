import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/global"
import theme from "./styles/theme"

import { Home } from "./pages/Home"
import { New } from "./pages/New"
import { Profile } from "./pages/Profile"
import { Details } from "./pages/Details"
import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"
import { Routes } from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
