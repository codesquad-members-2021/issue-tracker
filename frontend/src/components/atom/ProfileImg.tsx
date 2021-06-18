import React, { ReactElement } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

interface Props {
  avatarURL?: string | null;
  isSmall?: boolean;
  className?: string;
}

export default function ProfileImg({ avatarURL, isSmall = false, className }: Props): ReactElement {
  const classes = useStyles();
  const avatarSize = isSmall ? classes.small : classes.large;
  avatarURL = avatarURL
    ? avatarURL
    : 'https://images.velog.io/images/proshy/post/ec1766b5-f4f7-4a37-949c-a771b55f32f6/KakaoTalk_20210614_171732005.jpg';
  return (
    <ProfileImgBlock>
      <Avatar
        alt='avatarImg'
        src={avatarURL}
        className={`${avatarSize} avatar__img ${className}`}
      />
    </ProfileImgBlock>
  );
}

const ProfileImgBlock = styled.div`
  .avatar__img {
    border: 1px solid #d9dbe9;
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
  })
);
