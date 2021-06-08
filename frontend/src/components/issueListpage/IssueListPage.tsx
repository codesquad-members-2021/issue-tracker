import Header from '../header/Header'
import styled from 'styled-components'
import IssueList from './IssueList'
function IssueListPage(){

  return (
    <>
      <Header/>
      <Body>
        <IssueList/>
      </Body>
    </>
  )
}

const Body = styled.div`
padding: 80px;`

export default IssueListPage

