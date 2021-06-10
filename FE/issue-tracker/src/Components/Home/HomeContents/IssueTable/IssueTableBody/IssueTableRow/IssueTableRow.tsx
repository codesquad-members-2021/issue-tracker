import { IssueTable as S } from "../../../../HomeStyles";
import CheckButton from "./CheckButton";
import IssueDescription from "./IssueDescription";
import IssueDropDownSymbol from "./IssueDropDownSymbol";
import IssueTitle from "./IssueTitle";
import IssueLabel from "./IssueLabel";

type IssueTableRowProps = {
  id: number;
};

const IssueTableRow = ({ id }: IssueTableRowProps) => {
  return (
    <S.TableRow>
      <S.TableRowLeft>
        <CheckButton id={id} />
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
