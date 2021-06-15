import styled from 'styled-components';
import Logo from './Logo';
import UserMenu from './UserMenu';

import { TextHeader } from '../../util/reference';

const Header = () => {
  const { logo } = TextHeader;

  return (
    <HeaderLayout>
      <Logo>{logo}</Logo>
      <UserMenu /* username & profile 속성 넣기 */  />
    </HeaderLayout>
  );
};

export default Header;

// --- Styled Components ---
const HeaderLayout = styled.div`
  padding: 2.3rem 0;
  display: flex;
  justify-content: space-between;
`;
