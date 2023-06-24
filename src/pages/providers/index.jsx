import { Tab } from '@headlessui/react';
import { Body, Header } from '../../components/common';
import { TableWrapper } from '../../layout/table';

const focusStyle =
	'relative py-2 pr-4 ui-selected:text-secondary-100 ui-selected:before:w-3/4 ui-selected:before: ui-selected:before:h-[2px] ui-selected:before:absolute ui-selected:before:bg-secondary-100 ui-selected:before:left-0 ui-selected:before:rounded-full ui-selected:before:-bottom-[1px] outline-none';

export const Providers = () => {
	return (
		<TableWrapper
			header={
				<Header>
					<Tab className={focusStyle}>Listado de proveedores</Tab>
					<Tab className={focusStyle}>Agregar proveedor</Tab>
					<Tab className={focusStyle}>Detalles del proveedor</Tab>
					<Tab className={focusStyle} disabled onClick={() => console.log('Selecting edit')}>
						Editar proveedor
					</Tab>
				</Header>
			}
			body={
				<Body>
					<Tab.Panel>
						<h1>Listado de proveedores</h1>
					</Tab.Panel>
					<Tab.Panel>
						<h1>Agregar proveedor</h1>
					</Tab.Panel>
					<Tab.Panel>
						<h1>Detalles proveedor</h1>
					</Tab.Panel>
					<Tab.Panel>
						<h1>Editar proveedor</h1>
					</Tab.Panel>
				</Body>
			}
		/>
	);
};
