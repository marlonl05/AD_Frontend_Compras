import { Link } from 'react-router-dom';
import { RiCheckboxBlankCircleFill, RiPlayFill } from 'react-icons/ri';
import { useAuthContext } from '../hooks';

const circleStyle = 'text-secondary-100 text-base absolute ';
const buttonStyle = {
	button:
		'w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl border border-secondary-100 hover:text-secondary-100 hover:transition-colors',
	link: 'bg-secondary text-primary p-4 rounded-full box-content',
};

export const Home = () => {
	const { permissions } = useAuthContext();
	return (
		<section id='home' className='min-h-[90vh] grid grid-cols-1 xl:grid-cols-8 text-white'>
			<div className='md:col-span-5 flex items-center justify-center p-8 xl:p-16'>
				{/* Info */}
				<div className='flex flex-col gap-8'>
					<h1 className='text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]'>
						Bienvenido al módulo de
						<span className='py-2 px-6 border-8 border-secondary-100 relative inline-block'>
							Compras
							<RiCheckboxBlankCircleFill
								className={circleStyle + '-left-5 -top-5 p-2 rounded-full box-content'}
							/>
							<RiCheckboxBlankCircleFill
								className={circleStyle + '-right-5 -top-5 p-2 rounded-full box-content'}
							/>
							<RiCheckboxBlankCircleFill
								className={circleStyle + '-right-5 -bottom-5 p-2 marker:rounded-full box-content'}
							/>
							<RiCheckboxBlankCircleFill
								className={circleStyle + '-left-5 -bottom-5 p-2 rounded-full box-content'}
							/>
						</span>
					</h1>
					<p className='text-gray-300 text-2xl leading-[2.5rem]'>
						El módulo de compras es un sistema que permite a los usuarios realizar compras de
						productos y servicios de manera fácil y rápida.
					</p>
					<div className='flex flex-col md:flex-row items-center gap-4'>
						<Link to='/compras' className={buttonStyle.button}>
							<RiPlayFill className={buttonStyle.link} />
							Visitar compras
						</Link>

						{permissions?.proveedores && (
							<Link to='/proveedores' className={buttonStyle.button}>
								<RiPlayFill className={buttonStyle.link} />
								Visitar provedores
							</Link>
						)}

						{permissions?.auditoria && (
							<Link to='/auditoria' className={buttonStyle.button}>
								<RiPlayFill className={buttonStyle.link} />
								Registro de auditoría
							</Link>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export * from './providers';
export * from './shopping';
export * from './audit';
