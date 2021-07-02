import { useState, useEffect } from "react";
import MilestonesHeader from "./MilestonesHeader";
import MilestoneCard from "./MilestoneCard";
import MilestoneInput from "./MilestoneInput";
import {
	milestoneAddButtonFlagState,
	milestoneCountState,
	labelAddButtonFlagState,
	navigatorAddButtonFlagState,
} from "RecoilStore/Atoms";
import { useSetRecoilState, useRecoilValue } from "recoil";
import API from "util/API";
import fetchData from "util/fetchData";

const Milestones = () => {
	const [milestone, setMilestone] = useState();
	const milestoneAddBtn = useRecoilValue(milestoneAddButtonFlagState);
	const setNavigatorAddBtn = useSetRecoilState(navigatorAddButtonFlagState);
	const setLabelAddBtnFlag = useSetRecoilState(labelAddButtonFlagState);
	const setMilestoneCount = useSetRecoilState(milestoneCountState);

	const fetchMilestones = async () => {
		const { milestones } = await fetchData(API.milestones(), "GET");
		setMilestone(milestones);
		setMilestoneCount(milestones.length);
	};

	useEffect(() => {
		setNavigatorAddBtn(false);
		setLabelAddBtnFlag(false);
	}, []);

	useEffect(() => {
		fetchMilestones();
	}, [milestoneAddBtn]);

	return (
		<>
			{milestoneAddBtn ? (
				<>
					<MilestoneInput />
				</>
			) : (
				<></>
			)}
			<MilestonesHeader />
			{milestone &&
				milestone.map((milestone, i) => (
					<MilestoneCard key={i} data={milestone} />
				))}
		</>
	);
};

export default Milestones;
