import styled from "styled-components";
import { useState, useCallback } from "react";
import AddButton from "components/common/Button/BlueButtons";
import useFetch from "hooks/useFetch";
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
	const [inputData, setInputData] = useState({});
	const [milestoneData, setMilestoneData] = useState();
	const setMilestoneAddButtonFlag = useSetRecoilState(
		milestoneAddButtonFlagState
	);
	const [update, forceUpdate] = useRecoilState(milestoneUpdateState);

	const putMilestone = async () => {
		await fetchData(API.milestonesId(id), "PUT", inputData);
	};

	const postMilestone = async () => {
		await fetchData(API.milestonesId(id), "POST", inputData);
	};

	const handleTitleChange = e => {
		setInputData({
			...inputData,
			title: e.target.value,
		});
	};

	const handleDateChange = e => {
		setInputData({
			...inputData,
			dueDate: e.target.value,
		});
	};

	const handleDescChange = e => {
		setInputData({
			...inputData,
			description: e.target.value,
		});
	};

	const handleSubmit = () => {
		console.log("submit clicked");
		postMilestone();
		setMilestoneAddButtonFlag(false);
		// forceUpdate(!update);
	};

	const handleEdit = () => {
		console.log("edit clicked");
		putMilestone();
		setMilestoneAddButtonFlag(false);
		// setEditMode(false);
		// forceUpdate(!update);
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
					/>
				</InputHalf>
				<InputHalf>
					<Input
						type="date"
						placeholder={dueDate ? dueDate : "완료일(선택) ex. YYYY-MM-DD"}
						onChange={handleDateChange}
					/>
				</InputHalf>
			</InputWrapper>
			<Input
				type="text"
				placeholder={description ? description : "설명(선택)"}
				onChange={handleDescChange}
			/>
			<BtnWrapper>
				<AddButton
					text="완료"
					icon="plus"
					size="m"
					clickEvent={editMode ? handleEdit : handleSubmit}
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
