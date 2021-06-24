import { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';

import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/button';
import { ReactComponent as CancelIcon } from '@assets/cancel.svg';
import { baseURL } from '@const/var';
import { fetchWithAuth } from '@utils/fetchWithAuth';
import {
  isInputtedTitleAtom,
  isClickedCompleteBtnAtom,
  newIssueContentsAtom,
} from '@store/atoms/newIssue';
import { getNewIssueBody } from '@store/selectors/newIssue';

function ButtonBox() {
  const isInputtedTitle = useRecoilValue(isInputtedTitleAtom);
  const newIssueContents = useRecoilValue(newIssueContentsAtom);
  const newIssueHeaderBody = useRecoilValue(getNewIssueBody);
  const [isClickedCompleteBtn, setIsClickedCompleteBtn] = useRecoilState(
    isClickedCompleteBtnAtom
  );
  const history = useHistory();

  const handleClickComplete = () => setIsClickedCompleteBtn(true);

  useEffect(() => {
    if (!isClickedCompleteBtn) return;
    const header = newIssueHeaderBody;
    const postIssue = async () => {
      try {
        await fetchWithAuth(`${baseURL}/issues`, '🤯이슈 생성 에러', header);
        setIsClickedCompleteBtn(false);
        history.push('/issues');
      } catch (error) {
        console.error(error);
      }
    };
    postIssue();
  }, [newIssueContents]);

  return (
    <ButtonBoxWrap>
      <Link to="/issues">
        <CancelBtn>
          <CancelIcon className="cancel_icon" />
          <span>작성취소</span>
        </CancelBtn>
      </Link>
      {isInputtedTitle ? (
        <Button {...CompleteBtnStyle} onClick={handleClickComplete}>
          완료
        </Button>
      ) : (
        <Button {...CompleteBtnStyle} opacity=".4" isDisabled>
          완료
        </Button>
      )}
    </ButtonBoxWrap>
  );
}

export default ButtonBox;

const CompleteBtnStyle = {
  width: '240px',
  height: '56px',
  colorScheme: 'blue',
  background: 'bl_initial',
  borderRadius: '20px',
};

const ButtonBoxWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const CancelBtn = styled.button`
  margin-right: 32px;
  width: 83px;
  height: 32px;
  display: flex;
  align-items: center;
  .cancel_icon {
    margin-right: 5px;
    path {
      stroke: ${({ theme }) => theme.colors.gr_label};
    }
  }
  span {
    color: ${({ theme }) => theme.colors.gr_label};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;
