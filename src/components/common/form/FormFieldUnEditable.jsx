/* eslint-disable react/prop-types */
export const FormFieldUnEditable = ({ Icon, nameValues, required }) => {
	return (
		<div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-8 '>
			<div className='w-full md:w-2/6'>
				<p>
					{nameValues?.label} {required && <span className='text-red-500'>*</span>}
				</p>
			</div>
			<div className='flex flex-col w-full md:w-4/6'>
				<div className='flex-1 text-dark-200'>
					<div className='w-full relative'>
						{Icon && <Icon className='text-gray-800 absolute top-1/2 -translate-y-1/2 left-4' />}
						<input
							className='w-full bg-gray-100 py-2 pl-10 pr-4 rounded-lg outline-none'
							defaultValue={nameValues?.input}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
