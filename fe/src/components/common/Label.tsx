import styled from 'styled-components';
import { labelType } from 'types/issueType';

const Label = ({ title, colorCode, textColor }: labelType) => {
  return (
    <StyledLabel aria-controls={textColor} backgroundColor={colorCode}>
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

  &[aria-controls='white'] {
    color: ${({ theme }) => theme.color.grayscale.offWhite};
  }

  &[aria-controls='black'] {
    color: ${({ theme }) => theme.color.grayscale.titleActive};
  }
`;
