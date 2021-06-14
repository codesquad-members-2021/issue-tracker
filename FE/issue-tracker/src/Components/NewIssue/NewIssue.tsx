import { useSetRecoilState } from "recoil";
import { createButtonFlagState } from "@/Components/NewIssue/NewIssueStore";
import Title from "./Title";
import MyIcon from "./MyIcon";
import TextArea from "@/Components/AtomicComponents/TextArea/TextArea";
import CreateButton from "./CreateButton";
import UnCreateButton from "./UnCreateButton";
import SettingSideBar from "@/Components/AtomicComponents/SettingSideBar/SettingSideBar";
import { NewIssue as S } from "@/Components/NewIssue/NewIssueStyles";

const NewIssue = () => {
  const setCreateButtonFlag = useSetRecoilState(createButtonFlagState);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.placeholder === "코멘트를 입력하세요") return;
    if (e.target.value.length > 0) {
      setCreateButtonFlag(false);
    } else {
      setCreateButtonFlag(true);
    }
  };

  return (
    <S.NewIssue>
      <Title />
      <S.NewIssueBody>
        <MyIcon />
        <S.BodyContentsWrapper>
          <S.TextAreaWrapper>
            <TextArea
              placeholder={"제목"}
              rows={1}
              handleOnChange={handleOnChange}
              isFileAttachButtonShow={false}
            />
          </S.TextAreaWrapper>
          <S.TextAreaWrapper>
            <TextArea
              placeholder={"코멘트를 입력하세요"}
              rows={20}
              handleOnChange={handleOnChange}
              isFileAttachButtonShow={true}
            />
          </S.TextAreaWrapper>
        </S.BodyContentsWrapper>
        <S.NavWrapper>
          <SettingSideBar />
        </S.NavWrapper>
      </S.NewIssueBody>
      <S.ButtonsWrapper>
        <UnCreateButton />
        <CreateButton />
      </S.ButtonsWrapper>
    </S.NewIssue>
  );
};

export default NewIssue;
