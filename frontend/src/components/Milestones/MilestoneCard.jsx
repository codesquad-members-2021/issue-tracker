import styled from "styled-components";
import { StyledFlexCard } from "styles/StyledCards";
import { ReactComponent as Milestone } from "images/milestone.svg";
import { ReactComponent as Archive } from "images/archive.svg";
import { ReactComponent as Trash } from "images/trash.svg";
import { ReactComponent as EditIcon } from "images/edit.svg";
const MilestoneCard = () => {
	return (
		<StyledFlexCard>
			<ContentsWrapper>
				<Info>
					<Block>
						<span>
							<Milestone fill="#000000" />
							마일스톤 제목
						</span>
						<Span>완료일 일정</Span>
					</Block>
					<GrayFont>마일스톤에 대한 설명</GrayFont>
				</Info>
				<Edit>
					<EditBlock>
						<EditBtn>
							<Archive />
							닫기
						</EditBtn>
						<EditBtn>
							<EditIcon />
							편집
						</EditBtn>
						<EditBtn>
							<Trash />
							삭제
						</EditBtn>
					</EditBlock>
					<div>
						<ProgressWrapper>
							<progress value="20" max="100" />
						</ProgressWrapper>
						<Detail>
							<GrayFont>00%</GrayFont>
							<Block>
								<IssueCnt>열린 이슈 N</IssueCnt>{" "}
								<IssueCnt>닫힌 이슈 N</IssueCnt>
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
	width: 20%;
`;

const Detail = styled.div`
	display: flex;
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
	color: ${({ theme }) => theme.grayScale.label};
	:last-child {
		padding-right: 0;
		padding-left: ${({ theme }) => theme.fontSizes.xl};
	}
`;
