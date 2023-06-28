/* eslint-disable react/prop-types */
import { stringNormalizer } from '../../helpers';
import { Input } from './';

export const FormField = ({ Icon, register, name, inputConfig, errorMessage }) => {
	const validName = stringNormalizer(name);

	const required = !!inputConfig?.required;

	return (
		<div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-8'>
			<div className='w-full md:w-1/4'>
				<p>
					{name} {required && <span className='text-red-500'>*</span>}
				</p>
			</div>
			<div className='flex-1 text-dark-200'>
				<Input
					Icon={Icon}
					name={name}
					className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
					register={register(validName, { ...inputConfig })}
				/>
				<div className='text-red-500 h-2 mt-1'>
					{errorMessage && <div className='animate-fade'>{errorMessage}</div>}
				</div>
			</div>
		</div>
	);
};
