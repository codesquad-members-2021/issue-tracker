import styled from "styled-components";
import LabelCard from "./LabelCard";
import LabelInput from "./LabelInput";
import { StyledGridTitleCard } from "styles/StyledCards";
import { CenterAi } from "styles/StyledLayout ";
const Labels = () => {
	return (
		<>
			<LabelInput isEditor={false} />
			<StyledGridTitleCard gridRate={[1]}>
				<HeaderTitle>N개의 레이블</HeaderTitle>
			</StyledGridTitleCard>
			<LabelCard />
			<LabelInput isEditor={true} />
			<LabelCard />
			<LabelCard />
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
