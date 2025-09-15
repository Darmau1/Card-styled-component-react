
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import {Theme} from "./styles/Theme.styled.tsx"
import { GlobalStyles } from './styles/GlobalStyles.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={Theme}>
    <App />
    <GlobalStyles/>
  </ThemeProvider>,
)
