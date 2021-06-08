import { theme } from 'style/theme';
import GlobalStyle from 'style/GlobalStyle';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
