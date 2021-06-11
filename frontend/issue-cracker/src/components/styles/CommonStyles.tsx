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
    width: 100%;
    height: 64px;
    border-radius: 16px 16px 0px 0px;
    border: 1px solid #d9dbe9;
    background: #f7f7fc;
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

const Icon = {
  OpenIconActive: styled.div``,
  OpenIconDisabled: styled.div``,
  OpenIconLarge: styled.div``,
  OpenIconSmall: styled.div``,
  ClosedIconLarge: styled.div``,
  ClosedIconSmall: styled.div``,
};
export { Issue, ProfileImg };
