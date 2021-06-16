import React from 'react';
import styled from 'styled-components';
import { Issue as S } from '../../../styles/CommonStyles';
import TextGroup from '../../../common/group/TextGroup';
import InputGroup from '../../../common/group/InputGroup';
import LabelSmallGroup from '../../../common/group/LabelSmallGroup';

const LabelAdd = (): JSX.Element => {
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
            <BackgroundColorBox>배경색상</BackgroundColorBox>
            <TextColorBox>텍스트 색상</TextColorBox>
          </InputColorBox>
        </InputContainer>
      </LabelAddCell>
      <LabelAddCell></LabelAddCell>
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
  padding-bottom: 50px;
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
  padding: 0px 20px;

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
  padding: 0px 20px;
`;

const BackgroundColorBox = styled.div`
  width: 240px;
  height: 40px;
  background: #eff0f6;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6e7191;
`;

const TextColorBox = styled.div`
  width: 240px;
  height: 40px;
  background: #eff0f6;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
  color: #6e7191;
`;
