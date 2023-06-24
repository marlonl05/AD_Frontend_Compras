/* eslint-disable react/prop-types */
import { RiBillFill, RiHome6Line, RiLogoutCircleRLine, RiTeamFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CustomLink = ({ to = '/', children }) => {
	return (
		<li className='hover:bg-dark-100 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
			<Link
				to={to}
				className='group-hover:bg-secondary-100 p-4 flex justify-center rounded-xl text-secondary-100 group-hover:text-white transition-colors'
			>
				{children}
			</Link>
		</li>
	);
};

export default function Sidebar({ showMenu }) {
	return (
		<div
			className={`bg-dark-200 fixed top-0 w-36 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 lg:left-0 ${
				showMenu ? 'left-0' : '-left-full'
			} transition-all`}
		>
			<div>
				<ul className='pl-4'>
					<li>
						<h1 className='text-2xl text-gray-300 uppercase font-bold text-start my-5'>compras</h1>
					</li>

					<CustomLink to='/'>
						<RiHome6Line className='text-2xl' />
					</CustomLink>
					<CustomLink to='/compras'>
						<RiBillFill className='text-2xl' />
					</CustomLink>
					<CustomLink to='/proveedores'>
						<RiTeamFill className='text-2xl' />
					</CustomLink>
				</ul>
			</div>

			<div>
				<ul className='pl-4'>
					<CustomLink to='/logout'>
						<RiLogoutCircleRLine className='text-2xl' />
					</CustomLink>
				</ul>
			</div>
		</div>
	);
}
