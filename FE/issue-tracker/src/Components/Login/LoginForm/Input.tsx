import { Login as S } from "@/Components/Login/LoginStyles";

interface Props {
  label: string;
}

const Input = ({ label }: Props) => {
  return <S.Input id="outlined-basic" label={label} variant="outlined" />;
};

export default Input;
