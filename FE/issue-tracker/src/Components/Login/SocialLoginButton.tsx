import { StylesProvider } from "@material-ui/core";
import { Login as S } from "@/Components/Login/LoginStyles";

const SocialLoginButton = () => {
  return (
    <StylesProvider injectFirst>
      <S.SocialLoginButton variant="contained">
        GitHub 계정으로 로그인
      </S.SocialLoginButton>
    </StylesProvider>
  );
};

export default SocialLoginButton;
