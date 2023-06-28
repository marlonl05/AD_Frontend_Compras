/* eslint-disable react/prop-types */
import { Tab } from '@headlessui/react';
import { Search } from '../../components/common';

export const TableWrapper = ({ defaultIndex, handleTabIndex, header, body }) => {
	return (
		<Tab.Group selectedIndex={defaultIndex} onChange={handleTabIndex}>
			<header>
				<Search />
				{header}
			</header>

			{body}
		</Tab.Group>
	);
};
