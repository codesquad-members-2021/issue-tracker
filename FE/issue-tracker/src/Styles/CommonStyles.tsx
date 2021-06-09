import styled from "styled-components";
import Chip from "@material-ui/core/Chip";

const BOX = {
  FLEX_ROW_BOX: styled.div`
    display: flex;
  `,

  FLEX_ROW_CENTER_BOX: styled.div`
    display: flex;
    align-items: center;
  `,

  FLEX_COLUMN_BOX: styled.div`
    display: flex;
    flex-direction: column;
  `,

  FLEX_COLUMN_CENTER_BOX: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  FLEX_CENTER_BOX: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

const Label = {
  label: styled(Chip)``,
};

export { BOX, Label };
