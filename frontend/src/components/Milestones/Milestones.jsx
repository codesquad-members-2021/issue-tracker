import { useState, useEffect } from "react";
import MilestonesHeader from "./MilestonesHeader";
import MilestoneCard from "./MilestoneCard";
import MilestoneInput from "./MilestoneInput";
import { milestoneAddButtonFlagState } from "RecoilStore/Atoms";
import { useRecoilValue } from "recoil";
import useFetch from "hooks/useFetch";
import API from "util/API";
import fetchData from "util/fetchData";

const Milestones = () => {
	const milestoneAddBtn = useRecoilValue(milestoneAddButtonFlagState);
	const [milestone, setMilestone] = useState();

	const fetchMilestones = async () => {
		const { milestones } = await fetchData(API.milestones(), "GET");
		console.log(milestones);
		setMilestone(milestones);
	};

	useEffect(() => {
		fetchMilestones();
	}, []);

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
