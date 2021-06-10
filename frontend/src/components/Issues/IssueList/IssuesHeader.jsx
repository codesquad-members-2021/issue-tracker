import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Archive } from "images/archive.svg";
import { ReactComponent as Alert } from "images/alert-circle.svg";
import { ReactComponent as DownArrow } from "images/chevron_down.svg";
import theme from "styles/theme";

const IssuesHeader = () => {
	const [isIssueSelected, setIsIssueSelected] = useState(false); // 상태 위치 협의 후 수정
	return (
		<StyledIssuesHeader>
			<CheckBox>
				<input type="checkbox" />
			</CheckBox>
			<FilterOpenClose>
				<TextIconDivider>
					<Alert /> 열린 이슈(n)
				</TextIconDivider>
				<TextIconDivider>
					<Archive /> 닫힌 이슈(n)
				</TextIconDivider>
			</FilterOpenClose>
			<FilterMain>
				{isIssueSelected ? (
					<OpenCloseEdit>
						<TextIconDivider>
							상태 수정
							<DownArrow />
						</TextIconDivider>
					</OpenCloseEdit>
				) : (
					<FiltersWrapper>
						<TextIconDivider>
							담당자
							<DownArrow />
						</TextIconDivider>
						<TextIconDivider>
							레이블
							<DownArrow />
						</TextIconDivider>
						<TextIconDivider>
							마일스톤
							<DownArrow />
						</TextIconDivider>
						<TextIconDivider>
							작성자
							<DownArrow />
						</TextIconDivider>
					</FiltersWrapper>
				)}
			</FilterMain>
		</StyledIssuesHeader>
	);
};

export default IssuesHeader;

const StyledIssuesHeader = styled.div`
	display: grid;
	align-items: center;
	height: 64px;
	border: 1px solid ${theme.grayScale.line};
	border-radius: ${theme.border_radius.lg} ${theme.border_radius.lg} 0px 0px;
	grid-template-columns: 0.5fr 1.2fr 8.3fr;
`;

const FilterOpenClose = styled.div`
	display: flex;
	justify-content: space-between;
`;

const FilterMain = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const OpenCloseEdit = styled.div`
	display: flex;
	width: 200px;
	justify-content: center;
`;

const FiltersWrapper = styled.div`
	display: flex;
	width: 500px;
	justify-content: space-around;
`;

export const CheckBox = styled.div`
	display: flex;
	justify-content: center;
`;

const TextIconDivider = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
