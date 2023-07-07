/* eslint-disable react/prop-types */
import { useState } from 'react';
import Select from 'react-tailwindcss-select';
import { RiFileTextLine, RiShoppingCart2Fill } from 'react-icons/ri';
import { DetailSidebar } from '../../layout/details';
import { ProductList } from './ProductList';
import { useShoppingContext } from '../../hooks/useShoppingContext';
import { Button } from '../common';

const ProductDetailsBody = ({ product = {} }) => (
	<>
		<p className='col-span-2 text-secondary-100 uppercase font-bold border-b border-secondary-100 my-2 flex items-center justify-between'>
			Detalles del producto
			<span className='text-gray-400 capitalize'>{product?.pro_nombre}</span>
		</p>
		<div className='col-span-2 mb-2 flex gap-4'>
			<img
				src={product?.pro_imagen || '/logo-carrito.jpg'}
				alt='Producto'
				className='w-20 h-20 object-cover rounded-lg'
			/>
			<div className='flex flex-col w-full'>
				<span className='text-gray-400 flex items-start justify-start gap-4'>
					{product?.pro_descripcion}
				</span>
				<div className='grid grid-cols-3 items-center'>
					<span className='text-gray-200'>
						<span className='font-bold'>Stock: </span>
						{product?.pro_stock}
					</span>
					<span className='text-gray-200'>
						<span className='font-bold'>Precio: </span>${product?.pro_costo}
					</span>
					<span className='text-gray-200'>
						<span className='font-bold'>IVA: </span>
						{product?.pro_valor_iva}
					</span>
				</div>
			</div>
		</div>
	</>
);

export const BillSidebar = ({ showBill, showInLargeScreen, toggleBill }) => {
	const [currentProduct, setCurrentProduct] = useState();
	const { cartDetails, productList, currentShopping, handleAddProductToCart } =
		useShoppingContext();

	const { total, detalles } = cartDetails;

	const productOptions = Object.values(productList || []).map(product => ({
		label: product?.pro_nombre,
		value: product?.pro_id,
	}));

	return (
		<DetailSidebar
			title={currentShopping ? `Detalle de la factura #${currentShopping}` : 'Carrito de compras'}
			showDetail={showBill}
			showInLargeScreen={showInLargeScreen}
			toggleDetail={toggleBill}
			header={
				<>
					<div className='flex items-center justify-between'>
						<h3 className='uppercase font-bold'>Listado de productos</h3>
					</div>
					<Select
						primaryColor='amber'
						placeholder='Elija un producto'
						value={currentProduct}
						onChange={setCurrentProduct}
						options={productOptions}
						searchInputPlaceholder='Buscar un producto'
						isSearchable
						isDisabled={!!currentShopping}
					/>
					{currentProduct && (
						<>
							<ProductDetailsBody
								product={currentProduct?.value && productList[currentProduct?.value]}
							/>
							<Button
								className='col-span-2'
								onClick={() => handleAddProductToCart({ productId: currentProduct?.value })}
							>
								<RiShoppingCart2Fill />
								Agregar al carrito
							</Button>
						</>
					)}
				</>
			}
			footer={
				<>
					<div className='flex items-center justify-between mb-6'>
						<span className='text-gray-400'>Total</span>
						<span>${total ?? '0'}</span>
					</div>
					<div className='flex items-center flex-col gap-4'>
						{currentShopping && (
							<Button className='bg-transparent' onClick={() => console.log('obteniendo reporte')}>
								<RiFileTextLine />
								Obtener reporte en PDF
							</Button>
						)}
					</div>
				</>
			}
			tableHeader={
				<>
					<h5>Producto</h5>
					<h5>Cantidad</h5>
					<h5>Subtotal</h5>
					<h5>Total</h5>
				</>
			}
			tableBody={<ProductList productList={detalles} />}
		/>
	);
};
