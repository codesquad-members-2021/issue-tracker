import styled from "styled-components";
import { DisplayFlex, CenterAi, CenterJcAi } from "styles/StyledLayout ";
import { ReactComponent as RefreshIcon } from "images/refresh-ccw.svg";
import { ReactComponent as XIcon } from "images/x-square.svg";
import { ReactComponent as EditIcon } from "images/edit.svg";
import { ReactComponent as PlusIcon } from "images/plus.svg";
import { useState, useEffect } from "react";
import LabelBadge from "components/common/LabelBadge";
import theme from "styles/theme";
import { labelData } from "data";
import useDebounce from "hooks/useDebounce";
const LabelInput = ({ isEditor }) => {
	//🔥아래 상태 한번에 관리할까 말까 고민중⭐️
	const initLabelState = {
		name: null,
		description: null,
		bgColor: null,
		textColor: null,
	};
	const [input, setInput] = useState("");
	const [textColor, setTextColor] = useState(false);
	const [backGroundColor, setBackGroundColor] = useState(
		theme.grayScale.input_background
	);
	const [labelName, setLabelName] = useState("레이블 이름");
	const [labelDescription, setLabelDescription] = useState("");
	const {
		creatorTitle,
		editorTitle,
		inputTitles,
		bgColorTitles,
		textColorTitles,
		buttons,
	} = labelData;
	console.log(textColor);

	const handleClickRadioButton = event => {
		const value = event.target.value;
		setTextColor(value);
	};

	const test = useDebounce(input, 1000); //커스텀 훅은 컴포넌트 안에서 호출되어야 하는 부분 고려!
	console.log(test);
	console.log(backGroundColor);
	const handleTypingName = event => {
		if (event.target.id === "0") {
			const textInput = event.target.value;
			setLabelName(textInput);
		} else {
			//🔥description 해결중 : 작성 후 1초 뒤에 set되면서 리렌더링 되도록 하고 싶음(디바운스)
			setInput(event.target.value);
			setLabelDescription(input);
		}
	};
	const getFontColor = () => {
		return textColor === "light"
			? theme.grayScale.off_white
			: theme.grayScale.black;
	};
	const changeColor = () => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		setBackGroundColor(`#${randomColor}`);
	};

	return (
		<LabelInputLayout isEditor={isEditor}>
			<Title>{isEditor ? editorTitle : creatorTitle}</Title>
			<MainLayout>
				<PreviewContainer>
					<LabelBadge
						text={labelName}
						fontColor={getFontColor()}
						bgColor={backGroundColor}
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
							<SubTitle>{bgColorTitles}</SubTitle>
							<TextInput defaultValue={backGroundColor} />
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
												checked={textColor === button.value}
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
