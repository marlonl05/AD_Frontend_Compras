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

const Table = ({ items, pattern }) => {
	const { providerList, handleSetCurrentProvider } = useProviderContext();

	const solveProvider = providerId => {
		const provider = providerList[+providerId];

		if (!pattern) return provider;

		const isMatchWithPatter = Object.values(provider).some(value =>
			value.toString().toLowerCase().includes(pattern)
		);

		return isMatchWithPatter && provider;
	};

	return (
		<>
			<TableHeader
				labels={{ ...providerLabels, tipo_proveedor: null, detalles: 'Ver detalles' }}
				columsStyle='md:grid-cols-8'
			/>

			{items.map(providerId => (
				<TableRow
					key={+providerId}
					itemId={providerId}
					solveItem={solveProvider}
					itemLabels={providerLabels}
					rowStyles='md:grid-cols-8'
					detailBtn={
						<Button onClick={() => handleSetCurrentProvider(+providerId)}>
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
	const { providerListIds, state } = useProviderContext();

	if (state === status.LOADING) return <Loading />;

	return (
		<TableLayout
			items={providerListIds}
			itemsPerPage={8}
			inputPlaceholder='Buscar proveedores'
			Table={Table}
		/>
	);
};
