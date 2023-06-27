/* eslint-disable react/prop-types */
export const Input = ({ Icon, register }) => {
	return (
		<div className='w-full relative'>
			<Icon className='text-gray-500 absolute top-1/2 -translate-y-1/2 left-4' />
			<input
				className='w-full bg-gray-100 py-2 pl-10 pr-4 rounded-lg outline-none'
				placeholder={register.name}
				{...register}
			/>
		</div>
	);
};
