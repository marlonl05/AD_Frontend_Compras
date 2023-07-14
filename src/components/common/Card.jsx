/* eslint-disable react/prop-types */
export const Card = ({ children }) => {
	return (
		<div className='bg-dark-200 p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center'>
			{children}
		</div>
	);
};
