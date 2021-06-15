import styled from 'styled-components';
import { ReactComponent as ArchiveIcon } from '@assets/archive.svg';

interface Props {
  children: string;
  margin?: string;
}

function CloseMiniButton({ children, margin }: Props) {
  return (
    <CloseButton margin={margin}>
      <ArchiveIcon className="close_icon" />
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
  .close_icon path {
    stroke: ${({ theme }) => theme.colors.gr_label};
  }
`;
