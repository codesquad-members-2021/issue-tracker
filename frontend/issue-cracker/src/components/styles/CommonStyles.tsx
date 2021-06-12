import React from 'react';
import styled from 'styled-components';

const Issue = {
  IssueCell: styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid #d9dbe9;
    border-top: none;
    :last-child {
      border-radius: 0px 0px 16px 16px;
    }
  `,
  IssueTableHeader: styled.div`
    display: flex;
    width: 100%;
    height: 64px;
    border-radius: 16px 16px 0px 0px;
    border: 1px solid #d9dbe9;
    background: #f7f7fc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0px;
    margin-top: 10px;
    padding-right: 24px;
  `,

  IssueTableHeaderLeft: styled.div`
    display: flex;
    align-items: center;
  `,
  IssueTableHeaderRight: styled.div`
    display: flex;
    align-items: center;
  `,
};

const ProfileImg = {
  ProfileImgLarge: styled.img`
    width: 30px;
    height: 30px;
    border-radius: 70%;
  `,
  ProfileImgSmall: styled.img`
    width: 20px;
    height: 20px;
    border-radius: 70%;
  `,
};

const TextDefault = styled.div`
  font-weight: 500;
`;

const Text = {
  TextLarge: styled(TextDefault)`
    font-size: 24px;
    line-height: 40px;
    color: ${({ color }) => `${color}`};
  `,

  TextMedium: styled(TextDefault)`
    font-size: 18px;
    line-height: 32px;
    color: ${({ color }) => `${color}`};
  `,
  TextSmall: styled(TextDefault)`
    font-size: 16px;
    line-height: 28px;
    color: ${({ color }) => `${color}`};
  `,
  TextXSmall: styled(TextDefault)`
    font-size: 12px;
    line-height: 20px;
    color: ${({ color }) => `${color}`};
  `,
};

export { Issue, ProfileImg, Text };
