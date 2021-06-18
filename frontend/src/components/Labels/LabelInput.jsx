import styled from "styled-components";
import { CenterJcAi } from "styles/StyledLayout ";
const LabelInput = () => {
	return (
		<LabelInputLayout>
			<Title>새로운 레이블 추가(Layout 잡는 중)</Title>
			<TextInputContainer>
				<SubTitle>레이블 이름</SubTitle>
				<TextInput />
			</TextInputContainer>
			<TextInputContainer>
				<SubTitle>설명(선택)</SubTitle>
				<TextInput />
			</TextInputContainer>
		</LabelInputLayout>
	);
};

//하드 코딩 된 스타일 값 수정 예정

const LabelInputLayout = styled.div`
	height: 345px;
	border: 1px solid black;
	background: #fefefe;

	border: 1px solid #d9dbe9;
	box-sizing: border-box;
	border-radius: 16px;
`;

const Title = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.xxxl};
	padding: 32px;
`;

const TextInputContainer = styled(CenterJcAi)`
	display: flex;
	padding: 0px 24px;
	margin-bottom: 16px;
	background: #eff0f6;
	border-radius: 11px;
	width: 904px;
	height: 40px;
	border: none;
	color: ${({ theme }) => theme.grayScale.title_active};
`;
const SubTitle = styled(CenterJcAi)`
	width: 80px;
	height: 40px;
	font-weight: 500;
	font-size: 12px;
	line-height: 20px;
	color: ${({ theme }) => theme.grayScale.label};
`;
const TextInput = styled.input`
	background: #eff0f6;
	width: 100%;
	color: ${({ theme }) => theme.grayScale.title_active};
	font-size: 16px;
	border: none;
`;

export default LabelInput;
