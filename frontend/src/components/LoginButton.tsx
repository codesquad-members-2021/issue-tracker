import {useState, useEffect} from 'react';

function LoginButton() {
  const [info, setInfo] = useState<any>();
  useEffect(() => {
    const fetchResult = async () => {
      const result = await fetch('http://ec2-13-124-158-166.ap-northeast-2.compute.amazonaws.com/api/users/github');
      // console.log( result.json());
      setInfo(await result.json());
      // const info = await result.json();
    }
    fetchResult();
  }, [])
  if (!info) return <></>;
  return (
    <>
      <a href={`https://github.com/login/oauth/authorize?scope=${info.scope}&client_id=${info.clientId}`}>
        Click here
      </a> 
    </>
    
    // <a href="http://ec2-13-124-158-166.ap-northeast-2.compute.amazonaws.com/api/users/github/callback" target={"_blank"}>
    //   github으로 로그인하기
    // </a>
    

  )
}

export default LoginButton
