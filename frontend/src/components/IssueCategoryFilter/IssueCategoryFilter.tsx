import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DropDown from 'components/common/DropDown';
import ArrowIcon from 'components/common/icons/ArrowIcon';

const IssueCategoryFilter = () => {
  const [isClicked, setIsClicked] = useState(false);
  const IssueCategoryFilterInfo = {
    name: "필터",
    header: "이슈 필터",
    icon: ArrowIcon,
    elements: [
      {contents: "열린 이슈", value: "OPENED"},
      {contents: "내가 작성한 이슈", value: "WRITTEN"},
      {contents: "나에게 할당된 이슈", value: "ASSIGNED"},
      {contents: "내가 댓글을 남긴 이슈", value: "REPLIED"},
      {contents: "닫힌 이슈", value: "CLOSED"},
    ]
  }

  const handleFilterButtonClick = () => {
    if (isClicked) setIsClicked(false);
    else setIsClicked(true);
  }

  return (
    <FilterHeaderLayer>
      <FilterHeaderBlock>
        
        {/* <FilterDropdownButton onClick={handleFilterButtonClick}> 필터 </FilterDropdownButton> */}
        <DropDown info={IssueCategoryFilterInfo} />
        
        <FilterSearchInput />
      </FilterHeaderBlock>

      <FilterHeaderBlock>
        <FilterCategoryButton type={'left'}> 레이블 </FilterCategoryButton>
        <FilterCategoryButton type={'right'}> 마일스톤 </FilterCategoryButton>
        
        <Link to="/"> <IssueCreateButton> ﹢ 이슈 작성 </IssueCreateButton> </Link>
      </FilterHeaderBlock>
    </FilterHeaderLayer>
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
  height: 100%;
  color: white;
  background-color: #007AFF;
  white-space: nowrap;

  padding: 0 30px;
  margin-left: 15px;
  
  border: none;
  border-radius: 11px;
  
  flex-basis: 160px;
`;

const FilterSearchInput = styled.input`
  background: #EFF0F6;
  border: 1px solid #D9DBE9;
  border-radius: 0 11px 11px 0;

  flex-grow: 1;
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
  justify-content: flex-end;

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

export default IssueCategoryFilter;