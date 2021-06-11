import { useRef, useState, useEffect, useCallback } from 'react';
import MyUseCallback from './MyUseCallback';

const SignInButton = () => {
  const [testState, setTestState] = useState(0)
  const [testState2, setTestState2] = useState(0);
  const handleFunc = useRef<any>();
  
  const handleSignIn = MyUseCallback(() => {
    console.log("handleSignIn");
    setTestState(Math.random());
  }, [{}]);
  
  // const handleSignIn = useCallback(() => {
  //   console.log("handleSignIn");
  //   setTestState(Math.random());
  //   setTestState2({a: 0});
  // }, [testState2.a]);
  // [바뀌는 값] : 새로 만든다.
  // [안바뀌는 값] : 새로 만들지 않을듯 => 새로 만들지 않는다. 확인됨
  // [] : 새로 만들지 않는다.
  // [{}] : 새로 만든다
  // [바뀌는 객체의 안바뀌는 값 (testState2.a)] : 새로 만들지 않는다.

  useEffect(() => {
    console.log("is mounted", testState);
    
    // 할당이 되었나?
    console.log(handleSignIn)
    console.log(handleFunc.current);

    // 메모리 값 판단
    console.log(handleSignIn === handleFunc.current);
    handleFunc.current = handleSignIn;
  })

  return (
    <button onClick={handleSignIn}> 테스트 버튼 </button>
  )
}

export default SignInButton;