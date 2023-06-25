import { RiSearch2Line } from 'react-icons/ri';
import { getNow } from '../../helpers';

export const Search = () => {
	return (
		<div className='flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center'>
			<div>
				<h1 className='text-2xl text-gray-300'>Luis Perugachi</h1>
				<p className='text-gray-500'>{getNow()}</p>
			</div>
			<form>
				<div className='w-full relative'>
					<RiSearch2Line className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-300' />
					<input
						type='text'
						className='w-full py-2 pl-10 pr-4 outline-none bg-dark-200 rounded-lg text-gray-300'
						placeholder='Buscar'
					/>
				</div>
			</form>
		</div>
	);
};
