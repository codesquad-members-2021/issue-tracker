import { useSetRecoilState } from "recoil";
import { createButtonFlagState } from "@/Components/NewIssue/NewIssueStore";
import { NewIssue as S } from "@/Components/NewIssue/NewIssueStyles";

interface Props {
  placeholder: string;
  rows: number;
}

const TextArea = ({ placeholder, rows }: Props) => {
  const setCreateButtonFlag = useSetRecoilState(createButtonFlagState);

  const handleOnChange = (e: any) => {
    if (e.target.placeholder === "코멘트를 입력하세요") return;
    if (e.target.value.length > 0) {
      setCreateButtonFlag(false);
    } else {
      setCreateButtonFlag(true);
    }
  };
  return (
    <S.TextArea
      placeholder={placeholder}
      rows={rows}
      onChange={handleOnChange}
    />
  );
};

export default TextArea;
