import React from "react";
import { Home as S } from "../HomeStyles";

const IssueSearchBar = () => {
  return (
    <S.ContentNavLeft>
      <div>필터</div>
      <input placeholder="is: issue" />
    </S.ContentNavLeft>
  );
};

export default IssueSearchBar;
