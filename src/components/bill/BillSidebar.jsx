/* eslint-disable react/prop-types */
import { useState } from 'react';
import Select from 'react-tailwindcss-select';
import { useProviderContext, useShoppingContext } from '../../hooks';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { DetailSidebar } from '../../layout/details';
import { ProductList } from './ProductList';
import { Button } from '../common';
import { PdfLink } from '../../pdf';
import { OneBillPdf } from '../../pdf/templates/bill/OneBillPdf';

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
	const [quantity, setQuantity] = useState('');
	const [currentProduct, setCurrentProduct] = useState();
	const { cartDetails, productList, shoppingList, currentShopping, handleAddProductToCart } =
		useShoppingContext();
	const { providerList } = useProviderContext();

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
							<input
								className='w-full lg:w-[245px] bg-gray-100 text-dark-200 py-2 px-4 rounded-lg outline-none col-span-2 md:col-span-1 mb-1'
								placeholder='Cantidad del producto'
								type='number'
								value={quantity}
								onChange={({ target }) => setQuantity(target.value)}
							/>
							<Button
								onClick={() => {
									handleAddProductToCart({ productId: currentProduct?.value, cantidad: quantity });
									setQuantity('');
								}}
								className='col-span-2 md:col-span-1 mb-1'
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
					<div className='flex items-center justify-between mb-6 px-4 '>
						<span className='text-gray-400 font-bold '>Total</span>
						<span>${total ?? '0'}</span>
					</div>
					<div className='flex items-center flex-col gap-4'>
						{currentShopping && (
							<PdfLink
								document={
									<OneBillPdf
										billDetails={detalles}
										billHeader={shoppingList[currentShopping]}
										products={productList}
										provider={providerList[shoppingList[currentShopping]?.proveedor_id]}
									/>
								}
								fileName='reporte_compra.pdf'
								text='Obtener reporte en PDF'
								showIcon
							/>
						)}
					</div>
				</>
			}
			table={<ProductList productList={detalles} />}
		/>
	);
};
