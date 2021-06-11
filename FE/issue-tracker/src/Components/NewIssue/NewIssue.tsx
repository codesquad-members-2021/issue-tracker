import { StylesProvider } from "@material-ui/core";
import Title from "./Title";
import MyIcon from "./MyIcon";
import TextArea from "./TextArea";
import FileAttachButton from "./FileAttachButton";
import CreateButton from "./CreateButton";
import UnCreateButton from "./UnCreateButton";
import SettingSideBar from "@/Components/SettingSideBar/SettingSideBar";
import { NewIssue as S } from "@/Components/NewIssue/NewIssueStyles";

const NewIssue = () => {
  return (
    <StylesProvider injectFirst>
      <S.NewIssue>
        <Title />
        <S.NewIssueBody>
          <MyIcon />
          <S.TextAreaWrapper>
            <TextArea placeholder={"제목"} rows={1} />
            <TextArea placeholder={"코멘트를 입력하세요"} rows={20} />
            <FileAttachButton />
          </S.TextAreaWrapper>
          <SettingSideBar />
        </S.NewIssueBody>
        <S.ButtonsWrapper>
          <UnCreateButton />
          <CreateButton />
        </S.ButtonsWrapper>
      </S.NewIssue>
    </StylesProvider>
  );
};

export default NewIssue;
