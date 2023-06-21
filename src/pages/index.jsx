import { RiCheckboxBlankCircleFill, RiPlayFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const Home = () => {
	return (
		<section id='home' className='min-h-[90vh] grid grid-cols-1 xl:grid-cols-8 text-white'>
			{/* Information */}
			<div className='md:col-span-5 flex items-center justify-center p-8 xl:p-16'>
				{/* Information */}
				<div className='flex flex-col gap-8'>
					<h1 className='text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]'>
						Bienvenido al módulo de
						<span className='text-primary py-2 px-6 border-8 border-secondary-100 relative inline-block'>
							Compras
							<RiCheckboxBlankCircleFill className='text-secondary-100 text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content' />
							<RiCheckboxBlankCircleFill className='text-secondary-100 text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content' />
							<RiCheckboxBlankCircleFill className='text-secondary-100 text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content' />
							<RiCheckboxBlankCircleFill className='text-secondary-100 text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content' />
						</span>
					</h1>
					<p className='text-gray-300 text-2xl leading-[2.5rem]'>
						El módulo de compras es un sistema que permite a los usuarios realizar compras de
						productos y servicios de manera fácil y rápida.
					</p>
					<div className='flex flex-col md:flex-row items-center gap-4'>
						<Link
							to='/compras'
							className='w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl border border-secondary-100 hover:text-secondary-100 hover:transition-colors'
						>
							<RiPlayFill className='bg-secondary text-primary p-4 rounded-full box-content' />
							Visitar compras
						</Link>
						<Link
							to='/proveedores'
							className='w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl border border-secondary-100 hover:text-secondary-100 hover:transition-colors'
						>
							<RiPlayFill className='bg-secondary text-primary p-4 rounded-full box-content' />
							Visitar provedores
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export * from './providers';
export * from './shopping';
