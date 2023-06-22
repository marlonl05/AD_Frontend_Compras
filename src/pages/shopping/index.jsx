import { Tab } from '@headlessui/react';
import { Search } from '../../components/common';
import { ShoppingList } from '../../components/shopping';

export const Shopping = () => {
	return (
		<Tab.Group>
			<header>
				<Search />
				<Tab.List className='text-gray-300 flex items-center justify-between md:justify-start md:gap-10 border-b mb-6'>
					<Tab className='relative py-2 pr-4 ui-selected:before:w-1/2 ui-selected:before:h-[2px] ui-selected:before:absolute ui-selected:before:bg-[#EC7C6A] ui-selected:before:left-0 ui-selected:before:rounded-full ui-selected:before:-bottom-[1px] text-[#EC7C6A] outline-none'>
						Listado de compras
					</Tab>
					<Tab className='relative py-2 pr-4 ui-selected:before:w-1/2 ui-selected:before:h-[2px] ui-selected:before:absolute ui-selected:before:bg-[#EC7C6A] ui-selected:before:left-0 ui-selected:before:rounded-full ui-selected:before:-bottom-[1px] outline-none'>
						Agregar compra
					</Tab>
					<Tab className='py-2 pr-4  outline-none'>Editar compra</Tab>
				</Tab.List>
				{/* <hr className='mb-4' /> */}
			</header>
			{/* Title content */}
			{/* <div className='flex items-center justify-between mb-16'>
				<h2 className='text-xl text-gray-300'>Listado de compras</h2>
				<button className='flex items-center gap-5 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
					<RiArrowDownSLine />
					Dine in
				</button>
			</div> */}
			<Tab.Panels>
				<Tab.Panel>
					<ShoppingList />
				</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	);
};
