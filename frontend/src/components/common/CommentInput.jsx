import styled from "styled-components";
import { ReactComponent as Clip } from "images/paperclip.svg";
import AddCommentButton from "components/common/Button/BlueButtons";
import { ImgWrapper } from "styles/StyledLayout";
import getUserInfo from "util/getUserInfo";
import MDEditor from "@uiw/react-md-editor";
import { useEffect } from "react";
import API from "util/API";
import fetchImage from "util/fetchImage";
import { useParams } from "react-router-dom";
import fetchData from "util/fetchData";
import { commentInputState } from "RecoilStore/Atoms";
import { useRecoilState } from "recoil";

const CommentInput = ({ isNewIssueMode }) => {
	const userInfo = getUserInfo(); // const { nickName, imageUrl, gitHubId, iss, id, exp }
	const issueId = useParams().id;

	// 최초 렌더링 input 초기화
	useEffect(() => {
		setInput({
			...issueId,
			content: "",
		});
	}, []);

	const [input, setInput] = useRecoilState(commentInputState);

	const handleInput = text => {
		setInput({
			...issueId,
			content: text,
		});
	};

	const submitComment = async () => {
		console.log("comment posted");
		const response = await fetchData(API.comment(), "POST", input);
		console.log(response);
	};

	const handleOnSubmit = async e => {
		e.preventDefault();
		console.log("img submitted");
		const imgFile = await document.querySelector(".img_file");
		const formData = await new FormData();
		await formData.append("image", imgFile.files[0]);
		const response = await fetchImage(API.image(), "POST", formData);
		setInput({
			...issueId,
			content:
				input.content + `![${response.image.url}](${response.image.url})`,
		});
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
							value={input.content}
						/>
					</CommentInputWrapper>
					<form className="img_form" onSubmit={handleOnSubmit}>
						<Clip />
						<input
							className="img_file"
							type="file"
							name="image"
							accept="image/*"
						/>
						<button type="submit">이미지 업로드</button>
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
