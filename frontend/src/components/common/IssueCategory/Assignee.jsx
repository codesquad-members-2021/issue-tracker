import styled from "styled-components";
import { ImgWrapper } from "styles/StyledLayout";
import { assigneeCategoryState } from "RecoilStore/Atoms";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";
const Assignee = () => {
	const assigneeData = useRecoilValue(assigneeCategoryState);
	console.log(assigneeData);
	//리코일(선택된 유저)
	//객체형태로, 유저의 id, name, img를 저장한 뒤 map을 돌린다.
	// useEffect(() => {}, [assigneeData]);
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
