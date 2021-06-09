import { IssueTable as S } from "../../../../HomeStyles";
import CheckButton from "./CheckButton";
import IssueDescription from "./IssueDescription";
import IssueDropDownSymbol from "./IssueDropDownSymbol";
import IssueTitle from "./IssueTitle";
import IssueLabel from "./IssueLabel";

const IssueTableRow = () => {
  return (
    <S.TableRow>
      <S.TableRowLeft>
        <CheckButton />
        <S.IssueInfoDiv>
          <S.IssueInfoTop>
            <IssueTitle />
            <IssueLabel />
          </S.IssueInfoTop>
          <IssueDescription />
        </S.IssueInfoDiv>
      </S.TableRowLeft>
      <IssueDropDownSymbol />
    </S.TableRow>
  );
};

export default IssueTableRow;
