import { StylesProvider } from "@material-ui/core/styles";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import Router from "@/Routes/Router";
import GlobalStyles from "@/Styles/GlobalStyles";

const App = () => {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <RecoilRoot>
          <Suspense fallback={<div>Loading...</div>}>
            <GlobalStyles />
            <Router />
          </Suspense>
        </RecoilRoot>
      </StylesProvider>
    </div>
  );
};

export default App;
