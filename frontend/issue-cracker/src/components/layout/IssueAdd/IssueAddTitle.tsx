import React from 'react';
import TextGroup from '../../common/group/TextGroup';
import { TYPE as T } from '../../../utils/const';
const IssueAddTitle = (): JSX.Element => {
  return <TextGroup type={T.LARGE} content="새로운 이슈 작성" color="#222" />;
};

export default IssueAddTitle;
