import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

type Prop = {
  title: string | null;
  issueNumber: number;
  isEditting: boolean;
  setTitleContents: Dispatch<SetStateAction<string | null>>;
};

function IssueDetailTitle({
  title,
  issueNumber,
  isEditting,
  setTitleContents,
}: Prop) {
  const handleOnChangeTitleText = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setTitleContents(target.value);
  };

  if (title === null) title = '';
  return (
    <TitleBox showPseudoClass={isEditting}>
      {isEditting ? (
        <input value={title} onChange={handleOnChangeTitleText} />
      ) : (
        <>
          <h1>{title}</h1>
          <span>#{issueNumber}</span>
        </>
      )}
    </TitleBox>
  );
}

export default IssueDetailTitle;

type Title = {
  showPseudoClass: boolean;
};

const TitleBox = styled.div<Title>`
  display: flex;
  align-items: center;
  font-size: 32px;
  line-height: 48px;
  margin-bottom: 16px;
  position: relative;

  h1 {
    width: auto;
    color: ${({ theme }) => theme.colors.gr_titleActive};
    margin-right: 16px;
  }
  span {
    color: ${({ theme }) => theme.colors.gr_label};
  }

  input {
    width: 940px;
    padding-left: 112px;
    font-size: ${({ theme }) => theme.fontSizes.md};
    background-color: ${({ theme }) => theme.colors.gr_inputBackground};
    color: ${({ theme }) => theme.colors.gr_titleActive};
    margin-right: 16px;
    outline: 0;
    border: 0;
    position: relative;
  }

  &::before {
    display: ${({ showPseudoClass }) => (showPseudoClass ? 'block' : 'none')};
    margin-left: 24px;
    width: 80px;
    height: 100%;
    content: '제목';
    position: absolute;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.gr_label};
    left: 0;
    z-index: 1;
  }
`;
