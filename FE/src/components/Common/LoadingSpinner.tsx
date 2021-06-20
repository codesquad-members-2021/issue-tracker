import styled, { keyframes } from 'styled-components';
import { TChildren } from '../../util/types';

interface ILoadingSpinner {
  children: TChildren;
}
const LoadingSpinner = ({ children, ...props }: ILoadingSpinner) => (
  <SpinnerLayout {...props}>
    <SpinnerAnimationBlock />
    {children && children}
  </SpinnerLayout>
);

export default LoadingSpinner;

// --- Styled Components ---
const SpinnerLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 100%;
  min-height: 20vh;
`;

const spin = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const SpinnerAnimationBlock = styled.div`
  border: 0.75rem solid #ddd;
  border-top-color: #333;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 2rem;
  width: 5rem;
  height: 5rem;
  animation: ${spin} 1s linear infinite;
`;
