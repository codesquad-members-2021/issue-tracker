import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import IssueClosedIcon from '../../styles/svg/IssueClosedIcon';
import TextGroup from '../../common/group/TextGroup';
import LabelLargeGroup from '../../common/group/LabelLargeGroup';
import { TYPE as T } from '../../../utils/const';

const IssueDetailTitle = ({
  title,
  isOpen,
}: {
  title: string;
  isOpen: boolean;
}): JSX.Element => {
  const [issueState, setIssueState] = useState(isOpen);
  const handleClickIssueButton = () => setIssueState(false);

  return (
    <IssueDetailTitleStyle>
      <TitleUpperBox>
        <TextBox>
          <TextGroup type={T.LARGE} content={title} color="#222" />
          <TextGroup type={T.LARGE} content={`#1`} color="#6E7191" />
        </TextBox>
        <ButtonBox>
          <TitleEditButton startIcon={<TitleEditIcon />} color="primary">
            <TextGroup type={T.SMALL} content={'제목 편집'} color="#007AFF" />
          </TitleEditButton>
          <TitleEditButton
            onClick={handleClickIssueButton}
            startIcon={
              <IssueClosedIcon
                color="#007AFF"
                style={{ width: 16, height: 16 }}
              />
            }
            color="primary"
          >
            <TextGroup type={T.SMALL} content={'이슈 닫기'} color="#007AFF" />
          </TitleEditButton>
        </ButtonBox>
      </TitleUpperBox>
      <TitleLowerBox>
        <ButtonBox>
          {issueState ? (
            <LabelLargeGroup type="open" />
          ) : (
            <LabelLargeGroup type="closed" />
          )}
        </ButtonBox>
        <TextBox>
          {issueState ? (
            <TextGroup
              type="small"
              content={`이 이슈가 date분 전에 writer님에 의해 열렸습니다 ∙ 코멘트 1개`}
              color="#6E7191"
            />
          ) : (
            <TextGroup
              type="small"
              content={`이 이슈가 date분 전에 writer님에 의해 닫혔습니다 ∙ 코멘트 1개`}
              color="#6E7191"
            />
          )}
        </TextBox>
      </TitleLowerBox>
    </IssueDetailTitleStyle>
  );
};

export default IssueDetailTitle;

const IssueDetailTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleUpperBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TitleLowerBox = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;

  div {
    :last-child {
      margin-left: 5px;
    }
  }
`;

const ButtonBox = styled.div`
  margin-right: 10px;
`;

const TitleEditButton = styled(Button)`
  width: 120px;
  height: 40px;
  margin: 5px;
  border: 1px solid #007aff;
  border-radius: 16px;
`;

const TitleEditIcon = styled(EditIcon)`
  font-size: 10px;
  color: #007aff;
`;
