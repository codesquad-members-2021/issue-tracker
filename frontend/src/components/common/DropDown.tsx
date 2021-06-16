import { useState } from 'react';
import styled from 'styled-components';

const DropDown = ({ info }) => {
  
  const [isClicked, setIsClicked] = useState(false);

  const handleDropDownButtonClick = () => {
    if (isClicked) setIsClicked(false);
    else setIsClicked(true);
  }

  return (
    <DropdownLayout alignment={info.alignment}>
      <DropdownButton onClick={handleDropDownButtonClick}> 
        {info.name}
      </DropdownButton>
      {isClicked && 
      
      <DropDownLayer isClicked={isClicked}>
        <DropdownHeader>{info.header}</DropdownHeader>
        <DropdownUnorderedList>
          {info.elements.map((element) => {
            return (
              <DropdownElement>
                {element.contents} <Radio type="radio" value={element.value} name={`dropdown-${info.name}`} />
              </DropdownElement>
            )
          })}
        </DropdownUnorderedList>
      </DropDownLayer>
      }
    </DropdownLayout>
  )
}

const DropdownLayout = styled.div<any>`
  display: flex;
  justify-content: ${({alignment}) => !alignment ? '': 'flex-end'};
`;
const DropdownButton = styled.button`
  padding: 0 30px;
  background: #F7F7FC;
  border: 1px solid #D9DBE9;
  border-radius: 11px 0px 0px 11px;
  
  flex-basis: 120px;
`;

const DropDownLayer = styled.div<any>`
  width: 240px;
  position: absolute;
  margin-top: 45px;
  
  /* background: #D9DBE9; */
  border: 1px solid #D9DBE9;
  border-radius: 16px;

  ul {
    list-style-type: none;
    margin-block: 0;
    margin-inline: 0;
    padding-inline: 0;
  }
`;

const DropdownHeader = styled.header`
  height: 48px;
  padding: 8px 16px;
  background-color: #D9DBE9;
  border-radius: 16px 16px 0 0;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DropdownUnorderedList = styled.ul``;
const DropdownElement = styled.li`
  height: 44px;
  padding: 8px 16px;
  /* border: 1px solid #D9DBE9; */
  border-radius: 0 0 16px 16px;
  background-color: #FEFEFE;

  /* margin: -1px; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    border-top: 1px solid #D9DBE9;
  }
`;

const Radio = styled.input``

export default DropDown;