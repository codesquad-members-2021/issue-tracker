import { useState, useEffect } from "react";
import MilestonesHeader from "./MilestonesHeader";
import MilestoneCard from "./MilestoneCard";
import MilestoneInput from "./MilestoneInput";
import {
	milestoneAddButtonFlagState,
	milestoneCountState,
} from "RecoilStore/Atoms";
import { useSetRecoilState, useRecoilValue } from "recoil";
import API from "util/API";
import fetchData from "util/fetchData";

const Milestones = () => {
	const milestoneAddBtn = useRecoilValue(milestoneAddButtonFlagState);
	const [milestone, setMilestone] = useState();
	const setMilestoneCount = useSetRecoilState(milestoneCountState);

	const fetchMilestones = async () => {
		const { milestones } = await fetchData(API.milestones(), "GET");
		setMilestone(milestones);
		setMilestoneCount(milestones.length);
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
