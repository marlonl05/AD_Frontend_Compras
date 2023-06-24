/* eslint-disable react/prop-types */
import { RiEyeFill, RiFileTextLine, RiPencilFill } from 'react-icons/ri';
import { Button, Card } from '../common';

const ProviderCard = ({
	title,
	alt = 'Provider',
	imgSrc = '/logo-carrito.jpg',
	city,
	email,
	onShowDetail,
	onEdit,
	onPrint,
}) => {
	return (
		<Card title={title} alt={alt} imgSrc={imgSrc}>
			<span className='text-gray-400'>{city}</span>
			<p className='text-gray-500 w-full truncate'>{email}</p>
			<div className='flex justify-center items-center gap-2 flex-row lg:flex-col xl:flex-row'>
				<Button
					className='bg-transparent hover:bg-secondary-100 transition-colors'
					onClick={onShowDetail}
				>
					<RiEyeFill />
				</Button>
				<Button
					className='bg-transparent hover:bg-secondary-100 transition-colors'
					onClick={onEdit}
				>
					<RiPencilFill />
				</Button>
				<Button
					className='bg-transparent hover:bg-secondary-100 transition-colors'
					onClick={onPrint}
				>
					<RiFileTextLine />
				</Button>
			</div>
		</Card>
	);
};

export const ProviderList = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-14'>
			<ProviderCard
				title='Ing. Juan Perez'
				alt='Hombre'
				city='Ecuador'
				email='test@test.com'
				onShowDetail={() => console.log('show provider')}
				onEdit={() => console.log('edit provider')}
				onPrint={() => console.log('print provider')}
			/>
			<ProviderCard
				title='Ing. Juan Perez'
				alt='Hombre'
				city='Ecuador'
				email='test@test.com'
				onShowDetail={() => console.log('show provider')}
				onEdit={() => console.log('edit provider')}
				onPrint={() => console.log('print provider')}
			/>
			<ProviderCard
				title='Ing. Juan Perez'
				alt='Hombre'
				city='Ecuador'
				email='test@test.com'
				onShowDetail={() => console.log('show provider')}
				onEdit={() => console.log('edit provider')}
				onPrint={() => console.log('print provider')}
			/>
		</div>
	);
};
