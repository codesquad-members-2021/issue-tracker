import React, { FC } from 'react';
import IssueClosedIcon from '../../styles/svg/IssueClosedIcon';

interface Prop {
  type: string;
}

const ClosedIconLarge = (): JSX.Element => (
  <IssueClosedIcon color="#007AFF" style={{ width: 16, height: 16 }} />
);
const ClosedIconSmall = (): JSX.Element => (
  <IssueClosedIcon color="#222" style={{ width: 16, height: 16 }} />
);
const ClosedIconDisabled = (): JSX.Element => (
  <IssueClosedIcon color="#6E7191" style={{ width: 16, height: 16 }} />
);
const ClosedIconActive = (): JSX.Element => (
  <IssueClosedIcon
    color="#007AFF"
    style={{ width: 16, height: 16, fill: '#C7EBFF' }}
  />
);

const IssueClosedIconGroup: FC<Prop> = ({ type }: Prop) => {
  return {
    label: <ClosedIconLarge />,
    default: <ClosedIconSmall />,
    disabled: <ClosedIconDisabled />,
    active: <ClosedIconActive />,
  }[type] as JSX.Element;
};

export default IssueClosedIconGroup;
