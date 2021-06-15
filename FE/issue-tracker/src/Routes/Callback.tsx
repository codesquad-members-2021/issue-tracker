import { useEffect } from "react";

type callbackProps = {
  history: any;
  location: any;
};

const Callback = ({ history, location }: callbackProps) => {
  useEffect(() => {
    const getToken = async () => {
      let params = new URLSearchParams(location.search);
      let code = params.get("code"); // is the number 123

      try {
        const jwt_token = await fetch(
          `url/user/login/oauth/github/code=${code}`
        ).then((res) => res.json());

        // setLoginState 해야함
        // setUserInfo 해야함
      } catch (e) {
        //
      }
    };
    getToken();
    //user/login/oauth/github/code=`${code}`
  }, []);

  return null;
};

export default Callback;
