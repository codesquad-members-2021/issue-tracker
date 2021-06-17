import { useRecoilState, useSetRecoilState } from "recoil";
import {
  createButtonFlagState,
  newIssueState,
} from "@/Components/NewIssue/NewIssueStore";
import Title from "./Title";
import MyIcon from "./MyIcon";
import TextArea from "@/Components/AtomicComponents/TextArea/TextArea";
import CreateButton from "./CreateButton";
import UnCreateButton from "./UnCreateButton";
import SettingSideBar from "@/Components/AtomicComponents/SettingSideBar/SettingSideBar";
import Editor from "@/Components/AtomicComponents/Editor/Editor";
import Header from "@/Components/Header/Header";
import { NewIssue as S } from "@/Components/NewIssue/NewIssueStyles";

const NewIssue = () => {
  const setCreateButtonFlag = useSetRecoilState(createButtonFlagState);
  const [newIssue, setNewIssue] = useRecoilState(newIssueState);

  const handleTextAreaOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.value.length > 0) {
      setCreateButtonFlag(false);
    } else {
      setCreateButtonFlag(true);
    }
    setNewIssue({ ...newIssue, title: e.target.value });
  };

  const handleEditorOnChange = (e: string) => {
    setNewIssue({ ...newIssue, comment: e });
  };

  return (
    <>
      <Header />
      <S.NewIssue>
        <Title />
        <S.NewIssueBody>
          <MyIcon />
          <S.BodyContentsWrapper>
            <S.TextAreaWrapper>
              <TextArea
                placeholder={"제목"}
                rows={1}
                handleOnChange={handleTextAreaOnChange}
              />
            </S.TextAreaWrapper>
            <Editor
              value={"### 코멘트를 입력하세요"}
              height={400}
              visiableDragbar={false}
              hideToolbar={true}
              handleOnChange={handleEditorOnChange}
            />
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
    </>
  );
};

export default NewIssue;
