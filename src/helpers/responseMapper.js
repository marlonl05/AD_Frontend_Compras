export const mapListToObject = list => {
	return list.reduce((acc, item) => {
		acc[item.id] = item;
		return acc;
	}, {});
};

export const mapObjectToListIds = object => object.map(item => item.id);
