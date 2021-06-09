function timeChecker(sec:number){
  sec=sec/1000
  const min = 60
  const hour = min*60
  const day = hour*24
  const month = day*30
  const year = day*365
  if (sec/year>=1) return `${Math.ceil(sec/year)} years ago`
  if (sec/month>=1) return `${Math.ceil(sec/month)} months ago`
  if (sec/day>=1) return `${Math.ceil(sec/month)} days ago`
  if (sec/hour>=1) return `${Math.ceil(sec/hour)} hours ago`
  if (sec/min>=1) return `${Math.ceil(sec/min)} minutes ago`
  return 'now'
}

export default timeChecker