export const productReducer = (productState, { type, payload }) => {
	switch (type) {
		case 'LOAD_PRODUCTS':
			return {
				...productState,
				...payload,
			};

		default:
			return productState;
	}
};
