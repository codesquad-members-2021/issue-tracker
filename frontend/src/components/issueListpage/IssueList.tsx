import { useState } from 'react'
import styled from 'styled-components'
import IssueListHead from './IssueListHead'
import Lable from '../atom/Lable'
import Checkbox from '../atom/CheckBox'
import AdjustRoundedIcon from '@material-ui/icons/AdjustRounded';
import MilesStone from '../atom/MilesStone'
import { useRecoilValue } from 'recoil';
import { issuesStorage } from '../../hooks/store'
import timeChecker from '../../hooks/timeChecker'

interface IssueLineProps{
  issue: IssuesType
}
type LabelsProp = { 
  id: number; 
  name: string; 
  colorCode: string; 
  description: string; 
  checked: boolean; 
}
interface IssuesType {
  assignees: string[]
  author: string 
  comment: string
  commentNumber: number 
  createdDateTime: string
  id: number  
  labels: LabelsProp[]
  milestone: string
  title: string
 }

function IssueLine({issue}:IssueLineProps){
  const {id, assignees, author, comment, commentNumber, createdDateTime, labels, milestone, title} = issue
  const time = new Date().valueOf() - new Date(createdDateTime).valueOf()

  return (
    <ListBody>
      <Checkbox/>
      <div>
        <IssueTitle>
          <AdjustRoundedIcon style={{ color: 'green' }}/>&nbsp;{title}
          {labels.map((label,idx)=><Lable key={'label'+idx} color={label.colorCode} desc={label.name}/>)}
        </IssueTitle>
        <IssueDesc>
          #{id} opened {timeChecker(time)} by {author} <MilesStone/>{milestone}
        </IssueDesc>
      </div>
    </ListBody>
  )
}



function IssueList() {
  const openIssues:IssuesType[] = useRecoilValue(issuesStorage)

  return (
    <ListBox>
      <IssueListHead/>
      {openIssues.map((issue,idx)=><IssueLine key={'issue'+idx} issue={issue}/>)}
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
min-width: 680px;
border-radius: 16px;
border: 1px solid ${({theme})=>theme.color.lineGrey};
}`
const ListBody = styled.div`
display: flex;
border-top: 1px solid ${({theme})=>theme.color.lineGrey};
padding: 10px
`


export default IssueList