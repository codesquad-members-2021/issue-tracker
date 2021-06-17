import { LabelsItemLeftProps } from 'types/issueType';
import Label from 'components/common/Label';
import styled from 'styled-components';

const LabelsItemLeft = ({
  description,
  title,
  colorCode,
  textColor,
}: LabelsItemLeftProps) => {
  return (
    <StyledLabelsItemLeft>
      <Label {...{ title, colorCode, textColor }} />
      <StyledSpan>{description}</StyledSpan>
    </StyledLabelsItemLeft>
  );
};

export default LabelsItemLeft;

const StyledLabelsItemLeft = styled.div`
  display: flex;
`;

const StyledSpan = styled.span`
  margin-left: 5rem;
`;
