import { useState, useEffect } from 'react';
import styled from 'styled-components';

import DropDown from 'components/common/DropDown';
// import ArrowIcon from 'components/common/icons/ArrowIcon';

import Label from 'components/common/Label';

import API from 'lib/API/API';

const IssueList = () => {
  const [issues, setIssues] = useState<any>([]);
  const [filterInfo, setFilterInfo] = useState<any>({});

  useEffect(() => {
    const fetchIssues = async () => {
      const result = await API.get.issues("is open");
      console.log("fetchIssues", result)
      setIssues(result.issueList);
    }
    fetchIssues();


    const fetchFilterMockData = async () => {
      const response = await fetch('/mockData.json');
      const result = await response.json();
      setFilterInfo(result[window.location.pathname]);
    }
    fetchFilterMockData();
    
  }, [])

  if (issues.length === 0 || Object.keys(filterInfo).length === 0) return <></>;
  return (
    <IssueListLayout>
      <IssueListHeader>
        <IssueListCheckBoxLayer>
          <input type="checkbox" />
        </IssueListCheckBoxLayer>
        <IssueListButtonGroupLayer>
          <button> 열린 이슈 </button>
          <button> 닫힌 이슈 </button>
        </IssueListButtonGroupLayer>
        <IssueListFilterGroupLayer>
          <DropDown info={filterInfo["IssueManagerFilterInfo"]} />
          <DropDown info={filterInfo["IssueLabelFilterInfo"]} />
          <DropDown info={filterInfo["IssueMilestoneFilterInfo"]} />
          <DropDown info={filterInfo["IssueAuthorFilterInfo"]} />
        </IssueListFilterGroupLayer>
      </IssueListHeader>

      {/* for test */}
      {Array(3).fill(true).map((_, i) => {
        return (
          <IssueListContents key={`test-${i}`}>
            <IssueListCheckBoxLayer>
              <input type="checkbox" />
            </IssueListCheckBoxLayer>
            <IssueListDetailInfomationLayer>
              <DetailInformationTitleArea>
                <DetailInformationTitle> 이슈 제목 </DetailInformationTitle>
                <Label type={"DEFAULT"} value={"레이블 이름"} />
              </DetailInformationTitleArea>
              <DetailInformationContents># 이슈 번호 ... </DetailInformationContents>
            </IssueListDetailInfomationLayer>
            <IssueListProfileLayer>
              profile img
            </IssueListProfileLayer>
          </IssueListContents>
        )
      })}
      {
        issues.map((issue, i) => {
          return (
            <IssueListContents key={`issue-${i}`}>
            <IssueListCheckBoxLayer>
              <input type="checkbox" />
            </IssueListCheckBoxLayer>
            <IssueListDetailInfomationLayer>
              <DetailInformationTitleArea>
                <DetailInformationTitle> {issue.issueDTO.issueInfo.title} </DetailInformationTitle>
                <Label type={"DEFAULT"} value={"레이블 이름"} />
              </DetailInformationTitleArea>
              <DetailInformationContents>#{issue.issueDTO.issueInfo.issueId} </DetailInformationContents>
            </IssueListDetailInfomationLayer>
            <IssueListProfileLayer>
              <ProfileImg src={issue.issueDTO.userDTO.profileImage} />
            </IssueListProfileLayer>
          </IssueListContents>
          )
        })
      }
    </IssueListLayout>
  )
}

const IssueListLayout = styled.div`
  width: 100%;
  border: 1px solid #D9DBE9;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  
  & > div:last-child {
    border-radius: 0 0 16px 16px;
  }
`;

const IssueListHeader = styled.div`
  width: 100%;
  background: #F7F7FC;
  
  padding: 16px 32px;
  border-radius: 16px 16px 0px 0px;
  border-bottom: 1px solid #D9DBE9;
  box-sizing: border-box;

  display: flex;
`;

const IssueListContents = styled.div`
  width: 100%;
  background-color: white;
  
  padding: 16px 32px;
  box-sizing: border-box;
  
  display: flex;

  & + & {
    border-top: 1px solid #D9DBE9;
  } 
  
`;

const IssueListLayer = styled.div`
  display: flex;
`;
const IssueListCheckBoxLayer = styled(IssueListLayer)`
  margin-right: 30px;
  align-items: center;
`;
const IssueListButtonGroupLayer = styled(IssueListLayer)`
  
`;
const IssueListFilterGroupLayer = styled(IssueListLayer)`
  margin-left: auto;
`;

const IssueListDetailInfomationLayer = styled(IssueListLayer)`
  flex-direction: column;
  width: 100%;
`

const DetailInformationTitle = styled.span`
  font-weight: 700;
  font-size: 1.89rem;
  margin-right: 10px;
`;

const DetailInformationTitleArea = styled(IssueListLayer)`
  margin-top: 10px;
`

const DetailInformationContents = styled(IssueListLayer)`
  margin-top: 10px;
`;

const IssueListProfileLayer = styled(IssueListLayer)`
  margin-left: auto;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export default IssueList;