import { useHistory, useParams } from 'react-router-dom';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

import { Button, Textarea } from '@chakra-ui/react';
import { ReactComponent as FileIcon } from '@assets/file.svg';

import type { Param } from '@pages/IssueDetail';
import { contentsInput } from '@components/newIssue/style';
import { fetchWithAuth } from '@utils/fetchWithAuth';
import { issueAPI } from '@const/var';

type Prop = {
  commentID: number;
  value: string;
  toggleState: Dispatch<SetStateAction<boolean>>;
  setCommentValue: Dispatch<SetStateAction<string>>;
};

function TextArea({ value, commentID, toggleState, setCommentValue }: Prop) {
  const { id }: Param = useParams();

  const handleOnChangeText = (e: ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setCommentValue(target.value);
  };

  const handleClickEditComplete = () => {
    const finishEdit = async () => {
      const url = `${issueAPI}/${id}/comments/${commentID}`;
      await fetchWithAuth(url, '이슈 내용 수정 오류', {
        method: 'PATCH',
        body: JSON.stringify({ description: `${value}` }),
      });
    };
    finishEdit();
    toggleState((state) => !state);
  };

  const handleClickEditCancel = () => toggleState((state) => !state);

  return (
    <>
      <Description>
        <Textarea
          value={value}
          onChange={handleOnChangeText}
          {...contentsInput}
          background="gr_offWhite"
        />
        <Span>띄어쓰기 포함 {value.length}자</Span>
        <ImageUploadWrap>
          <FileIcon />
          <span>파일 첨부하기</span>
        </ImageUploadWrap>
      </Description>
      <ButtonBox>
        <Button onClick={handleClickEditComplete} {...completeButton}>
          편집 완료
        </Button>
        <Button onClick={handleClickEditCancel} {...deleteButton}>
          편집 취소
        </Button>
      </ButtonBox>
    </>
  );
}

export default TextArea;

const Description = styled.div`
  margin-bottom: 12px;
  position: relative;
  background: ${({ theme }) => theme.colors.gr_offWhite};
  border-radius: 0 0 ${({ theme }) => theme.radii['2xl']}
    ${({ theme }) => theme.radii['2xl']};
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.bl_initial};
  }
`;

const Span = styled.div`
  right: 30px;
  bottom: 72px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.gr_label};
  position: absolute;
`;

const ImageUploadWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  height: 52px;
  color: ${({ theme }) => theme.colors.gr_label};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border-top: 1px dotted ${({ theme }) => theme.colors.gr_line};
  cursor: pointer;

  span {
    padding-left: 10px;
  }
`;

const btnStyle = {
  width: '120px',
  padding: '16px',
  fontSize: 'xs',
};

const completeButton = {
  ...btnStyle,
  background: 'bl_initial',
  colorScheme: 'blue',
  color: 'white',
};

const deleteButton = {
  ...btnStyle,
  marginRight: '16px',
  background: 'gr_offWhite',
  colorScheme: 'whiteAlpha',
  color: 'bl_initial',
  border: '1px',
  borderColor: 'bl_initial',
};

const ButtonBox = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: row-reverse;
`;
