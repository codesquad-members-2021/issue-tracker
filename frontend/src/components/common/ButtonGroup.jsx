import { TabButton } from "styles/StyledButtons";
import styled from "styled-components";
import { ReactComponent as LabelIcon } from "images/tag.svg";
import { ReactComponent as MileStoneIcon } from "images/milestone.svg";
import theme from "styles/theme";
import { Link } from "react-router-dom";

const ButtonGroup = ({
	milestoneCount,
	milestoneClickEvent,
	labelCount,
	labelClickEvent,
}) => {
	return (
		<>
			<Link to="/main/milestones">
				<TabButton
					onClick={milestoneClickEvent}
					_width={({ theme }) => theme.buttonWidths.base}
					_radius={"left"}
				>
					<MileStoneIcon fill={theme.grayScale.label} />
					<ButtonText>마일스톤 ({milestoneCount})</ButtonText>
				</TabButton>
			</Link>
			<Link to="/main/labels">
				<TabButton
					onClick={labelClickEvent}
					_width={({ theme }) => theme.buttonWidths.base}
					_radius={"right"}
				>
					<LabelIcon stroke={theme.grayScale.label} />
					<ButtonText>레이블 ({labelCount})</ButtonText>
				</TabButton>
			</Link>
		</>
	);
};

const ButtonText = styled.div`
	padding: 0 4%;
`;

export default ButtonGroup;
