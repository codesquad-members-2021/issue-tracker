import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { ReactComponent as EditSvg } from 'icons/edit.svg';
import { ReactComponent as DeleteSvg } from 'icons/delete.svg';
const LabelsItemRight = () => {
  return (
    <StlyedLabelsItemRight>
      <Button startIcon={<EditIcon />}>편집</Button>
      <Button color="secondary" startIcon={<DeleteIcon />}>
        삭제
      </Button>
    </StlyedLabelsItemRight>
  );
};

export default LabelsItemRight;

const StlyedLabelsItemRight = styled.div`
  display: flex;
`;

const EditIcon = styled(EditSvg)``;


const DeleteIcon = styled(DeleteSvg)``;
