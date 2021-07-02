import styled from "styled-components";
import { IssueHeader } from "styles/StyledLayout";
import theme from "styles/theme";
import EditButton from "components/common/Button/WhiteButtons";
import CloseButton from "components/common/Button/WhiteButtons";
import OpenLabel from "styles/OpenLabel";
import getTimeStamp from "util/getTimeStamp";

const IssueDetailHeader = ({ issueData }) => {
	return (
		<>
			<IssueHeader>
				<Top>
					<Titles>
						<div>{issueData.title}</div>
						<div className="issue_num">{issueData.id}</div>
					</Titles>
					<Buttons>
						<ButtonWrapper>
							<EditButton
								text="제목 편집"
								icon="edit"
								size="m"
								clickHandler={() => {}}
							/>
						</ButtonWrapper>
						<CloseButton
							text="이슈 닫기"
							icon="archive"
							size="m"
							clickHandler={() => {}}
						/>
					</Buttons>
				</Top>
				<Bottom>
					<OpenLabel
						text="열린 이슈"
						icon="alert"
						strokeColor={theme.colors.blue}
						bgColor={theme.colors.light_blue}
					/>
					<div className="bottom_detail">
						이 이슈가 {getTimeStamp(issueData.createdAt)}에{" "}
						{issueData.author.githubId}님에 의해 열렸습니다
					</div>
					<div className="bottom_detail">
						- 코멘트 {issueData.comments.length}개
					</div>
				</Bottom>
			</IssueHeader>
		</>
	);
};

export default IssueDetailHeader;

const Titles = styled.div`
	display: flex;

	.issue_num {
		color: ${({ theme }) => theme.grayScale.label};
		padding: 0 ${({ theme }) => theme.paddings.base};
		::before {
			content: "#";
		}
	}
`;

const Top = styled.div`
	display: grid;
	width: 100%;
	/* justify-content: space-between; */
	grid-template-columns: 1fr 1fr;
`;

const Buttons = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Bottom = styled.div`
	display: flex;
	align-items: center;
	.bottom_detail {
		font-size: ${({ theme }) => theme.fontSizes.base};
		color: ${({ theme }) => theme.grayScale.body};
		padding: 0 ${({ theme }) => theme.paddings.small};
	}
`;

const ButtonWrapper = styled.div`
	padding: 0 1rem;
`;
