import React from "react";
import { IssueTable as S, HomeAssets as Icon } from "../../../HomeStyles";

const IssueToggleCategory = () => {
  return (
    <S.TableHeaderToggleDiv>
      <S.TableTh>
        <Icon.IssueMark />
        열린 이슈
      </S.TableTh>
      <S.TableTh>
        <Icon.CloseIssueMark />
        닫힌 이슈
      </S.TableTh>
    </S.TableHeaderToggleDiv>
  );
};

export default IssueToggleCategory;
