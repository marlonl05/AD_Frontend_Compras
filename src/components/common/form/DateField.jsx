import { useState } from 'react';
import PropTypes from 'prop-types';
import es from 'date-fns/locale/es';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateField.css';

export const DateField = ({
	register,
	defaultValue,
	nameValues = {},
	required = false,
	errorMessage,
}) => {
	const [date, setDate] = useState(defaultValue || new Date());

	return (
		<div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-8'>
			<div className='w-full md:w-2/6'>
				<p>
					{nameValues.label} {required && <span className='text-red-500'>*</span>}
				</p>
			</div>
			<div className='w-full md:w-4/6'>
				<ReactDatePicker
					className='outline-none rounded-md text-dark-200'
					locale={es}
					selected={date}
					onChange={date => setDate(date)}
					showIcon
				/>
				<div className='text-red-500 h-2 mt-1'>
					{errorMessage && <div className='animate-fade'>{errorMessage}</div>}
				</div>
				<input
					type='hidden'
					{...register(nameValues.input, {
						required: {
							value: required,
							message: `El ${nameValues.label?.toLowerCase()} es requerido.`,
						},
					})}
				/>
			</div>
		</div>
	);
};

DateField.propTypes = {
	register: PropTypes.func.isRequired,
	nameValues: PropTypes.shape({
		label: PropTypes.string.isRequired,
		input: PropTypes.string.isRequired,
	}),
	required: PropTypes.bool,
	errorMessage: PropTypes.string,
	defaultValue: PropTypes.string,
};
