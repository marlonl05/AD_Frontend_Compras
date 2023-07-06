import PropTypes from 'prop-types';

export const ProviderCard = ({ provider }) => {
	return (
		<div className='flex flex-col md:flex-row md:col-span-2 lg2:col-span-1 2xl:col-span-2 gap-2 animate-fade'>
			<div className='grid md:grid-cols-4 lg2:grid-cols-2 2xl:grid-cols-4 w-full'>
				<h3 className='md:col-span-4 lg2:col-span-2 2xl:col-span-4 font-semibold text-secondary-100 uppercase text-lg border-b border-secondary-100 mb-2'>
					Detalles del proveedor
				</h3>
				<p className='truncate'>
					<span className='font-bold'>Nombre: </span>
					{provider?.nombre}
				</p>
				<p className='truncate'>
					<span className='font-bold'>DNI: </span>
					{provider?.documento_identificacion}
				</p>
				<p className='truncate'>
					<span className='font-bold'>Teléfono: </span>
					{provider?.telefono}
				</p>
				<p className='truncate'>
					<span className='font-bold'>Email: </span>
					{provider?.email}
				</p>
				<p className='truncate'>
					<span className='font-bold'>Dirección: </span>
					{provider?.direccion}
				</p>
				<p className='capitalize'>
					<span className='font-bold'>Estado: </span>
					{provider?.estado?.toLowerCase()}
				</p>
				<p className='capitalize'>
					<span className='font-bold'>Tipo proveedor: </span>
					{provider?.tipo_proveedor?.toLowerCase()}
				</p>
			</div>
		</div>
	);
};

ProviderCard.propTypes = {
	provider: PropTypes.object.isRequired,
};
