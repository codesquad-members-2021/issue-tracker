import { atom, selector } from 'recoil';
import API from 'util/api/api';
//레이블,모달 클릭 감지 및 리셑_____________________________________
interface labelMilestoneStateType {
  label: boolean;
  milestone: boolean;
}

export const labelMilestoneClickedState = atom<labelMilestoneStateType>({
  key: 'labelMilestoneState',
  default: { label: false, milestone: false },
});

export const resetTabClickedState = selector({
  key: 'resetTabClickedState',
  get: ({ get }) => {
    const tabClickedState = get(labelMilestoneClickedState);
    return tabClickedState;
  },
  set: ({ reset }) => {
    reset(labelMilestoneClickedState);
  },
});

//마일즈스톤___________________________________________
const milestones = atom({
  key: 'milestones',
  default: null
})

export const getMilestones = selector({
  key: 'GET/milestones',
  get: async ({get})=>{
    try{  
      const response = await fetch(API.getMilestone)
      const milestoneData = await response.json()
      return milestoneData.milestones
    } catch(error){
      console.log('마일스톤조회 에러:', error)
    }
  }
})