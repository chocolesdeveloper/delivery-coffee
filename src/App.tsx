import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { RouterProvider } from "react-router-dom"
import { Router } from "./Routes"
import { CartContextProvider } from "./contexts/CartContext"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <RouterProvider router={Router} />
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
