import styled from 'styled-components';
import { ReactComponent as Delete } from '@assets/trash.svg';

interface Props {
  children: string;
  margin?: string;
}

function DeleteMiniButton({ children, margin }: Props) {
  return (
    <DeleteButton margin={margin}>
      <Delete className="btn_delete" />
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
  .btn_delete {
    margin-right: 5px;
    path {
      stroke: ${({ theme }) => theme.colors.error_primary};
    }
  }
`;
