const getTimeStamp = (dateInfo) => {
	const now = new Date();
	const logTime = new Date(dateInfo);
	const diff = Math.floor((now.getTime() - logTime.getTime()) / 1000 / 60);
	if (diff < 1) return `방금 전`;
	if (diff < 60) return `${diff}분전`;

	const diffHour = Math.floor(diff / 60);
	if (diffHour < 24) return `${diffHour}시간 전`;

	const diffDay = Math.floor(diffHour / 60 / 24);
	if (diffDay < 365) return `${diffDay}일 전`;

	return `${Math.floor(diffDay / 365)}년 전`;
};

export default getTimeStamp;
