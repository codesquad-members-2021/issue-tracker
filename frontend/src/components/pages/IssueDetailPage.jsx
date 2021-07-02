import { useEffect, useState } from "react";
import styled from "styled-components";
import IssueDetailHeader from "components/IssueDetail/IssueDetailHeader";
import IssueDetailComments from "components/IssueDetail/IssueDetailComments";
import IssueCategoryList from "components/common/IssueCategory/IssueCategoryList";
import { useParams } from "react-router";
import fetchData from "util/fetchData";
import API from "util/API";

const IssueDetailPage = () => {
	const issueId = useParams().id;
	const [issueData, setIssueData] = useState();

	const getIssueData = async () => {
		const data = await fetchData(API.issue(issueId), "GET");
		setIssueData(data.issue);
	};

	useEffect(() => {
		getIssueData();
	}, []);
	console.log(issueData);

	return (
		<>
			{issueData && (
				<IssueWrapper>
					<IssueDetailHeader issueData={issueData} />
					<ContentsWrapper>
						<IssueDetailComments issueData={issueData} />
						<IssueCategoryList issueData={issueData} />
					</ContentsWrapper>
				</IssueWrapper>
			)}
		</>
	);
};

export default IssueDetailPage;

const IssueWrapper = styled.div``;
const ContentsWrapper = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
`;
