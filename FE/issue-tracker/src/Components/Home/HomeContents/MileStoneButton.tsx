import React from "react";
import Button from "@material-ui/core/Button";
import { HomeAssets as S } from "../HomeStyles";

const MileStoneButton = () => {
  return (
    <Button>
      <S.milestoneTag />
      마일스톤 (2)
    </Button>
  );
};

export default MileStoneButton;
