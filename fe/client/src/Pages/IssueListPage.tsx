import React from 'react'
import styled from 'styled-components';
import HeadContent from '@components/issueList/HeadContent';
import { ListWrapper } from '@components/common/baseStyle/baseStyle';
import ListHeader from '@components/issueList/ListHeader';
import ListItem from './../components/issueList/ListItem';

const issueItems = [{ id: 1 }, { id: 3 }, { id: 56 }, { id: 12 }];
const IssueListPage = () => {
  return (
    <>
      <HeadContent />
      <ListWrapper wrapWidth="100%">
        <ListHeader {...{ issueItems }} />
        {issueItems.map(({ id }, idx) => {
          return <ListItem key={`issueListItem-${idx}`} {...{ id }} />
        })}
      </ListWrapper>
    </>
  )
}


export default IssueListPage;
