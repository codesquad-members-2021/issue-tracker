export const getGridRateStyle = gridRateArr => {
	let result = "";
	gridRateArr.forEach(el => {
		result += el + "fr ";
	});
	return result;
};
