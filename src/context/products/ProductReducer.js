export const productReducer = (productState, { type, payload }) => {
	switch (type) {
		case 'LOAD_PRODUCTS':
			return {
				...productState,
				products: payload,
			};

		default:
			return productState;
	}
};
