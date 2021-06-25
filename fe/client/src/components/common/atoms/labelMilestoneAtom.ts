import atom from '@/utils/myRecoil/atom';

export type LabelMilestoneCountAtomType = {
  label: number;
  milestone: number;
}

export const labelMilestoneCountAtom = atom<LabelMilestoneCountAtomType>({
  key: 'labelMilestoneCountAtom',
  default: {
    label: 0,
    milestone: 0
  }
});