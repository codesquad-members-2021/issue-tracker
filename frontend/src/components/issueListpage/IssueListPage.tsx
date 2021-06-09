import styled from 'styled-components'
import IssueList from './IssueList'
import { useRecoilValue } from 'recoil'
import { getOpenIssues } from '../../hooks/store'

function IssueListPage(){
  const openIssues = useRecoilValue(getOpenIssues)
  console.log(openIssues)

  return (

      <Body>
        <IssueList/>
      </Body>

  )
}

const Body = styled.div`
padding: 80px;`

export default IssueListPage

