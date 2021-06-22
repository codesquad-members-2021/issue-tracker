import styled, { keyframes } from 'styled-components';
import qs from 'qs';
import { RouteComponentProps } from 'react-router-dom';
import { useEffect } from 'react';

interface decodedInterface {
  exp?: number;
  github?: string;
  id?: number;
  isAdmin?: boolean;
  isHost?: boolean;
  iss?: string;
}

const LoginCallBackPage = ({ history }: RouteComponentProps) => {
  const query = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  const code:string = query.code as string;

  const getLoginToken = async () => {
    const data = await fetch(
      `http://ec2-52-79-56-138.ap-northeast-2.compute.amazonaws.com/api/user/login`,  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      }
    );
    const json = await data.json();
    console.log(json);
    localStorage.setItem('token', json.jwtToken);
    localStorage.setItem('id', json.userId.toString());
    localStorage.setItem('name', json.userName.toString());
    localStorage.setItem('email', json.email.toString());
    localStorage.setItem('profileImage', json.profileImage.toString());
    history.push('/issues');
  };

  useEffect(() => {
    getLoginToken();
  }, []);

  return (
    <StyledLogin>
      <div>
        <StyledSpinner></StyledSpinner>
        <p>로그인 중 입니다!! ✨</p>
      </div>
    </StyledLogin>
  );
};

const spin = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  left: 0;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #555;
`;

const StyledSpinner = styled.div`
  border: 0.75rem solid #ddd;
  border-top-color: #333;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 2rem;
  width: 5rem;
  height: 5rem;
  animation: ${spin} 1s linear infinite;
`;

export default LoginCallBackPage;