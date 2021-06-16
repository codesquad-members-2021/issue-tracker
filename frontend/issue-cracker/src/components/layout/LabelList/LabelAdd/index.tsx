import React from 'react';
import styled from 'styled-components';
import { Issue as S } from '../../../styles/CommonStyles';
import TextGroup from '../../../common/group/TextGroup';
import InputGroup from '../../../common/group/InputGroup';
import ButtonGroup from '../../../common/group/ButtonGroup';
import LabelSmallGroup from '../../../common/group/LabelSmallGroup';
import SyncIcon from '@material-ui/icons/Sync';
import { SMALL_FILL } from '../../../../utils/const';
import AddIcon from '@material-ui/icons/Add';
import { useSetRecoilState } from 'recoil';
import { addState } from '../../../../store/Recoil';

const LabelAdd = (): JSX.Element => {
  const setAddState = useSetRecoilState(addState);
  const handleClickButton = () => setAddState((prev) => !prev);

  return (
    <LabelAddStyle>
      <LabelAddHeader>
        <TextBox>
          <TextGroup
            type="large"
            content="새로운 레이블 추가"
            color="#14142B"
          />
        </TextBox>
      </LabelAddHeader>
      <LabelAddCell>
        <LabelContainer>
          <LabelBox>
            <LabelSmallGroup
              label="레이블 이름"
              backgroundColor="#EFF0F6"
              color="#14142B"
            />
          </LabelBox>
        </LabelContainer>
        <InputContainer>
          <InputBox>
            <InputGroup variant="outlined" name="레이블 이름" type="large" />
          </InputBox>
          <InputBox>
            <InputGroup variant="outlined" name="설명(선택)" type="large" />
          </InputBox>
          <InputColorBox>
            <BackgroundColorBox>
              <TextGroup type="xSmall" content="배경 색상" color="#6E7191" />
              <TextGroup type="small" content={'#FFFFFF'} color="#14142B" />
              <div>
                <SyncIcon
                  style={{
                    color: '#6E7191',
                    fontSize: 20,
                    transform: `rotate(-45deg)`,
                    cursor: 'pointer',
                  }}
                />
              </div>
            </BackgroundColorBox>
            <TextColorBox>
              <TextGroup type="xSmall" content="텍스트 색상" color="#6E7191" />
              <TextGroup type="small" content={'#FFFFFF'} color="#14142B" />
              <div>
                <SyncIcon
                  style={{
                    color: '#6E7191',
                    fontSize: 20,
                    transform: `rotate(-45deg)`,
                    cursor: 'pointer',
                  }}
                />
              </div>
            </TextColorBox>
          </InputColorBox>
        </InputContainer>
      </LabelAddCell>
      <ButtonContainer>
        <ButtonBox onClick={handleClickButton}>
          <ButtonGroup
            type={SMALL_FILL}
            name={'완료'}
            icon={<AddIcon style={{ fontSize: 16 }} />}
          />
        </ButtonBox>
      </ButtonContainer>
    </LabelAddStyle>
  );
};

export default LabelAdd;

const LabelAddStyle = styled.div`
  margin: 20px 0px;
`;

const LabelAddHeader = styled(S.IssueTableHeader)`
  background: #fff;
  border-bottom: none;
  padding-bottom: 30px;
  height: fit-content;
`;

const LabelAddCell = styled(S.IssueCell)`
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

const LabelContainer = styled.div`
  width: 30%;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
  padding: 10px 20px;

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

const LabelBox = styled.div``;

const InputColorBox = styled.div`
  display: flex;
  padding: 10px 20px;
`;

const BackgroundColorBox = styled.div`
  width: fit-content;
  height: 40px;
  background: #eff0f6;
  border-radius: 16px;
  display: flex;
  align-items: center;
  color: #6e7191;

  div {
    display: flex;
    margin-left: 20px;

    :last-child {
      margin-right: 20px;
    }
  }
`;

const TextColorBox = styled.div`
  width: fit-content;
  height: 40px;
  background: #eff0f6;
  border-radius: 16px;
  display: flex;
  align-items: center;
  margin: 0px 10px;
  color: #6e7191;

  div {
    display: flex;
    margin-left: 20px;

    :last-child {
      margin-right: 20px;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
`;
