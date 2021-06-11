import React from 'react';
import IssueOpenIcon from '../styles/svg/IssueOpenIcon';
import IssueClosedIcon from '../styles/svg/IssueClosedIcon';
import Chip from '@material-ui/core/Chip';

interface Prop {
  type: string;
}

const IssueLabelGroup = ({ type }: Prop): JSX.Element => {
  return {
    open: <IssueLabelOpen />,
    closed: <IssueLabelClosed />,
  }[type] as JSX.Element;
};

export default IssueLabelGroup;

const IssueLabelOpen = () => {
  // const handleClick = () => {
  //   console.info('You clicked the Chip.');
  // };

  return (
    <Chip
      avatar={<IssueOpenIcon color="#3f51b5" fontSize={24} />}
      label="열린 이슈"
      clickable
      color="primary"
      variant="outlined"
    />
  );
};
const IssueLabelClosed = () => {
  // const handleClick = () => {
  //   console.info('You clicked the Chip.');
  // };

  return (
    <Chip
      avatar={<IssueClosedIcon color="#f50057" fontSize={24} />}
      label="닫힌 이슈"
      clickable
      color="secondary"
      variant="outlined"
    />
  );
};
