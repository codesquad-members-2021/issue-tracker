import { StyledGridTitleCard } from "styles/StyledCards";

const MilestonesHeader = () => {
	return (
		<StyledGridTitleCard gridRate={[1]}>
			<div>열린 마일스톤(N)</div>
			<div>닫힌 마일스톤(N)</div>
		</StyledGridTitleCard>
	);
};

export default MilestonesHeader;
