import styled from "styled-components";
import { ImgWrapper } from "styles/StyledLayout";
import getCategoryText from "util/getCategoryText.js";
import LabelBadge from "../LabelBadge.jsx";
import { CATEGORY } from "data";
const IssueCategoryModal = ({ category, data }) => {
	const handleChecked = e => {
		console.log(e.target.value);
		console.log(e.target.checked);
	};
	const getModalContents = () => {
		switch (category) {
			case CATEGORY.ASSIGNEE:
				const assigneeComponent = data.map((user, idx) => (
					<Row key={`${CATEGORY.ASSIGNEE}-${idx}`}>
						<Contents>
							<ImgWrapper size="22px">
								<img src={user.imageUrl} alt={user.githubId} />
							</ImgWrapper>
							<ContentsText>{user.githubId}</ContentsText>
						</Contents>
						<input
							type="checkbox"
							value={user.id}
							onChange={handleChecked}
						></input>
					</Row>
				));
				return assigneeComponent;
			case CATEGORY.LABEL:
				const labelComponent = data.map((label, idx) => (
					<Row key={`${CATEGORY.LABEL}-${idx}`}>
						<Contents>
							<LabelBadge
								text={label.name}
								fontColor={label.colors.textColor}
								backgroundColor={label.colors.backgroundColor}
							/>
						</Contents>
						<input type="checkbox" value={label.id}></input>
					</Row>
				));
				return labelComponent;
			case CATEGORY.MILESTONE:
				console.log(data);
				const milestoneComponent = data.map((milestone, idx) => (
					<Row key={`${CATEGORY.MILESTONE}-${idx}`}>
						<Contents>{milestone.title}</Contents>
						<input type="checkbox" value={milestone.id}></input>
					</Row>
				));
				return milestoneComponent;
			default:
				return <div>일치하는 category가 없어요!!🤦‍♀️</div>;
		}
	};

	return (
		<ModalContainer>
			<Title>{getCategoryText(category)} 필터</Title>
			{data && getModalContents()}
		</ModalContainer>
	);
};

const ModalContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 10%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 80%;
	background: #fefefe;
	border: 1px solid #d9dbe9;
	border-radius: 16px;
	z-index: 1;
	color: #14142b;
`;
const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 14px;
`;
const Title = styled.div`
	padding: 16px;
	width: 100%;
	height: 48px;
	background: #f7f7fc;
	border-radius: 16px 16px 0px 0px;
	font-size: 18px;
`;
const Contents = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;
const ContentsText = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
`;

export default IssueCategoryModal;
