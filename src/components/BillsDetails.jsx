/* eslint-disable react/prop-types */
import { RiCloseLine, RiDeleteBin6Fill } from 'react-icons/ri';

export const BillsDetails = ({ showBill, toggleBill }) => {
	return (
		<div
			className={`lg:col-span-2 bg-dark-200 fixed w-full h-full lg:right-0 lg:w-[400px] top-0 transition-all z-50 ${
				showBill ? 'right-0' : '-right-full'
			}`}
		>
			<div className='relative text-gray-300 p-8 h-full'>
				<RiCloseLine
					className='lg:hidden absolute text-xl right-4 top-4 p-3 box-content bg-dark-200 rounded-full'
					onClick={toggleBill}
				/>
				<h1 className='text-2xl mb-6 font-semibold'>Detalle de la factura #34124</h1>

				<div className='grid grid-cols-2 mb-4 p-4 border border-secondary-100 rounded-lg'>
					<span>Proveedor</span>
					<span className='text-gray-400'>Pronaca S.A.</span>
					<span>Fecha factura</span>
					<span className='text-gray-400 '>12/12/2023</span>
					<span>Fecha vencimiento</span>
					<span className='text-gray-400'>12/12/2023</span>
					<span>Tipo de pago</span>
					<span className='text-gray-400'>Tarjeta</span>
				</div>

				{/* Card */}
				<div className='h-full border border-secondary-100 rounded-lg'>
					<div className='grid grid-cols-4 mb-3 p-4 gap-3  border border-transparent border-b-secondary-100'>
						<h5>Producto</h5>
						<h5>Cantidad</h5>
						<h5>Subtotal</h5>
						<h5>Total</h5>
					</div>

					{/* Products */}
					<div className='h-3/5 md:h-4/6 lg:h-3/5 overflow-y-auto'>
						{/* Product */}
						<div className='bg-dark-200 p-4 mb-4 border border-b-secondary-100 border-transparent'>
							<div className='grid grid-cols-4 gap-3 mb-1'>
								{/* Product description */}
								<div className='flex items-center'>
									<div>
										<h5 className='text-sm'>Tallarines</h5>
										<p className='text-xs text-gray-500'>$2.29</p>
									</div>
								</div>

								<div>
									<span>2</span>
								</div>
								<div>
									<span>$4.58</span>
								</div>
								<div>
									<span>$5.50 </span>
								</div>
							</div>

							<div className='grid grid-cols-4'>
								<p className='col-span-3 text-sm'>Quitar producto?</p>
								<div className='flex items-center justify-center'>
									<button className='p-1 border border-secondary-100 rounded-lg'>
										<RiDeleteBin6Fill className='text-red-400' />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Submit payment */}
				<div className='absolute bottom-0 right-0 bg-dark-200 p-4 w-full lg:h-32'>
					<div className='flex items-center justify-between mb-6'>
						<span className='text-gray-400'>Total</span>
						<span>$201.03</span>
					</div>
					<div>
						<button className='bg-secondary-100 w-full py-2 px-4 rounded-lg font-semibold'>
							Obtener reporte
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
