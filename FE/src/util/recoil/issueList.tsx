import { atom } from "recoil";

export const searchModalVisible = atom({
    key: 'searchModalVisible',
    default: false,
});

export const modalTypes = atom({
    key: 'modalTypes',
    default: [
        "searchBar"
    ],
});

