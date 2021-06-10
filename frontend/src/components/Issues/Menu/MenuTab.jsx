import { TabButton, AddButton } from "styles/StyledButtons";

const MenuTab = () => {
	return (
		<div>
			<TabButton>마일스톤</TabButton>
			<TabButton>레이블</TabButton>
			<AddButton>+ 이슈작성</AddButton>
		</div>
	);
};

export default MenuTab;
