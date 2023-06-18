import { RiSearch2Line, RiArrowDownSLine } from 'react-icons/ri';

export const Dashboard = () => {
	return (
		<main className='lg:pl-36 pb-10 lg:pr-[400px]'>
			<div className='md:p-8 p-4'>
				{/* Header */}
				<header>
					{/* Title and Search */}
					<div className='flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center'>
						<div>
							<h1 className='text-2xl text-gray-300'>Jeager Resto</h1>
							<p className='text-gray-500'>January 23rt, 2023</p>
						</div>
						<form>
							<div className='w-full relative'>
								<RiSearch2Line className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-300' />
								<input
									type='text'
									className='w-full py-2 pl-10 pr-4 outline-none bg-[#1F1D2B] rounded-lg text-gray-300'
									placeholder='Search'
								/>
							</div>
						</form>
					</div>

					{/* Tabs */}
					<nav className='text-gray-300 flex items-center justify-between md:justify-start md:gap-10 border-b mb-6'>
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
					</nav>
				</header>
				{/* Title content */}
				<div className='flex items-center justify-between mb-16'>
					<h2 className='text-xl text-gray-300'>Choose dishes</h2>
					<button className='flex items-center gap-5 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
						<RiArrowDownSLine />
						Dine in
					</button>
				</div>

				{/* Content */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-14'>
					{/* Card */}
					<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center'>
						<img
							src='https://img.freepik.com/premium-vector/illustration-top-view-fried-egg-toast-bread-breakfast-plate-with-slices-tomatoes-isolated-white-background_212889-4902.jpg'
							alt='Platillo'
							className='w-40 h-40 object-cover rounded-full -mt-16 shadow-2xl'
						/>
						<p className='text-xl'>Speacy seasoned safefood nodles</p>
						<span className='text-gray-400'>$ 2.29</span>
						<p className='text-gray-500'>20 Bowls available</p>
					</div>
					{/* Card */}
					<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center'>
						<img
							src='https://img.freepik.com/premium-vector/illustration-top-view-fried-egg-toast-bread-breakfast-plate-with-slices-tomatoes-isolated-white-background_212889-4902.jpg'
							alt='Platillo'
							className='w-40 h-40 object-cover rounded-full -mt-16 shadow-2xl'
						/>
						<p className='text-xl'>Speacy seasoned safefood nodles</p>
						<span className='text-gray-400'>$ 2.29</span>
						<p className='text-gray-500'>20 Bowls available</p>
					</div>
					{/* Card */}
					<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center'>
						<img
							src='https://img.freepik.com/premium-vector/illustration-top-view-fried-egg-toast-bread-breakfast-plate-with-slices-tomatoes-isolated-white-background_212889-4902.jpg'
							alt='Platillo'
							className='w-40 h-40 object-cover rounded-full -mt-16 shadow-2xl'
						/>
						<p className='text-xl'>Speacy seasoned safefood nodles</p>
						<span className='text-gray-400'>$ 2.29</span>
						<p className='text-gray-500'>20 Bowls available</p>
					</div>
					{/* Card */}
					<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center'>
						<img
							src='https://img.freepik.com/premium-vector/illustration-top-view-fried-egg-toast-bread-breakfast-plate-with-slices-tomatoes-isolated-white-background_212889-4902.jpg'
							alt='Platillo'
							className='w-40 h-40 object-cover rounded-full -mt-16 shadow-2xl'
						/>
						<p className='text-xl'>Speacy seasoned safefood nodles</p>
						<span className='text-gray-400'>$ 2.29</span>
						<p className='text-gray-500'>20 Bowls available</p>
					</div>
					{/* Card */}
					<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center'>
						<img
							src='https://img.freepik.com/premium-vector/illustration-top-view-fried-egg-toast-bread-breakfast-plate-with-slices-tomatoes-isolated-white-background_212889-4902.jpg'
							alt='Platillo'
							className='w-40 h-40 object-cover rounded-full -mt-16 shadow-2xl'
						/>
						<p className='text-xl'>Speacy seasoned safefood nodles</p>
						<span className='text-gray-400'>$ 2.29</span>
						<p className='text-gray-500'>20 Bowls available</p>
					</div>
					{/* Card */}
					<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center'>
						<img
							src='https://img.freepik.com/premium-vector/illustration-top-view-fried-egg-toast-bread-breakfast-plate-with-slices-tomatoes-isolated-white-background_212889-4902.jpg'
							alt='Platillo'
							className='w-40 h-40 object-cover rounded-full -mt-16 shadow-2xl'
						/>
						<p className='text-xl'>Speacy seasoned safefood nodles</p>
						<span className='text-gray-400'>$ 2.29</span>
						<p className='text-gray-500'>20 Bowls available</p>
					</div>
				</div>
			</div>
		</main>
	);
};
