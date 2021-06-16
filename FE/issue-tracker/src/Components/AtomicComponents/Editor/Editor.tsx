import FileAttachButton from "./FileAttachButton";
import { Editor as S } from "./EditorStyles";

interface Props {
  value: string;
  height: number;
  visiableDragbar: boolean;
  hideToolbar: boolean;
  handleOnChange: (e: any) => void;
}

const Editor = ({
  value,
  height,
  visiableDragbar,
  hideToolbar,
  handleOnChange,
}: Props) => {
  return (
    <S.EditorWrapper>
      <S.Editor
        value={value}
        height={height}
        visiableDragbar={visiableDragbar}
        hideToolbar={hideToolbar}
        onChange={handleOnChange}
      />
      <FileAttachButton />
    </S.EditorWrapper>
  );
};

export default Editor;
