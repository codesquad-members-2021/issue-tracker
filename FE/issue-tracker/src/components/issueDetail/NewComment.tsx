import styled from 'styled-components';

import { Avatar } from '@chakra-ui/react';
import TextBox from '@components/newIssue/TextBox';

function NewComment() {
  return (
    <NewCommentContainer>
      <AvatarBox>
        <Avatar src="./janmang.jpeg" />
      </AvatarBox>
      <TextBox />
    </NewCommentContainer>
  );
}

export default NewComment;

const NewCommentContainer = styled.div`
  display: flex;
`;

const AvatarBox = styled.div``;
