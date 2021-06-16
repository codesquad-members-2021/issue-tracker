import styled from 'styled-components';
import { MenuList, MenuOptionGroup, MenuItemOption } from '@chakra-ui/react';
import { modalStyle, modalTitleStyle, modalListStyle } from '../style';

function MilestoneModal() {
  return (
    <MenuList {...modalStyle}>
      <MenuOptionGroup {...modalTitleStyle} type="radio" title="마일스톤 추가">
        <MenuItemOption {...modalListStyle} value="DB설계">
          <ItemWrap>
            <span className="title">[BE] DB 설계</span>
            <span className="due_date">No due date</span>
          </ItemWrap>
        </MenuItemOption>
      </MenuOptionGroup>
    </MenuList>
  );
}

export default MilestoneModal;

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    color: ${({ theme }) => theme.colors.gr_titleActive};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: 4px;
  }
  .due_date {
    color: ${({ theme }) => theme.colors.gr_label};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
