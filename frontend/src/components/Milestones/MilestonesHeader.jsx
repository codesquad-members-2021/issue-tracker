import { useState } from "react";
import styled from "styled-components";
import { StyledGridTitleCard } from "styles/StyledCards";
import { ReactComponent as MilestoneIcon } from "images/milestone.svg";
import { ReactComponent as ArchiveIcon } from "images/archive.svg";
import theme from "styles/theme";

const MilestonesHeader = () => {
	const [showOpenedOnes, setShowOpendOnes] = useState(true);

	const getColor = () => {
		return showOpenedOnes ? "#000000" : `${theme.grayScale.label}`;
	};

	return (
		<StyledGridTitleCard gridRate={[1]}>
			<Contents>
				<Title>
					<MilestoneIcon fill={getColor()} />
					열린 마일스톤(N)
				</Title>
				<Title>
					<ArchiveIcon />
					닫힌 마일스톤(N)
				</Title>
			</Contents>
		</StyledGridTitleCard>
	);
};

export default MilestonesHeader;

const Contents = styled.div`
	display: flex;
	justify-content: space-between;
	width: 30%;
	align-items: center;
`;

const Title = styled.div`
	padding: ${({ theme }) => `0 ${theme.paddings.xxxl}`};
`;
