import React from 'react';
import styled from 'styled-components';

interface Props {
  imageURL?: string;
}

const User = (props: Props) => {
  return <UserWrapper imageURL={props.imageURL} />;
};

const UserWrapper = styled.div<{ imageURL?: string | undefined }>`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-image: ${props =>
    props.imageURL
      ? `url(${props.imageURL})`
      : `url('https://avatars.githubusercontent.com/u/46085281?s=400&u=5eb6eef34df137b4e1a8c4f5802c43b9e14b5ed5&v=4')`};
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  box-sizing: border-box;
`;

export default User;
