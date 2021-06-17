import { IssueTable as S } from "../../../../HomeStyles";
import CheckButton from "./CheckButton";
import IssueDescription from "./IssueDescription";
import IssueDropDownSymbol from "./IssueDropDownSymbol";
import IssueTitle from "./IssueTitle";
import IssueLabel from "./IssueLabel";

type IssueTableRowProps = {
  issue: IssueObj;
};

interface IssueObj {
  id: number;
  title: string;
  number: number;
  writer: string;
  created_time: number;
  milestone: string;
  isOpen: boolean;
  asignee: object[];
  label: object[];
}

const IssueTableRow = ({ issue }: IssueTableRowProps) => {
  return (
    <S.TableRow>
      <S.TableRowLeft>
        <CheckButton issueId={issue.id} />
        <S.IssueInfoDiv>
          <S.IssueInfoTop>
            <IssueTitle issueTitle={issue.title} />
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
