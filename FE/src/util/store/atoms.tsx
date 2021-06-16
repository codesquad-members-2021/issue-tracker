import { atom } from 'recoil';

// 1. issueList 전용

const searchModalVisible = atom({ key: 'searchModalVisible', default: false });
const assigneeModalVisible = atom({
  key: 'assigneeModalVisible',
  default: false,
});
const labelModalVisible = atom({ key: 'labelModalVisible', default: false });
const milestoneModalVisible = atom({
  key: 'milestoneModalVisible',
  default: false,
});
const writerModalVisible = atom({ key: 'writerModalVisible', default: false });

// =====

const atoms = {
  issueList: {
    searchModalVisible,
    assigneeModalVisible,
    labelModalVisible,
    milestoneModalVisible,
    writerModalVisible,
  },
};

export default atoms;
