import TextDivider from "./TextDivider";
import Input from "./Input";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import { Login as S } from "@/Components/Login/LoginStyles";

const LoginForm = () => {
  return (
    <S.LoginForm>
      <TextDivider />
      <Input label={"아이디"} />
      <Input label={"비밀번호"} />
      <LoginButton />
      <SignUpButton />
    </S.LoginForm>
  );
};

export default LoginForm;
