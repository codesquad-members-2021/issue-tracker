import React, { useRef } from "react";
import store from "./recoilStore";

export const globalStateRoot = React.createContext<any | undefined>(undefined);

export const RecoilRoot = ({ children }: { children: React.ReactNode }) => {
  const globalState = useRef(store);
  return (
    <globalStateRoot.Provider value={globalState}>
      {children}
    </globalStateRoot.Provider>
  );
};
