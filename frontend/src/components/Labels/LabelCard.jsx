import { StyledGridCard } from "styles/StyledCards";

const LabelCard = () => {
	return (
		<StyledGridCard gridRate={[0.5, 1.5, 0.5]}>
			<div>레이블딱지</div>
			<div>레이블 설명</div>
			<div>편집 혹은 삭제</div>
		</StyledGridCard>
	);
};

export default LabelCard;
