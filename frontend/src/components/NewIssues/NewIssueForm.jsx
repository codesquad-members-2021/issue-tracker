import { Link } from "react-router-dom";
import styled from "styled-components";
import IssueCategoryList from "components/common/IssueCategoryList";
import CommentInput from "components/common/CommentInput";

const NewIssueForm = () => {
	const handleSubmit = () => {
		console.log("작성완료");
	};

	return (
		<>
			<Wrapper>
				<ContentsWrapper>
					<InputTitleWrapper>
						<Input type="text" placeholder="제목" />
					</InputTitleWrapper>
					<CommentInput />
				</ContentsWrapper>
				<IssueCategoryList />
			</Wrapper>
			<ButtonWrapper>
				{/* 스타일 코드 작성시 이부분 button 컴포넌트 적용 필요 */}
				<Link to="/main">
					<button>x 작성 취소</button>
				</Link>
				<button onClick={handleSubmit}>완료</button>
			</ButtonWrapper>
		</>
	);
};

export default NewIssueForm;

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	padding: ${({ theme }) => `${theme.fontSizes.xxxl} 0`};
	border-bottom: 1px solid ${({ theme }) => theme.grayScale.line};
`;

const ContentsWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: ${({ theme }) => `${theme.fontSizes.titleSize} 0`};
`;

const InputTitleWrapper = styled.div`
	padding: 1%;
	margin-bottom: ${({ theme }) => theme.paddings.xxl};
	border-radius: 14px;
	background-color: ${({ theme }) => theme.grayScale.input_background};
`;
const Input = styled.input`
	border: none;
	width: 100%;
	background-color: ${({ theme }) => theme.grayScale.input_background};
`;
