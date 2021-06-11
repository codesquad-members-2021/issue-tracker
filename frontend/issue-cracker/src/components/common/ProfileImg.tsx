import React from 'react';
import styled from 'styled-components';

interface ProfileImgProps {
  src: string;
  style: any;
}

const ProfileImg = ({ src, style }: ProfileImgProps): JSX.Element => {
  return <ProfileImgStyle {...{ src, style }}></ProfileImgStyle>;
};

export default ProfileImg;

const ProfileImgStyle = styled.img`
  width: ${({ style }) => `${style?.width}px`};
  height: ${({ style }) => `${style?.height}px`};
  border-radius: 70%;
  /* object-fit: contain; */
`;
