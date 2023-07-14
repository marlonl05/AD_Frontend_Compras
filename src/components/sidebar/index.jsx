/* eslint-disable react/prop-types */
import {
	RiAuctionFill,
	RiBillFill,
	RiHome6Line,
	RiLogoutCircleRLine,
	RiTeamFill,
} from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../common';
import { useAuthContext } from '../../hooks';

const links = {
	home: '/',
	bills: '/compras',
	providers: '/proveedores',
	audit: '/auditoria',
};

const CustomLink = ({ to = '/', isActive = false, children }) => {
	return (
		<li
			className={`hover:bg-dark-100 p-4 rounded-tl-xl rounded-bl-xl group transition-colors ${
				isActive && 'bg-dark-100'
			}`}
		>
			<Link
				to={to}
				className={`group-hover:bg-secondary-100 p-4 flex justify-center rounded-xl text-secondary-100 group-hover:text-white transition-colors ${
					isActive && 'bg-secondary-100 text-white'
				}`}
			>
				{children}
			</Link>
		</li>
	);
};

export default function Sidebar({ showMenu }) {
	const { handleLogout } = useAuthContext();

	const { pathname } = useLocation();

	return (
		<div
			className={`bg-dark-200 fixed top-0 w-36 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 xl:left-0 ${
				showMenu ? 'left-0' : '-left-full'
			} transition-all`}
		>
			<div>
				<ul className='pl-4'>
					<li>
						<h1 className='text-2xl text-gray-300 uppercase font-bold text-start my-5'>compras</h1>
					</li>

					<CustomLink to={links.home}>
						<RiHome6Line className='text-2xl' />
					</CustomLink>
					<CustomLink to={links.bills} isActive={pathname.includes(links.bills)}>
						<RiBillFill className='text-2xl' />
					</CustomLink>
					<CustomLink to={links.providers} isActive={pathname.includes(links.providers)}>
						<RiTeamFill className='text-2xl' />
					</CustomLink>
					<CustomLink to={links.audit} isActive={pathname.includes(links.audit)}>
						<RiAuctionFill className='text-2xl' />
					</CustomLink>
				</ul>
			</div>

			<div>
				<ul className='pl-4'>
					<li className='hover:bg-dark-100 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
						<Button
							className='group-hover:bg-secondary-100 bg-inherit text-secondary-100 p-4 group-hover:text-white transition-colors border-none'
							onClick={handleLogout}
						>
							<RiLogoutCircleRLine className='text-2xl' />
						</Button>
					</li>
				</ul>
			</div>
		</div>
	);
}
