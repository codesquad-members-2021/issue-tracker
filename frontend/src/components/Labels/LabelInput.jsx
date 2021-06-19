import styled from "styled-components";
import { DisplayFlex, CenterAi, CenterJcAi } from "styles/StyledLayout ";
import { ReactComponent as RefreshIcon } from "images/refresh-ccw.svg";
import { ReactComponent as XIcon } from "images/x-square.svg";
import { ReactComponent as EditIcon } from "images/edit.svg";
import { ReactComponent as PlusIcon } from "images/plus.svg";
import { useState } from "react";
import LabelBadge from "components/common/LabelBadge";
import theme from "styles/theme";
import { labelData } from "data";
const LabelInput = ({ isEditor }) => {
	const [inputValue, setInputValue] = useState(false);
	const {
		creatorTitle,
		editorTitle,
		inputTitles,
		bgColorTitles,
		textColorTitles,
		buttons,
	} = labelData;
	const handleClickRadioButton = event => {
		const value = event.target.value;
		setInputValue(value);
	};

	const changeColor = () => {};

	return (
		<LabelInputLayout isEditor={isEditor}>
			<Title>{isEditor ? editorTitle : creatorTitle}</Title>
			<MainLayout>
				<PreviewContainer>
					<LabelBadge
						text={"모닝알고리즘"}
						fontColor={"white"}
						bgColor={"#004de3"}
					/>
				</PreviewContainer>

				<SettingContainer>
					{inputTitles.map(title => (
						<TextInputContainer _width={"100%"}>
							<SubTitle>{title}</SubTitle>
							<TextInput />
						</TextInputContainer>
					))}
					<DisplayFlex>
						<TextInputContainer _width={"20%"}>
							<SubTitle>{bgColorTitles}</SubTitle>
							<TextInput />
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
												checked={inputValue === button.value}
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
