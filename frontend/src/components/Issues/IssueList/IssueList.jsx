import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import IssueHeader from "./IssuesHeader";
import IssueCard from "./IssueCard";

const IssueList = () => {
	const { grayScale, border_radius } = useContext(ThemeContext);
	return (
		<StyledIssueList _border={grayScale.line} _border_radius={border_radius.lg}>
			<IssueHeader />
			<IssueCard />
			<IssueCard />
			<IssueCard />
			<IssueCard />
			<IssueCard />
		</StyledIssueList>
	);
};

export default IssueList;

const StyledIssueList = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	border: ${props => `1px solid ${props._border}`};
	border-radius: ${props => props._border_radius};
`;
