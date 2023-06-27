import { stringNormalizer } from '../../helpers';

/* eslint-disable react/prop-types */
export const SelectField = ({ register, name, required, selectList }) => {
	const validName = stringNormalizer(name);

	return (
		<div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-8'>
			<div className='w-full md:w-1/5'>
				<p>
					{name} {required && <span className='text-red-500'>*</span>}
				</p>
			</div>
			<div className='flex-1 text-dark-200'>
				<select
					className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none'
					{...register(validName, { required })}
				>
					{selectList.map((item, index) => (
						<option key={index} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};
