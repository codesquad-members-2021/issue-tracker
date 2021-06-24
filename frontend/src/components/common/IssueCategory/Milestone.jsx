import styled from "styled-components";
import { milestoneCategoryState } from "RecoilStore/Atoms";
import { useRecoilValue } from "recoil";
const Milestone = () => {
	const milestoneData = useRecoilValue(milestoneCategoryState);
	console.log("milestoneData", milestoneData);
	return (
		<>
			<MilestoneTotalProgressBar />
			{milestoneData &&
				milestoneData.map((milestone, idx) => (
					<ContentsText key={idx}>{milestone.title}</ContentsText>
				))}
		</>
	);
};

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

const ContentsText = styled.div`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.grayScale.label};
	height: 44px;
`;

export default Milestone;
