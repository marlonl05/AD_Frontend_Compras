/* eslint-disable camelcase */
import { useContext } from 'react';
import { ProductContext, ShoppingContext } from '../context';
import { shoppingTypes } from '../types';

export const useShoppingContext = () => {
	const {
		shoppingList,
		shoppingListIds,
		state,
		error,
		message,
		cartDetails,
		currentShopping,
		shoppingDispatch,
		defaultTabIndex,
	} = useContext(ShoppingContext);

	const productList = useContext(ProductContext);

	const handleShowShopping = shoppingId => {
		shoppingDispatch({ type: shoppingTypes.SET_CURRENT_SIDEBAR_SHOPPING, payload: +shoppingId });
	};

	const handleEditShopping = shoppingRequest => {
		console.log('handleEditShopping', { shoppingRequest });
	};

	const handleAddShopping = shoppingRequest => {
		if (cartDetails.detalles.length === 0) return spawnMessage('El carrito está vacío', 'error');
		console.log('handleAddShopping', { shoppingRequest });
	};

	const handlePrintShopping = () => {
		console.log('handlePrintShopping');
	};

	const handleTabIndex = tabIndex =>
		shoppingDispatch({ type: shoppingTypes.SET_DEFAULT_TAB_INDEX, payload: tabIndex });

	const handleSetCurrentShopping = shoppingId => {
		shoppingDispatch({ type: shoppingTypes.SET_CURRENT_SHOPPING, payload: shoppingId });
		shoppingDispatch({ type: shoppingTypes.SET_DEFAULT_TAB_INDEX, payload: 1 });

		const shopping = shoppingList[shoppingId];

		if (!shopping) return shoppingDispatch({ type: shoppingTypes.SET_CART_DETAILS, payload: {} });

		const { total, detalles } = shopping;

		shoppingDispatch({
			type: shoppingTypes.SET_CART_DETAILS,
			payload: {
				total,
				detalles,
			},
		});
	};

	const handleShowMessage = (message, type) => {
		shoppingDispatch({
			type: shoppingTypes.SET_MESSAGES,
			payload: type === 'error' ? { error: message } : { message },
		});
	};

	const handleAddProductToCart = ({ productId, cantidad }) => {
		if (!productId) return;

		if (!cantidad) return spawnMessage('Debe ingresar una cantidad', 'error');

		const isAlreadyInCart = cartDetails?.detalles?.find(
			product => product?.producto_id === productId
		);

		if (isAlreadyInCart) return spawnMessage('El producto ya está en el carrito', 'error');

		const product = productList[productId];

		if (!product) return spawnMessage('El producto no existe', 'error');

		const { pro_id, pro_valor_iva, pro_costo, pro_stock } = product;

		if (pro_stock <= 0) return spawnMessage('El producto no tiene stock', 'error');

		if (pro_stock < cantidad) return spawnMessage('No hay suficiente stock del producto', 'error');

		let subtotal = pro_costo * cantidad;
		subtotal = Math.round(subtotal * 100) / 100;

		let total = subtotal + subtotal * (pro_valor_iva / 100);
		total = Math.round(total * 100) / 100;

		const newProductInCart = {
			producto_id: pro_id,
			cantidad,
			subtotal,
			total,
		};

		shoppingDispatch({
			type: shoppingTypes.SET_NEW_PRODUCT_TO_CART,
			payload: newProductInCart,
		});

		spawnMessage('Producto agregado al carrito', 'success');
	};

	const handleDeleteProductFromCart = productId => {
		if (!productId) return;

		const productIsInCart = cartDetails?.detalles?.find(
			product => product?.producto_id === productId
		);

		if (!productIsInCart) return spawnMessage('El producto no está en el carrito', 'error');

		shoppingDispatch({
			type: shoppingTypes.SET_DELETE_PRODUCT_FROM_CART,
			payload: productId,
		});

		const product = productList[productId];

		spawnMessage(`Producto ${product?.pro_nombre} eliminado del carrito`, 'success');
	};

	const spawnMessage = (message, type) => {
		handleShowMessage(message, type);

		setTimeout(() => {
			handleShowMessage(null, 'error');
		}, 100);
	};

	return {
		// State
		shoppingList,
		shoppingListIds,
		state,
		error,
		message,
		cartDetails,
		currentShopping,
		defaultTabIndex,
		productList,

		// Actions
		handleTabIndex,
		handleShowShopping,
		handleEditShopping,
		handleAddShopping,
		handlePrintShopping,
		handleSetCurrentShopping,
		handleShowMessage,
		handleAddProductToCart,
		handleDeleteProductFromCart,
	};
};
