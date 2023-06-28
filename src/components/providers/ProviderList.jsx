/* eslint-disable react/prop-types */
import { RiEyeFill, RiFileTextLine, RiPencilFill } from 'react-icons/ri';
import { Button, Card, Loading } from '../common';
import { useProviderContext } from '../../hooks';
import { status } from '../../constants';

const ProviderCard = ({ providerId }) => {
	const { providerList, handleShowProvider, handleShowEditProvider, handlePrintProvider } =
		useProviderContext();

	const provider = providerList[providerId];

	return (
		<Card
			title={provider.nombre}
			alt='Proveedor'
			imgSrc={provider?.imgSrc || '/logo-proveedor.png'}
		>
			<span className='text-gray-400'>{provider.cuidad}</span>
			<p className='text-gray-500 w-full truncate'>{provider.email}</p>
			<div className='flex justify-center items-center gap-2 flex-row lg:flex-col xl:flex-row'>
				<Button
					className='bg-transparent hover:bg-secondary-100 transition-colors'
					onClick={handleShowProvider}
				>
					<RiEyeFill />
				</Button>
				<Button
					className='bg-transparent hover:bg-secondary-100 transition-colors'
					onClick={() => handleShowEditProvider(providerId)}
				>
					<RiPencilFill />
				</Button>
				<Button
					className='bg-transparent hover:bg-secondary-100 transition-colors'
					onClick={handlePrintProvider}
				>
					<RiFileTextLine />
				</Button>
			</div>
		</Card>
	);
};

export const ProviderList = () => {
	const { providerListIds, state } = useProviderContext();

	if (state === status.LOADING) return <Loading />;

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-14 animate-fade'>
			{providerListIds.map(id => (
				<ProviderCard key={id} providerId={id} />
			))}
		</div>
	);
};
