import { TabAssets as Icon, LabelMilestoneTable as S } from "../../TabStyles";

const ContentTitle = () => {
  return (
    <S.TitleWrapper>
      <span>
        <Icon.MilestoneTag strokecolor="#007AFF" />
        마일스톤 제목
      </span>
      <S.DateSpan>
        <Icon.CalendarIcon />
        완료일 일정
      </S.DateSpan>
    </S.TitleWrapper>
  );
};

export default ContentTitle;
