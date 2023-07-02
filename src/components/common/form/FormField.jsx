import PropTypes from 'prop-types';
import { Input } from '..';

export const FormField = ({ Icon, register, nameValues = {}, inputConfig, errorMessage }) => {
	const required = !!inputConfig?.required;

	return (
		<div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-8'>
			<div className='w-full md:w-2/6'>
				<p>
					{nameValues.label} {required && <span className='text-red-500'>*</span>}
				</p>
			</div>
			<div className='flex-1 text-dark-200'>
				<Input
					Icon={Icon}
					placeholder={nameValues.label}
					className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
					register={register(nameValues.input, { ...inputConfig })}
				/>
				<div className='text-red-500 h-2 mt-1'>
					{errorMessage && <div className='animate-fade'>{errorMessage}</div>}
				</div>
			</div>
		</div>
	);
};

FormField.propTypes = {
	Icon: PropTypes.elementType.isRequired,
	register: PropTypes.func.isRequired,
	nameValues: PropTypes.shape({
		label: PropTypes.string.isRequired,
		input: PropTypes.string.isRequired,
	}),
	inputConfig: PropTypes.object.isRequired,
	errorMessage: PropTypes.string,
};
