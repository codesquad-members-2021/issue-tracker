import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import styled from 'styled-components';

const ProgressBar = ({ ...props }) => {
  return (
    <PrimaryProgressBar {...props} />
  )
}

const PrimaryProgressBar = styled(LinearProgress)`
  height: 8px;
  border-radius: 10px;
  background:#EFF0F6;
  > div{
  background:#017AFF;
  }
`;
export default ProgressBar;
