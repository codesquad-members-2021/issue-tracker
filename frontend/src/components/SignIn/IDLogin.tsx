import { useState, useRef } from 'react';
import styled from 'styled-components';

const IDLogin = () => {
  const [loginInfo, setLoginInfo] = useState<any>({ID:"", password: ""});

  const $Labels = useRef({
    ID: useRef<any>(),
    password: useRef<any>()
  });

  const handleChangeInput = ({ type, payload }) => {
    if(payload === "") {
      $Labels.current[type].current.style.display = "none";
    } else {
      $Labels.current[type].current.style.display = "block";
    }

    switch(type) {
      case "ID":
        setLoginInfo({ ...loginInfo, [type]: payload });
        return;
      case "password":
        setLoginInfo({ ...loginInfo, [type]: payload });
        return;
      default:
        alert("오류가 있습니다");
    }
  }

  return (
    <IDLoginLayout>
      <InputLayer>
        <InputLabel ref={$Labels.current["ID"]}> 아이디 </InputLabel>
        <IDInput
          id={"ID"} value={loginInfo?.ID}
          onChange={({target}) => { handleChangeInput({type: target.id, payload: target.value}) }} 
        />  
      </InputLayer>
      <InputLayer>
        <InputLabel ref={$Labels.current["password"]}> 비밀번호 </InputLabel>
        <PasswordInput 
          id={"password"} value={loginInfo?.password}
          onChange={({target}) => { handleChangeInput({type: target.id, payload: target.value}) }} 
        />
      </InputLayer>
      <InputLayer>
        <SubmitButton validator={loginInfo}> 아이디로 로그인 </SubmitButton>
      </InputLayer>
      
    </IDLoginLayout>
  )
}
const IDLoginLayout = styled.div`
  width: 100%;
`;

const SubmitButton = styled.button<{ validator: any }>`
  width: 100%;
  height: 64px;
  color: white;
  box-sizing: border-box;
  background-color: ${({validator}) => {
    console.log(validator.ID, validator.password)
    return validator.ID && validator.password ? "#007AFF": "#6AA7FD";
  }};
  padding: 0px 24px;  
  border: none;
  border-radius: 16px;
  cursor: pointer;
`;

const InputLabel = styled.label`
  color: grey;
  font-size: 1.2rem;
  display: none;
  position: absolute; 
  padding: 6px 24px;
`;

const Input = styled.input`
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  background: #EFF0F6;
  
  padding: 0px 24px;  
  border: none;
  border-radius: 16px;
`;

const InputLayer = styled.div`
  width: 100%;

  & + & {
    margin-top: 16px;
  }
`;

const IDInput = styled(Input).attrs({
  type: "text",
  placeholder: "아이디"
})`
`;
const PasswordInput = styled(Input).attrs({
  type: "password",
  placeholder: "비밀번호"
})`
`;

export default IDLogin
