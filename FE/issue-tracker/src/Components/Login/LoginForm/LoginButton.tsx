import { StylesProvider } from "@material-ui/core";
import { Login as S } from "@/Components/Login/LoginStyles";

const LoginButton = () => {
  return (
    <StylesProvider injectFirst>
      <S.LoginButton variant="contained" color="primary">
        아이디로 로그인
      </S.LoginButton>
    </StylesProvider>
  );
};

export default LoginButton;
