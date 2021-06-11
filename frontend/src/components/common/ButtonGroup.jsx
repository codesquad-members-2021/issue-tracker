import { ButtonGroupLeftBtn, ButtonGroupRightBtn } from "styles/StyledButtons";
import styled from "styled-components";
import { ReactComponent as LabelIcon } from "images/tag.svg";
import { ReactComponent as MileStoneIcon } from "images/milestone.svg";
import theme from "styles/theme";
const ButtonGroup = ({
	milestoneCount,
	milestoneClickEvent,
	labelCount,
	labelClickEvent,
}) => {
	return (
		<>
			<ButtonGroupLeftBtn onClick={milestoneClickEvent}>
				<MileStoneIcon fill={theme.grayScale.label} />
				<ButtonText>마일스톤 ({milestoneCount})</ButtonText>
			</ButtonGroupLeftBtn>
			<ButtonGroupRightBtn onClick={labelClickEvent}>
				<LabelIcon stroke={theme.grayScale.label} />
				<ButtonText>레이블 ({labelCount})</ButtonText>
			</ButtonGroupRightBtn>
		</>
	);
};

const ButtonText = styled.div`
	padding: 0 4%;
`;

export default ButtonGroup;
