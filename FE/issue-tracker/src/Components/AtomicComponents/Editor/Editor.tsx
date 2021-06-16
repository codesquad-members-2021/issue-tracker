import FileAttachButton from "./FileAttachButton";
import { Editor as S } from "./EditorStyles";

interface Props {
  value: string;
  height: number;
  visiableDragbar: boolean;
  hideToolbar: boolean;
}

const Editor = ({ value, height, visiableDragbar, hideToolbar }: Props) => {
  return (
    <S.EditorWrapper>
      <S.Editor
        value={value}
        height={height}
        visiableDragbar={visiableDragbar}
        hideToolbar={hideToolbar}
      />
      <FileAttachButton />
    </S.EditorWrapper>
  );
};

export default Editor;
