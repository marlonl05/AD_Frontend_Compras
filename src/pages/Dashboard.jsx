import { Search } from '../components/common';

export const Dashboard = () => {
	return (
		<main className='lg:pl-36 pb-10 lg:pr-[400px]'>
			<div className='md:p-8 p-4'>
				{/* Header */}
				<header>
					{/* Title and Search */}
					<Search />

					{/* Tabs */}
					{/* <nav className='text-gray-300 flex items-center justify-between md:justify-start md:gap-10 border-b mb-6'>
						<a
							href='#'
							className='relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#EC7C6A] before:left-0 before:rounded-full before:-bottom-[1px] text-[#EC7C6A]'
						>
							Hot dishes
						</a>
						<a href='#' className='py-2 pr-4'>
							Cold dishes
						</a>
						<a href='#' className='py-2 pr-4 '>
							Soup
						</a>
						<a href='#' className='py-2 pr-4 '>
							Grill
						</a>
					</nav> */}
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
			</div>
		</main>
	);
};
