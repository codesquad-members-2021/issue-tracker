import {useRef} from 'react'; 

const MyUseCallback = (func, dependentArray) => {
  const originalDependentArray = useRef<any>();
  const originalFunc = useRef<any>();
  
  if (originalDependentArray.current === undefined) {
    originalDependentArray.current = dependentArray;
  }
  if (originalFunc.current === undefined) {
    originalFunc.current = func;
  }
  console.log("originalDependentArray", originalDependentArray.current)
  console.log("originalFunc", originalFunc.current)

  // dependentArray의 요소가 같은지 다른지
  const shallowCompareResult = dependentArray.every((dependentElement, idx) => {
    return dependentElement === originalDependentArray.current[idx];
  });
  console.log("shallowCompareResult", shallowCompareResult)
  
  if (shallowCompareResult) {
    // 유지한 함수를 던져준다.
    return originalFunc.current;
  } else {
    // 새로 들어온 함수가 만들어진 함수이므로, 새로 들어온 함수를 던져준다.
    return func;
  }
}

export default MyUseCallback
