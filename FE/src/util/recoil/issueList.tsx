import { atom } from "recoil";

export const filterModalVisible = atom({
    key: 'filterModalVisible',
    default: false,
});

export const modalClassNames = atom({
    key: 'modalClassNames',
    default: [
        "filterModal"
    ],
});

