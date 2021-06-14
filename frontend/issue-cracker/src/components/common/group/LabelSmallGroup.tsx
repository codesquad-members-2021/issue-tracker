import React from 'react';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';

interface Prop {
  color: string;
  label: string;
}

const LabelSmallGroup = ({ color, label }: Prop): JSX.Element => {
  return (
    <TabButton
      label={label}
      clickable
      style={{
        color: 'white',
        backgroundColor: `${color}`,
        width: 'fit-content',
        height: '28px',
      }}
    />
  );
};

export default LabelSmallGroup;

const TabButton = styled(Chip)``;
