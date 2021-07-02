import { LabelItemType } from 'types/issueType';
import Label from 'components/common/Label';
import styled from 'styled-components';

const LabelsItemLeft = ({
  id,
  description,
  title,
  labelColor,
  textColor,
}: LabelItemType) => {
  return (
    <StyledLabelsItemLeft>
      <LabelPreviewArea>
        <Label {...{ id, description, title, labelColor, textColor }} />
      </LabelPreviewArea>
      <StyledSpan>{description}</StyledSpan>
    </StyledLabelsItemLeft>
  );
};

export default LabelsItemLeft;

const StyledLabelsItemLeft = styled.div`
  ${({ theme }) => theme.style.flexAlignItemsCenter}
`;

const LabelPreviewArea = styled.section`
  width: 13rem;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.color.grayscale.label};
`;
