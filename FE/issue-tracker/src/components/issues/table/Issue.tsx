import styled from 'styled-components';

import { Avatar } from '@chakra-ui/avatar';
import Label from '@components/common/Label';

function Issue() {
  return (
    <IssueWrap>
      <IssueContainer>
        <StyledDiv>
          <CheckBox type="checkbox" name="issueCheckBox" />
          <IssueTitle>
            <h2>이것은 제목입니다.</h2>
            <Label name="documentaion" colorCode="#1a1818" fontLight={true} />
          </IssueTitle>
        </StyledDiv>
        <Description>
          <span>#이슈번호</span>
          <span>작성자 및 타임스탬프</span>
          <span>마일스톤</span>
        </Description>
      </IssueContainer>
      <AvatarContainer>
        <NoticeTag>
          <Avatar className="avatar" size="sm" src="./janmang.jpeg" />
          <Avatar className="avatar" size="sm" src="./janmang.jpeg" />
          <Avatar className="avatar" size="sm" src="./janmang.jpeg" />
        </NoticeTag>
        <NoticeTag>
          <Label name="documentaion" colorCode="#1a1818" fontLight={true} />
        </NoticeTag>
        <NoticeTag>
          <Label name="documentaion" colorCode="#1a1818" fontLight={true} />
        </NoticeTag>
        <NoticeTag>
          <Avatar className="avatar" size="sm" src="./janmang.jpeg" />
        </NoticeTag>
      </AvatarContainer>
    </IssueWrap>
  );
}

export default Issue;

const IssueWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.gr_offWhite};
`;

const IssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 878;
  height: 100px;
  padding: 16px 0 16px 32px;
  position: relative;
`;

const AvatarContainer = styled.div`
  display: flex;
  margin-right: 30px;
  width: 448px;
  justify-content: space-evenly;
`;

const NoticeTag = styled.div`
  width: auto;
`;

const IssueTitle = styled.div`
  display: flex;
  align-items: center;
  height: 32px;

  h2 {
    margin: 0 8px 0 24px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const CheckBox = styled.input`
  width: 16px;
  height: 16px;
`;

const Description = styled.div`
  margin: 8px 0 0 40px;
  display: flex;

  span {
    padding-right: 16px;
    color: ${({ theme }) => theme.colors.gr_label};
  }
`;

// const Label = styled.div`
//   ${({ theme }) => theme.flexCenter};
//   padding: 4px 16px;
//   font-size: ${({ theme }) => theme.fontSizes.xs};
//   background: ${({ theme }) => theme.colors.bl_initial};
//   border-radius: 30px;
//   cursor: pointer;
// `;
