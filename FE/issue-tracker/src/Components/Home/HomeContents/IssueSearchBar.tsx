import React from "react";
import { Home as S } from "../HomeStyles";
import Filter from "./Filter/Filter";

const IssueSearchBar = () => {
  return (
    <S.ContentNavLeft>
      <Filter />
      <input />
    </S.ContentNavLeft>
  );
};

export default IssueSearchBar;
