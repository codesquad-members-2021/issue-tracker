import React from 'react';
import styled from 'styled-components';

const Issue = {
  IssueCellStyle: styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid #d9dbe9;
    border-top: none;
    :last-child {
      border-radius: 0px 0px 16px 16px;
    }
  `,
  IssueTableHeaderStyle: styled.div`
    width: 100%;
    height: 64px;
    border-radius: 16px 16px 0px 0px;
    border: 1px solid #d9dbe9;
    background: #f7f7fc;
  `,
};

export { Issue };
