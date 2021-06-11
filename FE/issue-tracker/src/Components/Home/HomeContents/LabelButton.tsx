import React from "react";
import { Home as Styled } from "../HomeStyles";
import { HomeAssets as S } from "../HomeStyles";

const LabelButton = () => {
  return (
    <Styled.Button>
      <S.LabelTag />
      레이블 (3)
    </Styled.Button>
  );
};

export default LabelButton;
