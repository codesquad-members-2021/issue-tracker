import styled from "styled-components";
import { DisplayFlex, CenterAi } from "styles/StyledLayout";
import { ReactComponent as RefreshIcon } from "images/refresh-ccw.svg";
import { useReducer } from "react";
import LabelBadge from "components/common/LabelBadge";
import theme from "styles/theme";
import { labelData } from "data";
import API from "util/API";
import fetchData from "util/fetchData";
import CancelButton from "components/common/Button/WhiteButtons";
import SubmitButton from "components/common/Button/BlueButtons";
import {
	labelInitialData,
	labelAddButtonFlagState,
	navigatorAddButtonFlagState,
	labelUpdateState,
} from "RecoilStore/Atoms";

import { useSetRecoilState } from "recoil";

const LabelInput = ({ initialData, editBtnFlag, setEditBtnFlag }) => {
	const setLabelInitialData = useSetRecoilState(labelInitialData);
	const forceUpdate = useSetRecoilState(labelUpdateState);
	const setLabelAddBtnFlag = useSetRecoilState(labelAddButtonFlagState);
	const setNavigatorAddBtnFlag = useSetRecoilState(navigatorAddButtonFlagState);

	const {
		creatorTitle,
		editorTitle,
		nameTitle,
		descriptionTitle,
		backgroundColorTitle,
		textColorTitles,
		buttons,
	} = labelData;

	const { id, name, description, colors } = initialData;

	const initLabelState = {
		id: editBtnFlag ? id : "",
		name: editBtnFlag ? name : "",
		description: editBtnFlag ? description : "설명",
		backgroundColor: editBtnFlag
			? colors.backgroundColor
			: theme.grayScale.input_background,
		textColor: editBtnFlag ? colors.textColor : theme.grayScale.title_active,
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

	//dispatch모아서 처리하게끔 refactoring 필요
	const handleClickRadioButton = event => {
		const currentTextColor =
			event.target.value ===
			dispatch({ type: "textColor", payload: event.target.value });
	};
	const handleChangeColor = event => {
		dispatch({ type: "backgroundColor", payload: event.target.value });
	};

	const handleChangeName = event => {
		dispatch({ type: "name", payload: event.target.value });
	};

	const handleChangeDescription = event => {
		dispatch({ type: "description", payload: event.target.value });
	};

	const handleClose = () => {
		setEditBtnFlag(!editBtnFlag);
	};

	const handleAdd = async () => {
		const { name, description, backgroundColor, textColor } = labelState;

		const requestBody = {
			name: name,
			description: description,
			colors: {
				backgroundColor: backgroundColor,
				textColor: textColor,
			},
		};

		await fetchData(API.labels(), "POST", requestBody);
		setLabelAddBtnFlag(x => !x);
		setNavigatorAddBtnFlag(x => !x);
		const { labels } = await fetchData(API.labels(), "GET");
		setLabelInitialData(labels);
	};

	const handleEdit = async () => {
		const { name, description, backgroundColor, textColor } = labelState;
		const requestBody = {
			name: name,
			description: description,
			colors: {
				backgroundColor: backgroundColor,
				textColor: textColor,
			},
		};
		await fetchData(API.labelsId(id), "PUT", requestBody);
		setEditBtnFlag(false);
		forceUpdate(x => !x);
	};

	const changeColor = () => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		dispatch({
			type: "backgroundColor",
			payload: `#${randomColor}`,
		});
	};

	return (
		<LabelInputLayout editBtnFlag={editBtnFlag}>
			<Title>{editBtnFlag ? editorTitle : creatorTitle}</Title>
			<MainLayout>
				<PreviewContainer>
					{
						<LabelBadge
							text={labelState.name}
							fontColor={labelState.textColor}
							backgroundColor={labelState.backgroundColor}
						/>
					}
				</PreviewContainer>

				<SettingContainer>
					<TextInputContainer _width={"100%"}>
						<SubTitle>{nameTitle}</SubTitle>
						<TextInput
							onChange={handleChangeName}
							autocomplete="off"
							value={labelState.name}
						/>
					</TextInputContainer>

					<TextInputContainer _width={"100%"}>
						<SubTitle>{descriptionTitle}</SubTitle>
						<TextInput
							onChange={handleChangeDescription}
							autocomplete="off"
							value={labelState.description}
						/>
					</TextInputContainer>

					<DisplayFlex>
						<TextInputContainer _width={"25%"}>
							<SubTitle>{backgroundColorTitle}</SubTitle>
							<TextInput
								value={labelState.backgroundColor}
								onChange={handleChangeColor}
								autocomplete="off"
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
						{editBtnFlag && (
							<CancelButton
								text={buttons.cancel}
								icon="cancel"
								size="m"
								clickHandler={handleClose}
							/>
						)}
						{editBtnFlag ? (
							<SubmitButton
								text={buttons.submit}
								icon="edit"
								size="m"
								clickHandler={handleEdit}
							/>
						) : (
							<SubmitButton
								text={buttons.submit}
								icon="plus"
								size="m"
								clickHandler={handleAdd}
							/>
						)}
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
	border-radius: ${props => (props.editBtnFlag ? "none" : "16px")};
	margin-bottom: ${props => (props.editBtnFlag ? 0 : "2%")};
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
