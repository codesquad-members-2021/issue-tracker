import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

const AuthorAvatar = ({
  size,
  profileImg,
}: {
  size: 'L' | 'S';
  profileImg?: string | undefined;
}) => {
  return <CustomAvatar aria-controls={size} src={profileImg} />;
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
