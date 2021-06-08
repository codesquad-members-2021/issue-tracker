import styled from "styled-components";
import { BOX } from "@/Styles/CommonStyles";
import theme from "@/Styles/theme";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Login = {
  Login: styled(BOX.FLEX_COLUMN_CENTER_BOX)`
    justify-content: center;
    width: 400px;
    height: 100%;
  `,
  Title: styled.div`
    color: ${theme.GRAY_SCALE.TITLE_ACTIVE};
    font-size: ${theme.FONT_SIZE.LOGOTYPE_LARGE};
    font-family: "Montserrat", sans-serif;
    margin-bottom: 60px;
  `,
  SocialLoginButton: styled(Button)`
    margin-bottom: 24px;
    border-radius: 20px;
    background: ${theme.GRAY_SCALE.TITLE_ACTIVE};
    color: ${theme.COLOR.WHITE};
    padding: 16px 24px;
    width: 96%;
  `,
  LoginForm: styled(BOX.FLEX_COLUMN_CENTER_BOX)`
    width: 100%;
  `,
  TextDivider: styled.div`
    color: ${theme.GRAY_SCALE.PLACEHOLDER};
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
    font-weight: 700;
    margin-bottom: 24px;
  `,
  Input: styled(TextField)`
    width: 96%;
    background: ${theme.GRAY_SCALE.INPUT_BACKGROUND};
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
    color: ${theme.GRAY_SCALE.PLACEHOLDER};
    margin-bottom: 16px;
  `,
  LoginButton: styled(Button)`
    margin: 6px 0px 30px 0px;
    border-radius: 20px;
    background: ${theme.COLOR.BLUE};
    opacity: 0.5;
    color: ${theme.COLOR.WHITE};
    padding: 16px 24px;
    width: 96%;
  `,
  SignUpButton: styled(Button)`
    font-size: ${theme.FONT_SIZE.TEXT_X_SMALL};
  `,
};

export { Login };
