import {useState, useEffect} from 'react';
import styled from 'styled-components';

function GithubLogin() {
  const [info, setInfo] = useState<any>();
  
  useEffect(() => {
    const fetchResult = async () => {
      const result = await fetch('http://ec2-13-124-158-166.ap-northeast-2.compute.amazonaws.com/api/users/github');
      setInfo(await result.json());
    }
    fetchResult();
  }, []);
  
  if (!info) return <></>;
  
  return (
    
    <a href={`https://github.com/login/oauth/authorize?scope=${info.scope}&client_id=${info.clientId}`}>
      <GithubLoginButton>
        github으로 로그인하기
      </GithubLoginButton> 
    </a>
    
    // <a href="http://ec2-13-124-158-166.ap-northeast-2.compute.amazonaws.com/api/users/github/callback" target={"_blank"}>
    //   github으로 로그인하기
    // </a>
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