const getPercent = (openCnt, closeCnt) => {
	const sum = openCnt + closeCnt;
	if (sum === 0) return 0;
	return Math.floor((closeCnt / sum) * 100);
};

export default getPercent;
