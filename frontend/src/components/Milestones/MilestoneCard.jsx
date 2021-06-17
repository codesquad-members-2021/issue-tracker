import styled from "styled-components";
import { StyledFlexCard } from "styles/StyledCards";
const MilestoneCard = () => {
	return (
		<StyledFlexCard>
			<ContentsWrapper>
				<Info>
					<div>
						<span>마일스톤 제목</span>
						<span>완료일 일정</span>
					</div>
					<div>마일스톤에 대한 설명</div>
				</Info>
				<Edit>
					<div>
						<span>편집</span>
						<span>삭제</span>
					</div>
					<div>
						<div>프로그레스바</div>
						<Detail>
							<div>00%</div>
							<div>열린 이슈 N 닫힌 이슈 N</div>
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
`;

const Detail = styled.div`
	display: flex;
`;

const ContentsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 97%;
`;
