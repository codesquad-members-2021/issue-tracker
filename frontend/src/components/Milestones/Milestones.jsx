import { useState, useEffect } from "react";
import MilestonesHeader from "./MilestonesHeader";
import MilestoneCard from "./MilestoneCard";
import MilestoneInput from "./MilestoneInput";
import { milestoneAddButtonFlagState } from "RecoilStore/Atoms";
import { useRecoilValue } from "recoil";
import useFetch from "hooks/useFetch";
import API from "util/API";

const Milestones = () => {
	const milestoneAddBtn = useRecoilValue(milestoneAddButtonFlagState);
	const [milestone, setMilestone] = useState();
	const { status, fetchData, data } = useFetch(API.milestones(), "GET");
	const { res, st } = fetchData();
	setMilestone(res);

	console.log("in component: ", res, st);
	console.log("in component: ", data, status, milestone);

	const milestoneList = data.milestones.map((milestone, i) => (
		<MilestoneCard key={i} data={milestone} />
	));

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
			{data && milestoneList}
		</>
	);
};

export default Milestones;
