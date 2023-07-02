/* eslint-disable react/prop-types */
import { useEffect, useReducer } from 'react';
import { productReducer } from './ProductReducer';
import { ProductContext } from '../';
import { inventarioApi } from '../../api';
import { mapListToObject } from '../../helpers';

const initialState = {};

const data = [
	{
		pro_id: 1,
		pro_nombre: 'Manzana gala',
		pro_descripcion: 'Manzana de tamaño pequeño a medio con un sabor dulce',
		pro_valor_iva: 0,
		pro_costo: '0.38',
		pro_pvp: '0.50',
		pro_imagen:
			'https://img.freepik.com/foto-gratis/manzanas-rojas-frescas-suaves-jugosas-enteras-perfectas-escritorio-blanco_179666-271.jpg?w=900&t=st=1686424719~exp=1686425319~hmac=fa5a5b50a64db6a84821d1c37e8e51f81e289b662084cb48e5fd233a1237f075',
		pro_stock: 0,
		pro_categoria: {
			cat_id: 1,
			cat_nombre: 'Frutas',
		},
	},
	{
		pro_id: 2,
		pro_nombre: 'Switch 1.4',
		pro_descripcion: 'Bebida alcohlica',
		pro_valor_iva: 14,
		pro_costo: '2.40',
		pro_pvp: '2.95',
		pro_imagen:
			'https://static.wixstatic.com/media/7030ae_8de783c8f4cc449ab8d6f297745f53ee~mv2.png/v1/fill/w_560,h_472,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Switch_productos_nuevo.png',
		pro_stock: 94,
		pro_categoria: {
			cat_id: 4,
			cat_nombre: 'Bebidas alcohólicas',
		},
	},
	{
		pro_id: 3,
		pro_nombre: 'Coca Cola',
		pro_descripcion: 'Bebida gaseosa 1.35L',
		pro_valor_iva: 0,
		pro_costo: '1.50',
		pro_pvp: '1.75',
		pro_imagen:
			'https://almacenescorsa.com/wp-content/uploads/2021/07/Coca-Cola-Original-1.35L.jpg',
		pro_stock: 294,
		pro_categoria: {
			cat_id: 3,
			cat_nombre: 'Jugos y bebidas gaseosas',
		},
	},
	{
		pro_id: 4,
		pro_nombre: 'Mortadela Plumrose 170g',
		pro_descripcion: 'Mortadela tipo II',
		pro_valor_iva: 0,
		pro_costo: '0.80',
		pro_pvp: '0.99',
		pro_imagen: 'https://www.plumrose.com.ec/images/virtuemart/product/Mortadela%20170g.png',
		pro_stock: 100,
		pro_categoria: {
			cat_id: 12,
			cat_nombre: 'Embutidos y carnes procesadas',
		},
	},
	{
		pro_id: 5,
		pro_nombre: 'Pizzerolas',
		pro_descripcion: 'Tostitos sabor a Pizza',
		pro_valor_iva: 0,
		pro_costo: '0.48',
		pro_pvp: '0.60',
		pro_imagen: 'https://frontline.la/wp-content/uploads/2021/05/pizzerolas45gr-e1634665906749.jpg',
		pro_stock: 0,
		pro_categoria: {
			cat_id: 8,
			cat_nombre: 'Snacks',
		},
	},
	{
		pro_id: 6,
		pro_nombre: 'Toni Griego 150g',
		pro_descripcion: 'Yogurt Toni Griego',
		pro_valor_iva: 0,
		pro_costo: '1.17',
		pro_pvp: '1.32',
		pro_imagen:
			'https://www.tonicorp.com/img/productos-2/yogurt-toni-griego/yogurt-toni-griego-frutilla.png',
		pro_stock: 285,
		pro_categoria: {
			cat_id: 5,
			cat_nombre: 'Productos lácteos',
		},
	},
	{
		pro_id: 7,
		pro_nombre: 'Brócoli',
		pro_descripcion: 'Brócoli pequeño',
		pro_valor_iva: 0,
		pro_costo: '0.40',
		pro_pvp: '0.75',
		pro_imagen: 'https://elpoderdelconsumidor.org/wp-content/uploads/2016/11/brocoli.jpg',
		pro_stock: 117,
		pro_categoria: {
			cat_id: 2,
			cat_nombre: 'Verduras y hortalizas',
		},
	},
	{
		pro_id: 8,
		pro_nombre: 'Cubata 1.5L',
		pro_descripcion: 'Cubata licor ecuatoriano',
		pro_valor_iva: 0,
		pro_costo: '2.50',
		pro_pvp: '2.79',
		pro_imagen:
			'https://fiestacerca.vtexassets.com/arquivos/ids/158167/0a650f78-a6dc-48bb-96d7-b189d9e68664.jpg?v=638201912568430000',
		pro_stock: 200,
		pro_categoria: {
			cat_id: 4,
			cat_nombre: 'Bebidas alcohólicas',
		},
	},
	{
		pro_id: 9,
		pro_nombre: 'Atún Real 180gr',
		pro_descripcion: 'Atún lomitos en aceite de girasol',
		pro_valor_iva: 0,
		pro_costo: '1.20',
		pro_pvp: '1.40',
		pro_imagen: 'https://laespanola.com.ec/images/thumbs/0002170_00032813.jpeg',
		pro_stock: 0,
		pro_categoria: {
			cat_id: 12,
			cat_nombre: 'Embutidos y carnes procesadas',
		},
	},
	{
		pro_id: 49,
		pro_nombre: 'DoritosQueso 52g',
		pro_descripcion: 'Nachos de queso',
		pro_valor_iva: 0,
		pro_costo: '0.40',
		pro_pvp: '0.60',
		pro_imagen:
			'https://www.fybeca.com/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_FybecaEcuador/default/dw854d0038/images/large/100211034-SNACK-DORITOS-MEGA-QUESO-52-G-UNIDAD.jpg?sw=1000&sh=1000',
		pro_stock: 500,
		pro_categoria: {
			cat_id: 8,
			cat_nombre: 'Snacks',
		},
	},
];

export const ProductProvider = ({ children }) => {
	const [products, productDispatch] = useReducer(productReducer, initialState);

	const init = async () => {
		try {
			// const { data } = await inventarioApi.get('/productos');

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
