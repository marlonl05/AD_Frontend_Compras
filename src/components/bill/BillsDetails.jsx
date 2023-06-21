/* eslint-disable react/prop-types */
import { Button } from '../common/Button';
import { ProductsList } from './ProductsList';
import { BillDescription } from './BillDescription';
import { DetailLayout } from '../../layout/details';

export const BillsDetails = ({ showBill, toggleBill }) => {
	return (
		<DetailLayout showDetail={showBill} toggleDetail={toggleBill}>
			<BillDescription />

			{/* Table header */}
			<div className='h-full border border-secondary-100 rounded-lg'>
				<div className='grid grid-cols-4 mb-3 p-4 gap-3  border border-transparent border-b-secondary-100'>
					<h5>Producto</h5>
					<h5>Cantidad</h5>
					<h5>Subtotal</h5>
					<h5>Total</h5>
				</div>

				<ProductsList />
			</div>

			{/* Detail footer */}
			<div className='absolute bottom-0 right-0 bg-dark-200 p-4 w-full lg:h-32'>
				<div className='flex items-center justify-between mb-6'>
					<span className='text-gray-400'>Total</span>
					<span>$201.03</span>
				</div>
				<div>
					<Button>Obtener reporte</Button>
				</div>
			</div>
		</DetailLayout>
	);
};
