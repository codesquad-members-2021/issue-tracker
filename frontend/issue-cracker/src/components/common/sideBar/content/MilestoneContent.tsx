import React from 'react';
import ProgressBar from '../../../common/ProgressBar';
import { Text as S } from '../../../styles/CommonStyles';

interface MilestoneDataProps {
  milestoneList: {
    id: number;
    title: string;
    description: string;
    due_date: string;
  }[];
}

const MilestoneContent = ({
  milestoneList,
}: MilestoneDataProps): JSX.Element => {
  return (
    <>
      <ProgressBar />

      <S.TextSmall>{milestoneList[0].title}</S.TextSmall>
    </>
  );
};

export default MilestoneContent;
