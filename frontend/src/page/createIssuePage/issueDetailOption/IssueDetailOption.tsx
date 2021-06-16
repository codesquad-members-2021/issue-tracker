import React, { ReactElement } from 'react';
import styled from 'styled-components';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

interface Props {}

export default function IssueDetailOption({}: Props): ReactElement {
  const options = ['담당자', '레이블', '마일스톤']
  const handleClick = () =>{
    //option정하기
  }
  const optionList = options.map((option, idx)=>
                  <div key={'options'+idx} onClick={handleClick}><div>{option}</div><AddOutlinedIcon/></div>)
 
  return (
  <IssueDetailOptionBlock>
    {optionList}
  </IssueDetailOptionBlock>);
}

const IssueDetailOptionBlock = styled.div`
border-radius: 16px;
border: 1px solid ${({theme})=>theme.color.lineGrey};
over-flow: hidden;
height: min-content;
> div{
  padding: 34px 32px;
  display: flex;
  justify-content: space-between;
  &:not(:last-child){
  border-bottom: 1px solid ${({theme})=>theme.color.lineGrey};
}
}`
