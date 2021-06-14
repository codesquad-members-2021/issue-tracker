import FileAttachButton from "./FileAttachButton";
import { TextArea as S } from "./TextAreaStyles";

interface Props {
  placeholder: string;
  rows: number;
  handleOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isFileAttachButtonShow: boolean;
}

const TextArea = ({
  placeholder,
  rows,
  handleOnChange,
  isFileAttachButtonShow,
}: Props) => {
  return (
    <S.TextAreaWrapper>
      <S.TextArea
        placeholder={placeholder}
        rows={rows}
        onChange={handleOnChange}
      />
      <FileAttachButton isShow={isFileAttachButtonShow} />
    </S.TextAreaWrapper>
  );
};

export default TextArea;
