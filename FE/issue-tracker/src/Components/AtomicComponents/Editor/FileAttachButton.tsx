import AttachFileIcon from "@material-ui/icons/AttachFile";
import { Editor as S } from "./EditorStyles";

const FileAttachButton = () => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log(files);
    // files를 서버에 저장하고 저장된 주소를 받아와 마크다운 형식으로 저장
  };

  return (
    <S.FileAttachButtonWrapper>
      <S.FileAttachButton htmlFor="input_file">
        <AttachFileIcon />
        <span>파일 첨부하기</span>
      </S.FileAttachButton>
      <input
        type="file"
        id="input_file"
        accept="image/*"
        multiple
        required
        style={{ display: "none" }}
        onChange={handleOnChange}
      />
    </S.FileAttachButtonWrapper>
  );
};

export default FileAttachButton;
