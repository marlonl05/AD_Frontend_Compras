import { Tab } from '@headlessui/react';
import { Search } from '../../components/common';
import { ShoppingList } from '../../components/shopping';

const focusStyle =
	'relative py-2 pr-4 ui-selected:before:w-3/4 ui-selected:before: ui-selected:before:h-[2px] ui-selected:before:absolute ui-selected:before:bg-secondary-100 ui-selected:before:left-0 ui-selected:before:rounded-full ui-selected:before:-bottom-[1px] outline-none';

export const Shopping = () => {
	return (
		<Tab.Group>
			<header>
				<Search />
				<Tab.List className='text-secondary-100 flex items-center justify-between md:justify-start md:gap-10 border-b mb-6'>
					<Tab className={focusStyle}>Listado de compras</Tab>
					<Tab className={focusStyle}>Agregar compra</Tab>
					<Tab className={focusStyle}>Editar compra</Tab>
				</Tab.List>
			</header>

			<Tab.Panels>
				<Tab.Panel>
					<ShoppingList />
				</Tab.Panel>
				<Tab.Panel>
					<h1>Agregar compra</h1>
				</Tab.Panel>
				<Tab.Panel>
					<h1>Editar compra</h1>
				</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	);
};
