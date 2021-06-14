import AttachFileIcon from "@material-ui/icons/AttachFile";
import { TextArea as S } from "./TextAreaStyles";

interface Props {
  isShow: boolean;
}

const FileAttachButton = ({ isShow }: Props) => {
  return (
    <S.FileAttachButtonWrapper isShow={isShow}>
      <S.FileAttachButton startIcon={<AttachFileIcon />}>
        파일 첨부하기
      </S.FileAttachButton>
    </S.FileAttachButtonWrapper>
  );
};

export default FileAttachButton;
