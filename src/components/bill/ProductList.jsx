/* eslint-disable react/prop-types */

import { useShoppingContext } from '../../hooks';

const Product = ({ name, price, quantity, subtotal, total }) => {
	return (
		<div className='bg-dark-200 p-4 mb-4 border border-b-secondary-100 border-transparent'>
			<div className='grid grid-cols-4 gap-3 mb-1'>
				<div className='flex flex-col items-start justify-start'>
					<h5 className='text-sm w-full truncate'>{name}</h5>
					<p className='text-xs text-gray-500'>$ {price}</p>
				</div>

				<div className='text-center'>
					<span>{quantity}</span>
				</div>
				<div>
					<span>$ {subtotal}</span>
				</div>
				<div>
					<span>$ {total}</span>
				</div>
			</div>
		</div>
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

	return (
		<>
			{productList.map(product => {
				const dbProduct = dbProducts[product?.producto_id];

				return (
					<Product
						key={product?.producto_id}
						name={dbProduct?.pro_nombre}
						price={dbProduct?.pro_costo}
						quantity={product?.cantidad}
						subtotal={product?.subtotal}
						total={product?.total}
					/>
				);
			})}
		</>
	);
};
