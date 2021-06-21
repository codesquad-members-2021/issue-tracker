import React from 'react';
import styled from 'styled-components';
import { Issue as S } from '../../../styles/CommonStyles';
import TextGroup from '../../../common/group/TextGroup';
import InputGroup from '../../../common/group/InputGroup';
import ButtonGroup from '../../../common/group/ButtonGroup';

import {
  TYPE as T,
  MILESTONE as M,
  BUTTON_SIZE as BS,
  BUTTON_NAME as BN,
} from '../../../../utils/const';
import AddIcon from '@material-ui/icons/Add';
import { useSetRecoilState } from 'recoil';
import { addState } from '../../../../store/Recoil';

const MilestoneAdd = (): JSX.Element => {
  const setAddState = useSetRecoilState(addState);
  const handleClickButton = () => setAddState((prev) => !prev);

  return (
    <MilestoneAddStyle>
      <MilestoneAddHeader>
        <TextBox>
          <TextGroup type={T.LARGE} content={M.ADD} color="#14142B" />
        </TextBox>
      </MilestoneAddHeader>
      <MilestoneAddCell>
        <InputContainer>
          <AddUpper>
            <InputBox>
              <InputGroup variant="outlined" name={M.NAME} type={T.LARGE} />
            </InputBox>
            <InputBox>
              <InputGroup variant="outlined" name={M.DUE} type={T.LARGE} />
            </InputBox>
          </AddUpper>
          <AddLower>
            <InputBox>
              <InputGroup variant="outlined" name={M.DESC} type={T.LARGE} />
            </InputBox>
          </AddLower>
        </InputContainer>
      </MilestoneAddCell>
      <ButtonContainer>
        <ButtonBox onClick={handleClickButton}>
          <ButtonGroup
            type={BS.SMALL_FILL}
            name={BN.COMPLETE}
            icon={<AddIcon style={{ fontSize: 16 }} />}
          />
        </ButtonBox>
      </ButtonContainer>
    </MilestoneAddStyle>
  );
};

export default MilestoneAdd;

const MilestoneAddStyle = styled.div`
  margin: 20px 0px;
`;

const MilestoneAddHeader = styled(S.IssueTableHeader)`
  background: #fff;
  border-bottom: none;
  padding-bottom: 30px;
  height: fit-content;
`;

const MilestoneAddCell = styled(S.IssueCell)`
  justify-content: center;
  height: fit-content;
  padding-bottom: 10px;

  :nth-child(2) {
    border-bottom: none;
  }
`;
const ButtonContainer = styled(S.IssueCell)`
  justify-content: flex-end;
  height: fit-content;
  padding: 20px;
`;

const TextBox = styled.div`
  margin-left: 20px;
  margin-top: 20px;
`;

const InputBox = styled.div`
  padding: 10px 20px;
  width: 100%;

  div {
    width: 100%;
  }

  input {
    background: #eff0f6;
    border-radius: 16px;
  }

  fieldset {
    border-radius: 16px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
`;

const AddUpper = styled.div`
  display: flex;
  width: 100%;
`;

const AddLower = styled.div``;
