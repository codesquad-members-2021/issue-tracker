import React from "react";
import { IssueTable as S } from "../../../HomeStyles";
import IssueTableRow from "./IssueTableRow/IssueTableRow";

const IssueTableBody = () => {
  const issues = Array.from({ length: 3 }, (_, i) => i);

  return (
    <S.TableBody>
      {issues.map((id, index) => (
        <IssueTableRow id={id} key={index} />
      ))}
    </S.TableBody>
  );
};

export default IssueTableBody;
