import styled from "styled-components";
import LabelCard from "./LabelCard";
import LabelInput from "./LabelInput";
import { StyledGridTitleCard } from "styles/StyledCards";
import { useEffect } from "react";
import API from "util/API";
import fetchData from "util/fetchData";
import {
	labelInitialData,
	labelAddButtonFlagState,
	labelCountState,
	labelUpdateState,
	milestoneAddButtonFlagState,
	navigatorAddButtonFlagState,
} from "RecoilStore/Atoms";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

const Labels = () => {
	const [initialData, setLabelInitialData] = useRecoilState(labelInitialData);
	const labelAddBtnFlag = useRecoilValue(labelAddButtonFlagState);
	const [labelCount, setLabelCount] = useRecoilState(labelCountState);
	const forceUpdate = useRecoilValue(labelUpdateState);
	const setMilestoneAddBtnFlag = useSetRecoilState(milestoneAddButtonFlagState);
	const setNavigatorAddBtnFlag = useSetRecoilState(navigatorAddButtonFlagState);

	useEffect(() => {
		setNavigatorAddBtnFlag(false);
		setMilestoneAddBtnFlag(false);
	}, []);

	const getLabelData = async () => {
		const { labels } = await fetchData(API.labels(), "GET");
		setLabelInitialData(labels);
		setLabelCount(labels.length);
	};

	useEffect(() => {
		getLabelData();
	}, [forceUpdate]); //forceUpdate를 의존 배열에 넣음 대박!!

	return (
		<>
			{labelAddBtnFlag ? <LabelInput initialData={initialData} /> : <></>}
			<StyledGridTitleCard gridRate={[1]}>
				<HeaderTitle>{labelCount}개의 레이블</HeaderTitle>
			</StyledGridTitleCard>
			{initialData &&
				initialData.map(data => (
					<LabelCard key={`card-${data.id}`} initialData={data} />
				))}
		</>
	);
};

const HeaderTitle = styled.div`
	font-weight: bold;
	color: ${({ theme }) => theme.grayScale.label};
	align-items: center;
	padding: 0 6%;
`;
export default Labels;
