import Modal from "@/Components/AtomicComponents/Modal/Modal";

const FilterModal = () => {
  const mock = [
    "열린 이슈",
    "내가 작성한 이슈",
    "나에게 할당된 이슈",
    "내가 댓글을 남긴 이슈",
    "닫힌 이슈",
  ];

  return <Modal modalTitle="이슈" modalDataArray={mock} />;
};

export default FilterModal;
