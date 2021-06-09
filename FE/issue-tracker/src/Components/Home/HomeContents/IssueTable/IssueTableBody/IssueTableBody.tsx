import React from "react";
import { IssueTable as S } from "../../../HomeStyles";
import IssueTableRow from "./IssueTableRow/IssueTableRow";

const IssueTableBody = () => {
  return (
    <S.TableBody>
      <IssueTableRow />
      <IssueTableRow />
      <IssueTableRow />
    </S.TableBody>
  );
};

export default IssueTableBody;
