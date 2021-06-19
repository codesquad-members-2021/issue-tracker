import { useState } from "react";
import API from "util/API";
import Milestones from "components/Milestones/Milestones";
import useFetch from "hooks/useFetchGet";

const MilestonesPage = () => {
	const [milestoneData, setMilestoneData] = useState();
	const status = useFetch(API.milestones(), "GET", setMilestoneData);

	console.log(milestoneData, status);

	return (
		<>
			<Milestones />
		</>
	);
};

export default MilestonesPage;
