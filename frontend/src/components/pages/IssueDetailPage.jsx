import styled from "styled-components";
import { IssueHeader } from "styles/StyledLayout ";
import EditButton from "components/common/Button/WhiteButtons";
import CloseButton from "components/common/Button/WhiteButtons";

const IssueDetailPage = () => {
	return (
		<>
			<IssueHeader>
				<Top>
					<Titles>
						<div>타이틀</div>
						<div className="issue_num">이슈번호</div>
					</Titles>
					<Buttons>
						<ButtonWrapper>
							<EditButton
								text="제목 편집"
								icon="edit"
								size="m"
								clickHandler={() => {}}
							/>{" "}
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
					<div>열린 이슈</div>
					<div>이 이슈가 n분 전에 n님에 의해 열렸습니다</div>
					<div>- 코멘트 n개</div>
				</Bottom>
			</IssueHeader>
		</>
	);
};

export default IssueDetailPage;

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
`;

const ButtonWrapper = styled.div`
	padding: 0 1rem;
`;
