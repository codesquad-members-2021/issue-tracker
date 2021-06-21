import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

interface PrimaryButtonType {
  value: string;
  className?: string;
  onClick?: () => void;
}

export default function PrimaryOutlinedButton({ value, className, onClick }: PrimaryButtonType) {
  return (
    <PrimaryButtonBlock onClick={onClick}>
      <Button variant='outlined' size='medium' color='primary' className={className}>
        {value}
      </Button>
    </PrimaryButtonBlock>
  );
}

const PrimaryButtonBlock = styled.div`
  padding-top: 1px;
  margin-left: 10px;
`;
