import styled from "styled-components";
import { StyledGridCard } from "styles/StyledCards";
import LabelBadge from "components/common/LabelBadge";
import { ReactComponent as EditIcon } from "images/edit.svg";
import { ReactComponent as TrashIcon } from "images/trash.svg";
import theme from "styles/theme";
import { CenterJcAi, CenterAi } from "styles/StyledLayout ";

const LabelCard = ({ name, description, colors }) => {
	// const { backgroundColor, textColor } = colors;
	return (
		<>
			<StyledGridCard gridRate={[0.5, 1.5, 0.5]}>
				<CenterJcAi>
					<LabelBadge
						text={"모닝알고리즘"}
						fontColor={"white"}
						backgroundColor={"#004de3"}
					></LabelBadge>
				</CenterJcAi>
				<CenterAi>
					<LabelDescription>
						구디의 모닝 알고리즘 100,000,000일차 ☀️
					</LabelDescription>
				</CenterAi>
				<CenterJcAi>
					<EditIcon stroke={theme.grayScale.label} />
					<ButtonText _color={({ theme }) => theme.grayScale.label}>
						편집
					</ButtonText>
					<TrashIcon stroke={theme.colors.red} />
					<ButtonText _color={({ theme }) => theme.colors.red}>삭제</ButtonText>
				</CenterJcAi>
			</StyledGridCard>
		</>
	);
};

const LabelDescription = styled.div`
	color: ${({ theme }) => theme.grayScale.label};
`;

const ButtonText = styled.div`
	font-weight: bold;
	font-size: ${({ theme }) => theme.fontSizes.xxs};
	color: ${props => props._color};
	padding: 3%;
	margin-right: 24px;
	cursor: pointer;
`;

export default LabelCard;
