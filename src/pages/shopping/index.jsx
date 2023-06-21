import { Search } from '../../components/common';

export const Shopping = () => {
	return (
		<>
			<header>
				<Search />

				<hr className='mb-4' />
			</header>
			{/* Title content */}
			<div className='flex items-center justify-between mb-16'>
				<h2 className='text-xl text-gray-300'>Listado de compras</h2>
				{/* <button className='flex items-center gap-5 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
						<RiArrowDownSLine />
						Dine in
					</button> */}
			</div>

			{/* Content */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-14'>
				{/* Card */}
				<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center'>
					<img
						src='https://c8.alamy.com/compes/2a10jhb/un-carro-compras-logotipo-icono-diseno-comprar-simbolo-ilustraciones-vectoriales-2a10jhb.jpg'
						alt='Platillo'
						className='w-40 h-40 object-cover rounded-full -mt-16 shadow-2xl'
					/>
					<p className='text-xl'>Compra de gaseosas</p>
					<span className='text-gray-400'>$ 2.29</span>
					<p className='text-gray-500'>20 unidades disponibles</p>
				</div>
				{/* Card */}
				<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center'>
					<img
						src='https://c8.alamy.com/compes/2a10jhb/un-carro-compras-logotipo-icono-diseno-comprar-simbolo-ilustraciones-vectoriales-2a10jhb.jpg'
						alt='Platillo'
						className='w-40 h-40 object-cover rounded-full -mt-16 shadow-2xl'
					/>
					<p className='text-xl'>Compra de abastos</p>
					<span className='text-gray-400'>$ 2.29</span>
					<p className='text-gray-500'>20 unidades disponibles</p>
				</div>
				{/* Card */}
				<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center'>
					<img
						src='https://c8.alamy.com/compes/2a10jhb/un-carro-compras-logotipo-icono-diseno-comprar-simbolo-ilustraciones-vectoriales-2a10jhb.jpg'
						alt='Platillo'
						className='w-40 h-40 object-cover rounded-full -mt-16 shadow-2xl'
					/>
					<p className='text-xl'>Compra de abastos</p>
					<span className='text-gray-400'>$ 2.29</span>
					<p className='text-gray-500'>20 unidades disponibles</p>
				</div>
				{/* Card */}
				<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center'>
					<img
						src='https://c8.alamy.com/compes/2a10jhb/un-carro-compras-logotipo-icono-diseno-comprar-simbolo-ilustraciones-vectoriales-2a10jhb.jpg'
						alt='Platillo'
						className='w-40 h-40 object-cover rounded-full -mt-16 shadow-2xl'
					/>
					<p className='text-xl'>Compra de abastos</p>
					<span className='text-gray-400'>$ 2.29</span>
					<p className='text-gray-500'>20 unidades disponibles</p>
				</div>
				{/* Card */}
				<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center'>
					<img
						src='https://c8.alamy.com/compes/2a10jhb/un-carro-compras-logotipo-icono-diseno-comprar-simbolo-ilustraciones-vectoriales-2a10jhb.jpg'
						alt='Platillo'
						className='w-40 h-40 object-cover rounded-full -mt-16 shadow-2xl'
					/>
					<p className='text-xl'>Compra de abastos</p>
					<span className='text-gray-400'>$ 2.29</span>
					<p className='text-gray-500'>20 unidades disponibles</p>
				</div>
				{/* Card */}
				<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center'>
					<img
						src='https://c8.alamy.com/compes/2a10jhb/un-carro-compras-logotipo-icono-diseno-comprar-simbolo-ilustraciones-vectoriales-2a10jhb.jpg'
						alt='Platillo'
						className='w-40 h-40 object-cover rounded-full -mt-16 shadow-2xl'
					/>
					<p className='text-xl'>Compra de abastos</p>
					<span className='text-gray-400'>$ 2.29</span>
					<p className='text-gray-500'>20 unidades disponibles</p>
				</div>
			</div>
		</>
	);
};
