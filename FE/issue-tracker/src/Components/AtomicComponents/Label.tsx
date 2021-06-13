import { LabelDiv } from "./AtomicComponentsStyles";

type LabelProps = {
  label: string;
  backgroundcolor?: string;
  fontcolor?: string;
};

const Label = ({ label, backgroundcolor, fontcolor }: LabelProps) => {
  return (
    <LabelDiv
      label={label}
      size="small"
      fontcolor={fontcolor}
      backgroundcolor={backgroundcolor}
    />
  );
};

export default Label;
