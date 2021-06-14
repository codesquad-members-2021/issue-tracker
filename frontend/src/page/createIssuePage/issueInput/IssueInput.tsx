import React, { ReactElement } from 'react';
import styled from 'styled-components';
interface Props {}

export default function IssueInput({}: Props): ReactElement {
  return (
    <IssueInputBlock>
      <input type='text' className='input__title' placeholder='제목' />
      <textarea className='input__description' placeholder='코멘트를 입력하세요.' />
    </IssueInputBlock>
  );
}

const IssueInputBlock = styled.div`
  input {
    background-color: ${({ theme }) => theme.color.inputBg};
    border: none;
  }
`;
