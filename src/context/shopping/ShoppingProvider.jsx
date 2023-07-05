/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useReducer } from 'react';
import { shoppingReducer } from './shoppingReducer';
import { ShoppingContext } from '../contextBuilder';
import { status } from '../../constants';
import { shoppingTypes } from '../../types';
import comprasApi from '../../api';

const initialState = {
	shoppingList: {},
	shoppingListIds: [],
	state: status.IDLE,
	error: null,
	message: null,
	cartList: [],
	currentShopping: null,
	refreshCounter: 0,
	defaultTabIndex: 0,
};

export const ShoppingProvider = ({ children }) => {
	const [shopping, shoppingDispatch] = useReducer(shoppingReducer, initialState);

	const { refreshCounter } = shopping;

	const init = async () => {
		try {
			shoppingDispatch({ type: shoppingTypes.SET_STATE, payload: status.LOADING });

			const { data } = await comprasApi.get('/facturas');

			// if (!data?.response) throw new Error('Error al cargar las facturas');

			shoppingDispatch({
				type: shoppingTypes.LOAD,
				// payload: data.response,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		init();
	}, [refreshCounter]);

	return (
		<ShoppingContext.Provider
			value={{
				...shopping,
				shoppingDispatch,
			}}
		>
			{children}
		</ShoppingContext.Provider>
	);
};
