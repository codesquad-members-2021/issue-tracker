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
      <LabelPreviewArea>
        <Label {...{ title, colorCode, textColor }} />
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
