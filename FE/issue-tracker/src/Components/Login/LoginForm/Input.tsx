import { StylesProvider } from "@material-ui/core";
import { Login as S } from "@/Components/Login/LoginStyles";

interface Props {
  label: string;
}

const Input = ({ label }: Props) => {
  return (
    <StylesProvider injectFirst>
      <S.Input id="outlined-basic" label={label} variant="outlined" />
    </StylesProvider>
  );
};

export default Input;
