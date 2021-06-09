import { Button } from '@material-ui/core';

const GitHubLoginButton = () => {
  return (
    <a href="https://github.com/login/oauth/authorize?client_id=a1689d4a012d841d152a&redirect_uri=http://localhost:3000/login/oauth&scope=user">
      <Button variant="contained" size="large">
        GitHub 계정으로 로그인
      </Button>
    </a>
  );
};

export default GitHubLoginButton;
