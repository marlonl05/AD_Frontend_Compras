import { Tab } from '@headlessui/react';
import { Body, Header } from '../../components/common';
import { TableWrapper } from '../../layout/table';
import { ProviderForm, ProviderList } from '../../components/providers';
import { useProviderContext } from '../../hooks';

const focusStyle =
	'relative py-2 pr-4 ui-selected:text-secondary-100 ui-selected:before:w-3/4 ui-selected:before: ui-selected:before:h-[2px] ui-selected:before:absolute ui-selected:before:bg-secondary-100 ui-selected:before:left-0 ui-selected:before:rounded-full ui-selected:before:-bottom-[1px] outline-none';

export const Providers = () => {
	const { currentProvider, providerList, defaultTabIndex, handleTabIndex } = useProviderContext();

	return (
		<TableWrapper
			defaultIndex={defaultTabIndex}
			handleTabIndex={handleTabIndex}
			header={
				<Header>
					<Tab className={focusStyle}>Listado de proveedores</Tab>
					<Tab className={focusStyle}>Gestionar proveedores</Tab>
				</Header>
			}
			body={
				<Body>
					<Tab.Panel>
						<ProviderList />
					</Tab.Panel>
					<Tab.Panel>
						<ProviderForm provider={currentProvider && providerList[+currentProvider]} />
					</Tab.Panel>
				</Body>
			}
		/>
	);
};
