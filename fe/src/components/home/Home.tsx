import React from "react";
import Header from "components/common/Header";
import styled from "styled-components";
import Filter from "./Filter";
import IssueList from "./IssueList";
import Others from "./Others";

const options = [
  { title: "열린 이슈", key: "openIssue" },
  { title: "내가 작성 이슈", key: "myIssue" },
  { title: "나에게 할당된 이슈", key: "assignIssue" },
  { title: "내가 댓글을 남긴 이슈", key: "myCommentsIssue" },
  { title: "닫힌 이슈", key: "closeIssue" },
];

function Home() {
  return (
    <div>
      <Header />
      <Controllers>
        <Filter options={options} />
        <Others />
      </Controllers>
      <IssueList />
    </div>
  );
}

export default Home;

const Controllers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
