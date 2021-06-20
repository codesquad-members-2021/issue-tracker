import styled from "styled-components";
import { StyledFlexCard } from "styles/StyledCards";
import { ReactComponent as Milestone } from "images/milestone.svg";
import { ReactComponent as Archive } from "images/archive.svg";
import { ReactComponent as Trash } from "images/trash.svg";
import { ReactComponent as EditIcon } from "images/edit.svg";
import getPercent from "util/getPercent";
import theme from "styles/theme";

const MilestoneCard = ({ data }) => {
	const { id, title, description, dueDate, openIssues, closedIssues } = data;

	return (
		<StyledFlexCard>
			<ContentsWrapper>
				<Info>
					<Block>
						<span>
							<Milestone fill="#000000" />
							{title}
						</span>
						<Span>{dueDate}</Span>
					</Block>
					<GrayFont>{description}</GrayFont>
				</Info>
				<Edit>
					<EditBlock>
						<EditBtn _color={({ theme }) => theme.grayScale.label}>
							<Archive />
							닫기
						</EditBtn>
						<EditBtn _color={({ theme }) => theme.grayScale.label}>
							<EditIcon stroke={theme.grayScale.label} />
							편집
						</EditBtn>
						<EditBtn _color={({ theme }) => theme.colors.red}>
							<Trash stroke={theme.colors.red} />
							삭제
						</EditBtn>
					</EditBlock>
					<div>
						<ProgressWrapper>
							<progress value={closedIssues} max={closedIssues + openIssues} />
						</ProgressWrapper>
						<Detail>
							<GrayFont>{getPercent(openIssues, closedIssues)}%</GrayFont>
							<Block>
								<IssueCnt>열린 이슈 {openIssues}</IssueCnt>{" "}
								<IssueCnt>닫힌 이슈 {closedIssues}</IssueCnt>
							</Block>
						</Detail>
					</div>
				</Edit>
			</ContentsWrapper>
		</StyledFlexCard>
	);
};

export default MilestoneCard;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const Edit = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-end;
	width: 20%;
`;

const Detail = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const ContentsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 97%;
`;

const EditBlock = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Block = styled.div`
	display: flex;
	justify-content: space-between;
	/* width: 50%; */
`;

const IssueCnt = styled.span`
	padding: 0 2px;
	color: ${({ theme }) => theme.grayScale.label};
	font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const Span = styled.span`
	padding: 0 ${({ theme }) => theme.fontSizes.xl};
	color: ${({ theme }) => theme.grayScale.label};
	font-size: ${({ theme }) => theme.fontSizes.small};
	align-self: center;
`;

const GrayFont = styled.div`
	color: ${({ theme }) => theme.grayScale.label};
	font-size: ${({ theme }) => theme.fontSizes.small};
`;

const ProgressWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-bottom: ${({ theme }) => theme.fontSizes.xs};
	/* margin-left: 30px; */
`;

const EditBtn = styled.div`
	padding: 0 ${({ theme }) => theme.fontSizes.xl};
	color: ${props => props._color};
	:last-child {
		padding-right: 0;
		padding-left: ${({ theme }) => theme.fontSizes.xl};
	}
`;
