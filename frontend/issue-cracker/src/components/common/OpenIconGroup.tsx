import React, { FC } from 'react';
import styled from 'styled-components';
import IssueOpenIcon from '../styles/svg/IssueOpenIcon';

interface Prop {
  type: string;
}

const OpenIconLabel = (): JSX.Element => (
  <IssueOpenIcon color="#007AFF" style={{ width: 16, height: 16 }} />
);
const OpenIconDefault = (): JSX.Element => (
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
    label: <OpenIconLabel />,
    default: <OpenIconDefault />,
    disabled: <OpenIconDisabled />,
    active: <OpenIconActive />,
  }[type] as JSX.Element;
};

export default IssueOpenIconGroup;
