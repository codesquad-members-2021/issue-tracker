import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

interface Props {}

export default function Copyright({}: Props): ReactElement {
  return (
    <CopyrightBlock>
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}
        <Link color='inherit' href='https://material-ui.com/'>
          Issue Tracker
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </CopyrightBlock>
  );
}

const CopyrightBlock = styled.div``;
