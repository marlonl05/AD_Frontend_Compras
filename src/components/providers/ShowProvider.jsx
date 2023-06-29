/* eslint-disable react/prop-types */
import {
	RiBankCardLine,
	RiBuildingLine,
	RiCellphoneLine,
	RiCheckboxCircleLine,
	RiEyeFill,
	RiFileTextLine,
	RiPencilFill,
	RiStackFill,
	RiSubwayLine,
} from 'react-icons/ri';
import { Button, Card } from '../common';

export const ShowProvider = ({ provider }) => {
	return (
		<>
			<article className='relative bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center md:gap-4 gap-8 overflow-hidden shadow-xl rounded-lg'>
				<div className='hola absolute top-0 left-0 w-0 h-0 border-r-[150px] md:border-r-[200px] border-r-transparent border-t-[150px] md:border-t-[200px] border-t-transparent border-l-[150px] md:border-l-[200px] border-l-secondary-100 border-b-[150px] md:border-b-[200px] border-b-secondary-100'></div>

				<section className='col-span-1 flex items-center justify-center p-8 z-20'>
					<img
						src='/logo-proveedor.png'
						className='mt-8 md:mt-0 w-40 h-40 object-cover rounded-full p-1 ring-8 ring-white '
					/>
				</section>
				<section className='md:col-span-1 lg:col-span-2 p-8 z-20'>
					<div className='absolute right-0 top-0 flex items-center gap-2 p-2 font-medium bg-gradient-to-r from-secondary-100 to-[#e89c91] text-white uppercase text-sm'>
						<RiCheckboxCircleLine className='text-2xl' />
						<h5>{provider?.estado}</h5>
					</div>

					<div className='relative mt-4 before:absolute before:w-[150px] before:h-[1px] before:bg-secondary-100 before:left-0 before:-bottom-2 after:absolute after:w-2 after:h-2 after:bg-secondary-100 after:left-[148px] after:-bottom-[11.5px] after:rounded-full'>
						<h1 className='text-gray-900 uppercase font-extrabold text-xl'>{provider?.nombre}</h1>
						<p className='text-gray-500 text-sm'>{provider?.email}</p>
					</div>

					<ul className='ml-2 mt-10 text-gray-500 border-l-2 border-secondary-100'>
						<li className='flex items-center gap-2 text-xs mb-2'>
							<RiBankCardLine className='ml-1' />
							<span>{provider?.documento_identificacion}</span>
						</li>
						<li className='flex items-center gap-2 text-xs mb-2'>
							<RiBuildingLine className='ml-1' />
							<span>{provider?.ciudad}</span>
						</li>
						<li className='flex items-center gap-2 text-xs mb-2'>
							<RiSubwayLine className='ml-1' />
							<span>{provider?.direccion}</span>
						</li>
						<li className='flex items-center gap-2 text-xs mb-2'>
							<RiCellphoneLine className='ml-1' />
							<span>{provider?.telefono}</span>
						</li>
						<li className='flex items-center gap-2 text-xs mb-2'>
							<RiStackFill className='ml-1' />
							<span>{provider?.tipo_proveedor}</span>
						</li>
					</ul>
				</section>
			</article>

			{/* card lists */}
			<div className='my-7'>
				<h2 className='text-2xl font-bold text-white'>Facturas</h2>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-14 animate-fade'>
				<Card
					// title={shopping?.title || 'Compra #' + 1}
					title={'Compra #' + 1}
					alt='Abastos'
					// imgSrc={shopping?.imgSrc || '/logo-carrito.jpg'}
					imgSrc={'/logo-carrito.jpg'}
				>
					<span className='text-gray-400'>$ {11.3}</span>
					<p className='text-gray-500'>{'20/2/2023'}</p>
					<div className='flex justify-center items-center gap-2 flex-row lg:flex-col xl:flex-row'>
						<Button className='bg-transparent hover:bg-secondary-100 transition-colors'>
							<RiEyeFill />
						</Button>
						<Button className='bg-transparent hover:bg-secondary-100 transition-colors'>
							<RiPencilFill />
						</Button>
						<Button className='bg-transparent hover:bg-secondary-100 transition-colors'>
							<RiFileTextLine />
						</Button>
					</div>
				</Card>
			</div>
		</>
	);
};
