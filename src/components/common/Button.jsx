/* eslint-disable react/prop-types */
import { twMerge } from 'tailwind-merge';

const defaultStyles =
	'bg-secondary-100 w-full py-2 px-4 rounded-lg font-semibold border border-secondary-100 flex items-center justify-center gap-1';

export const Button = ({ type = 'submit', className, ...props }) => (
	<button type={type} className={twMerge(defaultStyles, className)} {...props} />
);
