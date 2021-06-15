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
  border-radius: 15px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: 0.3rem;
  margin-left: 1rem;
  padding: 0.2rem 0.9rem;
  font-weight: 600;
  &[aria-controls='white'] {
    color: white;
  }
`;
