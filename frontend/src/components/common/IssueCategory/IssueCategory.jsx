import styled from "styled-components";
import { useReducer, useState } from "react";
import { useSetRecoilState } from "recoil";
import {
	assigneeCategoryState,
	labelCategoryState,
	milestoneCategoryState,
} from "RecoilStore/Atoms";
import IssueCategoryModal from "./IssueCategoryModal";
import Assignee from "./Assignee";
import Label from "./Label";
import { ReactComponent as PlusIcon } from "images/plus.svg";
import theme from "styles/theme";
import API from "util/API";
import fetchData from "util/fetchData";
import getCategoryText from "util/getCategoryText.js";
import { CATEGORY } from "data";

const IssueCategory = ({ category }) => {
	const setAssignee = useSetRecoilState(assigneeCategoryState);
	const setLabelState = useSetRecoilState(labelCategoryState);
	const setMilestoneState = useSetRecoilState(milestoneCategoryState);
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
		console.log("teat", flagState[`${category}`]);

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
		//카테고리에 맞는 get을한다 완료
		//카테고리에 맞는 key를 찾아 그 상태에 저장한다. 리듀서
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
					<Label data={currentModalData} />
					{flagState.label && (
						<IssueCategoryModal category={category} data={currentModalData} />
					)}
				</>
			)}
			{category === CATEGORY.MILESTONE && (
				<>
					<MilestoneTotalProgressBar />
					<ContentsText>선택된 마일스톤 타이틀 넣기</ContentsText>
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
const ContentsText = styled.div`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.grayScale.label};
	height: 44px;
`;
const MilestoneTotalProgressBar = styled.div`
	width: 100%;
	height: 8px;
	border-radius: 10px;
	//이부분 진행률로 수정 바랍니다~
	background: linear-gradient(
		90deg,
		#007aff 0%,
		#007aff 50.11%,
		#f7f7fc 50.12%,
		#f7f7fc 100%
	);
`;
export default IssueCategory;
