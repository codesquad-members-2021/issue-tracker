import { FunctionComponent } from "react";
import { Container } from "@material-ui/core";

type TAuthProps = { children?: NonNullable<React.ReactNode> | {} };

const Auth : FunctionComponent<TAuthProps> = ({ children }  : TAuthProps) => {
  return (
    <Container component="div" maxWidth="xl">
      {children || {}}
    </Container>
  );
};

/*
function Auth({ children }: IAuth) {
  return (
    <Container component="div" maxWidth="xl">
      {children}
    </Container>
  );
}
*/


export default Auth;
