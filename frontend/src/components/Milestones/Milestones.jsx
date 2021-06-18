import MilestonesHeader from "./MilestonesHeader";
import MilestoneCard from "./MilestoneCard";
import MilestoneInput from "./MilestoneInput";
const Milestones = () => {
	return (
		<>
			<MilestoneInput />
			<MilestonesHeader />
			<MilestoneCard />
			<MilestoneCard />
			<MilestoneCard />
		</>
	);
};

export default Milestones;
