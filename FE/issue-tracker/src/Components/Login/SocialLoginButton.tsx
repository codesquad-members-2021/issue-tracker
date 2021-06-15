import { Login as S } from "@/Components/Login/LoginStyles";

const SocialLoginButton = () => {
  return (
    <a href="https://github.com/login/oauth/authorize?client_id=696ac7e28ff872733731&redirect_uri=http://localhost:3000/callback">
      <S.SocialLoginButton variant="contained">
        GitHub 계정으로 로그인
      </S.SocialLoginButton>
    </a>
  );
};

export default SocialLoginButton;
