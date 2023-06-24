/* eslint-disable react/prop-types */
import { RiEyeFill, RiFileTextLine, RiPencilFill } from 'react-icons/ri';
import { Button, Card } from '../common';

const ShoppingCard = ({
	title,
	alt,
	imgSrc = '/logo-carrito.jpg',
	price,
	date,
	onShowDetail,
	onEdit,
	onPrint,
}) => {
	return (
		<Card title={title} alt={alt} imgSrc={imgSrc}>
			<span className='text-gray-400'>$ {price}</span>
			<p className='text-gray-500'>{date}</p>
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

export const ShoppingList = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-14'>
			<ShoppingCard
				title='Compra de abastos'
				alt='Abastos'
				price={2.34}
				date='20/07/2023'
				onShowDetail={() => console.log('show shopping')}
				onEdit={() => console.log('edit shopping')}
				onPrint={() => console.log('print shopping')}
			/>
			<ShoppingCard
				title='Compra de abastos'
				alt='Abastos'
				price={2.34}
				date='20/07/2023'
				onShowDetail={() => console.log('show shopping')}
				onEdit={() => console.log('edit shopping')}
				onPrint={() => console.log('print shopping')}
			/>
			<ShoppingCard
				title='Compra de abastos'
				alt='Abastos'
				price={2.34}
				date='20/07/2023'
				onShowDetail={() => console.log('show shopping')}
				onEdit={() => console.log('edit shopping')}
				onPrint={() => console.log('print shopping')}
			/>
			<ShoppingCard
				title='Compra de abastos'
				alt='Abastos'
				price={2.34}
				date='20/07/2023'
				onShowDetail={() => console.log('show shopping')}
				onEdit={() => console.log('edit shopping')}
				onPrint={() => console.log('print shopping')}
			/>
		</div>
	);
};
