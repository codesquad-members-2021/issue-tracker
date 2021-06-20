import styled from "styled-components";
import { useState, useCallback } from "react";
import AddButton from "components/common/Button/AddButton";
import useFetch from "hooks/useFetch";
import API from "util/API";

const MilestoneInput = () => {
	const [inputData, setInputData] = useState({});
	const [milestoneData, setMilestoneData] = useState();
	const { res, fetchData } = useFetch(
		API.milestones(),
		"POST",
		setMilestoneData,
		inputData
	);

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
		fetchData();
	};

	return (
		<CardWrapper>
			<Header>새로운 마일스톤 추가</Header>
			<InputWrapper>
				<InputHalf>
					<Input
						type="text"
						placeholder="마일스톤 이름"
						onChange={handleTitleChange}
					/>
				</InputHalf>
				<InputHalf>
					<Input
						type="date"
						placeholder="완료일(선택) ex. YYYY-MM-DD"
						onChange={handleDateChange}
					/>
				</InputHalf>
			</InputWrapper>
			<Input type="text" placeholder="설명(선택)" onChange={handleDescChange} />
			<BtnWrapper>
				<AddButton text="완료" clickEvent={handleSubmit} />
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
