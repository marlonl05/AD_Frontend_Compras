export const mapListToObject = (list, itemKey = 'id') => {
	return list.reduce((acc, item) => {
		acc[item[itemKey]] = item;
		return acc;
	}, {});
};

export const mapObjectToListIds = object => object.map(item => item.id);
