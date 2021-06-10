import React from "react";
import { IssueTable as S } from "../../../HomeStyles";
import IssueTableRow from "./IssueTableRow/IssueTableRow";

const IssueTableBody = () => {
  const issues = Array.from({ length: 3 }, (_, i) => i);

  return (
    <S.TableBody>
      {issues.map((id) => (
        <IssueTableRow id={id} />
      ))}
    </S.TableBody>
  );
};

export default IssueTableBody;
