import styled from 'styled-components';
import { FaPlus, FaTimes } from 'react-icons/fa';
import PrimaryButton from '../components/Common/PrimaryButton';
import { Link } from 'react-router-dom';

const IssueWritePage = () => {
  return (
    <>
      <StyleIssueWriteHeader>
        <h2>새로운 이슈 작성</h2>
      </StyleIssueWriteHeader>
      <StyleIssueWriteBody>
        <StyleAvatar src="https://user-images.githubusercontent.com/45394360/121624276-322e1a80-caac-11eb-910f-a59d81908db8.png">
        </StyleAvatar>
        <StyleIssueWrite>
          <input type="text" placeholder="제목"/>
          <div>
            <textarea/>
            <span>코멘트를 입력하세요</span>
          </div>
        </StyleIssueWrite>
        <StyleIssueWriteSide>
          <li>
            <p>담당자</p>
            <button><FaPlus/></button>
          </li>
          <li>
            <p>레이블</p>
            <button><FaPlus/></button>
          </li>
          <li>
            <p>마일스톤</p>
            <button><FaPlus/></button>
          </li>
        </StyleIssueWriteSide>
      </StyleIssueWriteBody>
      <StyleIssueWriteFooter>
        <Link to="/issues">
          <span><FaTimes /></span>
          <span>작성 취소</span>
        </Link>
        <StyleWriteButton>완료</StyleWriteButton>
      </StyleIssueWriteFooter>
    </>
  );
}

const StyleIssueWriteHeader = styled.div`
  margin-top: 4rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }
`;

const StyleIssueWriteBody = styled.div`
  display: grid;
  grid-template-columns: 2.75rem 4.4fr 1.5fr;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.line};
`;

const StyleIssueWriteFooter = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${({ theme }) => theme.colors.grayScale.label};
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    cursor: pointer;
    text-decoration: none;
    span:first-child {
      vertical-align: middle;
      margin-right: 0.5rem;
    }
  }
`;

const StyleAvatar = styled.img`
  width: 100%;
`;

const StyleIssueWrite = styled.div`
  padding: 0 1rem;
  div {
    position: relative;
  }
  input {
    background-color: #EFF0F6;
    font-size: 1rem;
    color: #333;
    padding: 0.875rem 1.5rem;
    border-radius: 1rem;
    width: 100%;
    margin-bottom: 1rem;
    border-color: transparent;
    font-weight: 400;
    &::placeholder {
      color: #A0A3BD;
    }
  }
  textarea {
    padding: 0.875rem 1.5rem;
    padding-top: 2.5rem;
    background-color: #EFF0F6;
    margin-bottom: 2rem;
    font-size: 1rem;
    border-radius: 1rem;
    min-height: 16rem;
    width: 100%;
    resize: vertical;
    border: none;
    position: relative;
    &:focus {
      background-color: #fff;
      box-shadow: 0px 0px 1px #000;
    }
  }
  span {
    position: absolute;
    font-size: 1rem;
    color: #A0A3BD;
    top: 1rem;
    left: 1.5rem;
    transition: transform 0.2s linear, left 0.2s linear;
  }
  textarea:focus + span {
    transform: scale(0.75);
    left: 0.5rem;
  }
`;

const StyleIssueWriteSide = styled.ul`
  color: ${({ theme }) => theme.colors.grayScale.label};
  border: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  border-radius: 1rem;
  background-color: #fff;
  height: fit-content;
  li {
    color: ${({ theme }) => theme.colors.grayScale.label};
    padding: 1.8rem;
    display: grid;
    grid-template-columns: auto 1.8rem;
    align-items: center;
    font-weight: 700;
  }
  li:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  }
  button {
    background-color: #fff;
    border: 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.grayScale.label};
    padding: 0.2rem 0.5rem;
    cursor: pointer;
  }
`;

const StyleWriteButton = styled(PrimaryButton)`
  padding: 0.75rem 0rem;
  width: 15rem;
  display: inline-block;
`;

export default IssueWritePage;