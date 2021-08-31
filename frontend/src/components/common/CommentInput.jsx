import styled from "styled-components";
import { ReactComponent as Clip } from "images/paperclip.svg";

const CommentInput = () => {
	return (
		<Wrapper>
			<TextAreaWrapper>
				<TextArea placeholder="이슈 코멘트 입력" />
			</TextAreaWrapper>
			<div>
				<Clip />
				<input type="file" name="image" accept="image/*" />
			</div>
		</Wrapper>
	);
};

export default CommentInput;

const Wrapper = styled.div`
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
`;
