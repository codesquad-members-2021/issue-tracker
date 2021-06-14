import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

const AuthorAvatar = ({
  size,
  profileImg,
  name,
}: {
  size: 'L' | 'S';
  name: string;
  profileImg?: string | undefined;
}) => {
  return (
    <CustomAvatar alt={name} aria-controls={size} src={profileImg}>
      {profileImg ? null : name[0].toUpperCase()}
    </CustomAvatar>
  );
};

export default AuthorAvatar;

const CustomAvatar = styled(Avatar)`
  color: ${({ theme }) => theme.color.grayscale.line};
  font-weight: 700;
  background-color: ${({ theme }) => theme.color.grayscale.label};
  border: 3px solid ${({ theme }) => theme.color.grayscale.line};

  &[aria-controls='S'] {
    width: 20px;
    height: 20px;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
