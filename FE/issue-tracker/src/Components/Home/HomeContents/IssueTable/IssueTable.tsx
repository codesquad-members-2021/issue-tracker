import { IssueTable as S } from "../../HomeStyles";
import IssueTableBody from "./IssueTableBody/IssueTableBody";
import IssueTableHeader from "./IssueTableHeader/IssueTableHeader";

const IssueTable = () => {
  return (
    <div>
      <S.IssueTable>
        <IssueTableHeader />
        <IssueTableBody />
      </S.IssueTable>
    </div>
  );
};

export default IssueTable;
