import React from 'react';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';

interface Prop {
  color: string;
  backgroundColor: string;
  label: string;
}

const LabelSmallGroup = ({
  color,
  backgroundColor,
  label,
}: Prop): JSX.Element => {
  return (
    <TabButton
      label={label}
      clickable
      style={{
        color: `${color}`,
        backgroundColor: `${backgroundColor}`,
        width: 'fit-content',
        height: '28px',
        border: `1px solid ${color}`,
      }}
    />
  );
};

export default LabelSmallGroup;

const TabButton = styled(Chip)``;
