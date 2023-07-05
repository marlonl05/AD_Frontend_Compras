import { useState } from 'react';
import PropTypes from 'prop-types';
import es from 'date-fns/locale/es';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateField.css';
import { addDays, format, isValid, parseISO } from 'date-fns';
import { useShoppingContext } from '../../../hooks';

export const DateField = ({
	register,
	defaultValue,
	nameValues = {},
	required = false,
	handleValueOnChange,
	errorMessage,
}) => {
	const { handleShowMessage } = useShoppingContext();

	let defaultDate;

	if (defaultValue && isValid(defaultValue)) defaultDate = parseISO(defaultValue);

	const [date, setDate] = useState(defaultDate || addDays(new Date(), 1));

	const handleDate = date => {
		if (date <= new Date()) {
			handleShowMessage('La fecha debe ser mayor a la actual.', 'error');

			setTimeout(() => {
				handleShowMessage(null, 'error');
			}, 100);

			return;
		}

		setDate(date);
		handleValueOnChange(nameValues.input, format(date, 'yyyy-MM-dd'));
	};

	return (
		<div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-8'>
			<div className='w-full md:w-2/6'>
				<p className='truncate'>
					{nameValues.label} {required && <span className='text-red-500'>*</span>}
				</p>
			</div>
			<div className='w-full md:w-4/6'>
				<ReactDatePicker
					className='outline-none rounded-md text-dark-200'
					locale={es}
					selected={date}
					onChange={handleDate}
					dateFormat='dd-MM-yyyy'
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
	handleValueOnChange: PropTypes.func.isRequired,
	required: PropTypes.bool,
	errorMessage: PropTypes.string,
	defaultValue: PropTypes.string,
};
