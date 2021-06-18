import API from "util/API";
import Milestones from "components/Milestones/Milestones";
import useFetchGet from "hooks/useFetchGet";

const MilestonesPage = () => {
	const { status, milestoneData } = useFetchGet(API.milestones());
	// console.log(status, milestoneData);

	return (
		<>
			<Milestones />
		</>
	);
};

export default MilestonesPage;
