import { atom, selector } from 'recoil'
interface newAsyncCount{
  label:number
  milestone:number
  openedIssue:number
  closedIssue:number
}

const countInfo = atom<any>({
  key: 'countInfo',
  default: {label: 0, milestone: 0, openedIssue: 0, closeIssue:0}
})

export const CountInfoStorage = selector<any>({
  key: 'storage/countInfo',
  get:({get})=>{
    const countInfos = get(countInfo)
    return countInfos
  },
  set:({set}, newAsync:newAsyncCount)=>{
    const {label:nLabel, milestone:nMilestone, openedIssue:nOpenedIssue, closedIssue:nClosedIssue} = newAsync
    set(countInfo,
      (prev)=>({
      ...prev,
      label:nLabel,
      milestone: nMilestone,
      openedIssue: nClosedIssue,
      closedIssue: nOpenedIssue
    }))
  }
})

const openIssues = atom<any>({
  key: 'issues/open',
  default: []
})

export const openIssuesStorage = selector({
  key: 'storage/issues/open',
  get: ({get})=>{
    const open = get(openIssues)
    return open
  },
  set:({set}, newAsync)=>{
    set(openIssues, newAsync)
  }
})

export const getOpenIssues = selector({
  key: 'GET/issues/open',
  get: async ()=>{
    try {
      const response = await fetch(`http://3.37.76.224/api/issues?status=open`)
      return response.json()
    } catch (err) {
      console.error(err)
    }
  }
})
