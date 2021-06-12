import React, { FC } from 'react';
import IssueOpenIcon from '../styles/svg/IssueOpenIcon';

interface Prop {
  type: string;
}

const OpenIconLarge = (): JSX.Element => (
  <IssueOpenIcon color="#007AFF" style={{ width: 24, height: 24 }} />
);
const OpenIconSmall = (): JSX.Element => (
  <IssueOpenIcon color="#222" style={{ width: 16, height: 16 }} />
);
const OpenIconDisabled = (): JSX.Element => (
  <IssueOpenIcon color="#6E7191" style={{ width: 16, height: 16 }} />
);
const OpenIconActive = (): JSX.Element => (
  <IssueOpenIcon
    color="#007AFF"
    style={{ width: 16, height: 16, fill: '#C7EBFF' }}
  />
);

const IssueOpenIconGroup: FC<Prop> = ({ type }: Prop) => {
  return {
    large: <OpenIconLarge />,
    small: <OpenIconSmall />,
    disabled: <OpenIconDisabled />,
    active: <OpenIconActive />,
  }[type] as JSX.Element;
};

export default IssueOpenIconGroup;
