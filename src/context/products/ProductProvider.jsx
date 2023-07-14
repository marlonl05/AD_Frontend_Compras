/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useReducer } from 'react';
import { productReducer } from './ProductReducer';
import { ProductContext } from '../';
import { inventarioApi } from '../../api';
import { mapListToObject } from '../../helpers';

const initialState = {};

const authCredentials = {
	username: 'Mateito',
	password: '12345',
};

export const ProductProvider = ({ children }) => {
	const [products, productDispatch] = useReducer(productReducer, initialState);

	const init = async () => {
		try {
			// const resp = await inventarioApi.get('/auth', authCredentials);
			// console.log({ resp });
			const { data } = await inventarioApi.get('/productos');

			productDispatch({ type: 'LOAD_PRODUCTS', payload: mapListToObject(data, 'pro_id') });
		} catch (error) {
			console.error(error);
			productDispatch({ type: 'LOAD_PRODUCTS', payload: initialState });
		}
	};

	useEffect(() => {
		init();
	}, []);

	return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
};
