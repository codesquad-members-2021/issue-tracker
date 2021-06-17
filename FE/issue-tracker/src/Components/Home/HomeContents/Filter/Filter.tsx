import { FilterSearchBar as S, HomeAssets as SVG } from "../../HomeStyles";
import { useRecoilState } from "recoil";
import { filterModalOpenState } from "../../HomeStore";
import FilterModal from "./FilterModal";

const Filter = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] =
    useRecoilState(filterModalOpenState);

  const handleFilterClick = () => setIsFilterModalOpen(!isFilterModalOpen);

  return (
    <>
      <S.FilterDiv onClick={handleFilterClick}>
        필터
        <SVG.Down />
      </S.FilterDiv>
      {isFilterModalOpen && <FilterModal />}
    </>
  );
};

export default Filter;
