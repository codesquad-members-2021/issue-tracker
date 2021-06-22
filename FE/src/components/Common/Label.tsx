import styled from 'styled-components';
import { TChildren } from '../../util/types';

interface ILabel {
  children?: TChildren;
  type?: 'S' | 'L';
  color?: string;
  bgColor?: string;
}

const Label = ({ children, ...props }: ILabel) => (
  <LabelLayout {...props}>{children || 'Label'}</LabelLayout>
);

export default Label;

// --- Styled Components ---
const LabelLayout = styled.div<ILabel>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.8rem;
  border-radius: 2.4rem;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.bgColor};

  font-size: ${({ type }) => (type === 'L' ? `1rem` : `0.75rem`)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ color, theme }) =>
    color ? `${color}` : theme.colors.grayScale.offWhite};
  background-color: ${({ bgColor, theme }) =>
    bgColor ? `${bgColor}` : theme.colors.grayScale.body};
`;
