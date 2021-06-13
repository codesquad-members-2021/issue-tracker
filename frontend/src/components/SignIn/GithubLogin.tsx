import {useState, useEffect} from 'react';
import styled from 'styled-components';

function GithubLogin() {
  const [info, setInfo] = useState<any>();
  const [userInfo, setUserInfo] = useState<any>();

  useEffect(() => {
    if (window.location.search.split("?code=")[1]) {
      const fetchCode = async () => {
        const result = await fetch('http://ec2-13-124-158-166.ap-northeast-2.compute.amazonaws.com/api/users/github/callback?code='+window.location.search.split("?code=")[1]);
        
        // userinfo는 테스트용입니다.
        const checkedUserInfo = await result.json();
        setUserInfo(checkedUserInfo);
        console.log(checkedUserInfo)
        alert(`안녕하세요 ${checkedUserInfo.name}`)
      }
      fetchCode();
    } else {
      const fetchResult = async () => {
        const result = await fetch('http://ec2-13-124-158-166.ap-northeast-2.compute.amazonaws.com/api/users/github');
        setInfo(await result.json());
      }
      fetchResult();
    }
  }, []);
  
  if (!info) return <></>;
  
  return (
    <a href={`https://github.com/login/oauth/authorize?scope=${info.scope}&client_id=${info.clientId}`}>
      <GithubLoginButton>
        github으로 로그인하기
      </GithubLoginButton> 
    </a>
  )
}

const GithubLoginButton = styled.button`
  width: 340px;
  height: 64px;
  border: none;
  border-radius: 20px;
  
  color: white;
  background-color: black;

  cursor: pointer;
`

export default GithubLogin;