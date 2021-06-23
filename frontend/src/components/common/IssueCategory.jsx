import styled from "styled-components";
import { ReactComponent as PlusIcon } from "images/plus.svg";
import theme from "styles/theme";
import LabelBadge from "components/common/LabelBadge";
import IssueCategoryModal from "./IssueCategoryModal";
import { ImgWrapper } from "styles/StyledLayout";
const IssueCategory = ({ category }) => {
	const initialCategory = {
		assignee: null,
		label: null,
		milestone: null,
	};
	const getTitleText = () => {
		switch (category) {
			case "assignee":
				return "담당자";
			case "label":
				return "라벨";
			case "milestone":
				return "마일스톤";
			default:
				console.error("unhandled TitleText type!!");
		}
	};
	const handleAddFilter = () => {
		console.log("clicked");
	};

	return (
		<Layout>
			<HeaderContainer>
				<TitleText>{getTitleText(category)}</TitleText>
				<Icon stroke={theme.grayScale.label} onClick={handleAddFilter} />
			</HeaderContainer>

			{category === "assignee" && (
				<>
					<ContentsContainer>
						<ImgWrapper size="44px">
							<img
								src="https://avatars.githubusercontent.com/u/56783350?v=4"
								alt="유저이름"
							/>
						</ImgWrapper>
						<ContentsText>유저이름</ContentsText>
					</ContentsContainer>
					{/* <IssueCategoryModal /> */}
				</>
			)}
			{category === "label" && (
				<>
					<ContentsContainer>
						<LabelBadge
							text="hiGoody"
							fontColor="#f5e1e1"
							backgroundColor="#e04b4b"
						/>
					</ContentsContainer>
					<IssueCategoryModal />
				</>
			)}
			{category === "milestone" && (
				<>
					<MilestoneTotalProgressBar />
					<ContentsText>마스터즈 코스 수료</ContentsText>
				</>
			)}
		</Layout>
	);
};

const Layout = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 32px;
	background: #fefefe;
	border-radius: 16px;
	border: 1px solid #d9dbe9;
	border-radius: 16px;
	margin-left: 5%;
`;
const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding-bottom: 18px;
`;
const ContentsContainer = styled.div`
	display: flex;
	padding: 9px 0;
`;

const Icon = styled(PlusIcon)`
	cursor: pointer;
`;
const TitleText = styled.div`
	color: ${({ theme }) => theme.grayScale.label};
	font-weight: bold;
`;
const ContentsText = styled.div`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.grayScale.label};
	height: 44px;
`;
const MilestoneTotalProgressBar = styled.div`
	width: 100%;
	height: 8px;
	border-radius: 10px;
	//이부분 진행률로 수정 바랍니다~
	background: linear-gradient(
		90deg,
		#007aff 0%,
		#007aff 50.11%,
		#f7f7fc 50.12%,
		#f7f7fc 100%
	);
`;
export default IssueCategory;
