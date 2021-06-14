import Modal from "@/Components/AtomicComponents/Modal/Modal";
import { FilterSearchBar as S } from "../../HomeStyles";

const FilterModal = () => {
  const mock = [
    "열린 이슈",
    "내가 작성한 이슈",
    "나에게 할당된 이슈",
    "내가 댓글을 남긴 이슈",
    "닫힌 이슈",
  ];

  return (
    <S.FilterModalDiv>
      <Modal modalTitle="이슈" modalDataArray={mock} />
    </S.FilterModalDiv>
  );
};

export default FilterModal;
