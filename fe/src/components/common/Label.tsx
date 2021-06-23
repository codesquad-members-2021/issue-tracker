import styled from 'styled-components';
import { LabelType } from 'types/issueType';

const Label = ({ title, labelColor, textColor }: LabelType) => {
  return (
    <StyledLabel aria-controls={textColor} backgroundColor={labelColor}>
      {title}
    </StyledLabel>
  );
};

export default Label;

const StyledLabel = styled.div<{ backgroundColor: string }>`
  ${({ theme }) => theme.style.flexAlignItemsCenter}
  width: fit-content;
  height: 1.75rem;
  border-radius: ${({ theme }) => theme.border.radius.XL};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${({ theme }) => theme.fontSize.S};
  padding: 0 1rem;
  font-weight: 600;

  &[aria-controls='light'] {
    color: ${({ theme }) => theme.color.grayscale.offWhite};
  }

  &[aria-controls='dark'] {
    color: ${({ theme }) => theme.color.grayscale.titleActive};
  }
`;
