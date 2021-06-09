import AttachFileIcon from "@material-ui/icons/AttachFile";
import { NewIssue as S } from "@/Components/NewIssue/NewIssueStyles";

const FileAttachButton = () => {
  return (
    <S.FileAttachButton startIcon={<AttachFileIcon />}>
      파일 첨부하기
    </S.FileAttachButton>
  );
};

export default FileAttachButton;
