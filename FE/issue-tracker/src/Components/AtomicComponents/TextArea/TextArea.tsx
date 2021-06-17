import { TextArea as S } from "./TextAreaStyles";

interface Props {
  placeholder: string;
  rows: number;
  handleOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ placeholder, rows, handleOnChange }: Props) => {
  return (
    <S.TextAreaWrapper>
      <S.TextArea
        placeholder={placeholder}
        rows={rows}
        onChange={handleOnChange}
      />
    </S.TextAreaWrapper>
  );
};

export default TextArea;
