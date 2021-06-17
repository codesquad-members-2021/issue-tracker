import { Wrapper, Upper, Lower } from 'components/common/Table';
import IssueList from './IssueList';
import IssuesHeader from './IssuesHeader';

const Issues = () => {
  return (
    <Wrapper>
      <Upper>
        <IssuesHeader />
      </Upper>
      <Lower>
        <IssueList />
      </Lower>
    </Wrapper>
  );
};

export default Issues;
