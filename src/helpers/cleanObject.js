export const cleanObject = object => {
	const keys = Object.keys(object);

	return keys.reduce((acc, key) => {
		acc[key] = '';
		return acc;
	}, {});
};
