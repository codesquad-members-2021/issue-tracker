import { ThemeProvider } from "styled-components";
import { theme } from "style/theme";
import GlobalStyle from "style/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
