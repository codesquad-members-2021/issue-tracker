import React from "react";
import {
  Home as S,
  FilterSearchBar as SB,
  HomeAssets as Icon,
} from "../HomeStyles";
import Filter from "./Filter/Filter";

const IssueSearchBar = () => {
  return (
    <S.ContentNavLeft>
      <Filter />
      <SB.searchDiv>
        <Icon.searchIcon />
        <SB.searchInput placeholder="is:issue" />
      </SB.searchDiv>
    </S.ContentNavLeft>
  );
};

export default IssueSearchBar;
