import styled from "styled-components";
import Assignee from "./Assignee";
import Label from "./Label";
import { ReactComponent as PlusIcon } from "images/plus.svg";
import theme from "styles/theme";
import {
	assigneeCategoryState,
	labelCategoryState,
	milestoneCategoryState,
} from "RecoilStore/Atoms";
import IssueCategoryModal from "./IssueCategoryModal";
import { ImgWrapper } from "styles/StyledLayout";
import { useReducer, useState } from "react";
import fetchData from "util/fetchData";
import API from "util/API";
import { useSetRecoilState } from "recoil";
const IssueCategory = ({ category }) => {
	const setAssignee = useSetRecoilState(assigneeCategoryState); //여기서 부터 하면 됨 넘 졸려
	const initialFlagState = {
		assignee: false,
		label: false,
		milestone: false,
	};

	const flagReducer = (state, { type }) => {
		switch (type) {
			case "assignee":
				return { ...initialFlagState, assignee: !state.assignee };
			case "label":
				return { ...initialFlagState, label: !state.label };
			case "milestone":
				return { ...initialFlagState, milestone: !state.milestone };
		}
	};
	const [flagState, flagDispatch] = useReducer(flagReducer, initialFlagState);
	const [currentModalData, setCurrentModalData] = useState();

	const getTitleText = () => {
		switch (category) {
			case "assignee":
				return "담당자";
			case "label":
				return "라벨";
			case "milestone":
				return "마일스톤";
			default:
				console.error("unhandled TitleText type!!");
		}
	};
	const handleAddFilter = async () => {
		await flagDispatch({ type: category });
		console.log("teat", flagState[`${category}`]);
		if (category === "assignee") {
			const { users } = await fetchData(API.users());
			setCurrentModalData(users);
			console.log(users);
		} else if (category === "label") {
			const { labels } = await fetchData(API.labels());
			setCurrentModalData(labels);
			console.log(labels);
		} else if (category === "milestone") {
			const { milestones } = await fetchData(API.milestones());
			console.log(milestones);
		}

		//카테고리에 맞는 get을한다
		//카테고리에 맞는 key를 찾아 그 상태에 저장한다. 리듀서
	};

	return (
		<Layout>
			<HeaderContainer>
				<TitleText>{getTitleText(category)}</TitleText>
				<Icon stroke={theme.grayScale.label} onClick={handleAddFilter} />
			</HeaderContainer>
			{category === "assignee" && (
				<>
					<Assignee />
					{flagState.assignee && <IssueCategoryModal data={currentModalData} />}
				</>
			)}
			{category === "label" && (
				<>
					<Label data={currentModalData} />
					{flagState.label && <IssueCategoryModal />}
				</>
			)}
			{category === "milestone" && (
				<>
					<MilestoneTotalProgressBar />
					<ContentsText>마스터즈 코스 수료</ContentsText>
					{flagState.milestone && <IssueCategoryModal />}
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
const ContentsContainer = styled.div`
	display: flex;
	padding: 9px 0;
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
