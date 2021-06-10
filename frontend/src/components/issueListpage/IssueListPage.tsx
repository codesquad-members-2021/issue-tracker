import { useEffect } from 'react'
import styled from 'styled-components'
import IssueList from './IssueList'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { getOpenIssues, issuesStorage, CountInfoStorage } from '../../hooks/store'
import RouterTab from '../atom/RouterTab'
import IssueFilterSection from './IssueFilter'
import IssuePlus from '../atom/IssuePlus'
function IssueListPage(){
  const setCountInfo = useSetRecoilState(CountInfoStorage)
  const setIssues = useSetRecoilState(issuesStorage)

  const asyncOpenIssues = useRecoilValue(getOpenIssues)//요청해서받은 오픈이슈
  const openIssueList = asyncOpenIssues?.issues
  setIssues(openIssueList)

  const countInfo = asyncOpenIssues?.count
  setCountInfo(countInfo)

  return (
      <Body>
        <Option>
          <IssueFilterSection/>
          <FlexBox>
            <RouterTab/>
            <IssuePlus/>
          </FlexBox>
        </Option>
        <IssueList/>
      </Body>
  )
}
const FlexBox = styled.div`
display: flex;
align-items: center;`
const Option = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 50px;
`
const Body = styled.div`
padding: 80px;
`

export default IssueListPage

