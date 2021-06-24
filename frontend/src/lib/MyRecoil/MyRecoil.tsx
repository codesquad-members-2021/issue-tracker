import React, {useState, useRef} from 'react';

// const RecoilDispatchContext = React.createContext();

export const RecoilRoot = ({ children }, ...rest) => {
  {/* <RecoilDispatchContext.Provider value={}> */}  
  {/* </RecoilDispatchContext.Provider> */}
  
  return (
    <React.Fragment {...rest}>
      {children}
    </React.Fragment>
    
    
    
  )
}

// 받은 걸 상태로 "전환"해주는 함수
interface IAtom<T>{
  key: string,
  default: T
}

// UT는 UserinputType의 약자입니다 ㅎㅎ
export function Atom<UT>(atomObject:IAtom<UT>) {
  // console.log(typeof atomObject === 'object' );
  const initialState = useRef(atomObject);
  return initialState;
}

export const useRecoilState = (atom) => {
  const [,setRerender] = useState<object>()
  const setState = (value) => {
    atom.current.default = value;
    // 리렌더링 로직
    setRerender({});
  }

  return [atom.current, setState];
}

export const useRecoilValue = (atomState) => {
  return atomState[0].default;
}

export const useSetRecoilState = (atom) => {
  const [,setRerender] = useState<object>()
  const setState = (value) => {
    atom.current.default = value;
    // 리렌더링 로직
    setRerender({});
  }
  return setState;
}

/* 아직 완성 몬함 */
export const selector = () => {}
