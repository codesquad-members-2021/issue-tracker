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
  background-image: ${props => {
    if (props.imageURL) return `url(${props.imageURL})`;
  }};
  background-size: contain;
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  box-sizing: border-box;
`;

export default User;
