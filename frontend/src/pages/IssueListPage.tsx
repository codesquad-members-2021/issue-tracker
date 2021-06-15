import {useState} from 'react';
import styled from 'styled-components';

import ResponsiveLayout from 'components/common/ResponsiveLayout';

const IssueListPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleFilterButtonClick = () => {
    if (isClicked) setIsClicked(false);
    else setIsClicked(true);
  }
  
  return (
    <IssueListLayout>
      <IssueListBlock>
        <h1> 이슈 </h1>
        
        <FilterHeaderLayer>
          <FilterHeaderBlock>
            <FilterDropdownButton onClick={handleFilterButtonClick}> 
              필터  
            </FilterDropdownButton>
            <FilterSearchInput />
          </FilterHeaderBlock>

          <FilterHeaderBlock>
            <FilterCategoryButton type={'left'}> 레이블 </FilterCategoryButton>
            <FilterCategoryButton type={'right'}> 마일스톤 </FilterCategoryButton>
            <IssueCreateButton> ﹢ 이슈 작성 </IssueCreateButton>
          </FilterHeaderBlock>
          
          <FilterDropDownLayer isClicked={isClicked}>
            <FilterDropdownHeader>이슈 필터</FilterDropdownHeader>
            <FilterDropdownUnorderedList>
              <FilterDropdownElement>
                열린 이슈 <FilterRadio type="radio" value="OPENED" name="issue=filter" />
              </FilterDropdownElement>
              <FilterDropdownElement>
                내가 작성한 이슈 <FilterRadio type="radio" value="WRITTEN" name="issue=filter" />
              </FilterDropdownElement>
              <FilterDropdownElement>
                나에게 할당된 이슈 <FilterRadio type="radio" value="ASSIGNED" name="issue=filter" />
              </FilterDropdownElement>
              <FilterDropdownElement>
                내가 댓글을 남긴 이슈 <FilterRadio type="radio" value="REPLIED" name="issue=filter" />
              </FilterDropdownElement>
              <FilterDropdownElement>
                닫힌 이슈 <FilterRadio type="radio" value="CLOSED" name="issue=filter" />
              </FilterDropdownElement>
            </FilterDropdownUnorderedList>
            </FilterDropDownLayer>
        </FilterHeaderLayer>

        
      </IssueListBlock>
    </IssueListLayout>
  )
}

const FilterDropdownButton = styled.button`
  padding: 0 30px;
  background: #F7F7FC;
  border: 1px solid #D9DBE9;
  border-radius: 11px 0px 0px 11px;
  
  flex-basis: 120px;
`;

const FilterCategoryButton = styled.button<any>`
  padding: 0 30px;
  background: #F7F7FC;
  border: 1px solid #D9DBE9;
  border-radius: ${({type}) => type === "left" ? '11px 0px 0px 11px' : '0px 11px 11px 0px'}; 
  
  flex-basis: 160px;
`;
const IssueCreateButton = styled.button`
  padding: 0 30px;
  margin-left: 15px;
  color: white;
  background-color: #007AFF;
  border: none;
  border-radius: 11px;
  
  flex-basis: 160px;
`;

const FilterSearchInput = styled.input`
  width: 100%;
  background: #EFF0F6;
  border: 1px solid #D9DBE9;
  border-radius: 0px 11px 11px 0px;
`;

const FilterRadio = styled.input``
const FilterDropdownUnorderedList = styled.ul``;
const FilterDropdownElement = styled.li`
  height: 44px;
  padding: 8px 16px;
  border: 1px solid #D9DBE9;
  background-color: #FEFEFE;

  margin: -1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FilterDropdownHeader = styled.header`
  height: 48px;
  padding: 8px 16px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterHeaderLayer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;
const FilterHeaderBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  & + & {
    margin-left: 15px;
  }
`

const FilterDropDownLayer = styled.div<any>`
  width: 240px;
  position: absolute;
  margin-top: 50px;
  
  display: ${({isClicked}) => isClicked ? "block" : "none" };
  background: #D9DBE9;
  border: 1px solid #D9DBE9;
  border-radius: 16px;

  ul {
    list-style-type: none;
    margin-block: 0;
    margin-inline: 0;
    padding-inline: 0;
  }
`;

const IssueListLayout = styled.div`
`;

const IssueListBlock = styled(ResponsiveLayout)`
  width: 100%;
  padding: 0 80px;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
`

export default IssueListPage;