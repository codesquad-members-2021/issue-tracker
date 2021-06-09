import styled from 'styled-components'
import IssueList from './IssueList'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { getOpenIssues, openIssuesStorage, CountInfoStorage } from '../../hooks/store'
import RouterTab from '../atom/RouterTab'

function IssueListPage(){
  const setCountInfo = useSetRecoilState(CountInfoStorage)
  const setOpenIssues = useSetRecoilState(openIssuesStorage)
  const asyncOpenIssues = useRecoilValue(getOpenIssues)//요청해서받은 오픈이슈
  const openIssueList = asyncOpenIssues?.issues
  setOpenIssues(openIssueList)

  const countInfo = asyncOpenIssues?.count
  setCountInfo(countInfo)

  return (
      <Body>
        <RouterTab/>
        <IssueList/>
      </Body>
  )
}

const Body = styled.div`
padding: 80px;`

export default IssueListPage

