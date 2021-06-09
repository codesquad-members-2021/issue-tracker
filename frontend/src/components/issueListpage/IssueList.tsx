import styled from 'styled-components'
import IssueListHead from './IssueListHead'
import Lable from '../atom/Lable'
import Checkbox from '../atom/CheckBox'
import AdjustRoundedIcon from '@material-ui/icons/AdjustRounded';
import MilesStone from '../atom/MilesStone'
import Theme from '../../style/Theme'
function IssueLine(){
  return (
    <ListBody>
      <Checkbox/>
      <div>
        <IssueTitle>
          <AdjustRoundedIcon style={{ color: 'green' }}/>&nbsp;첫번째 이슈
          <Lable color={"red"} desc={"description"}/>
        </IssueTitle>
        <IssueDesc>
          #11 opened 2 days ago by skawnkk <MilesStone sizeType={Theme.size.sm}/>milestone
        </IssueDesc>
      </div>
    </ListBody>
  )
}

function IssueList() {
  
  return (
    <ListBox>
      <IssueListHead/>
      <IssueLine/>
    </ListBox>
  );
}
const IssueDesc = styled.div`
display: flex;
font-size: ${({theme})=>theme.size.sm}px;
padding-top:5px;`
const IssueTitle = styled.div`
display: flex;
align-items: center;
font-weight: 800;`
const ListBox = styled.div`
border: 1px solid ${({theme})=>theme.color.lineGrey};
border-radius: 16px;
div:not(:last-child) {
  border-bottom: none; 
}`
const ListBody = styled.div`
display: flex;
border-bottom: 1px solid ${({theme})=>theme.color.lineGrey};
padding: 10px`


export default IssueList