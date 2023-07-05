/* eslint-disable react/prop-types */
import { RiCloseLine } from 'react-icons/ri';

export const DetailSidebar = ({
	showDetail,
	showInLargeScreen = false,
	toggleDetail,
	title,
	header,
	footer,
	tableHeader,
	tableBody,
}) => {
	const isShowing = showDetail ? 'right-0' : '-right-full';
	const isShowingInLargeScreen = showInLargeScreen ? 'lg:right-0' : 'lg:-right-full';

	return (
		<div
			className={`lg:col-span-2 bg-dark-200 fixed
			w-full h-full lg:w-[400px] top-0 transition-all z-50
			${isShowing} ${isShowingInLargeScreen}`}
		>
			<div className='relative text-gray-300 p-8 h-full'>
				<RiCloseLine
					className='lg:hidden absolute text-xl right-4 top-4 p-3 box-content bg-dark-200 rounded-full'
					onClick={toggleDetail}
				/>
				<h1 className='text-2xl mb-6 font-semibold'>{title}</h1>

				{/* Detail header */}
				<div className='grid grid-cols-2 mb-4 p-4 border border-secondary-100 rounded-lg'>
					{header}
				</div>

				{/* Table */}
				<div className='h-full border border-secondary-100 rounded-lg'>
					<div className='grid grid-cols-4 mb-3 p-4 gap-3  border border-transparent border-b-secondary-100'>
						{tableHeader}
					</div>

					<div className='h-3/5 md:h-4/6 lg:h-3/5 overflow-y-auto'>{tableBody}</div>
				</div>

				{/* Detail footer */}
				<div className='absolute bottom-0 right-0 bg-dark-200 p-4 w-full lg:h-44'>{footer}</div>
			</div>
		</div>
	);
};
