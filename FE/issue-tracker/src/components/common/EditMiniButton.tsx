import styled from 'styled-components';

import { ReactComponent as Edit } from '@assets/edit.svg';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  children: string;
  margin?: string;
  setState: Dispatch<SetStateAction<boolean>>;
}

function EditMiniButton({ children, margin, setState }: Props) {
  const handleClickEdit = (): void => setState((state) => !state);

  return (
    <EditButton margin={margin} onClick={handleClickEdit}>
      <Edit className="btn_edit" />
      <span>{children}</span>
    </EditButton>
  );
}

export default EditMiniButton;

interface EditButtonType {
  margin: string | undefined;
}

const EditButton = styled.div<EditButtonType>`
  width: 43px;
  margin: ${({ margin }) => margin || 0};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.gr_label};
  cursor: pointer;
  .btn_edit > path {
    stroke: ${({ theme }) => theme.colors.gr_label};
  }
`;
