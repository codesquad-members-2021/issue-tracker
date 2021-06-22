import styled from 'styled-components';
import { LabelItemType } from 'types/issueType';
import LabelsItemLeft from './LabelsItemLeft';
import LabelsItemRight from './LabelsItemRight';

const LabelsItem = ({
  id,
  description,
  title,
  textColor,
  labelColor,
}: LabelItemType) => {
  return (
    <StyledLabelsItem>
      <LabelsItemLeft {...{ id, description, title, labelColor, textColor }} />
      <LabelsItemRight />
    </StyledLabelsItem>
  );
};

export default LabelsItem;

const StyledLabelsItem = styled.li`
  ${({ theme }) => theme.style.flexSpaceBetween}
  padding: 2.25rem 2rem;
  box-sizing: border-box;
  border-top: 1px solid ${({ theme }) => theme.color.grayscale.line};
`;
