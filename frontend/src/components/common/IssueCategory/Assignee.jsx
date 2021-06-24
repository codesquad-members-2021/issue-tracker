import styled from "styled-components";
import { ImgWrapper } from "styles/StyledLayout";
const Assignee = () => {
	//리코일(선택된 유저)
	return (
		<ContentsContainer>
			<ImgWrapper size="44px">
				<img
					src="https://avatars.githubusercontent.com/u/56783350?v=4"
					alt="유저이름"
				/>
			</ImgWrapper>
			<ContentsText>선택된 유저이름 넣기</ContentsText>
		</ContentsContainer>
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
