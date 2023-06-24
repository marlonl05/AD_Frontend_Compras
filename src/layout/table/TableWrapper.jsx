/* eslint-disable react/prop-types */
import { Tab } from '@headlessui/react';
import { Search } from '../../components/common';

export const TableWrapper = ({ header, body }) => {
	return (
		<Tab.Group>
			<header>
				<Search />
				{header}
			</header>

			{body}
		</Tab.Group>
	);
};
