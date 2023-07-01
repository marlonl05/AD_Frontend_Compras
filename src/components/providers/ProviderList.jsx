/* eslint-disable react/prop-types */
import { Button, Loading, TableHeader, TableRow } from '../common';
import { useProviderContext } from '../../hooks';
import { status } from '../../constants';
import { TableLayout } from '../../layout/table';
import { RiEye2Fill } from 'react-icons/ri';

const providerLabels = {
	documento_identificacion: 'DNI',
	nombre: 'Nombre',
	ciudad: 'Ciudad',
	email: 'Email',
	direccion: 'Dirección',
	telefono: 'Teléfono',
	estado: 'Estado',
	tipo_proveedor: 'Tipo',
};

const Table = ({ items }) => {
	const { handleSetCurrentProvider } = useProviderContext();

	return (
		<>
			<TableHeader
				labels={{ ...providerLabels, tipo_proveedor: null, detalles: 'Ver detalles' }}
				columsStyle='md:grid-cols-8'
			/>

			{items.map(provider => (
				<TableRow
					key={+provider.id}
					item={provider}
					itemLabels={providerLabels}
					rowStyles='md:grid-cols-8'
					detailBtn={
						<Button onClick={() => handleSetCurrentProvider(+provider.id)}>
							<RiEye2Fill />
							Detalles
						</Button>
					}
				/>
			))}
		</>
	);
};

export const ProviderList = () => {
	const { providerList, state } = useProviderContext();

	if (state === status.LOADING) return <Loading />;

	return (
		<TableLayout
			items={(providerList && Object.values(providerList)) || []}
			itemsPerPage={8}
			inputPlaceholder='Buscar proveedores'
			Table={Table}
		/>
	);
};
