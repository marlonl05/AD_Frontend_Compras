import { getNow } from '../../helpers';

export const Head = () => {
	return (
		<div className='flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center'>
			<div>
				<h1 className='text-2xl text-gray-300'>Luis Perugachi</h1>
				<p className='text-gray-500'>{getNow()}</p>
			</div>
		</div>
	);
};
