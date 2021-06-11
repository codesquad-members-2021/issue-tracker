import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '@assets/trash.svg';

interface Props {
  children: string;
  margin?: string;
}

function DeleteMiniButton({ children, margin }: Props) {
  return (
    <DeleteButton margin={margin}>
      <DeleteIcon className="delete_icon" />
      <span>{children}</span>
    </DeleteButton>
  );
}

export default DeleteMiniButton;

interface DeleteButtonType {
  margin: string | undefined;
}

const DeleteButton = styled.div<DeleteButtonType>`
  margin: ${({ margin }) => margin || 0};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.error_primary};
  cursor: pointer;
  .delete_icon {
    margin-right: 5px;
    path {
      stroke: ${({ theme }) => theme.colors.error_primary};
    }
  }
`;
