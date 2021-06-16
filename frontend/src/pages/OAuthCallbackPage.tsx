import { useEffect } from 'react';

const OAuthCallbackPage = () => {
  useEffect(() => {
    const fetchCode = async () => {
      const result = await fetch('http://ec2-13-124-158-166.ap-northeast-2.compute.amazonaws.com/api/users/github/callback?code='+window.location.search.split("?code=")[1]);
      
      window.history.replaceState('', '', '/signin');
      
      // userinfo는 테스트용입니다.
      const checkedUserInfo = await result.json();
      console.log(checkedUserInfo);
      
      localStorage.setItem("issue-tracker-user", JSON.stringify(checkedUserInfo));
      alert(`안녕하세요 ${checkedUserInfo.name}`);
      window.location.href = '/issues';
    }
    
    fetchCode();
  }, [])

  return (
    <h1>로그인 중입니다</h1>
  );
  
}

export default OAuthCallbackPage
