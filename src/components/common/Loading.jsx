/* eslint-disable react/prop-types */
import { Ring } from '@uiball/loaders';
import { twMerge } from 'tailwind-merge';

const defaultClass = 'md:col-span-2 flex items-center justify-center';

export const Loading = ({ className = '', size, color }) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 mb-4 p-4 rounded-xl animate-fade border-2 md:border-none'>
			<div className={twMerge(defaultClass, className)}>
				<Ring size={size || 50} color={color || '#fff'} />
			</div>
		</div>
	);
};
