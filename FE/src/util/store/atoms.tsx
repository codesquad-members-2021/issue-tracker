import { atom } from "recoil";

const searchModalVisible = atom({
    key: 'searchModalVisible',
    default: false,
});

export { searchModalVisible };