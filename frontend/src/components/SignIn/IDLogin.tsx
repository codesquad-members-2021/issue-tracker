import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const IDLogin = () => {
  const [loginInfo, setLoginInfo] = useState<any>({ID:"", password: ""});
  const $Labels = useRef({
    ID: React.createRef<any>(),
    password: React.createRef<any>()
  });
  
  const handleChangeInput = ({ type, payload }) => {
    if(payload === "") {
      $Labels.current[type].current.style.display = "none";
    } else {
      $Labels.current[type].current.style.display = "block";
    }

    switch(type) {
      case "ID":
        setLoginInfo({ [type]: payload });
        return;
      case "password":
        setLoginInfo({ [type]: payload });
        return;
      default:
        alert("오류가 있습니다");
    }
  }

  return (
    <IDLoginLayout>
      <InputLayer>
        <InputLabel data-target="ID" ref={$Labels.current["ID"]}> 아이디 </InputLabel>
        <IDInput 
          id={"ID"} value={loginInfo?.ID}
          onChange={({target}) => { handleChangeInput({type: target.id, payload: target.value}) }} 
        />  
      </InputLayer>
      <InputLayer>
        <InputLabel data-target="password" ref={$Labels.current["password"]}> 비밀번호 </InputLabel>
        <PasswordInput 
          id={"password"} value={loginInfo?.password}
          onChange={({target}) => { handleChangeInput({type: target.id, payload: target.value}) }} 
        />
      </InputLayer>
      
      
      <button>아이디로 로그인</button>
    </IDLoginLayout>
  )
}
const IDLoginLayout = styled.div`
  width: 100%;
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
