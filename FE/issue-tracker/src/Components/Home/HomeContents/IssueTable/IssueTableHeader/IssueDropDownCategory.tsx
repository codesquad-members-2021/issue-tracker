import React from "react";
import { IssueTable as S, HomeAssets as Icon } from "../../../HomeStyles";

const IssueDropDownCategory = () => {
  return (
    <S.TableHeaderRight>
      <S.TableTh>
        담당자
        <Icon.down />
      </S.TableTh>
      <S.TableTh>
        레이블
        <Icon.down />
      </S.TableTh>
      <S.TableTh>
        마일스톤
        <Icon.down />
      </S.TableTh>
      <S.TableTh>
        작성자
        <Icon.down />
      </S.TableTh>
    </S.TableHeaderRight>
  );
};

export default IssueDropDownCategory;
