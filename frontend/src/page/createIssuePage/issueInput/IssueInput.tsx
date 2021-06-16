import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { GiPaperClip } from 'react-icons/gi'

export default function IssueInput(): ReactElement {
  return (
    <IssueInputBlock>
      <input type='text' className='input__title' placeholder='제목' />
      <div className='input___comment'>
        <textarea className='input__description' placeholder='코멘트를 입력하세요.' />
        <div className='input__addFile'>
          <label htmlFor="add_file"><GiPaperClip/>&nbsp;파일 첨부하기</label>
          <input type='file' id="add_file" className="input__file" accept=".png, .jpg, .jpeg"/>
        </div>
      </div>
    </IssueInputBlock>
  );
}

const IssueInputBlock = styled.div`
  display: flex;
  flex-direction: column;
  .input__title,
  .input__description {
    border: none;
    background-color: ${({ theme }) => theme.color.inputBg};
    font-size:  ${({ theme }) => theme.size.md}px; 
    height: 56px;
    &:focus{
      text-decoration: none;
      background-color: ${({ theme }) => theme.color.white};
    }
  }
  .input__title{
    border-radius: 14px;
    padding: 0px 24px;
  }
  .input__description{
    border-radius: 14px 14px 0 0;
    padding: 24px;
    resize: none;
    width: -webkit-fill-available;
    height: 343px;
    border-bottom: 1px dashed ${({ theme }) => theme.color.fontGrey};
    &:focus{
      .input__addFile {
        background-color: ${({ theme }) => theme.color.white}; //?이거 어케해야함?
      }
    }
  }
  .input___comment{
    margin-top: 16px;
    border-radius: 14px;
    background-color: ${({ theme }) => theme.color.inputBg}; 
  }
  .input__addFile{
    padding: 16px 24px;
  }
  .input__file{
    height: 0px;
  }
`;
