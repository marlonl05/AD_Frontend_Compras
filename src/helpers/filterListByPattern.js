export const filterListByPattern = (list, pattern) => {
	const filteredList = list.filter(item => {
		const isMatchWithPattern = Object.values(item).some(value =>
			value.toString().toLowerCase().includes(pattern.toLowerCase())
		);
		return isMatchWithPattern;
	});
	return filteredList;
};
