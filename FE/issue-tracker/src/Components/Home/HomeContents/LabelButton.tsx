import React from "react";
import Button from "@material-ui/core/Button";
import { HomeAssets as S } from "../HomeStyles";

const LabelButton = () => {
  return (
    <Button>
      <S.labelTag />
      레이블 (3)
    </Button>
  );
};

export default LabelButton;
