
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { LayoutWrapper } from "./components/LayoutWrapper/styles"
import { Sidebar } from "./components/Sidebar"
import { MainContainer } from "./components/MainContentContainer"
import { ScrollProgressBar } from "./components/ScrollProgressBar"


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LayoutWrapper>
        <Sidebar/>
        <MainContainer/>
      </LayoutWrapper>
      <ScrollProgressBar/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}
