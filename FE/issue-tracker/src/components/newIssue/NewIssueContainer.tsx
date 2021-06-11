import styled from 'styled-components';

import { Avatar } from '@chakra-ui/avatar';

import TextBox from './TextBox';
import SelectBox from './SelectBox';
import ButtonBox from './ButtonBox';

function NewIssueContainer() {
  return (
    <Wrap>
      <ContentsBox>
        <Avatar className="avatar" size="md" src="./janmang.jpeg" />
        <TextBox />
        <SelectBox />
      </ContentsBox>
      <ButtonBox />
    </Wrap>
  );
}

export default NewIssueContainer;

const Wrap = styled.section`
  width: 100%;
  height: 100%;
  height: 569px;
`;

const ContentsBox = styled.div`
  display: flex;
  margin: 16px 0;
  padding: 32px 0;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.gr_line};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gr_line};
`;
