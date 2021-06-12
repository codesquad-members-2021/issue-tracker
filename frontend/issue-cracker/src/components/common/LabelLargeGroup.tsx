import React from 'react';
import styled from 'styled-components';
import IssueClosedIcon from '../styles/svg/IssueClosedIcon';
import Chip from '@material-ui/core/Chip';
import OpenIconGroup from '../common/OpenIconGroup';

interface Prop {
  type: string;
}

const LabelLargeGroup = ({ type }: Prop): JSX.Element => {
  return {
    open: <IssueLabelOpen />,
    closed: <IssueLabelClosed />,
  }[type] as JSX.Element;
};

export default LabelLargeGroup;

const IssueLabelOpen = () => {
  // const handleClick = () => {
  //   console.info('You clicked the Chip.');
  // };

  return (
    <IssueLabelStyle>
      <CustomOpenChip
        avatar={<OpenIconGroup type={'large'} />}
        label="열린 이슈"
        color="primary"
        variant="outlined"
      />
    </IssueLabelStyle>
  );
};
const IssueLabelClosed = () => {
  // const handleClick = () => {
  //   console.info('You clicked the Chip.');
  // };

  return (
    <IssueLabelStyle>
      <CustomClosedChip
        avatar={
          <IssueClosedIcon color="#0025E7" style={{ width: 16, height: 16 }} />
        }
        label="닫힌 이슈"
        color="secondary"
        variant="outlined"
      />
    </IssueLabelStyle>
  );
};

const CustomChip = styled(Chip)`
  width: 100px;
  height: 40px;
  border-radius: 30px;
  font-size: 12px;
`;

const CustomOpenChip = styled(CustomChip)`
  background: #c7ebff;
  color: #007aff;
  border: 1px solid #007aff;
`;

const CustomClosedChip = styled(CustomChip)`
  background: #ccd4ff;
  color: #0025e7;
  border: 1px solid #0025e7;
`;

const IssueLabelStyle = styled.div`
  width: fit-content;

  span {
    padding: 0;
    margin-left: 5px;
    text-align: right;
  }
`;
