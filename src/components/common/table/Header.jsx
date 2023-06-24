/* eslint-disable react/prop-types */
import { Tab } from '@headlessui/react';

const defaulStyle =
	'text-gray-100 flex items-center justify-between md:justify-start md:gap-10 border-b mb-6';

export const Header = ({ style = defaulStyle, children }) => {
	return <Tab.List className={style}>{children}</Tab.List>;
};
