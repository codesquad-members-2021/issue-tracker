import React from 'react';
import { Issue as S } from '../../../styles/CommonStyles';
import styled from 'styled-components';
import LabelSmallGroup from '../../../common/group/LabelSmallGroup';
import TextGroup from '../../../common/group/TextGroup';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { TYPE as T } from '../../../../utils/const';

const LabelCell = (): JSX.Element => {
  return (
    <LabelCellStyle>
      <LabelContent>
        <LabelBox>
          <LabelSmallGroup
            color={'#fff'}
            backgroundColor={'#1E4174'}
            label="밥에 관한 것"
          ></LabelSmallGroup>{' '}
        </LabelBox>
        <TextBox>
          <TextGroup type={T.SMALL} content={'content'} color="#6E7191" />
        </TextBox>
      </LabelContent>
      <ButtonBox>
        <EditButtonBox>
          <Button
            startIcon={<EditIcon style={{ color: '#6E7191', fontSize: 16 }} />}
          >
            <TextGroup type={T.SMALL} content={'편집'} color="#6E7191" />
          </Button>
        </EditButtonBox>
        <DeleteButtonBox>
          <Button
            startIcon={
              <DeleteIcon style={{ color: '#FF3B30', fontSize: 16 }} />
            }
          >
            <TextGroup type={T.SMALL} content={'삭제'} color="#FF3B30" />
          </Button>
        </DeleteButtonBox>
      </ButtonBox>
    </LabelCellStyle>
  );
};

export default LabelCell;

const LabelCellStyle = styled(S.IssueCell)`
  align-items: center;
`;

const LabelContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 20px;
`;

const LabelBox = styled.div`
  min-width: 250px;
`;

const TextBox = styled.div``;

const ButtonBox = styled.div`
  display: flex;
  margin-right: 20px;
`;

const EditButtonBox = styled.div`
  padding: 0px 5px;
`;

const DeleteButtonBox = styled.div`
  padding: 0px 5px;
`;
