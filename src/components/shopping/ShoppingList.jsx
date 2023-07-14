/* eslint-disable react/prop-types */
import { RiEye2Fill } from 'react-icons/ri';
import { Button, Loading, TableHeader, TableRow } from '../common';
import { status } from '../../constants';
import { useProviderContext, useShoppingContext } from '../../hooks';
import { TableLayout } from '../../layout/table';

const shoppingLabels = {
	id: 'ID',
	proveedor_id: 'Proveedor',
	fecha_factura: 'Fecha de factura',
	tipo_pago: 'Tipo de pago',
	fecha_vencimiento: 'Fecha de vencimiento',
	total: 'Pago total',
};

const ShoppingTableRow = ({ shopping, labels }) => {
	const { handleSetCurrentShopping } = useShoppingContext();
	const { providerList } = useProviderContext();
	const provider = providerList[+shopping.proveedor_id];

	const updatedShopping = {
		...shopping,
		proveedor_id: provider?.nombre,
		total: `$ ${shopping.total}`,
	};

	return (
		<TableRow
			key={shopping.id}
			item={updatedShopping}
			itemLabels={labels}
			rowStyles='md:grid-cols-7'
			detailBtn={
				<Button onClick={() => handleSetCurrentShopping(shopping.id)}>
					<RiEye2Fill />
					Detalles
				</Button>
			}
		/>
	);
};

const Table = ({ items }) => {
	const labels = { ...shoppingLabels, detalles: 'Ver detalles' };

	return (
		<>
			<TableHeader labels={labels} columsStyle='md:grid-cols-7' />

			{items.map(shopping => (
				<ShoppingTableRow key={shopping.id} shopping={shopping} labels={labels} />
			))}
		</>
	);
};

export const ShoppingList = () => {
	const { state: providerState, providerList } = useProviderContext();
	const { state, shoppingList } = useShoppingContext();

	if (state === status.LOADING) return <Loading />;

	if (providerState === status.LOADING) return <Loading />;

	const customFilter = (items, pattern) =>
		items.filter(item => {
			const provider = providerList[+item?.proveedor_id];

			return provider?.nombre?.toLowerCase().includes(pattern?.toLowerCase());
		});

	return (
		<TableLayout
			items={(shoppingList && Object.values(shoppingList)) || []}
			itemsPerPage={5}
			inputPlaceholder='Buscar compras'
			Table={Table}
			customFilter={customFilter}
		/>
	);
};
