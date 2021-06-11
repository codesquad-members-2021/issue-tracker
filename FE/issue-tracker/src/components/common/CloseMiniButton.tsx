import styled from 'styled-components';
import { ReactComponent as Archive } from '@assets/archive.svg';

interface Props {
  children: string;
  margin?: string;
}

function CloseMiniButton({ children, margin }: Props) {
  return (
    <CloseButton margin={margin}>
      <Archive className="btn_close" />
      <span>{children}</span>
    </CloseButton>
  );
}

export default CloseMiniButton;

interface CloseButtonType {
  margin: string | undefined;
}

const CloseButton = styled.div<CloseButtonType>`
  width: 43px;
  margin: ${({ margin }) => margin || 0};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.gr_label};
  cursor: pointer;
  .btn_close path {
    stroke: ${({ theme }) => theme.colors.gr_label};
  }
`;
