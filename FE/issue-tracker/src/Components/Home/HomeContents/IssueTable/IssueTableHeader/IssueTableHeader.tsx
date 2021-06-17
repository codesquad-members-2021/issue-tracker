import React from "react";
import { IssueTable as S } from "../../../HomeStyles";
import IssueDropDownCategory from "./IssueDropDownCategory";
import IssueToggleCategory from "./IssueToggleCategory";
import TotalIssueCheckButton from "./TotalIssueCheckButton";

const IssueTableHeader = () => {
  return (
    <S.TableHeader>
      <S.TableHeaderLeft>
        <TotalIssueCheckButton />
        <IssueToggleCategory />
      </S.TableHeaderLeft>
      <IssueDropDownCategory />
    </S.TableHeader>
  );
};

export default IssueTableHeader;
