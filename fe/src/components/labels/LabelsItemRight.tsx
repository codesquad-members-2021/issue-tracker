import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { ReactComponent as EditSvg } from 'icons/edit.svg';
import { ReactComponent as DeleteSvg } from 'icons/delete.svg';
import { MouseEvent } from 'react';
import useAxios from 'hook/useAxios';
import { useState, useEffect } from 'react';
import { labelUpdateAtom } from 'store';
import { useSetRecoilState } from 'recoil';


const LabelsItemRight = ({
  clickHandler,
  id,
}: {
  id: number;
  clickHandler: (e: MouseEvent) => void;
}) => {
  const setLabelUpdate = useSetRecoilState(labelUpdateAtom);
  const [toggle, setToggle] = useState(false);
  const { isSuccess } = useAxios(toggle, `/api/labels/${id}`, 'DELETE');
  const deleteClickHandler = (e: MouseEvent) => {
    setToggle(true);
  };
  useEffect(() => {
    if (isSuccess) setLabelUpdate((cur) => ++cur);
    setToggle(false);
  }, [isSuccess, setLabelUpdate]);

  return (
    <StyledLabelsItemRight>
      <Button onClick={clickHandler} startIcon={<EditIcon />}>
        편집
      </Button>
      <Button
        onClick={deleteClickHandler}
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        삭제
      </Button>
    </StyledLabelsItemRight>
  );
};

export default LabelsItemRight;

const StyledLabelsItemRight = styled.div`
  display: flex;
`;

const EditIcon = styled(EditSvg)``;

const DeleteIcon = styled(DeleteSvg)``;
