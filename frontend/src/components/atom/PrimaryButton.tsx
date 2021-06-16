import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

interface PrimaryButtonType {
  value: string;
}

export default function PrimaryButton({ value }: PrimaryButtonType) {
  return (
    <PrimaryButtonBlock>
      <Button variant='contained' size='medium' color='primary'>
        {value}
      </Button>
    </PrimaryButtonBlock>
  );
}

const PrimaryButtonBlock = styled.div`
  padding-top: 1px;
  margin-left: 10px;
`;
