import styled from 'styled-components';
import { IHeaderUser } from '.';
import { cssDefault, cssImageAuto } from '../../util/styles/CommonStyledCSS';

const UserMenu = ({ username, profileImage, ...props }: IHeaderUser) => {
  return (
    <UserMenuButton {...props}>
      <img src={profileImage || './image/profile.png'} alt={username || ''} />
    </UserMenuButton>
  );
};

export default UserMenu;

// --- Styled Components ---
const UserMenuButton = styled.button`
  ${cssDefault};
  ${cssImageAuto};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.grayScale.placeHolder};
  }

  img {
    max-width: ${({ theme }) => theme.fontSize.XL};
  }
`;
