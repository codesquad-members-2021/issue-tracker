import styled from "styled-components";
import { ImgWrapper } from "styles/StyledLayout";
import { assigneeCategoryState } from "RecoilStore/Atoms";
import { useRecoilValue } from "recoil";

const Assignee = () => {
	const assigneeData = useRecoilValue(assigneeCategoryState);
	return (
		<>
			{assigneeData &&
				assigneeData.map((assignee, idx) => (
					<ContentsContainer key={`assignee=${idx}`}>
						<ImgWrapper size="44px">
							<img src={assignee.imageUrl} alt={assignee.githubId} />
						</ImgWrapper>
						<ContentsText>{assignee.githubId}</ContentsText>
					</ContentsContainer>
				))}
		</>
	);
};

const ContentsText = styled.div`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.grayScale.label};
	height: 44px;
`;
const ContentsContainer = styled.div`
	display: flex;
	padding: 9px 0;
`;
export default Assignee;
