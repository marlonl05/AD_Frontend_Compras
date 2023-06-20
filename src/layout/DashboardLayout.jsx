/* eslint-disable react/prop-types */

export const DashboardLayout = ({ children }) => {
	return (
		<main className='lg:pl-36 pb-10 lg:pr-[400px]'>
			<div className='md:p-8 p-4'>{children}</div>
		</main>
	);
};
