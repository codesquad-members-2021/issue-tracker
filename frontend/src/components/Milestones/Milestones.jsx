import { useState, useEffect } from "react";
import MilestonesHeader from "./MilestonesHeader";
import MilestoneCard from "./MilestoneCard";
import MilestoneInput from "./MilestoneInput";
import {
	milestoneAddButtonFlagState,
	milestoneUpdateState,
} from "RecoilStore/Atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import API from "util/API";
import fetchData from "util/fetchData";

const Milestones = () => {
	const [milestoneAddBtn, setMilestoneAddBtn] = useRecoilState(
		milestoneAddButtonFlagState
	);
	const [_, update] = useRecoilState(milestoneUpdateState);
	const [milestone, setMilestone] = useState();

	const fetchMilestones = async () => {
		const { milestones } = await fetchData(API.milestones(), "GET");
		setMilestone(milestones);
	};

	useEffect(() => {
		fetchMilestones();
	}, [milestoneAddBtn]);

	return (
		<>
			{milestoneAddBtn ? (
				<>
					<MilestoneInput />
					<MilestonesHeader />
				</>
			) : (
				<></>
			)}
			{milestone &&
				milestone.map((milestone, i) => (
					<MilestoneCard key={i} data={milestone} />
				))}
		</>
	);
};

export default Milestones;
