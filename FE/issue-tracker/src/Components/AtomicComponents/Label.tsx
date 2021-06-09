import styled from "styled-components";
import Chip from "@material-ui/core/Chip";

type LabelProps = {
  label: string;
  backgroundColor?: string;
  fontColor?: string;
};

const Label = ({ label, backgroundColor, fontColor }: LabelProps) => {
  return (
    <LabelDiv
      label={label}
      size="small"
      fontColor={fontColor}
      backgroundColor={backgroundColor}
    />
  );
};

const LabelDiv = styled(Chip)<{ fontColor?: string; backgroundColor?: string }>`
  color: ${({ fontColor }) => (fontColor ? fontColor : "none")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "none"};
`;

export default Label;
