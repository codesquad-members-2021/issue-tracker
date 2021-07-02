import styled from 'styled-components';
import { LabelItemType } from 'types/issueType';
import LabelsItemInput from './LabelsItemInput';

const LabelsItemEdit = ({
  id,
  title,
  description,
  labelColor,
  textColor,
  clickHandler,
}: LabelItemType & { clickHandler: (e: React.MouseEvent) => void }) => {
  return (
    <StyledLabelsItemEdit>
      <LabelsItemEditTitle>레이블 편집</LabelsItemEditTitle>
      <LabelsItemInput
        {...{
          id,
          title,
          description,
          labelColor,
          textColor,
          clickHandler,
        }}
      />
    </StyledLabelsItemEdit>
  );
};

export default LabelsItemEdit;

const StyledLabelsItemEdit = styled.div`
  ${({ theme }) => theme.style.flexColumn}
  padding: 2.25rem 2rem;
  box-sizing: border-box;
  border-top: 1px solid ${({ theme }) => theme.color.grayscale.line};
`;

const LabelsItemEditTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.XL};
`;
