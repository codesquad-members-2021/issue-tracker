import styled from "styled-components";
import { ImgWrapper } from "styles/StyledLayout";
const IssueCategoryModal = ({ type }) => {
	return (
		<ModalContainer>
			<Title>담당자 추가</Title>
			<Row>
				<Contents>
					<ImgWrapper size="22px">
						<img
							src="https://avatars.githubusercontent.com/u/56783350?v=4"
							alt="유저이름"
						/>
					</ImgWrapper>
					<ContentsText>유저이름</ContentsText>
				</Contents>
				<RadioButton type="checkbox"></RadioButton>
			</Row>
			<Row>
				<Contents>
					<ImgWrapper size="22px">
						<img
							src="https://avatars.githubusercontent.com/u/56783350?v=4"
							alt="유저이름"
						/>
					</ImgWrapper>
					<ContentsText>유저이름</ContentsText>
				</Contents>
				<RadioButton type="checkbox"></RadioButton>
			</Row>
		</ModalContainer>
	);
};

const ModalContainer = styled.div`
	position: absolute;
	top: 40%;
	left: 10%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 80%;
	background: #fefefe;
	border: 1px solid #d9dbe9;
	border-radius: 16px;
	z-index: 1;
	color: #14142b;
`;
const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 14px;
`;
const Title = styled.div`
	padding: 16px;
	width: 100%;
	height: 48px;
	background: #f7f7fc;
	border-radius: 16px 16px 0px 0px;
	font-size: 18px;
`;
const ImgContainer = styled.div`
	width: 20px;
	height: 20px;
	border: 1px solid ${({ theme }) => theme.grayScale.line};
	margin-right: 3%;
	border-radius: 50%;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
	}
`;
const Contents = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;
const ContentsText = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
`;
const RadioButton = styled.input``;
export default IssueCategoryModal;
