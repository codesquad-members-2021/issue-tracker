import { useState, useEffect } from "react";
import styled from "styled-components";
import theme from "styles/theme";
import { Link } from "react-router-dom";
import { ReactComponent as UserImageSmall } from "images/UserImageSmall.svg";
import { ReactComponent as Alert } from "images/alert-circle.svg";
import { ReactComponent as Milestone } from "images/milestone.svg";
import getTimeStamp from "util/getTimeStamp";
// import { useRecoilState } from "MyRecoil";
// import { selectedIssueCntAtomState } from "MyRecoil/atom";
import { selectedIssueCntAtomState } from "RecoilStore/Atoms";
import { useRecoilState } from "recoil";
import { StyledGridCard } from "styles/StyledCards";

const IssueCard = ({
	issue,
	setIsAnyIssueSelected,
	isAllIssueSelected,
	setIsAllIssueSelected,
	selectedCards,
	setSelectedCards,
}) => {
	const [isChecked, setIsChecked] = useState(false);
	const [selectedIssues, setSelectedIssues] = useRecoilState(
		selectedIssueCntAtomState
	);
	const { title, id, labelId, milestoneId, author, createdAt } = issue;
	const handleCheck = () => {
		setIsChecked(!isChecked);
		if (isChecked) {
			setSelectedIssues(selectedIssues - 1);
			selectedCards.delete(id);
		}
		if (!isChecked) {
			setSelectedIssues(selectedIssues + 1);
			setSelectedCards(selectedCards.add(id));
		}
	};
	// console.log(selectedCards);
	// console.log(selectedIssues);
	useEffect(() => {
		isChecked ? setIsAnyIssueSelected(true) : setIsAnyIssueSelected(false);
	}, [isChecked]);

	useEffect(() => {
		if (isAllIssueSelected) {
			setIsChecked(true);
			setSelectedCards(selectedCards.add(id));
		}
		if (!isAllIssueSelected) {
			setIsChecked(false);
			selectedCards.delete(id);
		}
	}, [isAllIssueSelected]);

	return (
		<StyledGridCard gridRate={[0.5, 9, 0.6]}>
			<CheckBox>
				<input type="checkbox" checked={isChecked} onChange={handleCheck} />
				<div>-</div>
			</CheckBox>
			<Contents>
				<TextTagDivider>
					<span>
						<Alert /> <Link to={`/main/${id}`}>{title}</Link>
					</span>
					<Padder>
						라벨 위치
						{/* labelId 로 라벨 정보 fetch 해와서 title, 라벨 렌더링 */}
					</Padder>
				</TextTagDivider>
				<TextTagDivider>
					<span>#{id} </span>
					<Padder>
						이 이슈가 {getTimeStamp(createdAt)}, {author}님에 의해
						작성되었습니다
					</Padder>
					<Padder>
						<Milestone fill={theme.grayScale.label} />
					</Padder>
					<Padder>
						마일스톤 이름
						{/* milestoneId 로 마일스톤 정보 fetch 해와서 title만 뿌리기 */}
					</Padder>
				</TextTagDivider>
			</Contents>
			<UserIcon>
				<UserImageSmall />
			</UserIcon>
		</StyledGridCard>
	);
};

export default IssueCard;

const CheckBox = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
`;

const UserIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Contents = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
`;

const TextTagDivider = styled.div``;

const Padder = styled.span`
	padding: 0 5px;
`;
