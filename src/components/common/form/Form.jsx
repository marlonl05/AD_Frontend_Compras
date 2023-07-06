/* eslint-disable react/prop-types */
import { twMerge } from 'tailwind-merge';

const defaulStyles =
	'grid  md:grid-cols-2 gap-4 items-center p-4 md:px-0 md:pt-0 rounded-xl animate-fade';

export const Form = ({ formHeader, onSubmit, styles, headerStyles, children }) => {
	return (
		<div className='bg-dark-200 p-8 rounded-xl lg:block text-white'>
			<form onSubmit={onSubmit} className={twMerge(defaulStyles, styles)}>
				<div className={twMerge('md:col-span-2', headerStyles)}>
					{formHeader}
					<hr className='my-8 border-gray-500/30' />
				</div>
				{children}
			</form>
		</div>
	);
};
