import { StylesProvider } from "@material-ui/core";
import { Login as S } from "@/Components/Login/LoginStyles";

const SignUpButton = () => {
  return (
    <StylesProvider injectFirst>
      <S.SignUpButton>회원가입</S.SignUpButton>
    </StylesProvider>
  );
};

export default SignUpButton;
