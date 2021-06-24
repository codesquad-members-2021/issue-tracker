import styled from "styled-components";
import { useReducer, useState } from "react";
import IssueCategoryModal from "./IssueCategoryModal";
import Assignee from "./Assignee";
import Label from "./Label";
import Milestone from "./Milestone";
import { ReactComponent as PlusIcon } from "images/plus.svg";
import theme from "styles/theme";
import API from "util/API";
import fetchData from "util/fetchData";
import getCategoryText from "util/getCategoryText.js";
import { CATEGORY } from "data";

const IssueCategory = ({ category }) => {
	const initialFlagState = {
		assignee: false,
		label: false,
		milestone: false,
	};

	const flagReducer = (state, { type }) => {
		switch (type) {
			case CATEGORY.ASSIGNEE:
				return { ...initialFlagState, assignee: !state.assignee };
			case CATEGORY.LABEL:
				return { ...initialFlagState, label: !state.label };
			case CATEGORY.MILESTONE:
				return { ...initialFlagState, milestone: !state.milestone };
		}
	};
	const [flagState, flagDispatch] = useReducer(flagReducer, initialFlagState);
	const [currentModalData, setCurrentModalData] = useState();

	const handleAddFilter = async () => {
		await flagDispatch({ type: category });

		if (category === CATEGORY.ASSIGNEE) {
			const { users } = await fetchData(API.users());
			setCurrentModalData(users);
		} else if (category === CATEGORY.LABEL) {
			const { labels } = await fetchData(API.labels());
			setCurrentModalData(labels);
		} else if (category === CATEGORY.MILESTONE) {
			const { milestones } = await fetchData(API.milestones());
			setCurrentModalData(milestones);
		}
	};

	return (
		<Layout>
			<HeaderContainer>
				<TitleText>{getCategoryText(category)}</TitleText>
				<Icon stroke={theme.grayScale.label} onClick={handleAddFilter} />
			</HeaderContainer>
			{category === CATEGORY.ASSIGNEE && (
				<>
					<Assignee />
					{flagState.assignee && (
						<IssueCategoryModal category={category} data={currentModalData} />
					)}
				</>
			)}
			{category === CATEGORY.LABEL && (
				<>
					<Label />
					{flagState.label && (
						<IssueCategoryModal category={category} data={currentModalData} />
					)}
				</>
			)}
			{category === CATEGORY.MILESTONE && (
				<>
					<Milestone />
					{flagState.milestone && (
						<IssueCategoryModal category={category} data={currentModalData} />
					)}
				</>
			)}
		</Layout>
	);
};

const Layout = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 32px;
	background: #fefefe;
	border-radius: 16px;
	border: 1px solid #d9dbe9;
	border-radius: 16px;
	margin-left: 5%;
`;
const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding-bottom: 18px;
`;
const Icon = styled(PlusIcon)`
	cursor: pointer;
`;
const TitleText = styled.div`
	color: ${({ theme }) => theme.grayScale.label};
	font-weight: bold;
`;
export default IssueCategory;
