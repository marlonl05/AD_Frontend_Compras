import { Tab } from '@headlessui/react';
import { ShoppingList } from '../../components/shopping';
import { TableWrapper } from '../../layout/table';
import { Body, Header } from '../../components/common';

const focusStyle =
	'relative py-2 pr-4 ui-selected:text-secondary-100 ui-selected:before:w-3/4 ui-selected:before: ui-selected:before:h-[2px] ui-selected:before:absolute ui-selected:before:bg-secondary-100 ui-selected:before:left-0 ui-selected:before:rounded-full ui-selected:before:-bottom-[1px] outline-none';

export const Shopping = () => {
	return (
		<TableWrapper
			header={
				<Header>
					<Tab className={focusStyle}>Listado de compras</Tab>
					<Tab className={focusStyle}>Agregar compra</Tab>
					<Tab className={focusStyle}>Editar compra</Tab>
				</Header>
			}
			body={
				<Body>
					<Tab.Panel>
						<ShoppingList />
					</Tab.Panel>
					<Tab.Panel>
						<h1>Agregar compra</h1>
					</Tab.Panel>
					<Tab.Panel>
						<h1>Editar compra</h1>
					</Tab.Panel>
				</Body>
			}
		/>
	);
};
