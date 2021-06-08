import styled from 'styled-components'
import IssueListHead from './IssueListHead'


function IssueList() {
  
  return (
    <ListBox>
      <IssueListHead/>
      <ListBody/>dd
      <ListBody/>dd
      <ListBody/>dd
    </ListBox>
  );
}

const ListBox = styled.div`
border: 1px solid ${({theme})=>theme.color.lineGrey};
border-radius: 16px;
div:not(:last-child) {
  border-bottom: none; 
}`
const ListBody = styled.div`
border-bottom: 1px solid ${({theme})=>theme.color.lineGrey};`


export default IssueList