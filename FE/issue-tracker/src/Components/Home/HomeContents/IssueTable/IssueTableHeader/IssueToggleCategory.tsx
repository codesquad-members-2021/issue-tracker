import React from "react";
import { IssueTable as S } from "../../../HomeStyles";

const IssueToggleCategory = () => {
  return (
    <S.TableHeaderToggleDiv>
      <S.TableTh>열린 이슈</S.TableTh>
      <S.TableTh>닫힌 이슈</S.TableTh>
    </S.TableHeaderToggleDiv>
  );
};

export default IssueToggleCategory;
