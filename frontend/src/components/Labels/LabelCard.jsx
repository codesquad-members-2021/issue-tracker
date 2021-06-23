import styled from "styled-components";
import { StyledGridCard } from "styles/StyledCards";
import LabelBadge from "components/common/LabelBadge";
import { ReactComponent as EditIcon } from "images/edit.svg";
import { ReactComponent as TrashIcon } from "images/trash.svg";
import theme from "styles/theme";
import { CenterJcAi, CenterAi } from "styles/StyledLayout";
import { labelInitialData, labelEditButtonFlagState } from "RecoilStore/Atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import API from "util/API";
import fetchData from "util/fetchData";
const LabelCard = ({ initialData }) => {
	const { id, name, description, colors } = initialData;
	const { backgroundColor, textColor } = colors;

	const setLabelEditBtnFlag = useSetRecoilState(labelEditButtonFlagState);
	const setLabelInitialData = useSetRecoilState(labelInitialData);
	const handleEditButton = () => {
		setLabelEditBtnFlag(x => !x);
	};
	const handleDeleteButton = async () => {
		console.log("delete");
		console.log("id!!", id);
		await fetchData(API.labelsId(id), "DELETE");
		const { labels } = await fetchData(API.labels(), "GET");
		setLabelInitialData(labels);
	};

	return (
		initialData && (
			<>
				<StyledGridCard gridRate={[0.5, 1.5, 0.5]}>
					<CenterJcAi>
						<LabelBadge
							text={name}
							fontColor={textColor}
							backgroundColor={backgroundColor}
						></LabelBadge>
					</CenterJcAi>
					<CenterAi>
						<LabelDescription>{description}</LabelDescription>
					</CenterAi>
					<CenterJcAi>
						<EditIcon stroke={theme.grayScale.label} />
						<ButtonText
							_color={({ theme }) => theme.grayScale.label}
							onClick={handleEditButton}
						>
							편집
						</ButtonText>
						<TrashIcon stroke={theme.colors.red} />
						<ButtonText
							_color={({ theme }) => theme.colors.red}
							onClick={handleDeleteButton}
						>
							삭제
						</ButtonText>
					</CenterJcAi>
				</StyledGridCard>
			</>
		)
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
