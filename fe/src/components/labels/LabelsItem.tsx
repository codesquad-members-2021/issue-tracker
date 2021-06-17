import styled from 'styled-components';
import { LabelsItemProps } from 'types/issueType';
import LabelsItemLeft from './LabelsItemLeft';
import LabelsItemRight from './LabelsItemRight';

const LabelsItem = ({
  id,
  description,
  title,
  textColor,
  colorCode,
}: LabelsItemProps) => {
  return (
    <StyledLabelsItem>
      <LabelsItemLeft {...{ description, title, colorCode, textColor }} />
      <LabelsItemRight />
    </StyledLabelsItem>
  );
};

export default LabelsItem;

const StyledLabelsItem = styled.li`
  ${({ theme }) => theme.style.flexSpaceBetween}
  padding: 1rem;
  box-sizing: border-box;
  border-top: 1px solid ${({ theme }) => theme.color.grayscale.line};
`;
