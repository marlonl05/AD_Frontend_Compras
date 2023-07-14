import { getNow } from '../../helpers';
import { useAuthContext } from '../../hooks';

export const Head = () => {
	const { user } = useAuthContext();

	return (
		<div className='flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center'>
			<div>
				<h1 className='text-2xl text-gray-300 capitalize'>{user?.name}</h1>
				<p className='text-gray-500'>{getNow()}</p>
			</div>
		</div>
	);
};
