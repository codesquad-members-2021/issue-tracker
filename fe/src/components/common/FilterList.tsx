import FilterItem from './FilterItem';
import { FilterItemType, FilterListType } from '../../types/filterType';

const FilterList = ({ filterList, popupState }: FilterListType) => {
  return (
    <ul>
      {filterList.map((filterItem: FilterItemType) => {
        return (
          <>
            <FilterItem popupState={popupState} filterItem={filterItem} />
          </>
        );
      })}
    </ul>
  );
};

export default FilterList;
