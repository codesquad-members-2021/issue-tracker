import { Link } from "react-router-dom";
import styled from "styled-components";
import IssueCategoryList from "components/common/IssueCategory/IssueCategoryList";
import CommentInput from "components/common/CommentInput";
import SubmitBtn from "components/common/Button/BlueButtons";
import { ReactComponent as Xsquare } from "images/x-square.svg";
import getUserInfo from "util/getUserInfo";

const NewIssueForm = () => {
	const userInfo = getUserInfo();
	const handleSubmit = () => {
		console.log("작성완료");
	};

	return (
		<>
			<Wrapper>
				<ImgWrapper>
					<img src={userInfo.imageUrl} alt={userInfo.gitHubId} />
				</ImgWrapper>
				<ContentsWrapper>
					<InputTitleWrapper>
						<Input type="text" placeholder="제목" />
					</InputTitleWrapper>
					<CommentInput isNewIssueMode={true} />
				</ContentsWrapper>
				<IssueCategoryList />
			</Wrapper>
			<ButtonWrapper>
				<CancelBtn>
					<Link to="/main">
						<CancelBtn>
							<Xsquare stroke="#000000" />
							작성 취소
						</CancelBtn>
					</Link>
				</CancelBtn>
				<SubmitBtn
					text="완료"
					size="l"
					icon={"none"}
					clickHandler={handleSubmit}
				/>
			</ButtonWrapper>
		</>
	);
};

export default NewIssueForm;

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 0.15fr 3fr 1fr;
	padding: ${({ theme }) => `${theme.fontSizes.xxxl} 0`};
	border-bottom: 1px solid ${({ theme }) => theme.grayScale.line};
`;

const ImgWrapper = styled.div`
	width: 44px;
	height: 44px;
	border: 1px solid ${({ theme }) => theme.grayScale.line};
	border-radius: 50%;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
	}
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

const CancelBtn = styled.div`
	/* display: flex;
	align-items: center;
	justify-content: space-between; */
	align-self: center;
	margin-right: 1rem;
`;
