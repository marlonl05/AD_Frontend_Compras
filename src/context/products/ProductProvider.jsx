/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useReducer } from 'react';
import { productReducer } from './ProductReducer';
import { ProductContext } from '../';
import { inventarioApi } from '../../api';
import { mapListToObject } from '../../helpers';
import { useAuthContext } from '../../hooks';
import { status } from '../../constants';

const initialState = {};

export const ProductProvider = ({ children }) => {
	const [products, productDispatch] = useReducer(productReducer, initialState);
	const { state, logged } = useAuthContext();

	const init = async () => {
		try {
			const { data } = await inventarioApi.get('/productos');

			productDispatch({ type: 'LOAD_PRODUCTS', payload: mapListToObject(data, 'pro_id') });
		} catch (error) {
			console.error(error);
			productDispatch({ type: 'LOAD_PRODUCTS', payload: initialState });
		}
	};

	useEffect(() => {
		if (!logged) return;

		if (state !== status.COMPLETED) return;
		init();
	}, [state, logged]);

	return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
};
