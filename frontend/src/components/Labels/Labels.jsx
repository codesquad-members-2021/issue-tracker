import styled from "styled-components";
import LabelCard from "./LabelCard";
import LabelInput from "./LabelInput";
import { StyledGridTitleCard } from "styles/StyledCards";
import useFetch from "hooks/useFetch";
import { useState, useEffect } from "react";
import API from "util/API";
import fetchData from "util/fetchData";

const Labels = () => {
	const [LabelData, setLabelData] = useState();
	// const status = useFetch(API.labels(), "GET", setLabelData);
	// console.log(LabelData, "status", status);
	const getLabelData = async () => {
		const data = await fetchData(API.labels(), "GET");
		setLabelData(data);
	};

	useEffect(() => {
		getLabelData();
	}, []);

	return (
		<>
			<LabelInput isEditor={false} />
			<StyledGridTitleCard gridRate={[1]}>
				<HeaderTitle>N개의 레이블</HeaderTitle>
			</StyledGridTitleCard>
			<LabelCard id={"apiID"} />
			<LabelInput isEditor={true} />
		</>
	);
};

const HeaderTitle = styled.div`
	font-weight: bold;
	color: ${({ theme }) => theme.grayScale.label};
	align-items: center;
	padding: 0 6%;
`;
export default Labels;
