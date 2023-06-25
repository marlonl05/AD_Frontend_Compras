/* eslint-disable react/prop-types */
import { RiEyeFill, RiFileTextLine, RiPencilFill } from 'react-icons/ri';
import { Button, Card, Loading } from '../common';
import { status } from '../../constants';
import { useShoppingContext } from '../../hooks';

const ShoppingCard = ({ shoppingId }) => {
	const { shoppingList, handleEditShopping, handlePrintShopping, handleShowShopping } =
		useShoppingContext();

	const shopping = shoppingList[shoppingId];

	return (
		<Card
			title={shopping?.title || 'Compra #' + shoppingId}
			alt='Abastos'
			imgSrc={shopping?.imgSrc || '/logo-carrito.jpg'}
		>
			<span className='text-gray-400'>$ {shopping?.total}</span>
			<p className='text-gray-500'>{shopping?.fecha_factura}</p>
			<div className='flex justify-center items-center gap-2 flex-row lg:flex-col xl:flex-row'>
				<Button
					className='bg-transparent hover:bg-secondary-100 transition-colors'
					onClick={() => handleShowShopping(shoppingId)}
				>
					<RiEyeFill />
				</Button>
				<Button
					className='bg-transparent hover:bg-secondary-100 transition-colors'
					onClick={handleEditShopping}
				>
					<RiPencilFill />
				</Button>
				<Button
					className='bg-transparent hover:bg-secondary-100 transition-colors'
					onClick={handlePrintShopping}
				>
					<RiFileTextLine />
				</Button>
			</div>
		</Card>
	);
};

export const ShoppingList = () => {
	const { state, shoppingListIds } = useShoppingContext();

	if (state === status.LOADING) return <Loading />;

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-14 animate-fade'>
			{shoppingListIds.map(id => (
				<ShoppingCard key={id} shoppingId={id} />
			))}
		</div>
	);
};
