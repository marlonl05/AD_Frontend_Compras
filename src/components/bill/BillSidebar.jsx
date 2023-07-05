/* eslint-disable react/prop-types */
import { RiDeleteBinFill, RiFileTextLine } from 'react-icons/ri';
import { DetailSidebar } from '../../layout/details';
import { Button } from '../common';
import { ProductList } from './ProductList';
import { useShoppingContext } from '../../hooks/useShoppingContext';

export const BillSidebar = ({ showBill, showInLargeScreen, toggleBill }) => {
	const { shoppingList, currentSidebarShopping } = useShoppingContext();

	const shopping = currentSidebarShopping ? shoppingList[+currentSidebarShopping] : null;

	return (
		<DetailSidebar
			title={shopping ? `Detalle de la factura #${shopping.id}` : 'No hay una factura seleccionada'}
			showDetail={showBill}
			showInLargeScreen={showInLargeScreen}
			toggleDetail={toggleBill}
			header={
				<>
					<span>Proveedor</span>
					<span className='text-gray-400'>{shopping?.proveedor_id}</span>
					<span>Fecha factura</span>
					<span className='text-gray-400 '>{shopping?.fecha_factura}</span>
					<span>Fecha vencimiento</span>
					<span className='text-gray-400'>{shopping?.fecha_vencimiento}</span>
					<span>Tipo de pago</span>
					<span className='text-gray-400'>{shopping?.tipo_pago}</span>
				</>
			}
			footer={
				<>
					<div className='flex items-center justify-between mb-6'>
						<span className='text-gray-400'>Total</span>
						<span>${shopping?.total ?? '0'}</span>
					</div>
					<div className='flex items-center flex-col gap-4'>
						<Button
							className='bg-transparent'
							disabled={!shopping}
							onClick={() => console.log('obteniendo reporte')}
						>
							<RiFileTextLine />
							Obtener reporte
						</Button>
						<Button disabled={!shopping} onClick={() => console.log('eliminando factura')}>
							<RiDeleteBinFill />
							Eliminar factura
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
			tableBody={<ProductList />}
		/>
	);
};
