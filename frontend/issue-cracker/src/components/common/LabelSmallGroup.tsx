import React from 'react';
import IssueOpenIcon from '../styles/svg/IssueOpenIcon';
import IssueClosedIcon from '../styles/svg/IssueClosedIcon';
import Chip from '@material-ui/core/Chip';

interface Prop {
  type: string;
}

const LabelSmallGroup = ({ type }: Prop): JSX.Element => {
  return {
    dark: <LabelDark />,
    light: <LabelLight />,
    line: <LabelLine />,
  }[type] as JSX.Element;
};

export default LabelSmallGroup;

const LabelDark = () => {
  return <Chip label="레이블 이름" clickable color="#6E7191" />;
};
const LabelLight = () => {
  return <Chip label="레이블 이름" clickable color="#EFF0F6" />;
};
const LabelLine = () => {
  return <Chip label="작성자" clickable color="#A0A3BD" variant="outlined" />;
};
