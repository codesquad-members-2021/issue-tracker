import styled from "styled-components";
import IssueCategory from "./IssueCategory";

const IssueCategoryList = () => {
	return (
		<>
			<Layout>
				<IssueCategory category={"assignee"} />
				<IssueCategory category={"label"} />
				<IssueCategory category={"milestone"} />
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
