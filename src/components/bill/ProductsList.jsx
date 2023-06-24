import { RiDeleteBin6Fill } from 'react-icons/ri';
import { Button } from '../common/Button';

export const ProductsList = () => {
	return (
		<>
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
						<Button className='px-2 text-sm w-auto bg-inherit'>
							<RiDeleteBin6Fill className='text-red-400' />
						</Button>
					</div>
				</div>
			</div>
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
						<Button className='px-2 text-sm w-auto bg-inherit'>
							<RiDeleteBin6Fill className='text-red-400' />
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};
