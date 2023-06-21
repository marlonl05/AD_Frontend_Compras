/* eslint-disable react/prop-types */

export const Button = ({ type = 'submit', className, ...props }) => {
	return (
		<button
			type={type}
			className={`bg-secondary-100 w-full py-2 px-4 rounded-lg font-semibold border border-secondary-100 ${className}`}
			{...props}
		/>
	);
};
