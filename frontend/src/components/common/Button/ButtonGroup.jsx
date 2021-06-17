import { TabButton } from "styles/StyledButtons";
import styled from "styled-components";
import { ReactComponent as LabelIcon } from "images/tag.svg";
import { ReactComponent as MileStoneIcon } from "images/milestone.svg";
import theme from "styles/theme";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
	labelButtonFlagState,
	milestoneButtonFlagState,
} from "RecoilStore/Atoms";

const ButtonGroup = ({
	milestoneCount,
	milestoneClickEvent,
	labelCount,
	labelClickEvent,
	isMainPage,
}) => {
	const milestoneFlag = useRecoilValue(milestoneButtonFlagState);
	const labelFlag = useRecoilValue(labelButtonFlagState);

	return (
		<Wrapper>
			<Link to="/main/milestones">
				<TabButton
					onClick={milestoneClickEvent}
					_width={({ theme }) => theme.buttonWidths.base}
					_radius={"left"}
					bgColor={milestoneFlag}
					isMainPage={isMainPage}
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
					bgColor={labelFlag}
					isMainPage={isMainPage}
				>
					<LabelIcon stroke={theme.grayScale.label} />
					<ButtonText>레이블 ({labelCount})</ButtonText>
				</TabButton>
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const ButtonText = styled.div`
	padding: 0 4%;
`;

export default ButtonGroup;
