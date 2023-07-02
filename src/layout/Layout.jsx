/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { RiAddLine, RiCloseLine, RiMenu3Fill, RiPieChartLine, RiUser3Line } from 'react-icons/ri';
import Sidebar from '../components/sidebar';
import { BillSidebar } from '../components/bill';
import { useShoppingContext } from '../hooks';

export const Layout = ({ children }) => {
	const { defaultTabIndex } = useShoppingContext();
	const [index, setIndex] = useState(0);
	const { pathname } = useLocation();

	const showBillDetails = pathname.includes('compras') && defaultTabIndex === 1;

	const handleShowMenu = newIndex => setIndex(newIndex === index ? 0 : newIndex);

	return (
		<>
			<Sidebar showMenu={index === 3} />
			{/* Detalle facturas */}
			<BillSidebar showBill={showBillDetails} />

			{/* Menu movil */}
			<nav className='bg-dark-100 lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
				<button className='p-2'>
					<RiUser3Line />
				</button>
				<button className='p-2'>
					<RiAddLine />
				</button>
				<button className='p-2' onClick={() => handleShowMenu(3)}>
					<RiPieChartLine />
				</button>
				<button className='text-white p-2' onClick={() => handleShowMenu(4)}>
					{index === 4 ? <RiCloseLine /> : <RiMenu3Fill />}
				</button>
			</nav>
			<main className={'lg:pl-36 pb-10 ' + (showBillDetails && 'lg:pr-[400px]')}>
				<div className='md:p-8 p-4'>{children || <Outlet />}</div>
			</main>
		</>
	);
};
