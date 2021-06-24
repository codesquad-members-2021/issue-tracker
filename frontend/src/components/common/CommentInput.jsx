import styled from "styled-components";
import { ReactComponent as Clip } from "images/paperclip.svg";
import AddCommentButton from "components/common/Button/BlueButtons";
import { ImgWrapper } from "styles/StyledLayout";
import getUserInfo from "util/getUserInfo";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import API from "util/API";
import fetchImage from "util/fetchImage";

const CommentInput = ({ isNewIssueMode }) => {
	const userInfo = getUserInfo(); // const { nickName, imageUrl, gitHubId, iss, id, exp }
	const [input, setInput] = useState("");

	const handleInput = text => {
		setInput(text);
		console.log(text);
	};

	const submitComment = () => {
		// input 을 서버로 POST
	};

	const handleInputFileChange = e => {
		const files = e.target.files;
		console.log(files);
	};

	const handleOnSubmit = async e => {
		e.preventDefault();
		console.log("img submitted");
		const imgFile = await document.querySelector(".img_file");
		const formData = await new FormData();
		await formData.append("image", imgFile.files[0]);
		const response = await fetchImage(API.image(), "POST", formData);
		setInput(input + `![${response.image.url}](${response.image.url})`);
		console.log(response.image.url);
	};

	return (
		<Container>
			{!isNewIssueMode && (
				<ImgWrapper size="44px">
					<img src={userInfo.imageUrl} alt={userInfo.gitHubId} />
				</ImgWrapper>
			)}
			<MainContainer>
				<Wrapper>
					<CommentInputWrapper>
						<CommentInputMD
							height={400}
							placeholder="이슈 코멘트 입력"
							onChange={handleInput}
							value={input}
						/>
					</CommentInputWrapper>
					<form className="img_form" onSubmit={handleOnSubmit}>
						<Clip />
						<input
							className="img_file"
							type="file"
							name="image"
							accept="image/*"
							onChange={handleInputFileChange}
						/>
						<button type="submit">Submit Img</button>
					</form>
				</Wrapper>
				{isNewIssueMode ? (
					<></>
				) : (
					<AddCommentButton
						text="코멘트 작성"
						icon="plus"
						size="m"
						clickHandler={submitComment}
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
	margin-bottom: 2%;
`;

const CommentInputWrapper = styled.div`
	height: 400px;
`;

const CommentInputMD = styled(MDEditor)`
	border: none;
	border-bottom: 1px dashed ${({ theme }) => theme.grayScale.line};
	background-color: ${({ theme }) => theme.grayScale.input_background};
	resize: vertical;
	width: 100%;
	.w-md-editor-toolbar {
		display: none;
	}
`;

const ImgForm = styled.form`
	display: flex;
`;
