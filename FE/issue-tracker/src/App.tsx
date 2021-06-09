import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import Router from "@/Routes/Router";
import GlobalStyles from "@/Styles/GlobalStyles";

const App = () => {
  return (
    <div className="App">
      <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
          <GlobalStyles />
          <Router />
        </Suspense>
      </RecoilRoot>
    </div>
  );
};

export default App;
