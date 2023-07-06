/* eslint-disable react/prop-types */
import { RiFileTextLine } from 'react-icons/ri';
import { DetailSidebar } from '../../layout/details';
import { ProductList } from './ProductList';
import { useShoppingContext } from '../../hooks/useShoppingContext';
import { Button } from '../common';

export const BillSidebar = ({ showBill, showInLargeScreen, toggleBill }) => {
	const { cartDetails, currentShopping } = useShoppingContext();

	const { total, detalles } = cartDetails;

	return (
		<DetailSidebar
			title={currentShopping ? `Detalle de la factura #${currentShopping}` : 'Carrito de compras'}
			showDetail={showBill}
			showInLargeScreen={showInLargeScreen}
			toggleDetail={toggleBill}
			header={
				<>
					<span>Listado de productos</span>
					<span className='text-gray-400'>Cola</span>
				</>
			}
			footer={
				<>
					<div className='flex items-center justify-between mb-6'>
						<span className='text-gray-400'>Total</span>
						<span>${total ?? '0'}</span>
					</div>
					<div className='flex items-center flex-col gap-4'>
						<Button
							className='bg-transparent'
							disabled={!currentShopping}
							onClick={() => console.log('obteniendo reporte')}
						>
							<RiFileTextLine />
							Obtener reporte en PDF
						</Button>
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
