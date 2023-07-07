/* eslint-disable react/prop-types */

import { useShoppingContext } from '../../hooks';
import { TableLayout } from '../../layout/table';

const ProductTable = ({ items = [] }) => {
	const { productList: dbProducts } = useShoppingContext();

	return (
		<>
			<div className='grid grid-cols-5 p-4 gap-3 border border-transparent border-b-secondary-100'>
				<h5>Producto</h5>
				<h5>Cantidad</h5>
				<h5>Subtotal</h5>
				<h5>Total</h5>
				<h5>Accion</h5>
			</div>
			<div className='bg-dark-200 mb-4 '>
				{items.map(product => {
					const dbProduct = dbProducts[product?.producto_id];

					return (
						<div
							key={product?.producto_id}
							className='grid grid-cols-5 gap-3 mb-1 border border-transparent border-b-secondary-100 px-4 py-2'
						>
							<div className='flex flex-col items-start justify-start'>
								<h5 className='text-sm w-full truncate'>{dbProduct?.pro_nombre}</h5>
								<p className='text-xs text-gray-500'>$ {dbProduct?.pro_costo}</p>
							</div>

							<div className='text-center'>
								<span>{product?.cantidad}</span>
							</div>
							<div>
								<span>$ {product?.subtotal}</span>
							</div>
							<div>
								<span>$ {product?.total}</span>
							</div>
							<div>
								<span>Eliminar</span>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

/**
 *
 * @param {{productList: any[]}}
 * @description This product list have this shape:
 * {
 * 		producto_id: number,
 * 		cantidad: number,
 * 		subtotal: number,
 * 		total: number
 * }
 * @returns
 */
export const ProductList = ({ productList = [] }) => {
	const { productList: dbProducts } = useShoppingContext();

	const customFilter = (items, pattern) =>
		items.filter(item => {
			const producto = dbProducts[item?.producto_id];

			return producto?.pro_nombre?.toLowerCase().includes(pattern?.toLowerCase());
		});
	return (
		<TableLayout
			items={productList}
			itemsPerPage={5}
			inputPlaceholder='Buscar producto en el carrito'
			Table={ProductTable}
			styles='p-0 pt-2 mx-2'
			innerStyles='m-0'
			customFilter={customFilter}
		/>
	);
};
