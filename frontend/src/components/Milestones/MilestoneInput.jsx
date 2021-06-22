import styled from "styled-components";
import { useState } from "react";
import AddButton from "components/common/Button/BlueButtons";
import API from "util/API";
import { useSetRecoilState, useRecoilState } from "recoil";
import {
	milestoneAddButtonFlagState,
	milestoneUpdateState,
} from "RecoilStore/Atoms";
import fetchData from "util/fetchData";

const MilestoneInput = ({
	title,
	dueDate,
	description,
	id,
	editMode,
	setEditMode,
}) => {
	const [inputData, setInputData] = useState({
		title: title,
		dueDate: dueDate,
		description: description,
	});
	const setMilestoneAddButtonFlag = useSetRecoilState(
		milestoneAddButtonFlagState
	);
	const [update, forceUpdate] = useRecoilState(milestoneUpdateState);

	const [titleInput, setTitleInput] = useState(title);
	const [dateInput, setDateInput] = useState(dueDate);
	const [descInput, setDescInput] = useState(description);

	const putMilestone = async () => {
		await fetchData(API.milestonesId(id), "PUT", inputData);
		setMilestoneAddButtonFlag(false);
		setEditMode(false);
		forceUpdate();
	};

	const postMilestone = async () => {
		await fetchData(API.milestones(), "POST", inputData);
		setMilestoneAddButtonFlag(false);
	};

	const handleTitleChange = (e) => {
		setTitleInput(e.target.value);
		setInputData({
			...inputData,
			title: e.target.value,
		});
	};

	const handleDateChange = (e) => {
		setDateInput(e.target.value);
		setInputData({
			...inputData,
			dueDate: e.target.value,
		});
	};

	const handleDescChange = (e) => {
		setDescInput(e.target.value);
		setInputData({
			...inputData,
			description: e.target.value,
		});
	};

	console.log(editMode);

	return (
		<CardWrapper>
			<Header>{editMode ? "마일스톤 편집" : "새로운 마일스톤 추가"}</Header>
			<InputWrapper>
				<InputHalf>
					<Input
						type="text"
						placeholder={title ? title : "마일스톤 이름"}
						onChange={handleTitleChange}
						value={title && titleInput}
					/>
				</InputHalf>
				<InputHalf>
					<Input
						type="date"
						placeholder={dueDate ? dueDate : "완료일(선택) ex. YYYY-MM-DD"}
						onChange={handleDateChange}
						value={dueDate && dateInput}
					/>
				</InputHalf>
			</InputWrapper>
			<Input
				type="text"
				placeholder={description ? description : "설명(선택)"}
				onChange={handleDescChange}
				value={description && descInput}
			/>
			<BtnWrapper>
				<AddButton
					text="완료"
					clickHandler={editMode ? putMilestone : postMilestone}
					icon="plus"
					size="m"
				/>
			</BtnWrapper>
		</CardWrapper>
	);
};

export default MilestoneInput;

const Header = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.xxxl};
`;

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 288px;
	background-color: ${({ theme }) => theme.grayScale.off_white};
	padding: 1%;
	border: 1px solid ${({ theme }) => theme.grayScale.line};
	border-radius: ${({ theme }) => theme.border_radius.lg};
`;

const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const InputWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const InputHalf = styled.div`
	width: 49%;
`;

const Input = styled.input`
	width: 100%;
	height: 40px;
	background-color: ${({ theme }) => theme.grayScale.input_background};
	border: none;
	border-radius: ${({ theme }) => theme.border_radius.base};
	font-size: ${({ theme }) => theme.fontSizes.base};
	padding: 0 ${({ theme }) => theme.paddings.small};
`;
