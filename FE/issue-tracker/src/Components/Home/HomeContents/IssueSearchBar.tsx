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
      <SB.SearchDiv>
        <Icon.SearchIcon />
        <SB.SearchInput placeholder="is:issue" />
      </SB.SearchDiv>
    </S.ContentNavLeft>
  );
};

export default IssueSearchBar;
