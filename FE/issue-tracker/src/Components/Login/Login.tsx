import Title from "./Title";
import SocialLoginButton from "./SocialLoginButton";
import LoginForm from "./LoginForm/LoginForm";
import { Login as S } from "@/Components/Login/LoginStyles";

const Login = () => {
  return (
    <S.Login>
      <Title />
      <SocialLoginButton />
      <LoginForm />
    </S.Login>
  );
};

export default Login;
