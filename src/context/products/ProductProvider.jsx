/* eslint-disable react/prop-types */
import { useEffect, useReducer } from 'react';
import { productReducer } from './ProductReducer';
import { ProductContext } from '../';
import { inventarioApi } from '../../api';
import { mapListToObject } from '../../helpers';

const initialState = {};

// eslint-disable-next-line no-unused-vars
const authCredentials = {
	username: 'Mateito',
	password: '12345',
};

export const ProductProvider = ({ children }) => {
	const [products, productDispatch] = useReducer(productReducer, initialState);

	const init = async () => {
		try {
			// const resp = await inventarioApi.get('/auth', JSON.stringify(authCredentials));
			// console.log({ resp });
			const { data } = await inventarioApi.get('/productos');

			productDispatch({ type: 'LOAD_PRODUCTS', payload: mapListToObject(data) });
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		init();
	}, []);

	return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
};
