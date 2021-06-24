import styled from "styled-components";
import IssueCategory from "./IssueCategory";
import { CATEGORY } from "data";
const IssueCategoryList = () => {
	return (
		<>
			<Layout>
				<IssueCategory category={CATEGORY.ASSIGNEE} />
				<IssueCategory category={CATEGORY.LABEL} />
				<IssueCategory category={CATEGORY.MILESTONE} />
			</Layout>
		</>
	);
};
const Layout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	color: #d9dbe9;
`;

export default IssueCategoryList;
