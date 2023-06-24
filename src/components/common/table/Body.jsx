/* eslint-disable react/prop-types */
import { Tab } from '@headlessui/react';

export const Body = ({ children }) => {
	return <Tab.Panels>{children}</Tab.Panels>;
};
