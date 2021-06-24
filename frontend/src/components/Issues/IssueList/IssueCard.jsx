import { useState, useEffect } from "react";
import styled from "styled-components";
import theme from "styles/theme";
import { Link } from "react-router-dom";
import { ReactComponent as UserImageSmall } from "images/UserImageSmall.svg";
import { ReactComponent as Alert } from "images/alert-circle.svg";
import { ReactComponent as Milestone } from "images/milestone.svg";
import getTimeStamp from "util/getTimeStamp";
// import { useRecoilState } from "MyRecoil";
// import { selectedIssueCntState } from "MyRecoil/atom";
import { selectedIssueCntState } from "RecoilStore/Atoms";
import { useRecoilState } from "recoil";
import { StyledGridCard } from "styles/StyledCards";
import LabelBadge from "components/common/LabelBadge";
import { ImgWrapper } from "styles/StyledLayout";

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
		selectedIssueCntState
	);
	const {
		title,
		id,
		labels,
		milestone,
		author,
		createdAt,
		open,
		assignees,
	} = issue;
	console.log("labels", labels);
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
						<Alert stroke={theme.colors.blue} />
						<Link to={`/main/${id}`}>{title}</Link>
					</span>
					<LabelContainer>
						{labels.length > 0
							? labels.map((label, idx) => (
									<LabelBadge
										text={label.name}
										fontColor={"#000"}
										backgroundColor={"#fcaffced"}
									/>
							  ))
							: ""}
					</LabelContainer>
				</TextTagDivider>
				<TextTagDivider>
					<span>#{id} </span>
					<TextContainer>
						이 이슈가 {getTimeStamp(createdAt)}, {author.githubId}님에 의해
						작성되었습니다
					</TextContainer>
					<TextContainer>
						{milestone && <Milestone fill={theme.grayScale.label} />}
					</TextContainer>
					<TextContainer>{milestone ? milestone.title : ""}</TextContainer>
				</TextTagDivider>
			</Contents>
			<UserImgContainer>
				<img src={author.imageUrl} alt={author.gitHubId} />
			</UserImgContainer>
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

const TextContainer = styled.span`
	padding: 0 5px;
`;

const LabelContainer = styled.div`
	display: flex;
	width: 10%;
`;

const UserImgContainer = styled.div`
	display: flex;
	align-self: center;
	width: 20px;
	height: 20px;
	border: 1px solid ${({ theme }) => theme.grayScale.line};
	border-radius: 50%;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
	}
`;
