/* eslint-disable react/prop-types */
import { RiCloseLine } from 'react-icons/ri';

export const DetailLayout = ({
	showDetail,
	toggleDetail,
	title = 'Detalle de la factura #34124',
	children,
}) => {
	return (
		<div
			className={`lg:col-span-2 bg-dark-200 fixed w-full h-full lg:right-0 lg:w-[400px] top-0 transition-all z-50 ${
				showDetail ? 'right-0' : '-right-full'
			}`}
		>
			<div className='relative text-gray-300 p-8 h-full'>
				<RiCloseLine
					className='lg:hidden absolute text-xl right-4 top-4 p-3 box-content bg-dark-200 rounded-full'
					onClick={toggleDetail}
				/>
				<h1 className='text-2xl mb-6 font-semibold'>{title}</h1>
				{children}
			</div>
		</div>
	);
};
