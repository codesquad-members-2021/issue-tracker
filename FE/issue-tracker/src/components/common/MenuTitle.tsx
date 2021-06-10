import styled from 'styled-components';

interface Props {
  children: string;
}

function MenuTitle({ children }: Props) {
  return (
    <MenuTitleWrap>
      <h3>{children}</h3>
    </MenuTitleWrap>
  );
}

export default MenuTitle;

const MenuTitleWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 6.4px 12.8px;
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.colors.gr_background};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gr_titleActive};
`;
