/* eslint-disable react/prop-types */
import { DetailSidebar } from '../../layout/details';
import { Button } from '../common';
import { ProductsList } from './ProductsList';

export const BillSidebar = ({ showBill, toggleBill }) => {
	return (
		<DetailSidebar
			title='Detalle de la factura #34124'
			showDetail={showBill}
			toggleDetail={toggleBill}
			header={
				<>
					<span>Proveedor</span>
					<span className='text-gray-400'>Pronaca S.A.</span>
					<span>Fecha factura</span>
					<span className='text-gray-400 '>12/12/2023</span>
					<span>Fecha vencimiento</span>
					<span className='text-gray-400'>12/12/2023</span>
					<span>Tipo de pago</span>
					<span className='text-gray-400'>Tarjeta</span>
				</>
			}
			footer={
				<>
					<div className='flex items-center justify-between mb-6'>
						<span className='text-gray-400'>Total</span>
						<span>$201.03</span>
					</div>
					<div>
						<Button>Obtener reporte</Button>
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
			tableBody={<ProductsList />}
		/>
	);
};
