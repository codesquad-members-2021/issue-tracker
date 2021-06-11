import React from 'react';
import styled from 'styled-components';

interface ProfileImgProps {
  src: string;
  size: string;
}
const ProfileImg = ({ src, size }: ProfileImgProps): JSX.Element => {
  return <ProfileImgStyle {...{ src, size }}></ProfileImgStyle>;
};

export default ProfileImg;

const ProfileImgStyle = styled.img`
  height: 30px;
  border-radius: 70%;
  /* object-fit: contain; */
`;
