import { LabelDiv } from "./AtomicComponentsStyles";

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

export default Label;
