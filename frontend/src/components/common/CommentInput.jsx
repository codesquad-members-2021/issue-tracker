import styled from "styled-components";
import { ReactComponent as Clip } from "images/paperclip.svg";
import AddCommentButton from "components/common/Button/BlueButtons";
import { ImgWrapper } from "styles/StyledLayout";
import getUserInfo from "util/getUserInfo";

const CommentInput = ({ isNewIssueMode }) => {
	const userInfo = getUserInfo();
	// const { nickName, imageUrl, gitHubId, iss, id, exp }
	return (
		<Container>
			{!isNewIssueMode && (
				<ImgWrapper>
					<img src={userInfo.imageUrl} alt={userInfo.gitHubId} />
				</ImgWrapper>
			)}
			<MainContainer>
				<Wrapper>
					<TextAreaWrapper>
						<TextArea placeholder="이슈 코멘트 입력" />
					</TextAreaWrapper>
					<div>
						<Clip />
						<input type="file" name="image" accept="image/*" />
					</div>
				</Wrapper>
				{isNewIssueMode ? (
					<></>
				) : (
					<AddCommentButton
						text="코멘트 작성"
						icon="plus"
						size="m"
						clickHandler={() => {}}
					/>
				)}
			</MainContainer>
		</Container>
	);
};

export default CommentInput;

const Container = styled.div`
	display: flex;
`;

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-end;
`;

const Wrapper = styled.div`
	width: 100%;
	padding: 1%;
	background-color: ${({ theme }) => theme.grayScale.input_background};
	border-radius: 16px;
`;

const TextAreaWrapper = styled.div``;

const TextArea = styled.textarea`
	border: none;
	border-bottom: 1px dashed ${({ theme }) => theme.grayScale.line};
	background-color: ${({ theme }) => theme.grayScale.input_background};
	resize: vertical;
	width: 100%;
	height: 400px; //고정으로 바꿨슴다~
`;
