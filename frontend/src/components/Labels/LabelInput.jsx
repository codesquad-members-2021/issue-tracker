import styled from "styled-components";
import { DisplayFlex, CenterAi } from "styles/StyledLayout ";
import { ReactComponent as RefreshIcon } from "images/refresh-ccw.svg";
import { ReactComponent as XIcon } from "images/x-square.svg";
import { ReactComponent as EditIcon } from "images/edit.svg";
import { ReactComponent as PlusIcon } from "images/plus.svg";
import { useEffect, useReducer } from "react";
import LabelBadge from "components/common/LabelBadge";
import theme from "styles/theme";
import { labelData } from "data";
import useDebounce from "hooks/useDebounce";
const LabelInput = ({ isEditor }) => {
	const {
		creatorTitle,
		editorTitle,
		inputTitles,
		backgroundColorTitle,
		textColorTitles,
		buttons,
	} = labelData;

	const initLabelState = {
		name: "레이블 이름",
		description: null,
		backgroundColor: theme.grayScale.input_background,
		textColor: false,
	};
	const reducer = (state, { type, payload }) => {
		switch (type) {
			case "name":
				return { ...state, name: payload };
			case "description":
				return { ...state, description: payload };
			case "backgroundColor":
				return { ...state, backgroundColor: payload };
			case "textColor":
				return { ...state, textColor: payload };
		}
	};
	const [labelState, dispatch] = useReducer(reducer, initLabelState);

	const handleClickRadioButton = event => {
		dispatch({ type: "textColor", payload: event.target.value });
	};
	const handleChangeColor = event => {
		//디바운스 필요(유저가 입력하고 1초 뒤에 set 하도록)
		dispatch({ type: "backgroundColor", payload: event.target.value });
	};
	const test = useDebounce(labelState.description, 1000);

	const handleTypingName = event => {
		if (event.target.id === "0") {
			dispatch({ type: "name", payload: event.target.value });
		} else {
			// 디바운스 필요(유저가 입력하고 1초 뒤에 set 하도록)
			dispatch({ type: "description", payload: event.target.value });
		}
	};
	const getFontColor = () => {
		return labelState.textColor === "light"
			? theme.grayScale.off_white
			: theme.grayScale.black;
	};
	const changeColor = () => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		dispatch({
			type: "backgroundColor",
			payload: `#${randomColor}`,
		});
	};

	return (
		<LabelInputLayout isEditor={isEditor}>
			<Title>{isEditor ? editorTitle : creatorTitle}</Title>
			<MainLayout>
				<PreviewContainer>
					<LabelBadge
						text={labelState.name}
						fontColor={getFontColor()}
						backgroundColor={labelState.backgroundColor}
					/>
				</PreviewContainer>

				<SettingContainer>
					{inputTitles.map((title, idx) => (
						<TextInputContainer _width={"100%"} key={`title-${idx}`}>
							<SubTitle>{title}</SubTitle>
							<TextInput
								id={idx}
								onChange={handleTypingName}
								autocomplete="off"
							/>
						</TextInputContainer>
					))}
					<DisplayFlex>
						<TextInputContainer _width={"20%"}>
							<SubTitle>{backgroundColorTitle}</SubTitle>
							<TextInput
								value={labelState.backgroundColor}
								onChange={handleChangeColor}
							/>
							<Icon onClick={changeColor} />
						</TextInputContainer>
						<TextInputContainer _width={"40%"}>
							<SubTitle>{textColorTitles}</SubTitle>
							<CenterAi>
								{buttons.radio.map((button, idx) => {
									return (
										<>
											<RadioButton
												type="radio"
												value={button.value}
												checked={button.value === labelState.textColor}
												onChange={handleClickRadioButton}
												key={`radio-${idx}`}
											/>
											<RadioText>{button.text}</RadioText>
										</>
									);
								})}
							</CenterAi>
						</TextInputContainer>
					</DisplayFlex>
					<ButtonContainer>
						{isEditor && (
							<CancelButton>
								<XIcon stroke={theme.colors.blue} />
								{buttons.cancel}
							</CancelButton>
						)}
						<SubmitButton>
							{isEditor ? (
								<EditIcon stroke={theme.grayScale.off_white} />
							) : (
								<PlusIcon stroke={theme.grayScale.off_white} />
							)}
							{buttons.submit}
						</SubmitButton>
					</ButtonContainer>
				</SettingContainer>
			</MainLayout>
		</LabelInputLayout>
	);
};

const LabelInputLayout = styled.div`
	height: 345px;
	background-color: ${({ theme }) => theme.grayScale.off_white};
	border: 1px solid ${({ theme }) => theme.grayScale.line};
	border-radius: ${props => (props.isEditor ? "none" : "16px")};
	margin-bottom: ${props => (props.isEditor ? 0 : "2%")};
`;

const MainLayout = styled.div`
	display: flex;
	position: relative;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const PreviewContainer = styled.div`
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SettingContainer = styled.div`
	width: 80%;
	padding: 0 50px;
`;

const TextInputContainer = styled(CenterAi)`
	display: flex;
	padding: 0px 24px;
	margin-right: 1%;
	margin-bottom: 16px;
	background: ${({ theme }) => theme.grayScale.input_background};
	border-radius: 11px;
	width: ${props => props._width};
	height: 40px;
	border: none;
	color: ${({ theme }) => theme.grayScale.title_active};
`;

const CancelButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 16px;
	margin: 0 3px;
	width: 120px;
	height: 40px;
	color: ${theme.colors.blue};
	background: ${theme.colors.off_white};
	border: 2px solid ${theme.colors.blue};
	border-radius: 11px;
	cursor: pointer;
`;

const SubmitButton = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0px 16px;
	margin: 0 3px;
	width: 120px;
	height: 40px;
	background: ${theme.colors.blue};
	color: ${theme.grayScale.off_white};
	border-radius: 11px;
	cursor: pointer;
`;

const RadioButton = styled.input`
	cursor: pointer;
`;

const Title = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.xxxl};
	padding: 32px;
`;

const SubTitle = styled(CenterAi)`
	width: 80px;
	height: 40px;
	font-weight: 500;
	font-size: 12px;
	line-height: 20px;
	color: ${({ theme }) => theme.grayScale.label};
`;

const TextInput = styled.input`
	background: ${({ theme }) => theme.grayScale.input_background};
	width: 100%;
	height: 100%;

	color: ${({ theme }) => theme.grayScale.title_active};
	border: none;
`;
const RadioText = styled.div`
	color: ${({ theme }) => theme.grayScale.body};
	font-size: ${({ theme }) => theme.fontSizes.xs};
	line-height: 28px;
	padding: 0;
`;

const Icon = styled(RefreshIcon)`
	cursor: pointer;
`;

export default LabelInput;
